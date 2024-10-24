const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start(){

}


function setscore(score){

}

function getScore(){
	return Number(localStorage.getItem('score') ) ?? 0
}

$circle.addEventListener('click', (event) => {
	const rect = $circle.getBoundingClientRect()

	const offfsetX = event.clientX - rect.left - rect.width / 2
	const offfsetY = event.clientY - rect.top - rect.height / 2

	const DEG = 40

	const titlX = (offfsetY / rect.height ) * DEG
	const titlY = (offfsetX / rect.width ) * -DEG

	$circle.style.setProperty('--tiltX', `${titlX}deg`)
	$circle.style.setProperty('--tiltY', `${titlY}deg`)

	setTimeout(() => {
		$circle.style.setProperty('--tiltX', `0deg`)
		$circle.style.setProperty('--tiltY', `0deg`)
	}, 300)

	const plusOne = document.createElement('div')
	plusOne.classList.add('plus-one')
	plusOne.textContent= '+1'
	plusOne.style.left = `${event.clientX - rect.left}px`
	plusOne.style.top = `${event.clientY - rect.top}px`


	$circle.parentElement.appendChild(plusOne)

	setTimeout(()=>{
		plusOne.remove()
	}, 2000)
})