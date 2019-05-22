const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navi = document.querySelectorAll("a");
navi[0].style.color = 'green';
navi[1].style.color = 'green';
navi[2].style.color = 'green';
navi[3].style.color = 'green';
navi[4].style.color = 'green';
navi[5].style.color = 'green';
navi[0].textContent = "Services";
navi[1].textContent = "Product";
navi[2].textContent = "Vision";
navi[3].textContent = "Features";
navi[4].textContent = "About";
navi[5].textContent = "Contact";

let headline = document.querySelector("h1");
headline.textContent = "DOM Is Awesome"

let button = document.querySelector("button");
button.textContent = "Get Started";

let logo2 = document.querySelector("#cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let h4 = document.querySelectorAll('h4');
h4[0].textContent = "Features"
h4[1].textContent = "About"
h4[2].textContent = "Services"
h4[3].textContent = "Product"
h4[4].textContent = "Vision"
h4[5].textContent = "Contact"

let pTags = document.querySelectorAll("p");
pTags[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pTags[5].textContent = "123 Way 456 Street Somewhere, USA";
pTags[6].textContent = "1 (888) 888-8888";
pTags[7].textContent = "sales@greatidea.io";
pTags[8].textContent = "Copyright Great Idea! 2018";


let logo_2 = document.getElementById("middle-img");

logo_2.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

parentElement = document.querySelector('nav');

let append1 = document.createElement('a');

append1.textContent = "Item1";

parentElement.appendChild(append1);

let prepend1 = document.createElement('a');

prepend1.textContent = ('Item 2')

parentElement.prepend(prepend1);

prepend1.style.color = 'green';

append1.style.color = 'green';

