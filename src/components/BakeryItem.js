// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div>
            <h3>{props.item.name}</h3>
            <img src={props.item.image} alt={props.item.name} width="100"></img>
            <h4>{props.item.description}</h4>
            <p>Price: ${props.item.price}</p>
            <button onClick = {() => props.addCounter(props.item)}>
                Add to Cart</button>
        </div>
    );
}