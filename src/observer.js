import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
    const change = () => {
        updateDoneTaskTotal();
        updateTaskTotal();
    };
    
    const listGroupOption = {
        attributes : true,
        subtree : true,
        childList : true,
    }
    
    
    const observer = new MutationObserver(change);
    observer.observe(listGroup,listGroupOption);
}

export default observer;