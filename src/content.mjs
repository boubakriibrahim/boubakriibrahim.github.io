
export const identity = {
  name: "Ibrahim Boubakri",
  email: "ibrahimboubakri1@gmail.com",
  phone: "+1 (819) 992-2001",
  location: "Québec, QC, Canada",
  github: "https://github.com/boubakriibrahim",
  linkedin: "https://linkedin.com/in/ibrahimboubakri/",
  repo: "https://github.com/boubakriibrahim/PalletDataGenerator",
  pypi: "https://pypi.org/project/palletdatagenerator/"
};

export const media = {
  warehouse: "https://raw.githubusercontent.com/boubakriibrahim/PalletDataGenerator/main/readme_images/examples/warehouse_example_1.png",
  pallet: "https://raw.githubusercontent.com/boubakriibrahim/PalletDataGenerator/main/readme_images/examples/single_pallet_example_1.png"
};

export const ui = {
  en: {
    locale: "en_CA",
    navWork: "Work", navAbout: "About", navContact: "Contact",
    status: "Québec, Canada · Full-stack / backend / platform / DevOps",
    kicker: "Software engineering · Systems integration",
    hero: "Software from interface to infrastructure.",
    intro: "I build full-stack products and backend platforms, automate how they ship, and integrate AI where it creates concrete product value.",
    workKicker: "Selected work",
    workTitle: "Systems built across product, platform and operations.",
    workIntro: "Real engineering work spanning data and interfaces, service architecture, deployment, observability, AI integration and robotics.",
    capabilities: "Capabilities",
    capabilitiesTitle: "Depth grouped by what the system needs.",
    experience: "Experience",
    experienceTitle: "From web applications to platform and AI systems.",
    about: "Profile",
    aboutTitle: "A full-stack engineer with a systems mindset.",
    about1: "My work sits where product development, backend architecture and operations meet. I value clear service boundaries, explicit data flow, reproducible environments and software that remains observable after deployment.",
    about2: "Recent work adds AI/LLM integration and computer vision to that base without treating the model as the whole product. APIs, validation, execution state, deployment and failure handling matter just as much.",
    education: "Education", certifications: "Certifications & activities", languages: "Languages",
    contactKicker: "Contact",
    contactTitle: "Building something that needs real engineering depth?",
    contactBody: "Open to full-stack, backend, platform, DevOps and AI-integration opportunities in Québec, Canada and remote teams.",
    resume: "Download résumé", viewCase: "Read case study", publicRepo: "Public repository",
    source: "Project details are based on verified résumé content and public project material only.",
    context: "Context & problem", built: "What I built", decisions: "Engineering decisions", stack: "Stack",
    back: "Back to portfolio", next: "Next project",
    langSwitch: "FR"
  },
  fr: {
    locale: "fr_CA",
    navWork: "Projets", navAbout: "À propos", navContact: "Contact",
    status: "Québec, Canada · Full stack / backend / plateforme / DevOps",
    kicker: "Ingénierie logicielle · Intégration de systèmes",
    hero: "Du produit à l’infrastructure.",
    intro: "Je construis des produits full stack et des plateformes backend, j’automatise leur livraison et j’intègre l’IA lorsqu’elle crée une valeur produit concrète.",
    workKicker: "Projets sélectionnés",
    workTitle: "Des systèmes construits du produit jusqu’aux opérations.",
    workIntro: "Des travaux d’ingénierie réels couvrant données et interfaces, architecture de services, déploiement, observabilité, intégration IA et robotique.",
    capabilities: "Compétences",
    capabilitiesTitle: "Une expertise structurée autour des besoins du système.",
    experience: "Expérience",
    experienceTitle: "Des applications web aux plateformes et systèmes IA.",
    about: "Profil",
    aboutTitle: "Un développeur full stack avec une approche systèmes.",
    about1: "Mon travail se situe à l’intersection du développement produit, de l’architecture backend et des opérations. Je privilégie des frontières de services claires, des flux de données explicites, des environnements reproductibles et des logiciels observables après déploiement.",
    about2: "Mes travaux récents ajoutent l’intégration IA/LLM et la vision par ordinateur à cette base, sans traiter le modèle comme le produit entier. Les APIs, la validation, l’état d’exécution, le déploiement et la gestion des échecs comptent tout autant.",
    education: "Formation", certifications: "Certifications & activités", languages: "Langues",
    contactKicker: "Contact",
    contactTitle: "Un produit qui demande une vraie profondeur d’ingénierie ?",
    contactBody: "Ouvert aux opportunités full stack, backend, plateforme, DevOps et intégration IA au Québec, au Canada et en télétravail.",
    resume: "Télécharger le CV", viewCase: "Voir l’étude de cas", publicRepo: "Dépôt public",
    source: "Les détails des projets proviennent uniquement du CV et de sources publiques vérifiables.",
    context: "Contexte & problème", built: "Ce que j’ai construit", decisions: "Décisions d’ingénierie", stack: "Technologies",
    back: "Retour au portfolio", next: "Projet suivant",
    langSwitch: "EN"
  }
};

