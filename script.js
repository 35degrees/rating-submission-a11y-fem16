const submit = document.querySelector('.btn')
// const submitBtn = document.getElementById('submit-button')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const card = document.querySelector('.card')
const cardContainer = document.querySelector('.card-container')
const ratingsInput = document.querySelectorAll('.ratings-input')
const starRating = document.querySelector('.star-rating')
const form = document.querySelector('form')
const number = document.querySelector('.number')
const numbers = document.querySelectorAll('.numbers')
///////////////////////////

//////////////////////////

// CUSTOM FLIP CODEPEN HERE: https://codepen.io/tjegan/pen/zrMdEO

function flip(e) {
	cardContainer.classList.toggle('flip')
	front.style.transform.scale = '0.5'
}
submit.addEventListener('click', flip)

ratingsInput.forEach((rating) => {
	rating.addEventListener('change', () => {
		let selected = rating.value
		starRating.textContent = `
      You selected ${selected} out of 5 stars.
    `
		submit.removeAttribute('disabled')
	})
})

////////////////////////////////

// OLD FORM

// function loadRatings() {
// 	const starRating = document.querySelector('.star-rating')

// 	ratingsInput.forEach((rating) => {
// 		rating.addEventListener('click', () => {
// 			let selected = rating.value
// 			starRating.textContent = `
//             You selected ${selected} out of 5 stars
//           `
// 			submit.removeAttribute('disabled')
// 			rating.disabled = true
// 		})
// 	})
// }

// window.addEventListener('DOMContentLoaded', loadRatings)

////////////////////////////////
