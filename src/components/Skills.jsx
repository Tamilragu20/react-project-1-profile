import './Skills.css';

function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <span className="skill-category">{skill.category}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-description">{skill.description}</p>

      <div className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
        <div className="skill-meter-fill" style={{ width: `${skill.level}%` }} />
      </div>

      <ul className="skill-tags">
        {skill.tags.map((tag) => (
          <li key={tag} className="skill-tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-eyebrow">Capabilities</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Core technologies and engineering practices I apply across frontend projects.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
