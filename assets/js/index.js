function openMenu() {
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







const slider = document.getElementById("root__now-playing__player-control__playback-bar__range-slider")
slider.oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%,#535353 ' + value + '%, #535353 100%)'
};

slider.onmouseenter = function() {
    const head = document.querySelector('head')
    const link = document.createElement('link')
    link.setAttribute('rel',"stylesheet")
    link.setAttribute('href',"./assets/css/slider.css")
    link.setAttribute('id',"slider")
    head.appendChild(link)
    
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1db954 0%, #1db954 ' + value + '%,#535353 ' + value + '%, #535353 100%)'
}

slider.onmouseleave = function() {
    const sliderHover = document.getElementById('slider')
    sliderHover.remove()
    
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #b3b3b3 0%, #b3b3b3 ' + value + '%,#535353 ' + value + '%, #535353 100%)'

}



function handleTopContainerOpacity() {
    const rootTop = document.getElementById('root__top-container')
    const mainView = document.getElementById('root__main-view')
    mainView.onscroll = function() {
        if (100 - Math.ceil(mainView.scrollTop) <= 0) {
            rootTop.style.backgroundColor = `rgba(54, 50, 34, ${0.5 + -(100 - Math.ceil(mainView.scrollTop)) / 100})`;
        }
    }
}

handleTopContainerOpacity()


function handleTopContainerWidth() {
    const rootTop = document.getElementById('root__top-container')
    const mainView = document.getElementById('root__main-view')
    rootTop.style.width = mainView.offsetWidth + 'px';
    
}

handleTopContainerWidth()

const mainView = document.getElementById('root__main-view')
mainView.onmousedown = function() {
    
}