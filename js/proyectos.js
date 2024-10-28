document.querySelectorAll('.dificultad').forEach(item => {
    item.addEventListener('click', (e) => {
        const level = e.target.getAttribute('data-level');

        // Lógica para mostrar proyectos específicos según la dificultad
        if (level === 'easy') {
            document.querySelector('.proyectos_front').innerHTML = `
                <div class="inicio_lista">Front Beginner Projects</div>
                <div class="project" data-project="front_easy_1"><a href="#">Calculadora</a></div>
                <div class="project" data-project="front_easy_2"><a href="#">To do List</a></div>
            `;
            document.querySelector('.proyectos_back').innerHTML = `
                <div class="inicio_lista">Back Beginner Projects</div>
                <div class="project" data-project="back_easy_1"><a href="#">Back Beginner Project 1</a></div>
                <div class="project" data-project="back_easy_2"><a href="#">Back Beginner Project 2</a></div>
            `;
        } else if (level === 'medium') {
            document.querySelector('.proyectos_front').innerHTML = `
                <div class="inicio_lista">Front Medium Projects</div>
                <div class="project" data-project="front_medium_1"><a href="#">Front Medium Project 1</a></div>
                <div class="project" data-project="front_medium_2"><a href="#">Front Medium Project 2</a></div>
            `;
            document.querySelector('.proyectos_back').innerHTML = `
                <div class="inicio_lista">Back Medium Projects</div>
                <div class="project" data-project="back_medium_1"><a href="#">Back Medium Project 1</a></div>
                <div class="project" data-project="back_medium_2"><a href="#">Back Medium Project 2</a></div>
            `;
        } else if (level === 'hard') {
            document.querySelector('.proyectos_front').innerHTML = `
                <div class="inicio_lista">Front Hard Projects</div>
                <div class="project" data-project="front_hard_1"><a href="#">Front Pro Project 1</a></div>
                <div class="project" data-project="front_hard_2"><a href="#">Front Pro Project 2</a></div>
            `;
            document.querySelector('.proyectos_back').innerHTML = `
                <div class="inicio_lista">Back Hard Projects</div>
                <div class="project" data-project="back_hard_1"><a href="#">Back Pro Project 1</a></div>
                <div class="project" data-project="back_hard_2"><a href="#">Back Pro Project 2</a></div>
            `;
        }

        // Desplazamiento suave a la sección de proyectos
        const proyectosSection = document.querySelector('.proyectos');
        proyectosSection.scrollIntoView({ behavior: 'smooth' });

        // Añadir eventos para mostrar la descripción del proyecto
        document.querySelectorAll('.project').forEach(project => {
            project.addEventListener('click', (e) => {
                e.preventDefault();
                const projectID = project.getAttribute('data-project');
                showProjectDescription(projectID);
            });
        });
    });
});

function showProjectDescription(projectID) {
    let descriptionHTML = '';

    // Definir el contenido para cada proyecto
    switch (projectID) {
        case 'front_easy_1':
            descriptionHTML = `
                <div class="proyecto_titulo">
                    <span>Calculadora</span>
                    <img src="iconos/html_icon.svg" alt="HTML5_icon" class="proyecto_icono">
                    <img src="iconos/css_icon.svg" alt="CSS_icon" class="proyecto_icono">
                    <img src="iconos/js_icon.svg" alt="JS_icon" class="proyecto_icono">
                </div>
                <div class="proyecto_info">
                    <img src="imagenes/calculadora.png" alt="Project Image">
                    <div class="texto_info">
                    <p>
                    Una calculadora interactiva desarrollada con HTML, CSS y JavaScript. 
                    Este proyecto permite realizar operaciones aritméticas básicas como suma, resta, multiplicación y división. 
                    La interfaz es sencilla y fácil de usar, con un diseño responsive que se adapta a diferentes dispositivos.
                    </p>
                    <div class="btn_info">
                    <a href="front_project_easy1.html">Enlace al proyecto</a>
                    <a href="#"><img src="iconos/github.svg" alt="Github icon" class="proyecto_icono"> </a>
                    </div>
                    </div>
                </div>
            `;
            break;
        case 'front_easy_2':
            descriptionHTML = `
                <div class="proyecto_titulo">
                    <span>To Do List</span>
                    <img src="iconos/html_icon.svg" alt="HTML5_icon" class="proyecto_icono">
                    <img src="iconos/css_icon.svg" alt="CSS_icon" class="proyecto_icono">
                    <img src="iconos/js_icon.svg" alt="JS_icon" class="proyecto_icono">
                </div>
                <div class="proyecto_info">
                    <img src="imagenes/todo.png" alt="Project Image">
                    <div class="texto_info">
                    <p>
                    Una aplicación web para gestionar tareas diarias, desarrollada con HTML, CSS y JavaScript. 
                    Permite a los usuarios agregar, marcar como completadas y eliminar tareas de manera sencilla. 
                    La interfaz es minimalista y responsive, diseñada para brindar una experiencia intuitiva en cualquier dispositivo.
                    </p>
                    <a href="front_project_easy1.html">Enlace al proyecto</a>
                    </div>
                </div>
            `;
            break;
        // Añadir más casos para otros proyectos según sea necesario
    }

    const descriptionContainer = document.querySelector('.project-description');
    descriptionContainer.innerHTML = descriptionHTML;
    descriptionContainer.style.display = 'flex';
}
const emailSpan = document.querySelector('.clipboard');
emailSpan.addEventListener('click', () => {
    const email = emailSpan.textContent;

    // Copiar al portapapeles
    navigator.clipboard.writeText(email).then(() => {
        console.log('Email copiado al portapapeles');
        alert('Email copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el email: ', err);
    });
});
const copyIcon = document.querySelector('.icono_clipboard');
copyIcon.addEventListener('click', () => {
    const email = emailSpan.textContent;
    copyEmailToClipboard(email);
});