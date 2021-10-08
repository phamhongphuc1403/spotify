const $ = document.querySelector.bind(document)
const songImg = $('#root__now-playing__song__img')
const songName = $('#root__now-playing__song__info__name')
const songArtist = $('#root__now-playing__song__info__artist')
const audio = $('#audio')
const playBtn = $('.player-control-play-pause')
const slider = $('#root__now-playing__player-control__playback-bar__range-slider')
const timeTotal = $('#root__now-playing__speed-control__playback-bar__minutes-total')
const timePlayed = $('#root__now-playing__player-control__playback-bar__minutes-played')

const app = { 
  songs: [
    { 
      id: 1, 
      name: "Weightless", 
      artist: "All Time Low",
      img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
      path: "./assets/songs/songs/weightless____all-time-low.mp3"
    },
    { 
      id: 2, 
      name: "Break Your Little Heart", 
      artist: "All Time Low",
      img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
      path: "./assets/songs/songs/break-your-little-heart__all-time-low.mp3"
    },
    { 
      id: 3,
      name: "Damned If I Do Ya (Damned If I Don't)", 
      artist: "All Time Low", 
      img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
      path: "./assets/songs/songs/damn-if-i-do-ya__all-time-low.mp3"
    },
    { 
      id: 4, 
      name: "Hold On", 
      artist: "Justin Bieber", 
      img: "./assets/songs/albums/justice__justin-bieber.jpg",
      path: "./assets/songs/songs/hold-on__justin-bieber.mp3"
    },
    { id: 5, 
      name: "Die Young",
      artist: "Ke$ha", 
      img: "./assets/songs/albums/warrior__kehsa.jpg",
      path: "./assets/songs/songs/die-young__kesha.mp3"
    }
  ],
  currentIndex: 3,
  isPlaying: false,

  loadCurrentSong: function() {
    songImg.src = `${this.songs[this.currentIndex].img}`
    songName.innerHTML = `${this.songs[this.currentIndex].name}`
    songArtist.innerHTML = `${this.songs[this.currentIndex].artist}`
    audio.src = `${this.songs[this.currentIndex].path}`
  },

  handlePlayBtn: function() {
    const _this = this
    playBtn.onclick = function() {
      _this.isPlaying ? audio.pause() : audio.play()

      audio.onplay = function() {
        _this.isPlaying = true;
        playBtn.src = `./assets/images/now-playing/pause.png`
        _this.audioUpdate()
      }
      audio.onpause = function() {
        _this.isPlaying = false;
        playBtn.src = `./assets/images/now-playing/play.PNG`
      }
    }
  },

  handleTimeTotal: function() {
    audio.onloadedmetadata = function() {
      slider.max = audio.duration
      const songDuration = Math.floor(audio.duration)
      const minutes = Math.floor(songDuration / 60)
      const seconds = songDuration - minutes * 60
      if (seconds < 10) {
        timeTotal.innerHTML = `${minutes}:0${songDuration - minutes * 60}`
      } else {
        timeTotal.innerHTML = `${minutes}:${songDuration - minutes * 60}`
      }
    }
  }, 

  handleTimePlayed: function(value = Math.round(audio.currentTime)) {
    const currentTimeCount = value
      let currentMinute = Math.floor(currentTimeCount / 60)
      let currentSecond = currentTimeCount - currentMinute * 60
      currentSecond < 10 ? timePlayed.innerHTML = `${currentMinute}:0${currentSecond}`: timePlayed.innerHTML = `${currentMinute}:${currentSecond}`
  },

  handleSliderBar: function() {   
    const _this = this

    slider.oninput = function() {
      _this.handleTimePlayed(slider.value)
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
      audio.ontimeupdate = slider.value      
    };

    slider.onmouseenter = function() {
      const head = document.querySelector('head')
      const link = document.createElement('link')
      link.setAttribute('rel',"stylesheet")
      link.setAttribute('href',"./assets/css/slider.css")
      link.setAttribute('id',"slidercss")
      head.appendChild(link)
      _this.audioUpdate('#1db954')
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
    }

    slider.onmouseleave = function() {
      const sliderHover = document.getElementById('slidercss')
      sliderHover.remove()
      _this.audioUpdate()
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right,#b3b3b3 0%, #b3b3b3 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
    }

  },

  audioUpdate: function(color = '#b3b3b3') {
    const _this = this
    audio.ontimeupdate = function() {
      // const currentTimeCount = Math.round(audio.currentTime)
      // let currentMinute = Math.floor(currentTimeCount / 60)
      // let currentSecond = currentTimeCount - currentMinute * 60
      // currentSecond < 10 ? timePlayed.innerHTML = `${currentMinute}:0${currentSecond}`: timePlayed.innerHTML = `${currentMinute}:${currentSecond}`
      _this.handleTimePlayed()
      slider.value = audio.currentTime
      let thumbValue = slider.value / slider.max *100
      slider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
    }
  },



  start: function() {
    this.loadCurrentSong()
    this.handleTimeTotal()
    this.handleSliderBar()
    this.handlePlayBtn()
    
  }
}

app.start()



