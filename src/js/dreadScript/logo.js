let logo = document.querySelector('.dreadlogo')
let logoLink = document.querySelector(`.logoLink`)

logoLink.addEventListener(`mouseover`, function(){
    logo.src = 'src/js/dreadScript/logoClose.png'
})

logoLink.addEventListener(`mouseout`, function(){
    logo.src = 'src/js/dreadScript/logoOpen.png'
})

//# sourceMappingURL=logo.js.map
