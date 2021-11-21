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
    album: "Drown (feat. Cliton Kane)",
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
    name: 'Burning Heart - From "Rocky IV" Soundtrack', 
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
    name: "Liked Songs", 
    description: '',
    owner: "Phuc",
    img: "./assets/songs/playlists/own-playlists/liked-songs.jpg",
    songs: allSongs,
    backgroundColor: '74, 53, 144',
    headerColor: '32, 22, 64',
    tag: ['own playlist', 'liked songs']
  },
  {
    id: 2, 
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
    name: "Jonas Brothers", 
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