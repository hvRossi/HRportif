import { useState } from "react";
import Item from "./Item";

function AddItemForm({ addItem }:any) {
    const [item, setItem] = useState('');

    function submitInput(e:any) {
        e.preventDefault();
        addItem(item);
        setItem('');
    };
        
    return(
        <form id="new-task-form" onSubmit={submitInput}>
            <input type="text" id="new-task-input" placeholder="what's your task?" value={item} onChange={(e) => setItem(e.target.value)} />
            <input type="submit" id="new-task-submit" value="Add task" />
        </form>    
    )
}

export { AddItemForm as default };
