import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { profileInfo, skillsData, educationData } from './data/profileData';

const navLinks = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="portfolio-app">
      <Header name={profileInfo.name} links={navLinks} />

      <main className="portfolio-main">
        <ProfileCard profile={profileInfo} />
        <Skills skills={skillsData} />
        <Education educationList={educationData} />
      </main>

      <Footer
        name={profileInfo.name}
        email={profileInfo.email}
        github={profileInfo.github}
      />
    </div>
  );
}

export default App;
