



const image = document.getElementById("Image");
const text = document.getElementById("text");

 const mainbottom = document.getElementById("bottom");
//const lname = document.getElementById("lname");

const body=document.body

let todolist = [];
// console.log(body)
let filter="All"
// console.log (image.src)

function changeImage() {
  console.log(image.src)
    if (image.src == "http://127.0.0.1:5501/todo-app-main/images/icon-sun.svg") { 
        image.src = "images/icon-moon.svg"; 

// light

console.log("true")


          // bottom.style.backgroundColor = "hsl(0, 0%, 98%, 0.95)";
          // buttons.style.backgroundColor = "hsl(0, 0%, 98%, 0.95";

        body.classList.add('active1');



        //  lname.style.backgroundColor = "hsl(0, 0%, 98%, 0.25)";
        //  lname.style.color = "hsl(0, 0%, 0%)";
        // button.style.borderColor = "hsl(0, 0%, 0%, 0.8)";
       
    }
     
           
    else {
        image.src = "images/icon-sun.svg";
        console.log("false")
// dark   console.log("true")
      
        // bottom.style.backgroundColor = "rgba(46, 49, 85, 0.8)";
        //  addbutton.style.backgroundColor = "rgba(46, 49, 85, 0.8)";

    
        body.classList.remove('active1');

          // lname.style.backgroundColor = "rgba(46, 49, 85, 0.2)";
          // lname.style.color = "hsl(0, 0%, 100%)";
          // button.style.borderColor = "hsl(0, 0%, 100%, 0.8)";

      
    }

}



const addbutton = document.querySelector('input');
const mainbase = document.querySelector('picture');
   function  addItems() {
    let lname = document.getElementById("lname").value;
    todolist.push({name:lname, checked:false});
    ////add the checked ovrerlined sentence here////
    addbutton.value='' 

showtodos()

  addbutton.value='' 

  console.log(todolist);
  };


  function showtodos (){

    let filtertodos=todolist
if (filter=="Completed"){
  filtertodos=filtertodos.filter(todo=> todo.checked == true )
}else if (filter=="Activ"){
filtertodos=filtertodos.filter(todo=> todo.checked == false )
} else {
  filtertodos=todolist
}

    document.getElementById("bottom").innerHTML  = ""
    filtertodos.map((todo)=> document.getElementById("bottom").innerHTML += `<p class="todoItem " id="buttons${todo.name}p"> <button class="${todo.checked ? "checked":"buttons"} " id="${todo.name}";></button> ${todo.name} <img id="img${todo.name}" src="images/icon-cross.svg"><hr></p>`);

    document.getElementById("itemsleft").textContent=todolist.filter(todo=> todo.checked == false).length + ' items left '  
  

    filtertodos.forEach((todo)=> document.getElementById("img"+todo.name).addEventListener('click',()=>clear(todo.name)));

    filtertodos.forEach((todo)=> document.getElementById("img"+todo.name).addEventListener('click',()=>clear(todo.name)));

    filtertodos.forEach((todo)=> document.getElementById(todo.name).addEventListener('click',()=>done(todo.name)));
  }

  function clearAll(){
    addbutton.value=''
  }

  
  function clearcompeleted(){
todolist = todolist.filter(todo=> todo.checked == false)
    
    showtodos()

 }
  
function clear(todo){

todolist = todolist.filter((el) => el.name.toLowerCase() != todo.toLowerCase())
 console.log(todolist)
 showtodos()
  console.log(todo)
}
 

function done(todo){

const index = todolist.findIndex(item => {return item.name === todo})
console.log(index);
todolist[index].checked = todolist[index].checked ? false: true
showtodos()
console.log("new", todolist)
} 



function filters( id){
 
filter=id 
console.log(filter)
showtodos()
console.log(filter)
}


