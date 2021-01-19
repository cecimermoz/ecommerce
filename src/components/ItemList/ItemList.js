import Item from "../Item/Item";

const ItemList = ({listaObjetos}) => {
    
    return(
        listaObjetos.map((cadaItem) => {
            return <Item item={cadaItem} key={cadaItem.id}/>
        })
    )
}

export default ItemList;