import React, { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import PCRow from './PCRow';

const TurnOrder = () => {
    // Column Config
    const [columns] = useState([
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

    const deletePC = (pcID) => {
        setPCList([
            ...pcList.filter(pcInfo => pcInfo.id !== pcID),
        ]);
    };

    return (
        <div className="turn-order">
            <ButtonGroup className='mb-2'>
                <Button variant="primary" onClick={addNewPC}>
                    Add New PC
                </Button>
                <Button variant="info" onClick={goToNextPC}>
                    Next
                </Button>
                <Button variant="warning" onClick={() => setCurrentPCID(pcList.find(() => true).id)}>
                    Reset
                </Button>
            </ButtonGroup>

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
                        <PCRow key={pc.id} 
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
                                deletePC={deletePC}
                        />
                    )
                }
                </tbody>
            </Table>            
        </div>
    );
}

export default TurnOrder;