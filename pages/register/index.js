const form = document.getElementById("register-form")

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
}

const setUsers = (users) => {
    localStorage.setItem("cadastro", JSON.stringify(users));
} 

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value

    if (password != confirmPassword) {
        alert("Senhas nao estao iguais")
        return
    }

    const user = {
        username: username,
        email: email,
        password: password
    }

    const users = getUsers()

    users.push({
        ...user,
        id: users.length + 1
    })

    setUsers(users)
})