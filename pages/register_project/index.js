const form = document.getElementById("project-form")

const getProjects = () => {
    return JSON.parse(localStorage.getItem("projects")) || [];
}

const setProjects = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
} 

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value
    const description = document.getElementById("description").value
    const organization = document.getElementById("organization").value
    const localization = document.getElementById("localization").value
    const startDate = document.getElementById("start-date").value
    const endDate = document.getElementById("end-date").value
    const positions = document.getElementById("positions").value
    const requisites = document.getElementById("requisites").value
    const contact = document.getElementById("contact").value
    const status = document.getElementById("status").value

    const project = {
        name: name,
        description: description,
        organization: organization,
        localization: localization,
        startDate: startDate,
        endDate: endDate,
        positions: positions,
        requisites: requisites,
        contact: contact,
        status: status
    }

    const projects = getProjects()

    projects.push({
        ...project,
        id: projects.length + 1
    })


    setProjects(projects)

    window.location.href = "http://127.0.0.1:5500/pages/home";
})



const user = JSON.parse(localStorage.getItem("logged_user"))

if(user.type == "admin") {
    const nav = document.getElementById("menu-items")

    console.log(nav)

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