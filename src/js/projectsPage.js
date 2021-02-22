document.addEventListener("DOMContentLoaded", addProjects);

const projects_div = document.getElementById("projects_div");


function addProjects(){
    
    // read projects form file
    fetch('src/projects/projects.json')
    .then(response => response.json())
    .then(projects => {


        for (let i = 0; i < projects.primary.length; i = i+2) {
            
            let demoUrl1 = "";
            let demoUrl2 = "";

            if(projects.primary[i].demoUrl){
                demoUrl1 = `<a class="btn btn-outline-secondary" href="${projects.primary[i].demoUrl}" role="button" target="_blank">Live demo »</a>`
            }
            if(projects.primary[i+1].demoUrl){
                demoUrl2 = `<a class="btn btn-outline-secondary" href="${projects.primary[i+1].demoUrl}" role="button" target="_blank">Live demo »</a>`
            }

            projects_div.innerHTML += `

                <div class="row">
                    <div class="col-md-6 project_box">
                        <h2>${projects.primary[i].name}</h2>
                        <p>${projects.primary[i].description}</p>
                        <p>
                            <a class="btn btn-outline-secondary" href="${projects.primary[i].url}" role="button" target="_blank">Project page »</a> 
                            ${demoUrl1}
                        </p>
                    </div>
                    <div class="col-md-6 project_box">
                        <h2>${projects.primary[i+1].name}</h2>
                        <p>${projects.primary[i+1].description}</p>
                        <p>
                            <a class="btn btn-outline-secondary" href="${projects.primary[i+1].url}" role="button" target="_blank">Project page »</a>
                            ${demoUrl2}
                        </p>
                    </div>
                </div>
                <hr>
            `;

        }


        for (let i = 0; i < projects.secondary.length; i = i+3) {

            let demoUrl1 = "";
            let demoUrl2 = "";
            let demoUrl3 = "";

            if(projects.secondary[i].demoUrl){
                demoUrl1 = `<a class="btn btn-outline-secondary" href="${projects.secondary[i].demoUrl}" role="button" target="_blank">Live demo »</a>`
            }
            if(projects.secondary[i+1].demoUrl){
                demoUrl2 = `<a class="btn btn-outline-secondary" href="${projects.secondary[i+1].demoUrl}" role="button" target="_blank">Live demo »</a>`
            }
            if(projects.secondary[i+2].demoUrl){
                demoUrl3 = `<a class="btn btn-outline-secondary" href="${projects.secondary[i+2].demoUrl}" role="button" target="_blank">Live demo »</a>`
            }

            projects_div.innerHTML += `
            
                <div class="row">
                    <div class="col-md-4 project_box">
                        <h2>${projects.secondary[i].name}</h2>
                        <p>${projects.secondary[i].description}</p>
                        <p>
                            <a class="btn btn-outline-secondary" href="${projects.secondary[i].url}" role="button" target="_blank">Project page »</a>
                            ${demoUrl1}
                        </p>
                    </div>

                    <div class="col-md-4 project_box">
                        <h2>${projects.secondary[i+1].name}</h2>
                        <p>${projects.secondary[i+1].description}</p>
                        <p>
                            <a class="btn btn-outline-secondary" href="${projects.secondary[i+1].url}" role="button" target="_blank">Project page »</a>
                            ${demoUrl2}
                        </p>
                    </div>

                    <div class="col-md-4 project_box">
                        <h2>${projects.secondary[i+2].name}</h2>
                        <p>${projects.secondary[i+2].description}</p>
                        <p>
                            <a class="btn btn-outline-secondary" href="${projects.secondary[i+2].url}" role="button" target="_blank">Project page »</a>
                            ${demoUrl3}
                        </p>
                    </div>
                </div>
                <hr>
            `;

        }


    });



}
