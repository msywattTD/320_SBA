import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SpellData() {
    // const [spellName, setSpellName] = useState(null);
    // const [spellDesc, setSpellDesc] = useState(null);
    // const [spellRange, setSpellRange] = useState(null);
    // const [spellComponents, setSpellComponents] = useState(null);
    // const [spellRitual, setSpellRitual] = useState(null);
    // const [spellDuration, setSpellDuration] = useState(null);
    // const [spellConcentration, setSpellConcentration] = useState(null);
    // const [spellCastingTime, setSpellCastingTime] = useState(null);
    // const [spellLevel, setSpellLevel] = useState(null);
    // const [spellSchool, setSpellSchool] = useState(null);
    const [spellInfo, setSpellInfo] = useState(null);

    let { SpellId } = useParams();
    console.log(SpellId);
    const url = `https://www.dnd5eapi.co/api/spells/${SpellId}`;
    console.log(url);

    async function getSpellInfo(SpellId) {
        try {
            let res = await axios.get(url);
            // setSpellName(res.data.name);
            // setSpellDesc(res.data.desc[0]);
            // setSpellRange(res.data.range);
            // setSpellComponents(res.data.components);
            // setSpellRitual(res.data.ritual);
            // setSpellDuration(res.data.duration);
            // setSpellConcentration(res.data.concentration);
            // setSpellCastingTime(res.data.casting_time);
            // setSpellLevel(res.data.level);
            // setSpellSchool(res.data.school.name);
            setSpellInfo(res.data);

            // spellInfo = {
            //     spellName: spellName,
            //     spellDesc: spellDesc,
            //     spellRange: spellRange,
            //     spellComponents: spellComponents,
            //     spellRitual: spellRitual,
            //     spellDuration: spellDuration,
            //     spellConcentration: spellConcentration,
            //     spellCastingTime: spellCastingTime,
            //     spellLevel: spellLevel,
            //     spellSchool: spellSchool,
            // };
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getSpellInfo(SpellId);
    }, []);

    const loading = () => {
        return <h3>Loading...</h3>;
    };

    const loaded = () => {
        return (
            <>
                <h3 className="spell-info">Name : {spellInfo.name}</h3>
                <h3 className="spell-info">Description : {spellInfo.desc}</h3>
                <h3 className="spell-info">Range : {spellInfo.range}</h3>
                <h3 className="spell-info">
                    Components : {spellInfo.components}
                </h3>
                <h3 className="spell-info">
                    Ritual : {spellInfo.ritual.toString()}
                </h3>
                <h3 className="spell-info">Duration : {spellInfo.duration}</h3>
                <h3 className="spell-info">
                    Concentration : {spellInfo.concentration.toString()}
                </h3>
                <h3 className="spell-info">
                    Casting Time : {spellInfo.casting_time}
                </h3>
                <h3 className="spell-info">Level : {spellInfo.level}</h3>
                <h3 className="spell-info">School : {spellInfo.school.name}</h3>
                <button>Add to Spellbook</button>
            </>
        );
    };
    return spellInfo ? loaded() : loading();
}

export default SpellData;
