
import Item from './Item';

const ItemList = ({ items, removeItem }:any) => {
  return (

    items.map((item:any)=>(
        
        <div className="task">
        <div className="content">
            <Item key={item} item={item} removeItem={removeItem}/>
        </div>
        <div className="actions">
          <button className="edit">Edit</button>
          <button className="delete" onClick={() => removeItem(item)}>Delete</button>
        </div>
      </div>
      
    ))
  )
}

export { ItemList as default };