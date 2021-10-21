import React, { useRef } from 'react'
import axios from 'axios'

const UpdateStudentForm = () => {
  const formData = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Destructure current values from the ref
    const { current } = formData

    const studentID = current.id.value
    console.log(studentID)

    await updateStudent(studentID)

    alert("Student deleted!")
    window.location.href = '/'
  }

  const updateStudent = async (studentID) => {
    let res = axios.update(`http://localhost:1800/api/students/${studentID}`)
      .then(res => {
        return res
      })
      .catch(error => {
        return error
      })

    return res

  }

  return (
    <form ref={formData} className="updateForm">
      <div className="input-container">
        <label htmlFor="update-name">Name:</label>
        <input type="text" id="update-name" name="name" />
        <label htmlFor="update-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="update-age" name="age" />
        <label htmlFor="update-address">Address:</label>
        <input type="text" id="update-address" name="address" />
        <label htmlFor="update-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="update-gpa" name="gpa" />
        <label htmlFor="update-major">Major:</label>
        <input type="text" id="update-major" name="major" />
        <label htmlFor="update-image">Image:</label>
        <input type="text" id="update-image" name="image" />
        <label htmlFor="update-id">Student ID:</label>
        <input type="text" maxLength="6" id="update-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit" onClick={handleSubmit} >Submit Change</button>
      </div>
    </form>
  )
}

export default UpdateStudentForm