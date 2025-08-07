interface ProjectTranslation {
  about: string;
  workProcess: string;
  team: string;
  description: string;
}

interface ProjectsTranslations {
  daBubble: ProjectTranslation;
  pokedex: ProjectTranslation;
  join: ProjectTranslation;
  elPoloLoco: ProjectTranslation;
}

// src/app/constants/texts.ts
export interface TranslationKeys {
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
  iAmOpenToRemote: string;
  iAmOpenToRelocate: string;
  aboutMeDescription: string;
  letsTalkButton: string;
  // Skills Section
  mySkillsTitle: string;
  currentlyLearning: string;
  learningDescription: string;
  letsTalk: string;

  // Projects Section
  myProjectsTitle: string;
  aboutProject: string;
  projectDuration: string;
  workProcess: string;
  groupWorkExperience: string;
  technologiesLabel: string;
  liveTestButton: string;
  githubButton: string;
  // Projects Content Translations
  projectsContent: ProjectsTranslations;
   durations: {
    join: string;
    pokedex: string;
    elPoloLoco: string;
    daBubble: string; // uncomment when needed
  };

  //testimomials component
  teamplayerTitle: string;
  teamplayerMobileTitle: string;
  colleageMobileText: string;
  projectLabel: string;
  linkedinProfile: string;
  views: {
    james: string;
    sahre: string;
    taher: string;
  };
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
  //privacy-policy-component
  privacyPolicyTitle: string;
  privacyPolicyIntro1: string;
  privacyPolicyIntro2: string;
  privacyPolicyIntro3: string;
  privacyPolicyConsent: string;
  privacyPolicyConsentText: string;
  informationWeCollectTitle: string;
  informationWeCollectText1: string;
  informationWeCollectText2: string;
  informationWeCollectText3: string;
  howWeUseTitle: string;
  howWeUseList1: string;
  howWeUseList2: string;
  howWeUseList3: string;
  howWeUseList4: string;
  howWeUseList5: string;
  howWeUseList6: string;
  howWeUseList7: string;
  howWeUseList8: string;
  logFilesTitle: string;
  logFilesText: string;
  cookiesTitle: string;
  cookiesText: string;
  doubleClickTitle: string;
  doubleClickText: string;
  advertisingPartnersTitle: string;
  advertisingPartnersText: string;
  googlePolicy: string;
  thirdPartyPrivacyTitle: string;
  thirdPartyPrivacyText1: string;
  thirdPartyPrivacyText2: string;
  ccpaTitle: string;
  ccpaList1: string;
  ccpaList2: string;
  ccpaList3: string;
  ccpaText: string;
  gdprTitle: string;
  gdprList1: string;
  gdprList2: string;
  gdprList3: string;
  gdprList4: string;
  gdprList5: string;
  gdprList6: string;
  gdprText: string;
  childrenInfoTitle: string;
  childrenInfoText1: string;
  childrenInfoText2: string;
  questionsTitle: string;
  privacyPolicyGenerator: string;

  //impressum component
  impressumTitle: string;
  legalNotice: string;
  addressName: string;
  addressStreet: string;
  addressCity: string;
  representedBy: string;
  representedName: string;
  myContactTitle: string;
  phone: string;
  email: string;
  vatTitle: string;
  vatId: string;
  economicIdTitle: string;
  economicId: string;
  generatorNote: string;

  formSuccessMessage: string;

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
    iAmLocated: 'I am located in Köln...|',
    iAmOpenToRemote: 'I am open to work remote...|',
    iAmOpenToRelocate: 'I am open to relocate...|',
    aboutMeDescription: "I bring a passion for crafting seamless, visually appealing, and user-friendly web experiences. With a keen eye for design and a strong foundation in modern web technologies, I specialize in building responsive, accessible, and high-performance applications.",
    letsTalkButton: "Let's talk",
    // Skills Section
    mySkillsTitle: "My Skills",
    currentlyLearning: "I am currently Working",
    learningDescription: "Looking for other Skills?",
    letsTalk: "Let's Talk",

