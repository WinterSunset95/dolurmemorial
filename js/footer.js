class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
	<section class="footer">
		Copyright © 2023. This is the official Website of Dolur Memorial College, Pherzawl, Manipur, <br>
		an undergraduate college under the Department of University and Higher Education, Government of Manipur

		<br><br>
		Last reviewed and updated on: 18th October 2023
	</section>

	<section class="developer">
		<a target="blank" href="https://wintersunset95.github.io">Designed and developed by <span>Mark L.F Tlau @ Infotech B. Street</span></a>
	</section>

		`
	}
}

customElements.define('footer-component', Footer);
