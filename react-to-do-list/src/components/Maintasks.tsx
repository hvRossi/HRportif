import React, { useEffect, useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

const updateLocalStorage = (items: string[]) =>
    localStorage.setItem("items", JSON.stringify(items));

function MainTasks() {
    const [items, setItems] = useState([]);
    const addItem = (item: never) => {
        // assuming no duplicates for demo purposes
        const newItems = [...items, item]
        setItems([...items, item]);
        updateLocalStorage(newItems)
    };

    const removeItem = (itemToBeDeleted: any) => {
        const newItems = items.filter((item) => itemToBeDeleted !== item)
        setItems(items.filter((item) => itemToBeDeleted !== item));
        updateLocalStorage(newItems)
    };

    useEffect(() => {
        const storagedItemsStr = localStorage.getItem("items")
        if(!storagedItemsStr) return

        const storagedItems = JSON.parse(storagedItemsStr);
        if (storagedItems) setItems(storagedItems);
    }, []);

    return (
        <main>
            <AddItemForm addItem={addItem} />
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
