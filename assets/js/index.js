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
    rootTop.style.backgroundColor = 'transparent'
        
    mainView.onscroll = function() {
        if (100 - Math.ceil(mainView.scrollTop) <= 0 && window.outerWidth > 1024) {
                rootTop.style.backgroundColor = `rgba(64, 58, 38, ${- (100 - Math.ceil(mainView.scrollTop)) / 100})`;
            } else {
                rootTop.style.backgroundColor = 'transparent'
            }
        }

        // root.onscroll = function() {
            
        //     if (100 - Math.ceil(root.scrollTop) <= 0) {
        //         rootTop.style.backgroundColor = `rgba(54, 50, 34, ${0.5 + - (100 - Math.ceil(root.scrollTop)) / 100})`;
        //     }
            
        //         }
}



function handleResponsive() {
    
    function handleTopContainerWidth() {
        const rootTop = document.getElementById('root__top-container')
        const mainView = document.getElementById('root__main-view')
        
        if (window.outerWidth > 1115) {
            rootTop.style.width = mainView.offsetWidth + 'px'
            // console.log(rootTop.style.width)
        } else {
            rootTop.style.width = mainView.offsetWidth + 250 + 'px'
            
        }        
    }

    function handleTextOverflow() {
        const currentPlaylistTitle = document.querySelectorAll('#root__main-view__currently-playing__playlists > .current-playlist > .current-playlist__content > span')
        const currentPlaylistWidth = document.querySelector('#root__main-view__currently-playing__playlists > .current-playlist').offsetWidth
        
        for (title of currentPlaylistTitle) {
            if (window.outerWidth > 1115) {
                title.style.width = `${currentPlaylistWidth - 164}px` 
            } else {
                title.style.width = `${currentPlaylistWidth - 100}px`
                console.log(title.offsetWidth)
            }
            
        }
    }

    function handlePlaylists() {
        const playlistImgs = document.getElementsByClassName('playlist-img')
        for (let playlistImg of playlistImgs) {
            playlistImg.style.width = document.querySelector('.playlist').offsetWidth - 32 + 'px'
        }

    }
    
    function handleResponsiveBar() {
        const friendsIcon = document.querySelector('#responsive-friends')
        const friendsBar = document.querySelector('#root__right-sidebar')
        const rightSidebar = document.querySelector('#root__right-sidebar')
        
        if (window.outerWidth <= 1115) {      
            const profile = document.createElement('div')
                profile.classList.add('responsive-friends__profile')
                profile.innerHTML = `
                        <img src="./assets/images/user/user-avatar.jpg">
                        <div class="user">
                            <span class='name'>Pham Hong Phuc</span>
                            <div class='view-profile'>view profile</div>
                        </div>
                        <img class='setting' src='./assets/images/right-sidebar/setting.png'>`
                rightSidebar.appendChild(profile) 
                
            if (friendsIcon) {
                
                friendsIcon.onclick = function() {
                    
                    if (!friendsBar.classList.contains('slideToLeft')) {     
                        friendsBar.classList.add('slideToLeft')
                    }
                }
                document.querySelector('#root__main-view').onclick = function(e) {
                    if (friendsBar.classList.contains('slideToLeft')) {
                    if (e.target != friendsIcon && e.target != document.querySelector('#root__right-sidebar')) {
                        friendsBar.classList.remove('slideToLeft')
                        friendsBar.classList.add('reverseSlideToLeft')
                        setTimeout(function() {
                            friendsBar.classList.remove('reverseSlideToLeft')
                        }, 300)
                    }
                }
                }
                document.querySelector('#root__main-view').onscroll = function(e) {
                    if (friendsBar.classList.contains('slideToLeft')) {
                            friendsBar.classList.remove('slideToLeft')
                            friendsBar.classList.add('reverseSlideToLeft')
                            setTimeout(function() {
                                friendsBar.classList.remove('reverseSlideToLeft')
                            }, 300)
                    }
                }
            }

        }
    }

    handleTextOverflow()
    handleTopContainerWidth()
    handlePlaylists()
    handleResponsiveBar()

    window.onresize = function() {
        handleTopContainerWidth() 
        handleTextOverflow()
        handlePlaylists()
        handleResponsiveBar()
    }
}





handleTopContainerOpacity()
openMenu()
handleCurrentPlaylistHover()
handleResponsive() 

