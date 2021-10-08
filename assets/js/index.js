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
            userBox.appendChild(dropBar)
            
        }
    }
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