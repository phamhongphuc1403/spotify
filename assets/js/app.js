const $ = document.querySelector.bind(document)
const songImg = $('#root__now-playing__song__img')
const songName = $('#root__now-playing__song__info__name')
const songArtist = $('#root__now-playing__song__info__artist')
const audio = $('#audio')
const playBtn = $('.player-control-play-pause')
const playbackSlider = $('#root__now-playing__player-control__playback-bar__range-slider')
const timeTotal = $('#root__now-playing__speed-control__playback-bar__minutes-total')
const timePlayed = $('#root__now-playing__player-control__playback-bar__minutes-played')
const nextBtn = $('.next')
const prevBtn = $('.prev')
const shuffleBtn = $('.shuffle')
const repeatBtn = $('.repeat')
const currentPlaylists = $('#root__main-view__currently-playing__playlists')
const volumeBar = $('#root__now-playing__media-control__volume-bar')
const volumeSlider = $('#root__now-playing__media-control__volume-bar__range-slider')
const volumeBtn = $('.volume-btn')
const mainView = $('#root__main-view')
const rootTop = $('#root__top-container')
const nowPlaying = $('#root__now-playing')
const friendsIcon = $('#responsive-friends')
const friendsBar = $('#root__right-sidebar')
const playlistPage = $('#on-open-playlist')
const homeBtn = $('#root__left-sidebar__navigation__home')
const queuePage = $('#queue')
const playlistsSections = $('#sections')


