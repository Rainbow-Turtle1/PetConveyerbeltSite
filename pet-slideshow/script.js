const API_URL = "https://roboturtle-api.onrender.com/api/images";
const track = document.getElementById("image-track");

async function loadImages() {
	try {
		const res = await fetch(API_URL);
		let images = await res.json();

		if (!images.length) {
			track.innerHTML = "<p>No images found</p>";
			return;
		}

		const allImages = [...images, ...images, ...images]; // looping smoothly

		allImages.forEach((imgData) => {
			const img = document.createElement("img");
			img.src = `https://roboturtle-api.onrender.com/proxy-image?url=${encodeURIComponent(
				imgData.url
			)}`;
			img.alt = "pet image";
			track.appendChild(img);
		});

		const speed = images.length * 7;
		track.style.animationDuration = `${speed}s`;
	} catch (err) {
		console.error("Failed to load images:", err);
	}
}

loadImages();
