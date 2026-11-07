export default function Item(props) {
    return(
        <li className="font-serif">{props.name} - {props.quantity}  ({props.category})</li>
    );
}