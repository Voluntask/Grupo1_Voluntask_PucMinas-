
const user = JSON.parse(localStorage.getItem("logged_user"))
if(user.type == "admin") {
    const nav = document.getElementById("menu-items")

    const item = document.createElement("li")
    const link = document.createElement("a")

    link.textContent = "CADASTRAR PROJETO"

    item.classList.add("nav-item")
    link.classList.add("nav-link","ps-2", "link-dark", "fw-semibold")

    link.href = "/pages/register_project"

    item.appendChild(link)

    nav.appendChild(item)
} else {
    const nav = document.getElementById("menu-items")

    const item = document.createElement("li")
    const link = document.createElement("a")

    link.textContent = "MEUS PROJETOS"

    item.classList.add("nav-item")
    link.classList.add("nav-link","ps-2", "link-dark", "fw-semibold")

    link.href = "/pages/my_projects"

    item.appendChild(link)

    nav.appendChild(item)
}