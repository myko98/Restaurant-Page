function createContact() {

    let mapDiv = document.createElement('div');
    let map = document.createElement('iframe');
    let contactDiv = document.createElement('div');
    let contactHeader = document.createElement('h1');
    let contactInfo = document.createElement('ul');
    let infos = ["1125 Dundas St E, Mississauga, ON L4Y 2C3", "Phone: 123-456-7890", "Email: phokinggud@gmail.com", "OPEN: Mon-Sat 11:30am-8:30pm"];

    //creating google maps
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1246744153573!2d-79.59285718391867!3d43.60394566363122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b479651a1a113%3A0xb6e3f7e0c78cf616!2sPho%20Dau%20Bo%20Restaurant!5e0!3m2!1sen!2sca!4v1627674383239!5m2!1sen!2sca";    
    map.width = "100%";
    map.height = "250"

    //creating contact info
    contactHeader.innerText = "CONTACT US";

    for (let info of infos) {
        let listItem =  document.createElement('li');
        listItem.innerText = info;
        contactInfo.appendChild(listItem);
    }
    contactDiv.appendChild(contactHeader);

    mapDiv.appendChild(map);
    mapDiv.appendChild(contactHeader);
    mapDiv.appendChild(contactInfo);
    
    return mapDiv;
}

export {
    createContact,
}