export const capabilities = [
  {
    n:"01",
    title:{en:"Full-Stack Product Development",fr:"Développement produit full stack"},
    desc:{en:"Responsive interfaces connected to backend APIs, authentication, data layers and real-time services.",fr:"Interfaces réactives reliées aux APIs backend, à l’authentification, aux couches de données et aux services temps réel."},
    tech:["React","Node.js","Python","FastAPI","REST","WebSocket"]
  },
  {
    n:"02",
    title:{en:"Backend & Software Architecture",fr:"Backend & architecture logicielle"},
    desc:{en:"Modular services, integration boundaries, asynchronous processing and maintainable API contracts.",fr:"Services modulaires, frontières d’intégration, traitements asynchrones et contrats API maintenables."},
    tech:["Python","FastAPI","SQL","MongoDB","Microservices","Linux"]
  },
  {
    n:"03",
    title:{en:"DevOps & Software Delivery",fr:"DevOps & livraison logicielle"},
    desc:{en:"Reproducible environments and delivery pipelines with testing, containers, diagnostics and observability.",fr:"Environnements reproductibles et pipelines de livraison avec tests, conteneurs, diagnostic et observabilité."},
    tech:["Docker","Kubernetes","GitLab CI/CD","Jenkins","GitHub Actions"]
  },
  {
    n:"04",
    title:{en:"AI / LLM Integration",fr:"Intégration IA / LLM"},
    desc:{en:"AI inside real workflows: retrieval, tool interfaces, response validation and provider boundaries.",fr:"IA intégrée aux workflows réels : retrieval, interfaces d’outils, validation des réponses et abstraction fournisseur."},
    tech:["RAG","MCP","Tool calling","Agentic workflows","PyTorch","OpenCV"]
  },
  {
    n:"05",
    title:{en:"Computer Vision & Robotics",fr:"Vision par ordinateur & robotique"},
    desc:{en:"Synthetic data, model training, simulation, real-time perception and edge robotics integration.",fr:"Données synthétiques, entraînement, simulation, perception temps réel et intégration robotique edge."},
    tech:["YOLO-Pose","CUDA","ROS 2","Blender","PyBullet","NVIDIA Jetson"]
  }
];

