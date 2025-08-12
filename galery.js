// const galery = document.getElementById('galeria');
// const items = document.querySelectorAll('.galery_item')

// items.forEach(e => {
//     e.addEventListener("click", () => {
//         e.classList.toggle('modal')
//     })
// })
const openImageModal = {
    show(obj) {
        const canvas = window.innerWidth;
        if (canvas <= 1320) return;
        // console.log(typeof canvas);
		if (typeof obj.img === "undefined") {
			console.error("`img` not defined. It must be the image tag.")
			return
		}

		const animate = true;
		const src = obj.img.getAttribute("src")
        console.log(src)

		let modal = document.getElementById("open-image-modal")
		if (modal == null) {
			let html = `<!-- The Modal -->
			<div id="open-image-modal">

				<!-- Modal content -->
				<div class="open-image-modal-content ` + (animate ? 'animate' : '') + `">
					<div class="open-image-modal-header">
						<span class="open-image-modal-close">&times;</span>
					</div>

					<div class="modal-body">
						<img src="` + src + `" style="width: 100%;" />
					</div>
				</div>

			</div>`

			document.body.innerHTML += html

			setTimeout(function () {
				modal = document.getElementById("open-image-modal")
				modal.style.display = "block"

				const close = document.querySelector("#open-image-modal .open-image-modal-close")
				if (close != null) {
					close.onclick = function () {
						modal.style.display = "none"
					}
				}

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
					if (event.target == modal) {
						modal.style.display = "none"
					}
				}
			}, 0)
		} else {
			modal.querySelector("img").setAttribute("src", src)
			modal.querySelector(".open-image-modal-content").className = "open-image-modal-content " + (animate ? 'animate' : '')
			modal.style.display = "block"
		}
	}
}