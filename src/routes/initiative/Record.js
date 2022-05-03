import React, { useState } from 'react';
import { Form, FloatingLabel, Row, Col } from 'react-bootstrap';

const Record = (props) => {
    const {pcInfo, columns} = props;
    return (
        <tr>
            {
                columns.map((c, i) =>
                    <td key={i}>
                        {pcInfo[c.value]}
                    </td>
                )
            }
        </tr>
    );
};

export default Record;