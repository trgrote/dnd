import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Record from './Record';

const TurnOrder = () => {
    // Column Config
    const [columns, setColumns] = useState([
        {
            label: "Initiative",
            value: "initiative"
        },
        {
            label: "Name",
            value: "name"
        }
    ]);

    // Rows
    const [pcList, setPCList] = useState([
        {
            id: 0,
            name: "Test",
            initiative: 0
        },
        {
            id: 1,
            name: "Test 2",
            initiative: 2
        }
    ]);

    const [currentPCID, setCurrentPCID] = useState(pcList.find(pc => true).id);

    const sortPCList = (list, sortValue) => {
        return list.slice().sort((a, b) => b[sortValue] - a[sortValue]);
    };

    return (
        <div className="turn-order">
            <Table striped bordered>
                <thead>
                    <tr>
                    {
                        columns.map((c, i) => <th key={i}>{c.label}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                {
                    pcList.map(pc => 
                        <Record key={pc.id} 
                                columns={columns} 
                                pcInfo={pc} 
                                onPCInfoChange={newPCInfo => {
                                    const newPCList = [
                                        ...pcList.filter(pcInfo => pcInfo.id !== pc.id),
                                        newPCInfo
                                    ];
                                    setPCList(sortPCList(newPCList, "initiative"));
                                }}
                        />
                    )
                }
                </tbody>
            </Table>
            <Button onClick={() =>
                setPCList([
                    ...pcList,
                    {
                        id: Math.max(...pcList.map(pc => pc.id)) + 1,
                        name: "New Player",
                        initiative: 0
                    }
                ])
            }>
                Add New PC
            </Button>
        </div>
    );
}

export default TurnOrder;