const url = `https://api.unsplash.com/photos/random?count=50`
const gallery = document.getElementById('mainGallery')

fetch(url, {
	method: 'GET',
	headers: {
		'Accept-Version': 'v1',
		'Authorization': `Client-ID ${api_access_token}`
	}
})
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

