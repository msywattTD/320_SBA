import { Link } from 'react-router-dom';

export default function SpelLListItem({ name, index }) {
    return (
        <li>
            {/* <Link to={`/api/spells/${index}`}> */}
            <h2>
                <Link to={`/api/spells/${index}`}>{name}</Link>
            </h2>
            {/* </Link> */}
        </li>
    );
}