    // Projects Section
    myProjectsTitle: "My Projects",
    aboutProject: "About the project",
    projectDuration: "Duration",
    workProcess: "How I have organized my work process",
    groupWorkExperience: "My group work experience",
    technologiesLabel: "Technologies",
    liveTestButton: "Live Test",
    githubButton: "GitHub",

    durations: {
      join: '1 Month',
      pokedex: '2 weeks',
      elPoloLoco: '3 weeks',
      daBubble: '4 weeks' // uncomment when needed
    },

    projectsContent: {
      daBubble: {
        about: 'DABubble is a real-time messaging platform inspired by Slack and Discord, built with Angular and Firebase.',
        workProcess: 'I am approaching this project with a modular Angular structure, using services for state and data handling, and components for chat UI, authentication, and channel management. The backend will be powered by Firebase for real-time messaging, user management, and file storage. Project planning and task distribution are managed via Trello and SCRUM methods in a collaborative team setup.',
        team: 'As part of the development team, I am responsible for implementing chat UI components, managing real-time data flow, and ensuring a responsive user experience. I am actively involved in technical planning, API integration, and code collaboration via GitHub. This project gives me deeper experience in team communication, agile workflows, and building scalable web applications.',
        description: 'Slack clone app...'
      },
      pokedex: {
        about: 'A comprehensive Pokédex application...',
        workProcess: 'I structured the Pokedex project using modular JavaScript, separating API logic, DOM manipulation, and UI rendering into different files for clarity and maintainability. I used the PokéAPI to fetch real-time Pokémon data and implemented asynchronous functions (async/await) to handle loading states and dynamic content. The layout was designed to be responsive and user-friendly, with features like search, filters, and detailed Pokémon views.',
        team: 'In this project, I worked extensively with REST APIs, learning how to fetch, process, and display real-time data from the PokéAPI. I implemented asynchronous JavaScript using async/await, managed dynamic DOM updates, and built interactive UI components. This experience helped me strengthen my skills in API integration, data handling, and creating responsive, user-focused web interfaces.',
        description: 'Pokémon database application'
      },
      join: {
        about: 'Task management application...',
        workProcess: 'I structured the Join project in a modular way using Angular, with clearly separated components, services, and models to ensure maintainability and scalability. The data is managed via Firebase, using a tasks collection and a subtasks subcollection. I implemented real-time updates with Firestore and handled state management using BehaviorSubject. The app is fully responsive, and I added drag-and-drop functionality for desktop as well as an adaptive UI for mobile devices.',
        team: 'Throughout the Join project, I collaborated closely with team members using Trello for task planning and GitHub for version control and code reviews. We followed an agile workflow, held regular stand-ups, and communicated actively to align on features, bugs, and UI/UX decisions. I contributed both individually and as part of the team, focusing on clean code, shared standards, and helpful feedback during code reviews.',
        description: 'Project management tool'
      },
      elPoloLoco: {
        about: 'Jump and run game...',
        workProcess: 'I built the El Pollo Loco game using object-oriented JavaScript, structuring the project into clear and reusable classes such as Character, Enemy, World, ThrowableObject, and UIManager. I used a central game loop to manage updates and animations, and implemented collision detection, game states, and audio handling in a clean, event-driven way.',
        team: 'In this project, I gained hands-on experience with object-oriented programming (OOP) using vanilla JavaScript. I planned and structured the game logic through modular class design and implemented core gameplay features like movement, jumping, enemy behavior, item collection, and game-over states. I also handled canvas rendering, animation timing, and responsive scaling to ensure the game worked smoothly across devices. This project strengthened my understanding of code architecture, browser performance, and real-time user interaction.',
        description: 'Browser-based game'
      }
    },

    // Team Players Section
    teamplayerTitle: "Need a teamplayer ? Here's what my colleagues said about me",
    teamplayerMobileTitle: "Need a teamplayer ?",
    colleageMobileText: "Here's what my colleagues said about me",
    projectLabel: "Project",
    linkedinProfile: "LinkedIn Profile",

