import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SpellList() {
    const [spells, setSpells] = useState(null);

    let { charClass } = useParams();
    const url = `https://www.dnd5eapi.co/api/classes/${charClass}/spells`;

    async function getSpellList(charClass) {
        try {
            let res = await axios.get(url);
            setSpells(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getSpellList(charClass);
    }, []);

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    const loaded = () => {
        // let currentSpellList = spells.results.map((spell, index) => {
        //     {
        //         console.log();
        //     }
        //     <div key={index}>
        //         <h1>{spell.name}</h1>
        //     </div>;
        // });

        // let currentSpellList = spells.results;
        // console.log(currentSpellList);
        // {
        //     for (let item in currentSpellList) {
        //         <h1>{currentSpellList[item].name}</h1>;
        //     }
        // }
        return <h1>{spells.results[0].name}</h1>;
    };
    return spells ? loaded() : loading();
}

export default SpellList;
