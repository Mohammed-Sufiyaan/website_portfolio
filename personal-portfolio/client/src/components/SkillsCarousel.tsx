export default function SkillsCarousel() {
  const skills = [
    "Python",
    "Java",
    "C",
    "SQL",
    "React.js",
    "Node.js",
    "JavaScript",
    "HTML/CSS",
    "Stata",
    "Bash",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-transparent via-primary/5 to-transparent dark:via-primary/10 py-4 overflow-hidden">
      <div className="skills-carousel">
        <div className="skills-track animate-scroll-left">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div key={`skill-1-${index}`} className="skill-item">
              {skill}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <div key={`skill-2-${index}`} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
