const forma = document.querySelector("#forma");
const inputTxt = document.querySelector("#input-text");
const divLista = document.querySelector("#lista");
let todos = [
    {
        id: "loaded-1",
        text: "Vec postoji 1"
    },
    {
        id: "loaded-2",
        text: "Vec postoji 2"
    },
    {
        id: "loaded-3",
        text: "Vec postoji 3"
    }
];
let count = 0;

function addToDom(text,id) {
    let divItem = document.createElement("div");
    let par = document.createElement("p");
    par.textContent = text;

   
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click",()=>{
        divItem.remove()

        let index = todos.findIndex(el=>el.id==id);
        todos.splice(index,1);
        
        console.log(todos);
    })

    divLista.append(divItem);
    divItem.append(par, btnDelete);

}



todos.forEach(todo=>{
    addToDom(todo.text, todo.id);
})

forma.addEventListener("submit",(event)=>{
    event.preventDefault();

    let item = {id: count++, text: inputTxt.value};
    todos.push(item);
    console.log(todos);

   addToDom(item.text, item.id);

   inputTxt.value = "";
})

const inputPretraga = document.querySelector("#pretraga");

// inputPretraga.addEventListener("change", ()=>{
//     console.log(inputPretraga.value);


//     // console.log(todos.find(todo=> todo.text == inputPretraga.value));
//     let filtriraniNiz = todos.filter(todo=> todo.text == inputPretraga.value);
//     divLista.innerHTML = "";
//     filtriraniNiz.forEach(todo=>{
//         addToDom(todo.text, todo.id);
//     })
// })

inputPretraga.addEventListener("input", ()=>{
    console.log(inputPretraga.value);


    // console.log(todos.find(todo=> todo.text == inputPretraga.value));
    let filtriraniNiz = todos.filter(todo=> todo.text.toLowerCase().includes(inputPretraga.value.toLowerCase()));
    divLista.innerHTML = "";
    filtriraniNiz.forEach(todo=>{
        addToDom(todo.text, todo.id);
    })
})



