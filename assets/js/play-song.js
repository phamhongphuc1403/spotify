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

let isAtHome = true;
const trace = [mainView]
let currentPage = 0;


const allSongs = [
  { 
    id: 1, 
    name: "Hold On", 
    artist: ["Justin Bieber"], 
    img: "./assets/songs/albums/justice__justin-bieber.jpg",
    path: "./assets/songs/songs/hold-on__justin-bieber.mp3",
    album: "Justice",
    backgroundColor: '#095250',
    tag: ['favorite', ]
  },
  { 
    id: 2, 
    name: "Weightless", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/weightless__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', ]
  },
  { 
    id: 3, 
    name: "Break Your Little Heart", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/break-your-little-heart__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', ]
  },
  { 
    id: 4,
    name: "Damned If I Do Ya (Damned If I Don't)", 
    artist: ["All Time Low"], 
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/damn-if-i-do-ya__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', ]
  },
  { 
    id: 5, 
    name: "Stella", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/nothing-personal__all-time-low.jpg",
    path: "./assets/songs/songs/stella__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', ]
  },
  { 
    id: 6, 
    name: "Runaways", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/runaways__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', ]
  },
  { 
    id: 7, 
    name: "Australia", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/jonas-brothers__jonas-brothers.jpg",
    path: "./assets/songs/songs/australia__jonas-brothers.mp3",
    album: ["Jonas Brothers"],
    backgroundColor: '#585657',
    tag: ['favorite', ]
  },
  { 
    id: 8, 
    name: "Hesitate", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/hesitate__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', ]
  },
  { 
    id: 9, 
    name: "Rollercoaster", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/rollercoaster__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', ]
  },
  { id: 10, 
    name: "Die Young",
    artist: ["Ke$ha"], 
    img: "./assets/songs/albums/warrior__kehsa.jpg",
    path: "./assets/songs/songs/die-young__kesha.mp3",
    album: "Warrior",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', ]
  },
  { 
    id: 11, 
    name: "Best Song Ever", 
    artist: ["One Direction"],
    img: "./assets/songs/albums/midnight-memories__one-direction.jpg",
    path: "./assets/songs/songs/best-song-ever__one-direction.mp3",
    album: "Midnight Memories",
    backgroundColor: '#6a4240',
    tag: ['favorite', ]
  },
  { 
    id: 12, 
    name: "Daylight", 
    artist: ["Maroon 5"],
    img: "./assets/songs/albums/overexposed__maroon-5.jpg",
    path: "./assets/songs/songs/daylight__maroon-5.mp3",
    album: "Overexposed",
    backgroundColor: '#743b53',
    tag: ['favorite', ]
  },
  { 
    id: 13, 
    name: "Summer", 
    artist: ["Calvin Harris"],
    img: "./assets/songs/albums/motion__calvin-harris.jpg",
    path: "./assets/songs/songs/summer__calvin-harris.mp3",
    album: "Motion",
    backgroundColor: '#545658',
    tag: ['favorite', ]
  },
  { 
    id: 14, 
    name: "More Than A Feeling", 
    artist: ["Boston"],
    img: "./assets/songs/albums/boston__boston.jpg",
    path: "./assets/songs/songs/more-than-a-feeling__boston.mp3",
    album: "Boston",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 15, 
    name: "Good Times", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/good-times__all-time-low.mp3",
    album: "Last Young Renegade",
    backgroundColor: '#29373c',
    tag: ['favorite', ]
  },
  { 
    id: 16, 
    name: "Missing You", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/missing-you__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', ]
  },
  { 
    id: 17, 
    name: "Kids In The Dark", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/kids-in-the-dark__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', ]
  },
  { 
    id: 18, 
    name: "Dear Maria Count Me In", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/so-wrong-its-right__all-time-low.jpg",
    path: "./assets/songs/songs/dear-maria-count-me-in__all-time-low.mp3",
    album: "So Wrong, It's Right",
    backgroundColor: '#665303',
    tag: ['favorite', ]
  },
  { 
    id: 19, 
    name: "Time Bomb", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/dirty-work__all-time-low.jpg",
    path: "./assets/songs/songs/time-bomb__all-time-low.mp3",
    album: "Dirty Work",
    backgroundColor: '#02446c',
    tag: ['favorite', ]
  },
  { 
    id: 20, 
    name: "Life of the party", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/last-young-renegade__all-time-low.jpg",
    path: "./assets/songs/songs/life-of-the-party__all-time-low.mp3",
    album: "Last Young Renegade",
    backgroundColor: '#29373c',
    tag: ['favorite', ]
  },
  { 
    id: 21, 
    name: "Something's Gotta Give", 
    artist: ["All Time Low"],
    img: "./assets/songs/albums/future-hearts__all-time-low.jpg",
    path: "./assets/songs/songs/somethings-gotta-give__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', ]
  },
  { 
    id: 22, 
    name: "Once In A Lifetime", 
    artist: ["All Time Low"],
    img: "./assets/songs/singles/once-in-a-lifetime__all-time-low.jpg",
    path: "./assets/songs/songs/once-in-a-lifetime__all-time-low.mp3",
    album: "Once In A Life Time",
    backgroundColor: '#623023',
    tag: ['favorite', ]
  },
  { 
    id: 23, 
    name: "Monsters (feat. blackbear)", 
    artist: ["All Time Low", "blackbear"],
    img: "./assets/songs/albums/wake-up-sun-shine__all-time-low.jpg",
    path: "./assets/songs/songs/monsters__all-time-low.mp3",
    album: "Wake Up, Sunshine",
    backgroundColor: '#64593c',
    tag: ['favorite', ]
  },
  { 
    id: 24, 
    name: "Used To Love (with Dean Lewis)", 
    artist: ["Martin Garrix", "Dean Lewis"],
    img: "./assets/songs/singles/used-to-love__martin-garrix.jpg",
    path: "./assets/songs/songs/used-to-love__martin-garrix.mp3",
    album: "Used To Love (with Dean Lewis)",
    backgroundColor: '#203e51',
    tag: ['favorite', ]
  },
  { 
    id: 25, 
    name: "Drown (feat. Cliton Kane)", 
    artist: ["Martin Garrix", "Cliton Kane"],
    img: "./assets/songs/singles/drown__martin-garrix.jpg",
    path: "./assets/songs/songs/drown__martin-garrix.mp3",
    album: "Drown (feat. Cliton Kane",
    backgroundColor: '#484747',
    tag: ['favorite', ]
  },
  { 
    id: 26, 
    name: "No Sleep (feat. Bonn)", 
    artist: ["Martin Garrix", "Bonn"],
    img: "./assets/songs/singles/no-sleep__martin-garrix.jpg",
    path: "./assets/songs/songs/no-sleep__martin-garrix.mp3",
    album: "No Sleep (feat. Bonn)",
    backgroundColor: '#523825',
    tag: ['favorite', ]
  },
  { 
    id: 27, 
    name: "High On Life (feat. Bonn)", 
    artist:[ "Martin Garrix", "Bonn"],
    img: "./assets/songs/singles/high-on-life__martin-garrix.jpg",
    path: "./assets/songs/songs/high-on-life__martin-garrix.mp3",
    album: "High On Life (feat. Bonn)",
    backgroundColor: '#3b3e3e',
    tag: ['favorite', ]
  },
  { 
    id: 28, 
    name: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)", 
    artist: ["Martin Garrix", "Macklemore", "Fall Out Boy"],
    img: "./assets/songs/singles/summer-days__martin-garrix.jpg",
    path: "./assets/songs/songs/summer-days__martin-garrix.mp3",
    album: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
    backgroundColor: '#2e5a62',
    tag: ['favorite', ]
  },  
  { 
    id: 29, 
    name: "These Are The Times (feat. JRM)", 
    artist: ["Martin Garrix", "JRM"],
    img: "./assets/songs/singles/these-are-the-times__martin-garrix.jpg",
    path: "./assets/songs/songs/these-are-the-times__martin-garrix.mp3",
    album: "These Are The Times (feat. JRM)",
    backgroundColor: '#545454',
    tag: ['favorite', ]
  },
  { 
    id: 30, 
    name: "Burn Out (feat. Dewain Whitmore)", 
    artist: ["Martin Garrix", "Dewain Whitmore"],
    img: "./assets/songs/singles/burn-out__martin-garrix.jpg",
    path: "./assets/songs/songs/burn-out__martin-garrix.mp3",
    album: "Burn Out (feat. Dewain Whitmore)",
    backgroundColor: '#1d162b',
    tag: ['favorite', ]
  },
  { 
    id: 31, 
    name: "Higher Ground (feat. John Martin)", 
    artist: ["Martin Garrix", "John Martin"],
    img: "./assets/songs/singles/higher-ground__martin-garrix.jpg",
    path: "./assets/songs/songs/higher-ground__martin-garrix.mp3",
    album: "Higher Ground (feat. John Martin)",
    backgroundColor: '#4e4e4e',
    tag: ['favorite', ]
  },
  { 
    id: 32, 
    name: "Forbidden Voices", 
    artist: ["Martin Garrix"],
    img: "./assets/songs/singles/forbidden-voices__martin-garrix.jpg",
    path: "./assets/songs/songs/forbidden-voices__martin-garrix.mp3",
    album: "Forbidden Voices",
    backgroundColor: '#2f2f2f',
    tag: ['favorite', ]
  },
  { 
    id: 33, 
    name: "Waiting For Tomorrow (feat. Mike Shinoda)", 
    artist: ["Martin Garrix", "Mike Shinoda"],
    img: "./assets/songs/albums/bylaw-ep__martin-garrix.jpg",
    path: "./assets/songs/songs/waiting-for-tomorrow__martin-garrix.mp3",
    album: "BYLAW EP",
    backgroundColor: '#3c1f29',
    tag: ['favorite', ]
  },
  { 
    id: 34, 
    name: "Sucker", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/sucker__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', ]
  },
  { 
    id: 35, 
    name: "Only Human", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/happiness-begins__jonas-brothers.jpg",
    path: "./assets/songs/songs/only-human__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', ]
  },
  { 
    id: 36, 
    name: "By Your Side", 
    artist: ["Jonas Blue", "RAYE"],
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/by-your-side__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', ]
  },
  { 
    id: 37, 
    name: "Mama", 
    artist: ["Jonas Blue", "William Singe"],
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/mama__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', ]
  },
  { 
    id: 38, 
    name: "Polaroid", 
    artist: ["Jonas Blue", "Liam Payne", "Lennon Stella"],
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/polaroid__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', ]
  },
  { 
    id: 39, 
    name: "Rise", 
    artist: ["Jonas Blue", "Jack & Jack"],
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/rise__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', ]
  },
  { 
    id: 40, 
    name: "Younger", 
    artist: ["Jonas Blue", "HRVY"],
    img: "./assets/songs/singles/younger__jonas-blue.jpg",
    path: "./assets/songs/songs/younger__jonas-blue.mp3",
    album: "Younger",
    backgroundColor: '#85171d',
    tag: ['favorite', ]
  },
  { 
    id: 41, 
    name: "Perfect Stranger", 
    artist: ["Jonas Blue", "JP Cooper"],
    img: "./assets/songs/albums/blue__jonas-blue.jpg",
    path: "./assets/songs/songs/perfect-stranger__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', ]
  },
  { 
    id: 42, 
    name: "Walk Thru Fire", 
    artist: ["Vicetone", "Meron Ryan"],
    img: "./assets/songs/singles/walk-thru-fire__vicetone.jpg",
    path: "./assets/songs/songs/walk-thru-fire__vicetone__meron-ryan.mp3",
    album: "Walk Thru Fire",
    backgroundColor: '#8d0b16',
    tag: ['favorite', ]
  },
  { 
    id: 43, 
    name: "Waiting", 
    artist: ["Vicetone", "Daisy Guttridge"],
    img: "./assets/songs/singles/waiting__vicetone.jpg",
    path: "./assets/songs/songs/waiting__vicetone__daisy-guttridge.mp3",
    album: "Waiting",
    backgroundColor: '#9d131d',
    tag: ['favorite', ]
  },
  { 
    id: 44, 
    name: "Something Strange", 
    artist: ["Vicetone", "Daisy Guttridge"],
    img: "./assets/songs/singles/something-strange__vicetone.jpg",
    path: "./assets/songs/songs/something-strange__vicetone__haley-reinhart.mp3",
    album: "Something Strange",
    backgroundColor: '#1e4062',
    tag: ['favorite', ]
  },
  { 
    id: 45, 
    name: "Somebody I'm Not", 
    artist: ["Martin Jensen", "Bjrnskov"],
    img: "./assets/songs/singles/somebody-im-not__martin-jensen.jpg",
    path: "./assets/songs/songs/somebody-im-not__martin-jensen__bjrnskov.mp3",
    album: "Somebody I'm Not",
    backgroundColor: '#083347',
    tag: ['favorite', ]
  },
  { 
    id: 46, 
    name: "Peace Of Mind", 
    artist: ["Boston"],
    img: "./assets/songs/albums/boston__boston.jpg",
    path: "./assets/songs/songs/peace-of-mind__boston.mp3",
    album: "Boston",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 47, 
    name: "We Built This City", 
    artist: ["Starship"],
    img: "./assets/songs/albums/knee-deep-in-the-hoopla__starship.jpg",
    path: "./assets/songs/songs/we-built-this-city__starship.mp3",
    album: "Knee Deep In The Hoopla",
    backgroundColor: '#525147',
    tag: ['favorite', 'rock']
  },
  { 
    id: 48, 
    name: "Burning Heart - From &quotRocky IV&quot Soundtrack", 
    artist: ["Survivor"],
    img: "./assets/songs/albums/rocky-iv__survivor.jpg",
    path: "./assets/songs/songs/burning-heart__survivor.mp3",
    album: "Rocky IV",
    backgroundColor: '#72322e',
    tag: ['favorite', 'rock']
  },
  { 
    id: 49, 
    name: "Sweet Child O' Mine", 
    artist: ["Gun N' Roses"],
    img: "./assets/songs/albums/appetite-for-destruction__gun-n-roses.jpg",
    path: "./assets/songs/songs/sweet-child-o-mine__guns-n-roses.mp3",
    album: "Appetite For Destruction",
    backgroundColor: '#63212c',
    tag: ['favorite', 'rock']
  },
  { 
    id: 50, 
    name: "Carry On Wayward Son", 
    artist: ["Kansas"],
    img: "./assets/songs/albums/leftoverture__kansas.jpg",
    path: "./assets/songs/songs/carry-on-wayward-son__kansas.mp3",
    album: "Leftoverture",
    backgroundColor: '#645951',
    tag: ['favorite', 'rock']
  },
  { 
    id: 51, 
    name: "Who's In Your Head", 
    artist: ["Jonas Brothers"],
    img: "./assets/songs/albums/setlist-the-remember-this-tour__jonas-brothers.jpg",
    path: "./assets/songs/songs/whos-in-your-head__jonas-brothers.mp3",
    album: "Setlist: The Remember This Tour",
    backgroundColor: '#4a6b21',
    tag: ['favorite', ]
  },
  { 
    id: 52, 
    name: "Seven Nation Army", 
    artist: ["The White Stripes"],
    img: "./assets/songs/albums/elephant__the-white-stripes.jpg",
    path: "./assets/songs/songs/seven-nation-army__the-white-stripes.mp3",
    album: "Elephant",
    backgroundColor: '#bc3204',
    tag: ['favorite', 'rock']
  },
  { 
    id: 53, 
    name: "Rain", 
    artist: ["The Cult"],
    img: "./assets/songs/albums/love__the-cult.jpg",
    path: "./assets/songs/songs/rain__the-cult.mp3",
    album: "Love",
    backgroundColor: '#071923',
    tag: ['favorite', 'rock']
  },
  { 
    id: 54, 
    name: "House Of The Rising Sun", 
    artist: ["The Animals"],
    img: "./assets/songs/albums/the-animals__the-animals.jpg",
    path: "./assets/songs/songs/house-of-the-rising-sun__the-animals.mp3",
    album: "The Animals",
    backgroundColor: '#516062',
    tag: ['favorite', 'rock']
  },
]
function shuffleSongs() {
  allSongs.forEach(song => song.order = Math.floor(Math.random() * (allSongs.length - 1)) + 1)
  allSongs.sort((a, b) => a.order - b.order)
  allSongs.forEach((song,index) => song.id = index + 1)
}
shuffleSongs()
const allPlaylists = [ 
  {
    id: 1, 
    name: "All Time Low", 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/all-time-low.jpg",
    songs: allSongs.filter(song => song.artist.includes('All Time Low')),
    backgroundColor: '142, 128, 86',
    headerColor: '64, 58, 38',
    tag: ['own playlist', ]
  },
  {
    id: 2, 
    name: "Liked Songs", 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/liked-songs.jpg",
    songs: allSongs,
    backgroundColor: '74, 53, 144',
    headerColor: '32, 22, 64',
    tag: ['own playlist', ]
  },
  {
    id: 3, 
    name: "I Built This Playlist On Rock And Roll", 
    description: 'Most of these songs are come from Lost Santos Rock Radio',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/i-built-this-playlist-on-rock-and-roll.jpg",
    songs: allSongs.filter(song => song.tag.includes('rock')),
    backgroundColor: '42, 102, 80',
    headerColor: '16, 42, 32',
    tag: ['own playlist', ]
  },
  {
    id: 4, 
    name: ["Jonas Brothers"], 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/jonas-brothers.jpg",
    songs: allSongs.filter(song => song.artist.includes('Jonas Brothers')),
    backgroundColor: '180, 200, 200',
    headerColor: '80, 90, 90',
    tag: ['own playlist', ]
  },
  {
    id: 5, 
    name: "Martin Garrix", 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/martin-garrix.jpg",
    songs: allSongs.filter(song => song.artist.includes('Martin Garrix')),
    backgroundColor: '13, 54, 75',
    headerColor: '3, 22, 32',
    tag: ['own playlist', ]
  },
  {
    id: 6, 
    name: "Jonas Blue", 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/jonas-blue.jpg",
    songs: allSongs.filter(song => song.artist.includes('Jonas Blue')),
    backgroundColor: '3, 24, 60',
    headerColor: '0, 10, 26',
    tag: ['own playlist', ]
  }
]



