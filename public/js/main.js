document.body.className += ' fade-out'

function preloader() {
    document.body.classList.remove('fade-out')
}

window.onload = preloader

;(function () {
    var ll = new LazyLoad({
        elements_selector: '.lazy',
    })
})()
