const projects_info = [
    {
        number: 1,
        name: "bar-chart",
        img_name: "1-bar-chart.png",
    },
    {
        number: 2,
        name: "progress-steps",
        img_name: "2-pie-chart.png",
    },
];

const project_element = document.querySelector("#projects-live-container");

project_info.forEach((project) => {
    project_element = document.createElement("div");

    project_element.innerHTML = `
        <span class="project-info">${project.number}</span>
        <img src="./images/${project.img_name}" alt="${project.name}" />
        <div class="projects-live-content">
            <h4>${project.name}</h4>
            <button
                href="#"
                id="${project.name}"
                class="btn"
                >Live Demo
            </button>
        </div>
    `;

    project_element.appendChild(project_element);
})
