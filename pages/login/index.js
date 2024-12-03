const form = document.getElementById("login-form")

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
}


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const users = getUsers()

    const user = users.find((user) => user.username == username && user.password == password)

    if (!user) {
        alert("Usuario nao encontrado")
        return
    }

    localStorage.setItem("logged_user", JSON.stringify(user));
    
    window.location.href = "http://127.0.0.1:5500/pages/home";
})