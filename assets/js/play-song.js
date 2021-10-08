const songImg = document.getElementById('root__now-playing__song__img')
const songName = document.getElementById('root__now-playing__song__info__name')
const songArtist = document.getElementById('root__now-playing__song__info__artist')
const audio = document.getElementById('audio')
const playBtn = document.querySelector('.player-control-play-pause')
const slider = document.getElementById('root__now-playing__player-control__playback-bar__range-slider')
const timeTotal = document.getElementById('root__now-playing__speed-control__playback-bar__minutes-total')



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
      name: "Damn If I Do Ya (Damn If I Don't)", 
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
  currentIndex: 2,
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
        playBtn.src = `./assets/images/now-playing/pause.PNG`
      }
      audio.onpause = function() {
        _this.isPlaying = false;
        playBtn.src = `./assets/images/now-playing/play.PNG`
      }
    }
  },
  handleSliderBar: function() {    
    audio.onloadedmetadata = function() {
       slider.max = audio.duration
      const songDuration = Math.round(audio.duration)
      const minutes = Math.floor(songDuration / 60)
      const seconds = songDuration - minutes * 60
      
      if (seconds < 10) {
        timeTotal.innerHTML = `${minutes}:0${songDuration - minutes * 60}`
      } else {
        timeTotal.innerHTML = `${minutes}:${songDuration - minutes * 60}`
      }
    };
    
    audio.ontimeupdate = function() {
        slider.value = audio.currentTime
        handleRangeSlider()
      };
   

  },
  start: function() {
    this.loadCurrentSong()
    this.handlePlayBtn()
    this.handleSliderBar()
  }
}

app.start()



