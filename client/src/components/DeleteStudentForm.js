import React, { useRef } from 'react'
import axios from 'axios'

const DeleteStudentForm = () => {
  const formData = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Destructure current values from the ref
    const { current } = formData

    const studentID = current.id.value
    console.log(studentID)

    await deleteStudent(studentID)
    window.location.href = '/'
  }

  const deleteStudent = async (studentID) => {
    const { id } = studentID

    if (!id) {
      alert("Please fill out all input fields.")
    } else {

      let res = axios.delete(`http://localhost:1800/api/students/${studentID}`)
        .then(res => {
          return res
        })
        .catch(error => {
          return error
        })

      return res
    }
  }

  return (
    <form ref={formData} className="deleteForm">
      <div className="input-container">
        <label htmlFor="delete-id">Student ID:</label>
        <input type="text" maxLength="6" id="delete-id" name="id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit" onClick={handleSubmit}>Submit Change</button>
      </div>
    </form>
  )
}

export default DeleteStudentForm