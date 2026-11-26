import './ProfileCard.css';

function ProfileCard({ profile }) {
  return (
    <section id="profile" className="profile-section" aria-label="Personal Introduction">
      <div className="profile-card">
        <div className="profile-avatar-wrap">
          <img
            src={profile.avatar}
            alt={`${profile.name} portrait`}
            className="profile-avatar"
          />
          <span className="availability-pill">{profile.availability}</span>
        </div>

        <div className="profile-content">
          <p className="profile-location">{profile.location}</p>
          <h1 className="profile-name">{profile.name}</h1>
          <h2 className="profile-role">{profile.title}</h2>
          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-highlights">
            {profile.highlights.map((item) => (
              <div key={item.label} className="highlight-box">
                <span className="highlight-value">{item.value}</span>
                <span className="highlight-label">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="profile-actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
