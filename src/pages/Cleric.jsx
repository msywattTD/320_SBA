import SpellList from '../components/SpellList';
import Form from '../components/Form';
import { useState } from 'react';

function Cleric() {
    const [sortValue, setSortValue] = useState();
    return (
        <div>
            <Form sortValue={sortValue} setSortValue={setSortValue} />
            <SpellList sortValue={sortValue} setSortValue={setSortValue} />
        </div>
    );
}

export default Cleric;
