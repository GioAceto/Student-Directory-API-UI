import React, { useState } from 'react'
import AddStudentForm from './AddStudentForm'
import UpdateStudentForm from './UpdateStudentForm'
import DeleteStudentForm from './DeleteStudentForm'

const RenderChoice = ({ formResult }) => {
  if (formResult === 'update') return <UpdateStudentForm />

  if (formResult === 'delete') return <DeleteStudentForm />

  if (formResult === 'add') return <AddStudentForm />

  return <div />
}

const ChoiceContainer = () => {
  const [formResult, setFormResult] = useState('add')

  return (
    <>
      <div className="choice-container">
        <label>I want to:</label>
        <select id="select" onChange={(event) => setFormResult(event.target.value)} value={formResult}>
          <option value="add">add a student</option>
          <option value="update">edit a student</option>
          <option value="delete">delete a student</option>
        </select>
      </div>
      <RenderChoice formResult={formResult} />
    </>
  )
}

export default ChoiceContainer