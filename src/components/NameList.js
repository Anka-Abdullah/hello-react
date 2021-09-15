import React, { Component } from 'react'
import Person from './Person'

export class NameList extends Component {
    render() {
        const boys = ['juned', 'richard', 'entuy']
        const names = [
            {
                id: 1,
                name: 'Bruce',
                age: 23,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Lee',
                age: 29,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Jackie',
                age: 30,
                skill: 'Vue'
            },
        ]
        const personList = names.map(p => (
            <Person key={p.id} p={p}></Person>
        ))
        return (
            <div>
                {
                    personList
                }
                other
                {boys.map((boy, index) => (
                    <p key={index}># {index} | {boy}</p>
                ))}
            </div>
        )
    }
}

export default NameList
