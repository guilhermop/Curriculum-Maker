import { useState } from "react";
import "../styles/ExperienceSection.css";

function ExperienceSection({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setExperience({ ...experience, [e.target.name]: e.target.value });
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
        <h2>Experiência Profissional</h2>
        <input
          name="company"
          placeholder="Nome da empresa"
          value={experience.company}
          onChange={handleChange}
        />
        <input
          name="position"
          placeholder="Cargo"
          value={experience.position}
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          placeholder="Principais responsabilidades"
          value={experience.responsibilities}
          onChange={handleChange}
        />
        <input
          name="dateFrom"
          placeholder="Data de início (ex: Jan 2022)"
          value={experience.dateFrom}
          onChange={handleChange}
        />
        <input
          name="dateTo"
          placeholder="Data de saída (ex: Dez 2024)"
          value={experience.dateTo}
          onChange={handleChange}
        />
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Experiência Profissional</h2>
      <p><strong>Nome da empresa:</strong> {experience.company}</p>
      <p><strong>Cargo:</strong> {experience.position}</p>
      <p><strong>Responsabilidades:</strong> {experience.responsibilities}</p>
      <p><strong>Data de início:</strong> {experience.dateFrom}</p>
      <p><strong>Data de saída:</strong> {experience.dateTo}</p>
      <button className="btn-edit" onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default ExperienceSection;