
const Item = ({ item }:any) => { 
    return (
        <input type="text" className="text" value={item} readOnly/>
    )
};

export { Item as default };