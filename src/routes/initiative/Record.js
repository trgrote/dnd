import React, { useState } from 'react';

const Record = (props) => {
    const {id, name, value} = props;
    return (
        <li>{name} {value}</li>
    );
};

export default Record;