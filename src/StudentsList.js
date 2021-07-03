import React from 'react'
import './StudentList.css'


const StudentsList =(props)=>{

const studentsList = props.students.map((student,i) => <li key={i} className={`elem ${i}`} >{student}</li> )

const[students, setStudent]=React.useState(studentsList)


const [todaysWinner,setTodaysWinner] = React.useState([])
const [allWinners,setAllWinners] = React.useState([])
// const []

const handlePicking=()=>{
    let randomNum =  Math.floor(Math.random() * (students.length-1))
    let picked = []
    picked.push(students.splice(randomNum,1)) ;
    /* it works but can I directly acces this?*/
    setStudent([...students])
    setTodaysWinner([...picked])
    setAllWinners([...allWinners,...todaysWinner])
    
}

const handleFullReset = ()=>{
   setStudent(studentsList)
   setTodaysWinner([])
    setAllWinners([])
}


const handleLastReset = () =>{
let copyStud=[...students]
copyStud.push(todaysWinner)
setStudent(copyStud )
setTodaysWinner([])

}

return(

    <div className='students-container'>
        <ul className="unpicked">
        {students.length>0? students: <li><h2>You have picked everyone!</h2></li>}
        </ul>

       
            <h2 className="todaysWinner">Winner of the day {todaysWinner}</h2>
        
        <div>
        <button onClick={()=>{handlePicking(students)}}>Random pick</button>
        <button onClick={()=>{handleLastReset(students)}}>Reset last one</button>
        <button onClick={()=>{handleFullReset(students)}}>Reset All</button>
        </div>
        <h5> Past winners:{allWinners} </h5>
    </div>
)

}


export default StudentsList






