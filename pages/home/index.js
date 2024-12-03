const user = JSON.parse(localStorage.getItem("logged_user"))

const getProjects = () => {
    return JSON.parse(localStorage.getItem("projects")) || [];
}

const createProjectCard = (project) => {
    const container = document.createElement("div")
    const header = document.createElement("div")
    const body = document.createElement("div")
    const description = document.createElement("p")
    const containerButton = document.createElement("div")
    const button = document.createElement("a")
    
    container.classList.add("card")
    header.classList.add("card-header")
    body.classList.add("card-body")
    containerButton.classList.add("button-container")
    button.classList.add("card-button")

    header.textContent = project.name
    
    // Limita a descrição a 200 caracteres
    const truncatedDescription = project.description.length > 200 
        ? project.description.substring(0, 200) + "..." 
        : project.description;

    description.textContent = truncatedDescription
    button.textContent = "Saiba mais"
    button.href = `/pages/project/?id=${project.id}`

    body.appendChild(description)
    body.appendChild(containerButton)
    containerButton.appendChild(button)

    container.appendChild(header)
    container.appendChild(body)

    return container
}

const projects = getProjects()

const projectsContainer = document.getElementById("projects")

if (projects.length == 0) {
    const h1 = document.createElement("h1")
    h1.textContent = "Não há nenhum projeto cadastrado."
    projectsContainer.append(h1)
}

for (let i = 0; i < projects.length; i++) {
    const projectEl = createProjectCard(projects[i])

    projectsContainer.appendChild(projectEl)
}

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
