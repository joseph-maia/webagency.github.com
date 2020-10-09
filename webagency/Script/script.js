// Animation du text

const textAnimation = document.querySelector('.animationSlogan');

new Typewriter (textAnimation, {

})

.start()
.changeDelay(100)
.typeString('<span style="color: #3DA7CD;">WEBAGENCY</span> ')
.pauseFor(300)
.typeString(": L'AGENCE DE TOUS")
.pauseFor(200)
.typeString("<br>VOS PROJETS !")

