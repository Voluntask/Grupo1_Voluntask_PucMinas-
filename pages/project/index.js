const params = new URLSearchParams(location.search);
const projectId = parseInt(params.get("id"));

const user = JSON.parse(localStorage.getItem("logged_user"))

const projectContainer = document.getElementById("project")


const getProjects = () => {
    return JSON.parse(localStorage.getItem("projects")) || [];
}


function getInProject(buttonProject) {
    const projectId = buttonProject.target.getAttribute("project-id")
    const userId = user.id;

    const projectsUser = JSON.parse(localStorage.getItem("projects_user")) || []

    const projectsIds = projectsUser.filter((p) => p.user == user.id).map((p) => p.project)

    if (projectsIds.includes(projectId)) {
        alert("Voce ja faz parte desse projeto")
        return
    }


    const projectUser = {
        user: userId,
        project: projectId
    }

    projectsUser.push(projectUser)

    localStorage.setItem("projects_user", JSON.stringify(projectsUser));
}


function displayProject() {

    const projects = getProjects()
    const project = projects.find((project) => project.id == projectId) 


    const line = document.createElement("div")
    const header = document.createElement("h1")
    const button = document.createElement("button")
    
    button.addEventListener("click", getInProject)

    line.style.display = "flex"
    line.style.flexDirection = "row"    
    line.style.alignItems = "center"

    button.textContent = "Quero ser candidato"
    button.style.marginLeft= "70px"
    button.setAttribute("project-id", projectId)

    line.appendChild(header)
    line.appendChild(button)
    

    const descripton = document.createElement("p")
    const header2 = document.createElement("h2")

    header.textContent = project.name
    descripton.textContent = project.description

    header2.textContent = "Dados do projeto"

    projectContainer.appendChild(line)
    projectContainer.appendChild(descripton)

    projectContainer.appendChild(header2)

    const projectData = [
        ["Localizacao", "localization"],
        ["Organizacao", "organization"],
        ["Vagas", "positions"],
        ["Requisitos", "requisites"],
        ["Data de inicio", "startDate"],
        ["Data de fim", "endDate"],
        ["Status", "status"]
    ]

    for (let i = 0; i < projectData.length; i++) {
        const [text, key] = projectData[i]

        const span = document.createElement("p")

        span.textContent = `${text}: ${project[key]}`

        projectContainer.appendChild(span)
    }
}


displayProject()


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