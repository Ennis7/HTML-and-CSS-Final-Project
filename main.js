document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn")

    btn.addEventListener('click', () => {
        document.body.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 1000,
        })
    })
})