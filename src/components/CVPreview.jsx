import "../styles/CVPreview.css";

function CVPreview({ personalInfo, education, experience }) {
  return (
    <div className="preview-card">
      <h2>Pré-visualização do CV</h2>

      <div className="preview-section">
        <h3>Informações Pessoais</h3>
        <p><strong>Nome:</strong> {personalInfo.name}</p>
        <p><strong>Email:</strong> {personalInfo.email}</p>
        <p><strong>Telefone:</strong> {personalInfo.phone}</p>
      </div>

      <div className="preview-section">
        <h3>Formação Acadêmica</h3>
        <p><strong>Escola:</strong> {education.school}</p>
        <p><strong>Curso:</strong> {education.degree}</p>
        <p><strong>Período:</strong> {education.dateStudy}</p>
      </div>

      <div className="preview-section">
        <h3>Experiência Profissional</h3>
        <p><strong>Empresa:</strong> {experience.company}</p>
        <p><strong>Cargo:</strong> {experience.position}</p>
        <p><strong>Responsabilidades:</strong> {experience.responsibilities}</p>
        <p><strong>Período:</strong> {experience.dateFrom} - {experience.dateTo}</p>
      </div>
    </div>
  );
}

export default CVPreview;