    views: {
      james: "Shardzhil was great to work with — focused, dependable, and always ready to support the team. A real team player.",
      sahre: "Shardzhil played a key role in developing the DABubble project, contributing to both the Angular frontend and Firebase backend with reliability and precision.",
      taher: "Shardzhil was always reliable, communicated clearly, and contributed great ideas. A strong team player you can count on."
    },

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
    submitButton: "Send message",

    // Privacy Policy Component
    privacyPolicyTitle: "Privacy Policy for My Website",
    privacyPolicyIntro1: "My Website one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by My Website and how we use it.",
    privacyPolicyIntro2: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
    privacyPolicyIntro3: "This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in My Website. This policy is not applicable to any information collected offline or via channels other than this website.",
    privacyPolicyConsent: "Consent",
    privacyPolicyConsentText: "By using our website, you hereby consent to our Privacy Policy and agree to its terms. This Privacy Policy has been generated with the Privacy Policy Generator which is available from https://www.privacypolicygenerator.info/",
    informationWeCollectTitle: "Information we collect",
    informationWeCollectText1: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
    informationWeCollectText2: "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
    informationWeCollectText3: "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
    howWeUseTitle: "How we use your information",
    howWeUseList1: "Provide, operate, and maintain our website",
    howWeUseList2: "Improve, personalize, and expand our website",
    howWeUseList3: "Understand and analyze how you use our website",
    howWeUseList4: "Develop new products, services, features, and functionality",
    howWeUseList5: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
    howWeUseList6: "Send you emails",
    howWeUseList7: "Find and prevent fraud",
    howWeUseList8: "Log Files",
    logFilesTitle: "Log Files",
    logFilesText: "My Website follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
    cookiesTitle: "Cookies and Web Beacons",
    cookiesText: "Like any other website, My Website uses \"cookies\". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
    doubleClickTitle: "DoubleClick DART Cookie",
    doubleClickText: "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads",
    advertisingPartnersTitle: "Advertising Partners Privacy Policies",
    advertisingPartnersText: "You may consult this list to find the Privacy Policy for each of the advertising partners of My Website.",
    googlePolicy: "Google: https://policies.google.com/technologies/ads",
    thirdPartyPrivacyTitle: "Third-Party Privacy Policies",
    thirdPartyPrivacyText1: "My Website's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
    thirdPartyPrivacyText2: "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?",
    ccpaTitle: "CCPA Privacy Policy (Do Not Sell My Personal Information)",
    ccpaList1: "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
    ccpaList2: "Request that a business delete any personal data about the consumer that a business has collected.",
    ccpaList3: "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
    ccpaText: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
    gdprTitle: "GDPR Privacy Policy (Data Protection Rights)",
    gdprList1: "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.",
    gdprList2: "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
    gdprList3: "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
    gdprList4: "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
    gdprList5: "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
    gdprList6: "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
    gdprText: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
    childrenInfoTitle: "Children's Information",
    childrenInfoText1: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
    childrenInfoText2: "My Website does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.",
    questionsTitle: "Questions",
    privacyPolicyGenerator: "Privacy Policy Generator",
    
    //impressum-component
    impressumTitle: "Impressum",
    legalNotice: "Information according to § 5 DDG",
    addressName: "Shardzhil Mukhammad",
    addressStreet: "Hans-Schulten Str 10",
    addressCity: "51109 Cologne",
    representedBy: "Represented by:",
    representedName: "Shardzhil Mukhammad",
    myContactTitle: "Contact:",
    phone: "Phone: +49 15126015827",
    email: "Email: shardzhil@gmail.com",
    vatTitle: "VAT ID:",
    vatId: "VAT identification number according to §27a VAT Act: Shardzhil",
    economicIdTitle: "Economic ID:",
    economicId: "Shardzhil",
    generatorNote:
      "Impressum from the <a href=\"https://www.impressum-generator.de\">Impressum Generator</a> of <a href=\"https://www.kanzlei-hasselbach.de/standorte/bonn/\" rel=\"nofollow\">Kanzlei Hasselbach, Bonn</a>",
    
