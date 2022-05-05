import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const Record = (props) => {
    const {pcInfo, onPCInfoChange, columns, isTurn} = props;

    const [localPCInfo, setLocalPCInfo] = useState({...pcInfo});

    return (
        <tr className={isTurn ? "highlighted-row" : ""}>
            {
                columns.map((c, i) =>
                    <td key={i}>
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
                    </td>
                )
            }
        </tr>
    );
};

export default Record;