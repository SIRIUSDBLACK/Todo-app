import { addTaskBtnHandler, delAllHandler, doneAllHandler, listGroupHandler, textInputHandler } from "./handlers.js";
import { addTaskBtn, delAll, doneAll, listGroup, textInput } from "./selectors.js";

const listener = () => {
addTaskBtn.addEventListener("click",addTaskBtnHandler);
listGroup.addEventListener("click",listGroupHandler);
textInput.addEventListener("keyup",textInputHandler);
delAll.addEventListener("click",delAllHandler);
doneAll.addEventListener("click",doneAllHandler);
};

export default listener;