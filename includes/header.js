// Define una función para crear el header
function createHeader() {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="https://www.linkedin.com/in/nicolasbastianalvarezolavarria/"> > Nicolás Álvarez</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="curriculum.html">Currículum</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="certificados.html">Certificados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="portafolio.html">Portafolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a>
                    </li>
                </ul>
                <!-- Buscar -->
                <!-- <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form> -->
            </div>
    </div>
</nav>
    `;
}

// Llama a la función createHeader y agrega el HTML generado al cuerpo del documento
// document.body.innerHTML = createHeader();
