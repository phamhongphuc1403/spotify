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