    formSuccessMessage: 'Your message has been sent successfully!',
      

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
    iAmLocated: 'Ich wohne in Köln...|',
    iAmOpenToRemote: 'Ich bin offen für Remote-Arbeit...|',
    iAmOpenToRelocate: 'Ich bin offen für Umzug...|',
    aboutMeDescription: "Ich bringe Leidenschaft für nahtlose, visuell ansprechende und benutzerfreundliche Web-Erlebnisse mit. Mit einem Auge für Design und einer soliden Grundlage in modernen Webtechnologien spezialisiere ich mich auf die Entwicklung von responsiven, barrierefreien und leistungsstarken Anwendungen.",
    letsTalkButton: "Los geht's",
    // Skills Section
    mySkillsTitle: "Meine Fähigkeiten",
    currentlyLearning: "Ich arbeite derzeit",
    learningDescription: "Interesse an weiteren Fähigkeiten?",
    letsTalk: "Lass uns reden",

    // Projects Section
    myProjectsTitle: "Meine Projekte",
    aboutProject: "Über das Projekt",
    projectDuration: "Dauer",
    workProcess: "Wie ich meinen Arbeitsprozess organisiert habe",
    groupWorkExperience: "Meine Gruppenerfahrung",
    technologiesLabel: "Technologien",
    liveTestButton: "Live Test",
    githubButton: "GitHub",

    durations: {
      join: '1 Monat',
      pokedex: '2 Wochen',
      elPoloLoco: '3 Wochen',
      daBubble: '4 Wochen' // uncomment when needed
    },

