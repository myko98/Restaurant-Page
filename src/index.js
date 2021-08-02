import {createHeader, createHome, createFooter} from './home';
import {createAbout} from './about.js';
import {createContact} from './contact.js';


document.getElementById("content").append(createHeader());
document.getElementById("content").append(createHome());
document.getElementById("content").append(createFooter());


//create function that adds event listener to nav items
let anchors = Array.from(document.querySelectorAll('a'));

for (let a of anchors) {
    a.addEventListener("click", updateInfo); 
}


function updateInfo() {

    console.log(this.id);
    let content = document.querySelector(".pageContent");

    while(content.firstChild) {
        content.firstChild.remove();
    }

    if (this.id == "home") {
        content.remove();
        document.getElementById("content").append(createHome());
    } else if (this.id == "about") {
        console.log("adding about content");
        content.appendChild(createAbout());
    } else {
        console.log("adding contact content");
        content.appendChild(createContact());
    }
}



