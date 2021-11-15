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
const onOpenPlaylist = $('#on-open-playlist')
const homeBtn = $('#root__left-sidebar__navigation__home')
const queuePage = $('#queue')


const app = {
  isAtHome: true,
  trace: [mainView],
  currentPage: 0,
  playSongs: { 
    songs: [...allPlaylists[1].songs],
    id: allPlaylists[1].id,
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
    },
  
    changeNowPlayingColor: function() {
      if (window.outerWidth > 999) {
        nowPlaying.style.backgroundColor = '#181818'
        nowPlaying.style.backgroundImage = ''
      } else {
        nowPlaying.style.backgroundImage = `linear-gradient(${this.songs[this.currentIndex].backgroundColor} 90%, #181818)`
      }
    },
  
    handleTimeTotal: function() {
      audio.onloadedmetadata = function() {
        playbackSlider.max = audio.duration
        const songDuration = Math.round(audio.duration)
        const minutes = Math.floor(songDuration / 60)
        const seconds = songDuration - minutes * 60
  
        //make the 'second' part always has 2 digits
        if (seconds < 10) {     
          timeTotal.innerHTML = `${minutes}:0${songDuration - minutes * 60}`
        } else {
          timeTotal.innerHTML = `${minutes}:${songDuration - minutes * 60}`
        }
      }
    }, 
  
    handleTimePlayed: function(value = Math.round(audio.currentTime)) {     //make 'time played' depend whether on the song or dragged by user
      const currentTimeCount = value
        let currentMinute = Math.floor(currentTimeCount / 60)
        let currentSecond = currentTimeCount - currentMinute * 60
  
        //make the 'second' part always has 2 digits
        currentSecond < 10 ? timePlayed.innerHTML = `${currentMinute}:0${currentSecond}`: timePlayed.innerHTML = `${currentMinute}:${currentSecond}`
    },
  
      //handle when song is playing
      audioPlaying: function(color = '#b3b3b3') {
      const _this = this
    
      audio.ontimeupdate = function() {
        if (onOpenPlaylist.style.display == 'block') {
          if ($('#on-open-playlist__body__btns__play').className == _this.id && _this.isPlaying) {
            $('#on-open-playlist__body__btns__play').src='./assets/images/main-view/pause-playlist.PNG'
            $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/pause-playlist.PNG' 
  
            const playingSong = Array.from(onOpenPlaylist.getElementsByClassName('song')).filter(song => song.id == _this.songs[_this.currentIndex].id)[0]
            playingSong.querySelector('.song-info__name').style.color = '#1db753'
            playingSong.querySelector('.play-this-song').src = './assets/images/main-view/pause-this-song.PNG'
          } else {
            $('#on-open-playlist__body__btns__play').src='./assets/images/main-view/play-now-playlist.PNG'
            $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/play-now-playlist.PNG'
          }
        }
        if (queuePage.style.display == 'block') {
          Array.from(queuePage.getElementsByClassName('song')).forEach(song => song.querySelector('.play-this-song').src = './assets/images/main-view/play-this-song.PNG')
          const playingSong = Array.from(queuePage.getElementsByClassName('song')).filter(song => song.id == _this.songs[_this.currentIndex].id)[0]
          playingSong.querySelector('.play-this-song').src = './assets/images/main-view/pause-this-song.PNG'
          // playingSong.querySelector('.playing-gif').style.display = 'block'
          // playingSong.querySelector('span').style.display = 'none'
        }
        //set 'time played' when song plays
  
        if (_this.isSeeking == false) {
          _this.handleTimePlayed()
     
           //handle slider track color when song plays
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
      playBtn.src = `./assets/images/now-playing/pause.png`  //prevent glitch when the next song is load
    },
  
  
    handlePlaybackSliderBar: function() {   
      const _this = this
      //handle slider thumb when drag or click
      playbackSlider.oninput = function() {
        _this.isSeeking = true
        _this.handleTimePlayed(playbackSlider.value)
        let thumbValue = playbackSlider.value / playbackSlider.max *100
        // setTimeout(_this.audioPlaying)
        playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
  
      }
      playbackSlider.onchange = function() {
        _this.isSeeking = false
        _this.handleTimePlayed(playbackSlider.value)        
        audio.currentTime = playbackSlider.value;      
      }
  
      playbackSlider.onclick = function(e) {
        e.stopPropagation()
      }
  
      //handle slider tracks color
      playbackSlider.onmouseenter = function() {
  
        //add new css file to change the slider thumb when hover
        const head = document.querySelector('head')
        const link = document.createElement('link')
        link.setAttribute('rel',"stylesheet")
        link.setAttribute('href',"./assets/css/playbackSlider.css")
        link.setAttribute('id',"slidercss")
        head.appendChild(link)
  
        //change slider track color when hover
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
  
        //change slider track color when hover
        let thumbValue = volumeSlider.value / volumeSlider.max * 100
        volumeSlider.style.background = `linear-gradient(to right, #1db954 0%, #1db954 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
  
        volumeBtn.style.opacity = 1
      }
  
      volumeBar.onmouseleave = function() {
  
        //remove 'change slider thumb' css file
        const sliderHover = document.getElementById('slidercss')
        sliderHover.remove()
  
        //change slider track color to default
        let thumbValue = volumeSlider.value / volumeSlider.max * 100
        volumeSlider.style.background = `linear-gradient(to right, #b3b3b3 0%, #b3b3b3 ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
  
        volumeBtn.style.opacity = 0.6
      }
    },
  
    handleShuffle: {
      shuffle: function() {
        app.playSongs.isShuffle = true
  
        //random order of other songs
        app.playSongs.songs.forEach(obj => {
          obj.order =  Math.floor(Math.random() * (app.playSongs.songs.length - 1)) + 1
        })
        app.playSongs.songs[app.playSongs.currentIndex].order = 0
  
        //sort songs by order
        app.playSongs.songs.sort((a,b) => a.order - b.order)
        app.playSongs.currentIndex = 0
        //add active shuffle button
        shuffleBtn.src = './assets/images/now-playing/shuffle-active.PNG'
      },
      
      noShuffle: function() {
        app.playSongs.isShuffle = false
        //sort songs by id
        const currentSong = app.playSongs.songs[app.playSongs.currentIndex]
        app.playSongs.songs.sort((a,b) => a.id - b.id)
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
            
          if (app.playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
            app.playSongs.handleNextSong()
            app.handleQueuePage.renderQueuePage()           
            app.handleQueuePage.handleQueuePageBtns()
          } else {    //if the next song is the last, stop the playlist 
            app.playSongs.currentIndex +=3                                        
            app.playSongs.isPlaying = false;                                      
            audio.autoplay = false                                        
            playBtn.src = `./assets/images/now-playing/play.PNG`          
          }                                                  
        }      
        
        //change repeat button to default
        repeatBtn.src = './assets/images/now-playing/repeat.PNG'
      },
  
      
      repeatPlaylist: function() {
        app.playSongs.isRepeatPlaylist = true
        app.playSongs.isRepeatSong = false
        
        audio.onended = function() {
          const playlistLength = app.playSongs.songs.length - 1
  
          if (app.playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
            app.playSongs.handleNextSong()
          } else {    //if the next song is the last, auto play the first song 
            app.playSongs.currentIndex = 0                                       
            audio.autoplay = true     
            app.playSongs.isPlaying = true;
            app.playSongs.loadCurrentSong() 
          }           
          app.handleQueuePage.renderQueuePage()
          app.handleQueuePage.handleQueuePageBtns()
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
        if (_this.currentIndex > _this.songs.length) {  //if the the last song in the playlist is end, go to the first song
          _this.currentIndex = 0
          _this.loadCurrentSong()
          audio.autoplay = true
          app.handleQueuePage.renderQueuePage()
          app.handleQueuePage.handleQueuePageBtns()
        }
      }
  
      //handle previous button
      prevBtn.onclick = function() {
        audio.autoplay = true
        
        if (audio.currentTime < 2.5) {      // go to the previous song if the current song is playing less than 2.5 seconds
          _this.currentIndex -= 1
          if (_this.currentIndex < 0) _this.currentIndex = _this.songs.length - 1   //if the current song is the first in the playlist, go to the last song
          _this.loadCurrentSong()
        } else {      //replay the song if the current song is playing more than 2.5 seconds
          _this.loadCurrentSong()
        }
        app.handleQueuePage.renderQueuePage()
        app.handleQueuePage.handleQueuePageBtns()
      }
  
      //handle next button
      nextBtn.onclick = function() {
        _this.currentIndex += 1   
        if (_this.currentIndex >= _this.songs.length) _this.currentIndex = 0    //if it's the the last song in the playlist, play the first song
        _this.loadCurrentSong()
        audio.autoplay = true
        app.handleQueuePage.renderQueuePage()
        app.handleQueuePage.handleQueuePageBtns()
      }
  
      //handle shuffle button
      shuffleBtn.onclick = function() {
        _this.isShuffle ? _this.handleShuffle.noShuffle() : _this.handleShuffle.shuffle()
        app.handleNowPlaying.handleActiveBtns(_this.isShuffle, shuffleBtn, $('.shuffle-active'))
        app.handleQueuePage.renderQueuePage()
        app.handleQueuePage.handleQueuePageBtns()
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
      audio.onplay = function() {
        //hide all playing btn in playlist box...
        for (let pauseBtns of document.getElementsByClassName('playing')) {
          pauseBtns.style.opacity = 0
          pauseBtns.style.zIndex = -1
        }
        for (let pauseBtnShadows of document.getElementsByClassName('playing-shadow')) {
          pauseBtnShadows.style.opacity = 0
        }
  
  
        //except the one is playing
        const pauseBtn = document.getElementsByClassName('playing')[_this.id - 1]
        const pauseBtnShadow = document.getElementsByClassName('playing-shadow')[_this.id - 1]
        if (pauseBtn) {
          pauseBtn.style.opacity = 1;
          pauseBtn.style.zIndex = 2;
          pauseBtnShadow.style.opacity = 1;
        }
  
  
        if ($('#on-open-playlist__body__btns__play')) if($('#on-open-playlist__body__btns__play').className == _this.id) {
          $('#on-open-playlist__body__btns__play').src = './assets/images/main-view/pause-playlist.PNG'
          $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/pause-playlist.PNG'
          Array.from(onOpenPlaylist.getElementsByClassName('song')).forEach(song => {
            song.querySelector('.song-info__name').style.color = 'white'
          })
          const playingSong = Array.from(onOpenPlaylist.getElementsByClassName('song')).filter(song => song.id == _this.songs[_this.currentIndex].id)[0]
          playingSong.querySelector('.song-info__name').style.color = '#1db753'
          playingSong.querySelector('.play-this-song').src = './assets/images/main-view/pause-this-song.PNG'
        }
  
        if (queuePage.style.display == 'block') {
          Array.from(queuePage.getElementsByClassName('song')).forEach(song => {
            song.querySelector('.song-info__name').style.color = 'white'
          })
          const playingSong = Array.from(queuePage.getElementsByClassName('song')).filter(song => song.id == _this.songs[_this.currentIndex].id)[0]
          playingSong.querySelector('.song-info__name').style.color = '#1db753'
          playingSong.querySelector('.play-this-song').src = './assets/images/main-view/pause-this-song.PNG'
          playingSong.querySelector('.playing-gif').style.display = 'block'
          playingSong.querySelector('span').style.display = 'none'
        }
        _this.isPlaying = true;
        playBtn.src = `./assets/images/now-playing/pause.png`
        $('title').innerText = `${_this.songs[_this.currentIndex].name} · ${_this.songs[_this.currentIndex].artist}`
      }
  
  
      audio.onpause = function() {
        const pauseBtn = document.getElementsByClassName('playing')[_this.id - 1]
        const pauseBtnShadow = document.getElementsByClassName('playing-shadow')[_this.id - 1]
        if (pauseBtn) {
          pauseBtn.style.opacity = 0;
          pauseBtn.style.zIndex = -1;
          pauseBtnShadow.style.opacity = 0; 
        }
        if ($('#on-open-playlist__body__btns__play')) if($('#on-open-playlist__body__btns__play').className == _this.id) {
          $('#on-open-playlist__body__btns__play').src = './assets/images/main-view/play-now-playlist.PNG'
          $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/play-now-playlist.PNG'
          Array.from(onOpenPlaylist.getElementsByClassName('song')).forEach(song => {
            song.querySelector('.song-info__name').style.color = 'white'
            song.querySelector('.play-this-song').src = './assets/images/main-view/play-this-song.PNG'
          })
        }
        if (queuePage.style.display == 'block') {
          Array.from(queuePage.getElementsByClassName('song')).forEach(song => {
            song.querySelector('.play-this-song').src = './assets/images/main-view/play-this-song.PNG'
            // song.querySelector('.playing-gif').style.display = 'none'
            song.querySelector('span').style.display = 'block'
          })
        }
        _this.isPlaying = false;
        playBtn.src = `./assets/images/now-playing/play.PNG`
        $('title').innerText = `Spotify - Made by Phuc1403`
      }
    },
    start: function() {  //wrap all function into one 
        this.loadCurrentSong()
        this.handleTimeTotal()
        this.isRepeatPlaylist ? this.handleRepeat.repeatPlaylist() : this.isRepeatSong ? this.handleRepeat.repeatSong() : this.handleRepeat.noRepeat()
        if (this.isShuffle) this.handleShuffle.shuffle()
        this.audioPlaying()
        this.handlePlaybackSliderBar()
        this.handleVolumeSliderBar()
        this.handleBtn()
        app.handleNowPlaying.handleActiveBtns(this.isShuffle, shuffleBtn, $('.shuffle-active'))
        app.handleNowPlaying.handleActiveBtns(this.isRepeatPlaylist || _this.isRepeatSong, repeatBtn, $('.repeat-active'))
    }
  },
  handlePlaylists: {
    playlists: [...allPlaylists],
    headerColorArr: [allPlaylists[0].headerColor],

    handleCurrentPlaylist: {
      renderCurrentPlaylists: function() {
        const currentPlaylistContent = app.handlePlaylists.playlists
          .filter(playlist => playlist.id <=6 )
          .map(playlist => `
            <li class="current-playlist is-playlist" id="${playlist.id}">
                <img src="${playlist.img}">
                <div class="current-playlist__content">
                    <span>${playlist.name}</span>
                    <img src="./assets/images/main-view/play-now.PNG" class="play-now">
                    <img src="./assets/images/main-view/pause.PNG" class="playing">
                    <div class="play-now-shadow"></div>
                    <div class="playing-shadow"></div>
                </div>
            </li>`)
          .join('')
        currentPlaylists.innerHTML = currentPlaylistContent
      },
      handleCurrentPlaylistHover: function() {
        const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
        currentPlaylists.forEach(playlist => {
            playlist.onmouseover = function() {
                playlist.querySelector('.play-now-shadow').style.opacity= '1';
                playlist.querySelector('.play-now').style.opacity = '1';
                playlist.style.backgroundColor = 'rgba(255, 255, 255, .2)'
            }
            playlist.onmouseout = function() {
                playlist.querySelector('.play-now-shadow').style.opacity= '0';
                playlist.querySelector('.play-now').style.opacity = '0';
                playlist.style.backgroundColor = 'rgba(255, 255, 255, .1)' 
            }
        })
      },
      handle: function() {
        this.renderCurrentPlaylists()
        this.handleCurrentPlaylistHover()
      }
    },
  
    //render current playlists to main-view
    renderOwnPlaylists: function() {
      const ownPlaylists = this.playlists
        .filter(playlist => playlist.owner == 'Phuc')
        .map(playlist => `
          <li class="my-playlist is-playlist" id="${playlist.id}">${playlist.name}</li>
        `).join('')
       
      $('#root__left-sidebar__my-playlists').innerHTML = ownPlaylists
      
    },
  
    handleMainViewBackground: {
      renderBackground: function() {  
        const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
        currentPlaylists.forEach((playlist, index) => {
          
          playlist.onmouseenter = function() {
            mainView.style.backgroundImage = `linear-gradient(rgba(${app.handlePlaylists.playlists[index].backgroundColor}, 0.35) 0%, #121212 15%)`
            rootTop.style.backgroundColor = `rgba(${app.handlePlaylists.playlists[index].backgroundColor}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
            app.handlePlaylists.headerColorArr.unshift(app.handlePlaylists.playlists[index].headerColor);
          }
        })
      },
      handleHeaderOpacity: function() {
        rootTop.style.backgroundColor = `rgba(${app.handlePlaylists.headerColorArr[0]}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})` 
      },
      start: function() {
        this.renderBackground();
        this.handleHeaderOpacity()
      }
    },
    
  
    
    //play playlist when click "play now" button
    handlePlayOrOpenPlaylist: {
      playPlaylist: function(thisPlaylistInDB) {
        if (app.playSongs.id == thisPlaylistInDB.id) {
          if (app.playSongs.isPlaying) {audio.pause()} else {audio.play()}
        } else {
          app.playSongs.songs = [...thisPlaylistInDB.songs] //choose the first (and only) object of 'playlist' array that contain a playlist
          app.playSongs.id = thisPlaylistInDB.id
  
          if (app.playSongs.isShuffle) {
            app.playSongs.currentIndex = Math.floor(Math.random() * (app.playSongs.songs.length - 1)) + 1
          } else {
            app.playSongs.currentIndex = 0;
          }
          app.playSongs.start()
          app.handleQueuePage.renderQueuePage()
          audio.play()
        }
        $('#root__now-playing__header__playlist').innerHTML = `${thisPlaylistInDB.name}`
      },
  
      openPlaylist: {
        renderPlaylistPage: function(thisPlaylistInDB) {
          const renderSongs = thisPlaylistInDB.songs.map((song, index) => `
            <ul class="song" id="${song.id}">
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
           
          onOpenPlaylist.innerHTML = `
            <img src='./assets/images/main-view/back.png' id="on-open-playlist__return-home">
            <div id="on-open-playlist__header">
              <img id="on-open-playlist__header__img" src=${thisPlaylistInDB.img}>
              <div id="on-open-playlist__header__title">
                <div id="on-open-playlist__header__title__type">playlist</div>
                <div id="on-open-playlist__header__title__name">${thisPlaylistInDB.name}</div>
                <div id="on-open-playlist__header__title__description">${thisPlaylistInDB.description}</div>
                <div id="on-open-playlist__header__title__playlist-info">
                  <img id="on-open-playlist__header__title__playlist-info__img" src='./assets/images/user/user-avatar.jpg'>
                  <span id="on-open-playlist__header__title__playlist-info__owner">${thisPlaylistInDB.owner} <span>• ${thisPlaylistInDB.songs.length} songs</span></span>
                  </div>
              </div>
            </div>
            <div id="on-open-playlist__body">
              <div id="on-open-playlist__body__btns">
                <img id="on-open-playlist__body__btns__play" class="${thisPlaylistInDB.id}" src="./assets/images/main-view/play-now-playlist.PNG">
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
          styleMainView: function(thisPlaylistInDB) {
            onOpenPlaylist.style.display = 'block'
            onOpenPlaylist.style.backgroundImage = `linear-gradient(rgb(${thisPlaylistInDB.backgroundColor}), #181818 600px)`
          },
          styleTitle: function() {
            $('#on-open-playlist__header__title__name').style.whiteSpace = 'nowrap'
            let titleFontSize = window.getComputedStyle($('#on-open-playlist__header__title__name')).fontSize
            let headerContentWidth = $('#on-open-playlist').offsetWidth - 310
            
            function fitToDiv(size) {
              $('#on-open-playlist__header__title__name').style.fontSize = parseFloat(size) - 1 + 'px'
              titleFontSize = parseFloat(size) - 1
              
              if ($('#on-open-playlist__header__title__name').offsetWidth > headerContentWidth) {
                fitToDiv(titleFontSize)
              }
            } 
            if (window.outerWidth > 768) {
              fitToDiv(titleFontSize)
            } else {
              $('#on-open-playlist__header__title__name').style.fontSize = '5vw'
            }
          },
          styleLeftSidebarPlaylist: function(playlistArray, eachPlaylist) {
            Array.from($('#root__left-sidebar__my-playlists').getElementsByClassName('is-playlist'))
            .filter(otherPlaylist => otherPlaylist.id != eachPlaylist.id)
            .forEach(otherPlaylist => {
              otherPlaylist.style.color = '#b3b3b3'
              otherPlaylist.onmouseenter = function() { otherPlaylist.style.color = 'white'}
              otherPlaylist.onmouseleave = function() { otherPlaylist.style.color = '#b3b3b3'}
            })
  
            const currentPlaylist = playlistArray.filter(playlist => playlist.id == eachPlaylist.id && playlist.className.includes('my-playlist'))[0]
            currentPlaylist.style.color = 'white'
            currentPlaylist.onmouseenter = function() { currentPlaylist.style.color = 'white'}
            currentPlaylist.onmouseleave = function() { currentPlaylist.style.color = 'white'}
          },

          handleResponsive: {
            currentFontSizeArr: [],
            handleTextWidth: function() {
              if(onOpenPlaylist.style.display == 'block') {
                if (window.outerWidth > 768) {
                  $('#on-open-playlist__header__title__name').style.whiteSpace = 'normal'
                  let currentFontSize = parseFloat(window.getComputedStyle($('#on-open-playlist__header__title__name')).fontSize)
                  if (!this.currentFontSizeArr.includes(currentFontSize)) this.currentFontSizeArr.unshift(currentFontSize)
                  if ($('#on-open-playlist__header__title__name').offsetWidth >= $('#on-open-playlist__header__title').offsetWidth - 15) {
                    $('#on-open-playlist__header__title__name').style.fontSize = currentFontSize - 15 + 'px'
                    currentFontSize = parseFloat(window.getComputedStyle($('#on-open-playlist__header__title__name')).fontSize)
                    this.currentFontSizeArr.unshift(currentFontSize)
                  }
                  if ($('#on-open-playlist__header__title__name').offsetWidth < $('#on-open-playlist__header__title').offsetWidth - 170) {
                    this.currentFontSizeArr.shift()
                    $('#on-open-playlist__header__title__name').style.fontSize = this.currentFontSizeArr[0] + 'px'
                    currentFontSize = parseFloat(window.getComputedStyle($('#on-open-playlist__header__title__name')).fontSize)
                  }
                } else {
                  $('#on-open-playlist__header__title__name').style.fontSize = '5vw'
                }
        
                $('.song-info').maxWidth = $('.title').clientWidth - 56 + 'px'
              }
            },
            handleRootTop: {
              handleHeaderTitleWidth: function() {
                $('#root__top__add-play-btn__playlist-name').style.maxWidth = rootTop.offsetWidth - 355 + 'px'
              },
              handleNavigationButton: function() {
                // $('#root__top__move-action').offsetWidth < 80 ? $('.root__top__move-action__next').style.display = 'none' : $('.root__top__move-action__next').style.display = 'block'
                // if ($('#root__top__move-action').offsetWidth < 80) {
                //   $('.root__top__move-action__next').style.display = 'none'
                //   console.log(window.getComputedStyle($('.root__top__move-action__next')).display)
                // } 
                // if ($('.root__top__move-action__next').style.display == 'none') {
                //   $('.root__top__move-action__next').style.display = 'block'
                //   console.log(window.getComputedStyle($('.root__top__move-action__next')).display)
                // }
              },
              handle: function() {
                this.handleHeaderTitleWidth()
                this.handleNavigationButton()
              }
            },
            
            handle: function() {
              this.handleTextWidth()
              this.handleRootTop.handle()
            }
          },

          handlePlaylistHeaderOnscroll: function() {
            const tableHeader = $('#position-fixed-header')
            if (onOpenPlaylist.style.display == 'block') {
              if ((rootTop.offsetTop - onOpenPlaylist.scrollTop) <= -380 && window.outerWidth > 999) {
                tableHeader.style.cssText = `
                  position: fixed; 
                  top: 60px;
                  left: ${onOpenPlaylist.offsetLeft}px;
                  width: ${onOpenPlaylist.offsetWidth}px;
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
              
              if (onOpenPlaylist.style.display == 'block' && (rootTop.offsetTop - onOpenPlaylist.scrollTop) <= -318) {
                $('#root__top__add-play-btn__play-btn').style.opacity = 1
                setTimeout(() => {$('#root__top__add-play-btn__playlist-name').style.opacity = 1}, 33);
              } else {
                $('#root__top__add-play-btn__play-btn').style.opacity = 0
                setTimeout(() => {$('#root__top__add-play-btn__playlist-name').style.opacity = 0}, 33);
              }
            }
          },
            
          startStyle: function(playlistArray, eachPlaylist, thisPlaylistInDB) {
            // app.handleResponsive.handlePlaylistPage.handlePageSize(onOpenPlaylist)
            onOpenPlaylist.scrollTop = 0;
            mainView.scrollTop = 0
            this.styleMainView(thisPlaylistInDB)
            this.styleTitle()
            this.styleLeftSidebarPlaylist(playlistArray, eachPlaylist)
            this.handleResponsive.handle()
            this.handlePlaylistHeaderOnscroll()
          }
        },
  
        handlePlaylistPageButtons: {
          handleOnclick: function(thisPlaylistInDB) {
            $('#root__top__add-play-btn__play-btn').onclick = function() {
              if ($('#root__top__add-play-btn__play-btn').style.opacity == 1) {
                app.handlePlaylists.handlePlayOrOpenPlaylist.playPlaylist(thisPlaylistInDB)
              }
            }
            $('#on-open-playlist__body__btns__play').onclick = function() {
              app.handlePlaylists.handlePlayOrOpenPlaylist.playPlaylist(thisPlaylistInDB)
            }         
            $('#on-open-playlist__return-home').onclick = function() {
              app.handleNavigation.homeComing()
            }
          },
          
          playThisSong: function(song, thisPlaylistInDB) {
            const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
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
            app.handleQueuePage.renderQueuePage()
            app.handleQueuePage.handleQueuePageBtns()
          },
  
          handleSongHover: function(song, thisPlaylistInDB) {
            song.addEventListener('mouseover', function() {
              if (window.outerWidth > 651) {
                song.style.backgroundColor = 'rgb(255,255,255,0.1)'
                song.querySelector('.play-this-song').style.display = 'block'
                song.querySelector('.number span').style.display = 'none'
              }
            })
  
            song.addEventListener('mouseout', function() {
              if (window.outerWidth > 651) {
                song.style.backgroundColor = 'rgb(255,255,255,0.0)'
                song.querySelector('.play-this-song').style.display = 'none'
                song.querySelector('.number span').style.display = 'block'
              }
            })
            
            song.onclick = function() {
              if (window.outerWidth < 1000) {
                const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
                app.playSongs.songs = [...thisPlaylistInDB.songs]
                app.playSongs.id = thisPlaylistInDB.id
                app.playSongs.currentIndex = app.playSongs.songs.indexOf(thisSong)
                app.playSongs.start()
                audio.play()
                app.handleQueuePage.renderQueuePage()
                app.handleQueuePage.handleQueuePageBtns()
              }
            }
          },
  
          startHandle: function(thisPlaylistInDB) {
            const _this = this
            this.handleOnclick(thisPlaylistInDB)
            Array.from(document.querySelectorAll('.song')).forEach(song => {
              this.handleSongHover(song, thisPlaylistInDB)
              song.querySelector('.play-this-song').onclick = function() {
                _this.playThisSong(song, thisPlaylistInDB)
              }
            })
          }
        },
  
        
        startOpen: function(playlistArray, eachPlaylist, thisPlaylistInDB) {
          const _this = this;
          app.handleNavigation.farFromHome()
          app.currentPage += 1;
          app.trace.push(onOpenPlaylist.innerHTML)
          onOpenPlaylist.onscroll = function() {
            rootTop.style.backgroundColor = `rgba(${thisPlaylistInDB.headerColor}, ${0.5 + - (225 - Math.ceil(onOpenPlaylist.scrollTop)) / 100})`
            _this.stylePlaylistPage.handlePlaylistHeaderOnscroll()
          }
  
          this.renderPlaylistPage(thisPlaylistInDB)
          this.stylePlaylistPage.startStyle(playlistArray, eachPlaylist, thisPlaylistInDB)
          this.handlePlaylistPageButtons.startHandle(thisPlaylistInDB)
          app.handleMainView.styleMainView.handleResponsive.handlePageSize(onOpenPlaylist)
        }
      }
    },
    start: function() {
      this.renderOwnPlaylists()
      this.handleCurrentPlaylist.handle()
      this.handleMainViewBackground.start()
  
      const playlistArray = Array.from(document.getElementsByClassName('is-playlist'))
      for (let eachPlaylist of playlistArray) {
        const _this = this
        const thisPlaylistInDB = app.handlePlaylists.playlists.filter(playlist => playlist.id == eachPlaylist.getAttribute('id'))[0]   //find playlist in the database that match the id
          
        eachPlaylist.onclick = function(e) {       
          if (Array.from(document.getElementsByClassName('play-now')).includes(e.target) || Array.from(document.getElementsByClassName('playing')).includes(e.target)) {
            e.stopPropagation()
            _this.handlePlayOrOpenPlaylist.playPlaylist(thisPlaylistInDB)
          } else {
            _this.handlePlayOrOpenPlaylist.openPlaylist.startOpen(playlistArray, eachPlaylist, thisPlaylistInDB)
          }
        }
      }
    }
  },
  handleQueuePage: {
    openQueuePage: function() {
      $('.list').onclick = function(e) {
        e.stopPropagation()
        if (window.getComputedStyle(queuePage).display == 'none') {
          queuePage.style.display = 'block'
         
          // $('#root__top__add-play-btn__play-btn').style.opacity = 0
          // $('#root__top__add-play-btn__playlist-name').style.opacity = 0
          // $('#root__top__add-play-btn__play-btn').style.display = 'none'
          // $('#root__top__add-play-btn__playlist-name').style.display = 'none'
          // setTimeout(() => {
          //   $('#root__top__add-play-btn__play-btn').style.display = ''
          //   $('#root__top__add-play-btn__playlist-name').style.display = ''
          // }, 10);
          rootTop.style.backgroundColor = 'transparent'
  
          $('.list').src= './assets/images/now-playing/list-active.PNG'
          app.handleNowPlaying.handleActiveBtns(true, $('.list'), $('.list-active'))
        } else {
          queuePage.style.display = 'none'
          $('.list').src= './assets/images/now-playing/list.PNG'
          app.handleNowPlaying.handleActiveBtns(false, $('.list'), $('.list-active'))
        }
        Array.from(queuePage.getElementsByClassName('song-info')).forEach(songInfo => songInfo.style.maxWidth = queuePage.querySelector('.title').offsetWidth - 100 + 'px')
        app.handleNavigation.farFromHome()
        app.currentPage += 1;
        app.trace.push(queuePage)
        if (document.getElementById('nowPlaying'))  {
          document.getElementById('root__now-playing').remove()
        }
        app.handleMainView.styleMainView.handleResponsive.handlePageSize(queuePage)
      }
    },
    renderQueuePage: function() {
      const playingSong = app.playSongs.songs[app.playSongs.currentIndex]
      $('#queue__now-playing-song').innerHTML = `
        <ul class="song" id="${playingSong.id}">
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
        <ul class="song" id="${song.id}">
          <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>${index + 2}</span></li>
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
    handleQueuePageBtns: function() {
      // $('#on-open-playlist__return-home').onclick = function() {
      //   app.handleNavigation.homeComing()
      // }
      Array.from(queuePage.querySelectorAll('.song')).forEach(song => {
  
        function playThisSong() {
          const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
          if (song.querySelector('.play-this-song').src.includes('assets/images/main-view/pause-this-song.PNG')) {
            audio.pause()
          } else {
            if (app.playSongs.id == app.playSongs.id && app.playSongs.currentIndex == app.playSongs.songs.indexOf(thisSong)) {
              audio.play()
            } else {
              app.playSongs.currentIndex = app.playSongs.songs.indexOf(thisSong)
              app.playSongs.start()
              audio.play()
            }
          }
          app.handleQueuePage.renderQueuePage()
          app.handleQueuePage.handleQueuePageBtns()
        }
  
        song.onmouseover = function() {
          if (window.outerWidth > 651) {
            song.style.backgroundColor = 'rgb(255,255,255,0.1)'
            song.querySelector('.play-this-song').style.display = 'block'
            song.querySelector('.number span').style.display = 'none'
          }
  
          song.querySelector('.play-this-song').onclick = function() {
            playThisSong()
          }
        }
        song.onmouseout = function() {
          if (window.outerWidth > 651) {
            song.style.backgroundColor = 'rgb(255,255,255,0.0)'
            song.querySelector('.play-this-song').style.display = 'none'
            song.querySelector('.number span').style.display = 'block'
          }
        }
        song.onclick = function() {
          if (window.outerWidth < 1000) {
            const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
            app.playSongs.currentIndex = app.playSongs.songs.indexOf(thisSong)
            app.playSongs.start()
            audio.play()
            app.handleQueuePage.renderQueuePage()
            app.handleQueuePage.handleQueuePageBtns()
          }
        }
      })
     
    },
    start: function() {
      this.openQueuePage()
      this.renderQueuePage()
      this.handleQueuePageBtns()
      queuePage.onscroll = function() {
        rootTop.style.backgroundColor = `rgba(7, 7, 7, ${0.5 + - (90 - Math.ceil(queuePage.scrollTop)) / 10})`
      }
    }
  },
  handleNowPlaying: {
    openNowPlayingPage: function() {
      nowPlaying.onclick = function() {
        if(!document.getElementById('nowPlaying') && window.outerWidth <= 999) {
          // isAtHome = false
          app.handleNavigation.farFromHome()
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
      }
      if (window.outerWidth > 999 && document.getElementById('nowPlaying')) {
          document.getElementById('nowPlaying').remove()
      }
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
    
        button.onmouseover = function() {
          button.style.opacity = 1;
        }
        button.onmouseleave = function() {
          button.style.opacity = 0.6;
        }
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
          page.style.height = mainView.offsetHeight + 'px'
          page.style.top = mainView.offsetTop + 'px'
          page.style.left = mainView.offsetLeft + 'px'
        },
        handleTopContainerWidth: function() {
          if (window.outerWidth > 1115) {rootTop.style.width = mainView.offsetWidth + 'px'} else {rootTop.style.width = mainView.offsetWidth + 250 + 'px'}        
        },
        handleResponsiveBar: function() {                               
          if (friendsIcon) {
            friendsIcon.onclick = function() {
              if (!friendsBar.classList.contains('slideToLeft')) {     
                  friendsBar.classList.add('slideToLeft')
              }
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
            
            for (let title of currentPlaylistTitle) {
                if (window.outerWidth > 1115) {
                    title.style.width = `${currentPlaylistWidth - 164}px` 
                } else {
                    title.style.width = `${currentPlaylistWidth - 70}px`
                }
                
            }
          },
      
          handleImgResize: function() {
            const playlistImgs = document.getElementsByClassName('playlist-img')
            for (let playlistImg of playlistImgs) {
                playlistImg.style.width = $('.playlist').offsetWidth - 32 + 'px'
            }
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
          this.handlePageSize(onOpenPlaylist)
          this.handlePageSize(queuePage)
        }
      },

      mainViewOnScroll: function() {
        mainView.onscroll = function() {
          app.handlePlaylists.handleMainViewBackground.handleHeaderOpacity()
        
          if (friendsBar.classList.contains('slideToLeft')) {
            friendsBar.classList.remove('slideToLeft')
            friendsBar.classList.add('reverseSlideToLeft')
            setTimeout(function() {
              friendsBar.classList.remove('reverseSlideToLeft')
            }, 300)      
          }           
        }
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
      }
    },
    start: function() {
      this.styleMainView.handle()
      this.handleBtns.openMenu()
    }
  },
  handleNavigation: {
    homeComing: function() {
      if (!isAtHome) {
        if (onOpenPlaylist.style.display == 'block') {
          onOpenPlaylist.style.display = 'none';
          $('#root__top__add-play-btn__play-btn').style.opacity = 0
          $('#root__top__add-play-btn__playlist-name').style.opacity = 0
          $('#root__top__add-play-btn__play-btn').style.display = 'none'
          $('#root__top__add-play-btn__playlist-name').style.display = 'none'
          setTimeout(() => {
            $('#root__top__add-play-btn__play-btn').style.display = ''
            $('#root__top__add-play-btn__playlist-name').style.display = ''
          }, 10);
          mainView.scrollTop = 0
          rootTop.style.backgroundColor = 'transparent'
          Array.from($('#root__left-sidebar__my-playlists').getElementsByClassName('is-playlist')).forEach(playlist => {
            playlist.style.color = '#b3b3b3'
            playlist.onmouseenter = function() { playlist.style.color = 'white'}
            playlist.onmouseleave = function() { playlist.style.color = '#b3b3b3'}
          })
        }
        if (queuePage.style.display == 'block') {
          queuePage.style.display = 'none'
          $('.list').src= './assets/images/now-playing/list.PNG'
          app.handleNowPlaying.handleActiveBtns(false, $('.list'), $('.list-active'))
        }
        isAtHome = true;
        homeBtn.querySelector('img').src = './assets/images/left-sidebar/home-active.PNG'
        homeBtn.classList.add('current')
        app.trace.push(mainView)
        app.currentPage += 1
      }
    },
    farFromHome: function() {
      isAtHome = false;
      homeBtn.querySelector('img').src = './assets/images/left-sidebar/home.PNG'
      homeBtn.classList.remove('current')
    },
    handleBtns: function() {
      const _this = this
      $('#root__left-sidebar__logo').onclick = function() { _this.homeComing()}
      homeBtn.onclick = function() { _this.homeComing()}
    }
  },
  resize: function() {
    const _this = this
    window.onresize = function() {
      _this.playSongs.changeNowPlayingColor()
      _this.handlePlaylists.handlePlayOrOpenPlaylist.openPlaylist.stylePlaylistPage.handleResponsive.handle()
      _this.handleMainView.styleMainView.handleResponsive.handle()
      _this.handleNowPlaying.openNowPlayingPage()
      _this.handlePlaylists.handlePlayOrOpenPlaylist.openPlaylist.stylePlaylistPage.handlePlaylistHeaderOnscroll()
    }
  },

  start() {
    this.playSongs.start()  
    this.handlePlaylists.start()
    this.handleQueuePage.start()
    this.handleMainView.start()
    this.handleNavigation.handleBtns()
    this.handleNowPlaying.openNowPlayingPage()
    this.resize()
  }
}

app.start()