    projectsContent: {
      daBubble: {
        about: 'DABubble ist eine von Slack und Discord inspirierte Echtzeit-Messaging-Plattform, die mit Angular und Firebase erstellt wurde.',
        workProcess: 'Ich gehe dieses Projekt mit einer modularen Angular-Struktur an und nutze Dienste für die Status- und Datenverarbeitung sowie Komponenten für die Chat-Benutzeroberfläche, Authentifizierung und Kanalverwaltung. Das Backend wird von Firebase für Echtzeit-Messaging, Benutzerverwaltung und Dateispeicherung unterstützt. Projektplanung und Aufgabenverteilung erfolgen über Trello- und SCRUM-Methoden in einem kollaborativen Team-Setup.',
        team: 'Als Teil des Entwicklungsteams bin ich für die Implementierung von Chat-UI-Komponenten, die Verwaltung des Echtzeit-Datenflusses und die Gewährleistung einer reaktionsschnellen Benutzererfahrung verantwortlich. Ich bin aktiv an der technischen Planung, der API-Integration und der Code-Zusammenarbeit über GitHub beteiligt. Dieses Projekt vermittelt mir umfassende Erfahrung in Teamkommunikation, agilen Workflows und der Entwicklung skalierbarer Webanwendungen.',
        description: 'Slack-Klon-App...'
      },
      pokedex: {
        about: 'Eine umfassende Pokédex-Anwendung...',
        workProcess: 'Ich habe das Pokedex-Projekt mit modularem JavaScript strukturiert und API-Logik, DOM-Manipulation und UI-Rendering aus Gründen der Übersichtlichkeit und Wartbarkeit in separate Dateien aufgeteilt. Ich nutzte die PokéAPI, um Pokémon-Daten in Echtzeit abzurufen, und implementierte asynchrone Funktionen (async/await), um Ladezustände und dynamische Inhalte zu verarbeiten. Das Layout wurde responsiv und benutzerfreundlich gestaltet und bietet Funktionen wie Suche, Filter und detaillierte Pokémon-Ansichten.',
        team: 'In diesem Projekt habe ich intensiv mit REST-APIs gearbeitet und gelernt, wie man Echtzeitdaten aus der PokéAPI abruft, verarbeitet und anzeigt. Ich habe asynchrones JavaScript mit async/await implementiert, dynamische DOM-Updates verwaltet und interaktive UI-Komponenten erstellt. Diese Erfahrung hat mir geholfen, meine Fähigkeiten in API-Integration, Datenverarbeitung und der Erstellung responsiver, benutzerorientierter Weboberflächen zu stärken.',
        description: 'Pokémon-Datenbank-Anwendung'
      },
      join: {
        about: 'Aufgabenverwaltungs-Anwendung...',
        workProcess: 'Ich habe das Join-Projekt modular mit Angular strukturiert und dabei Komponenten, Dienste und Modelle klar getrennt, um Wartbarkeit und Skalierbarkeit zu gewährleisten. Die Datenverwaltung erfolgt über Firebase mithilfe einer Aufgabensammlung und einer Unteraufgabensammlung. Echtzeit-Updates habe ich mit Firestore implementiert und die Statusverwaltung mit BehaviorSubject übernommen. Die App ist vollständig responsive und ich habe Drag-and-Drop-Funktionen für Desktop-Computer sowie eine adaptive Benutzeroberfläche für Mobilgeräte hinzugefügt.',
        team: 'Während des gesamten Join-Projekts arbeitete ich eng mit Teammitgliedern zusammen und nutzte Trello für die Aufgabenplanung und GitHub für die Versionskontrolle und Code-Reviews. Wir folgten einem agilen Workflow, hielten regelmäßige Stand-up-Meetings ab und kommunizierten aktiv, um uns über Funktionen, Bugs und UI/UX-Entscheidungen abzustimmen. Ich leistete sowohl individuelle als auch Teamarbeit und konzentrierte mich auf sauberen Code, gemeinsame Standards und hilfreiches Feedback bei Code-Reviews.',
        description: 'Projektmanagement-Tool'
      },
      elPoloLoco: {
        about: 'Jump-and-Run-Spiel...',
        workProcess: 'Ich habe das Spiel El Pollo Loco mit objektorientiertem JavaScript entwickelt und das Projekt in klare und wiederverwendbare Klassen wie Charakter, Feind, Welt, ThrowableObject und UIManager strukturiert. Eine zentrale Spielschleife verwaltete Updates und Animationen und implementierte Kollisionserkennung, Spielzustände und Audioverarbeitung sauber und ereignisgesteuert.',
        team: 'In diesem Projekt sammelte ich praktische Erfahrung mit objektorientierter Programmierung (OOP) und Vanilla JavaScript. Ich plante und strukturierte die Spiellogik mithilfe modularen Klassendesigns und implementierte zentrale Gameplay-Funktionen wie Bewegung, Springen, Gegnerverhalten, Item-Sammlung und Game-Over-Zustände. Außerdem kümmerte ich mich um Canvas-Rendering, Animations-Timing und Responsive Scaling, um einen reibungslosen Spielablauf auf allen Geräten sicherzustellen. Dieses Projekt stärkte mein Verständnis von Code-Architektur, Browser-Performance und Echtzeit-Benutzerinteraktion.',
        description: 'Browserbasiertes Spiel'
      }
    },
    
    //teamplayer
    teamplayerTitle: "Brauchen Sie einen Teamplayer? Das sagen meine Kollegen über mich",
    teamplayerMobileTitle: "Brauchen Sie einen Teamplayer ?",
    colleageMobileText: "Das sagen meine Kollegen über mich",
    projectLabel: "Projekt",
    linkedinProfile: "LinkedIn-Profil",

    views: {
      james: "Die Zusammenarbeit mit Shardzhil war großartig – er war konzentriert, zuverlässig und immer bereit, das Team zu unterstützen. Ein echter Teamplayer.",
      sahre: "Shardzhil spielte eine Schlüsselrolle bei der Entwicklung des DABubble-Projekts und leistete mit Zuverlässigkeit und Präzision sowohl zum Angular-Frontend als auch zum Firebase-Backend seinen Beitrag.",
      taher: "Shardzhil war stets zuverlässig, kommunizierte klar und brachte tolle Ideen ein. Ein starker Teamplayer, auf den man zählen kann."
    },