export const experience = [
  {
    period:{en:"Sep. 2024 — Present",fr:"Sept. 2024 — Aujourd’hui"},
    title:{en:"Full-Stack Developer · Architecture, DevOps & AI Integration",fr:"Développeur full stack · Architecture, DevOps & intégration IA"},
    org:"Modular AI Platform", place:{en:"Québec, QC, Canada / Remote",fr:"Québec, QC, Canada / Télétravail"},
    points:{
      en:["Backend and REST APIs for AI pipelines, structured files, metadata, logs and validation.","Service decoupling, asynchronous processing, execution tracking and observability.","Containerization, automated tests, GitLab CI/CD and production-minded diagnostics."],
      fr:["Backend et APIs REST pour pipelines IA, fichiers structurés, métadonnées, journaux et validation.","Découplage de services, traitements asynchrones, suivi d’exécution et observabilité.","Conteneurisation, tests automatisés, GitLab CI/CD et diagnostic orienté production."]
    }
  },
  {
    period:{en:"2024 — 2026",fr:"2024 — 2026"},
    title:{en:"Researcher · Computer Vision & Autonomous Robotics",fr:"Chercheur · Vision par ordinateur & robotique autonome"},
    org:"UQTR × Noovelia", place:{en:"Trois-Rivières, QC, Canada",fr:"Trois-Rivières, QC, Canada"},
    points:{
      en:["Synthetic-data generation, YOLO-Pose training and reproducible evaluation.","PyBullet simulation, ROS 2 integration and real-time edge deployment on NVIDIA Jetson."],
      fr:["Génération de données synthétiques, entraînement YOLO-Pose et évaluation reproductible.","Simulation PyBullet, intégration ROS 2 et déploiement edge temps réel sur NVIDIA Jetson."]
    }
  },
  {
    period:{en:"Nov. 2023 — Aug. 2024",fr:"Nov. 2023 — Août 2024"},
    title:{en:"Developer · DevOps & Automation",fr:"Développeur · DevOps & automatisation"},
    org:"PRIMATEC Engineering", place:{en:"Sfax, Tunisia",fr:"Sfax, Tunisie"},
    points:{
      en:["Python automation for validation, testing and quality-control workflows.","CI/CD, structured logging, technical diagnostics and maintainable internal tooling."],
      fr:["Automatisation Python pour validation, tests et contrôle qualité.","CI/CD, journalisation structurée, diagnostic technique et outils internes maintenables."]
    }
  },
  {
    period:{en:"Mar. — Aug. 2023",fr:"Mars — Août 2023"},
    title:{en:"Full-Stack Developer Intern · Web & Data",fr:"Développeur full stack stagiaire · Web & données"},
    org:"Hydrogen Research Institute", place:{en:"Trois-Rivières, QC, Canada",fr:"Trois-Rivières, QC, Canada"},
    points:{
      en:["Microservices web platform, MQTT ingestion and automated ETL.","React/Node services, MongoDB, Docker/Kubernetes and Jenkins delivery workflows."],
      fr:["Plateforme web en microservices, ingestion MQTT et ETL automatisé.","Services React/Node, MongoDB, Docker/Kubernetes et workflows Jenkins."]
    }
  }
];

export const education = [
  {
    period:"2024 — 2026",
    school:"Université du Québec à Trois-Rivières — UQTR",
    degree:{en:"Master's in Electrical Engineering, Computer Engineering Concentration",fr:"Maîtrise en génie électrique, concentration informatique"},
    place:{en:"Trois-Rivières, QC, Canada",fr:"Trois-Rivières, QC, Canada"}
  },
  {
    period:"2020 — 2023",
    school:"École Nationale des Sciences de l'Informatique — ENSI",
    degree:{en:"Engineering Degree in Computer Science",fr:"Diplôme d’ingénieur en informatique"},
    place:{en:"University of Manouba, Tunisia",fr:"Université de la Manouba, Tunisie"}
  }
];

export const certifications = {
  en:["DevOps Bootcamp — TechWorld with Nana","AWS Cloud Technical Essentials — Coursera","IBM DevOps and Software Engineering Professional Certificate — Coursera, in progress","Organizing team member for the ENSI Annual Forum, TuniHack, RoboCup and HackZone Tunisia."],
  fr:["DevOps Bootcamp — TechWorld with Nana","AWS Cloud Technical Essentials — Coursera","IBM DevOps and Software Engineering Professional Certificate — Coursera, en cours","Membre des équipes d’organisation du Forum annuel de l’ENSI, TuniHack, RoboCup et HackZone Tunisia."]
};

export const languages = {
  en:["Arabic — native","French — fluent","English — professional working proficiency"],
  fr:["Arabe — langue maternelle","Français — courant","Anglais — niveau professionnel"]
};

