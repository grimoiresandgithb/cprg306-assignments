export default function Item(props) {
    return(
        <li className="font-serif" onClick={props.onSelect}>{props.name} - {props.quantity}  ({props.category})</li>
    );
}