import { Link } from 'react-router-dom';

export default function SpelLListItem({ name, index }) {
    return (
        <li>
            <Link to={`/api/spells/${index}`}>
                <h2>{name}</h2>
            </Link>
        </li>
    );
}
