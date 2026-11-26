import './Education.css';

function EducationItem({ item }) {
  return (
    <article className="education-card">
      <div className="education-meta">
        <span className="education-period">{item.period}</span>
        <span className="education-grade">{item.grade}</span>
      </div>
      <h3 className="education-degree">{item.degree}</h3>
      <p className="education-institution">{item.institution}</p>
      <p className="education-summary">{item.summary}</p>
      <ul className="coursework-list">
        {item.coursework.map((course) => (
          <li key={course} className="coursework-pill">
            {course}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Education({ educationList }) {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <span className="section-eyebrow">Academic Background</span>
        <h2 className="section-title">Education & Training</h2>
        <p className="section-subtitle">
          Formal engineering education and practical web development milestones.
        </p>
      </div>

      <div className="education-list">
        {educationList.map((item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Education;
