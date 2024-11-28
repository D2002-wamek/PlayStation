const gamesList = [
	{
		title: "2K25",
		year: 2024,
		imageUrl:
			"https://images.ctfassets.net/wn7ipiv9ue5v/2o2zzN8bdBFi6BwGFJR1lK/fab7d2a0fa20e7a8ec13c6400bd21422/N25-BASE-STANDARD_EDITION_ANNOUNCE-NA-STATIC-ESRB-AGN-1920x1080.jpg",
		id: 1,
	},
	{
		title: "Naruto Shippuden: Ultimate Ninja Storm 4",
		year: 2020,
		imageUrl:
			"https://i.ytimg.com/vi/UHgQwjyfhn0/maxresdefault.jpg",
		id: 2,
	},
	{
		title: "FC25",
		year: 2024,
		imageUrl:
			"https://i.ytimg.com/vi/pBM2xyco_Kg/maxresdefault.jpg",
		id: 3,
	},
	{
		title: "Call of duty",
		year: 2020,
		imageUrl:
			"https://cdn-uploads.gameblog.fr/img/news/567352_6655e91f1acb0.jpg",
		id: 4,
	},
	{
		title: "God of War Ragnarök",
		year: 2022,
		imageUrl:
			"https://m.media-amazon.com/images/I/81c0fBqu1KL._AC_UF1000,1000_QL80_.jpg",
		id: 5,
	},
	{
		title: "Disney Dreamlight Valley",
		year: 2022,
		imageUrl:
			"https://i.ytimg.com/vi/pYk8Wsehc1k/maxresdefault.jpg",
		id: 6,
	},

]

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
                    <div class="card shadow-sm">
                        <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />
                        <div class="card-body">
                        <h3 class="card-title">${game.title}</h3>
                            <p class="card-text">${game.year}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button 
                                        type="button" 
                                        class="btn btn-sm btn-outline-secondary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >
                                        View
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-sm btn-outline-secondary"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>  `
	})
}
writeDom ()

