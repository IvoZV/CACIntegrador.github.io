const url = 'https://anime-db.p.rapidapi.com/anime/by-ranking/1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a14c86c34fmsh943b3ecf6ebc556p172c00jsna8e4f476481b',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

async function peliculadetalle() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);

        const Container = document.querySelector(".contenedor");
       

        const peliculadetalle1 = document.createElement("div");
        peliculadetalle1.classList.add("peliculadetalle");

        const imagenCol = document.createElement("div");
        imagenCol.classList.add("colum", "imagen");

        const movieimg = document.createElement("img");
        movieimg.classList.add("imgdel");
        movieimg.src = result.image;

        imagenCol.appendChild(movieimg);

        const infoCol = document.createElement("div");
        infoCol.classList.add("colum", "info");

        const h1 = document.createElement("h1");
        h1.textContent = result.title;

        const h3 = document.createElement("h3");
        h3.innerHTML = `Género: ${result.genres.join('/')} <br> `;

        const h2 = document.createElement("h2");
        h2.textContent = "Sinopsis";

        const p = document.createElement("p");
        p.textContent = result.synopsis;

        infoCol.appendChild(h1);
        infoCol.appendChild(h3);
        infoCol.appendChild(h2);
        infoCol.appendChild(p);

        peliculadetalle1.appendChild(imagenCol);
        peliculadetalle1.appendChild(infoCol);

        Container.appendChild(peliculadetalle1);

	} catch (error) {
		console.error('Error fetching the movies:', error);
	}
}

peliculadetalle();