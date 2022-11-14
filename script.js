const container = document.querySelectorAll('.cont')

container.forEach(cont => {
    cont.addEventListener('click', () => {
        removeActiveClasses()
        cont.classList.add('active')
    })
})

function removeActiveClasses() {
    container.forEach(cont => {
        cont.classList.remove('active')
    })
}