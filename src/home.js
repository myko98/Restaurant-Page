import Icon from './home1.jpg';

//setting Title
let title = document.createElement('h1');
title.className = "title";
title.innerText = "Phoking Gud";


//create nav bar
let nav = document.createElement('nav');
let list = document.createElement('ul')
let pages = ["home","about","contact"];

function navbar() {
    nav.className = 'nav';

    for (let page of pages) {
        let listItem = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = page;
        a.setAttribute("href",`#${page}`)
        a.setAttribute("id",page)
        listItem.appendChild(a);
        list.appendChild(listItem);
    }
    nav.appendChild(list);
    return nav;
}

//header that's used for all pages to allow for navigation
function createHeader() {
    let header = document.createElement('header');
    header.appendChild(title);
    header.appendChild(navbar());
    return header;
}

//function that creates home content

function createHome() {
    let homeContent = document.createElement('div');
    let myIcon = new Image();
    let textDiv = document.createElement('div');
    let introHeader = document.createElement('h2');
    let what = document.createElement('h3');
    let whatA = document.createElement('p');
    let offer = document.createElement('h3');
    let offerA = document.createElement('p');

    myIcon.src = Icon;
    introHeader.innerText = "Hi welcome to Phoking Gud";
    what.innerText = "What is Pho?";
    whatA.innerText = "Pho is a type of Vietnamese soup that usually consists of bone broth, rice noodles, spices, and thinly sliced meat (usually beef). Though “pho” technically refers to the noodles and not the soup itself, most people consider the dish a singular unit. It’s often topped with herbs and bean sprouts. A popular street food in Vietnam, pho gained popularity around the world after refugees introduced it to other cultures after the Vietnam War.";
    offer.innerText = "What we offer";
    offerA.innerText = "We offer simple and delicious food made from fresh ingrediants. Our family recipe broth is made daily from high quality cuts of meat from locally sourced butchers. We aim to provide great tasting food at affordable prices. We welcome you to try our amazing Pho!"

    textDiv.append(introHeader,what,whatA,offer,offerA);

    console.log();
    homeContent.className = "pageContent";
    homeContent.appendChild(myIcon);
    homeContent.appendChild(textDiv);
    

    return homeContent;
}

function createFooter() {
    let foot = document.createElement('footer');
    let footDiv = document.createElement('div');
    let author = document.createElement('p');
    let github = document.createElement('p');

    author.innerText = "Michael Lu Chen";
    github.innerHTML = '<a href="https://github.com/myko98/tictactoe">Github Repo</a>';

    footDiv.append(author,github);
    foot.append(footDiv);
    
    return foot;
}

export {
    createHeader,
    createHome,
    createFooter
}