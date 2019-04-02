window.onload = () => {location.hash ="#homepage"};

let routes = {
  '': homepage,
  '#homepage': homepage,
  '#signUp': signUp,
  '#timeline': timeline,
  //'#contact': contact,
};


/*
window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
}
*/


let contentDiv = document.getElementById('content');

window.addEventListener("hashchange", () => {
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];

function timelineChange () {
    console.log("Hola")
    window.location.hash = "timeline" 
}

document.querySelector("#changeTimeline").addEventListener("click",timelineChange);

function signUpChange () {
    console.log("Hola2")
    window.location.hash = "signUp"
}

document.querySelector("#changeSignUp").addEventListener("click", signUpChange);