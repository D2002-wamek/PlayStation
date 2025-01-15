const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const email = form.email.value
	const userName = form.userName.value
	const formdata = {
		email,
		userName,
	}
	console.log(formdata)
})