export const projects = [
  {
    slug:"perception-robotics", year:"2024—2026", image:"warehouse", public:true,
    eyebrow:{en:"Computer vision · Robotics",fr:"Vision par ordinateur · Robotique"},
    title:{en:"Industrial Perception & Robotics",fr:"Perception industrielle & robotique"},
    summary:{
      en:"An end-to-end industrial perception workflow spanning synthetic data, YOLO-Pose training, simulation, real-time services, ROS 2 integration and NVIDIA Jetson deployment.",
      fr:"Une chaîne de perception industrielle de bout en bout reliant données synthétiques, entraînement YOLO-Pose, simulation, services temps réel, intégration ROS 2 et déploiement NVIDIA Jetson."
    },
    role:{en:"Researcher · Computer Vision & Autonomous Robotics",fr:"Chercheur · Vision par ordinateur & robotique autonome"},
    org:"UQTR × Noovelia",
    tech:["Python","PyTorch","Ultralytics","YOLO-Pose","CUDA","Blender","PyBullet","ROS 2","FastAPI","WebSocket","React","NVIDIA Jetson"],
    context:{
      en:"Industrial pallet perception needs more than a model checkpoint. The engineering path had to connect data generation, training, inference, simulation and deployment while remaining reproducible enough to compare robustness and latency trade-offs.",
      fr:"La perception industrielle de palettes demande plus qu’un simple modèle. La chaîne devait relier génération de données, entraînement, inférence, simulation et déploiement tout en restant assez reproductible pour comparer robustesse et compromis de latence."
    },
    built:{
      en:["Built a Blender-based synthetic-data workflow with domain randomization and automatic annotations.","Trained, fine-tuned and benchmarked YOLO-Pose models with PyTorch, Ultralytics, CUDA and NVIDIA GPU infrastructure.","Connected generation, training, inference, PyBullet simulation, FastAPI/WebSocket services and React into one workflow.","Integrated perception with ROS 2 and an existing navigation pipeline, then validated real-time operation on NVIDIA Jetson."],
      fr:["Développé un pipeline de données synthétiques Blender avec randomisation de domaine et annotations automatiques.","Entraîné, ajusté et comparé des modèles YOLO-Pose avec PyTorch, Ultralytics, CUDA et une infrastructure GPU NVIDIA.","Relié génération, entraînement, inférence, simulation PyBullet, services FastAPI/WebSocket et React dans un même workflow.","Intégré la perception avec ROS 2 et une chaîne de navigation existante, puis validé le fonctionnement temps réel sur NVIDIA Jetson."]
    },
    decisions:{
      en:[["Synthetic data as infrastructure","The generator was treated as a reusable system rather than a one-off script, with configuration, export formats and debugging outputs."],["Reproducible evaluation","Model work was structured around robustness, generalization and performance/latency trade-offs rather than a single headline metric."],["Deployment in the loop","ROS 2 and edge deployment were part of the engineering path instead of being postponed until after model development."]],
      fr:[["Données synthétiques comme infrastructure","Le générateur a été conçu comme un système réutilisable plutôt qu’un script ponctuel, avec configuration, formats d’export et sorties de débogage."],["Évaluation reproductible","Le travail modèle a été structuré autour de la robustesse, de la généralisation et des compromis performance/latence plutôt que d’une métrique unique."],["Déploiement intégré au workflow","ROS 2 et le déploiement edge faisaient partie du chemin d’ingénierie au lieu d’être reportés après le développement du modèle."]]
    },
    flow:{en:["Synthetic data","YOLO-Pose","Inference","ROS 2","Jetson"],fr:["Données synthétiques","YOLO-Pose","Inférence","ROS 2","Jetson"]}
  },
  {
    slug:"modular-ai-platform", year:"2024—Now", private:true,
    eyebrow:{en:"Platform engineering · AI integration",fr:"Ingénierie plateforme · Intégration IA"},
    title:{en:"Modular AI Platform",fr:"Plateforme IA modulaire"},
    summary:{
      en:"A modular software platform for workflow orchestration, structured data, execution tracking and AI/LLM service integration, built around clear service boundaries and automated delivery.",
      fr:"Une plateforme logicielle modulaire pour l’orchestration, les données structurées, le suivi d’exécution et l’intégration de services IA/LLM, avec des frontières de services claires et une livraison automatisée."
    },
    role:{en:"Full-Stack Developer · Architecture, DevOps & AI Integration",fr:"Développeur full stack · Architecture, DevOps & intégration IA"},
    org:"Modular AI Platform",
    tech:["Python","FastAPI","REST APIs","SQL","Docker","GitLab CI/CD","PyTorch","OpenCV","RAG","MCP","Tool calling","Linux"],
    context:{
      en:"AI features become difficult to operate when model calls, file handling, validation and execution state are tightly coupled. The platform work focused on separating those concerns so workflows can evolve without destabilizing the rest of the product.",
      fr:"Les fonctions IA deviennent difficiles à exploiter lorsque appels modèles, fichiers, validation et état d’exécution sont fortement couplés. Le travail plateforme a séparé ces responsabilités pour faire évoluer les workflows sans déstabiliser le reste du produit."
    },
    built:{
      en:["Designed backend components and REST APIs around AI pipelines, structured files, metadata, execution logs and validation.","Helped decouple services so modules can evolve independently and remain easier to test and maintain.","Integrated AI models and services into reproducible workflows with explicit input, output, error and execution-state handling.","Implemented storage, progress tracking and asynchronous processing, reinforced by containers, automated tests and CI/CD."],
      fr:["Conçu des composants backend et APIs REST pour pipelines IA, fichiers structurés, métadonnées, journaux et validation.","Participé au découplage des services pour permettre aux modules d’évoluer indépendamment et rester plus simples à tester et maintenir.","Intégré modèles et services IA dans des workflows reproductibles avec gestion explicite des entrées, sorties, erreurs et états d’exécution.","Implémenté stockage, suivi d’avancement et traitements asynchrones, renforcés par conteneurs, tests automatisés et CI/CD."]
    },
    decisions:{
      en:[["Software boundaries before model novelty","Model providers and AI steps sit behind application contracts so the surrounding product is not tied to one provider."],["Execution state is product data","Inputs, outputs, errors, metadata and progress are explicit state that can be inspected and validated."],["Human review around agentic tooling","Coding assistants are used for analysis, refactoring, tests and documentation with human review and CI/CD validation."]],
      fr:[["Frontières logicielles avant nouveauté modèle","Les fournisseurs de modèles et étapes IA sont placés derrière des contrats applicatifs afin que le produit ne dépende pas d’un fournisseur unique."],["L’état d’exécution est une donnée produit","Entrées, sorties, erreurs, métadonnées et progression sont un état explicite, inspectable et validable."],["Revue humaine autour des outils agentiques","Les assistants de code servent à l’analyse, au refactoring, aux tests et à la documentation avec revue humaine et validation CI/CD."]]
    },
    flow:{en:["Inputs","API + validation","Orchestration","AI / tools","State + logs"],fr:["Entrées","API + validation","Orchestration","IA / outils","État + journaux"]}
  },
  {
    slug:"realtime-data-platform", year:"2023",
    eyebrow:{en:"Full-stack · Data systems",fr:"Full stack · Systèmes de données"},
    title:{en:"Real-Time Data Platform",fr:"Plateforme de données temps réel"},
    summary:{
      en:"A microservices-based web platform for collecting, transforming, storing and visualizing technical data streamed through MQTT.",
      fr:"Une plateforme web en microservices pour collecter, transformer, stocker et visualiser des données techniques diffusées via MQTT."
    },
    role:{en:"Full-Stack Developer Intern · Web Applications & Data",fr:"Développeur full stack stagiaire · Applications web & données"},
    org:"Hydrogen Research Institute",
    tech:["React","Node.js","MongoDB","Python","MQTT","Docker","Kubernetes","Jenkins"],
    context:{
      en:"Continuous technical data needs a reliable, observable path from ingestion to inspection. The platform combined real-time messaging, ETL, storage and visualization behind clear service boundaries.",
      fr:"Des données techniques continues ont besoin d’un chemin fiable et observable, de l’ingestion jusqu’à l’inspection. La plateforme combinait messagerie temps réel, ETL, stockage et visualisation derrière des frontières de services claires."
    },
    built:{
      en:["Designed and deployed a microservices web platform for real-time technical data.","Built frontend and backend services plus interfaces between platform components.","Implemented automated ETL pipelines to collect, transform and store MQTT data streams.","Containerized services and contributed to CI/CD, data modeling and architecture documentation."],
      fr:["Conçu et déployé une plateforme web en microservices pour des données techniques temps réel.","Développé les services frontend et backend ainsi que les interfaces entre composants.","Implémenté des pipelines ETL automatisés pour collecter, transformer et stocker les flux MQTT.","Conteneurisé les services et contribué au CI/CD, à la modélisation des données et à la documentation d’architecture."]
    },
    decisions:{
      en:[["Messaging decouples producers and consumers","MQTT separates acquisition from downstream transformation and visualization."],["Services stay deployable independently","Containerization supports repeatable environments and clearer runtime ownership."],["Data flow remains explicit","ETL, persistence and visualization remain separate concerns rather than one monolithic process."]],
      fr:[["La messagerie découple producteurs et consommateurs","MQTT sépare l’acquisition des traitements et de la visualisation en aval."],["Services déployables indépendamment","La conteneurisation favorise des environnements reproductibles et une séparation claire des responsabilités d’exécution."],["Flux de données explicite","ETL, persistance et visualisation restent des responsabilités distinctes plutôt qu’un processus monolithique."]]
    },
    flow:{en:["MQTT","ETL","Storage","API","React"],fr:["MQTT","ETL","Stockage","API","React"]}
  },
  {
    slug:"hackzone-tunisia-x", year:"2022",
    eyebrow:{en:"Infrastructure · Cybersecurity",fr:"Infrastructure · Cybersécurité"},
    title:{en:"HackZone Tunisia X",fr:"HackZone Tunisia X"},
    summary:{
      en:"Infrastructure and technical operations for a 24-hour capture-the-flag event with more than 100 teams and 300 participants.",
      fr:"Infrastructure et opérations techniques pour un CTF de 24 heures réunissant plus de 100 équipes et 300 participants."
    },
    role:{en:"Infrastructure & Cybersecurity",fr:"Infrastructure & cybersécurité"},
    org:"HackZone Tunisia X",
    tech:["Azure","Python","Kali Linux","Git","Docker","Web security"],
    context:{
      en:"A live CTF needs competition services to stay available while participants actively probe challenge environments. The work centered on infrastructure deployment, challenge preparation, monitoring and incident response.",
      fr:"Un CTF en direct doit maintenir les services disponibles pendant que les participants testent activement les environnements. Le travail portait sur le déploiement d’infrastructure, la préparation des défis, la supervision et la résolution d’incidents."
    },
    built:{
      en:["Helped organize a 24-hour event involving more than 100 teams and 300 participants.","Contributed to deployment of infrastructure used to host competition challenges and services.","Prepared challenges involving web vulnerabilities, Linux systems and reverse engineering.","Provided technical support, service monitoring and incident resolution throughout the event."],
      fr:["Participé à l’organisation d’un événement de 24 heures avec plus de 100 équipes et 300 participants.","Contribué au déploiement de l’infrastructure hébergeant les défis et services de compétition.","Préparé des défis autour des vulnérabilités web, systèmes Linux et rétro-ingénierie.","Assuré le support technique, la supervision et la résolution d’incidents pendant l’événement."]
    },
    decisions:{
      en:[["Availability under adversarial use","Monitoring and operational support were part of the event design, not an afterthought."],["Isolation and reproducibility","Containerized challenge environments help separate services and make recovery easier."],["Operate what you build","Infrastructure work included live troubleshooting under event pressure."]],
      fr:[["Disponibilité en contexte adversarial","La supervision et le support opérationnel faisaient partie de la conception de l’événement."],["Isolation et reproductibilité","Des environnements conteneurisés facilitent la séparation des services et leur remise en service."],["Exploiter ce que l’on construit","Le travail d’infrastructure incluait le diagnostic en direct sous la pression de l’événement."]]
    },
    flow:{en:["Challenges","Azure / Docker","Monitoring","Support","Participants"],fr:["Défis","Azure / Docker","Supervision","Support","Participants"]}
  }
];
