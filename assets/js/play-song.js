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


import database from './database.js'


const allSongs = database.songs


const playSongs = { 
  songs: allSongs,
  id: 0,
  currentIndex: 0,
  isPlaying: false,
  isShuffle: true,
  isRepeatSong: false,
  isRepeatPlaylist: false,
  isMute: false,
  isSeeking: false,

  loadCurrentSong: function() {
    songImg.src = `${this.songs[this.currentIndex].img}`
    songName.innerHTML = `${this.songs[this.currentIndex].name}`
    songArtist.innerHTML = `${this.songs[this.currentIndex].artist}`
    audio.src = `${this.songs[this.currentIndex].path}`
    this.changeNowPlayingColor()
  },

  changeNowPlayingColor: function() {
    if (window.outerWidth > 999) {
      nowPlaying.style.backgroundColor = '#181818'
    } else {
      nowPlaying.style.backgroundColor = this.songs[this.currentIndex].backgroundColor
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

    //handle when song plays
    audioUpdate: function(color = '#b3b3b3') {
    const _this = this
  
    audio.ontimeupdate = function() {
          
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
    playBtn.src = `./assets/images/now-playing/pause.png`
  },


  handlePlaybackSliderBar: function() {   
    const _this = this
    
    //handle slider thumb when drag or click
    playbackSlider.oninput = function() {
      _this.isSeeking = true
      _this.handleTimePlayed(playbackSlider.value)
      let thumbValue = playbackSlider.value / playbackSlider.max *100
      // setTimeout(_this.audioUpdate)
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
      _this.audioUpdate('#1db954')
      let thumbValue = playbackSlider.value / playbackSlider.max *100
      playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
    }

    playbackSlider.onmouseleave = function() {

      //remove 'change slider thumb' css file
      const sliderHover = document.getElementById('slidercss')
      sliderHover.remove()

      //change slider track color to default
      _this.audioUpdate()
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
      playSongs.isShuffle = true

      //random order of other songs
      playSongs.songs.forEach(obj => {
        obj.order = Math.random() * Math.random()
      })
      playSongs.songs[playSongs.currentIndex].order = 0
      playSongs.currentIndex = 0

      //sort songs by order
      playSongs.songs.sort((a,b) => a.order === b.order ? 0 : a.order < b.order ? -1 : 1)
      

      //add active shuffle button
      shuffleBtn.src = './assets/images/now-playing/shuffle-active.PNG'
      shuffleBtn.style.opacity = 0.8
      $('.shuffle-active').style.opacity = 0.8
      this.shuffleActive()
    },
    
    noShuffle: function() {
      playSongs.isShuffle = false
      //sort songs by id
      playSongs.songs.sort((a,b) => a.id - b.id)
      
      //change shuffle button to default
      shuffleBtn.src="./assets/images/now-playing/shuffle.PNG"
      $('.shuffle-active').style.opacity = 0
      this.shuffleActive()
    },

    shuffleActive: function() {
      const shuffleActiveDot = $('.shuffle-active')
      shuffleBtn.onmouseover = function() {
        if (playSongs.isShuffle) {
          shuffleBtn.style.opacity = 1
          shuffleActiveDot.style.opacity = 1
        }
      }
      shuffleBtn.onmouseout = function() {
        if (playSongs.isShuffle) {
          shuffleBtn.style.opacity = 0.8
          shuffleActiveDot.style.opacity = 0.8
        }
      }
    }

  },
  
  handleRepeat: {

    noRepeat: function() {
      playSongs.isRepeatPlaylist = false
      playSongs.isRepeatSong = false
      audio.loop = false
      
      audio.onended = function() {
        
        const playlistLength = playSongs.songs.length - 1
          
        if (playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
          playSongs.handleNextSong()
        } else {    //if the next song is the last, stop the playlist 
          playSongs.currentIndex +=3                                        
          playSongs.isPlaying = false;                                      
        audio.autoplay = false                                        
          playBtn.src = `./assets/images/now-playing/play.PNG`          
        }                                                               
      }      
      
      //change repeat button to default
      repeatBtn.src = './assets/images/now-playing/repeat.PNG'
      repeatBtn.style.opacity = 0.6
      $('.repeat-active').style.opacity = 0

      repeatBtn.onmouseover = function() {
        repeatBtn.style.opacity = 1
      }
      repeatBtn.onmouseout = function() {
        repeatBtn.style.opacity = 0.6
      }
    },

    
    repeatPlaylist: function() {
      playSongs.isRepeatPlaylist = true
      playSongs.isRepeatSong = false
      
      audio.onended = function() {
        const playlistLength = playSongs.songs.length - 1

        if (playSongs.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
          playSongs.handleNextSong()
        } else {    //if the next song is the last, auto play the first song 
          playSongs.currentIndex = 0                                       
          audio.autoplay = true     
          playSongs.isPlaying = true;
          playSongs.loadCurrentSong() 
        }           
      }

      // add repeat playlist button
      repeatBtn.src = './assets/images/now-playing/repeat-playlist-active.PNG'
      repeatBtn.style.opacity = 0.8
      $('.repeat-active').style.opacity = 0.8
      this.handleRepeatHover()
    },

    repeatSong: function() {
      playSongs.isRepeatPlaylist = false
      playSongs.isRepeatSong = true                   
      audio.loop = true

      repeatBtn.src = './assets/images/now-playing/repeat-song-active.PNG'
      this.handleRepeatHover()
    },

    //handle repeat button when hover
    handleRepeatHover: function() {
      const repeatActive = $('.repeat-active')
      repeatBtn.onmouseover = function() {
        if (playSongs.isRepeatPlaylist || playSongs.isRepeatSong) {
          repeatBtn.style.opacity = 1
          repeatActive.style.opacity = 1
        }
      }
      repeatBtn.onmouseout = function() {
        if (playSongs.isRepeatPlaylist || playSongs.isRepeatSong) {
          repeatBtn.style.opacity = 0.8
          repeatActive.style.opacity = 0.8
        }
      }
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
      }
    }

    //handle previous button
    prevBtn.onclick = function() {
      
      if (audio.currentTime < 2.5) {      // go to the previous song if the current song is playing less than 2.5 seconds
        _this.currentIndex -= 1
        if (_this.currentIndex < 0) _this.currentIndex = _this.songs.length - 1   //if the current song is the first in the playlist, go to the last song
        _this.loadCurrentSong()
        audio.autoplay = true
        _this.isPlaying = true;
        playBtn.src = `./assets/images/now-playing/pause.png`
      
      } else {      //replay the song if the current song is playing more than 2.5 seconds
        _this.loadCurrentSong()
        audio.autoplay = true
        _this.isPlaying = true;
        playBtn.src = `./assets/images/now-playing/pause.png`
      }
    }

    //handle next button
    nextBtn.onclick = function() {
      _this.currentIndex += 1   
      if (_this.currentIndex >= _this.songs.length) _this.currentIndex = 0    //if it's the the last song in the playlist, play the first song
      _this.loadCurrentSong()
      audio.autoplay = true
      _this.isPlaying = true;
      playBtn.src = `./assets/images/now-playing/pause.png`
    }

    //handle shuffle button
    shuffleBtn.onclick = function() {
      _this.isShuffle ? _this.handleShuffle.noShuffle() : _this.handleShuffle.shuffle()
    }

    //handle repeat button
    repeatBtn.onclick = function() {
      _this.isRepeatPlaylist ? _this.handleRepeat.repeatSong() : _this.isRepeatSong ? _this.handleRepeat.noRepeat() : _this.handleRepeat.repeatPlaylist()
    }
    
    for (let pauseBtns of document.getElementsByClassName('playing')) {
      pauseBtns.onclick = function() {
        pauseBtns.style.opacity = 0
        pauseBtns.style.zIndex = -1
        audio.pause()
        _this.isShuffle = false
        playBtn.src = `./assets/images/now-playing/play.PNG`
      }
    }
   
    audio.onplay = function() {
      _this.isPlaying = true;
      playBtn.src = `./assets/images/now-playing/pause.png`
      const pauseBtn = document.getElementsByClassName('playing')[_this.id - 1]
      const pauseBtnShadow = document.getElementsByClassName('playing-shadow')[_this.id - 1]
      if (pauseBtn) {
        pauseBtn.style.opacity = 1;
        pauseBtn.style.zIndex = 2;
        pauseBtnShadow.style.opacity = 1;
      }

    }
    audio.onpause = function() {
      _this.isPlaying = false;
      playBtn.src = `./assets/images/now-playing/play.PNG`
      const pauseBtn = document.getElementsByClassName('playing')[_this.id - 1]
      const pauseBtnShadow = document.getElementsByClassName('playing-shadow')[_this.id - 1]
      if (pauseBtn) {
        pauseBtn.style.opacity = 0;
        pauseBtn.style.zIndex = -1;
        pauseBtnShadow.style.opacity = 0;
        
      }
    }
  },
  start: function() {  //wrap all function into one 
    if (this.songs) {
      this.loadCurrentSong()
      this.handleTimeTotal()
      this.isRepeatPlaylist ? this.handleRepeat.repeatPlaylist() : this.isRepeatSong ? this.handleRepeat.repeatSong() : this.handleRepeat.noRepeat()
      this.isShuffle ? this.handleShuffle.shuffle() : this.handleShuffle.noShuffle()
      this.audioUpdate()
      this.handlePlaybackSliderBar()
      this.handleVolumeSliderBar()
      this.handleBtn()
      // this.changeNowPlayingColor()

      if (this.isPlaying) {
        audio.play()
        playBtn.src = `./assets/images/now-playing/pause.png`
      } else {
        audio.pause()
        playBtn.src = `./assets/images/now-playing/play.PNG`
      }

      for (let pauseBtns of document.getElementsByClassName('playing')) {
        pauseBtns.style.opacity = 0
        pauseBtns.style.zIndex = -1
      }
      for (let pauseBtnShadows of document.getElementsByClassName('playing-shadow')) {
        pauseBtnShadows.style.opacity = 0
      }
    }
  }
}

playSongs.start()  




const handlePlaylists = {
  allPlaylists: database.playlists,
  //render current playlists to main-view
  renderCurrentPlaylists: function() {
    const currentPlaylistContent = this.allPlaylists
      .filter(playlist => playlist.id <=6 )
      .map(playlist => `
        <li class="current-playlist" id="${playlist.id}">
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
  headerColorArr: [database.playlists[0].headerColor],
  renderBackground: function() {
    const _this = this
    const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
    currentPlaylists.forEach((playlist, index) => {
      
      playlist.onmouseenter = function() {
        mainView.style.backgroundImage = `linear-gradient(rgba(${handlePlaylists.allPlaylists[index].backgroundColor}, 0.35) 0%, #121212 15%)`
        rootTop.style.backgroundColor = `rgba(${handlePlaylists.allPlaylists[index].backgroundColor}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
        _this.headerColorArr.unshift(handlePlaylists.allPlaylists[index].headerColor);
      }
    })
  },
  handleHeaderOpacity: function() {
      // if (100 - Math.ceil(mainView.scrollTop) <= 0 && window.outerWidth > 1024) {
        rootTop.style.backgroundColor = `rgba(${this.headerColorArr[0]}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
      // } else {
      //   rootTop.style.backgroundColor = 'transparent'
      // }
  },
  //play playlist when click "play now" button
  playPlaylist: function() {
    const _this = this
    const currentPlaylists = document.getElementsByClassName('current-playlist')
    
    for (let currentPlaylist of currentPlaylists) {
      const playlist = _this.allPlaylists.filter(playlist => playlist.id == currentPlaylist.getAttribute('id'))   //find playlist in the database that match the id
      
      currentPlaylist.querySelector('.play-now').onclick = function() {
        
        if (playSongs.id == playlist[0].id) {
          audio.play()
          playSongs.isPlaying = true
          currentPlaylist.querySelector('.playing').style.opacity = 1;
          currentPlaylist.querySelector('.playing').style.zIndex = 2;
          currentPlaylist.querySelector('.playing-shadow').style.opacity = 1
        } else {
          playSongs.songs = playlist[0].songs //choose the first (and only) object of 'playlist' array that contain a playlist
          playSongs.id = playlist[0].id

          if (playSongs.isShuffle) {
            playSongs.currentIndex = Math.floor(Math.random() * (playSongs.songs.length - 1)) + 1
          } else {
            playSongs.currentIndex = 0;
          }

          // auto play the playlist
          audio.autoplay = true
          playSongs.isPlaying = true


        
          playSongs.start()
          currentPlaylist.querySelector('.playing').style.opacity = 1;
          currentPlaylist.querySelector('.playing').style.zIndex = 2;
          currentPlaylist.querySelector('.playing-shadow').style.opacity = 1
        }

        $('#root__now-playing__header__playlist').innerHTML = `${playlist[0].name}`
      }
    }
  },

  start: function() {
    this.renderCurrentPlaylists()
    this.renderBackground()
    this.playPlaylist()
  }
}
handlePlaylists.start()


const handleResponsive = {
  
  handleTopContainerWidth: function() {

      if (window.outerWidth > 1115) {
          rootTop.style.width = mainView.offsetWidth + 'px'
      } else {
          rootTop.style.width = mainView.offsetWidth + 250 + 'px'
          
      }        
  },

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

  handlePlaylists: function() {
      const playlistImgs = document.getElementsByClassName('playlist-img')
      for (let playlistImg of playlistImgs) {
          playlistImg.style.width = $('.playlist').offsetWidth - 32 + 'px'
      }

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
            setTimeout(function() {
              friendsBar.classList.remove('reverseSlideToLeft')
            }, 300)
          }
        }
      }
    }
  },
  start: function() {
    this.handleTextOverflow()
    this.handleTopContainerWidth()
    this.handlePlaylists()
    this.handleResponsiveBar()
  }
}

handleResponsive.start() 


function openMenu() {
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

function handleCurrentPlaylistHover() {
  const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
  currentPlaylists.forEach(playlist => {
      playlist.onmouseover = function() {
          playlist.querySelector('.play-now-shadow').style.opacity= '1';
          playlist.querySelector('.play-now').style.opacity = '1';
          playlist.style.backgroundColor = '#54524a'
      }
      playlist.onmouseout = function() {
          playlist.querySelector('.play-now-shadow').style.opacity= '0';
          playlist.querySelector('.play-now').style.opacity = '0';
          playlist.style.backgroundColor = '#32312e' 
      }
  })
}

function nowPlayingOnClick() {
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
  }
  if (window.outerWidth > 999 && document.getElementById('nowPlaying')) {
      document.getElementById('nowPlaying').remove()
  }
}


openMenu()
handleCurrentPlaylistHover()
nowPlayingOnClick()




window.onresize = function() {
  playSongs.changeNowPlayingColor()
  handleResponsive.start() 
  nowPlayingOnClick()
}


mainView.onscroll = function() {
  handlePlaylists.handleHeaderOpacity()

  if (friendsBar.classList.contains('slideToLeft')) {
    friendsBar.classList.remove('slideToLeft')
    friendsBar.classList.add('reverseSlideToLeft')
    setTimeout(function() {
      friendsBar.classList.remove('reverseSlideToLeft')
    }, 300)      
  }           
}