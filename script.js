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

// Gallery
const galleryItems = document.getElementsByClassName('image_container')
function galleryNext() {
	// Figure out which element is active
	let active;
	for (let i=0; i<galleryItems.length; i++) {
		let item = galleryItems[i]
		let index = parseInt(item.dataset.index)
		if (!item.classList.contains("image_inactive")) {
			item.classList.add("image_inactive")
			active = index
		}
	}
	// If the active element is the last element, set the next element to the first element
	if (active==2) {
		active = -1
	} 
	for (let i=0; i<galleryItems.length; i++) {
		let item = galleryItems[i]
		let index = parseInt(item.dataset.index)
		if (index==(active+1)) {
			console.log("showing index: " + index)
			item.classList.remove("image_inactive")
		}
	}
}
function galleryPrevious() {
	// Figure out which element is active
	let active;
	for (let i=0; i<galleryItems.length; i++) {
		let item = galleryItems[i]
		let index = parseInt(item.dataset.index)
		if (!item.classList.contains("image_inactive")) {
			item.classList.add("image_inactive")
			active = index
		}
	}
	// If the active element is the first element, set the next element to the last element
	if (active==0) {
		active = 3
	} 
	for (let i=0; i<galleryItems.length; i++) {
		let item = galleryItems[i]
		let index = parseInt(item.dataset.index)
		if (index==(active-1)) {
			console.log("showing index: " + index)
			item.classList.remove("image_inactive")
		}
	}
}
for (let i=0; i<galleryItems.length; i++) {
	let item = galleryItems[i]
	item.addEventListener("swipe", (e) => {
		console.log("swipe")
	})
}

setInterval(showDate, 1000)
setInterval(galleryNext, 5000)

