import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StudentsContainer = () => {
  const [student, setStudent] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      let fetch = await axios.get('/api/students')

      setStudent(fetch.data)
    }
    fetchStudents()
  }, [])

  return (
    <div className="students-container" >
      {student.map(student => {
        return (
          <div key={student.id} className="profile">
            <h2>{student.name}</h2>
            <img crossOrigin="anonymous" className="avatar" src={student.image} alt={student.name}></img>
            <div className="data-list">
              <h3>Age: {student.age}</h3>
              <h3>Home Address: {student.address}</h3>
              <h3>GPA: {student.gpa}</h3>
              <h3>Major: {student.major}</h3>
              <h3>Student ID: {student.id.toString().padStart(6, "0")}</h3>
              <div className="separation"></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StudentsContainer
