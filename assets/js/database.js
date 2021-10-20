const allSongs = []
const database = {
  songs: [
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
    
    ],
  playlists: [ 
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
}


export { database }