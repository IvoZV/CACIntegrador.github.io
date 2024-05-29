const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=8&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a14c86c34fmsh943b3ecf6ebc556p172c00jsna8e4f476481b',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

async function peliculas() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);  // Imprime el resultado para ver su estructura

		if (Array.isArray(result.data)) {  // Asegúrate de que result.data es un arreglo
			result.data.forEach(pelicula => {
				const MovieContainer = document.querySelector(".movie-container");
				const peliculacard = document.createElement("div");
				peliculacard.classList.add("moviecard");
				
				const h3 = document.createElement("h3");
				h3.textContent = pelicula.title;
				
				const a = document.createElement("a");
				a.href = `./pages/detalle.html?id=${pelicula.id}`;
				a.style.textDecoration = 'none';
				
				const movieimg = document.createElement("img");
				movieimg.classList.add("imgmovie");
				movieimg.src = pelicula.image;

				a.appendChild(h3);
				a.appendChild(movieimg);
				peliculacard.appendChild(a);
				MovieContainer.appendChild(peliculacard);
			});
		} else {
			console.error('Expected result.data to be an array');
		}
	} catch (error) {
		console.error('Error fetching the movies:', error);
	}
}

peliculas();