function openMenu() {
    document.getElementById('root__top__user').onclick = function() {
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
    const pauseBtns = Array.from(document.getElementsByClassName('playing'))
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
    mainView.onscroll = function() {
        if (100 - Math.ceil(mainView.scrollTop) <= 0) {
            rootTop.style.backgroundColor = `rgba(54, 50, 34, ${0.5 + - (100 - Math.ceil(mainView.scrollTop)) / 100})`;
        }
    }
}

function handleTopContainerWidth() {
    const rootTop = document.getElementById('root__top-container')
    const mainView = document.getElementById('root__main-view')
    rootTop.style.width = mainView.offsetWidth + 'px';
    
}

function handleTopContainer() {
    handleTopContainerWidth()
    handleTopContainerOpacity()
}

handleTopContainer()
openMenu()
handleCurrentPlaylistHover()

