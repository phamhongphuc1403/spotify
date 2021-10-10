const $ = document.querySelector.bind(document)
const songImg = $('#root__now-playing__song__img')
const songName = $('#root__now-playing__song__info__name')
const songArtist = $('#root__now-playing__song__info__artist')
const audio = $('#audio')
const playBtn = $('.player-control-play-pause')
const slider = $('#root__now-playing__player-control__playback-bar__range-slider')
const timeTotal = $('#root__now-playing__speed-control__playback-bar__minutes-total')
const timePlayed = $('#root__now-playing__player-control__playback-bar__minutes-played')
const nextBtn = $('.next')
const prevBtn = $('.prev')
const shuffleBtn = $('.shuffle')
const repeatBtn = $('.repeat')
const currentPlaylists = $('#root__main-view__currently-playing__playlists')






const allSongs = [
  { 
    id: 1, 
    name: "Hold On", 
    artist: "Justin Bieber", 
    img: "./assets/songs/albums/justice__justin-bieber.jpg",
    path: "./assets/songs/songs/hold-on__justin-bieber.mp3"
  },
  { 
    id: 2, 
    name: "Weightless", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/weightless__all-time-low.mp3"
  },
  { 
    id: 3, 
    name: "Break Your Little Heart", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/break-your-little-heart__all-time-low.mp3"
  },
  { 
    id: 4,
    name: "Damned If I Do Ya (Damned If I Don't)", 
    artist: "All Time Low", 
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/damn-if-i-do-ya__all-time-low.mp3"
  },
  { 
    id: 5, 
    name: "Stella", 
    artist: "All Time Low",
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/stella__all-time-low.mp3"
  },
  { 
    id: 6, 
    name: "Runaways", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/runaways__all-time-low.mp3"
  },
  { 
    id: 7, 
    name: "Australia", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/jonas-brothers__jonas-brothers.jpg",
    path: "./assets/songs/songs/australia__jonas-brothers.mp3"
  },
  { 
    id: 8, 
    name: "Hesitate", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/hesitate__jonas-brothers.mp3"
  },
  { 
    id: 9, 
    name: "Rollercoaster", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/rollercoaster__jonas-brothers.mp3"
  },
  { id: 10, 
    name: "Die Young",
    artist: "Ke$ha", 
    img: "./assets/songs/albums/warrior__kehsa.jpg",
    path: "./assets/songs/songs/die-young__kesha.mp3"
  },
  { 
    id: 11, 
    name: "Best Song Ever", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/midnight-memories__one-direction.jpg",
    path: "./assets/songs/songs/best-song-ever__one-direction.mp3"
  },
  { 
    id: 12, 
    name: "Daylight", 
    artist: "Maroon 5",
    img: "./assets/songs/albums/overexposed__maroon-5.jpg",
    path: "./assets/songs/songs/daylight__maroon-5.mp3"
  },
  { 
    id: 13, 
    name: "Summer", 
    artist: "Calvin Harris",
    img: "./assets/songs/albums/motion__calvin-harris.jpg",
    path: "./assets/songs/songs/summer__calvin-harris.mp3"
  },
  { 
    id: 14, 
    name: "More Than A Feeling", 
    artist: "Boston",
    img: "./assets/songs/albums/boston__boston.jpg",
    path: "./assets/songs/songs/more-than-a-feeling__boston.mp3"
  },
  { 
    id: 15, 
    name: "Good Times", 
    artist: "All Time Low",
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/good-times__all-time-low.mp3"
  },
  { 
    id: 16, 
    name: "Missing You", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/missing-you__all-time-low.mp3"
  },
  { 
    id: 17, 
    name: "Kids In The Dark", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/kids-in-the-dark__all-time-low.mp3"
  },
  { 
    id: 18, 
    name: "Dear Maria Count Me In", 
    artist: "All Time Low",
    img: "./assets/songs/albums/so-wrong-its-right__all-time-low.jpg",
    path: "./assets/songs/songs/dear-maria-count-me-in__all-time-low.mp3"
  },
  { 
    id: 19, 
    name: "Time Bomb", 
    artist: "All Time Low",
    img: "./assets/songs/albums/dirty-work__all-time-low.jpg",
    path: "./assets/songs/songs/time-bomb__all-time-low.mp3"
  },
  { 
    id: 20, 
    name: "Life of the party", 
    artist: "All Time Low",
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/life-of-the-party__all-time-low.mp3"
  },
  { 
    id: 21, 
    name: "Something's Gotta Give", 
    artist: "All Time Low",
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/somethings-gotta-give__all-time-low.mp3"
  },
  { 
    id: 22, 
    name: "Once In A Lifetime", 
    artist: "All Time Low",
    img: "./assets/songs/singles/once-in-a-lifetime__all-time-low.jpg",
    path: "./assets/songs/songs/once-in-a-lifetime__all-time-low.mp3"
  },
  { 
    id: 23, 
    name: "Monsters (feat. blackbear)", 
    artist: "All Time Low, blackbear",
    img: "./assets/songs/albums/wake-up-sun-shine__all-time-low.jpg",
    path: "./assets/songs/songs/monsters__all-time-low.mp3"
  },
  { 
    id: 24, 
    name: "Used To Love (with Dean Lewis)", 
    artist: "Martin Garrix, Dean Lewis",
    img: "./assets/songs/singles/used-to-love__martin-garrix.jpg",
    path: "./assets/songs/songs/used-to-love__martin-garrix.mp3"
  },
  { 
    id: 25, 
    name: "Drown (feat. Cliton Kane)", 
    artist: "Martin Garrix, Cliton Kane",
    img: "./assets/songs/singles/drown__martin-garrix.jpg",
    path: "./assets/songs/songs/drown__martin-garrix.mp3"
  },
  { 
    id: 26, 
    name: "No Sleep (feat. Bonn)", 
    artist: "Martin Garrix, Bonn",
    img: "./assets/songs/singles/no-sleep__martin-garrix.jpg",
    path: "./assets/songs/songs/no-sleep__martin-garrix.mp3"
  },
  { 
    id: 27, 
    name: "High On Life (feat. Bonn)", 
    artist: "Martin Garrix, Bonn",
    img: "./assets/songs/singles/high-on-life__martin-garrix.jpg",
    path: "./assets/songs/songs/high-on-life__martin-garrix.mp3"
  },
  { 
    id: 28, 
    name: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)", 
    artist: "Martin Garrix, Macklemore, Fall Out Boy",
    img: "./assets/songs/singles/summer-days__martin-garrix.jpg",
    path: "./assets/songs/songs/summer-days__martin-garrix.mp3"
  },
  { 
    id: 29, 
    name: "These Are The Times (feat. JRM)", 
    artist: "Martin Garrix, JRM",
    img: "./assets/songs/singles/these-are-the-times__martin-garrix.jpg",
    path: "./assets/songs/songs/these-are-the-times__martin-garrix.mp3"
  },
  { 
    id: 30, 
    name: "These Are The Times (feat. JRM)", 
    artist: "Martin Garrix, JRM",
    img: "./assets/songs/singles/these-are-the-times__martin-garrix.jpg",
    path: "./assets/songs/songs/these-are-the-times__martin-garrix.mp3"
  },
  { 
    id: 31, 
    name: "Burn Out (feat. Dewain Whitmore)", 
    artist: "Martin Garrix, Dewain Whitmore",
    img: "./assets/songs/singles/burn-out__martin-garrix.jpg",
    path: "./assets/songs/songs/burn-out__martin-garrix.mp3"
  },
  { 
    id: 32, 
    name: "Higher Ground (feat. John Martin)", 
    artist: "Martin Garrix, John Martin",
    img: "./assets/songs/singles/higher-ground__martin-garrix.jpg",
    path: "./assets/songs/songs/higher-ground__martin-garrix.mp3"
  },
  { 
    id: 33, 
    name: "Forbidden Voices", 
    artist: "Martin Garrix",
    img: "./assets/songs/singles/forbidden-voices__martin-garrix.jpg",
    path: "./assets/songs/songs/forbidden-voices__martin-garrix.mp3"
  },
  { 
    id: 34, 
    name: "Waiting For Tomorrow (feat. Mike Shinoda)", 
    artist: "Martin Garrix, Mike Shinoda",
    img: "./assets/songs/albums/bylaw-ep__martin-garrix.jpg",
    path: "./assets/songs/songs/waiting-for-tomorrow__martin-garrix.mp3"
  },
  { 
    id: 35, 
    name: "Sucker", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/sucker__jonas-brothers.mp3"
  },
  { 
    id: 36, 
    name: "Only Human", 
    artist: "Jonas Brothers",
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/only-human__jonas-brothers.mp3"
  },


]


