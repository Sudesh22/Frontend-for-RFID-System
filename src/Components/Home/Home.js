import "./Home.css"
import React from 'react';
import Card from "./Card/card";

// list = ["Name", "Hex ID", "Dec ID", "Roll No", "Post", "Day", "Time"]

export default function Home({ onRouteChange,user }) {
    const [students,setStudents] = React.useState([]);
    React.useEffect(()=>{
        setTimeout(()=>{
            fetch('/data', {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    "entries": "request"
                })
            })
                .then(response => response.json())
                .then(res => { 
                    setStudents(res.data);
                    console.log(students)
                })
                .catch(err => console.log(err))
        },2000)
    },[students])
    const studentsList = students.map((student,key)=>{
        return <Card student={student} />
    })
    return (
        <div className="ml3">
            <div className="lh-copy mt3 tr mr4 underline">
                <p
                    onClick={() => onRouteChange('signin')}
                    className="f3 link dim black db pointer"
                >
                    {'Sign out'}
                </p>
            </div>
            <h2>Home page</h2>
            <div>Logged in as {user.name} Successfully......</div>
            <div className='scan'>Start scanning....</div>
            <span>
                <div className='grid-container grid-item'>
                    {studentsList}
                </div>
            </span>
        </div>
    )
}