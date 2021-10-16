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




const allSongs = [
  { 
    id: 1, 
    name: "Hold On", 
    artist: "Justin Bieber", 
    img: "./assets/songs/albums/justice__justin-bieber.jpg",
    path: "./assets/songs/songs/hold-on__justin-bieber.mp3",
    backgroundColor: '#095250'
  },
  { 
    id: 2, 
    name: "Weightless", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/weightless__all-time-low.mp3",
    backgroundColor: '#70684e'
  },
  { 
    id: 3, 
    name: "Break Your Little Heart", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/break-your-little-heart__all-time-low.mp3",
    backgroundColor: '#70684e'
  },
  { 
    id: 4,
    name: "Damned If I Do Ya (Damned If I Don't)", 
    artist: "All Time Low", 
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/damn-if-i-do-ya__all-time-low.mp3",
    backgroundColor: '#70684e'
  },
  { 
    id: 5, 
    name: "Stella", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/stella__all-time-low.mp3",
    backgroundColor: '#70684e'
  },
  { 
    id: 6, 
    name: "Runaways", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/runaways__all-time-low.mp3",
    backgroundColor: '#466668'
  },
  { 
    id: 7, 
    name: "Australia", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/jonas-brothers__jonas-brothers.jpg",
    path: "./assets/songs/songs/australia__jonas-brothers.mp3",
    backgroundColor: '#585657'
  },
  { 
    id: 8, 
    name: "Hesitate", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/hesitate__jonas-brothers.mp3",
    backgroundColor: '#5c6e6e'
  },
  { 
    id: 9, 
    name: "Rollercoaster", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/rollercoaster__jonas-brothers.mp3",
    backgroundColor: '#5c6e6e'
  },
  { id: 10, 
    name: "Die Young",
    artist: "Ke$ha", 
    img: "./assets/songs/albums/warrior__kehsa.jpg",
    path: "./assets/songs/songs/die-young__kesha.mp3",
    backgroundColor: '#5c6e6e'
  },
  { 
    id: 11, 
    name: "Best Song Ever", 
    artist: "One Direction",
    img: "./assets/songs/albums/midnight-memories__one-direction.jpg",
    path: "./assets/songs/songs/best-song-ever__one-direction.mp3",
    backgroundColor: '#6a4240'
  },
  { 
    id: 12, 
    name: "Daylight", 
    artist: "Maroon 5",
    img: "./assets/songs/albums/overexposed__maroon-5.jpg",
    path: "./assets/songs/songs/daylight__maroon-5.mp3",
    backgroundColor: '#743b53',
  },
  { 
    id: 13, 
    name: "Summer", 
    artist: "Calvin Harris",
    img: "./assets/songs/albums/motion__calvin-harris.jpg",
    path: "./assets/songs/songs/summer__calvin-harris.mp3",
    backgroundColor: '#545658'
  },
  { 
    id: 14, 
    name: "More Than A Feeling", 
    artist: "Boston",
    img: "./assets/songs/albums/boston__boston.jpg",
    path: "./assets/songs/songs/more-than-a-feeling__boston.mp3",
    backgroundColor: '#812824'
  },
  { 
    id: 15, 
    name: "Good Times", 
    artist: "All Time Low",
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/good-times__all-time-low.mp3",
    backgroundColor: '#29373c'
  },
  { 
    id: 16, 
    name: "Missing You", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/missing-you__all-time-low.mp3",
    backgroundColor: '#466668'
  },
  { 
    id: 17, 
    name: "Kids In The Dark", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/kids-in-the-dark__all-time-low.mp3",
    backgroundColor: '#466668'
  },
  { 
    id: 18, 
    name: "Dear Maria Count Me In", 
    artist: "All Time Low",
    img: "./assets/songs/albums/so-wrong-its-right__all-time-low.jpg",
    path: "./assets/songs/songs/dear-maria-count-me-in__all-time-low.mp3",
    backgroundColor: '#665303'
  },
  { 
    id: 19, 
    name: "Time Bomb", 
    artist: "All Time Low",
    img: "./assets/songs/albums/dirty-work__all-time-low.jpg",
    path: "./assets/songs/songs/time-bomb__all-time-low.mp3",
    backgroundColor: '#02446c'
  },
  { 
    id: 20, 
    name: "Life of the party", 
    artist: "All Time Low",
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/life-of-the-party__all-time-low.mp3",
    backgroundColor: '#29373c'
  },
  { 
    id: 21, 
    name: "Something's Gotta Give", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/somethings-gotta-give__all-time-low.mp3",
    backgroundColor: '#466668'
  },
  { 
    id: 22, 
    name: "Once In A Lifetime", 
    artist: "All Time Low",
    img: "./assets/songs/singles/once-in-a-lifetime__all-time-low.jpg",
    path: "./assets/songs/songs/once-in-a-lifetime__all-time-low.mp3",
    backgroundColor: '#623023'
  },
  { 
    id: 23, 
    name: "Monsters (feat. blackbear)", 
    artist: "All Time Low, blackbear",
    img: "./assets/songs/albums/wake-up-sun-shine__all-time-low.jpg",
    path: "./assets/songs/songs/monsters__all-time-low.mp3",
    backgroundColor: '#64593c'
  },
  { 
    id: 24, 
    name: "Used To Love (with Dean Lewis)", 
    artist: "Martin Garrix, Dean Lewis",
    img: "./assets/songs/singles/used-to-love__martin-garrix.jpg",
    path: "./assets/songs/songs/used-to-love__martin-garrix.mp3",
    backgroundColor: '#203e51'
  },
  { 
    id: 25, 
    name: "Drown (feat. Cliton Kane)", 
    artist: "Martin Garrix, Cliton Kane",
    img: "./assets/songs/singles/drown__martin-garrix.jpg",
    path: "./assets/songs/songs/drown__martin-garrix.mp3",
    backgroundColor: '#484747'
  },
  { 
    id: 26, 
    name: "No Sleep (feat. Bonn)", 
    artist: "Martin Garrix, Bonn",
    img: "./assets/songs/singles/no-sleep__martin-garrix.jpg",
    path: "./assets/songs/songs/no-sleep__martin-garrix.mp3",
    backgroundColor: '#523825'
  },
  { 
    id: 27, 
    name: "High On Life (feat. Bonn)", 
    artist: "Martin Garrix, Bonn",
    img: "./assets/songs/singles/high-on-life__martin-garrix.jpg",
    path: "./assets/songs/songs/high-on-life__martin-garrix.mp3",
    backgroundColor: '#3b3e3e'
  },
  { 
    id: 28, 
    name: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)", 
    artist: "Martin Garrix, Macklemore, Fall Out Boy",
    img: "./assets/songs/singles/summer-days__martin-garrix.jpg",
    path: "./assets/songs/songs/summer-days__martin-garrix.mp3",
    backgroundColor: '#2e5a62',
  },  
  { 
    id: 29, 
    name: "These Are The Times (feat. JRM)", 
    artist: "Martin Garrix, JRM",
    img: "./assets/songs/singles/these-are-the-times__martin-garrix.jpg",
    path: "./assets/songs/songs/these-are-the-times__martin-garrix.mp3",
    backgroundColor: '#545454'
  },
  { 
    id: 30, 
    name: "Burn Out (feat. Dewain Whitmore)", 
    artist: "Martin Garrix, Dewain Whitmore",
    img: "./assets/songs/singles/burn-out__martin-garrix.jpg",
    path: "./assets/songs/songs/burn-out__martin-garrix.mp3",
    backgroundColor: '#1d162b'
  },
  { 
    id: 32, 
    name: "Higher Ground (feat. John Martin)", 
    artist: "Martin Garrix, John Martin",
    img: "./assets/songs/singles/higher-ground__martin-garrix.jpg",
    path: "./assets/songs/songs/higher-ground__martin-garrix.mp3",
    backgroundColor: '#4e4e4e'
  },
  { 
    id: 33, 
    name: "Forbidden Voices", 
    artist: "Martin Garrix",
    img: "./assets/songs/singles/forbidden-voices__martin-garrix.jpg",
    path: "./assets/songs/songs/forbidden-voices__martin-garrix.mp3",
    backgroundColor: '#2f2f2f'
  },
  { 
    id: 34, 
    name: "Waiting For Tomorrow (feat. Mike Shinoda)", 
    artist: "Martin Garrix, Mike Shinoda",
    img: "./assets/songs/albums/bylaw-ep__martin-garrix.jpg",
    path: "./assets/songs/songs/waiting-for-tomorrow__martin-garrix.mp3",
    backgroundColor: '#3c1f29'
  },
  { 
    id: 35, 
    name: "Sucker", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/sucker__jonas-brothers.mp3",
    backgroundColor: '#5c6e6e'
  },
  { 
    id: 36, 
    name: "Only Human", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/only-human__jonas-brothers.mp3",
    backgroundColor: '#5c6e6e'
  },
  { 
    id: 37, 
    name: "By Your Side", 
    artist: "Jonas Blue",
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/by-your-side__jonas-blue.mp3",
    backgroundColor: '#435864'
  },
  { 
    id: 38, 
    name: "Mama", 
    artist: "Jonas Blue",
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/mama__jonas-blue.mp3",
    backgroundColor: '#435864'
  },
  { 
    id: 39, 
    name: "Polaroid", 
    artist: "Jonas Blue",
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/polaroid__jonas-blue.mp3",
    backgroundColor: '#435864'
  },
  { 
    id: 40, 
    name: "Rise", 
    artist: "Jonas Blue",
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/rise__jonas-blue.mp3",
    backgroundColor: '#435864'
  },
  { 
    id: 41, 
    name: "Younger", 
    artist: "Jonas Blue",
    img: "./assets/songs/singles/younger__jonas-blue.jpg",
    path: "./assets/songs/songs/younger__jonas-blue.mp3",
    backgroundColor: '#85171d'
  },
  { 
    id: 42, 
    name: "Perfect Stranger", 
    artist: "Jonas Blue",
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/perfect-stranger__jonas-blue.mp3",
    backgroundColor: '#435864'
  },

]


