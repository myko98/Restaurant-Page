(()=>{"use strict";var e={88:(e,t,n)=>{e.exports=n.p+"b6a44e7d134aa5a3a085.jpg"},121:(e,t,n)=>{e.exports=n.p+"000b7e14f79a68f14cff.jpg"},492:(e,t,n)=>{e.exports=n.p+"4e25bb760dc4eddbbfbe.jpg"},110:(e,t,n)=>{e.exports=n.p+"0b7fa1537b2ca4a66df2.jpg"},484:(e,t,n)=>{e.exports=n.p+"9bd2ceedcebe5b9cfbc5.jpg"}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(88);let t=document.createElement("h1");t.className="title",t.innerText="Phoking Gud";let a=document.createElement("nav"),d=document.createElement("ul"),o=["home","about","contact"];function l(){let t=document.createElement("div"),n=new Image,a=document.createElement("div"),d=document.createElement("h2"),o=document.createElement("h3"),l=document.createElement("p"),i=document.createElement("h3"),r=document.createElement("p");return n.src=e,d.innerText="Hi welcome to Phoking Gud",o.innerText="What is Pho?",l.innerText="Pho is a type of Vietnamese soup that usually consists of bone broth, rice noodles, spices, and thinly sliced meat (usually beef). Though “pho” technically refers to the noodles and not the soup itself, most people consider the dish a singular unit. It’s often topped with herbs and bean sprouts. A popular street food in Vietnam, pho gained popularity around the world after refugees introduced it to other cultures after the Vietnam War.",i.innerText="What we offer",r.innerText="We offer simple and delicious food made from fresh ingrediants. Our family recipe broth is made daily from high quality cuts of meat from locally sourced butchers. We aim to provide great tasting food at affordable prices. We welcome you to try our amazing Pho!",a.append(d,o,l,i,r),console.log(),t.className="pageContent",t.appendChild(n),t.appendChild(a),t}var i=n(121),r=n(492),c=n(110),p=n(484);function m(e,t,n){let a=document.createElement("tr"),d=document.createElement("td"),o=document.createElement("td"),l=document.createElement("td");return d.innerText=e,d.className="foodItem",o.innerText=t,o.className="price",l.innerText=n,l.className="price",a.appendChild(d),a.appendChild(o),a.appendChild(l),a}function h(e,t){let n=document.createElement("div"),a=document.createElement("div");n.classList.add("w3-display-container","mySlides"),a.classList.add("w3-display-bottommiddle","w3-small","w3-container","w3-padding-10","w3-black"),a.innerText=t;let d=new Image;return d.src=e,n.appendChild(d),n.appendChild(a),n}function s(){let e=document.createElement("div"),t=h(i,"1. PHỞ HƯNG ĐẶC BIỆT"),n=h(r,"2. PHỞ"),a=h(c,"3. PHỞ KHÔNG THỊT"),d=h(p,"4. SÚP VỚI THỊT BÒ HOẶC GÀ"),o=[t,n,a,d],l=document.createElement("button"),m=document.createElement("button");e.classList.add("w3-content","w3-display-container"),l.classList.add("w3-button","w3-black","w3-display-left"),l.innerHTML="&#10094",m.classList.add("w3-button","w3-black","w3-display-right"),m.innerHTML="&#10095",l.onclick=function(){!function(e){var t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(s=1),e<1&&(s=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[s-1].style.display="block"}(s+=-1)},m.onclick=function(){!function(e){var t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(s=1),e<1&&(s=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[s-1].style.display="block"}(s+=1)};for(let e of o)e.style.width="100%",e.style.display="none",e.children[0].style.width="auto",e.children[0].style.height="auto",e.children[0].style.maxWidth="300px",e.children[0].style.maxHeight="300px";o[0].style.display="block",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(d),e.appendChild(l),e.appendChild(m);var s=1;return e}document.getElementById("content").append(function(){let e=document.createElement("header");return e.appendChild(t),e.appendChild(function(){a.className="nav";for(let e of o){let t=document.createElement("li"),n=document.createElement("a");n.innerText=e,n.setAttribute("href",`#${e}`),n.setAttribute("id",e),t.appendChild(n),d.appendChild(t)}return a.appendChild(d),a}()),e}()),document.getElementById("content").append(l()),document.getElementById("content").append(function(){let e=document.createElement("footer"),t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("p");return n.innerText="Michael Lu Chen",a.innerHTML='<a href="https://github.com/myko98/tictactoe">Github Repo</a>',t.append(n,a),e.append(t),e}());let u=Array.from(document.querySelectorAll("a"));for(let e of u)e.addEventListener("click",f);function f(){console.log(this.id);let e=document.querySelector(".pageContent");for(;e.firstChild;)e.firstChild.remove();"home"==this.id?(e.remove(),document.getElementById("content").append(l())):"about"==this.id?(console.log("adding about content"),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("h1"),n=document.createElement("table");t.innerText="Pho/Noodle Soup",n.className="menu";let a=function(e,t,n){let a=document.createElement("tr"),d=document.createElement("th"),o=document.createElement("th"),l=document.createElement("th");return d.innerText="Item",d.className="foodItem",o.innerText="Regular",o.className="price",l.innerText="Large",o.className="price",a.appendChild(d),a.appendChild(o),a.appendChild(l),a}(),d=m("1. PHỞ HƯNG ĐẶC BIỆT","10","14"),o=m("Hung's Special Beef Rice Noodle Soup (Beef broth) Chọn 1 đến 3 loại thịt / Select upto 3 kinds of meat Thịt Bò Tái, Nạm, Gân, Sách, Viên / Rare Beef, Well Done Lean Brisket, Tendon, Tripe, Beef Balls","",""),l=m("2. PHỞ","9","13"),i=m("Rice Noodle Soup (Beef broth or Chicken broth) Chọn 1 đến 3 loại thịt / Select upto 3 kinds of meat Thịt Bò Tái, Gấu, Nạm, Gân, Sách, Viên, Thịt Gà / Rare Beef, Well Done Flank, Brisket, Tendon, Tripe, Beef Balls, Chicken","",""),r=m("3. PHỞ KHÔNG THỊT","6","8"),c=m("Rice Noodle Soup Only with NO Meat (Beef or Chicken broth)","",""),p=m("4. SÚP VỚI THỊT BÒ HOẶC GÀ","",""),h=m(" Soup with Beef or Chicken (Beef or Chicken broth) Chọn 1 đến 2 loại thịt / Select upto 2 kinds of meat Thịt Bò Tái, Gấu, Nạm, Gân, Sách, Viên, Thịt Gà / Rare Beef, Well Done Flank, Brisket, Tendon, Tripe, Beef Balls, Chicken ","6",""),u=m("THÊM / Add-ons:","",""),f=m("Thêm Thịt / Add extra Beef or Chicken","4",""),C=m("Thêm Rau Cải / Add extra Vegetable","4",""),g=m("Thêm Saté / Add Spicy Sauce","1",""),T=m("Thêm 1 Trứng / Add 1 Egg","2",""),b=m("Thêm ché bánh Phở / Rice Noodle","2.5","");return n.appendChild(a),n.appendChild(d),n.appendChild(o),n.appendChild(l),n.appendChild(i),n.appendChild(r),n.appendChild(c),n.appendChild(p),n.appendChild(h),n.appendChild(u),n.appendChild(f),n.appendChild(C),n.appendChild(g),n.appendChild(T),n.appendChild(b),e.appendChild(n),e.appendChild(s()),e}())):(console.log("adding contact content"),e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("iframe"),n=document.createElement("div"),a=document.createElement("h1"),d=document.createElement("ul"),o=["1125 Dundas St E, Mississauga, ON L4Y 2C3","Phone: 123-456-7890","Email: phokinggud@gmail.com","OPEN: Mon-Sat 11:30am-8:30pm"];t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1246744153573!2d-79.59285718391867!3d43.60394566363122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b479651a1a113%3A0xb6e3f7e0c78cf616!2sPho%20Dau%20Bo%20Restaurant!5e0!3m2!1sen!2sca!4v1627674383239!5m2!1sen!2sca",t.width="100%",t.height="250",a.innerText="CONTACT US";for(let e of o){let t=document.createElement("li");t.innerText=e,d.appendChild(t)}return n.appendChild(a),e.appendChild(t),e.appendChild(a),e.appendChild(d),e}()))}})()})();