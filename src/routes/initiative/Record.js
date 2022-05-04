import React, { useState } from 'react';
import { Form, FloatingLabel, Row, Col, FormControl } from 'react-bootstrap';

const Record = (props) => {
    const {pcInfo, onPCInfoChange, columns} = props;

    const [localPCInfo, setLocalPCInfo] = useState({...pcInfo});

    return (
        <tr>
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