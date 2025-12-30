import { Mail, Linkedin, Github, ExternalLink, Code2, Briefcase, User, Award } from "lucide-react";
import profileImage from "../image.png";
import caseCompImage1 from "../casecomp.jpeg";
import caseCompImage2 from "../casecomp2.jpeg";
import genAiGenesisImage from "../genaigenesis.jpeg";
import genAiGenesisImage2 from "../genaigenesis2.png";
import nvidiaCaseCompImage1 from "../NVIDIAcasecomp.jpeg";
import teamworkAwardImage from "../teamworkaward.png";
import microsoftWorkshopImage1 from "../microsoftworkshop.jpeg";
import { Card } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import SkillsCarousel from "@/components/SkillsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-smooth overflow-x-hidden">
      {/* Dynamic animated background with multiple layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>

        {/* Large animated blob - Primary color */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/40 to-primary/10 dark:from-primary/30 dark:to-primary/5 rounded-full blur-3xl animate-blob opacity-60"></div>

        {/* Large animated blob - Accent color */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/40 to-accent/10 dark:from-accent/30 dark:to-accent/5 rounded-full blur-3xl animate-blob-reverse opacity-60" style={{ animationDelay: "2s" }}></div>

        {/* Medium animated blob - Secondary color */}
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-secondary/30 to-secondary/5 dark:from-secondary/20 dark:to-secondary/2 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: "1s" }}></div>

        {/* Small animated blob - Primary accent */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-primary/50 to-transparent dark:from-primary/30 rounded-full blur-2xl animate-float-slow opacity-50" style={{ animationDelay: "3s" }}></div>

        {/* Floating accent blob */}
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-tl from-accent/35 to-transparent dark:from-accent/20 rounded-full blur-3xl animate-float-slower opacity-40" style={{ animationDelay: "1.5s" }}></div>

        {/* Extra glow elements */}
        <div className="absolute top-0 left-1/2 w-80 h-80 bg-gradient-to-b from-primary/20 to-transparent dark:from-primary/10 rounded-full blur-3xl animate-pulse-glow opacity-30" style={{ animationDelay: "0.5s" }}></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/25 to-transparent dark:from-accent/15 rounded-full blur-3xl animate-pulse-glow opacity-25" style={{ animationDelay: "2.5s" }}></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:40px_40px] opacity-50"></div>
      </div>

      {/* Header with Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-[70] backdrop-blur-md bg-background/90 dark:bg-background/70 border-b border-border/50 transition-smooth">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold gradient-text display-font tracking-tight">Mohammed Sufiyaan Moinuddin Shaikh</h1>
              <p className="text-[0.65rem] md:text-xs text-muted-foreground uppercase tracking-[0.25em] font-semibold">Computer Science & Economics @ UOFT</p>
            </div>
            <ThemeToggle />
          </div>
          <nav className="header-nav flex flex-wrap items-center gap-5">
            <a className="hover:text-foreground transition-smooth" href="#about">About</a>
            <a className="hover:text-foreground transition-smooth" href="#experience">Experience</a>
            <a className="hover:text-foreground transition-smooth" href="#education">Education</a>
            <a className="hover:text-foreground transition-smooth" href="#projects">Projects</a>
            <a className="hover:text-foreground transition-smooth" href="#activities">Activities</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-40 md:pt-44 pb-20 md:pb-24 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[20rem_minmax(0,1fr)] gap-8 md:gap-10">
          {/* Left Column - Profile Section */}
          <div className="flex flex-col items-center md:items-start md:sticky md:top-52 self-start">
            <div className="w-full max-w-xs group md:max-w-none">
              {/* Profile Image with hover effect */}
              <div className="relative profile-frame">
                <div className="relative overflow-hidden rounded-full shadow-2xl glow transition-smooth group-hover:shadow-2xl group-hover:shadow-primary/40">
                <img
                  src={profileImage}
                  alt="Sufiyaan"
                  className="w-full h-auto object-cover aspect-square scale-110 transition-smooth group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
              </div>

              {/* Contact Info with enhanced styling */}
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:sufiyaan.722@gmail.com"
                  className="contact-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 transition-smooth group/link"
                >
                  <Mail className="w-5 h-5 text-primary transition-smooth group-hover/link:scale-110" />
                  <span>sufiyaan.722@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammedsufiyaanshaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 transition-smooth group/link"
                >
                  <Linkedin className="w-5 h-5 text-primary transition-smooth group-hover/link:scale-110" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Mohammed-Sufiyaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 dark:hover:bg-primary/20 transition-smooth group/link"
                >
                  <Github className="w-5 h-5 text-primary transition-smooth group-hover/link:scale-110" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column - Content Sections */}
          <div className="space-y-8">
            {/* About Section */}
            <section id="about" className="group scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold display-font section-title">About Me</h2>
              </div>
              <div className="section-card about-card rounded-xl p-6 md:p-8">
                <p className="about-text text-foreground/85 mb-5">
                  Hi! I'm Sufiyaan, a third-year student at the University of Toronto, pursuing a dual major in Computer Science and Economics. I'm passionate about software engineering and solving complex problems through innovative technology solutions.
                </p>
                <p className="about-text text-foreground/85">
                  With proficiency in Python, Java, C, Javascript, React, and SQL, I enjoy working on projects that require creative problem-solving and technical precision. Whether it's building scalable software solutions or analyzing data to drive insights, I'm constantly seeking opportunities to deepen my knowledge and make meaningful contributions.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="group scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold display-font section-title">Experience</h2>
              </div>
              <div className="space-y-4">
                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Technical Associate</h3>
                      <p className="experience-company mt-1">Google Developer Group UTM (GDG UTM)</p>
                      <p className="text-xs text-muted-foreground mt-1">Mississauga, CA</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Nov 2024 – Present</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3 mb-3">
                    <span className="tech-badge">Generative AI</span>
                    <span className="tech-badge">Google Gemini</span>
                    <span className="tech-badge">GCP</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="experience-achievement">Lead technical workshops and community initiatives for 100+ student developers</li>
                    <li className="experience-achievement">Collaborate with student organizations to design technical education events on emerging technologies</li>
                    <li className="experience-achievement">Manage end-to-end logistics for community projects and oversee deployment</li>
                    <li className="experience-achievement">Design curriculum and facilitate hands-on workshops on Google Cloud Platform and Gemini API</li>
                  </ul>
                </div>

                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Web Developer</h3>
                      <p className="experience-company mt-1">DEMA – Digital Enterprise Management Association</p>
                      <p className="text-xs text-muted-foreground mt-1">Mississauga, CA</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2024 – Present</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3 mb-3">
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">JavaScript</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="experience-achievement">Architected and developed responsive web application using React.js</li>
                    <li className="experience-achievement">Engineered reusable component library following atomic design principles</li>
                    <li className="experience-achievement">Implemented dynamic routing and state management for seamless user experience</li>
                  </ul>
                </div>

                {/* Partnerships Associate */}
                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Partnerships Associate</h3>
                      <p className="experience-company mt-1">UofT AI</p>
                      <p className="text-xs text-muted-foreground mt-1">Toronto, CA</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Jun 2024 – Present</span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    <li className="experience-achievement">Execute outbound partnership strategy targeting startups and enterprise organizations</li>
                    <li className="experience-achievement">Conduct cold outreach via email and LinkedIn to secure event sponsorships and funding</li>
                    <li className="experience-achievement">Pitch organizational value propositions and negotiate partnership terms aligned with objectives</li>
                    <li className="experience-achievement">Build and maintain strategic relationships with industry stakeholders across technology sector</li>
                  </ul>
                </div>

                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Data Analyst</h3>
                      <p className="experience-company mt-1">CCET – Sustainability Innovation Program</p>
                      <p className="text-xs text-muted-foreground mt-1">Mississauga, CA</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2024 – Mar 2025</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-3 mb-3">
                    <span className="tech-badge">Python</span>
                    <span className="tech-badge">ArcGIS</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="experience-achievement">Engineered data-driven retrofit policy framework using Python ETL pipelines</li>
                    <li className="experience-achievement">Processed 500K+ dwelling records and developed statistical energy consumption models</li>
                    <li className="experience-achievement">Generated heat maps for spatial visualization; contributed to grant funding success</li>
                    <li className="experience-achievement">Recognized with UTM Best Teamwork Award</li>
                  </ul>
                </div>

                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Instructor</h3>
                      <p className="experience-company mt-1">Unacademy</p>
                      <p className="text-xs text-muted-foreground mt-1">Surat, IN</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">May 2023 – Aug 2023</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="experience-achievement">Delivered curriculum instruction in Physics and Mathematics to 30+ students</li>
                    <li className="experience-achievement">Achieved 8.8% improvement in average assessment scores (68% → 74%)</li>
                    <li className="experience-achievement">Designed pedagogical frameworks that enhanced concept retention and problem-solving</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="group scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold display-font section-title">Education</h2>
              </div>
              <div className="space-y-4">
                {/* University of Toronto */}
                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="experience-title">Honours Bachelor of Science</h3>
                      <p className="experience-company mt-1">University of Toronto</p>
                      <p className="text-xs text-muted-foreground mt-1">Mississauga, CA | Expected Graduation: Dec 2027</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Computer Science & Economics | Minor in Mathematics</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="education-badge">Dean's List Scholar</span>
                      <span className="education-badge">CGPA: 3.73/4.0</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Completed Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["CSC108", "CSC148", "CSC207", "CSC209", "CSC236", "CSC263", "CSC309", "CSC347"].map((course) => (
                        <span key={course} className="education-badge">{course}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Current Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["CSC311 (ML)", "CSC343 (DB)", "CSC301 (SE)"].map((course) => (
                        <span key={course} className="education-badge">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* London School of Economics */}
                <div className="section-card p-6 md:p-8 rounded-xl">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="experience-title">Summer School</h3>
                      <p className="experience-company mt-1">London School of Economics</p>
                      <p className="text-xs text-muted-foreground mt-1">London, UK • Aug 2025</p>
                    </div>
                    <span className="education-badge">Grade: A</span>
                  </div>
                  <p className="education-badge mt-3">EC312 Advanced Econometrics</p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="group scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold display-font section-title">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Wellthify */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Wellthify</h3>
                  </div>
                  <p className="project-description">
                    Full-stack AI-powered wellness platform leveraging LLM-driven inference for personalized diet recommendations and mental health insights. Advanced through 2 judging rounds among 160+ competing projects.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Led 4-engineer team through agile development cycle</li>
                    <li className="project-achievement">Designed RESTful API connecting React frontend to Flask/Node.js backend</li>
                    <li className="project-achievement">Integrated Google Gemini Pro API for NLP and generative AI</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Java", "Gemini API", "Flask", "Node.js", "React.js"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Prestige Circle */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Prestige Circle</h3>
                  </div>
                  <p className="project-description">
                    Campus loyalty platform with full-stack monorepo architecture, RBAC, and JWT authentication for multi-tier roles.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Built RESTful services with Prisma for type-safe DB access</li>
                    <li className="project-achievement">Integrated Gemini-powered AI assistant with ElevenLabs TTS</li>
                    <li className="project-achievement">Implemented map-based event discovery with MapTiler</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["React.js", "Express.js", "Prisma", "Gemini API", "MapTiler"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Stock Recommendation System */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Stock Recommendation System</h3>
                  </div>
                  <p className="project-description">
                    Quantitative portfolio optimization engine utilizing Modern Portfolio Theory algorithms for efficient frontier analysis.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Achieved 15–20% risk reduction through optimization</li>
                    <li className="project-achievement">Processed and analyzed 500+ S&P 500 equity tickers</li>
                    <li className="project-achievement">Developed interactive data visualization dashboards</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Python", "MySQL", "Pandas", "NumPy"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Custom Unix Shell */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Custom Unix Shell</h3>
                  </div>
                  <p className="project-description">
                    POSIX-compliant shell implementation with built-in commands, external process execution, and I/O redirection.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Implemented robust memory management to prevent leaks</li>
                    <li className="project-achievement">Engineered lexical analyzer for input tokenization</li>
                    <li className="project-achievement">Supported multi-command execution pipelines</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["C", "POSIX", "Git"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Interactive Drawing Application */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Interactive Drawing Application</h3>
                  </div>
                  <p className="project-description">
                    Object-oriented drawing application implementing MVC architectural pattern with dynamic shape manipulation and optimized rendering.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Clear separation of concerns with modular design</li>
                    <li className="project-achievement">Support for shape creation, translation, and rotation</li>
                    <li className="project-achievement">Event-driven UI with optimized rendering pipeline</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Java", "JavaFX", "Maven", "Git"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* MewbileTech Phone Company Simulation */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">MewbileTech Phone Company Simulation</h3>
                  </div>
                  <p className="project-description">
                    Object-oriented telecommunications billing system managing customer accounts, contract types, and call history tracking.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Implemented subscription workflows and contract-based billing engine</li>
                    <li className="project-achievement">Applied modular design with abstraction and clear separation of concerns</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Python", "OOP", "Data Structures"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Othello Game with AI Opponents */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Othello Game with AI Opponents</h3>
                  </div>
                  <p className="project-description">
                    Competitive board game with greedy and randomized AI agents, plus empirical performance evaluation across strategies.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Strategy architecture using inheritance, interfaces, and abstraction</li>
                    <li className="project-achievement">JUnit test suite with TDD to ensure correctness</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Java", "JUnit", "Maven", "Git"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Treemap Visualizer for Hierarchical Data */}
                <div className="project-card p-6 md:p-7 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="project-title">Treemap Visualizer for Hierarchical Data</h3>
                  </div>
                  <p className="project-description">
                    Interactive treemap visualization for hierarchical file systems using recursive rectangle partitioning.
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    <li className="project-achievement">Recursive algorithm with proportional sizing based on data attributes</li>
                    <li className="project-achievement">Event-driven UI for navigation and real-time updates</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {["Python", "Pygame", "Recursive Algorithms"].map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Activities & Achievements */}
            <section id="activities" className="group scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold display-font section-title">Activities & Achievements</h2>
              </div>
              <div className="space-y-6">
                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">UEC Case Competition Winner — Breaking Point: Canada’s Productivity Problem (Advance Division)</h3>
                  </div>
                  <p className="achievement-text mt-3">
                    Team Ignite ranked among the top teams in the Advance Division. We paired policy recommendations
                    with an AI-integrated dashboard that visualized simulated impact in real time (judge-highlighted strength).
                  </p>
                  <ul className="achievement-list mt-4">
                    <li>Simulation: ML-guided counterfactuals and scenario comparisons</li>
                    <li>Visualization: interactive charts for instant impact</li>
                    <li>Full-stack: web UI, APIs, simulation engine, and live deployment</li>
                  </ul>
                  <a
                    href="https://case-comp-2025.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link mt-5 inline-flex items-center gap-2"
                  >
                    <span>Dynamic Portal Dashboard</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="achievement-media mt-6">
                    <img src={caseCompImage1} alt="UEC Case Competition presentation" />
                    <img src={caseCompImage2} alt="UEC Case Competition team photo" />
                  </div>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">GenAI Genesis Hackathon 2025 (Wellthify)</h3>
                  </div>
                  <p className="achievement-text mt-3">
                    Participated in the largest AI hackathon of 2025 with 2200+ applicants, 600+ hackers, and 160+ projects.
                    Built Wellthify with rapid ideation, prototyping, and shipping in a high-intensity environment.
                  </p>
                  <ul className="achievement-list mt-4">
                    <li>Building fast with GenAI: scoped features, right models, quick iteration</li>
                    <li>Product thinking under pressure: idea to usable demo</li>
                    <li>Team execution: collaboration, work division, and on-time delivery</li>
                  </ul>
                  <a
                    href="https://devpost.com/software/wellthify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link mt-5 inline-flex items-center gap-2"
                  >
                    <span>Wellthify on Devpost</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="achievement-media mt-6">
                    <img src={genAiGenesisImage} alt="GenAI Genesis Hackathon team photo" />
                    <img src={genAiGenesisImage2} alt="GenAI Genesis Hackathon demo" />
                  </div>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">NVIDIA Case Competition — Strategy & Emerging Tech Analysis</h3>
                  </div>
                  <p className="achievement-text mt-3">
                    Analyzed how NVIDIA should adapt as the AI landscape evolves, with a focus on maintaining long-term leadership
                    in AI hardware and software amid geopolitical and supply chain constraints.
                  </p>
                  <ul className="achievement-list mt-4">
                    <li>In-house chip production, trade barriers, and supply chain strategy</li>
                    <li>Quantum computing investment and R&amp;D execution risks</li>
                    <li>Applications in AI for finance: modeling and risk analysis</li>
                  </ul>
                  <a
                    href="https://github.com/Mohammed-Sufiyaan/Mohammed-Sufiyaan/blob/main/NVIDIA%20Case%20Competition.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link mt-5 inline-flex items-center gap-2"
                  >
                    <span>Full Report</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="achievement-media mt-6">
                    <img src={nvidiaCaseCompImage1} alt="NVIDIA case competition team photo" />
                  </div>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">Teamwork Award — Social Innovation Projects (UofT Mississauga)</h3>
                  </div>
                  <p className="achievement-text mt-3">
                    Recognized for outstanding collaboration on a dwelling archetype analysis focused on housing energy efficiency
                    and retrofit opportunities.
                  </p>
                  <ul className="achievement-list mt-4">
                    <li>Data collection and statistical modeling</li>
                    <li>Insight development for sustainability initiatives</li>
                    <li>Findings used to strengthen a grant proposal</li>
                  </ul>
                  <div className="achievement-media mt-6">
                    <img src={teamworkAwardImage} alt="Teamwork award recognition" />
                  </div>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">Dean’s List Scholar</h3>
                    <p className="achievement-meta">University of Toronto Mississauga</p>
                  </div>
                  <p className="achievement-text mt-3">
                    Awarded Dean’s List Scholar by the University of Toronto for academic excellence.
                  </p>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">Entrance Scholarship</h3>
                    <p className="achievement-meta">University of Toronto Mississauga</p>
                  </div>
                  <p className="achievement-text mt-3">
                    Entrance Scholarship recipient for studies in Computer Science, Mathematics, and Statistics at the University of Toronto.
                  </p>
                </div>

                <div className="achievement-card p-6 md:p-7 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <h3 className="achievement-title">Microsoft Canada HQ Visit — DEMA Association (Workshop)</h3>
                  </div>
                  <p className="achievement-text mt-3">
                    In-person learning and networking experience focused on careers, internships, and AI.
                  </p>
                  <ul className="achievement-list mt-4">
                    <li>Intern panel on pathways to Microsoft and practical career advice</li>
                    <li>Mentor roundtables on AI amplifying human potential</li>
                    <li>Connected with interns and mentors for real-world insights</li>
                  </ul>
                  <div className="achievement-media mt-6">
                    <img src={microsoftWorkshopImage1} alt="Microsoft Canada HQ workshop session" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-border/50 py-1 px-4 md:px-8 transition-smooth z-[60] bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto skills-footer">
          <SkillsCarousel />
        </div>
      </footer>
    </div>
  );
}
