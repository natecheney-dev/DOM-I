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
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// IMAGES (X)
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent["cta"]["img-src"]);

let codeSnippet = document.getElementById("middle-img");
codeSnippet.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Nav (X)
const navServices = document.querySelector("nav a:nth-of-type(1)");
navServices.textContent = siteContent['nav']['nav-item-1'];

const navProduct = document.querySelector("nav a:nth-of-type(2)");
navProduct.textContent = siteContent['nav']['nav-item-2'];

const navVision = document.querySelector("nav a:nth-of-type(3)");
navVision.textContent = siteContent['nav']['nav-item-3'];

const navFeatures = document.querySelector("nav a:nth-of-type(4)");
navFeatures.textContent = siteContent['nav']['nav-item-4'];

const navAbout = document.querySelector("nav a:nth-of-type(5)");
navAbout.textContent = siteContent['nav']['nav-item-5'];

const navContact = document.querySelector("nav a:nth-of-type(6)");
navContact.textContent = siteContent['nav']['nav-item-6'];

// CTA (X)

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;


//main-content( )
//Titles (X)
topContent = document.querySelector(".top-content");
bottomContent = document.querySelector(".bottom-content");


const mainFeatures = topContent.querySelector('.text-content:nth-of-type(1)');
const mainAbout = topContent.querySelector('.text-content:nth-of-type(2)');

const mainServices = bottomContent.querySelector('.text-content:nth-of-type(1)');
const mainProduct = bottomContent.querySelector('.text-content:nth-of-type(2)');
const mainVision = bottomContent.querySelector('.text-content:nth-of-type(3)');

const h1Features = mainFeatures.querySelector("h4");
const h1About = mainAbout.querySelector("h4");

const h1Services = mainServices.querySelector("h4");
const h1Product = mainProduct.querySelector("h4");
const h1Vision = mainVision.querySelector("h4");

h1Features.textContent = siteContent["main-content"]["features-h4"];
h1About.textContent = siteContent["main-content"]["about-h4"];

h1Services.textContent = siteContent['main-content']["services-h4"];
h1Product.textContent = siteContent['main-content']["product-h4"];
h1Vision.textContent = siteContent['main-content']["vision-h4"];

//Text ()

const pFeatures = mainFeatures.querySelector("p");
const pAbout = mainAbout.querySelector("p");

const pServices = mainServices.querySelector("p");
const pProduct = mainProduct.querySelector("p");
const pVision = mainVision.querySelector("p");

pFeatures.textContent = siteContent["main-content"]["features-content"];
pAbout.textContent = siteContent["main-content"]["about-content"];

pServices.textContent = siteContent['main-content']["services-content"];
pProduct.textContent = siteContent['main-content']["product-content"];
pVision.textContent = siteContent['main-content']["vision-content"];

//contact
const contact = document.querySelector('.contact');


const contactHeading = contact.querySelector('h4');
const address = contact.querySelector("p:nth-of-type(1)");
const phone = contact.querySelector("p:nth-of-type(2)");
const email = contact.querySelector("p:nth-of-type(3)");

contactHeading.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

//footer

const footer = document.querySelector('footer');
const copyRight = footer.querySelector('p');
copyRight.textContent = siteContent.footer.copyright;

// More Stuff
// Add 2 items to nav

const item1 = document.createElement('a');
item1.textContent = 'item1';
item1.href = '#';
document.querySelector('nav').prepend(item1);

const item2 = document.createElement('a');
item2.textContent = 'item2';
item2.href = '#';
document.querySelector('nav').appendChild(item2);

//Change nav text to green
var doodee = 0;


const navA = document.querySelectorAll("nav a");
navA.forEach(function(item){
  item.style.color = "green";
});











