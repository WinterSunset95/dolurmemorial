const url = `https://infotechbstreet.online/api/galleryapi.php`
const gallery = document.getElementById('mainGallery')

fetch(url)
.then(response => response.json())
.then(data => {
	data.forEach(photo => {
		const div = document.createElement('div')
		console.log(photo.urls.small)
		div.classList.add('gallery-item')
		div.innerHTML = `
		<img src="${photo.urls.small}">
		`
		gallery.appendChild(div)
	})
})