const playSongs = { 
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

    //handle when song plays
    audioPlaying: function(color = '#b3b3b3') {
    const _this = this
  
    audio.ontimeupdate = function() {
      if ($('#on-open-playlist__body__btns__play')) {
        if ($('#on-open-playlist__body__btns__play').className == _this.id && _this.isPlaying) {
          $('#on-open-playlist__body__btns__play').src='./assets/images/main-view/pause-playlist.PNG'
          $('#root__top__add-play-btn__play-btn').src = './assets/images/main-view/pause-playlist.PNG' 

          Array.from(onOpenPlaylist.getElementsByClassName('song')).forEach(song => song.querySelector('.play-this-song').src = './assets/images/main-view/play-this-song.PNG')
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
      playSongs.isShuffle = true

      //random order of other songs
      playSongs.songs.forEach(obj => {
        obj.order =  Math.floor(Math.random() * (playSongs.songs.length - 1)) + 1
      })
      playSongs.songs[playSongs.currentIndex].order = 0

      //sort songs by order
      playSongs.songs.sort((a,b) => a.order - b.order)
      playSongs.currentIndex = 0
      //add active shuffle button
      shuffleBtn.src = './assets/images/now-playing/shuffle-active.PNG'
    },
    
    noShuffle: function() {
      playSongs.isShuffle = false
      //sort songs by id
      const currentSong = playSongs.songs[playSongs.currentIndex]
      playSongs.songs.sort((a,b) => a.id - b.id)
      playSongs.currentIndex = playSongs.songs.indexOf(currentSong)
      
      //change shuffle button to default
      shuffleBtn.src="./assets/images/now-playing/shuffle.PNG"
    },
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
        handleQueuePage.renderQueuePage()           
        handleQueuePage.handleQueuePageBtns()                                                  
      }      
      
      //change repeat button to default
      repeatBtn.src = './assets/images/now-playing/repeat.PNG'
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
        handleQueuePage.renderQueuePage()
        handleQueuePage.handleQueuePageBtns()
      }

      // add repeat playlist button
      repeatBtn.src = './assets/images/now-playing/repeat-playlist-active.PNG'
    },

    repeatSong: function() {
      playSongs.isRepeatPlaylist = false
      playSongs.isRepeatSong = true                   
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
        handleQueuePage.renderQueuePage()
        handleQueuePage.handleQueuePageBtns()
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
      handleQueuePage.renderQueuePage()
      handleQueuePage.handleQueuePageBtns()
    }

    //handle next button
    nextBtn.onclick = function() {
      _this.currentIndex += 1   
      if (_this.currentIndex >= _this.songs.length) _this.currentIndex = 0    //if it's the the last song in the playlist, play the first song
      _this.loadCurrentSong()
      audio.autoplay = true
      handleQueuePage.renderQueuePage()
      handleQueuePage.handleQueuePageBtns()
    }

    //handle shuffle button
    shuffleBtn.onclick = function() {
      _this.isShuffle ? _this.handleShuffle.noShuffle() : _this.handleShuffle.shuffle()
      handleActiveBtns(_this.isShuffle, shuffleBtn, $('.shuffle-active'))
      handleQueuePage.renderQueuePage()
      handleQueuePage.handleQueuePageBtns()
    }

    //handle repeat button
    repeatBtn.onclick = function() {
      _this.isRepeatPlaylist ? _this.handleRepeat.repeatSong() : _this.isRepeatSong ? _this.handleRepeat.noRepeat() : _this.handleRepeat.repeatPlaylist()
      handleActiveBtns(_this.isRepeatPlaylist || _this.isRepeatSong, repeatBtn, $('.repeat-active'))
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
      // this.isShuffle ? this.handleShuffle.shuffle() : this.handleShuffle.noShuffle()
      if (this.isShuffle) this.handleShuffle.shuffle()
      this.audioPlaying()
      this.handlePlaybackSliderBar()
      this.handleVolumeSliderBar()
      this.handleBtn()
      handleActiveBtns(this.isShuffle, shuffleBtn, $('.shuffle-active'))
      handleActiveBtns(this.isRepeatPlaylist || _this.isRepeatSong, repeatBtn, $('.repeat-active'))
  }
}

