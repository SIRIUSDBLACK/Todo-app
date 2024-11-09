import { DoneTask } from "./selectors.js";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

export const tasks = ["Learning JavaScript","Learning New Songs","Playing Football"];

export const addList = (text) => {
    
    listGroup.append(createNewList(text));
    textInput.value = null;
    updateTaskTotal();
};  
export const updateTaskTotal = () => {
    //count list and update
    const newLists = document.querySelectorAll(".list") 
    totalTask.innerText = newLists.length;
}
export const updateDoneTaskTotal = () => {
    //count list and update
    const newLists = document.querySelectorAll(".list input:checked") 
    DoneTask.innerText = newLists.length;
}
 

export const createNewList = (taskTitle) => {

    const list = listTemplate.content.cloneNode(true);
    // const list = document.createElement("div");
    // list.classList.add("list");
    list.querySelector(".list").id= "list"+ uuidv4() ;
    list.querySelector(".listTask").innerText = taskTitle;
            return list;   
}

export const taskDel = (listID) => {
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
        const currentlist = document.querySelector(`#${listID}`);
        currentlist.classList.add("animate__animated","animate__hinge")
        currentlist.addEventListener("animationend",() => {
            currentlist.remove();                       
            updateDoneTaskTotal();
            updateTaskTotal();
        });
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};

// export const taskDel = (listID) => {
//     if(window.confirm("Are you sure to delete ?")){
//         const currentlist = document.querySelector(`#${listID}`);
//         currentlist.classList.add("animate__animated","animate__hinge")
//         currentlist.addEventListener("animationend",() => {
//             currentlist.remove();                       
//             updateDoneTaskTotal();
//             updateTaskTotal();
//         });
//     };
// };
export const taskEdit = (listID) => {
    const currentList = document.querySelector(`#${listID}`);

    const listTask = currentList.querySelector(".listTask");
    const listDelBtn = currentList.querySelector(".list-del-btn");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
    const checkDone = currentList.querySelector(".checkDone");
    const newTaskInput = document.createElement("input");
        const currentTask = listTask.innerText;
        newTaskInput.className = "border p-1 font-mono border-stone-900 focus-visible:outline-none active"
        listTask.after(newTaskInput);
        newTaskInput.focus();
        newTaskInput.value = currentTask;
        listTask.classList.add("hidden");
        listEditBtn.setAttribute("disabled",true);
        // listEditBtn.classList.add("opacity-20");
        listEditBtn.classList.add("bg-stone-900");
        listEditBtn.classList.add("text-white");
        checkDone.classList.add("hidden");

        newTaskInput.addEventListener("blur",() => {            
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            // newTaskInput.classList.add("hidden");
            newTaskInput.remove();
            listEditBtn.removeAttribute("disabled");
            checkDone.classList.remove("hidden");
            // listEditBtn.classList.remove("opacity-20");
            listEditBtn.classList.remove("bg-stone-900");
            listEditBtn.classList.remove("text-white");
        });
        newTaskInput.addEventListener("keyup",(event) => {            
            if(event.key === "Enter"){
            listTask.innerText = newTaskInput.value;
            listTask.classList.remove("hidden");
            // newTaskInput.classList.add("hidden");
            newTaskInput.remove();
            listEditBtn.removeAttribute("disabled");
            checkDone.classList.remove("hidden");
            // listEditBtn.classList.remove("opacity-20");
            listEditBtn.classList.remove("bg-stone-900");
            listEditBtn.classList.remove("text-white");
            }
            
        });
};
export const taskDone = (taskID) => {
    const currentList = document.querySelector(`#${taskID}`)

    updateDoneTaskTotal();
    const listTask = currentList.querySelector(".listTask");
    const checkDone = currentList.querySelector(".checkDone");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
        listTask.classList.toggle("line-through");
        currentList.classList.toggle("opacity-20");
        currentList.classList.toggle("scale-90");
        if(checkDone.checked){
            listEditBtn.setAttribute("disabled",true);
        }else{
            listEditBtn.removeAttribute("disabled");
        }
}

export const delAllFn = () => {
    const allLists = listGroup.querySelectorAll(".list");
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
        allLists.forEach((list)=>{
            list.remove();
        });
    };
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    });
};

export const doneAllFn = () => {
    const allLists = listGroup.querySelectorAll(".list");
    Swal.fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!"
      }).then((result) => {
        if (result.isConfirmed) {
                allLists.forEach((list)=>{
                    // console.log(list.querySelector(".checkDone")).checked = true;
                    list.querySelector(".checkDone").checked=true;
                    taskDone(list.id);
                });

          Swal.fire({
            title: "Done!",
            text: "All of your tasks are done.",
            icon: "success"
          });
        }
      });
};