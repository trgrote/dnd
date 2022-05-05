import React, { useEffect, useState } from 'react';
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
    const [pcList, setPCList] = useState([]);

    const [currentPCID, setCurrentPCID] = useState();

    const sortPCList = (list) => {
        return list.slice().sort((a, b) => {
            const sortValue = b.initiative - a.initiative;

            // Fallback to id if the initiatives are the same
            return sortValue === 0 ?
                a.id - b.id :
                sortValue;
        });
    };

    const addNewPC = () => {
        setPCList([
            ...pcList,
            {
                id: pcList.length > 0 ? 
                    Math.max(...pcList.map(pc => pc.id)) + 1 : 
                    0,
                name: "New Player",
                initiative: 0
            }
        ]);
    };

    const goToNextPC = () => {
        if (pcList.length === 0) {
            return;
        }

        const currentIndex = pcList.findIndex(pc => pc.id === currentPCID);
        const newIndex = currentIndex !== -1 ? 
            (currentIndex + 1) % pcList.length : 
            0;

        setCurrentPCID(pcList[newIndex].id);
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
                    pcList.map((pc, i) => 
                        <Record key={pc.id} 
                                columns={columns} 
                                pcInfo={pc} 
                                isTurn={currentPCID === pc.id}
                                onPCInfoChange={newPCInfo => {
                                    const newPCList = [
                                        ...pcList.filter(pcInfo => pcInfo.id !== pc.id),
                                        newPCInfo
                                    ];
                                    setPCList(sortPCList(newPCList));
                                }}
                        />
                    )
                }
                </tbody>
            </Table>
            <Button onClick={addNewPC}>
                Add New PC
            </Button>
            <Button onClick={goToNextPC}>
                Next
            </Button>
            <Button onClick={() =>
                setCurrentPCID(pcList.find(pc => true).id)
            }>
                Reset
            </Button>
        </div>
    );
}

export default TurnOrder;