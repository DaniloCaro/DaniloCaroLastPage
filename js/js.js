function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    document.querySelector("#title").classList.toggle("dark-mode__title");

    var element = document.querySelector(".button--blue");
    element.classList.toggle("bg--white");

    var element = document.querySelector(".briefcase-skills__buttons ");
    element.classList.toggle("bg--white");

    var element = document.querySelector(".buttons__b-s");
    element.classList.toggle("bg--grey");    
    
    var element = document.querySelector(".skills");
    element.classList.toggle("bg--white");   
}
