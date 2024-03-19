import SpellList from '../components/SpellList';
import Form from '../components/Form';
import { useState } from 'react';

function Bard() {
    const [sortValue, setSortValue] = useState();
    return (
        <div>
            <Form
                sortValue={sortValue}
                setSortValue={setSortValue}
                className="Form"
            />
            <SpellList
                sortValue={sortValue}
                setSortValue={setSortValue}
                className="SpellList"
            />
        </div>
    );
}

export default Bard;
