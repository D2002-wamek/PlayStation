const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const userName = form.userName.value;
  
    // Validation du formulaire
    try {
      validateEmail(email);
    } catch (error) {
      showError(error);
      return console.error(error);
    }
  
    try {
      validateName(userName);
    } catch (error) {
      showError(error);
      return console.error(error);
    }
  
    const formdata = {
      email,
      userName,
    };
    console.log(formdata)
    //logIn(formdata);
  });
  

// input validation

function validateName(input) {
	if (!input || input.trim() === "") {
		throw new Error("L'user name est vide !")
	}

	const alphanumericRegex = /^[a-zA-Z0-9]+$/
	if (!alphanumericRegex.test(input)) {
		throw new Error(
			"L'entrée doit contenir uniquement des caractères alphanumériques."
		)
	}
}

function validateEmail(input) {
	if (!input || input.trim() === "") {
		throw new Error("L'email name est vide")
	}

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	if (!emailRegex.test(input)) {
		return "L'entrée doit contenir uniquement des caractères alphanumériques."
	}
}

function showError(error) {
	document.querySelector(".alert").innerText = error
	document.querySelector(".alert").classList.remove("d-none")
	setTimeout(() => {
		document.querySelector(".alert").classList.add("d-none")
	}, 2100)
}