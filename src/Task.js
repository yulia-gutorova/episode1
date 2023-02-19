import './App.css'

export const Task = (props) => {

    let color;
    if(props.completed === 0) {color = "white"} 
    if (props.completed === 1) {color = "lightgreen"}
    if (props.completed === 2) {color = "red"}

    return ( 
            <div className='pseudo-table'>
                <div>
                    <div className="task" style={{ backgroundColor: color }}>
                        <h1 className='task-content'>{props.taskName}</h1>
                    </div>
                </div>
                <div>
                    <button onClick={() => props.completeTask(props.id)}> Done </button>
                    <button onClick={() => props.problemTask(props.id)}> Problem </button>
                    <button onClick={() => props.deleteTask(props.id)}> Delete </button>
                </div>
            </div>   
    );
};