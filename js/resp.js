burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
rightNav = document.querySelector('.rightNav')
leftNav = document.querySelector('.leftNav')


burger.addEventListener('click', ()=>{
	rightNav.classList.toggle('v-class-resp');
	leftNav.classList.toggle('v-class-resp');
	navBar.classList.toggle('h-Nav-resp');


})