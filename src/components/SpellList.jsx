import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpellListItem from './SpellListItem';

function SpellList({ sortValue, setSortValue }) {
    const [spells, setSpells] = useState(null);
    let { charClass } = useParams();
    const url = `https://www.dnd5eapi.co/api/classes/${charClass}/spells`;
    const sortedUrl = `https://www.dnd5eapi.co/api/classes/${charClass}/levels/${sortValue}/spells`;

    async function getSpellList(charClass) {
        try {
            let res = await axios.get(url);
            setSpells(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function getSortedSpellList(charClass, sortValue) {
        try {
            let res = await axios.get(sortedUrl);
            setSpells(res.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getSpellList(charClass);
    }, []);

    useEffect(() => {
        getSortedSpellList(charClass, sortValue);
    }, [sortedUrl]);

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
        const populatedList = spells.results.map((spell) => {
            // console.log(spell);
            return <SpellListItem name={spell.name} index={spell.index} />;
        });
        return <ul>{populatedList}</ul>;
    };
    return spells ? loaded() : loading();
}

export default SpellList;
