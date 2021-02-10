import React from 'react'

function Tasks({task}) {
    return (
        <div className = "task">
            <h2>{task.text}</h2>
            <h3>{task.day}</h3>
            

            
        </div>
    )
}

export default Tasks
