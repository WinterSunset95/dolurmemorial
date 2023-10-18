const light = document.getElementById("light")
const dark = document.getElementById("dark")
const moon = document.getElementById("moon")
const sun = document.getElementById("sun")
const body = document.body
const nav = document.getElementById("nav")

// sticky on scroll
//let sticky = nav.offsetTop
//window.onscroll = () => {
//	if (window.scrollY > sticky) {
//		nav.classList.add("sticky")
//	} else {
//		nav.classList.remove("sticky")
//	}
//}

// theme switcher

light.onclick = () => {
	body.classList.replace('dark', 'light')
}

dark.onclick = () => {
	body.classList.replace('light', 'dark')
}

moon.onclick = () => {
	body.classList.replace('light', 'dark')
	moon.classList.add('hidden')
	sun.classList.remove('hidden')
}

sun.onclick = () => {
	body.classList.replace('dark', 'light')
	sun.classList.add('hidden')
	moon.classList.remove('hidden')
}

// nav toggle
//
function navToggle() {
	const nav = document.getElementById("nav_list")
	nav.classList.toggle("nav_list_active")
}

function showDate() {
	const dateDisplay = document.getElementById("date")
	const timeDisplay = document.getElementById("time")
	const date = new Date()
	const days = {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	}
	const months = {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December'
	}
	const displayDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
	const displayTime = `${hours}:${minutes}:${seconds}`
	dateDisplay.innerHTML = displayDate
	timeDisplay.innerHTML = displayTime
}

// Section toggle

function toggleSection(id, buttons) {
	const sectionElement = document.getElementById(id)
	const buttonsElementList = document.getElementById(buttons).children
	sectionElement.classList.toggle("section_inactive")

	for (let i=0; i<buttonsElementList.length; i++) {
		if (buttonsElementList[i].classList.contains("hidden")) {
			buttonsElementList[i].classList.remove("hidden")
		} else {
			buttonsElementList[i].classList.add("hidden")
		}
	}
}

setInterval(showDate, 1000)