const playSongs = { 
  songs: allSongs,
  id: 0,
  currentIndex: 0,
  isPlaying: false,
  isShuffle: true,
  isRepeatSong: false,
  isRepeatPlaylist: false,
  isMute: false,

  loadCurrentSong: function() {
    songImg.src = `${this.songs[this.currentIndex].img}`
    songName.innerHTML = `${this.songs[this.currentIndex].name}`
    songArtist.innerHTML = `${this.songs[this.currentIndex].artist}`
    audio.src = `${this.songs[this.currentIndex].path}`
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
      _this.handleTimePlayed(playbackSlider.value)
      let thumbValue = playbackSlider.value / playbackSlider.max *100
      setTimeout(_this.audioUpdate)
      playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'

    }
    playbackSlider.onchange = function() {
      _this.handleTimePlayed(playbackSlider.value)
      let thumbValue = playbackSlider.value / playbackSlider.max *100
      playbackSlider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
      
      audio.currentTime = playbackSlider.value;      
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

  //handle when song plays
  audioUpdate: function(color = '#b3b3b3') {
    const _this = this

    audio.ontimeupdate = function() {
      
      //set 'time played' when song plays
      if (playbackSlider.oninput || playbackSlider.onchange || playbackSlider.onclick) {
        setTimeout(_this.handleTimePlayed());
      } else {
        _this.handleTimePlayed()
      }
      //handle slider track color when song plays
      playbackSlider.value = audio.currentTime
      let thumbValue = playbackSlider.value / playbackSlider.max *100
      playbackSlider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
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
    playBtn.onclick = function() {                                  
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
      this.changeNowPlayingColor()

      if (this.isPlaying) {
        audio.play()
        playBtn.src = `./assets/images/now-playing/pause.pnf`
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

window.onresize  = function() {
  playSongs.changeNowPlayingColor()
}

const handlePlaylists = {
  allPlaylists: [ 
    {
      id: 1, 
      name: "All Time Low", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/all-time-low.jpg",
      songs: allSongs.filter(song => song.artist.includes('All Time Low')),
      backgroundColor: '142, 128, 86',
      headerColor: '64, 58, 38'
    },
    {
      id: 2, 
      name: "Liked Songs", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/liked-songs.jpg",
      songs: allSongs,
      backgroundColor: '74, 53, 144',
      headerColor: '32, 22, 64'
    },
    {
      id: 3, 
      name: "NoCopyrightSounds", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/nocopyrightsounds.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Brothers')),
      backgroundColor: '83, 83, 83',
      headerColor: '33, 33, 33'
    },
    {
      id: 4, 
      name: "Jonas Brothers", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/jonas-brothers.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Brothers')),
      backgroundColor: '180, 200, 200',
      headerColor: '80, 90, 90'
    },
    {
      id: 5, 
      name: "Martin Garrix", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/martin-garrix.jpg",
      songs: allSongs.filter(song => song.artist.includes('Martin Garrix')),
      backgroundColor: '13, 54, 75',
      headerColor: '3, 22, 32'
    },
    {
      id: 6, 
      name: "Jonas Blue", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/jonas-blue.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Blue')),
      backgroundColor: '3, 24, 60',
      headerColor: '0, 10, 26'
    }
  ],

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
  renderBackground: function() {
    const arr = []
    const currentPlaylists = Array.from(document.getElementsByClassName('current-playlist'));
    console.log(currentPlaylists)
    currentPlaylists.forEach((playlist, index) => {
      
      playlist.onmouseenter = function() {
        mainView.style.backgroundImage = `linear-gradient(rgba(${handlePlaylists.allPlaylists[index].backgroundColor}, 0.35) 0%, #121212 15%)`
        // rootTop.style.backgroundColor = `rgba(${handlePlaylists.allPlaylists[index].headerColor}, 0)`
        // arr.shift()
        arr.unshift(handlePlaylists.allPlaylists[index].headerColor);
      }
    })
    function handleHeaderOpacity() {
      mainView.onscroll = function() {
        if (100 - Math.ceil(mainView.scrollTop) <= 0 && window.outerWidth > 1024) {
          rootTop.style.backgroundColor = `rgba(${arr[0]}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
        } else {
          rootTop.style.backgroundColor = 'transparent'
        }
      }
    }
    handleHeaderOpacity()
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

        //   // auto play the playlist
          audio.autoplay = true
          playSongs.isPlaying = true
        //   // playBtn.src = './assets/images/now-playing/pause.png'
        
        // //   //handle shuffle

        
          playSongs.start()
          currentPlaylist.querySelector('.playing').style.opacity = 1;
          currentPlaylist.querySelector('.playing').style.zIndex = 2;
          currentPlaylist.querySelector('.playing-shadow').style.opacity = 1
        }
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

