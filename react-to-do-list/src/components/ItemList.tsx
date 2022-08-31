
import Item from './Item';

const ItemList = ({ items,  removeItem, editItem }:any) => {
  return (

    items.map((item:any)=>(
        
        <div className="task">
        <div className="content">
            <Item key={item} item={item}/>
        </div>
        <div className="actions">
          <button className="edit" onClick={() => editItem(item) }>Edit</button>
          <button className="delete" onClick={ () => removeItem(item) }>Delete</button>
        </div>
      </div>
      
    ))
  )
}

export { ItemList as default };