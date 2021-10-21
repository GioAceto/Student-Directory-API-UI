import React, { useRef } from 'react'
import axios from 'axios'

export const AddStudentForm = () => {
  const formData = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Destructure current values from the ref
    const { current } = formData
    // Create a student object on the fly with the ref
    const student = {
      name: current.name.value,
      age: current.age.value,
      address: current.address.value,
      gpa: current.gpa.value,
      major: current.major.value,
      image: current.image.value
    }
    // Axios here
    let newStudent = await createStudent(student)
    console.log(newStudent)
    alert("New student added!")
    window.location.href = '/'
  }

  const createStudent = async (student) => {

    const { name, age, address, gpa, major, image } = student

    if (!name || !age || !address || !gpa || !major || !image) return "Please fill out all input fields."

    let res = axios.post('http://localhost:1800/api/students', student)
      .then(res => {
        return res
      })
      .catch(error => {
        return error
      })

    return res

  }

  return (
    <form ref={formData} className="addForm">
      <div className="input-container">
        <label htmlFor="add-name">Name:</label>
        <input type="text" id="add-name" name="name" />
        <label htmlFor="add-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="add-age" name="age" />
        <label htmlFor="add-address">Address:</label>
        <input type="text" id="add-address" name="address" />
        <label htmlFor="add-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="add-gpa" name="gpa" />
        <label htmlFor="add-major">Major:</label>
        <input type="text" id="add-major" name="major" />
        <label htmlFor="add-image">Image:</label>
        <input type="text" id="add-image" name="image" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit" onClick={handleSubmit}>Submit Change</button>
      </div>
    </form>
  )
}

export const UpdateStudentForm = () => {

  return (
    <form className="updateForm" action="/api/students" method="POST">
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
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

export const DeleteStudentForm = () => {
  const formData = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Destructure current values from the ref
    const { current } = formData

    const studentID = current.id.value
    console.log(studentID)

    await deleteStudent(studentID)

    alert("Student deleted!")
    window.location.href = '/'
  }

  const deleteStudent = async (studentID) => {
    let res = axios.delete(`http://localhost:1800/api/students/${studentID}`)
      .then(res => {
        return res
      })
      .catch(error => {
        return error
      })

    return res

  }

  return (
    <form ref={formData} className="deleteForm" action="/api/students" method="POST">
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