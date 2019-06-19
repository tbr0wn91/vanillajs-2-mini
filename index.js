function addToDo(event){
    // prevent default form function from running
    event.preventDefault();
    // create a new list item
    const item = document.createElement("li");
    // grab the value of the "item" input and set it equal to the text of the create list item
    item.innerText = document.getElementById("item").value;

    // when the list item is clicked, the complete todo function is run
    item.addEventListener("click", completeToDo)
    // create button so list item can be deleted
    const button = document.createElement("button");
    // give the
    button.innerText = "X";
    // add remove function to button to allow for list item deletion
    button.addEventListener("click", removeToDo);
    // add remove list item button to each list item
    item.appendChild(button);
    // select the ul that is holding all of our li's
    const list = document.querySelector("ul")
    // add new list item to the list with appendChild
    list.appendChild(item);
    // clear out list item after successful creation (UX)
    document.getElementById("item").value = "";

}

// SELECT THE FORM AND RUN THE ADD TODO FUNCTION WHEN THE FORM BUTTON IS CLICKED
document.querySelector("form").addEventListener("submit", addToDo)

function removeToDo(event){
    //the target of this event will be the button in the list item
    // the parentNode is the list item itself which iswhat we want removed
    event.target.parentNode.remove();
}

function completeToDo(event){
    //grab the value of the aria-checked attribute so we can use it for a conditional
    const value = event.target.getAttribute("aria-checked");
    // if the aria checked attribute is true we will change it to false else if it is false we will change it to true
    if(value !== "true"){
        event.target.setAttribute("aria-checked", "true")
    } else {
        event.target.setAttribute("aria-checked", "false")
    }
}