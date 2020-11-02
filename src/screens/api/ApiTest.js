import React,{useState, useEffect} from 'react'
import StudentComponent from '../cfdteam/components/StudentComponent'

function ApiTest() {

    let [list,setList] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(res => {
            setList(res)
        })
    })

    return (
        <div className="students-card-wrapper">
            {
                list.map(e => <StudentComponent
                                name={e.title}
                                desc="Desc"
                                img="https://via.placeholder.com/468x460"
                
                />)
            }
        </div>
    )
}

export default ApiTest
