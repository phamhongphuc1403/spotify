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
            dropBar.style.right = `${$('#root__right-sidebar').offsetWidth + 32}px`
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



function handleResponsive() {
    
    function handleTopContainerWidth() {
        const rootTop = $('#root__top-container')
        const mainView = $('#root__main-view')
        
        if (window.outerWidth > 1115) {
            rootTop.style.width = mainView.offsetWidth + 'px'
        } else {
            rootTop.style.width = mainView.offsetWidth + 250 + 'px'
            
        }        
    }

    function handleTextOverflow() {
        const currentPlaylistTitle = document.querySelectorAll('#root__main-view__currently-playing__playlists > .current-playlist > .current-playlist__content > span')
        const currentPlaylistWidth = $('#root__main-view__currently-playing__playlists > .current-playlist').offsetWidth
        
        for (title of currentPlaylistTitle) {
            if (window.outerWidth > 1115) {
                title.style.width = `${currentPlaylistWidth - 164}px` 
            } else {
                title.style.width = `${currentPlaylistWidth - 70}px`

            }
            
        }
    }

    function handlePlaylists() {
        const playlistImgs = document.getElementsByClassName('playlist-img')
        for (let playlistImg of playlistImgs) {
            playlistImg.style.width = $('.playlist').offsetWidth - 32 + 'px'
        }

    }
    
    function handleResponsiveBar() {
        const friendsIcon = $('#responsive-friends')
        const friendsBar = $('#root__right-sidebar')
        const rightSidebar = $('#root__right-sidebar')
        
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
                $('#root__main-view').onclick = function(e) {
                    if (friendsBar.classList.contains('slideToLeft')) {
                    if (e.target != friendsIcon && e.target != $('#root__right-sidebar')) {
                        friendsBar.classList.remove('slideToLeft')
                        friendsBar.classList.add('reverseSlideToLeft')
                        setTimeout(function() {
                            friendsBar.classList.remove('reverseSlideToLeft')
                        }, 300)
                    }
                }
                }
                $('#root__main-view').onscroll = function(e) {
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

}



function nowPlayingOnClick() {
    $('#root__now-playing').onclick = function() {
        if(!document.getElementById('nowPlaying') && window.outerWidth <= 999) {
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

// handleTopContainerOpacity()
openMenu()
handleCurrentPlaylistHover()
handleResponsive() 
nowPlayingOnClick()


window.onresize = function() {
    playSongs.changeNowPlayingColor()
    handleResponsive() 
    nowPlayingOnClick()
}


