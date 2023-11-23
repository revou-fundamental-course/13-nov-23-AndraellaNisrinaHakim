const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('username')
const imageSlider = document.getElementById('slider')
submitButton[0].addEventListener("click", function(event){
    if (nameInput.value.length === 0 || emailInput.value.length === 0) {
        alert("Nama dan email tidak boleh kosong")
    } else {
        nameOutput.textContent = nameInput.value
    }
})
var i = 0
const images = [
    "assets/img-1.jpeg",
    "assets/img-2.jpg",
    "assets/img-3.jpg"
]
function bannerSlide() {
    i += 1
    if (i == images.length) {
        i = 0
    }
    imageSlider.src = images[i]
}
setInterval (bannerSlide, 3000)