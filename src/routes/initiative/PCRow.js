import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';

const PCRow = (props) => {
    const {pcInfo, onPCInfoChange, columns, isTurn, deletePC} = props;

    const [localPCInfo, setLocalPCInfo] = useState({...pcInfo});

    const getCell = (c) => {
        if (c.value !== "actions") {
            return (
                <FormControl 
                    value={localPCInfo[c.value]}
                    onChange={event => {
                        setLocalPCInfo({
                            ...pcInfo,
                            [c.value]: event.target.value
                        });
                    }}
                    onBlur={() => {
                        onPCInfoChange(localPCInfo);
                    }}
                />
            );
        } else {
            return (
                <Button variant="danger" onClick={() => deletePC(pcInfo.id)}>X</Button>
            );
        }
    };

    return (
        <tr className={isTurn ? "highlighted-row" : ""}>
            {
                columns.map((c, i) =>
                    <td key={i}>
                        {getCell(c)}
                    </td>
                )
            }
        </tr>
    );
};

export default PCRow;