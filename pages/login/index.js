const form = document.getElementById("login-form")

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
}


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const users = getUsers()

    const hasUser = users.some((user) => user.username == username && user.password == password)

    if (!hasUser) {
        alert("Usuario nao encontrado")
    }

})