playSongs.start()  



const handlePlaylists = {
  playlists: [...allPlaylists],
  headerColorArr: [allPlaylists[0].headerColor],

  //render current playlists to main-view
  renderCurrentPlaylists: function() {
    const currentPlaylistContent = this.playlists
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
          mainView.style.backgroundImage = `linear-gradient(rgba(${handlePlaylists.playlists[index].backgroundColor}, 0.35) 0%, #121212 15%)`
          rootTop.style.backgroundColor = `rgba(${handlePlaylists.playlists[index].backgroundColor}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
          handlePlaylists.headerColorArr.unshift(handlePlaylists.playlists[index].headerColor);
        }
      })
    },
    handleHeaderOpacity: function() {
      rootTop.style.backgroundColor = `rgba(${handlePlaylists.headerColorArr[0]}, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})` 
    },
    start: function() {
      this.renderBackground();
      this.handleHeaderOpacity()
    }
  },
  

  
  //play playlist when click "play now" button
  handlePlayOrOpenPlaylist: function() {
    const _this = this
    const playlistArray = Array.from(document.getElementsByClassName('is-playlist'))
    
    for (let eachPlaylist of playlistArray) {
      const thisPlaylistInDB = _this.playlists.filter(playlist => playlist.id == eachPlaylist.getAttribute('id'))   //find playlist in the database that match the id
     
      function playPlaylist() {
        if (playSongs.id == thisPlaylistInDB[0].id) {
          if (playSongs.isPlaying) {audio.pause()} else {audio.play()}
        } else {
          playSongs.songs = [...thisPlaylistInDB[0].songs] //choose the first (and only) object of 'playlist' array that contain a playlist
          playSongs.id = thisPlaylistInDB[0].id

          if (playSongs.isShuffle) {
            playSongs.currentIndex = Math.floor(Math.random() * (playSongs.songs.length - 1)) + 1
          } else {
            playSongs.currentIndex = 0;
          }

          playSongs.start()
          handleQueuePage.renderQueuePage()
          audio.play()
        }

        $('#root__now-playing__header__playlist').innerHTML = `${thisPlaylistInDB[0].name}`
      }
      
      const openPlaylist = {
        
        renderPlaylistPage: function() {
          const renderSongs = thisPlaylistInDB[0].songs.map((song, index) => `
            <ul class="song" id="${song.id}">
              <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>${index + 1}</span></li>
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
              <img id="on-open-playlist__header__img" src=${thisPlaylistInDB[0].img}>
              <div id="on-open-playlist__header__title">
                <div id="on-open-playlist__header__title__type">playlist</div>
                <div id="on-open-playlist__header__title__name">${thisPlaylistInDB[0].name}</div>
                <div id="on-open-playlist__header__title__description">${thisPlaylistInDB[0].description}</div>
                <div id="on-open-playlist__header__title__playlist-info">
                  <img id="on-open-playlist__header__title__playlist-info__img" src='./assets/images/user/user-avatar.jpg'>
                  <span id="on-open-playlist__header__title__playlist-info__owner">${thisPlaylistInDB[0].owner} <span>• ${thisPlaylistInDB[0].songs.length} songs</span></span>
                  </div>
              </div>
            </div>
            <div id="on-open-playlist__body">
              <div id="on-open-playlist__body__btns">
                <img id="on-open-playlist__body__btns__play" class="${thisPlaylistInDB[0].id}" src="./assets/images/main-view/play-now-playlist.PNG">
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
          $('#root__top__add-play-btn__playlist-name').innerText = thisPlaylistInDB[0].name
        },
        
        stylePlaylistPage: function() {
          onOpenPlaylist.style.display = 'block'
          $('#on-open-playlist__header__title__name').style.whiteSpace = 'nowrap'
          onOpenPlaylist.style.backgroundImage = `linear-gradient(rgb(${thisPlaylistInDB[0].backgroundColor}), #181818 600px)`
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
          handleResponsive.handlePlaylistPage.handlePageSize(onOpenPlaylist)
          onOpenPlaylist.scrollTop = 0;
          mainView.scrollTop = 0
          
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

        handlePlaylistPageButtons: function() {
          $('#root__top__add-play-btn__play-btn').onclick = function() {
            if ($('#root__top__add-play-btn__play-btn').style.opacity == 1) {
              playPlaylist()
            }
          }
          $('#on-open-playlist__body__btns__play').onclick = function() {
            playPlaylist()
          }
          $('#on-open-playlist__return-home').onclick = function() {
            handleNavigation.homeComing()
          }

          Array.from(document.querySelectorAll('.song')).forEach(song => {

            function playThisSong() {
              const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
              if (song.querySelector('.play-this-song').src.includes('assets/images/main-view/pause-this-song.PNG')) {
                audio.pause()
              } else {
                if (playSongs.id == thisPlaylistInDB[0].id && playSongs.currentIndex == playSongs.songs.indexOf(thisSong)) {
                  audio.play()
                } else {
                  playSongs.songs = [...thisPlaylistInDB[0].songs]
                  playSongs.id = thisPlaylistInDB[0].id
                  playSongs.currentIndex = playSongs.songs.indexOf(thisSong)
                  playSongs.start()
                  audio.play()
                }
              }
              handleQueuePage.renderQueuePage()
              handleQueuePage.handleQueuePageBtns()
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
                playSongs.songs = [...thisPlaylistInDB[0].songs]
                playSongs.id = thisPlaylistInDB[0].id
                playSongs.currentIndex = playSongs.songs.indexOf(thisSong)
                playSongs.start()
                audio.play()
                handleQueuePage.renderQueuePage()
                handleQueuePage.handleQueuePageBtns()
              }
            }
          })
         
        },

        
        start: function() {
          handleNavigation.farFromHome()
          currentPage += 1;
          trace.push(onOpenPlaylist)
          this.renderPlaylistPage()
          this.stylePlaylistPage()
          this.handlePlaylistPageButtons()
          onOpenPlaylist.onscroll = function() {
            rootTop.style.backgroundColor = `rgba(${thisPlaylistInDB[0].headerColor}, ${0.5 + - (225 - Math.ceil(onOpenPlaylist.scrollTop)) / 100})`
            handlePlaylistHeaderOnscroll()
          }
        }
      }


      eachPlaylist.onclick = function(e) {       
        if (Array.from(document.getElementsByClassName('play-now')).includes(e.target) || Array.from(document.getElementsByClassName('playing')).includes(e.target)) {
          e.stopPropagation()
          playPlaylist()
        } else {
          openPlaylist.start()
        }
      }
    }
  },
  start: function() {
    this.renderOwnPlaylists()
    this.renderCurrentPlaylists()
    this.handlePlayOrOpenPlaylist()
    this.handleMainViewBackground.start()
  }
}
handlePlaylists.start()


