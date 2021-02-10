import React from 'react'
import Tasks from './Tasks'

// const task = [
//     {
//         id:1,
//         text:"this is task 1",
//         day: "day 1",
//         reminder: true,
//     },
//     {
//         id:2,
//         text:"this is task 2",
//         day: "day 2",
//         reminder: true,
//     },
//     {
//         id:3,
//         text:"this is task 3",
//         day: "day 3",
//         reminder: true,
//     },
// ]

function Task({tasks}) {
    return (
        <div>
            {tasks.map((tasks)=>(<Tasks key={tasks.id} task={tasks} />))}
            
        </div>
    )
}

export default Task
