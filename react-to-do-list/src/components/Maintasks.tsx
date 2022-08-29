import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

function MainTasks() {

    const [items, setItems] = useState([]);
    const addItem = (item:never) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
    };

    const removeItem = (itemToBeDeleted:any) => {
        setItems(items.filter((item) => itemToBeDeleted !== item));
    };

    useEffect(() => {

        const storagedItems = JSON.parse(localStorage.getItem('items') || "")
        
        if(storagedItems)
        setItems(storagedItems)
    },[])

    useEffect(() => {
        
     localStorage.setItem('items', JSON.stringify(items));
          
    }, [items]);


    return (
        
        <main>
            <AddItemForm addItem={addItem}/>
            <section className="task-list">
                <h2>--- Task List ---</h2>
                    <div id="tasks">
                        <ItemList items={items} removeItem={removeItem} />
                    </div>
            </section>
        </main>
      );
    }
    
    export default MainTasks;