let carsList

fetch("http://localhost:3000/api/cars", {
	method: "GET",
	headers: {
		"x-api-key": "secret_phrase_here",
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})
	.then((res) => {
		if (!res.ok) {
			console.log("your API isn't working !!!")
		}
		res.json().then((data) => {
			console.log(data)
			carsList = data // Mise à jour de la liste des voitures avec les données récupérées
			writeDom()  // APRÈS que les données aient été récupérées 
		})
	})
	.catch((error) =>
		console.error("Erreur lors de la récupération des voitures :", error)
	)


function writeDom() {
    const articleContainer = document.querySelector(".row");
    articleContainer.innerHTML = ""; // Réinitialiser le contenu pour éviter les doublons

    // Parcourez la liste des voitures et générez le HTML
    carsList.forEach((car) => {
        articleContainer.innerHTML += `
            <article class="col">
                <div class="card shadow-sm">
                    <img src="${car.carImage}" alt="${car.carName}" class="card-img-top" />
                    <div class="card-body">
                        <h3 class="card-title">${car.carName}</h3>
                        <p class="card-text">Année: ${car.carYear}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button 
                                    type="button" 
                                    class="btn btn-sm btn-outline-secondary view"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    data-edit-id="${car.id}">
                                    Voir
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-sm btn-outline-secondary edit"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    data-edit-id="${car.id}">
                                    Modifier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });

    // Ajouter les événements pour les boutons
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            editModal(e.target.getAttribute("data-edit-id"));
        });
    });

    const viewButtons = document.querySelectorAll(".view");
    viewButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            viewModal(e.target.getAttribute("data-edit-id"));
        });
    });
}

editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		editModal(e.target.getAttribute("data-edit-id"))
	})
})

function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	console.log(gameId)
	// fetch car by ID // http://localhost:3000/api/cars/1
	fetch(`http://localhost:3000/api/cars/${gameId}`, {
		method: "GET",
		headers: {
			"x-api-key": "secret_phrase_here",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error with the car with this id")
			}
			res.json().then((data) => {
				console.log(data)
				const selectedCar = data

				// Injectez le formulaire dans le corps du modal
				fetch("./form.html").then((data) => {
					console.log(selectedCar)

					data.text().then((form) => {
						// Modifiez le titre et le corps du modal

						modifyModal("Mode Edition", form)
						modifyFom({
							title: selectedCar.carName,
							year: selectedCar.carYear,
							imageUrl: selectedCar.carImage,
						})
						document.querySelector(".form-img").src = selectedCar.carImage
						document
							.querySelector('button[type="submit"]')
							.addEventListener("click", () =>
								updateGames(title.value, year.value, imageUrl.value, gameId)
							)
					})
				})
			})
		})
		.catch((error) =>
			console.error("Erreur lors de la récupération des voitures :", error)
		)
}

/*
function updateGames(title, year, imageUrl, gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const index = gamesList.findIndex((game) => game.id === parseInt(gameId))

	gamesList[index].title = title
	gamesList[index].year = year
	gamesList[index].imageUrl = imageUrl
	document.querySelector(".row").innerHTML = "" // Nous supprimons toutes les données des jeux dans le DOM.
	writeDom()
	editButtons = document.querySelectorAll(".edit")
	editButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			editModal(e.target.getAttribute("data-edit-id"))
		})
	})
	
	viewButtons = document.querySelectorAll(".view")
	viewButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			viewModal(e.target.getAttribute("data-edit-id"))
		})
	})
}
*/
function updateGames(title, year, imageUrl, carId) {
	// Créez un objet de données à envoyer au backend.
	const formdata = {
	  title,
	  year,
	  imageUrl,
	  carId,
	};
  
	// Fetch car by ID
	fetch(`http://localhost:3000/api/cars/${carId}`, {
	  method: "PUT",
	  headers: {
		"x-api-key": "secret_phrase_here",
		"Content-Type": "application/json",
		Accept: "application/json",
	  },
	  body: JSON.stringify(formdata),
	});
  }
  

function modifyFom(gameData) {
	const form = document.querySelector("form")
	form.title.value = gameData.title
	form.year.value = gameData.year
	form.imageUrl.value = gameData.imageUrl
}

function modifyModal(modalTitle, modalBody) {
	// Écrire le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
	// Écrire dans le corps du modal
	document.querySelector(".modal-body").innerHTML = modalBody
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
		<button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
</form>`
}

viewButtons = document.querySelectorAll(".view")
viewButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		viewModal(e.target.getAttribute("data-edit-id"))
	})
})

function viewModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	fetch(`http://localhost:3000/api/cars/${gameId}`, {
		method: "GET",
		headers: {
			"x-api-key": "secret_phrase_here",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error("Error with the car with this id")
			}
			res.json().then((data) => {
				console.log(data)
				const selectedCar = data
				// passer une image comme corps du modal
				const modalBody = `<img src="${selectedCar.carImage}" alt="${selectedCar.carName}" class="img-fluid" />`
				modifyModal(selectedCar.carName, modalBody)
				// edit footer
				// Écrire dans le footer
				document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		</button>
</form>`
			})
		})
		.catch((error) =>
			console.error("Erreur lors de la récupération des voitures :", error)
		)
}

