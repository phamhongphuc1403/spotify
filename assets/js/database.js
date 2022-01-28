const allSongs = [
  { 
    id: 1, 
    name: "Hold On", 
    artist: ["Justin Bieber"], 
    img: "./data/albums/justice__justin-bieber.jpg",
    path: "./data/songs/hold-on__justin-bieber.mp3",
    album: "Justice",
    backgroundColor: '#095250',
    tag: ['favorite', 'pop']
  },
  { 
    id: 2, 
    name: "Weightless", 
    artist: ["All Time Low"],
    img: "./data/albums/nothing-personal__all-time-low.jpg",
    path: "./data/songs/weightless__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 3, 
    name: "Break Your Little Heart", 
    artist: ["All Time Low"],
    img: "./data/albums/nothing-personal__all-time-low.jpg",
    path: "./data/songs/break-your-little-heart__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 4,
    name: "Damned If I Do Ya (Damned If I Don't)", 
    artist: ["All Time Low"], 
    img: "./data/albums/nothing-personal__all-time-low.jpg",
    path: "./data/songs/damn-if-i-do-ya__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 5, 
    name: "Stella", 
    artist: ["All Time Low"],
    img: "./data/albums/nothing-personal__all-time-low.jpg",
    path: "./data/songs/stella__all-time-low.mp3",
    album: "Nothing Personal",
    backgroundColor: '#70684e',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 6, 
    name: "Runaways", 
    artist: ["All Time Low"],
    img: "./data/albums/future-hearts__all-time-low.jpg",
    path: "./data/songs/runaways__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 7, 
    name: "Australia", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/jonas-brothers__jonas-brothers.jpg",
    path: "./data/songs/australia__jonas-brothers.mp3",
    album: ["Jonas Brothers"],
    backgroundColor: '#585657',
    tag: ['favorite', 'pop punk', 'pop']
  },
  { 
    id: 8, 
    name: "Hesitate", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/happiness-begins__jonas-brothers.jpg",
    path: "./data/songs/hesitate__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', 'pop']
  },
  { 
    id: 9, 
    name: "Rollercoaster", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/happiness-begins__jonas-brothers.jpg",
    path: "./data/songs/rollercoaster__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', 'pop']
  },
  { id: 10, 
    name: "Where Have You Gone (Anywhere)",
    artist: ["Lucas & Steve"], 
    img: "./data/albums/letters-to-remember__lucas-steve.jpg",
    path: "./data/songs/where-have-you-gone-anywhere__lucas-steve.mp3",
    album: "Letters To Remember",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', 'edm']
  },
  { 
    id: 11, 
    name: "Letters", 
    artist: ["Lucas & Steve"],
    img: "./data/albums/letters-to-remember__lucas-steve.jpg",
    path: "./data/songs/letters__lucas-steve.mp3",
    album: "Letters To Remember",
    backgroundColor: '#111735',
    tag: ['favorite', 'edm']
  },
  { 
    id: 12, 
    name: "Daylight", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/daylight__maroon-5.mp3",
    album: "Overexposed",
    backgroundColor: '#111735',
    tag: ['favorite', 'pop']
  },
  { 
    id: 13, 
    name: "These Heights (feat. Caroline Pennell)", 
    artist: ["Bassjackers", "Lucas & Steve", "Caroline Pennell"],
    img: "./data/singles/these-heights__bassjackers.jpg",
    path: "./data/songs/these-heights__bassjackers__lucas-steve__caroline-pennell.mp3",
    album: "These Heights (feat. Caroline Pennell)",
    backgroundColor: '#241832',
    tag: ['favorite', 'edm']
  },
  { 
    id: 14, 
    name: "More Than A Feeling", 
    artist: ["Boston"],
    img: "./data/albums/boston__boston.jpg",
    path: "./data/songs/more-than-a-feeling__boston.mp3",
    album: "Boston",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 15, 
    name: "Good Times", 
    artist: ["All Time Low"],
    img: "./data/albums/last-young-renegade__all-time-low.jpg",
    path: "./data/songs/good-times__all-time-low.mp3",
    album: "Last Young Renegade",
    backgroundColor: '#29373c',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 16, 
    name: "Missing You", 
    artist: ["All Time Low"],
    img: "./data/albums/future-hearts__all-time-low.jpg",
    path: "./data/songs/missing-you__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', 'pop']
  },
  { 
    id: 17, 
    name: "Kids In The Dark", 
    artist: ["All Time Low"],
    img: "./data/albums/future-hearts__all-time-low.jpg",
    path: "./data/songs/kids-in-the-dark__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 18, 
    name: "Dear Maria Count Me In", 
    artist: ["All Time Low"],
    img: "./data/albums/so-wrong-its-right__all-time-low.jpg",
    path: "./data/songs/dear-maria-count-me-in__all-time-low.mp3",
    album: "So Wrong, It's Right",
    backgroundColor: '#665303',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 19, 
    name: "Time Bomb", 
    artist: ["All Time Low"],
    img: "./data/albums/dirty-work__all-time-low.jpg",
    path: "./data/songs/time-bomb__all-time-low.mp3",
    album: "Dirty Work",
    backgroundColor: '#02446c',
    tag: ['favorite','pop punk' ]
  },
  { 
    id: 20, 
    name: "Life of the party", 
    artist: ["All Time Low"],
    img: "./data/albums/last-young-renegade__all-time-low.jpg",
    path: "./data/songs/life-of-the-party__all-time-low.mp3",
    album: "Last Young Renegade",
    backgroundColor: '#29373c',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 21, 
    name: "Something's Gotta Give", 
    artist: ["All Time Low"],
    img: "./data/albums/future-hearts__all-time-low.jpg",
    path: "./data/songs/somethings-gotta-give__all-time-low.mp3",
    album: "Future Hearts",
    backgroundColor: '#466668',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 22, 
    name: "Once In A Lifetime", 
    artist: ["All Time Low"],
    img: "./data/singles/once-in-a-lifetime__all-time-low.jpg",
    path: "./data/songs/once-in-a-lifetime__all-time-low.mp3",
    album: "Once In A Life Time",
    backgroundColor: '#623023',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 23, 
    name: "Monsters (feat. blackbear)", 
    artist: ["All Time Low", "blackbear"],
    img: "./data/albums/wake-up-sun-shine__all-time-low.jpg",
    path: "./data/songs/monsters__all-time-low.mp3",
    album: "Wake Up, Sunshine",
    backgroundColor: '#64593c',
    tag: ['favorite', 'pop punk']
  },
  { 
    id: 24, 
    name: "Used To Love (with Dean Lewis)", 
    artist: ["Martin Garrix", "Dean Lewis"],
    img: "./data/singles/used-to-love__martin-garrix.jpg",
    path: "./data/songs/used-to-love__martin-garrix.mp3",
    album: "Used To Love (with Dean Lewis)",
    backgroundColor: '#203e51',
    tag: ['favorite', 'edm']
  },
  { 
    id: 25, 
    name: "Drown (feat. Cliton Kane)", 
    artist: ["Martin Garrix", "Cliton Kane"],
    img: "./data/singles/drown__martin-garrix.jpg",
    path: "./data/songs/drown__martin-garrix.mp3",
    album: "Drown (feat. Cliton Kane)",
    backgroundColor: '#484747',
    tag: ['favorite', 'edm']
  },
  { 
    id: 26, 
    name: "No Sleep (feat. Bonn)", 
    artist: ["Martin Garrix", "Bonn"],
    img: "./data/singles/no-sleep__martin-garrix.jpg",
    path: "./data/songs/no-sleep__martin-garrix.mp3",
    album: "No Sleep (feat. Bonn)",
    backgroundColor: '#523825',
    tag: ['favorite', 'edm']
  },
  { 
    id: 27, 
    name: "High On Life (feat. Bonn)", 
    artist:[ "Martin Garrix", "Bonn"],
    img: "./data/singles/high-on-life__martin-garrix.jpg",
    path: "./data/songs/high-on-life__martin-garrix.mp3",
    album: "High On Life (feat. Bonn)",
    backgroundColor: '#3b3e3e',
    tag: ['favorite', 'edm']
  },
  { 
    id: 28, 
    name: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)", 
    artist: ["Martin Garrix", "Macklemore", "Fall Out Boy"],
    img: "./data/singles/summer-days__martin-garrix.jpg",
    path: "./data/songs/summer-days__martin-garrix.mp3",
    album: "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
    backgroundColor: '#2e5a62',
    tag: ['favorite', 'edm']
  },  
  { 
    id: 29, 
    name: "These Are The Times (feat. JRM)", 
    artist: ["Martin Garrix", "JRM"],
    img: "./data/singles/these-are-the-times__martin-garrix.jpg",
    path: "./data/songs/these-are-the-times__martin-garrix.mp3",
    album: "These Are The Times (feat. JRM)",
    backgroundColor: '#545454',
    tag: ['favorite', 'edm']
  },
  { 
    id: 30, 
    name: "Burn Out (feat. Dewain Whitmore)", 
    artist: ["Martin Garrix", "Dewain Whitmore"],
    img: "./data/singles/burn-out__martin-garrix.jpg",
    path: "./data/songs/burn-out__martin-garrix.mp3",
    album: "Burn Out (feat. Dewain Whitmore)",
    backgroundColor: '#1d162b',
    tag: ['favorite', 'edm']
  },
  { 
    id: 31, 
    name: "Higher Ground (feat. John Martin)", 
    artist: ["Martin Garrix", "John Martin"],
    img: "./data/singles/higher-ground__martin-garrix.jpg",
    path: "./data/songs/higher-ground__martin-garrix.mp3",
    album: "Higher Ground (feat. John Martin)",
    backgroundColor: '#4e4e4e',
    tag: ['favorite', 'edm']
  },
  { 
    id: 32, 
    name: "Forbidden Voices", 
    artist: ["Martin Garrix"],
    img: "./data/singles/forbidden-voices__martin-garrix.jpg",
    path: "./data/songs/forbidden-voices__martin-garrix.mp3",
    album: "Forbidden Voices",
    backgroundColor: '#2f2f2f',
    tag: ['favorite', 'edm']
  },
  { 
    id: 33, 
    name: "Waiting For Tomorrow (feat. Mike Shinoda)", 
    artist: ["Martin Garrix", "Mike Shinoda"],
    img: "./data/ep/bylaw-ep__martin-garrix.jpg",
    path: "./data/songs/waiting-for-tomorrow__martin-garrix.mp3",
    album: "BYLAW EP",
    backgroundColor: '#3c1f29',
    tag: ['favorite', 'edm']
  },
  { 
    id: 34, 
    name: "Sucker", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/happiness-begins__jonas-brothers.jpg",
    path: "./data/songs/sucker__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', 'pop']
  },
  { 
    id: 35, 
    name: "Only Human", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/happiness-begins__jonas-brothers.jpg",
    path: "./data/songs/only-human__jonas-brothers.mp3",
    album: "Happiness Begins",
    backgroundColor: '#5c6e6e',
    tag: ['favorite', 'pop']
  },
  { 
    id: 36, 
    name: "By Your Side", 
    artist: ["Jonas Blue", "RAYE"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/by-your-side__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 37, 
    name: "Mama", 
    artist: ["Jonas Blue", "William Singe"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/mama__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 38, 
    name: "Polaroid", 
    artist: ["Jonas Blue", "Liam Payne", "Lennon Stella"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/polaroid__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 39, 
    name: "Rise", 
    artist: ["Jonas Blue", "Jack & Jack"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/rise__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 40, 
    name: "Younger", 
    artist: ["Jonas Blue", "HRVY"],
    img: "./data/singles/younger__jonas-blue.jpg",
    path: "./data/songs/younger__jonas-blue.mp3",
    album: "Younger",
    backgroundColor: '#85171d',
    tag: ['favorite', 'edm']
  },
  { 
    id: 41, 
    name: "Perfect Stranger", 
    artist: ["Jonas Blue", "JP Cooper"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/perfect-stranger__jonas-blue.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 42, 
    name: "Walk Thru Fire", 
    artist: ["Vicetone", "Meron Ryan"],
    img: "./data/singles/walk-thru-fire__vicetone.jpg",
    path: "./data/songs/walk-thru-fire__vicetone__meron-ryan.mp3",
    album: "Walk Thru Fire",
    backgroundColor: '#8d0b16',
    tag: ['favorite', 'edm']
  },
  { 
    id: 43, 
    name: "Waiting", 
    artist: ["Vicetone", "Daisy Guttridge"],
    img: "./data/singles/waiting__vicetone.jpg",
    path: "./data/songs/waiting__vicetone__daisy-guttridge.mp3",
    album: "Waiting",
    backgroundColor: '#9d131d',
    tag: ['favorite', 'edm']
  },
  { 
    id: 44, 
    name: "Something Strange", 
    artist: ["Vicetone", "Daisy Guttridge"],
    img: "./data/singles/something-strange__vicetone.jpg",
    path: "./data/songs/something-strange__vicetone__haley-reinhart.mp3",
    album: "Something Strange",
    backgroundColor: '#1e4062',
    tag: ['favorite', 'edm']
  },
  { 
    id: 45, 
    name: "Somebody I'm Not", 
    artist: ["Martin Jensen", "Bjrnskov"],
    img: "./data/singles/somebody-im-not__martin-jensen.jpg",
    path: "./data/songs/somebody-im-not__martin-jensen__bjrnskov.mp3",
    album: "Somebody I'm Not",
    backgroundColor: '#083347',
    tag: ['favorite', 'edm']
  },
  { 
    id: 46, 
    name: "Peace Of Mind", 
    artist: ["Boston"],
    img: "./data/albums/boston__boston.jpg",
    path: "./data/songs/peace-of-mind__boston.mp3",
    album: "Boston",
    backgroundColor: '#812824',
    tag: ['favorite', 'rock']
  },
  { 
    id: 47, 
    name: "We Built This City", 
    artist: ["Starship"],
    img: "./data/albums/knee-deep-in-the-hoopla__starship.jpg",
    path: "./data/songs/we-built-this-city__starship.mp3",
    album: "Knee Deep In The Hoopla",
    backgroundColor: '#525147',
    tag: ['favorite', 'rock']
  },
  { 
    id: 48, 
    name: 'Burning Heart - From "Rocky IV" Soundtrack', 
    artist: ["Survivor"],
    img: "./data/albums/rocky-iv__survivor.jpg",
    path: "./data/songs/burning-heart__survivor.mp3",
    album: "Rocky IV",
    backgroundColor: '#72322e',
    tag: ['favorite', 'rock']
  },
  { 
    id: 49, 
    name: "Sweet Child O' Mine", 
    artist: ["Gun N' Roses"],
    img: "./data/albums/appetite-for-destruction__gun-n-roses.jpg",
    path: "./data/songs/sweet-child-o-mine__guns-n-roses.mp3",
    album: "Appetite For Destruction",
    backgroundColor: '#63212c',
    tag: ['favorite', 'rock']
  },
  { 
    id: 50, 
    name: "Carry On Wayward Son", 
    artist: ["Kansas"],
    img: "./data/albums/leftoverture__kansas.jpg",
    path: "./data/songs/carry-on-wayward-son__kansas.mp3",
    album: "Leftoverture",
    backgroundColor: '#645951',
    tag: ['favorite', 'rock']
  },
  { 
    id: 51, 
    name: "Who's In Your Head", 
    artist: ["Jonas Brothers"],
    img: "./data/albums/setlist-the-remember-this-tour__jonas-brothers.jpg",
    path: "./data/songs/whos-in-your-head__jonas-brothers.mp3",
    album: "Setlist: The Remember This Tour",
    backgroundColor: '#4a6b21',
    tag: ['favorite', 'pop']
  },
  { 
    id: 52, 
    name: "Seven Nation Army", 
    artist: ["The White Stripes"],
    img: "./data/albums/elephant__the-white-stripes.jpg",
    path: "./data/songs/seven-nation-army__the-white-stripes.mp3",
    album: "Elephant",
    backgroundColor: '#bc3204',
    tag: ['favorite', 'rock']
  },
  { 
    id: 53, 
    name: "Rain", 
    artist: ["The Cult"],
    img: "./data/albums/love__the-cult.jpg",
    path: "./data/songs/rain__the-cult.mp3",
    album: "Love",
    backgroundColor: '#071923',
    tag: ['favorite', 'rock']
  },
  { 
    id: 54, 
    name: "House Of The Rising Sun", 
    artist: ["The Animals"],
    img: "./data/albums/the-animals__the-animals.jpg",
    path: "./data/songs/house-of-the-rising-sun__the-animals.mp3",
    album: "The Animals",
    backgroundColor: '#516062',
    tag: ['favorite', 'rock']
  },
  { 
    id: 55, 
    name: "Hold On (feat. Michel Zitron)", 
    artist: ["Martin Garrix", "Matisse & Sadko", "Michel Zitron"],
    img: "./data/singles/hold-on__martin-garrix.jpg",
    path: "./data/songs/hold-on__martin-garrix.mp3",
    album: "Hold On (feat. Michel Zitron)",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 56, 
    name: "Stargazing", 
    artist: ["Kygo", "Justin Jesso"],
    img: "./data/ep/stargazing-ep__kygo.jpg",
    path: "./data/songs/stargazing__kygo__justin-jesso.mp3",
    album: "Stargazing-EP",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 57, 
    name: "It Ain't Me (with Selena Gomez)", 
    artist: ["Kygo", "Selena Gomez"],
    img: "./data/singles/it-aint-me__kygo.jpg",
    path: "./data/songs/it-aint-me__kygo__selena-gomez.mp3",
    album: "Stargazing-EP",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 58, 
    name: "Higher Love", 
    artist: ["Kygo", "Whitney Houston"],
    img: "./data/singles/higher-love__kygo.jpg",
    path: "./data/songs/higher-love__kygo__whitney-houston.mp3",
    album: "Higher Love",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 59, 
    name: "Happy Now", 
    artist: ["Kygo", "Sandro Cavazza"],
    img: "./data/singles/happy-now__kygo.jpg",
    path: "./data/songs/happy-now__kygo__sandro_cavazza.mp3",
    album: "Happy Now",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 60, 
    name: "Firestone", 
    artist: ["Kygo", "Conrad Sewell"],
    img: "./data/albums/cloud-nine__kygo.jpg",
    path: "./data/songs/firestone__kygo__conrad-sewell.mp3",
    album: "Cloud Nine",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 61, 
    name: "Born To Be Yours", 
    artist: ["Kygo", "Imagine Dragons"],
    img: "./data/singles/born-to-be-yours__kygo.jpg",
    path: "./data/songs/born-to-be-yours__kygo__imagine-dragons.mp3",
    album: "Born To Be Yours",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 62, 
    name: "Remind Me To Forget", 
    artist: ["Kygo", "Miguel"],
    img: "./data/albums/kids-in-love__kygo.jpg",
    path: "./data/songs/remind-me-to-forget__kygo__miguel.mp3",
    album: "Kids In Love",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'edm']
  },
  { 
    id: 63, 
    name: "Girls Like You (feat. Cardi B)", 
    artist: ["Maroon 5", "Cardi B"],
    img: "./data/albums/red-pill-blues__maroon-5.jpg",
    path: "./data/songs/girls-like-you__maroon-5__cardi-b.mp3",
    album: "Red Pill Blues",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'pop']
  },
  { 
    id: 64, 
    name: "What Lovers Do (feat. SZA)", 
    artist: ["Maroon 5", "SZA"],
    img: "./data/albums/red-pill-blues__maroon-5.jpg",
    path: "./data/songs/what-lovers-do__maroon-5__sza.mp3",
    album: "Red Pill Blues",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'pop']
  },
  { 
    id: 65, 
    name: "Don't Wanna Know (feat. Kendrick Lamar)", 
    artist: ["Maroon 5",],
    img: "./data/albums/red-pill-blues__maroon-5.jpg",
    path: "./data/songs/dont-wanna-know-maroon-5__kendrick-lamar.mp3",
    album: "Red Pill Blues",
    backgroundColor: '#4c4d50',
    tag: ['favorite', 'pop']
  },
  { 
    id: 66, 
    name: "Payphone", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/payphone__maroon-5__wiz-khalifa.mp3",
    album: "Overexposed",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 67, 
    name: "Moves Like Jagger - Studio Recording From The Voice Performance", 
    artist: ["Maroon 5"],
    img: "./data/albums/overexposed__maroon-5.jpg",
    path: "./data/songs/moves-like-jagger__maroon-5__christina-aguilera.mp3",
    album: "Overexposed",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 68, 
    name: "Maps", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/maps__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 69, 
    name: "Animals", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/animals__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 70, 
    name: "Sugar", 
    artist: ["Maroon 5"],
    img: "./data/albums/v__maroon-5.jpg",
    path: "./data/songs/sugar__maroon-5.mp3",
    album: "V",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 71, 
    name: "Beautiful Mistakes (feat. Megan Thee Stallion)", 
    artist: ["Maroon 5", "Megan Thee Stallion"],
    img: "./data/albums/jordi__maroon-5.jpg",
    path: "./data/songs/beautiful-mistakes__maroon-5__megan-thee-stallion.mp3",
    album: "JORDI",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop' ]
  },
  { 
    id: 72, 
    name: "Memories", 
    artist: ["Maroon 5"],
    img: "./data/albums/jordi__maroon-5.jpg",
    path: "./data/songs/memories__maroon-5.mp3",
    album: "JORDI",
    backgroundColor: '#743b53',
    tag: ['favorite', 'pop']
  },
  { 
    id: 73, 
    name: "Fast Car", 
    artist: ["Jonas Blue"],
    img: "./data/albums/blue__jonas-blue.jpg",
    path: "./data/songs/fast-car__jonas-blue__dakota.mp3",
    album: "Blue",
    backgroundColor: '#435864',
    tag: ['favorite', 'edm']
  },
  { 
    id: 74, 
    name: "Cake By The Ocean", 
    artist: ["DNCE"],
    img: "./data/albums/dnce__dnce.jpg",
    path: "./data/songs/cake-by-the-ocean__dnce.mp3",
    album: "DNCE",
    backgroundColor: '#58250e',
    tag: ['favorite', 'pop']
  },
  {
    id: 75, 
    name: "High Hopes", 
    artist: ["Panic! At The Disco"],
    img: "./data/albums/pray-for-the-wicked__panic-at-the-disco.jpg",
    path: "./data/songs/high-hopes__panic-at-the-disco.mp3",
    album: "Pray For The Wicked",
    backgroundColor: '#084444',
    tag: ['favorite', 'pop']
  },
  {
    id: 76, 
    name: "Hey Look Ma I Made It", 
    artist: ["Panic! At The Disco"],
    img: "./data/albums/pray-for-the-wicked__panic-at-the-disco.jpg",
    path: "./data/songs/hey-look-ma-i-made-it__panic-at-the-disco.mp3",
    album: "Pray For The Wicked",
    backgroundColor: '#084444',
    tag: ['favorite', 'pop']
  },
  {
    id: 77, 
    name: "ME! (feat. Brendon Urie of Panic! At The Disco)", 
    artist: ["Taylor Swift", "Brendon Urie", "Panic! At The Disco"],
    img: "./data/albums/lover__taylor-swift.jpg",
    path: "./data/songs/me__taylor-swift__brendon-urie.mp3",
    album: "Lover",
    backgroundColor: '#935f71',
    tag: ['favorite', 'pop']
  },
  {
    id: 78, 
    name: "Forever Young", 
    artist: ["John De Sohn", "LIAMOO"],
    img: "./data/albums/made-for-you__john-de-sohn.jpg",
    path: "./data/songs/forever-young__john-de-sohn-liamoo.mp3",
    album: "Made For You",
    backgroundColor: '#303030',
    tag: ['favorite', 'edm']
  },
  {
    id: 79, 
    name: "Happy Kids", 
    artist: ["John De Sohn"],
    img: "./data/albums/made-for-you__john-de-sohn.jpg",
    path: "./data/songs/happy-kids__john-de-sohn-liamoo.mp3",
    album: "Made For You",
    backgroundColor: '#303030',
    tag: ['favorite', 'edm']
  },
  {
    id: 80, 
    name: "Got Damn! (W.O.M.A.N)", 
    artist: ["John De Sohn", "LIAMOO"],
    img: "./data/singles/got-damn-woman__john-de-sohn.jpg",
    path: "./data/songs/got-damn-woman__john-de-sohn.mp3",
    album: "Got Damn! (W.O.M.A.N)",
    backgroundColor: '#0c4e99',
    tag: ['favorite', 'edm']
  },
  {
    id: 81, 
    name: "Wasted Love", 
    artist: ["John De Sohn", "Andrelli", "Ramus Hagen"],
    img: "./data/singles/wasted-love__john-de-sohn.jpg",
    path: "./data/songs/wasted-love__john-de-sohn__andrelli__rasmus-hagen.mp3",
    album: "Wasted Love",
    backgroundColor: '#303031',
    tag: ['favorite', 'edm']
  },
  {
    id: 82, 
    name: "Radio Ga Ga", 
    artist: ["Queen"],
    img: "./data/albums/the-works__queen.jpg",
    path: "./data/songs/radio-ga-ga-remastered-2011__queen.mp3",
    album: "The Works (Deluxe Remastered Version)",
    backgroundColor: '#66645e',
    tag: ['favorite', 'rock']
  },
  {
    id: 83, 
    name: "Ta Bầu Cho Tổng Thống Chum", 
    artist: ["Linh Phương"],
    img: "./data/singles/ta-bau-cho-tt-trump__linh-phuong.jpg",
    path: "./data/songs/ta-bau-cho-tt-trump__linh-phuong.mp3",
    album: "Ta Bầu Cho Tổng Thống Chum",
    backgroundColor: '#aa1e35',
    tag: ['hidden']
  },
  {
    id: 84, 
    name: "Censored (remix)", 
    artist: ["Chị Cả"],
    img: "./data/singles/censored-remix__chi-ca.jpg",
    path: "./data/songs/censored-remix__chi-ca.mp3",
    album: "Censored (remix)",
    backgroundColor: '#53534f',
    tag: ['hidden']
  },
  {
    id: 85, 
    name: "Super Idol (remix)", 
    artist: ["阿肆"],
    img: "./data/singles/super-idol-remix__a-tu.jpg",
    path: "./data/songs/super-idol-remix__a-tu.mp3",
    album: "热爱105°C的你",
    backgroundColor: '#1a132a',
    tag: ['hidden']
  },
]
shuffleArray(allSongs)

const allPlaylists = [
  {
    id: 1, 
    name: "Liked Songs", 
    description: '',
    owner: "Phuc",
    img: "./data/playlists/own-playlists/liked-songs.jpg",
    songs: allSongs.filter(song => song.tag.includes('favorite')),
    backgroundColor: '74, 53, 144',
    headerColor: '32, 22, 64',
    tag: ['own playlist', 'liked songs']
  },
  {
    id: 2, 
    name: "All Time Low", 
    description: '',
    owner: "Phuc",
    img: "./data/playlists/own-playlists/all-time-low.jpg",
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
    img: "./data/playlists/own-playlists/i-built-this-playlist-on-rock-and-roll.jpg",
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
    img: "./data/playlists/own-playlists/jonas-brothers.jpg",
    songs: allSongs.filter(song => song.artist.includes('Jonas Brothers') || song.artist.includes('DNCE')),
    backgroundColor: '180, 200, 200',
    headerColor: '80, 90, 90',
    tag: ['own playlist', ]
  },
  {
    id: 5, 
    name: "Martin Garrix", 
    description: '',
    owner: "Phuc",
    img: "./data/playlists/own-playlists/martin-garrix.jpg",
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
    img: "./data/playlists/own-playlists/jonas-blue.jpg",
    songs: allSongs.filter(song => song.artist.includes('Jonas Blue')),
    backgroundColor: '3, 24, 60',
    headerColor: '0, 10, 26',
    tag: ['own playlist', ]
  },
  {
    id: 7, 
    name: "Kygo", 
    description: '',
    owner: "Phuc",
    img: "./data/playlists/own-playlists/kygo.jpg",
    songs: allSongs.filter(song => song.artist.includes('Kygo')),
    backgroundColor: '193, 193, 193',
    headerColor: '83, 83, 83',
    tag: ['own playlist', ]
  },
  {
    id: 8, 
    name: "Maroon 5", 
    description: '',
    owner: "Phuc",
    img: "./data/playlists/own-playlists/maroon-5.jpg",
    songs: allSongs.filter(song => song.artist.includes('Maroon 5')),
    backgroundColor: '122, 130, 137',
    headerColor: '51, 54, 58',
    tag: ['own playlist', ]
  },
  // {
  //   id: 9, 
  //   name: "Tobu", 
  //   description: '',
  //   owner: "Phuc",
  //   img: "./data/playlists/own-playlists/maroon-5.jpg",
  //   songs: allSongs.filter(song => song.artist.includes('Maroon 5')),
  //   backgroundColor: '122, 130, 137',
  //   headerColor: '51, 54, 58',
  //   tag: ['own playlist', ]
  // },
  // {
  //   id: 10, 
  //   name: "Justin Bieber", 
  //   description: '',
  //   owner: "Phuc",
  //   img: "./data/playlists/own-playlists/maroon-5.jpg",
  //   songs: allSongs.filter(song => song.artist.includes('Justin Bieber')),
  //   backgroundColor: '122, 130, 137',
  //   headerColor: '51, 54, 58',
  //   tag: ['own playlist', ]
  // },
]

shuffleArray(allPlaylists)



const dailyMixesFactory = {
  data: {
    artistsGroups: [
      ["Martin Garrix", "Jonas Blue", "Kygo"],
      ["Vicetone", "Martin Jensen", "John De Sohn"],
      ["Jonas Brothers", "Maroon 5", "Justin Bieber", "DNCE", "Panic! At The Disco"],
      ["Boston", "Starship",  "The Cult", "Kansas", "The White Stripes", "The Animals", "Gun N' Roses", "Queen"],
      ["All Time Low"],
    ],
    dailyMixesFeaturing: [
      ["Daily Mixes 1", "All Time Low", "Jonas Brothers", "Justin Bieber", "Kygo", "Martin Garrix", "Maroon 5", "Vicetone"],
      ["Daily Mixes 2", "All Time Low", "Jonas Brothers", "Justin Bieber", "Kygo", "Martin Garrix", "Maroon 5"],
      ["Daily Mixes 3", "All Time Low", "Jonas Blue", "Jonas Brothers", "Justin Bieber", "Kygo", "Maroon 5", "Boston", "Panic! At The Disco"],
      ["Daily Mixes 4", "All Time Low", "Jonas Blue", "Maroon 5", "Boston", "Kygo", "Panic! At The Disco", "Queen"],
      ["Daily Mixes 5", "Boston", "Martin Garrix", "Maroon 5", "Panic! At The Disco", "Queen"],
    ],
  },
  
  dailyMixesGenerator: {
    sortDailyMixes: function() {
      dailyMixesFactory.data.dailyMixesFeaturing.sort((a, b) => a.length - b.length)
    },
    chooseFeaturingArtist: {
      FeaturingArtists: [],
      handleFeaturing: function() {
        const _this = this
        dailyMixesFactory.data.dailyMixesFeaturing.forEach(dailyMix => {
          function randomPick() {
              const newDailyMixes = dailyMix[Math.floor(Math.random() * (dailyMix.length - 1)) + 1]
              const flattedArray = _this.FeaturingArtists.flat()
              flattedArray.includes(newDailyMixes) ? randomPick() : _this.FeaturingArtists.push([dailyMix[0],newDailyMixes])
          }
          randomPick()
        })
        this.FeaturingArtists.sort((a, b) => a[0] < b[0] ? -1 : 1)
      }
    },
    generateSongs: function(artistGroup) {
      const songs = []
      artistGroup.forEach(artist => {
        songs.push(allSongs.filter(song => song.artist.includes(artist)))
      })
      return songs.flat().sort((a, b) => a.order - b.order)
    },
    generateDescription: function(artistGroup) {
      filteredArtists = artistGroup.slice(0, 3)
      return filteredArtists.reduce((description, artist, index) => {
        if (index == 0) {return `${artist}`}  
        return `${description}, ${artist}`
      }) + ' and more'
    },
    createDailyMixes: function() {
      dailyMixesFactory.dailyMixesGenerator.chooseFeaturingArtist.FeaturingArtists.forEach((dailyMix) => {
        const artistGroup = dailyMixesFactory.data.artistsGroups.filter(array => array.includes(dailyMix[1]))[0]
        function sortedArtists() {
          for (let i = artistGroup.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
              [artistGroup[i], artistGroup[j]] = [artistGroup[j], artistGroup[i]];
          }
  
          [artistGroup[artistGroup.indexOf(dailyMix[1])], artistGroup[0]] = [artistGroup[0], artistGroup[artistGroup.indexOf(dailyMix[1])]];
          
        }
        sortedArtists()
        const nextId = [...allPlaylists].sort((a, b) => a.id - b.id)[allPlaylists.length - 1].id + 1
        const playlist = {
            name: dailyMix[0],
            id: nextId,
            description: this.generateDescription(artistGroup),
            owner: 'Made for Phuc',
            img: `./data/playlists/daily-mixes/${dailyMix[0]}/${dailyMix[1]}.jfif`,
            songs: this.generateSongs(artistGroup),
            backgroundColor: '122, 130, 137',
            headerColor: '51, 54, 58',
            tag: ['daily mix']
          }
          allPlaylists.push(playlist)
      })
    },
    start: function() {
      this.sortDailyMixes()
      this.chooseFeaturingArtist.handleFeaturing()
      this.createDailyMixes()
    }
  }
}
const bestOfArtistFactory = {

  playlistPageData: [
    {
      name: "All Time Low",
      description: "The best of All Time Low, all in one playlist.",
      backgroundColor: '204, 78, 78',
      headerColor: '86, 32, 32',
    },
    {
      name: "Jonas Blue",
      description: "This is Jonas Blue. The essential tracks, all in one playlist.",
      backgroundColor: '110, 141, 194',
      headerColor: '45, 57, 80',
    },
    {
      name: "Jonas Brothers",
      description: "All the essentials in one playlist.",
      backgroundColor: '147, 139, 169',
      headerColor: '61, 57, 70',
    },
    {
      name: "Kygo",
      description: "The essential Norwegian DJ's tracks and remixes.",
      backgroundColor: '125, 201, 193',
      headerColor: '51, 83, 80',
    },
    {
      name: "Maroon 5",
      description: "From Songs About Jane to JORDI, find their latest releases here!",
      backgroundColor: '55, 55, 62',
      headerColor: '22, 22, 26',
    },
    {
      name: "Martin Garrix",
      description: "The essential tracks by the Dutch DJ and producer.",
      backgroundColor: '132, 199, 192',
      headerColor: '54, 83, 80',
    },
  ],
  
  createDailyMixes: function() {
    for (let i = bestOfArtistFactory.playlistPageData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bestOfArtistFactory.playlistPageData[i], bestOfArtistFactory.playlistPageData[j]] = [bestOfArtistFactory.playlistPageData[j], bestOfArtistFactory.playlistPageData[i]];
    }
    bestOfArtistFactory.playlistPageData.forEach(data => {
      const nextId = [...allPlaylists].sort((a, b) => a.id - b.id)[allPlaylists.length - 1].id + 1
      const playlist = {
        name: 'This Is ' + data.name,
        id: nextId,
        description: data.description,
        owner: 'Spotify',
        img: `./data/playlists/best-of-artist/${data.name}.jfif`,
        songs: allSongs.filter(song => song.artist.includes(data.name)),
        backgroundColor: data.backgroundColor,
        headerColor: data.headerColor,
        tag: ['best of artist']
      }
      allPlaylists.push(playlist)
    })
  },
}
dailyMixesFactory.dailyMixesGenerator.start()
bestOfArtistFactory.createDailyMixes()

