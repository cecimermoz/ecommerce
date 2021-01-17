import ItemCount from "../ItemCount/ItemCount";
import {CardItem, SpanPrice, CardTitle} from "./style";

const Item = ({item}) => {

    const {id, title, price, pictureUrl} = item;

    return(
       <CardItem>
        <CardTitle>{title}</CardTitle>
        <img src={pictureUrl} style={{width: "70%"}} alt={title}/>
        <SpanPrice>{`ARS $ ${price}`}</SpanPrice>
        <ItemCount stock={5} initial={1} />
       </CardItem>
    )
}

export default Item;