    // Contact Section
    contactTitle: "Kontakt",
    contactDescription: "Ich bin an freiberuflichen Möglichkeiten und interessanten Projekten interessiert. Zögern Sie nicht, mich bei Fragen oder einfach zum Austausch zu kontaktieren.",
    formNameLabel: "Ihr Name",
    formNameError: "Name ist erforderlich",
    formEmailLabel: "Ihre E-Mail",
    formEmailError: "Gültige E-Mail ist erforderlich",
    formMessageLabel: "Ihre Nachricht",
    formMessageError: "Bitte geben Sie eine Nachricht ein (mind. 4 Zeichen)",
    privacyText: "Ich habe die Datenschutzerklärung gelesen und stimme ihr zu.",
    privacyLink: "Datenschutzerklärung",
    privacyError: "Bitte akzeptieren Sie unsere Datenschutzerklärung",
    submitButton: "Nachricht senden",

    // Privacy Policy Component
    privacyPolicyTitle: "Datenschutzerklärung für meine Website",
    privacyPolicyIntro1: "Eines unserer Hauptanliegen auf meiner Website ist der Schutz der Privatsphäre unserer Besucher. Dieses Dokument zur Datenschutzerklärung enthält Informationen darüber, welche Arten von Daten von meiner Website erfasst und wie sie verwendet werden.",
    privacyPolicyIntro2: "Wenn Sie weitere Fragen haben oder mehr Informationen zu unserer Datenschutzerklärung benötigen, zögern Sie bitte nicht, uns zu kontaktieren.",
    privacyPolicyIntro3: "Diese Datenschutzerklärung gilt nur für unsere Online-Aktivitäten und ist für Besucher unserer Website in Bezug auf die Informationen gültig, die sie auf meiner Website geteilt und/oder gesammelt haben. Diese Richtlinie gilt nicht für Informationen, die offline oder über andere Kanäle als diese Website gesammelt werden.",
    privacyPolicyConsent: "Zustimmung",
    privacyPolicyConsentText: "Durch die Nutzung unserer Website erklären Sie sich damit einverstanden, unserer Datenschutzerklärung zuzustimmen und ihren Bedingungen zuzustimmen. Diese Datenschutzerklärung wurde mit dem Privacy Policy Generator erstellt, der unter https://www.privacypolicygenerator.info/ verfügbar ist.",
    informationWeCollectTitle: "Informationen, die wir sammeln",
    informationWeCollectText1: "Die persönlichen Informationen, die Sie angeben sollen, und die Gründe dafür werden Ihnen an dem Punkt klar gemacht, an dem wir Sie um Ihre persönlichen Daten bitten.",
    informationWeCollectText2: "Wenn Sie uns direkt kontaktieren, erhalten wir möglicherweise zusätzliche Informationen über Sie, wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, den Inhalt der Nachricht und/oder Anhänge, die Sie uns senden, sowie andere Informationen, die Sie uns freiwillig mitteilen.",
    informationWeCollectText3: "Wenn Sie ein Konto registrieren, können wir Sie nach Ihren Kontaktinformationen fragen, einschließlich Angaben wie Name, Firmenname, Adresse, E-Mail-Adresse und Telefonnummer.",
    howWeUseTitle: "Wie wir Ihre Informationen verwenden",
    howWeUseList1: "Bereitstellung, Betrieb und Wartung unserer Website",
    howWeUseList2: "Verbesserung, Personalisierung und Erweiterung unserer Website",
    howWeUseList3: "Verstehen und Analysieren, wie Sie unsere Website nutzen",
    howWeUseList4: "Entwicklung neuer Produkte, Dienstleistungen, Funktionen und Funktionalitäten",
    howWeUseList5: "Kommunikation mit Ihnen, entweder direkt oder über einen unserer Partner, einschließlich Kundendienst, um Ihnen Updates und andere Informationen in Bezug auf die Website zu liefern, sowie für Marketing- und Werbezwecke",
    howWeUseList6: "Ihnen E-Mails senden",
    howWeUseList7: "Betrug erkennen und verhindern",
    howWeUseList8: "Protokolldateien",
    logFilesTitle: "Protokolldateien",
    logFilesText: "Meine Website folgt einem Standardverfahren zur Verwendung von Protokolldateien. Diese Dateien protokollieren Besucher, wenn sie Websites besuchen. Alle Hosting-Unternehmen tun dies und es ist Teil der Analysen von Hosting-Diensten. Die von Protokolldateien erfassten Informationen umfassen Internetprotokoll (IP)-Adressen, Browsertyp, Internetdienstanbieter (ISP), Datums- und Zeitstempel, Verweis-/Ausstiegsseiten und möglicherweise die Anzahl der Klicks. Diese sind nicht mit Informationen verknüpft, die persönlich identifizierbar sind. Der Zweck der Informationen ist die Analyse von Trends, die Verwaltung der Website, die Verfolgung der Bewegungen der Benutzer auf der Website und die Erfassung demografischer Informationen.",
    cookiesTitle: "Cookies und Web Beacons",
    cookiesText: "Wie jede andere Website verwendet meine Website \"Cookies\". Diese Cookies werden verwendet, um Informationen zu speichern, einschließlich der Präferenzen der Besucher und der Seiten, die der Besucher auf der Website aufgerufen oder besucht hat. Die Informationen werden verwendet, um das Nutzererlebnis zu optimieren, indem wir den Inhalt unserer Webseite basierend auf dem Browsertyp der Besucher und/oder anderen Informationen anpassen.",
    doubleClickTitle: "DoubleClick DART Cookie",
    doubleClickText: "Google ist einer der Drittanbieter auf unserer Website. Es verwendet auch Cookies, bekannt als DART-Cookies, um Anzeigen für unsere Website-Besucher basierend auf ihrem Besuch auf www.website.com und anderen Websites im Internet zu schalten. Besucher können die Verwendung von DART-Cookies jedoch ablehnen, indem sie die Datenschutzrichtlinie des Google-Anzeigen- und Inhaltsnetzwerks unter der folgenden URL aufrufen: https://policies.google.com/technologies/ads",
    advertisingPartnersTitle: "Datenschutzrichtlinien der Werbepartner",
    advertisingPartnersText: "Sie können diese Liste konsultieren, um die Datenschutzrichtlinie für jeden der Werbepartner von Meine Website zu finden.",
    googlePolicy: "Google: https://policies.google.com/technologies/ads",
    thirdPartyPrivacyTitle: "Datenschutzrichtlinien von Drittanbietern",
    thirdPartyPrivacyText1: "Die Datenschutzrichtlinie von Meine Website gilt nicht für andere Werbetreibende oder Websites. Daher empfehlen wir Ihnen, die jeweiligen Datenschutzrichtlinien dieser Drittanbieter-Ad-Server für detailliertere Informationen zu konsultieren. Sie können ihre Praktiken und Anweisungen zum Opt-out aus bestimmten Optionen enthalten.",
    thirdPartyPrivacyText2: "Sie können Cookies über Ihre individuellen Browseroptionen deaktivieren. Detailliertere Informationen zur Verwaltung von Cookies mit bestimmten Webbrowsern finden Sie auf den jeweiligen Websites der Browser. Was sind Cookies?",
    ccpaTitle: "CCPA-Datenschutzrichtlinie (Meine persönlichen Daten nicht verkaufen)",
    ccpaList1: "Verlangen, dass ein Unternehmen, das die persönlichen Daten eines Verbrauchers sammelt, die Kategorien und spezifischen Teile der persönlichen Daten offenlegt, die das Unternehmen über Verbraucher gesammelt hat.",
    ccpaList2: "Verlangen, dass ein Unternehmen alle persönlichen Daten über den Verbraucher löscht, die das Unternehmen gesammelt hat.",
    ccpaList3: "Verlangen, dass ein Unternehmen, das die persönlichen Daten eines Verbrauchers verkauft, die persönlichen Daten des Verbrauchers nicht verkauft.",
    ccpaText: "Wenn Sie eine Anfrage stellen, haben wir einen Monat Zeit, um Ihnen zu antworten. Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte.",
    gdprTitle: "DSGVO-Datenschutzrichtlinie (Datenschutzrechte)",
    gdprList1: "Das Recht auf Zugang – Sie haben das Recht, Kopien Ihrer persönlichen Daten anzufordern. Wir können Ihnen eine kleine Gebühr für diesen Service berechnen.",
    gdprList2: "Das Recht auf Berichtigung – Sie haben das Recht zu verlangen, dass wir alle Informationen korrigieren, die Sie für unrichtig halten. Sie haben auch das Recht zu verlangen, dass wir Informationen vervollständigen, die Sie für unvollständig halten.",
    gdprList3: "Das Recht auf Löschung – Sie haben das Recht unter bestimmten Bedingungen zu verlangen, dass wir Ihre persönlichen Daten löschen.",
    gdprList4: "Das Recht auf Einschränkung der Verarbeitung – Sie haben das Recht unter bestimmten Bedingungen zu verlangen, dass wir die Verarbeitung Ihrer persönlichen Daten einschränken.",
    gdprList5: "Das Recht auf Widerspruch gegen die Verarbeitung – Sie haben das Recht unter bestimmten Bedingungen, der Verarbeitung Ihrer persönlichen Daten zu widersprechen.",
    gdprList6: "Das Recht auf Datenübertragbarkeit – Sie haben das Recht unter bestimmten Bedingungen zu verlangen, dass wir die von uns gesammelten Daten an eine andere Organisation oder direkt an Sie übertragen.",
    gdprText: "Wenn Sie eine Anfrage stellen, haben wir einen Monat Zeit, um Ihnen zu antworten. Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte.",
    childrenInfoTitle: "Informationen über Kinder",
    childrenInfoText1: "Ein weiterer Teil unserer Priorität ist der Schutz von Kindern bei der Nutzung des Internets. Wir ermutigen Eltern und Erziehungsberechtigte, die Online-Aktivitäten ihrer Kinder zu beobachten, daran teilzunehmen und/oder zu überwachen und zu leiten.",
    childrenInfoText2: "Meine Website sammelt wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Wenn Sie der Meinung sind, dass Ihr Kind diese Art von Informationen auf unserer Website bereitgestellt hat, empfehlen wir Ihnen dringend, uns umgehend zu kontaktieren, und wir werden uns bemühen, solche Informationen schnellstmöglich aus unseren Aufzeichnungen zu entfernen.",
    questionsTitle: "Fragen",
    privacyPolicyGenerator: "Datenschutzerklärungs-Generator",

    //impressum-component
    impressumTitle: "Impressum",
    legalNotice: "Angaben gemäß § 5 DDG",
    addressName: "Shardzhil Mukhammad",
    addressStreet: "Hans-Schulten Str 10",
    addressCity: "51109 Köln",
    representedBy: "Vertreten durch:",
    representedName: "Shardzhil Mukhammad",
    myContactTitle: "Kontakt:",
    phone: "Telefon: +49 15126015827",
    email: "E-Mail: shardzhil@gmail.com",
    vatTitle: "Umsatzsteuer-ID:",
    vatId: "Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Shardzhil",
    economicIdTitle: "Wirtschafts-ID:",
    economicId: "Shardzhil",
    generatorNote:
      "Impressum vom <a href=\"https://www.impressum-generator.de\">Impressum Generator</a> der <a href=\"https://www.kanzlei-hasselbach.de/standorte/bonn/\" rel=\"nofollow\">Kanzlei Hasselbach, Bonn</a>",
    
      formSuccessMessage: 'Deine Nachricht wurde erfolgreich gesendet!',

  }
};