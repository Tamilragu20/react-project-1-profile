import avatarImg from '../assets/avatar.svg';

export const profileInfo = {
  name: 'Ragu S',
  title: 'Frontend & React Developer',
  location: 'Coimbatore, India',
  availability: 'Open to Frontend Internships',
  email: 'ragu.dev@example.com',
  github: 'https://github.com/Tamilragu20',
  linkedin: 'https://linkedin.com',
  avatar: avatarImg,
  bio: 'Computer Science undergraduate passionate about crafting accessible, responsive web interfaces with React, modern JavaScript, and clean CSS architecture. Focused on building reusable UI systems and smooth user experiences.',
  highlights: [
    { label: 'Projects Built', value: '12+' },
    { label: 'Core Stack', value: 'React / JS' },
    { label: 'UI Focus', value: 'Responsive' },
  ],
};

export const skillsData = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    level: 90,
    description: 'Component-driven architecture, props composition, hooks, and stateful UI workflows.',
    tags: ['JSX', 'Hooks', 'Props', 'Vite'],
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Language',
    level: 88,
    description: 'Array transformations, async workflows, modular code organization, and DOM logic.',
    tags: ['ES6+', 'Map/Filter', 'Fetch API', 'Modules'],
  },
  {
    id: 'css',
    name: 'Modern CSS & Layout',
    category: 'Styling',
    level: 86,
    description: 'Responsive Flexbox and CSS Grid systems, custom properties, and clean visual hierarchy.',
    tags: ['Grid', 'Flexbox', 'CSS Variables', 'Media Queries'],
  },
  {
    id: 'html',
    name: 'Semantic HTML5',
    category: 'Frontend',
    level: 92,
    description: 'Accessible markup, landmark structures, SEO-friendly document outlines, and forms.',
    tags: ['Accessibility', 'Semantics', 'Forms', 'ARIA'],
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tooling',
    level: 85,
    description: 'Branch management, clean commit history, repository publishing, and collaborative workflows.',
    tags: ['Git CLI', 'GitHub CLI', 'Version Control'],
  },
  {
    id: 'ui',
    name: 'UI Engineering',
    category: 'Design',
    level: 82,
    description: 'Translating product requirements into structured, mobile-first layouts and design tokens.',
    tags: ['Wireframing', 'Design Systems', 'Responsive UX'],
  },
];

export const educationData = [
  {
    id: 'btech',
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Sri Eshwar College of Engineering',
    period: '2023 – 2027',
    grade: 'CGPA: 8.6 / 10',
    summary: 'Focused on data structures, full-stack web engineering, software design patterns, and human-computer interaction.',
    coursework: ['Web Technologies', 'Data Structures', 'Database Systems', 'Software Engineering'],
  },
  {
    id: 'internship',
    degree: 'Frontend Web Development Track',
    institution: 'Practical React & Vite Internship',
    period: '2026',
    grade: 'Completed 5 Core Projects',
    summary: 'Built five independent React applications emphasizing component reusability, state filtering, form validation, and GitHub deployment.',
    coursework: ['React Components', 'Vite Bundling', 'Responsive CSS', 'GitHub Publishing'],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (Class XII)',
    institution: 'State Board Senior Secondary School',
    period: '2021 – 2023',
    grade: 'Percentage: 92%',
    summary: 'Specialized in Mathematics, Physics, and Computer Science with strong problem-solving foundations.',
    coursework: ['Mathematics', 'Computer Science', 'Problem Solving'],
  },
];