const handleResponsive = {
  handleMainView: {
    handleTopContainerWidth: function() {
      if (window.outerWidth > 1115) {
          rootTop.style.width = mainView.offsetWidth + 'px'
      } else {
          rootTop.style.width = mainView.offsetWidth + 250 + 'px'
          
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
              setTimeout(function() {friendsBar.classList.remove('reverseSlideToLeft')}, 300)
            }
          }
        }
      }
    },
    handle: function() {
      this.handleTopContainerWidth();
      this.handleResponsiveBar()
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
  
  handlePlaylistPage: {
    handlePageSize: function(page) {
      page.style.width = mainView.offsetWidth + 'px'
      page.style.height = mainView.offsetHeight + 'px'
      page.style.top = mainView.offsetTop + 'px'
      page.style.left = mainView.offsetLeft + 'px'
      
    },
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
    handle: function() {
      this.handlePageSize(onOpenPlaylist);
      this.handlePageSize(queuePage);
      this.handleTextWidth()
    }
  },

  start: function() {
    this.handleMainView.handle()
    this.handlePlaylist.handle()
    this.handlePlaylistPage.handle()
  }
}

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



const handleQueuePage = {
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
        handleActiveBtns(true, $('.list'), $('.list-active'))
      } else {
        queuePage.style.display = 'none'
        $('.list').src= './assets/images/now-playing/list.PNG'
        handleActiveBtns(false, $('.list'), $('.list-active'))
      }
      Array.from(queuePage.getElementsByClassName('song-info')).forEach(songInfo => songInfo.style.maxWidth = queuePage.querySelector('.title').offsetWidth - 100 + 'px')
      handleNavigation.farFromHome()
      if (document.getElementById('nowPlaying'))  {
        document.getElementById('root__now-playing').remove()
      }
    }
  },
  renderQueuePage: function() {
    const playingSong = playSongs.songs[playSongs.currentIndex]
    $('#queue__now-playing-song').innerHTML = `
      <ul class="song" id="${playingSong.id}">
      <li class='number'><img class="play-this-song" src='./assets/images/main-view/play-this-song.PNG'><span>1</span></li>
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
  
    
    const nextUpSongs = playSongs.songs.slice(playSongs.currentIndex + 1)
    console.log(nextUpSongs)
    
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
    //   handleNavigation.homeComing()
    // }
    Array.from(queuePage.querySelectorAll('.song')).forEach(song => {

      function playThisSong() {
        const thisSong = allSongs.filter(findSong => findSong.id == song.getAttribute('id'))[0]
        if (song.querySelector('.play-this-song').src.includes('assets/images/main-view/pause-this-song.PNG')) {
          audio.pause()
        } else {
          if (playSongs.id == playSongs.id && playSongs.currentIndex == playSongs.songs.indexOf(thisSong)) {
            audio.play()
          } else {
            playSongs.currentIndex = playSongs.songs.indexOf(thisSong)
            playSongs.start()
            audio.play()
          }
        }
        handleQueuePage.renderQueuePage()
        handleQueuePage.handleQueuePageBtns()
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
          playSongs.currentIndex = playSongs.songs.indexOf(thisSong)
          playSongs.start()
          audio.play()
          handleQueuePage.renderQueuePage()
          handleQueuePage.handleQueuePageBtns()
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
}
handleQueuePage.start()



function handleCurrentPlaylistHover() {
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
}

function nowPlayingOnClick() {
  nowPlaying.onclick = function() {
      if(!document.getElementById('nowPlaying') && window.outerWidth <= 999) {
        // isAtHome = false
        handleNavigation.farFromHome()
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

const handleNavigation = {
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
        handleActiveBtns(false, $('.list'), $('.list-active'))
      }
      isAtHome = true;
      homeBtn.querySelector('img').src = './assets/images/left-sidebar/home-active.PNG'
      homeBtn.classList.add('current')
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
}


function handlePlaylistHeaderOnscroll() {
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
}




openMenu()
handleCurrentPlaylistHover()
nowPlayingOnClick()
handleNavigation.handleBtns()
handleResponsive.start() 

window.onresize = function() {
  playSongs.changeNowPlayingColor()
  handleResponsive.start() 
  nowPlayingOnClick()
  handlePlaylistHeaderOnscroll()
}


mainView.onscroll = function() {
  handlePlaylists.handleMainViewBackground.handleHeaderOpacity()

  if (friendsBar.classList.contains('slideToLeft')) {
    friendsBar.classList.remove('slideToLeft')
    friendsBar.classList.add('reverseSlideToLeft')
    setTimeout(function() {
      friendsBar.classList.remove('reverseSlideToLeft')
    }, 300)      
  }           
}


function handleActiveBtns(boolean, button, buttonDot) {
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
}


