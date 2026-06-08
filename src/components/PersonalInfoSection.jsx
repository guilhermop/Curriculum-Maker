import { useState } from "react";
import "../styles/PersonalInfoSection.css";

function PersonalInfoSection({ personalInfo, setPersonalInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
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
        <h2>Informações Pessoais</h2>
        <input
          name="name"
          placeholder="Nome"
          value={personalInfo.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Telefone"
          value={personalInfo.phone}
          onChange={handleChange}
        />
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </div>
    );
  }

  return (
    <div className="section-card">
      <h2>Informações Pessoais</h2>
      <p><strong>Nome:</strong> {personalInfo.name}</p>
      <p><strong>Email:</strong> {personalInfo.email}</p>
      <p><strong>Telefone:</strong> {personalInfo.phone}</p>
      <button className="btn-edit" onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default PersonalInfoSection;