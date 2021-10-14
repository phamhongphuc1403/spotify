function openMenu() {
    document.getElementById('root__top__user').onclick = function() {
        document.getElementById('root__top__user').style.backgroundColor = '#282828'

        if (document.querySelector('.root__top__user__drop-bar')) {
            document.querySelector('.root__top__user__drop-bar').remove()
        } else {
            const userBox = document.getElementById('root__top__user')
            const dropBar = document.createElement('ul')
            dropBar.classList.add('root__top__user__drop-bar')
            dropBar.innerHTML = `
                <li class="drop-bar-item"><span>Account</span><img src="assets/images/top-container/share.png"></li>
                <li class="drop-bar-item"><span>Profile</span></li>
                <li class="drop-bar-item"><span>Log out</span></li>`
            dropBar.style.right = `${document.getElementById('root__right-sidebar').offsetWidth + 32}px`
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
function handleTopContainerOpacity() {
    const rootTop = document.getElementById('root__top-container')
    const mainView = document.getElementById('root__main-view')
    const root = document.getElementById('root')
    
    if (window.outerWidth > 768) {
        mainView.onscroll = function() {
            if (100 - Math.ceil(mainView.scrollTop) <= 0) {
                rootTop.style.backgroundColor = `rgba(54, 50, 34, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
            }
        }

        root.onscroll = function() {
            
            if (100 - Math.ceil(root.scrollTop) <= 0) {
                rootTop.style.backgroundColor = `rgba(54, 50, 34, ${0.5 + - (100 - Math.ceil(root.scrollTop)) / 100})`;
            }
            
        }
    } else {
        rootTop.style.backgroundColor = 'rgb(54, 50, 34)'
    }
}



function handleResponsive() {
    
    function handleTopContainerWidth() {
        const rootTop = document.getElementById('root__top-container')
        const mainView = document.getElementById('root__main-view')
        
        if (window.outerWidth > 768) {
            rootTop.style.width = mainView.offsetWidth + 'px'
            console.log( rootTop.style.width)
        } else {
            rootTop.style.width = mainView.offsetWidth + 5 + 'px'
            console.log(rootTop.style.width)
        }        
    }

    function handleTextOverflow() {
        const currentPlaylistTitle = document.querySelectorAll('#root__main-view__currently-playing__playlists > .current-playlist > .current-playlist__content > span')
        const currentPlaylistWidth = document.querySelector('#root__main-view__currently-playing__playlists > .current-playlist').offsetWidth
        
        for (title of currentPlaylistTitle) {
            if (window.outerWidth > 768) {
                title.style.width = `${currentPlaylistWidth - 164}px` 
            } else {
                title.style.width = `${currentPlaylistWidth - 85}px`
            }
            
        }
    }

    function handlePlaylists() {
        const playlistImgs = document.getElementsByClassName('playlist-img')
        for (let playlistImg of playlistImgs) {
            playlistImg.style.width = document.querySelector('.playlist').offsetWidth - 32 + 'px'
        }

        // const playlists =  document.getElementsByClassName('playlist')
        // for (let playlist of playlists) {
        //     playlist.gridTemplateRow = `${playlist.offsetWidth + 50} px`
        // }
    }
    function handlePlaybackSlider() {
        const slider = document.querySelector('#root__now-playing__player-control__playback-bar__range-slider')
        slider.style.display = 'block';
        if (window.outerWidth <= 768) slider.style.width = document.querySelector('#root__main-view').offsetWidth+ 'px'
        console.log(slider.style.width)
    }
    
    handleTextOverflow()
    handleTopContainerWidth()
    handlePlaylists()
    handlePlaybackSlider()

    window.onresize = function() {
        handleTopContainerWidth() 
        handleTextOverflow()
        handlePlaylists()
        handlePlaybackSlider()
    }
}


handleTopContainerOpacity()
openMenu()
handleCurrentPlaylistHover()
handleResponsive() 




    
    