function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    document.querySelector("#title").classList.toggle("dark-mode__title");

    element = document.querySelector(".button--blue");
    element.classList.toggle("bg--white");

    element = document.querySelector(".briefcase-skills__buttons ");
    element.classList.toggle("bg--white");

    element = document.querySelector(".buttons__b-s");
    element.classList.toggle("bg--grey");    
    
    element = document.querySelector(".skills");
    element.classList.toggle("bg--white");   
}