const app = {
  playSongs: { 
    songs: [...allPlaylists.filter(playlist => playlist.tag.includes('liked songs'))[0].songs],
    id: allPlaylists.filter(playlist => playlist.tag.includes('liked songs'))[0].id,
    currentIndex: 0,
    isPlaying: false,
    isShuffle: false,
    isRepeatSong: false,
    isRepeatPlaylist: false,
    isMute: false,
    isSeeking: false,
  
    loadCurrentSong: function() {
      songImg.src = `${this.songs[this.currentIndex].img}`
      songName.innerHTML = `${this.songs[this.currentIndex].name}`
      songArtist.innerHTML = `${this.songs[this.currentIndex].artist.join(', ')}`
      audio.src = `${this.songs[this.currentIndex].path}`
      this.changeNowPlayingColor()

      const currentPlaylist = allPlaylists.filter(playlist => playlist.id == this.id)[0]
      if (currentPlaylist != undefined) {
        $('#root__now-playing__header__playlist').innerHTML = `${allPlaylists.filter(playlist => playlist.id == this.id)[0].name}`
      } else {
        $('#root__now-playing__header__playlist').innerHTML = `${this.songs[this.currentIndex].album}`
      }
    },
  
    changeNowPlayingColor: function() {
      if (window.outerWidth > 999) {
        nowPlaying.style.backgroundColor = '#181818'
        nowPlaying.style.backgroundImage = ''
      } else {
        nowPlaying.style.backgroundColor = `${this.songs[this.currentIndex].backgroundColor}`
        nowPlaying.style.backgroundImage = `-webkit-linear-gradient(${this.songs[this.currentIndex].backgroundColor} 90%, #181818)`
        nowPlaying.style.backgroundImage = `-moz-linear-gradient(${this.songs[this.currentIndex].backgroundColor} 90%, #181818)`
        nowPlaying.style.backgroundImage = `-o-linear-gradient(${this.songs[this.currentIndex].backgroundColor} 90%, #181818)`
        nowPlaying.style.backgroundImage = `linear-gradient(${this.songs[this.currentIndex].backgroundColor} 90%, #181818)`
      }
    },
  
    handleTotalTime: function() {
      audio.onloadedmetadata = function() {
        playbackSlider.max = audio.duration
        const songDuration = Math.round(audio.duration)
        const minutes = Math.floor(songDuration / 60)
        const seconds = songDuration - minutes * 60
  
        //make the 'second' part always has 2 digits
        seconds < 10 ? timeTotal.innerHTML = `${minutes}:0${songDuration - minutes * 60}` : timeTotal.innerHTML = `${minutes}:${songDuration - minutes * 60}`
      }
    }, 
  
    handleTimePlayed: function(value = Math.round(audio.currentTime)) {     //make 'time played' depend whether on the song or dragged by user
      const currentTimeCount = value
        let currentMinute = Math.floor(currentTimeCount / 60)
        let currentSecond = currentTimeCount - currentMinute * 60
  
        //make the 'second' part always has 2 digits
        currentSecond < 10 ? timePlayed.innerHTML = `${currentMinute}:0${currentSecond}`: timePlayed.innerHTML = `${currentMinute}:${currentSecond}`
    },
  
      //handle when the song is playing
    audioPlaying: function(color = '#b3b3b3') {
      const _this = this
    
      audio.ontimeupdate = function() {

        //update time played when the song is playing
        if (_this.isSeeking == false) {
          _this.handleTimePlayed()
     
           //handle slider track color when the song is playing
          playbackSlider.value = audio.currentTime
          let thumbValue = playbackSlider.value / playbackSlider.max *100
          playbackSlider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
        }
      }                          
    }, 
  
    handleNextSong: function() {
      this.currentIndex += 1
      this.loadCurrentSong()
      audio.autoplay = true
      playBtn.src = `./assets/images/now-playing/pause.png`  //prevent glitch when the next song is loading
    },
  
  
    handlePlaybackSliderBar: function() {   
      const _this = this

      //handle slider thumb when drag or click
      playbackSlider.oninput = function() {
        _this.isSeeking = true
        _this.handleTimePlayed(playbackSlider.value)
        let thumbValue = playbackSlider.value / playbackSlider.max *100
        playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
  
      }
      playbackSlider.onchange = function() {
        _this.isSeeking = false
        _this.handleTimePlayed(playbackSlider.value)        
        audio.currentTime = playbackSlider.value;      
      }
  
      playbackSlider.onclick = function(e) {e.stopPropagation()}
  
      //handle color of the slider track
      playbackSlider.onmouseenter = function() {
  
        //add new css file to change the slider thumb when hover
        const head = document.querySelector('head')
        const link = document.createElement('link')
        link.setAttribute('rel',"stylesheet")
        link.setAttribute('href',"./assets/css/playbackSlider.css")
        link.setAttribute('id',"slidercss")
        head.appendChild(link)
  
        //change the color of slider track when hover
        _this.audioPlaying('#1db954')
        let thumbValue = playbackSlider.value / playbackSlider.max *100
        playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
      }
  
      playbackSlider.onmouseleave = function() {
  
        //remove 'change slider thumb' css file
        const sliderHover = document.getElementById('slidercss')
        sliderHover.remove()
  
        //change slider track color to default
        _this.audioPlaying()
        let thumbValue = playbackSlider.value / playbackSlider.max *100
        playbackSlider.style.background = 'linear-gradient(to right,#b3b3b3 0%, #b3b3b3 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
      }
  
    },
  
    handleVolumeSliderBar: function() {
      let thumbValue = volumeSlider.value / volumeSlider.max * 100
      volumeSlider.style.background = `linear-gradient(to right, #b3b3b3 0%, #b3b3b3 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
      
      
      const previousVolume = []
      volumeBtn.onclick = function() {      
        if (volumeSlider.value != 0) {
          previousVolume.shift()
          previousVolume.push(volumeSlider.value)
          volumeSlider.value = 0
          audio.volume = 0
          volumeSlider.style.background = `#1db954`
          setTimeout(volumeSlider.oninput());
          handleVolumeBtn()
        } else {
          volumeSlider.value = previousVolume[previousVolume.length - 1]
          let thumbValue = volumeSlider.value / volumeSlider.max *100
          volumeSlider.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
          audio.volume = volumeSlider.value / 100
          handleVolumeBtn()
        }
      }
      
      //handle slider thumb when drag or click
      volumeSlider.oninput = function() {
        let thumbValue = volumeSlider.value / volumeSlider.max *100
        volumeSlider.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
        audio.volume = volumeSlider.value / 100
        handleVolumeBtn()
      }    
  
      function handleVolumeBtn() {
        const volumeBtn = $('.volume-btn')
        if (volumeSlider.value == 0) {
          volumeBtn.src='./assets/images/now-playing/volume-mute.PNG'
        } else if (volumeSlider.value <= 30) {
          volumeBtn.src='./assets/images/now-playing/volume-small.PNG'
        } else if (volumeSlider.value <= 60) {
          volumeBtn.src='./assets/images/now-playing/volume-medium.PNG'
        } else {
          volumeBtn.src='./assets/images/now-playing/volume-big.PNG'
        }
      }
  
      //handle slider tracks color
      volumeBar.onmouseenter = function() {
  
        //add new css file to change the slider thumb when hover
        const head = document.querySelector('head')
        const link = document.createElement('link')
        link.setAttribute('rel',"stylesheet")
        link.setAttribute('href',"./assets/css/volumeSlider.css")
        link.setAttribute('id',"slidercss")
        head.appendChild(link)
  
        //change the color of the slider track when hover
        let thumbValue = volumeSlider.value / volumeSlider.max * 100
        volumeSlider.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
  
        volumeBtn.style.opacity = 1
      }
  
      volumeBar.onmouseleave = function() {
  
        //remove 'change slider thumb' css file
        const sliderHover = document.getElementById('slidercss')
        sliderHover.remove()
  
        //change the color of slider track to default
        let thumbValue = volumeSlider.value / volumeSlider.max * 100
        volumeSlider.style.background = `linear-gradient(to right, #b3b3b3 0%, #b3b3b3 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
  
        volumeBtn.style.opacity = 0.6
      }
    },
  
    handleShuffle: {
      shuffle: function() {
        app.playSongs.isShuffle = true
  
        //random order of other songs (except listening song)
        app.playSongs.songs.forEach(obj => {obj.shuffledOrder =  Math.floor(Math.random() * (app.playSongs.songs.length - 1)) + 1})
        app.playSongs.songs[app.playSongs.currentIndex].shuffledOrder = 0
  
        //sort songs by order
        app.playSongs.songs.sort((a,b) => a.shuffledOrder - b.shuffledOrder)
        app.playSongs.currentIndex = 0
        //add active shuffle button
        shuffleBtn.src = './assets/images/now-playing/shuffle-active.PNG'
      },
      
      noShuffle: function() {
        app.playSongs.isShuffle = false
        //sort songs by default order
        const currentSong = app.playSongs.songs[app.playSongs.currentIndex]
        app.playSongs.songs.sort((a,b) => a.order - b.order)
        app.playSongs.currentIndex = app.playSongs.songs.indexOf(currentSong)
        
        //change shuffle button to default
        shuffleBtn.src="./assets/images/now-playing/shuffle.PNG"
      },
    },
    
    handleRepeat: {
  
      noRepeat: function() {
        app.playSongs.isRepeatPlaylist = false
        app.playSongs.isRepeatSong = false
        audio.loop = false
        
        audio.onended = function() {
          
          const playlistLength = app.playSongs.songs.length - 1
            
          if (app.playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play it
            app.playSongs.handleNextSong()
            app.handleQueuePage.reRenderQueuePage()
          } else {    //if the next song is the last, stop the playlist 
            app.playSongs.currentIndex +=3                                        
            app.playSongs.isPlaying = false;                                      
            audio.autoplay = false                                        
            playBtn.src = `./assets/images/now-playing/play.PNG`          
          }                                                  
        }      
        
        //change the repeat button to default
        repeatBtn.src = './assets/images/now-playing/repeat.PNG'
      },
  
      
      repeatPlaylist: function() {
        app.playSongs.isRepeatPlaylist = true
        app.playSongs.isRepeatSong = false
        
        audio.onended = function() {
          const playlistLength = app.playSongs.songs.length - 1
  
          if (app.playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play it
            app.playSongs.handleNextSong()
          } else {    //if the next song is the last, auto play the first song 
            app.playSongs.currentIndex = 0                                       
            audio.autoplay = true     
            app.playSongs.isPlaying = true;
            app.playSongs.loadCurrentSong() 
          }           
          app.handleQueuePage.reRenderQueuePage()
        }
  
        // add repeat playlist button
        repeatBtn.src = './assets/images/now-playing/repeat-playlist-active.PNG'
      },
  
      repeatSong: function() {
        app.playSongs.isRepeatPlaylist = false
        app.playSongs.isRepeatSong = true                   
        audio.loop = true
  
        repeatBtn.src = './assets/images/now-playing/repeat-song-active.PNG'
      }
    },                                                          
                                                                        
    handleBtn: function() {                                             
      const _this = this                                              
                                                                      
      //handle play button                                               
      playBtn.onclick = function(e) {       
        e.stopPropagation()                           
        _this.isPlaying ? audio.pause() : audio.play()             
        if (_this.currentIndex > _this.songs.length) {  //if the the last song in the playlist is finish, load the first song
          _this.currentIndex = 0
          _this.loadCurrentSong()
          audio.autoplay = true
          app.handleQueuePage.reRenderQueuePage()
        }
      }
      
      //handle previous button
      prevBtn.onclick = function() {
        audio.autoplay = true
        
        if (audio.currentTime < 2.5) {      // go to the previous song if the current song is playing less than 2.5 seconds
          _this.currentIndex -= 1
          if (_this.currentIndex < 0) {_this.currentIndex = _this.songs.length - 1}  //if the current song is the first in the playlist, play the last song
          _this.loadCurrentSong()
        } else {      //replay the song if the song is playing more than 2.5 seconds
          _this.loadCurrentSong()
        }
        app.handleQueuePage.reRenderQueuePage()
      }
  
      //handle next button
      nextBtn.onclick = function() {
        _this.currentIndex += 1   
        if (_this.currentIndex >= _this.songs.length) {_this.currentIndex = 0}    //if it's the last song in the playlist, play the first song
        _this.loadCurrentSong()
        audio.autoplay = true
        app.handleQueuePage.reRenderQueuePage()
      }
  
      //handle shuffle button
      shuffleBtn.onclick = function() {
        _this.isShuffle ? _this.handleShuffle.noShuffle() : _this.handleShuffle.shuffle()
        app.handleNowPlaying.handleActiveBtns(_this.isShuffle, shuffleBtn, $('.shuffle-active'))
        app.handleQueuePage.reRenderQueuePage()
      }
  
      //handle repeat button
      repeatBtn.onclick = function() {
        _this.isRepeatPlaylist ? _this.handleRepeat.repeatSong() : _this.isRepeatSong ? _this.handleRepeat.noRepeat() : _this.handleRepeat.repeatPlaylist()
        app.handleNowPlaying.handleActiveBtns(_this.isRepeatPlaylist || _this.isRepeatSong, repeatBtn, $('.repeat-active'))
      }
          
      this.handlePlayOrPauseAudio()
    },
  
    handlePlayOrPauseAudio: function() {
      _this = this
      function handleButtons() {
        app.handleMainView.handleBtns.handlePlayBtn.handle()
        app.handlePlaylists.handleOwnPlaylists.stylePlayingPlaylist.handle()
        app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.handle()
        app.handleQueuePage.styleQueuePage.styleSong()
      }

      audio.onplay = function() {
        _this.isPlaying = true;
        playBtn.src = `./assets/images/now-playing/pause.png`
        $('title').innerText = `${_this.songs[_this.currentIndex].name} · ${_this.songs[_this.currentIndex].artist.join(', ')}`

        handleButtons()
      }
  
  
      audio.onpause = function() {
        _this.isPlaying = false;
        playBtn.src = `./assets/images/now-playing/play.PNG`
        $('title').innerText = `Spotify - Made by Phuc1403`

        handleButtons()
      }
    },
    start: function() {  //wrap all function into one 
        this.loadCurrentSong()
        this.handleTotalTime()
        this.isRepeatPlaylist ? this.handleRepeat.repeatPlaylist() : this.isRepeatSong ? this.handleRepeat.repeatSong() : this.handleRepeat.noRepeat()
        if (this.isShuffle) this.handleShuffle.shuffle()
        this.audioPlaying()
        this.handlePlaybackSliderBar()
        this.handleVolumeSliderBar()
        this.handleBtn()
        app.handleNowPlaying.handleActiveBtns(this.isShuffle, shuffleBtn, $('.shuffle-active'))
        app.handleNowPlaying.handleActiveBtns(this.isRepeatPlaylist || this.isRepeatSong, repeatBtn, $('.repeat-active'))
    }
  },

  handlePlaylists: {
    playlists: [...allPlaylists],
    handleCurrentPlaylist: {

      //render current playlists
      renderCurrentPlaylists: function() {
        const currentPlaylistContent = allSections.filter(section => section.sectionType == 'current-playlists')[0].playlists.slice(0,6) //pick the first 6 playlists from the database
          .map(playlist => `
            <li class="current-playlist is-a-playlist" playlist-id="${playlist.id}">
                <img src="${playlist.img}">
                <div class="current-playlist__content">
                    <span>${playlist.name}</span>
                    <img src="./assets/images/main-view/play-now.PNG" class="play-now">
                    <div class="play-now-shadow"></div>
                </div>
            </li>`)
          .join('')
        currentPlaylists.innerHTML = currentPlaylistContent
        $('.greeting').innerHTML = allSections.filter(section => section.sectionType == 'current-playlists')[0].name
      },

      handleMainViewBackground: {
        renderBackground: function() {  
          const currentPlaylistContent = app.handlePlaylists.playlists.filter(playlist => playlist.tag.includes('own playlist'))

          mainView.style.cssText = `--backgroundColor: rgba(${currentPlaylistContent[0].backgroundColor}, 0.35);`
          
          // rootTop.style.cssText = `--headerColor: rgba(${currentPlaylistContent[0].headerColor}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100});`
          this.handleHeaderOpacity(currentPlaylistContent[0].headerColor)
          app.handleMainView.styleMainView.handleResponsive.handlePageSize(rootTop)


          const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
          currentPlaylists.forEach((playlist, index) => {
            playlist.onmouseenter = function() {
              mainView.style.cssText = `--backgroundColor: rgba(${currentPlaylistContent[index].backgroundColor}, 0.35);`
              rootTop.style.cssText = `--headerColor: rgba(${currentPlaylistContent[index].headerColor}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100});`
              app.handlePlaylists.handleCurrentPlaylist.handleMainViewBackground.handleHeaderOpacity(currentPlaylistContent[index].headerColor)
              app.handleMainView.styleMainView.handleResponsive.handlePageSize(rootTop)
            }
          })
        },
        handleHeaderOpacity: function(color) {

          mainView.addEventListener('scroll', function() {
            // rootTop.style.backgroundImage = ''
            // rootTop.style.backgroundColor = `rgba(${color}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`
            
            if(color) {rootTop.style.cssText = `--headerColor: rgba(${color}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100});`}
            app.handleMainView.styleMainView.handleResponsive.handlePageSize(rootTop)
          })
        },
        handle: function() {
          this.renderBackground();
          this.handleHeaderOpacity()
        }
      },
      handle: function() {
        this.renderCurrentPlaylists()
        this.handleMainViewBackground.handle()
      }
    },
    handleOwnPlaylists: {
      renderOwnPlaylists: function() {
        const ownPlaylists = app.handlePlaylists.playlists.filter(playlist => !playlist.tag.includes('liked songs') && playlist.owner == 'Phuc')
          .map(playlist => `
            <li class="my-playlist is-a-playlist" playlist-id="${playlist.id}"><span>${playlist.name}</span><img class="playing-playlist" src="./assets/images/now-playing/volume-big.PNG"></li>
          `).join('')
         
        $('#root__left-sidebar__my-playlists').innerHTML = ownPlaylists
      },
      styleLeftSidebarPlaylist: function() {
        Array.from($('#root__left-sidebar').getElementsByClassName('is-a-playlist'))
        .forEach(playlist => {
          if (playlistPage.style.display == 'block' && playlistPage.querySelector('#on-open-playlist__body__btns__play').getAttribute('playlist-id') == playlist.getAttribute('playlist-id')) {
            playlist.style.color = 'white'
            playlist.onmouseenter = () => {playlist.style.color = 'white'}
            playlist.onmouseleave = () => {playlist.style.color = 'white'}
          } else {
            playlist.style.color = '#b3b3b3'
            playlist.onmouseenter = () => {playlist.style.color = 'white'}
            playlist.onmouseleave = () => {playlist.style.color = '#b3b3b3'}
          }
        })
      },
      stylePlayingPlaylist: {
        styleNotPlayingPlaylist: function() {
          Array.from($('#root__left-sidebar').getElementsByClassName('my-playlist'))
            .forEach(playlist => playlist.querySelector('.playing-playlist').style.display = 'none')
        },
        stylePlayingPlaylist: function() {
          const playingPlaylist = Array.from($('#root__left-sidebar').getElementsByClassName('my-playlist')).filter(playlist => playlist.getAttribute('playlist-id') == app.playSongs.id)[0]
          if (playingPlaylist) { 
            const playingPlaylistButton = playingPlaylist.querySelector('.playing-playlist')
            playingPlaylistButton.style.display = 'block'

            playingPlaylistButton.onmouseover = function() {playingPlaylistButton.src = './assets/images/left-sidebar/pause.png'}
            playingPlaylistButton.onmouseleave = function() {playingPlaylistButton.src = './assets/images/now-playing/volume-big.PNG'}
            
            playingPlaylistButton.onclick = function(e) {
              e.stopPropagation()
              audio.pause()
            }
          }
          
        },
        handle: function() {
          if (window.getComputedStyle($('#root__left-sidebar__my-playlists')).display == 'block') { 
            this.styleNotPlayingPlaylist()
            app.playSongs.isPlaying ? this.stylePlayingPlaylist() : this.styleNotPlayingPlaylist()
          }
        }
      },
      handleOnclick: function() {
        Array.from($('#root__left-sidebar').getElementsByClassName('is-a-playlist'))
        .forEach(eachPlaylist => eachPlaylist.ondblclick = function() {
          const thisPlaylistInDB = app.handlePlaylists.playlists.filter(playlist => playlist.id == eachPlaylist.getAttribute('playlist-id'))[0]
          app.handlePlaylistPage.playPlaylist(thisPlaylistInDB)
        })
      },
      handle: function() {
        this.renderOwnPlaylists()
        this.styleLeftSidebarPlaylist()
        this.stylePlayingPlaylist.handle()
        this.handleOnclick()
      }
    },
    handlePlaylistSections: {
      shufflePlaylists: function(section) {
        if (section.shuffle) {
          for (let i = section.playlists.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
              [section.playlists[i], section.playlists[j]] = [section.playlists[j], section.playlists[i]];
          }
        }
      },
      createSections: function(section) {
          const sectionHTML = document.createElement('div')
          sectionHTML.classList.add('root__main-view__playlist-section') 
          sectionHTML.setAttribute('section-type', section.sectionType) 
          playlistsSections.appendChild(sectionHTML)
      },
      handleRender: function(section) {
          const renderedPlaylists = section.playlists.slice(0,5).map(playlist => `
            <li class="playlist is-a-playlist ${section.sectionType}" playlist-id ="${playlist.id}">
              <div class='playlist__playbtn'>
                <img class="playlist-img" src="${playlist.img}">
                <img src="./assets/images/main-view/play-now.PNG" class="play-now">
                <div class="play-now-shadow"></div>
              </div>
              <div class="playlist__description">
                  <div class="playlist__description__title">${playlist.name}</div>
                  <div class="playlist__description__artist">${playlist.tag.includes('own playlist') ? 'By ' + playlist.owner : playlist.description}</div>
              </div>
            </li>`).join('')
            
            Array.from(document.getElementsByClassName('root__main-view__playlist-section')).filter(playlistSection => playlistSection.getAttribute('section-type') == section.sectionType)[0].innerHTML = `
              <div class="introduction">
                <div>
                    <a href="#" class="title">${section.name}</a>
                    <span class="description"></span>
                </div>
                <a class="see-all" href="#">See all</a>
              </div>
              <ul class="playlists">
                ${renderedPlaylists}
              </ul>`
      },
          
      handle: function() {
        allSections.filter(section => section.sectionType != 'current-playlists').forEach(section => {
            this.shufflePlaylists(section)
            this.createSections(section)
            this.handleRender(section)
        })
      }
    },
    start: function() {
      this.handleOwnPlaylists.handle()
      this.handleCurrentPlaylist.handle()
      this.handlePlaylistSections.handle()
    }
  },
  handlePlaylistPage: {
    playPlaylist: function(thisPlaylistInDB) {
      if (app.playSongs.id == thisPlaylistInDB.id) {
        if (app.playSongs.isPlaying) {
          app.handleMainView.handleBtns.handlePlayBtn.isPause = true
          audio.pause()
        } else {
          audio.play()
        } 
      } else {
        app.playSongs.songs = [...thisPlaylistInDB.songs] 
        app.playSongs.id = thisPlaylistInDB.id

        app.playSongs.isShuffle ? app.playSongs.currentIndex = Math.floor(Math.random() * (app.playSongs.songs.length - 1)) + 1 : app.playSongs.currentIndex = 0;

        app.playSongs.start()
        app.handleQueuePage.reRenderQueuePage()
        audio.play()
      }
      // $('#root__now-playing__header__playlist').innerHTML = `${thisPlaylistInDB.name}`
    },

    openPlaylist: {
      renderPlaylistPage: function(thisPlaylistInDB) {
        const renderSongs = thisPlaylistInDB.songs.map((song, index) => `
          <ul class="song" song-id="${song.id}">
            <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>${index + 1}</span><img class="playing-gif" src='./assets/images/main-view/icon-playing.gif'></li>
            <li class='title'>
              <img class='song-img' src='${song.img}'>
              <div class="song-info">
                  <div class="song-info__name">${song.name}</div>
                  <div class="song-info__artist">${song.artist.join(', ')}</div>
              </div>
            </li>
            <li class='album'>${song.album}</li>
            <li class='date'>Sep 8, 2021</li>
            <li class='more'>
              <img class="more__favorite" src="./assets/images/now-playing/favorite.png">
              <span class="more__time">4:45</span>
              <img class="more__icon" src='./assets/images/main-view/see-more.PNG'>
            </li>
          </ul>`).join('')
          
        playlistPage.innerHTML = `
          <img src='./assets/images/main-view/back.png' id="on-open-playlist__return-home">
          <div id="on-open-playlist__header">
            <img id="on-open-playlist__header__img" src="${thisPlaylistInDB.img}">
            <div id="on-open-playlist__header__title">
              <div id="on-open-playlist__header__title__type">playlist</div>
              <div id="on-open-playlist__header__title__name">${thisPlaylistInDB.name}</div>
              <div id="on-open-playlist__header__title__description">${thisPlaylistInDB.description}</div>
              <div id="on-open-playlist__header__title__playlist-info">
                ${thisPlaylistInDB.tag.includes('own playlist') ? '<img id="on-open-playlist__header__title__playlist-info__img" src="./assets/images/user/user-avatar.jpg"><span id="on-open-playlist__header__title__playlist-info__owner">' + thisPlaylistInDB.owner : '<span id="on-open-playlist__header__title__playlist-info__owner"><span>Made for</span> Phuc'} <span>• ${thisPlaylistInDB.songs.length} songs</span></span>
                </div>
            </div>
          </div>
          <div id="on-open-playlist__body">
            <div id="on-open-playlist__body__btns">
              <img id="on-open-playlist__body__btns__play" playlist-id="${thisPlaylistInDB.id}" src="./assets/images/main-view/play-now-playlist.PNG">
              <img id="on-open-playlist__body__btns__see-more" src="./assets/images/main-view/see-more.PNG">
            </div>
            <div id="on-open-playlist__body__table">
              <div id="position-fixed-header">
                <ul id="on-open-playlist__body__table__header">
                  <li class='number'>#</li>
                  <li class='title'>title</li>
                  <li class='album'>album</li>
                  <li class='date'>date added</li>
                  <li class='more' id="more"><img src='./assets/images/main-view/duration.png'></li>
                </ul>
              </div>
              <div id="on-open-playlist__body__table__body">  
                  ${renderSongs}
              </div>
            </div>
          </div>`
        $('#root__top__add-play-btn__playlist-name').innerText = thisPlaylistInDB.name
      },
      
      stylePlaylistPage: {
        styleGeneral: function(thisPlaylistInDB) {
          playlistPage.style.display = 'block'
          playlistPage.style.backgroundColor = `rgb(${thisPlaylistInDB.backgroundColor})`
          playlistPage.style.backgroundImage = `-webkit-linear-gradient(rgb(${thisPlaylistInDB.backgroundColor}), #181818 600px)`
          playlistPage.style.backgroundImage = `-moz-linear-gradient(rgb(${thisPlaylistInDB.backgroundColor}), #181818 600px)`
          playlistPage.style.backgroundImage = `-o-linear-gradient(rgb(${thisPlaylistInDB.backgroundColor}), #181818 600px)`
          playlistPage.style.backgroundImage = `linear-gradient(rgb(${thisPlaylistInDB.backgroundColor}), #181818 600px)`
        },
        
        styleTitle: function() {
          const title = $('#on-open-playlist__header__title__name')
          title.style.whiteSpace = 'nowrap'
          let titleFontSize = window.getComputedStyle(title).fontSize
          let headerContentWidth = $('#on-open-playlist').offsetWidth - 310
          
          function fitToDiv(size) {
            title.style.fontSize = parseFloat(size) - 1 + 'px'
            titleFontSize = parseFloat(size) - 1
            
            if (title.offsetWidth > headerContentWidth) {fitToDiv(titleFontSize)}
          } 
          window.outerWidth >= 768 ? fitToDiv(titleFontSize) : title.style.fontSize = '5vw'
        },

        handleResponsive: {
          handleTextWidth: function() {
            if(playlistPage.style.display == 'block') {
              const title = $('#on-open-playlist__header__title__name')
              if (window.outerWidth > 768) {
                let currentFontSize = parseFloat(window.getComputedStyle(title).fontSize)
                while (title.offsetWidth > $('#on-open-playlist__header__title').offsetWidth - 15) {
                  title.style.fontSize = currentFontSize - 1 + 'px'
                  currentFontSize = parseFloat(window.getComputedStyle(title).fontSize)
                }
                while (title.offsetWidth < $('#on-open-playlist__header__title').offsetWidth - 15 && window.getComputedStyle(title).fontSize <= 96) {
                  title.style.fontSize = currentFontSize + 1 + 'px'
                  currentFontSize = parseFloat(window.getComputedStyle(title).fontSize)
                }
              } else {
                title.style.fontSize = '5vw'
              }
      
              $('.song-info').maxWidth = $('.title').clientWidth - 56 + 'px'
            }
          },
          handleRootTop: {
            handleHeaderTitleWidth: function() {$('#root__top__add-play-btn__playlist-name').style.maxWidth = rootTop.offsetWidth - 355 + 'px'},
            handle: function() {this.handleHeaderTitleWidth()}
          },
          
          handle: function() {
            this.handleTextWidth()
            this.handleRootTop.handle()
          }
        },

        handlePlaylistHeaderOnscroll: function() {
          const tableHeader = $('#position-fixed-header')
          if (playlistPage.style.display == 'block') {
            if ((rootTop.offsetTop - playlistPage.scrollTop) <= -375 && window.outerWidth > 999) {
              tableHeader.style.cssText = `
                position: fixed; 
                top: 60px;
                left: ${playlistPage.offsetLeft}px;
                width: ${playlistPage.offsetWidth}px;
                padding: 0 32px;
                background-color: #181818;`
        
              $('#on-open-playlist__body__table__body').style.marginTop = '52px'
            } else if(window.outerWidth > 650){
              tableHeader.style.cssText = `
                position: relative; 
                top: 0;
                left: 0px;
                width: auto;
                padding: 0;`
              $('#on-open-playlist__body__table__body').style.marginTop = '16px'
            }
            
            if (playlistPage.style.display == 'block' && (rootTop.offsetTop - playlistPage.scrollTop) <= -318) {
              $('#root__top__add-play-btn__play-btn').style.opacity = 1
              setTimeout(() => {$('#root__top__add-play-btn__playlist-name').style.opacity = 1}, 33);
            } else {
              $('#root__top__add-play-btn__play-btn').style.opacity = 0
              setTimeout(() => {$('#root__top__add-play-btn__playlist-name').style.opacity = 0}, 33);
            }
          }
        },
        
        styleSongs: {
          isPlayThisSongOnclick: false,
          handleNotPlayingSong: function(page) {
            Array.from(page.getElementsByClassName('song')).forEach(song => {
              song.querySelector('.number span').style.display = 'block'
              song.querySelector('.song-info__name').style.color = 'white'
              song.querySelector('.playing-gif').style.display = 'none'
              song.querySelector('.play-this-song').style.display = 'none'
              song.querySelector('.play-this-song').src = './assets/images/main-view/play-this-song.PNG'

              song.onmouseover = function() {
                if (window.outerWidth > 999) {
                  song.style.backgroundColor = 'rgb(255,255,255,0.1)'
                  song.querySelector('.play-this-song').style.display = 'block'
                  song.querySelector('.number span').style.display = 'none'
                }
              }
              song.onmouseout = function() {
                if (window.outerWidth > 999) {
                  song.style.backgroundColor = 'rgb(255,255,255,0.0)'
                  song.querySelector('.play-this-song').style.display = 'none'
                  song.querySelector('.number span').style.display = 'block'
                }
              }
            })
          },
          resumePlayingSong: function(page) {
            const playingSong = Array.from(page.getElementsByClassName('song')).filter(song => song.getAttribute('song-id') == app.playSongs.songs[app.playSongs.currentIndex].id)[0]
            playingSong.querySelector('.song-info__name').style.color = '#1db753'
            playingSong.querySelector('.play-this-song').src = './assets/images/main-view/pause-this-song.PNG'      
            playingSong.querySelector('.number span').style.display = 'none'

            if (this.isPlayThisSongOnclick && window.outerWidth > 999) {
              playingSong.querySelector('.playing-gif').style.display = 'none'
              playingSong.querySelector('.play-this-song').style.display = 'block'
              app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.isPlayThisSongOnclick = false
            } else {
              playingSong.querySelector('.playing-gif').style.display = 'block'
              playingSong.querySelector('.play-this-song').style.display = 'none'
            }

            playingSong.onmouseover = function() {
              if (window.outerWidth > 999) {
                playingSong.style.backgroundColor = 'rgb(255,255,255,0.1)'
                playingSong.querySelector('.play-this-song').style.display = 'block'
                playingSong.querySelector('.playing-gif').style.display = 'none'
              }
            }
            playingSong.onmouseout = function() {
              if (window.outerWidth > 999) {
                playingSong.style.backgroundColor = 'rgb(255,255,255,0.0)'
                playingSong.querySelector('.play-this-song').style.display = 'none'
                playingSong.querySelector('.playing-gif').style.display = 'block'
              }
            }
          },
          pausePlayingSong: function(page) {
            const playingSong = Array.from(page.getElementsByClassName('song')).filter(song => song.getAttribute('song-id') == app.playSongs.songs[app.playSongs.currentIndex].id)[0]
            if (this.isPlayThisSongOnclick) {
              playingSong.querySelector('.number span').style.display = 'none'
              playingSong.querySelector('.play-this-song').style.display = 'block'
              app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.isPlayThisSongOnclick = false
            } else {
              playingSong.querySelector('.number span').style.display = 'block'
              playingSong.querySelector('.play-this-song').style.display = 'none'
            }
          },
          handle: function() {
            if (playlistPage.style.display == 'block') {
              this.handleNotPlayingSong(playlistPage)
              $('#on-open-playlist__body__btns__play').src = './assets/images/main-view/play-now-playlist.PNG'
              $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/play-now-playlist.PNG'
              
              if ($('#on-open-playlist__body__btns__play').getAttribute('playlist-id') == app.playSongs.id) {
                if (app.playSongs.isPlaying) {
                  $('#on-open-playlist__body__btns__play').src = './assets/images/main-view/pause-playlist.PNG'
                  $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/pause-playlist.PNG'
                  this.resumePlayingSong(playlistPage)
                } else {
                  this.handleNotPlayingSong(playlistPage)
                  this.pausePlayingSong(playlistPage)

                  $('#on-open-playlist__body__btns__play').src = './assets/images/main-view/play-now-playlist.PNG'
                  $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/play-now-playlist.PNG'
                }
              }
            }
          }
        },

        startStyle: function(thisPlaylistInDB) {
          playlistPage.scrollTop = 0;
          mainView.scrollTop = 0
          this.styleGeneral(thisPlaylistInDB)
          this.styleTitle()
          this.handleResponsive.handle()
          this.handlePlaylistHeaderOnscroll()
          this.styleSongs.handle()
        }
      },

      handlePlaylistPageButtons: {
        handleOnclick: function(thisPlaylistInDB) {
          $('#root__top__add-play-btn__play-btn').onclick = function() {
            if ($('#root__top__add-play-btn__play-btn').style.opacity == 1) {app.handlePlaylistPage.playPlaylist(thisPlaylistInDB)}
          }
          $('#on-open-playlist__body__btns__play').onclick = function() {app.handlePlaylistPage.playPlaylist(thisPlaylistInDB)}         
          $('#on-open-playlist__return-home').onclick = function() {app.handleNavigation.homeComing()}
        },
        
        playThisSong: function(song, thisPlaylistInDB) {
          app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.isPlayThisSongOnclick = true
          const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('song-id'))[0]
          if (window.outerWidth >= 1000) {
            if (song.querySelector('.play-this-song').src.includes('assets/images/main-view/pause-this-song.PNG')) {
              audio.pause()
            } else {
              if (app.playSongs.id == thisPlaylistInDB.id && app.playSongs.currentIndex == app.playSongs.songs.indexOf(thisSong)) {
                audio.play()
              } else {
                app.playSongs.songs = [...thisPlaylistInDB.songs]
                app.playSongs.id = thisPlaylistInDB.id
                app.playSongs.currentIndex = app.playSongs.songs.indexOf(thisSong)
                app.playSongs.start()
                audio.play()
              }
            }
          } else {
            app.playSongs.songs = [...thisPlaylistInDB.songs]
            app.playSongs.id = thisPlaylistInDB.id
            app.playSongs.currentIndex = app.playSongs.songs.indexOf(thisSong)
            app.playSongs.start()
            audio.play()
          }

          app.handleQueuePage.reRenderQueuePage()
        },

        startHandle: function(thisPlaylistInDB) {
          const _this = this
          this.handleOnclick(thisPlaylistInDB)
          Array.from(playlistPage.querySelectorAll('.song')).forEach(song => {
            song.querySelector('.play-this-song').onclick = function() {_this.playThisSong(song, thisPlaylistInDB)}
            song.onclick = function() {if (window.outerWidth < 1000) {_this.playThisSong(song, thisPlaylistInDB)}}
          })
        }
      },

      startOpen: function(thisPlaylistInDB) {
        const _this = this;
        if (queuePage.style.display == 'block') {app.handleQueuePage.closeQueuePage()}
        app.handleNavigation.farFromHome()

        playlistPage.onscroll = function() {
          rootTop.style.backgroundColor = `rgba(${thisPlaylistInDB.headerColor}, ${0.5 + - (225 - Math.ceil(playlistPage.scrollTop)) / 100})`
          _this.stylePlaylistPage.handlePlaylistHeaderOnscroll()
        }

        this.renderPlaylistPage(thisPlaylistInDB)
        this.stylePlaylistPage.startStyle(thisPlaylistInDB)
        this.handlePlaylistPageButtons.startHandle(thisPlaylistInDB)
        app.handleMainView.styleMainView.handleResponsive.handlePageSize(playlistPage)
        playlistPage.scrollTop = 0
        
        app.handlePlaylists.handleOwnPlaylists.styleLeftSidebarPlaylist()

      }
    },
    closePlaylist: function() {
      playlistPage.style.display = 'none'
      $('#root__top__add-play-btn__play-btn').style.opacity = 0
      $('#root__top__add-play-btn__playlist-name').style.opacity = 0
      $('#root__top__add-play-btn__play-btn').style.display = 'none'
      $('#root__top__add-play-btn__playlist-name').style.display = 'none'
      setTimeout(() => {
        $('#root__top__add-play-btn__play-btn').style.display = ''
        $('#root__top__add-play-btn__playlist-name').style.display = ''
      }, 10)
      app.handlePlaylists.handleOwnPlaylists.styleLeftSidebarPlaylist()
      rootTop.style.backgroundColor = 'transparent'
    },
    start: function() {
      const playlistArray = Array.from(document.getElementsByClassName('is-a-playlist'))
      for (let eachPlaylist of playlistArray) {
        const _this = this
        const thisPlaylistInDB = app.handlePlaylists.playlists.filter(playlist => playlist.id == eachPlaylist.getAttribute('playlist-id'))[0]   //find playlist in the database that match the id
          
        eachPlaylist.addEventListener('click', function(e) {       
          if (Array.from(eachPlaylist.getElementsByClassName('play-now')).includes(e.target)) {
            e.stopPropagation()
            _this.playPlaylist(thisPlaylistInDB)
            app.handleMainView.handleBtns.handlePlayBtn.parentElement = e.target.offsetParent
          } else {
            app.handleNavigation.currentPageOrder++;
            _this.openPlaylist.startOpen(thisPlaylistInDB)
            // playlistPage.style.height = mainView.offsetHeight + 'px'
            app.handleNavigation.handleTracing(playlistPage, thisPlaylistInDB)
            app.handleNavigation.handleBtns.styleNavigationBtns()
            app.handlePlaylists.handleOwnPlaylists.styleLeftSidebarPlaylist()
          }
        })
      }
    }
  },
  handleQueuePage: {
    renderQueuePage: function() {
      const playingSong = app.playSongs.songs[app.playSongs.currentIndex]
      $('#queue__now-playing-song').innerHTML = `
        <ul class="song" song-id="${playingSong.id}">
        <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>1</span><img class="playing-gif" src='./assets/images/main-view/icon-playing.gif'></li>
          <li class='title'>
            <img class='song-img' src=${playingSong.img}>
            <div class="song-info">
                <div class="song-info__name">${playingSong.name}</div>
                <div class="song-info__artist">${playingSong.artist}</div>
            </div>
          </li>
          <li class='album'>${playingSong.album}</li>
          <li class='more'>
            <img class="more__favorite" src="./assets/images/now-playing/favorite.png">
            <span class="more__time">4:45</span>
            <img class="more__icon" src='./assets/images/main-view/see-more.PNG'>
          </li>
        </ul>
      `
   
      $('#queue__now-playing-song').querySelector('.number').style.color = '#1db753'
      $('#queue__now-playing-song').querySelector('.song-info__name').style.color = '#1db753'
    
      
      const nextUpSongs = app.playSongs.songs.slice(app.playSongs.currentIndex + 1)
      
      $('#queue__next-up-songs').innerHTML = nextUpSongs.map((song, index) => `
        <ul class="song" song-id="${song.id}">
          <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>${index + 2}</span><img class="playing-gif" src='./assets/images/main-view/icon-playing.gif'></li>
          <li class='title'>
              <img class='song-img' src=${song.img}>
              <div class="song-info">
                  <div class="song-info__name">${song.name}</div>
                  <div class="song-info__artist">${song.artist}</div>
              </div>
          </li>
          <li class='album'>${song.album}</li>
          <li class='more'>
              <img class="more__favorite" src="./assets/images/now-playing/favorite.png">
              <span class="more__time">4:45</span>
              <img class="more__icon" src='./assets/images/main-view/see-more.PNG'>
          </li>
        </ul>
      `).join('')
    },
    styleQueuePage:  {
      styleGeneral: function() {
        // rootTop.style.backgroundColor = 'transparent'
        Array.from(queuePage.getElementsByClassName('song-info')).forEach(songInfo => songInfo.style.maxWidth = queuePage.querySelector('.title').offsetWidth - 100 + 'px')
        queuePage.onscroll = function() {rootTop.style.backgroundColor = `rgba(7, 7, 7, ${0.5 + - (90 - Math.ceil(queuePage.scrollTop)) / 10})`}
      },
      handleResponsive: function() {
        if (queuePage.style.display == 'block') {
          if (window.outerWidth > 999) {
            app.handleMainView.styleMainView.handleResponsive.handlePageSize(queuePage)
            queuePage.style.zIndex = 4;
          } else {
            queuePage.style.cssText = `
            display: block;
            position: absolute;
            width: 100%;
            z-index: 10;
            top: 0;
            left: 0;
            height: 100%;`
            document.getElementById('root__left-sidebar').style.zIndex = '0'
          }
        }
      },
      styleSong: function() {
        if (queuePage.style.display == 'block') {
          app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.handleNotPlayingSong(queuePage)
          if (app.playSongs.isPlaying) {
            app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.resumePlayingSong(queuePage)
          } else {
            app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.handleNotPlayingSong(queuePage)
            app.handlePlaylistPage.openPlaylist.stylePlaylistPage.styleSongs.pausePlayingSong(queuePage)
          }
          Array.from(queuePage.getElementsByClassName('song')).filter(song => song.getAttribute('song-id') == app.playSongs.songs[app.playSongs.currentIndex].id)[0].querySelector('.song-info__name').style.color = '#1db753'
        }
      },
      start: function() {
        this.styleGeneral()
        this.handleResponsive()
        this.styleSong()
      }
    },
    handleQueuePageBtns: function() {
      const _this = this
      $('#queue__header__close').onclick = function() {
        _this.closeQueuePage()
          document.getElementById('root__now-playing').style.zIndex = '5'
          document.getElementById('root__left-sidebar').style.zIndex = '10'
      }
      
      const thisPlaylistInDB = app.handlePlaylists.playlists.filter(playlist => playlist.id == app.playSongs.id)[0]   //find playlist in the database that match the playing playlist
      Array.from(queuePage.querySelectorAll('.song')).forEach(song => {
        song.querySelector('.play-this-song').onclick = function() {app.handlePlaylistPage.openPlaylist.handlePlaylistPageButtons.playThisSong(song, thisPlaylistInDB)}
        song.onclick = function() {if (window.outerWidth < 1000) {app.handlePlaylistPage.openPlaylist.handlePlaylistPageButtons.playThisSong(song, thisPlaylistInDB)}}
      })
    },
    reRenderQueuePage: function() {
      this.renderQueuePage()
      this.styleQueuePage.start()
      this.handleQueuePageBtns()
    },
    openQueuePage: function() { 
      queuePage.style.display = 'block'
      // queuePage.style.height = mainView.offsetHeight + 'px'
      queuePage.scrollTop = 0
      rootTop.style.cssText = `--headerColor: rgba(0, 0, 0, 0);`
      app.handleMainView.styleMainView.handleResponsive.handlePageSize(rootTop)
      app.handleNavigation.farFromHome()
      $('.list').src= './assets/images/now-playing/list-active.PNG'
      app.handleNowPlaying.handleActiveBtns(true, $('.list'), $('.list-active'))
      this.reRenderQueuePage()
    },
    closeQueuePage: function() {
      queuePage.style.display = 'none'
      $('.list').src= './assets/images/now-playing/list.PNG'
      app.handleNowPlaying.handleActiveBtns(false, $('.list'), $('.list-active'))
      mainView.scrollTop = 0
      playlistPage.scrollTop = 0
      rootTop.style.backgroundColor = 'transparent'
      if (app.handleNavigation.trace[app.handleNavigation.currentPageOrder][0] == mainView) {mainView.style.overflowY = 'overlay'}
    }, 
    start: function() {
      const _this = this
      $('.list').onclick = function(e) {
        e.stopPropagation()
        app.handleNavigation.currentPageOrder++;
        if (window.getComputedStyle(queuePage).display == 'none') {
          _this.openQueuePage()
          app.handleNavigation.handleTracing(queuePage, app.handlePlaylists.playlists.filter(playlist => playlist.id == app.playSongs.id)[0])
          
        } else {
          app.handleNavigation.trace[app.handleNavigation.currentPageOrder] = app.handleNavigation.trace[app.handleNavigation.currentPageOrder - 2]
          _this.closeQueuePage()
        } 
        app.handleNavigation.handleBtns.styleNavigationBtns()
        // console.log( app.handleNavigation.trace)
        // console.log(app.handleNavigation.currentPageOrder)
      }
    }
  },
  handleNowPlaying: {
    openNowPlayingPage: function() {
      nowPlaying.onclick = function() {
        if(!document.getElementById('nowPlaying') && window.outerWidth <= 999) {
          const head = document.querySelector('head')
          const link = document.createElement('link')
          link.setAttribute('rel',"stylesheet")
          link.setAttribute('href',"./assets/css/now-playing.css")
          link.setAttribute('id',"nowPlaying")
          head.appendChild(link)
        }
      }
      $('#root__now-playing__header__minimize').onclick = function(e) {
        e.stopPropagation()
        document.getElementById('nowPlaying').remove()
        app.handleNavigation.homeComing()
      }
      if (window.outerWidth > 999 && document.getElementById('nowPlaying')) {document.getElementById('nowPlaying').remove()}
    },
    handleActiveBtns: function(boolean, button, buttonDot) {
      if (boolean) {
        button.style.opacity = 0.8;
        buttonDot.style.opacity = 0.8;
    
        button.onmouseover = function() {
          button.style.opacity = 1;
          buttonDot.style.opacity = 1;
        }
        button.onmouseleave = function() {
          button.style.opacity = 0.8;
          buttonDot.style.opacity = 0.8;
        }
      } else {
        button.style.opacity = 0.6;
        buttonDot.style.opacity = 0;
    
        button.onmouseover = function() {button.style.opacity = 1}
        button.onmouseleave = function() {button.style.opacity = 0.6}
      }
    },
    handle: function() {
      this.openNowPlayingPage()
      this.handleActiveBtns()
    }
  },
  handleMainView: {
    styleMainView: {
      handleResponsive: {
        handlePageSize: function(page) {
          page.style.width = mainView.offsetWidth + 'px'
          // page.style.height = mainView.offsetHeight + 'px'
          page.style.top = mainView.offsetTop + 'px'
          page.style.left = mainView.offsetLeft + 'px'
        },
        handleTopContainerWidth: function() {window.outerWidth > 1115 ? rootTop.style.width = mainView.offsetWidth + 'px' : rootTop.style.width = mainView.offsetWidth + 250 + 'px'},
        handleResponsiveBar: function() {                               
          if (friendsIcon) {
            friendsIcon.onclick = function() {
              if (!friendsBar.classList.contains('slideToLeft')) {friendsBar.classList.add('slideToLeft')}
            }
            $('#root__main-view').onclick = function(e) {
              if (friendsBar.classList.contains('slideToLeft')) {
                if (e.target != friendsIcon && e.target != friendsBar) {
                  friendsBar.classList.remove('slideToLeft')
                  friendsBar.classList.add('reverseSlideToLeft')
                  setTimeout(function() {friendsBar.classList.remove('reverseSlideToLeft')}, 300)
                }
              }
            }
          }
        },

        handlePlaylist: {
          handleTextOverflow: function() {
            const currentPlaylistTitle = document.querySelectorAll('#root__main-view__currently-playing__playlists > .current-playlist > .current-playlist__content > span')
            const currentPlaylistWidth = $('#root__main-view__currently-playing__playlists > .current-playlist').offsetWidth
            
            for (let title of currentPlaylistTitle) {window.outerWidth > 1115 ? title.style.width = `${currentPlaylistWidth - 164}px` : title.style.width = `${currentPlaylistWidth - 70}px`}
          },
      
          handleImgResize: function() {
            const playlistImgs = document.getElementsByClassName('playlist-img')
            for (let playlistImg of playlistImgs) {playlistImg.style.width = $('.playlist').offsetWidth - 32 + 'px'}
          },
          handle: function() {
            this.handleTextOverflow();
            this.handleImgResize()
          }
        },
        handle: function() {
          this.handleTopContainerWidth();
          this.handleResponsiveBar()
          this.handlePlaylist.handle()
          this.handlePageSize(playlistPage)
          if (window.outerWidth > 999) {this.handlePageSize(queuePage)}
        }
      },

      mainViewOnScroll: function() {
        mainView.addEventListener('scroll', function() {
          if (friendsBar.classList.contains('slideToLeft')) {
            friendsBar.classList.remove('slideToLeft')
            friendsBar.classList.add('reverseSlideToLeft')
            setTimeout(function() {friendsBar.classList.remove('reverseSlideToLeft')}, 300)      
          } 
        })
      },
      handle: function() {
        this.handleResponsive.handle()
        this.mainViewOnScroll()
      }
    },
    handleBtns: {
      openMenu: function() {
        $('#root__top__user').onclick = function() {
          $('#root__top__user').style.backgroundColor = '#282828'
    
          if ($('.root__top__user__drop-bar')) {
              $('.root__top__user__drop-bar').remove()
          } else {
              const userBox = $('#root__top__user')
              const dropBar = document.createElement('ul')
              dropBar.classList.add('root__top__user__drop-bar')
              dropBar.innerHTML = `
                  <li class="drop-bar-item"><span>Account</span><img src="assets/images/top-container/share.png"></li>
                  <li class="drop-bar-item"><span>Profile</span></li>
                  <li class="drop-bar-item"><span>Log out</span></li>`
              dropBar.style.right = `${friendsBar.offsetWidth + 32}px`
              userBox.appendChild(dropBar)
          }
        }
      },
      handlePlayBtn: {
        isPause: false,
        parentElement: '',
        handleNotPlayingPlaylists: function() {
          const playlists = Array.from(mainView.getElementsByClassName('is-a-playlist'))
          playlists.forEach(playlist => {
            const playBtn = playlist.querySelector('.play-now')
            const playBtnShadow = playlist.querySelector('.play-now-shadow')

            playBtn.src = './assets/images/main-view/play-now.PNG'
            
            playBtn.style.opacity = 0;
            playBtnShadow.style.opacity = 0;

            playlist.onmouseover = function() {
              playBtn.style.opacity = 1;
              playBtnShadow.style.opacity = 1;
            }
            playlist.onmouseout = function() {
              playBtn.style.opacity = 0;
              playBtnShadow.style.opacity = 0;
            }
          })
        },
        handlePlayingPlaylists: function() {
          const playlists = Array.from(mainView.getElementsByClassName('is-a-playlist')).filter(playlist => playlist.getAttribute('playlist-id') == app.playSongs.id)
          playlists.forEach(playlist => {
            const playBtn = playlist.querySelector('.play-now')
            const playBtnShadow = playlist.querySelector('.play-now-shadow')
            playBtn.src = './assets/images/main-view/pause.PNG'
            playBtn.style.opacity = 1;
            playBtnShadow.style.opacity = 1;
            
            playlist.onmouseover = function() {
              playBtn.style.opacity = 1;
              playBtnShadow.style.opacity = 1;
            }
            playlist.onmouseout = function() {
              playBtn.style.opacity = 1;
              playBtnShadow.style.opacity = 1;
            }
          })
        },
        pausePlayingPlaylist: function() {
          if (app.handleMainView.handleBtns.handlePlayBtn.isPause && playlistPage.style.display == 'none') {
            const playBtn = this.parentElement.querySelector('.play-now')
            const playBtnShadow = this.parentElement.querySelector('.play-now-shadow')
            playBtn.style.opacity = 1;
            playBtnShadow.style.opacity = 1;
            app.handleMainView.handleBtns.handlePlayBtn.isPause = false;
          }
        },
        handle: function() {
          if (mainView.style.display != 'none') {
            this.handleNotPlayingPlaylists()
            if (app.playSongs.isPlaying) {
              this.handlePlayingPlaylists()
            } else {
              this.handleNotPlayingPlaylists()
              this.pausePlayingPlaylist()
            }
          }
        }
      },
    },
    start: function() {
      this.styleMainView.handle()
      this.handleBtns.openMenu()
      this.handleBtns.handlePlayBtn.handle()
    }
  },
  handleRightSidebar: {
    renderUsers: function() {
      $('#root__right-sidebar__users').innerHTML = allUsers.map(user => {
        const song = allSongs.filter(song => song.id == user.latestSongID)[0];
        return `
        <div class="root__right-sidebar__user" user-id=${user.id}>
          <div class="root__right-sidebar__user__avatar">
            <img class="avatar" src="${user.avatarPath}">
            <img src="./assets/images/right-sidebar/play.png" class="play-btn" song-id="${user.latestSongID}">
          </div>
          <div class="root__right-sidebar__user__user-content">
            <div class="user-name-and-activity">
              <span class='user-name'>${user.name}</span>
              <div class="user-activity">
                ${user.lastActive == 'online' ? `<img src="./assets/images/right-sidebar/listening.png">` : user.lastActive}
              </div>
            </div>
            <div class='user-music'>
              <div class='user-music__song'><span class="user-music__song__name">${song.name}</span><img src="./assets/images/right-sidebar/dot.png"><span class="user-music__song__artist">${song.artist}</span></div>
              <div class='user-music__owner'><img src="./assets/images/right-sidebar/playlist.png">${song.album}</div>
            </div>
          </div>
        </div>`
      }).join('')
    },
    handleListenAlong: function() {
      const users = Array.from($('#root__right-sidebar__users').querySelectorAll('.root__right-sidebar__user'));
      users.forEach(user => {
        const playBtn = user.querySelector('.play-btn')
        playBtn.onclick = function() {
          app.playSongs.songs = [allSongs.filter(song => song.id == playBtn.getAttribute('song-id'))[0]];
          app.playSongs.id = playBtn.getAttribute('song-id');
          app.playSongs.currentIndex = 0;
          app.playSongs.start();
          audio.play();
        }
      })
    },
    start: function() {
      this.renderUsers();
      this.handleListenAlong();
    }
  },
  handleNavigation: {
    isAtHome: true,
    trace: [[mainView]],
    currentPageOrder: 0,
    homeComing: function() {
      if (!app.handleNavigation.isAtHome) {
        if (playlistPage.style.display == 'block') {app.handlePlaylistPage.closePlaylist()}
        if (queuePage.style.display == 'block') {app.handleQueuePage.closeQueuePage()}
        app.handleNavigation.isAtHome = true;
        homeBtn.querySelector('img').src = './assets/images/left-sidebar/home-active.PNG'
        homeBtn.classList.add('current')
        mainView.style.overflowY = 'overlay'
      }
    },
    farFromHome: function() {
      app.handleNavigation.isAtHome = false;
      homeBtn.querySelector('img').src = './assets/images/left-sidebar/home.PNG'
      homeBtn.classList.remove('current')
      mainView.style.overflowY = 'hidden'
    },
    handleTracing: function(currentPageOrder, playlist) {
        if (this.trace[this.currentPageOrder] == undefined) {
          this.trace.push([currentPageOrder, playlist])
        } else {
          this.trace.splice(this.currentPageOrder);
          this.trace.push([currentPageOrder, playlist])
        }
        if (this.trace[this.trace.length - 1][0] ==  this.trace[this.trace.length - 2][0] && this.trace[this.trace.length - 1][1] ==  this.trace[this.trace.length - 2][1]) {
          this.currentPageOrder--;
          this.trace.pop()
        }
    },
    handleBtns: {
      styleNavigationBtns: function() {
        const prevBtn = Array.from($('#root__top__move-action').querySelectorAll('img'))[0]
        const nextBtn = Array.from($('#root__top__move-action').querySelectorAll('img'))[1]
        if (app.handleNavigation.currentPageOrder == 0) {
          prevBtn.style.cssText = `
          opacity: 0.5;
          cursor: not-allowed;
          `
        } else {
          prevBtn.style.cssText = `
          opacity: 1;
          cursor: default;
          `
        }

        if (app.handleNavigation.currentPageOrder == app.handleNavigation.trace.length - 1) {
          nextBtn.style.cssText = `
          opacity: 0.5;
          cursor: not-allowed;
          `
        } else {
          nextBtn.style.cssText = `
          opacity: 1;
          cursor: default;
          `
        }
      },
      navigateChoices: function() {
        switch (app.handleNavigation.trace[app.handleNavigation.currentPageOrder][0]) {
          case mainView: 
            app.handleNavigation.homeComing();
            break;
          case playlistPage:
            app.handlePlaylistPage.openPlaylist.startOpen(app.handleNavigation.trace[app.handleNavigation.currentPageOrder][1]);
            break;
          case queuePage:
            app.handleQueuePage.openQueuePage();
            break;
        }
      },
      start: function() {
        const _this = this;
        $('#root__left-sidebar__logo').onclick = function() {
          app.handleNavigation.homeComing()
          app.handleNavigation.currentPageOrder++;
          app.handleNavigation.trace.push([mainView])
          app.handleNavigation.handleBtns.styleNavigationBtns()
        }
        homeBtn.onclick = function() {
          app.handleNavigation.homeComing()
          app.handleNavigation.currentPageOrder++;
          app.handleNavigation.trace.push([mainView])
          app.handleNavigation.handleBtns.styleNavigationBtns()
        }

        $('.root__top__move-action__prev').onclick = function() {
          if (app.handleNavigation.currentPageOrder != 0) {
            app.handleNavigation.currentPageOrder--;
            _this.navigateChoices()
            _this.styleNavigationBtns()
          }
        }
        $('.root__top__move-action__next').onclick = function() {
          if (app.handleNavigation.currentPageOrder != app.handleNavigation.trace.length - 1) {
            app.handleNavigation.currentPageOrder++;
            _this.navigateChoices()
            _this.styleNavigationBtns()
          }
        }
      }
    },
    
  },
  resize: function() {
    const _this = this
    window.onresize = function() {
      _this.playSongs.changeNowPlayingColor()
      _this.handlePlaylistPage.openPlaylist.stylePlaylistPage.handleResponsive.handle()
      _this.handleQueuePage.styleQueuePage.handleResponsive()
      _this.handleMainView.styleMainView.handleResponsive.handle()
      _this.handleNowPlaying.openNowPlayingPage()
      _this.handlePlaylistPage.openPlaylist.stylePlaylistPage.handlePlaylistHeaderOnscroll()
    }
  },

  start() {
    this.playSongs.start()  
    this.handlePlaylists.start()
    this.handlePlaylistPage.start()
    this.handleQueuePage.start()
    this.handleMainView.start()
    this.handleRightSidebar.start()
    this.handleNavigation.handleBtns.start()
    this.handleNowPlaying.openNowPlayingPage()
    this.resize()
  }
}

app.start()
