class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
	<section class="header">
		<div>
			<span id="date"></span>
			<span id="time"></span>
		</div>
		<div class="flex">
			<div>
				<a target="blank" href="https://wa.me/+91">+91 0000 000 000</span>
			</div>
			<div>
				<a target="blank" href="mailto:">testgmail@hostname.com</a>
			</div>
		</div>
	</section>

	<nav id="nav">
		<a href="/dolurmemorial" class="logo">
			Logo
		</a>
		<ul class="nav_list" id="nav_list">
			<div class="close md_hidden">
				<li class="nav_toggle" onclick="navToggle()">
					<svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
						<g fill="none">
						<g clip-path="url(#healthiconsXNegative0)">
						<path fill="#000000" fill-rule="evenodd" d="M48 0H0v48h48V0ZM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L21.397 24l-8.933 10.72a2 2 0 1 0 3.072 2.56L24 27.124l8.464 10.156a2 2 0 1 0 3.072-2.56L26.603 24l8.933-10.72Z" clip-rule="evenodd"/>
						</g>
						<defs>
						<clipPath id="healthiconsXNegative0">
						<path d="M0 0h48v48H0z"/>
						</clipPath>
						</defs>
						</g>
					</svg>
				</li>
			</div>
			<li class="nav_dropdown sm_hidden">
				<a href="#">Themes</a>
				<ul>
					<li id="light">Light</li>
					<li id="dark">Dark</li>
				</ul>
			</li>
			<li><a href="./about.html">About</a></li>
			<li><a href="./gallery.html">Gallery</a></li>
			<li><a href="#">Courses</a></li>
			<li><a href="#">Admissions</a></li>
			<li><a href="#">Contact</a></li>
			<li>
				<div class="theme_switcher md_hidden">
					<div class="icon hidden" id="moon">
						<svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
							<path fill="#000000" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/>
						</svg>
					</div>
					<div class="icon" id="sun">
						<svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
							<path fill="#eab308" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/>
						</svg>
					</div>
				</div>
			</li>
		</ul>
		<div class="nav_toggle md_hidden" onclick="navToggle()">
			<svg width="100%" height="100%" viewBox="0 0 1536 1280" xmlns="http://www.w3.org/2000/svg">
				<path d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"/>
			</svg>
		</div>
	</nav>

		`
	}
}

window.customElements.define('header-component', Header)

// Scripts for the header sections
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

