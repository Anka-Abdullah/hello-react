import React from 'react'

function Person({p}) {
    return (
        <div>
            <h3> Hi, I am {p.name}. I am {p.age} years old. I know {p.skill}</h3>
        </div>
    )
}

export default Person
