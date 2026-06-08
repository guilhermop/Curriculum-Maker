import { useState } from "react";
import "../styles/EducationSection.css";

function EducationSection({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <div className="section-card">
        <h2>Formação Acadêmica</h2>
        <input
          name="school"
          placeholder="Nome da escola"
          value={education.school}
          onChange={handleChange}
        />
        <input
          name="degree"
          placeholder="Curso"
          value={education.degree}
          onChange={handleChange}
        />
        <input
          name="dateStudy"
          placeholder="Período (ex: 2020 - 2024)"
          value={education.dateStudy}
          onChange={handleChange}
        />
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Formação Acadêmica</h2>
      <p><strong>Escola:</strong> {education.school}</p>
      <p><strong>Curso:</strong> {education.degree}</p>
      <p><strong>Período:</strong> {education.dateStudy}</p>
      <button className="btn-edit" onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default EducationSection;