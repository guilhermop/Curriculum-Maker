import { useState } from "react";
import PersonalInfoSection from "./components/PersonalInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "", email: "", phone: ""
  });

  const [education, setEducation] = useState({
    school: "", degree: "", dateStudy: ""
  });

  const [experience, setExperience] = useState({
    company: "", position: "", responsibilities: "", dateFrom: "", dateTo: ""
  });

  return (
  <div>
    <h1>CV Maker</h1>
    <div className="app-layout">
      <div className="form-column">
        <PersonalInfoSection
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationSection
          education={education}
          setEducation={setEducation}
        />
        <ExperienceSection
          experience={experience}
          setExperience={setExperience}
        />
      </div>
      <div className="preview-column">
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  </div>
);  
}

export default App;