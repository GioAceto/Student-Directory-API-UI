import React, { useRef } from 'react'
import axios from 'axios'

const AddStudentForm = () => {
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
    window.location.href = '/'
  }

  const createStudent = async (student) => {
    const { name, age, address, gpa, major, image } = student

    if (!name || !age || !address || !gpa || !major || !image) {
      alert("Please fill out all input fields.")
    } else {

      let res = axios.post('http://localhost:1800/api/students', student)
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

export default AddStudentForm