function shuffleArray(Array) {
  Array.forEach(value => value.order = Math.floor(Math.random() * (Array.length - 1)) + 1)
  Array.sort((a, b) => a.order - b.order)
  Array.forEach((value, index) => value.order = index + 1)
}



const allSections = [
  {
    name: 'Hello',
    sectionType: "current-playlists",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('own playlist')),
    shuffle: true
  },
  {
    name: 'Made for you',
    sectionType: "daily-mix",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('daily mix')),
    shuffle: false
  },
  {
    name: 'Best of artist',
    sectionType: "best-of-artist",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('best of artist')),
    shuffle: true
  },
  {
    name: 'Recently played',
    sectionType: "recently-played",
    playlists: [...allPlaylists],
    shuffle: true
  },
  {
    name: 'Your playlists',
    sectionType: "your-playlists",
    playlists: [...allPlaylists].filter(playlist => playlist.tag.includes('own playlist')),
    shuffle: true
  },
]

const allUsers = [
  {
    id: 1,
    name: "Donal Trump",
    avatarPath: './assets/images/user/donal-trump.jfif',
    latestSongID: '83',
    lastActive: 'online',
  },
  {
    id: 2,
    name: "Dev Nguyen",
    avatarPath: './assets/images/user/dev-nguyen.jpg',
    latestSongID: '84',
    lastActive: '10h',
  },
  {
    id: 3,
    name: "A Tu",
    avatarPath: './assets/images/user/atu.jpg',
    latestSongID: '85',
    lastActive: '1d',
  }
]

const setGreeting = function() {
  const regex = /[0-9][0-9]:/
  let time =  Date().match(regex)
  time = time[0]
  time = time.slice(0, -1)
  time = Number(time)

  const currentPlaylists = allSections.filter(section => section.sectionType == 'current-playlists')[0]
  if (0 < time && time < 12) {
    currentPlaylists.name = 'Good morning'
  } else if (12 <= time && time < 18) {
    currentPlaylists.name = 'Good afternoon'
  } else {
    currentPlaylists.name = 'Good evening'
  }
}
setGreeting()