const playSongs = { 
  songs: allSongs,
  currentIndex: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeatSong: false,
  isRepeatPlaylist: false,

  loadCurrentSong: function() {
    songImg.src = `${this.songs[this.currentIndex].img}`
    songName.innerHTML = `${this.songs[this.currentIndex].name}`
    songArtist.innerHTML = `${this.songs[this.currentIndex].artist}`
    audio.src = `${this.songs[this.currentIndex].path}`
  },

  handleTimeTotal: function() {
    audio.onloadedmetadata = function() {
      slider.max = audio.duration
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

  //set default repeat, stop when playlist ends
  noRepeat: function() {
    const _this = this

    this.isRepeatPlaylist = false
    this.isRepeatSong = false
    audio.loop = false
    audio.onended = function() {
      
      const playlistLength = _this.songs.length - 1
        
      if (_this.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
        _this.handleNextSong()
      } else {    //if the next song is the last, stop the playlist 
        _this.currentIndex +=3                                        
        _this.isPlaying = false;                                      
       audio.autoplay = false                                        
        playBtn.src = `./assets/images/now-playing/play.png`          
      }                                                               
    }      
    
    //change repeat button to default
    if($('.repeat-active')) {
      $('.repeat-active').remove()

    }
    repeatBtn.src = './assets/images/now-playing/repeat.PNG'
    repeatBtn.style.opacity = 0.6

    repeatBtn.onmouseover = function() {
      repeatBtn.style.opacity = 1
    }
    repeatBtn.onmouseout = function() {
      repeatBtn.style.opacity = 0.6
    }

  },

  handleSliderBar: function() {   
    const _this = this
    
    //handle slider thumb when drag or click
    slider.oninput = function() {
      _this.handleTimePlayed(slider.value)
      let thumbValue = slider.value / slider.max *100
      setTimeout(_this.audioUpdate)
      slider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'

    }
    slider.onchange = function() {
      _this.handleTimePlayed(slider.value)
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
      
      audio.currentTime = slider.value;      
    }


    //handle slider tracks color
    slider.onmouseenter = function() {

      //add new css file to change the slider thumb when hover
      const head = document.querySelector('head')
      const link = document.createElement('link')
      link.setAttribute('rel',"stylesheet")
      link.setAttribute('href',"./assets/css/slider.css")
      link.setAttribute('id',"slidercss")
      head.appendChild(link)

      //change slider track color when hover
      _this.audioUpdate('#1db954')
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
    }

    slider.onmouseleave = function() {

      //remove 'change slider thumb' css file
      const sliderHover = document.getElementById('slidercss')
      sliderHover.remove()

      //change slider track color to default
      _this.audioUpdate()
      let thumbValue = slider.value / slider.max *100
      slider.style.background = 'linear-gradient(to right,#b3b3b3 0%, #b3b3b3 ' + thumbValue + '%, #535353 ' + thumbValue + '%, #535353 100%)'
    }

  },

  //handle when song plays
  audioUpdate: function(color = '#b3b3b3') {
    const _this = this

    audio.ontimeupdate = function() {
      
      //set 'time played' when song plays
      if (slider.oninput || slider.onchange || slider.onclick) {
        setTimeout(_this.handleTimePlayed());
      } else {
        _this.handleTimePlayed()
      }
      //handle slider track color when song plays
      slider.value = audio.currentTime
      let thumbValue = slider.value / slider.max *100
      slider.style.background = `linear-gradient(to right, ${color} 0%, ${color} ${thumbValue}%, #535353 ${thumbValue}%, #535353 100%)`
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

        audio.onplay = function() {
          _this.isPlaying = true;
          playBtn.src = `./assets/images/now-playing/pause.png`
        }
        audio.onpause = function() {
          _this.isPlaying = false;
          playBtn.src = `./assets/images/now-playing/play.PNG`
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
        _this.isShuffle ? noShuffle() : shuffle()
        
        function shuffle() {
          _this.isShuffle = true
          
          //random order of other songs
          _this.songs.forEach(obj => {
            obj.order = Math.random() * Math.random()
          })
          _this.songs[_this.currentIndex].order = 0
          _this.currentIndex = 0

          //sort songs by order
          _this.songs.sort((a,b) => a.order === b.order ? 0 : a.order < b.order ? -1 : 1)
          console.log(_this.songs)
          

          //add active shuffle button
          shuffleBtn.src = './assets/images/now-playing/shuffle-active.PNG'
          shuffleBtn.style.opacity = 0.8
          const shuffleActive = document.createElement('img')
          shuffleActive.src='./assets/images/now-playing/active-dot.png'
          shuffleActive.classList.add('shuffle-active')
          $("#root__now-playing__player-control__buttons").appendChild(shuffleActive)

          //handle active shuffle button when hover
          shuffleBtn.onmouseover = function() {
            shuffleBtn.style.opacity = 1
            shuffleActive.style.opacity = 1
          }
          shuffleBtn.onmouseout = function() {
            shuffleBtn.style.opacity = 0.8
            shuffleActive.style.opacity = 0.8
          }
        }
        
        function noShuffle() {
          _this.isShuffle = false
          
          //sort songs by id
          _this.songs.sort((a,b) => a.id === b.id ? 0 : a.id < b.id ? -1 : 1)
          
          //change shuffle button to default
          shuffleBtn.src="./assets/images/now-playing/shuffle.PNG"
          $('.shuffle-active').remove()
        }
      }

      //handle repeat button
      repeatBtn.onclick = function() {
        _this.isRepeatPlaylist ?  repeatSong() : _this.isRepeatSong ? _this.noRepeat() : repeatPlaylist()

        function repeatPlaylist() {
          _this.isRepeatPlaylist = true
          _this.isRepeatSong = false
          
          audio.onended = function() {
            const playlistLength = _this.songs.length - 1

            if (_this.currentIndex < playlistLength) {  //if the next song is not the last in the playlist, auto play the song
              _this.handleNextSong()
            } else {    //if the next song is the last, auto play the first song 
              _this.currentIndex = 0                                       
              audio.autoplay = true     
              _this.isPlaying = true;
              _this.loadCurrentSong() 
            }           
          }

          // add repeat playlist button
          repeatBtn.src = './assets/images/now-playing/repeat-playlist-active.PNG'
          repeatBtn.style.opacity = 0.8
          const repeatActive = document.createElement('img')
          repeatActive.src = './assets/images/now-playing/active-dot.png'
          repeatActive.classList.add('repeat-active')
          $("#root__now-playing__player-control__buttons").appendChild(repeatActive)
          handleRepeatHover()
        }

        function repeatSong() {
          _this.isRepeatPlaylist = false
          _this.isRepeatSong = true                   
          audio.loop = true

          repeatBtn.src = './assets/images/now-playing/repeat-song-active.PNG'
          repeatBtn.classList.add('song-active')
          const repeatActive = $('.repeat-active')
          handleRepeatHover()
        }

        //handle repeat button when hover
        function handleRepeatHover() {
          const repeatActive = $('.repeat-active')
          repeatBtn.onmouseover = function() {
            repeatBtn.style.opacity = 1
            repeatActive.style.opacity = 1
          }
          repeatBtn.onmouseout = function() {
            repeatBtn.style.opacity = 0.8
            repeatActive.style.opacity = 0.8
          }
        }
      }
      
  },
  start: function() {  //wrap all function into one 
    if (this.songs) {
      this.loadCurrentSong()
      this.handleTimeTotal()
      this.audioUpdate()
      this.handleSliderBar()
      this.handleBtn()
      this.noRepeat()
    }
  }
}

playSongs.start()  


const handlePlaylists = {
  allPlaylists: [ 
    {
      id: 1, 
      name: "All Time Low", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/all-time-low.jpg",
      songs: allSongs.filter(song => song.artist.includes('All Time Low')),
      play: function() {
        playSongs.songs = this.songs
      }
    },
    {
      id: 2, 
      name: "Liked Songs", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/liked-songs.jpg",
      songs: allSongs
    },
    {
      id: 3, 
      name: "NoCopyrightSounds", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/nocopyrightsounds.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Brothers'))
    },
    {
      id: 4, 
      name: "Jonas Brothers", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/jonas-brothers.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Brothers'))
    },
    {
      id: 5, 
      name: "Martin Garrix", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/martin-garrix.jpg",
      songs: allSongs.filter(song => song.artist.includes('Martin Garrix')),
      play: function() {
        playSongs.songs = this.songs
      }
    },
    {
      id: 6, 
      name: "Jonas Blue", 
      description: '',
      owner: "Phuc",
      img: "./assets/songs/playlists/own-playlists/jonas-blue.jpg",
      songs: allSongs.filter(song => song.artist.includes('Jonas Brothers'))
    }
  ],
  renderCurrentPlaylists: function() {
    const currentPlaylistContent = this.allPlaylists
      .filter(playlist => playlist.id <=6 )
      .map(playlist => `
        <li class="current-playlist" id="${playlist.id}">
            <img src="${playlist.img}">
            <div class="current-playlist__content">
                <span>${playlist.name}</span>
                <img src="/assets/images/main-view/play-now.PNG" class="play-now">
                <div class="play-now-shadow"></div>
            </div>
        </li>`)
      .join('')
    currentPlaylists.innerHTML = currentPlaylistContent
  },
  playPlaylist: function() {
    const _this = this
    const currentPlaylists = document.getElementsByClassName('current-playlist')
    for (let currentPlaylist of currentPlaylists) {
      currentPlaylist.querySelector('.play-now').onclick = function() {
        const playlist = _this.allPlaylists.filter(playlist => playlist.id == currentPlaylist.getAttribute('id'))
        playSongs.songs = playlist[0].songs 
        audio.autoplay = true
        playSongs.isPlaying = true
        playBtn.src = `./assets/images/now-playing/pause.png`
        playSongs.currentIndex = 0;
        playSongs.start()
        console.log(playSongs.songs)
      }
    }
  },

  start: function() {
    this.renderCurrentPlaylists()
    this.playPlaylist()
  }
}
handlePlaylists.start()
