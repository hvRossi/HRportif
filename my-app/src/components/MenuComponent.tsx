import { Media } from 'reactstrap';
import { DISHES } from '../shared/dishesList';


const menu = (DISHES.map(dish=>{
    return (
        <div key={dish.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={dish.image} alt={dish.name} />
                </Media>
                <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
                </Media>
            </Media>
        </div>
    ); 
}))

export function MenuComponent() {

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        )
}