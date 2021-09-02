import React from 'react'

function NameList(){

    const person= [
        {
            id: 1,
            name: 'darshan',
            age: 22
        },
        {
            id: 2,
            name: 'Hiren',
            age: 21
        },
        {
            id: 3,
            name: 'Hitesh',
            age: 25
        },
        {
            id: 4,
            name: 'sahil',
            age: 20
        },

    ]

    const nameList = person.map(list => <h2 key={list.name}>{list.name}</h2>)

    return(
        <div>
            {nameList}
        </div>
    )
}

export default NameList