document.addEventListener("DOMContentLoaded", addProjects);

const projects_div = document.getElementById("projects_div");


const projects = {
    "primary":[
        {
            "name":"imagepreprocessing",
            "url":"https://pypi.org/project/imagepreprocessing/",
            "description":"A small library for speeding up the dataset preparation and model testing steps for deep learning on various frameworks."
        },
        {
            "name":"Deep predictor",
            "url":"https://github.com/cccaaannn/deep_predictor",
            "description":"A simple backend for image prediction tasks that uses deep learning."
        },
        {
            "name":"Quickshot",
            "url":"https://github.com/cccaaannn/Quickshot",
            "description":"A simple, quick, customizable screenshot tool."
        },
        {
            "name":"Telegram YouTube downloader",
            "url":"https://github.com/cccaaannn/telegram_youtube_downloader",
            "description":"Telegram bot for downloading and sending YouTube videos."
        },
        {
            "name":"Keyboard macro",
            "url":"https://github.com/cccaaannn/keyboard-macro",
            "description":"Multi purpose keyboard macro, you can add delays between your keystrokes or you can export your macro to a file and import it for later use."
        },
        {
            "name":"Log analyzer",
            "url":"https://github.com/cccaaannn/cpp-data-structures-project",
            "description":"Finds top repeating patterns on huge files really fast, uses specialized binary search and horspool algorithm to speed up process."
        },
        {
            "name":"cvf article bot",
            "url":"https://github.com/cccaaannn/cvf_article_bot",
            "description":"Finds cv articles from cvf site by given words or word groups, it can download articles to separate folders which named by conference name."
        },
        {
            "name":"iett bot",
            "url":"https://github.com/cccaaannn/iett_bot",
            "description":"Pulls and filters bus times from iett site for Istanbul, easy to integrate to telegram bots or mail clients."
        }
    ],
    "secondary":[
        {
            "name":"Image warper",
            "url":"https://github.com/cccaaannn/image_warper",
            "description":"Warps images to wanted shape using homography."
        },
        {
            "name":"Background subtractor",
            "url":"https://github.com/cccaaannn/background_subtractor",
            "description":"Uses median method to subtract the background of images."
        },
        {
            "name":"Offsite finder",
            "url":"https://github.com/cccaaannn/offsite_finder",
            "description":"Finds metric distance between two points on images, uses homography to warp images."
        },

        {
            "name":"keylogger",
            "url":"https://github.com/cccaaannn/keylogger",
            "description":"Sends logged keys as mail if provided file size exceeded or provided time limit reached."
        },
        {
            "name":"image cropping tool",
            "url":"https://github.com/cccaaannn/image_cropping_tool",
            "description":"Image cropping tool for cropping a lot of images fast."
        },
        {
            "name":"Bear game",
            "url":"https://github.com/cccaaannn/bear_game",
            "description":"Simple infinite runner game created purely because of boredom."
        },

        {
            "name":"LinkedList",
            "url":"https://github.com/cccaaannn/LinkedList",
            "description":"c++ linked list implementation with templates."
        },        
        {
            "name":"Gas detector",
            "url":"https://github.com/cccaaannn/gas-detector",
            "description":"Arduino gas detector with adjustable threshold, it alerts and changes led color if gas presents."
        },
        {
            "name":"Rc car",
            "url":"https://github.com/cccaaannn/rc-car",
            "description":"Arduino rc car usable with tv remote."
        }
    ]
}



function addProjects(){
    
    for (let i = 0; i < projects.primary.length; i = i+2) {

        projects_div.innerHTML += `

            <div class="row">
                <div class="col-md-6 project_box">
                    <h2>${projects.primary[i].name}</h2>
                    <p>${projects.primary[i].description}</p>
                    <p><a class="btn btn-outline-secondary" href="${projects.primary[i].url}" role="button" target="_blank">Project page »</a></p>
                </div>
                <div class="col-md-6 project_box">
                    <h2>${projects.primary[i+1].name}</h2>
                    <p>${projects.primary[i+1].description}</p>
                    <p><a class="btn btn-outline-secondary" href="${projects.primary[i+1].url}" role="button" target="_blank">Project page »</a></p>
                </div>
            </div>
            <hr>
        `;

    }


    for (let i = 0; i < projects.secondary.length; i = i+3) {

        projects_div.innerHTML += `
        
            <div class="row">
                <div class="col-md-4 project_box">
                    <h2>${projects.secondary[i].name}</h2>
                    <p>${projects.secondary[i].description}</p>
                    <p><a class="btn btn-outline-secondary" href="${projects.secondary[i].url}" role="button" target="_blank">Project page »</a></p>
                </div>

                <div class="col-md-4 project_box">
                    <h2>${projects.secondary[i+1].name}</h2>
                    <p>${projects.secondary[i+1].description}</p>
                    <p><a class="btn btn-outline-secondary" href="${projects.secondary[i+1].url}" role="button" target="_blank">Project page »</a></p>
                </div>

                <div class="col-md-4 project_box">
                    <h2>${projects.secondary[i+2].name}</h2>
                    <p>${projects.secondary[i+2].description}</p>
                    <p><a class="btn btn-outline-secondary" href="${projects.secondary[i+2].url}" role="button" target="_blank">Project page »</a></p>
                </div>
            </div>
            <hr>
        `;

    }

}
