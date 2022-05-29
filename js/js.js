function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    document.querySelector("#title").classList.toggle("dark-mode__title");

    element = document.querySelector(".button--blue");
    element.classList.toggle("bg--white");

    element = document.querySelector(".briefcase-skills__buttons ");
    element.classList.toggle("bg--white");

    // element = document.querySelector(".buttons__b-s");
    // element.classList.toggle("bg--grey");    
}

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

let choise = 1

const changeOption = () => {
    choise == 1 ? (
        option1.classList.value = 'buttons__b-s activate' ,
        content1.classList.value = 'cards-box activate-content'
    )
    : (
        option1.classList.value = 'buttons__b-s' ,
        content1.classList.value = 'cards-box'
    )
    choise == 2 ? (
        option2.classList.value = 'buttons__b-s activate' ,
        content2.classList.value = 'skills-box activate-content'
    )
    : (
        option2.classList.value = 'buttons__b-s' ,
        content2.classList.value = 'skills-box'
    )
}

option1.addEventListener('click', () => {
    choise = 1
    changeOption()
})
option2.addEventListener('click', () => {
    choise = 2
    changeOption()
})