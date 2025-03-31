// src/app/constants/texts.ts
interface TranslationKeys {
  //atf component
  frontendDeveloper: string;
  developer: string;
  //navbar component
  welcome: string;
  whyMe: string;
  skills: string;
  projects: string;
  contact: string;
  // Whyme component
  whyMeTitle: string;
  iAmLocated: string;
  aboutMeDescription: string;
  letsTalkButton: string;
  // Skills Section
  mySkillsTitle: string;
  currentlyLearning: string;
  learningDescription: string;
  // Projects Section
  myProjectsTitle: string;
  aboutProject: string;
  projectDuration: string;
  workProcess: string;
  groupWorkExperience: string;
  technologiesLabel: string;
  liveTestButton: string;
  githubButton: string;
  //testimomials component
  teamplayerTitle: string;
  projectLabel: string;
  linkedinProfile: string;
  views: string;
  // Contact Section
  contactTitle: string;
  contactDescription: string;
  formNameLabel: string;
  formNameError: string;
  formEmailLabel: string;
  formEmailError: string;
  formMessageLabel: string;
  formMessageError: string;
  privacyText: string;
  privacyLink: string;
  privacyError: string;
  submitButton: string;


}

export const TEXTS: { en: TranslationKeys; de: TranslationKeys } = {
  en: {
    //atf component
    developer: 'Eeveloper',
    frontendDeveloper: 'FRONTEND DEVELOPER',
    //navbar component
    welcome: "Welcome",
    whyMe: "Why me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    //why me component
    whyMeTitle: "Why me",
    iAmLocated: "I am located in Köln...|",
    aboutMeDescription: "I bring a passion for crafting seamless, visually appealing, and user-friendly web experiences. With a keen eye for design and a strong foundation in modern web technologies, I specialize in building responsive, accessible, and high-performance applications.",
    letsTalkButton: "Let's talk",
    // Skills Section
    mySkillsTitle: "My Skills",
    currentlyLearning: "I am currently learning",
    learningDescription: "Show that you are motivated to continually improve your skills, implement innovative solutions and stay abreast of new technologies.",
    // Projects Section
    myProjectsTitle: "My Projects",
    aboutProject: "About the project",
    projectDuration: "Duration",
    workProcess: "How I have organized my work process",
    groupWorkExperience: "My group work experience",
    technologiesLabel: "Technologies",
    liveTestButton: "Live Test",
    githubButton: "GitHub",
    // Team Players Section
    teamplayerTitle: "Need a teamplayer? Here's what my colleagues said about me",
    projectLabel: "Project",
    linkedinProfile: "LinkedIn Profile",
    views: 'Shardzhil had to develop, format and liver content in collaboration with the team members. He is a reliable and friendly person.',
    // Contact Section
    contactTitle: "Contact me",
    contactDescription: "I'm interested in freelance opportunities and interesting projects. Feel free to reach out if you have any questions or just want to connect.",
    formNameLabel: "Your name",
    formNameError: "Name is required",
    formEmailLabel: "Your Email",
    formEmailError: "Valid email is required",
    formMessageLabel: "Your Message",
    formMessageError: "Please enter a message (min 4 characters)",
    privacyText: "I've read the privacy policy and agree to the processing of my data as outlined.",
    privacyLink: "privacy policy",
    privacyError: "Please accept our Privacy Policy",
    submitButton: "Send message"
  },
  de: {
    //atf component
    developer: 'ENTWICKLER',
    frontendDeveloper: 'FRONTEND-ENTWICKLER',
    //navbar component
    welcome: "Willkommen",
    whyMe: "Warum ich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",
    //why me component
    whyMeTitle: "Warum ich",
    iAmLocated: "Ich wohne in Köln...|",
    aboutMeDescription: "Ich bringe Leidenschaft für nahtlose, visuell ansprechende und benutzerfreundliche Web-Erlebnisse mit. Mit einem Auge für Design und einer soliden Grundlage in modernen Webtechnologien spezialisiere ich mich auf die Entwicklung von responsiven, barrierefreien und leistungsstarken Anwendungen.",
    letsTalkButton: "Lass uns reden",
    // Skills Section
    mySkillsTitle: "Meine Fähigkeiten",
    currentlyLearning: "Ich lerne derzeit",
    learningDescription: "Zeigen Sie, dass Sie motiviert sind, Ihre Fähigkeiten kontinuierlich zu verbessern, innovative Lösungen zu implementieren und mit neuen Technologien Schritt zu halten.",
    // Projects Section
    myProjectsTitle: "Meine Projekte",
    aboutProject: "Über das Projekt",
    projectDuration: "Dauer",
    workProcess: "Wie ich meinen Arbeitsprozess organisiert habe",
    groupWorkExperience: "Meine Gruppenerfahrung",
    technologiesLabel: "Technologien",
    liveTestButton: "Live Test",
    githubButton: "GitHub",
    teamplayerTitle: "Brauchen Sie einen Teamplayer? Das sagen meine Kollegen über mich",
    projectLabel: "Projekt",
    linkedinProfile: "LinkedIn-Profil",
    views: 'Shardzhil musste in Zusammenarbeit mit den Teammitgliedern Inhalte entwickeln, formatieren und bereitstellen. Er ist eine zuverlässige und freundliche Person.',
    // Contact Section
    contactTitle: "Kontakt",
    contactDescription: "Ich bin an freiberuflichen Möglichkeiten und interessanten Projekten interessiert. Zögern Sie nicht, mich bei Fragen oder einfach zum Austausch zu kontaktieren.",
    formNameLabel: "Ihr Name",
    formNameError: "Name ist erforderlich",
    formEmailLabel: "Ihre E-Mail",
    formEmailError: "Gültige E-Mail ist erforderlich",
    formMessageLabel: "Ihre Nachricht",
    formMessageError: "Bitte geben Sie eine Nachricht ein (mind. 4 Zeichen)",
    privacyText: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
    privacyLink: "Datenschutzerklärung",
    privacyError: "Bitte akzeptieren Sie unsere Datenschutzerklärung",
    submitButton: "Nachricht senden",
  }
};