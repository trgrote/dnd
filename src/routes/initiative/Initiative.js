import React, { useState } from 'react';
import logo from '../../logo.svg';
import Record from './Record';

const Initiative = () => {
    const [pcList, setPCList] = useState([
        {
            id: 0,
            name: "Test",
            value: 0
        },
        {
            id: 1,
            name: "Test 2",
            value: 2
        }
    ]);

    return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Initiative!
        </p>
        <ul>
        {
            pcList.map(pc => 
                <Record key={pc.id} {...pc}/>
            )
        }
        </ul>
    </>
    );
}

export default Initiative;