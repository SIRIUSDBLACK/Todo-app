import { addList, delAllFn, doneAllFn, taskDel, taskDone, taskEdit } from "./list.js";
import Swal from 'sweetalert2'

export const listGroupHandler = (event) => {
    const list = event.target.closest(".list")
    
    if(event.target.classList.contains("list-del-btn")){
        console.log("del btn");
        
        taskDel(event.target.closest(".list").id);
    }
    if(event.target.classList.contains("list-edit-btn")){
        console.log("edit btn");
        taskEdit(event.target.closest(".list").id);
    }
    if(event.target.classList.contains("checkDone")){
        console.log("Done btn");
        taskDone(event.target.closest(".list").id);
}
};
export const addTaskBtnHandler = () => {
    // console.log(textInput.value.trim() ? true : false);
    if(textInput.value.trim()){
        addList(textInput.value);
    }else{
        alert("You need to put the Task")
    }
};




export const textInputHandler = (event) => {
    if(event.key === "Enter"){
        addTaskBtnHandler();
    }
};

export const delAllHandler = () => {
    delAllFn();
  };

// export const delAllHandler = () => {
//     const allLists = listGroup.querySelectorAll(".list");
//     if(confirm("Are you sure u wanna del all the lists")){
//         allLists.forEach((list)=>{
//             list.remove();
//         });
//     };
          
// };

export const doneAllHandler = () => {
    doneAllFn();
};


