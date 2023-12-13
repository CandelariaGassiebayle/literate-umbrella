console.log('this works');

const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uve" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xenia" },
    { name: "yadri" },
    { name: "zack" }
];


const ul = document.querySelector('ul');

//define function
const renderNamesToPage = (names) => {
    //iterate over data
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
        //create list items
        let list_item = document.createElement("li");
        //add class to list item, result-item
        list_item.classList.add("result-item");
        //place name in list item
        list_item.textContent = names[i].name
        //append to ul
        ul.appendChild(list_item)
    }
}


//call the function and pass in data
renderNamesToPage(people)

