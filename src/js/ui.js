document.addEventListener("DOMContentLoaded", onDomLoad);

const nav_div = document.getElementById("nav_div");
const bottom_div = document.getElementById("bottom_div");
const footer_div = document.getElementById("footer_div");

function onDomLoad(){
    addHead();
    addNav();
    addFooter();
}

function addHead(){
    document.head.innerHTML += `
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="description" content='Hi I'm Can Kurt - Computer Engineer and this is my portfolio.' />

        <title>Can Kurt Portfolio</title>
        <!-- site icon -->
        <link rel="shortcut icon" href="src/icons/icon.png">

        <!-- font awesome -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <!-- bootstrap --->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <link rel="stylesheet" type="text/css" href="src/css/styles.css">
    `;
}

function addFooter(){
    footer_div.innerHTML = `
        <footer class="footer">
            <span class="text-muted">© 2021 Can Kurt</span>
        </footer>
    `;
}

function addNav(){
    let home = "";
    let projects = "";
    let about = "";
    const path = window.location.pathname;

    if(path === "/"){
        home = "nav_active";
    }
    else if(path === "/projects.html"){
        projects = "nav_active";
    }
    else if(path === "/about.html"){
        about = "nav_active";
    }

    nav_div.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
            <a class="${home} navbar-brand d-sm-none" href="/">
                <span class="icon">
                    <i class="fa fa-home"></i>
                </span>
            </a>
            <a class="${projects} navbar-brand d-sm-none" href="projects.html">
                <span class="icon">
                    <i class="fa fa-file-text-o"></i>
                </span>
            </a>
            <a class="${about} navbar-brand d-sm-none" href="about.html">
                <span class="icon">
                    <i class="fa fa-user-o"></i>
                </span>
            </a>

            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container mt-2 mt-md-0">
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item nav_left">
                            <a class="nav-link ${home}" href="/">
                                <span class="icon">
                                    <i class="fa fa-home"></i>
                                </span>
                                Home
                            </a>
                        </li>
                        <li class="nav-item nav_left">
                            <a class="nav-link ${projects}" href="projects.html">
                                <span class="icon">
                                    <i class="fa fa-file-text-o"></i>
                                </span>
                                Projects
                            </a>
                        </li>
                        <li class="nav-item nav_left">
                            <a class="nav-link ${about}" href="about.html">
                                <span class="icon">
                                    <i class="fa fa-user-o"></i>
                                </span>
                                About
                            </a>
                        </li>
                    </ul>
                    <div class="favicons">
                        <a href="http://github.com/cccaaannn" target="_blank" class="nav-item nav_right">
                            <span class="icon">
                                <i class="fa fa-github"></i>
                            </span>
                        </a>	
                        <a href="https://www.linkedin.com/in/can-kurt1" target="_blank" class="nav-item nav_right">
                            <span class="icon">
                                <i class="fa fa-linkedin"></i>
                            </span>
                        </a>
                        <a href="https://stackoverflow.com/users/10736407/can" target="_blank" class="nav-item nav_right">
                            <span class="icon">
                                <i class="fa fa-stack-overflow"></i>
                            </span>
                        </a>		
                    </div>
                </div>
            </div>
        </nav>
    `;
}
