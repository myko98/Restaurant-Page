//importing photos
import r1Img from './menuPhotos/r1.jpg';
import r2Img from './menuPhotos/r2.jpg';
import r3Img from './menuPhotos/r3.jpg';
import r4Img from './menuPhotos/r4.jpg';




function createAbout() {
    let aboutContent = document.createElement('div');


    let title = document.createElement('h1');
    let menu = document.createElement('table');


    //aboutContent.className = "pageContent";
    title.innerText = "Pho/Noodle Soup";
    menu.className = "menu";


    //Creating menu header
    let header = createHeader("Item", "Regular", "Large");

    //Creating menu items
    let r1 = createRow("1. PHỞ HƯNG ĐẶC BIỆT", "10", "14");
    let r1Info = createRow(
        "Hung's Special Beef Rice Noodle Soup (Beef broth) Chọn 1 đến 3 loại thịt / Select upto 3 kinds of meat Thịt Bò Tái, Nạm, Gân, Sách, Viên / Rare Beef, Well Done Lean Brisket, Tendon, Tripe, Beef Balls", "", "");
    let r2 = createRow("2. PHỞ", "9", "13");
    let r2Info = createRow(
        "Rice Noodle Soup (Beef broth or Chicken broth) Chọn 1 đến 3 loại thịt / Select upto 3 kinds of meat Thịt Bò Tái, Gấu, Nạm, Gân, Sách, Viên, Thịt Gà / Rare Beef, Well Done Flank, Brisket, Tendon, Tripe, Beef Balls, Chicken", "", "");
    let r3 = createRow("3. PHỞ KHÔNG THỊT", "6", "8");
    let r3Info = createRow(
        "Rice Noodle Soup Only with NO Meat (Beef or Chicken broth)", "", "");
    let r4 = createRow("4. SÚP VỚI THỊT BÒ HOẶC GÀ", "", "");
    let r4Info = createRow(
        " Soup with Beef or Chicken (Beef or Chicken broth) Chọn 1 đến 2 loại thịt / Select upto 2 kinds of meat Thịt Bò Tái, Gấu, Nạm, Gân, Sách, Viên, Thịt Gà / Rare Beef, Well Done Flank, Brisket, Tendon, Tripe, Beef Balls, Chicken ", "6", "");
    let addOns = createRow("THÊM / Add-ons:", "", "");
    let addOn1 = createRow("Thêm Thịt / Add extra Beef or Chicken", "4", "");
    let addOn2 = createRow("Thêm Rau Cải / Add extra Vegetable", "4", "");
    let addOn3 = createRow("Thêm Saté / Add Spicy Sauce", "1", "");
    let addOn4 = createRow("Thêm 1 Trứng / Add 1 Egg", "2", "");
    let addOn5 = createRow("Thêm ché bánh Phở / Rice Noodle", "2.5", "");

    //combining menu items to table
    menu.appendChild(header);
    menu.appendChild(r1);
    menu.appendChild(r1Info);
    menu.appendChild(r2);
    menu.appendChild(r2Info);
    menu.appendChild(r3);
    menu.appendChild(r3Info);
    menu.appendChild(r4);
    menu.appendChild(r4Info);
    menu.appendChild(addOns);
    menu.appendChild(addOn1);
    menu.appendChild(addOn2);
    menu.appendChild(addOn3);
    menu.appendChild(addOn4);
    menu.appendChild(addOn5);

    //appending menu to content div
    aboutContent.appendChild(menu);

    //appending Photos to content div
    aboutContent.appendChild(createSlideshow());

    return aboutContent;
}


//function that creates row for menu
function createRow(f, r, l) {
    let row = document.createElement('tr');
    let food = document.createElement('td');
    let reg = document.createElement('td');
    let large = document.createElement('td');

    food.innerText = f;
    food.className = "foodItem"
    reg.innerText = r;
    reg.className = "price"
    large.innerText = l;
    large.className = "price"

    row.appendChild(food);
    row.appendChild(reg);
    row.appendChild(large);

    return row;
}

//function that creates header for menu
function createHeader(f, r, l) {
    let row = document.createElement('tr');
    let food = document.createElement('th');
    let reg = document.createElement('th');
    let large = document.createElement('th');

    food.innerText = f;
    food.className = "foodItem"
    reg.innerText = r;
    reg.className = "price"
    large.innerText = l;
    reg.className = "price"

    row.appendChild(food);
    row.appendChild(reg);
    row.appendChild(large);

    return row;
}


//create helper function that creates image object for each jpg
function createImage(img, foodName) {
    let foodDiv = document.createElement('div');
    let foodText = document.createElement('div');
    foodDiv.classList.add('w3-display-container', 'mySlides')
    foodText.classList.add('w3-display-bottommiddle', 'w3-small' ,'w3-container', 'w3-padding-10', 'w3-black')
    foodText.innerText = foodName;
    let jpg = new Image();
    jpg.src = img;

    foodDiv.appendChild(jpg);
    foodDiv.appendChild(foodText);
    return foodDiv;
}

//create slideshow
function createSlideshow() {
    let box = document.createElement('div');
    let r1JPG = createImage(r1Img, "1. PHỞ HƯNG ĐẶC BIỆT");
    let r2JPG = createImage(r2Img, "2. PHỞ");
    let r3JPG = createImage(r3Img, "3. PHỞ KHÔNG THỊT");
    let r4JPG = createImage(r4Img, "4. SÚP VỚI THỊT BÒ HOẶC GÀ");
    let imgs = [r1JPG, r2JPG, r3JPG, r4JPG];
    let left = document.createElement('button');
    let right = document.createElement('button');

    //setting w3 classes to div
    box.classList.add("w3-content", "w3-display-container");

    //setting w3 classes and onclick attribute to left and right button
    left.classList.add("w3-button", "w3-black", "w3-display-left")
    left.innerHTML = "&#10094";
    right.classList.add("w3-button", "w3-black", "w3-display-right")
    right.innerHTML = "&#10095";


    left.onclick = function() {
        showDivs(slideIndex += -1);

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
    }
    right.onclick = function() {
        showDivs(slideIndex += 1);

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
    }




    for (let img of imgs) {
        img.style.width = "100%";
        img.style.display = "none"
        img.children[0].style.width = "auto";
        img.children[0].style.height = "auto";
        img.children[0].style.maxWidth = "300px";
        img.children[0].style.maxHeight = "300px";
    }

    imgs[0].style.display = "block";

    box.appendChild(r1JPG);
    box.appendChild(r2JPG);
    box.appendChild(r3JPG);
    box.appendChild(r4JPG);
    box.appendChild(left);
    box.appendChild(right);

    var slideIndex = 1;
    //showDivs(slideIndex);

    return box;
}


export {
    createAbout,
}