let title_input = document.getElementById("title_input");
let title = document.getElementById("main_title");

title_input.oninput = function(){
    title.innerHTML = title_input.value;
}


let subject_input = document.getElementById("SUBJECT");


let hobbies_input = document.getElementById("HOBBIES");



let food_input = document.getElementById("FOOD");

let submit_button = document.getElementById("submit_button");

submit_button.onclick = function(){
    event.preventDefault();
    let empty = false;
    if(subject_input.value =="") {
        empty = true;
    }
    
    if(hobbies_input.value =="") {
        empty = true;
    }

    if(food_input.value =="") {
        empty = true;
    }

    if(title_input.value =="") {
        empty = true;
    }

    if(empty == true) {
        alert("You did not fill in everything yet")
    }

    else {
    
    let formContainer = document.getElementsByClassName("form_container");
        formContainer[0].style.display = "none";

    let  StoryResult = document.getElementById("story_result");
        StoryResult.style.display = "inline";

    let OutputString = " My favorite subject is " + subject_input.value + ". My favorite hobby is " + hobbies_input.value + " . My favorite food is " + food_input.value;
        StoryResult.innerHTML = OutputString;

        alert("Congratulations!" + OutputString)
    }
}

let goTotop = document.getElementById("top-button");

goTotop.onclick = function (){
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}