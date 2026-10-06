export default function Item({ name, quantity, category }) {
    return (
        <li className="flex items-center justify-between px-4 py-2 last:border-b-0 mb-0.5 bg-purple-100 rounded">
            <span className="font-medium text-gray-800">{name}</span>
            <span className="text-sm text-gray-500">{quantity}</span>
             <span className="text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-2 py-1 rounded">{category}
      </span>
        </li>
    );
}
