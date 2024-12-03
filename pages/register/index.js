const form = document.getElementById("register-form")

const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
}

const setUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
} 

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirm-password").value
    const userType = document.getElementById("user_type").value

    if (password != confirmPassword) {
        alert("Senhas nao estao iguais")
        return
    }

    const users = getUsers()

    const hasUser = users.find((user) => user.username == username)

    if (hasUser) {
        alert("Ja existe um usuario com esse nome.")
        return
    }

    const user = {
        username: username,
        email: email,
        password: password,
        type: userType
    }


    users.push({
        ...user,
        id: users.length + 1
    })

    setUsers(users)

    localStorage.setItem("logged_user", JSON.stringify({...user, id: users.length +1}));
    
    window.location.href = "http://127.0.0.1:5500/pages/home";
})