
const projectFilm = (slug, en, fr, caption = {
  en:"Project film. English narration with English and French captions.",
  fr:"Film du projet. Narration en anglais avec sous-titres anglais et français."
}) => ({
  src:`assets/projects/${slug}-film.mp4`,
  poster:`assets/projects/${slug}-film-poster.webp`,
  width:1920, height:1080,
  alt:{en:`Project film: ${en}`,fr:`Film du projet : ${fr}`},
  caption,
  tracks:[
    {src:`assets/projects/${slug}-film-en.vtt`,lang:"en",label:"English"},
    {src:`assets/projects/${slug}-film-fr.vtt`,lang:"fr",label:"Français"}
  ]
});

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

// Local previews and source credits are shared by the two language versions.
export const projectMedia = {
  "hackzone-tunisia-x": {
    src: "assets/projects/hackzone-x.webp", width: 1600, height: 611,
    alt: {en:"HackZone Tunisia X event banner, April 16, 2022",fr:"Bannière de HackZone Tunisia X, le 16 avril 2022"},
    caption: {en:"HackZone X event artwork · CSI ENSI",fr:"Visuel de l’événement HackZone X · CSI ENSI"},
    source: "https://www.tuniscope.com/article/329306/culture/evenements/rendez-vous-incontournable-de-la-cybersecurite-en-tunisie-074209"
  },
  "web-security-challenges": {
    src: "assets/projects/web-challenges.webp", width: 1600, height: 934,
    alt: {en:"ENSI and CSI web and network security training banner",fr:"Bannière de formation à la sécurité web et réseau de l’ENSI et du CSI"},
    caption: {en:"Original training banner from Web_Challenges",fr:"Bannière de formation originale du dépôt Web_Challenges"},
    source: "https://github.com/boubakriibrahim/Web_Challenges/blob/master/banner.png"
  },
  "ensi-cyber-range": {
    src: "assets/projects/ensi-cyber-range.webp", width: 1198, height: 800,
    alt: {en:"Cyber Range desktop interface with network discovery, target selection, scenario explanation and start/stop controls",fr:"Interface Cyber Range : découverte réseau, sélection des cibles, explication du scénario et commandes de démarrage et d’arrêt"},
    caption: {en:"Original application interface · ENSI academic team project",fr:"Interface originale de l’application · Projet académique en équipe à l’ENSI"},
    source: "https://github.com/boubakriibrahim/ENSI-Cyber-Range-App#interface"
  },
  "perception-robotics": {
    src: "assets/projects/perception-detections.webp", width: 1288, height: 968,
    alt: {en:"Four frames from the robot’s onboard camera at the partner’s facility, each showing a detected pallet: a bounding box labelled pallet and keypoints on the pallet’s front face.",fr:"Quatre images de la caméra embarquée du robot sur le site du partenaire, chacune avec une palette détectée : une boîte englobante étiquetée pallet et des points clés sur la face avant."},
    caption: {en:"Pallet detections from the robot’s onboard camera, partner test site",fr:"Détections de palettes par la caméra embarquée du robot, site d’essai du partenaire"}
  }
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
    workIntro: "Projects spanning data and interfaces, service architecture, deployment, observability, AI integration and robotics.",
    capabilities: "Capabilities",
    capabilitiesTitle: "Skills grouped by part of the system.",
    experience: "Experience",
    experienceTitle: "From web applications to platform and AI systems.",
    about: "Profile",
    aboutTitle: "A full-stack developer who thinks past the release.",
    about1: "My work sits where product development, backend architecture and operations meet. I value clear service boundaries, explicit data flow, reproducible environments and software that remains observable after deployment.",
    about2: "Recent work adds AI/LLM integration and computer vision to that base without treating the model as the whole product. APIs, validation, execution state, deployment and failure handling matter just as much.",
    education: "Education", certifications: "Certifications & activities", languages: "Languages",
    contactKicker: "Contact",
    contactTitle: "Hiring for a full-stack, backend or platform role?",
    contactBody: "Open to full-stack, backend, platform, DevOps and AI-integration opportunities in Québec, Canada and remote teams.",
    resume: "Download résumé", viewCase: "Read case study", publicRepo: "Public repository",
    source: "Project details are based on available project documentation and résumé information.",
    context: "Context & problem", built: "What I built", decisions: "Engineering decisions", stack: "Stack",
    diagram: "System diagram", diagramNote: "Simplified diagram: it shows the main components and flow, not every service.", viewDiagram: "View full diagram",
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
    workIntro: "Des projets couvrant données et interfaces, architecture de services, déploiement, observabilité, intégration IA et robotique.",
    capabilities: "Compétences",
    capabilitiesTitle: "Compétences regroupées par partie du système.",
    experience: "Expérience",
    experienceTitle: "Des applications web aux plateformes et systèmes IA.",
    about: "Profil",
    aboutTitle: "Un développeur full stack qui pense à l’après-livraison.",
    about1: "Mon travail se situe à l’intersection du développement produit, de l’architecture backend et des opérations. Je privilégie des frontières de services claires, des flux de données explicites, des environnements reproductibles et des logiciels observables après déploiement.",
    about2: "Mes travaux récents ajoutent l’intégration IA/LLM et la vision par ordinateur à cette base, sans traiter le modèle comme le produit entier. Les APIs, la validation, l’état d’exécution, le déploiement et la gestion des échecs comptent tout autant.",
    education: "Formation", certifications: "Certifications & activités", languages: "Langues",
    contactKicker: "Contact",
    contactTitle: "Vous recrutez en full stack, backend ou plateforme ?",
    contactBody: "Ouvert aux opportunités full stack, backend, plateforme, DevOps et intégration IA au Québec, au Canada et en télétravail.",
    resume: "Télécharger le CV", viewCase: "Voir l’étude de cas", publicRepo: "Dépôt public",
    source: "Les détails des projets s’appuient sur la documentation disponible et les informations du CV.",
    context: "Contexte & problème", built: "Ce que j’ai construit", decisions: "Décisions d’ingénierie", stack: "Technologies",
    diagram: "Schéma du système", diagramNote: "Schéma simplifié : il montre les principaux composants et le flux, pas chaque service.", viewDiagram: "Voir le schéma en grand",
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
    slug:"perception-robotics", year:"2024—2026",
    video:projectFilm("perception-robotics","Industrial Perception & Robotics","Perception industrielle et robotique"),
    repo:{name:"PalletDataGenerator",url:identity.repo},
    eyebrow:{en:"Computer vision · Robotics",fr:"Vision par ordinateur · Robotique"},
    title:{en:"Industrial Perception & Robotics",fr:"Perception industrielle & robotique"},
    summary:{
      en:"Pallet detection for autonomous industrial vehicles, trained mostly on synthetic Blender data and validated in closed loop: first in simulation, then on a robot with an onboard NVIDIA Jetson inside an existing ROS 2 navigation pipeline.",
      fr:"Détection de palettes pour véhicules industriels autonomes, entraînée surtout sur des données synthétiques Blender et validée en boucle fermée : d’abord en simulation, puis sur un robot doté d’un NVIDIA Jetson, dans une chaîne de navigation ROS 2 existante."
    },
    role:{en:"Researcher · Computer Vision & Autonomous Robotics",fr:"Chercheur · Vision par ordinateur & robotique autonome"},
    org:"UQTR × Noovelia",
    tech:["Python","PyTorch","Ultralytics","YOLO-Pose","CUDA","Blender","PyBullet","ROS 2","FastAPI","WebSocket","React","NVIDIA Jetson"],
    context:{
      en:"An autonomous industrial vehicle has to find a pallet and line up with its fork openings before it can pick it up. Training a detector for that usually takes a large set of real images labelled by hand with boxes and keypoints, and the work starts again at every new site. This master’s research at UQTR, with industrial partner Noovelia, measured how much of that labelling synthetic data can replace, and whether the result holds up on a real robot.",
      fr:"Un véhicule industriel autonome doit repérer une palette et s’aligner sur ses ouvertures de fourche avant de la prendre. Entraîner un détecteur pour cette tâche demande habituellement un large jeu d’images réelles annotées à la main avec boîtes et points clés, et tout recommence à chaque nouveau site. Cette recherche de maîtrise à l’UQTR, menée avec le partenaire industriel Noovelia, a mesuré dans quelle mesure les données synthétiques peuvent remplacer cette annotation, et si le résultat tient sur un vrai robot."
    },
    built:{
      en:["Built a Blender-based synthetic-data workflow with domain randomization and automatic annotations: pallet boxes, front-face keypoints, visibility flags and depth maps.","Trained, fine-tuned and benchmarked YOLOv8, YOLO11 and YOLO26-Pose models with PyTorch, Ultralytics and CUDA on NVIDIA GPU clusters.","Wrapped the detector in a perception API (FastAPI, WebSocket) and connected it to the partner’s PyBullet simulator and React dashboard for closed-loop tests.","Integrated perception with ROS 2 and the partner’s existing navigation pipeline, then validated real-time operation on an NVIDIA Jetson robot."],
      fr:["Développé un pipeline de données synthétiques Blender avec randomisation de domaine et annotations automatiques : boîtes des palettes, points clés sur la face avant, indicateurs de visibilité et cartes de profondeur.","Entraîné, ajusté et comparé des modèles YOLOv8, YOLO11 et YOLO26-Pose avec PyTorch, Ultralytics et CUDA sur des grappes GPU NVIDIA.","Encapsulé le détecteur dans une API de perception (FastAPI, WebSocket) et relié celle-ci au simulateur PyBullet et au tableau de bord React du partenaire pour les essais en boucle fermée.","Intégré la perception avec ROS 2 et la chaîne de navigation existante du partenaire, puis validé le fonctionnement temps réel sur un robot NVIDIA Jetson."]
    },
    decisions:{
      en:[["Synthetic data as infrastructure","The generator was treated as a reusable system rather than a one-off script, with configuration, export formats and debugging outputs."],["Reproducible evaluation","Model work was structured around robustness, generalization and performance/latency trade-offs rather than a single headline metric."],["Deployment in the loop","ROS 2 and edge deployment were part of the engineering path instead of being postponed until after model development."],["Keypoints, not just boxes","Keypoints on the pallet’s front face give the navigation stack the pallet’s orientation, so the vehicle can line up with the fork openings instead of only the pallet’s outline."]],
      fr:[["Données synthétiques comme infrastructure","Le générateur a été conçu comme un système réutilisable plutôt qu’un script ponctuel, avec configuration, formats d’export et sorties de débogage."],["Évaluation reproductible","Le travail modèle a été structuré autour de la robustesse, de la généralisation et des compromis performance/latence plutôt que d’une métrique unique."],["Déploiement intégré au workflow","ROS 2 et le déploiement edge faisaient partie du chemin d’ingénierie au lieu d’être reportés après le développement du modèle."],["Des points clés, pas seulement des boîtes","Des points clés sur la face avant donnent à la navigation l’orientation de la palette : le véhicule peut s’aligner sur les ouvertures de fourche, et pas seulement sur le contour de la palette."]]
    },
    // The case study tells the pipeline as a story; figures come from the master's thesis.
    story:{
      label:{en:"From synthetic data to the robot",fr:"Des données synthétiques au robot"},
      steps:[
        {
          title:{en:"Generate labelled scenes",fr:"Générer des scènes annotées"},
          text:{
            en:"A Python script drives Blender to build warehouse scenes with pallets of several sizes and wood finishes, racks, loads and distractors. Camera pose and distance, lighting, occlusion and background are randomized for every image. Because the scene is known, every render comes labelled: pallet boxes, keypoints on the front face, a visibility flag per keypoint, a depth map and scene metadata, exported in YOLO format. Several independent sets were generated at different volumes.",
            fr:"Un script Python pilote Blender pour construire des scènes d’entrepôt : palettes de plusieurs formats et finitions de bois, racks, charges et objets parasites. Pose et distance de la caméra, éclairage, occlusion et arrière-plan varient à chaque image. Comme la scène est connue, chaque rendu sort annoté : boîtes des palettes, points clés sur la face avant, un indicateur de visibilité par point, une carte de profondeur et des métadonnées de scène, exportés au format YOLO. Plusieurs jeux indépendants ont été générés à différents volumes."
          },
          image:{src:"assets/projects/perception-synthetic.webp",width:816,height:612,
            alt:{en:"Synthetic Blender renders of pallets under different loads, lighting and occlusion, each with automatic bounding boxes and labelled front-face keypoints.",fr:"Rendus Blender synthétiques de palettes avec différentes charges, éclairages et occlusions, chacun avec boîtes englobantes et points clés de face avant générés automatiquement."},
            caption:{en:"Synthetic renders with automatic boxes and keypoints",fr:"Rendus synthétiques avec boîtes et points clés automatiques"}}
        },
        {
          title:{en:"Label a small real set",fr:"Annoter un petit jeu réel"},
          text:{
            en:"Independent real sites, a warehouse store and the partner’s facility, supplied a small annotated set. It was labelled by hand with the same keypoint convention and split into training, validation and test sets, with rules that keep test images out of every training run.",
            fr:"Des sites réels indépendants, un magasin-entrepôt et l’installation du partenaire, ont fourni un petit jeu annoté. Il a été annoté à la main avec la même convention de points clés, puis réparti entre entraînement, validation et test, avec des règles qui excluent les images de test de tout entraînement."
          }
        },
        {
          title:{en:"Train in two stages",fr:"Entraîner en deux étapes"},
          text:{
            en:"Every model starts from COCO weights, pre-trains on a synthetic set, then fine-tunes on a growing fraction of the real training images. Several synthetic volumes and real fractions were compared per model. YOLOv8, YOLO11 and YOLO26-Pose were compared from Nano to Extra-Large on the H100 and A100 GPU clusters of the Digital Research Alliance of Canada.",
            fr:"Chaque modèle part des poids COCO, se préentraîne sur un jeu synthétique, puis s’ajuste sur une fraction croissante des images réelles d’entraînement. Plusieurs volumes synthétiques et fractions réelles ont été comparés par modèle. YOLOv8, YOLO11 et YOLO26-Pose ont été comparés de Nano à Extra-Large sur les grappes GPU H100 et A100 de l’Alliance de recherche numérique du Canada."
          }
        },
        {
          title:{en:"Measure what transfers",fr:"Mesurer ce qui se transfère"},
          text:{
            en:"Detection quality, pose quality and latency were measured on held-out real images, and each test image was also classed by its hardest condition: occlusion, low light, extreme angle or clutter. On the store’s test set, synthetic pre-training kept detection and pose quality high from a small annotated real set, while real-only training lagged behind. Extra synthetic data eventually stopped paying off, and extra real data beyond a point added little.",
            fr:"Qualité de détection, qualité de pose et latence ont été mesurées sur des images réelles mises de côté, et chaque image de test a été classée selon sa condition la plus difficile : occlusion, faible éclairage, angle extrême ou encombrement. Sur le jeu de test du magasin, le préentraînement synthétique a maintenu une bonne qualité de détection et de pose à partir d’un petit jeu réel annoté, alors que l’entraînement sur données réelles seules restait en retrait. Les données synthétiques supplémentaires finissent par ne plus aider, et les données réelles au-delà d’un certain point ajoutent peu."
          }
        },
        {
          title:{en:"Close the loop in simulation",fr:"Boucler en simulation"},
          text:{
            en:"A perception API wraps the detector and sends boxes and keypoints to the partner’s existing navigation stack. In the partner’s PyBullet simulator, the vehicle approaches each pallet and stops at a target point centred on the fork openings, where the lateral offset, angle and depth errors are logged with the detection loss rate.",
            fr:"Une API de perception encapsule le détecteur et envoie boîtes et points clés à la pile de navigation existante du partenaire. Dans le simulateur PyBullet du partenaire, le véhicule s’approche de chaque palette et s’arrête à un point cible centré sur les ouvertures de fourche, où l’on enregistre l’écart latéral, l’angle, l’erreur de profondeur et le taux de perte de détection."
          },
          image:{src:"assets/projects/perception-pybullet.webp",width:1230,height:732,
            alt:{en:"PyBullet simulator: the onboard camera view with a map, its depth view, and a scene with a forklift approaching pallets.",fr:"Simulateur PyBullet : vue de la caméra embarquée avec une carte, sa vue de profondeur et une scène où un chariot élévateur s’approche de palettes."},
            caption:{en:"The partner’s PyBullet test simulator, used for closed-loop approach tests",fr:"Le simulateur PyBullet du partenaire, utilisé pour les essais d’approche en boucle fermée"}}
        },
        {
          title:{en:"Validate on the robot",fr:"Valider sur le robot"},
          text:{
            en:"On a ROSMASTER M3 Pro with an onboard NVIDIA Jetson and a monocular RGB camera, the Nano models ran in real time inside the ROS 2 control loop, over a set of approach trials. Against real-only training, synthetic pre-training reduced lateral misalignment at the target point and lowered the detection loss rate. The trials cover the approach up to the stop in front of the pallet, not fork insertion. The image at the top of this page shows detections from the robot’s camera.",
            fr:"Sur un ROSMASTER M3 Pro doté d’un NVIDIA Jetson embarqué et d’une caméra RGB monoculaire, les modèles Nano ont tourné en temps réel dans la boucle de contrôle ROS 2, sur un ensemble d’essais d’approche. Par rapport à l’entraînement sur données réelles seules, le préentraînement synthétique a réduit le désalignement latéral au point cible et le taux de perte de détection. Les essais couvrent l’approche jusqu’à l’arrêt devant la palette, sans insertion des fourches. L’image en haut de page montre des détections de la caméra du robot."
          }
        }
      ]
    },
    diagram:{
      src:{en:"assets/projects/perception-robotics-diagram-en.png",fr:"assets/projects/perception-robotics-diagram-fr.png"},
      alt:{
        en:"Architecture diagram: Blender generates synthetic images with automatic annotations for YOLO-Pose training with PyTorch, Ultralytics and CUDA. The trained model runs in an inference service built with FastAPI and WebSocket, which sends detections to ROS 2 and an existing navigation pipeline. PyBullet simulation and a React web interface connect to the inference service, and real-time operation was validated on an NVIDIA Jetson.",
        fr:"Schéma d’architecture : Blender génère des images synthétiques annotées automatiquement pour l’entraînement YOLO-Pose avec PyTorch, Ultralytics et CUDA. Le modèle entraîné s’exécute dans un service d’inférence FastAPI et WebSocket, qui transmet les détections à ROS 2 et à une chaîne de navigation existante. La simulation PyBullet et une interface web React se connectent au service d’inférence, et le fonctionnement temps réel a été validé sur un NVIDIA Jetson."
      }
    }
  },
  {
    slug:"service-desk", year:"2026",
    repo:{name:"service-desk",url:"https://github.com/boubakriibrahim/service-desk"},
    card:{src:"assets/projects/service-desk-poster.webp",width:1600,height:900,alt:{en:"Opening frame of the Service Desk launch film: the model suggests, the app checks, a person approves.",fr:"Image d’ouverture du film de lancement de Service Desk : le modèle propose, l’application vérifie, une personne approuve."}},
    video:{
      src:"assets/projects/service-desk-film.mp4",
      poster:"assets/projects/service-desk-film-poster.webp",
      width:1920, height:1080,
      caption:{en:"Launch film · 1:18. A walkthrough of suggestions, application checks and human approval.",fr:"Film de lancement · 1:18. Un aperçu des propositions, des contrôles applicatifs et de la validation humaine."},
      alt:{en:"Service Desk launch film: the model suggests, the app checks, a person approves.",fr:"Film de lancement de Service Desk : le modèle propose, l’application vérifie, une personne approuve."}
    },
    eyebrow:{en:"Full stack · Guarded AI workflow",fr:"Full stack · Workflow IA encadré"},
    title:{en:"Service Desk",fr:"Service Desk"},
    summary:{
      en:"An AI-assisted tool for field service teams. It gathers the manuals, bulletins, service history and parts a case needs, drafts a sourced escalation brief, and never writes a work order without a person's approval.",
      fr:"Un outil assisté par IA pour les équipes techniques terrain. Il rassemble les manuels, bulletins, historiques et pièces utiles à un dossier, rédige un rapport d’escalade sourcé et ne crée jamais d’ordre de travail sans l’approbation d’une personne."
    },
    role:{en:"Designer and developer",fr:"Conception et développement"},
    org:{en:"Personal project",fr:"Projet personnel"},
    tech:["Next.js","React","TypeScript","FastAPI","PostgreSQL","pgvector","LangGraph","Laya","Docker Compose"],
    context:{
      en:"When a packaging line stops for the third time in a month, the engineer needs the service manual, the firmware bulletin, the maintenance agreement, the service history and the parts stock. Service Desk turns one request into a reviewable escalation brief without letting a model decide permissions or act on its own.",
      fr:"Quand une ligne de conditionnement s’arrête pour la troisième fois en un mois, l’ingénieur a besoin du manuel, du bulletin de micrologiciel, du contrat de maintenance, de l’historique et du stock de pièces. Service Desk transforme une demande en un rapport d’escalade vérifiable, sans laisser un modèle décider des droits ni agir seul."
    },
    built:{
      en:[
        "Runs each investigation as a LangGraph pipeline: request guard, permitted retrieval, operations data, decision signals, model routing, brief and work-order proposal.",
        "Screens requests with a local guard model (Laya) for jailbreaks, prompt injection, policy evasion and data exfiltration before anything is searched.",
        "Retrieves only the documents the signed-in user may read, combining pgvector similarity with PostgreSQL full-text search through reciprocal rank fusion.",
        "Checks every citation in the brief against the passages actually retrieved and removes anything unsupported.",
        "Routes the report only to a model endpoint cleared for the most sensitive passage in the evidence.",
        "Locks work orders behind approval: the API checks the case has not changed, writes the work order and records an audit event."
      ],
      fr:[
        "Exécute chaque enquête comme un pipeline LangGraph : vérification de la demande, recherche autorisée, données d’exploitation, signaux de décision, routage du modèle, rapport et proposition d’ordre de travail.",
        "Filtre les demandes avec un modèle de garde local (Laya) : jailbreaks, injection de consignes, contournement de politique et exfiltration de données, avant toute recherche.",
        "Ne récupère que les documents que la personne connectée peut lire, en combinant la similarité pgvector et la recherche plein texte PostgreSQL par fusion de rangs réciproque.",
        "Vérifie chaque citation du rapport par rapport aux passages réellement récupérés et retire tout ce qui n’est pas étayé.",
        "N’achemine le rapport que vers un point de terminaison de modèle autorisé pour le passage le plus sensible du dossier.",
        "Réserve les ordres de travail à une approbation : l’API vérifie que le dossier n’a pas changé, écrit l’ordre de travail et consigne un événement d’audit."
      ]
    },
    decisions:{
      en:[
        ["Permissions stay in the API","Access is enforced on every list, read, search and approval; the model never decides who can see what."],
        ["People approve the writes","A model may propose a work order, but an approver executes it, so the system cannot act on its own."],
        ["The guard runs before generation","A request that fails the local check never reaches retrieval or the writing model."],
        ["Claims stay traceable","Each citation is checked against retrieved passages, and the report goes only to a model endpoint cleared for the evidence."]
      ],
      fr:[
        ["Les droits restent dans l’API","L’accès est vérifié sur chaque liste, lecture, recherche et approbation ; le modèle ne décide jamais qui peut voir quoi."],
        ["Des personnes approuvent les écritures","Un modèle peut proposer un ordre de travail, mais un approbateur l’exécute : le système ne peut pas agir seul."],
        ["La garde s’exécute avant la génération","Une demande qui échoue au contrôle local n’atteint jamais la recherche ni le modèle de rédaction."],
        ["Des affirmations traçables","Chaque citation est vérifiée par rapport aux passages récupérés, et le rapport n’est envoyé qu’à un point de terminaison autorisé pour ces éléments."]
      ]
    },
    flow:{en:["Request guard","Permitted retrieval","Operations data","Brief + citations","Human approval"],fr:["Vérification","Recherche autorisée","Données d’exploitation","Rapport + citations","Approbation humaine"]},
    flowLabel:{en:"Investigation flow",fr:"Parcours d’enquête"},
    diagram:{
      src:{en:"assets/projects/service-desk-diagram-en.png",fr:"assets/projects/service-desk-diagram-fr.png"},
      alt:{
        en:"Workflow diagram: a service request first passes a local guard model, Laya; a request that fails is stopped before retrieval or any model. Permitted retrieval searches PostgreSQL with pgvector and full-text search, then the pipeline adds operations data, routes to a cleared model endpoint and drafts an escalation brief with checked citations. A person approves the proposed work order, and the work-order API re-checks the case, writes the order and records an audit event.",
        fr:"Schéma de workflow : une demande de service passe d’abord par un modèle de garde local, Laya ; une demande refusée est arrêtée avant toute recherche ou tout modèle. La recherche autorisée interroge PostgreSQL avec pgvector et la recherche plein texte, puis le pipeline ajoute les données d’exploitation, choisit un point de terminaison de modèle autorisé et rédige un rapport d’escalade aux citations vérifiées. Une personne approuve l’ordre de travail proposé, et l’API revérifie le dossier, écrit l’ordre et consigne un événement d’audit."
      }
    }
  },
  {
    slug:"modular-ai-platform", year:{en:"2024—Present",fr:"2024—Aujourd’hui"}, private:true,
    video:projectFilm("modular-ai-platform","Modular AI Platform architecture","Architecture de la plateforme IA modulaire"),
    eyebrow:{en:"Platform engineering · AI integration",fr:"Ingénierie plateforme · Intégration IA"},
    title:{en:"Modular AI Platform",fr:"Plateforme IA modulaire"},
    summary:{
      en:"A modular computer-vision platform: annotation, model training, visual workflows on live camera streams and a control-plane API that coordinates them, built around clear service boundaries and automated delivery.",
      fr:"Une plateforme modulaire de vision par ordinateur : annotation, entraînement de modèles, workflows visuels sur flux caméra en direct et une API de contrôle qui les coordonne, avec des frontières de services claires et une livraison automatisée."
    },
    role:{en:"Full-Stack Developer · Architecture, DevOps & AI Integration",fr:"Développeur full stack · Architecture, DevOps & intégration IA"},
    org:"Modular AI Platform",
    tech:["Python","FastAPI","PyTorch","OpenCV","Node.js","Express","TypeScript","React","Go","REST APIs","MongoDB","Redis","S3 storage","RTSP / WebRTC","Docker","Nginx","GitLab CI/CD","Linux"],
    context:{
      en:"AI features become difficult to operate when model calls, file handling, validation and execution state are tightly coupled. The platform work focused on separating those concerns so workflows can evolve without destabilizing the rest of the product.",
      fr:"Les fonctions IA deviennent difficiles à exploiter lorsque appels modèles, fichiers, validation et état d’exécution sont fortement couplés. Le travail plateforme a séparé ces responsabilités pour faire évoluer les workflows sans déstabiliser le reste du produit."
    },
    built:{
      en:["Designed backend components and REST APIs around AI pipelines, structured files, metadata, execution logs and validation.","Helped decouple services so modules can evolve independently and remain easier to test and maintain.","Integrated AI models and services into reproducible workflows with explicit input, output, error and execution-state handling.","Implemented storage, progress tracking and asynchronous processing, reinforced by containers, automated tests and CI/CD."],
      fr:["Conçu des composants backend et APIs REST pour pipelines IA, fichiers structurés, métadonnées, journaux et validation.","Participé au découplage des services pour permettre aux modules d’évoluer indépendamment et rester plus simples à tester et maintenir.","Intégré modèles et services IA dans des workflows reproductibles avec gestion explicite des entrées, sorties, erreurs et états d’exécution.","Implémenté stockage, suivi d’avancement et traitements asynchrones, renforcés par conteneurs, tests automatisés et CI/CD."]
    },
    decisions:{
      en:[["Software boundaries before model novelty","Model providers and AI steps sit behind application contracts so the surrounding product is not tied to one provider."],["Execution state is product data","Inputs, outputs, errors, metadata and progress are explicit state that can be inspected and validated."],["Human review around agentic tooling","Coding assistants are used for analysis, refactoring, tests and documentation with human review and CI/CD validation."],["The control plane owns state","Training workers pull jobs from the API’s queue, claim them and send heartbeats, so the API stays the single source of truth for jobs, datasets and models."],["Models ship as plugins","Vision models are packaged as plugins in a shared directory, so annotation and training load new models without rebuilding either service."],["One worker per workflow","Each visual workflow is a graph of nodes that runs in its own worker process; a failing node retries with backoff without stopping other workflows."]],
      fr:[["Frontières logicielles avant nouveauté modèle","Les fournisseurs de modèles et étapes IA sont placés derrière des contrats applicatifs afin que le produit ne dépende pas d’un fournisseur unique."],["L’état d’exécution est une donnée produit","Entrées, sorties, erreurs, métadonnées et progression sont un état explicite, inspectable et validable."],["Revue humaine autour des outils agentiques","Les assistants de code servent à l’analyse, au refactoring, aux tests et à la documentation avec revue humaine et validation CI/CD."],["Le plan de contrôle détient l’état","Les workers d’entraînement récupèrent les tâches dans la file de l’API, les réservent et envoient des heartbeats : l’API reste la seule source de vérité pour les tâches, les jeux de données et les modèles."],["Des modèles livrés en plugins","Les modèles de vision sont empaquetés en plugins dans un dossier partagé : l’annotation et l’entraînement chargent de nouveaux modèles sans reconstruire ces services."],["Un worker par workflow","Chaque workflow visuel est un graphe de nœuds exécuté dans son propre processus ; un nœud en échec réessaie avec un délai croissant sans arrêter les autres workflows."]]
    },
    flow:{en:["Datasets + sensors","Annotation","Training","Models","Workflows on live streams"],fr:["Jeux de données + capteurs","Annotation","Entraînement","Modèles","Workflows sur flux en direct"]},
    flowLabel:{en:"Model lifecycle",fr:"Cycle de vie des modèles"},
    // Card and hero loop rendered from the same Archify source; "-dark" files are the dark-theme versions.
    motion:{width:1600,height:1000,
      video:{en:"assets/projects/modular-ai-platform-loop-en.mp4",fr:"assets/projects/modular-ai-platform-loop-fr.mp4"},
      poster:{en:"assets/projects/modular-ai-platform-loop-en.webp",fr:"assets/projects/modular-ai-platform-loop-fr.webp"}
    },
    diagram:{
      src:{en:"assets/projects/modular-ai-platform-diagram-en.png",fr:"assets/projects/modular-ai-platform-diagram-fr.png"},
      alt:{
        en:"Architecture diagram: a React web app reaches the platform through an Nginx gateway. A Node.js control-plane API manages projects, datasets, jobs and models, stores them in MongoDB, Redis and S3 storage, proxies the annotation service (FastAPI, SAM 2, GroundingDINO) and deploys workflows. Training workers (FastAPI, PyTorch) poll the API for jobs and send heartbeats, and model plugins load into annotation and training. Cameras and robots stream through a Go sensor manager to a media relay (RTSP, HLS, WebRTC) whose frames feed the workflow runtime, where each workflow runs in its own worker.",
        fr:"Schéma d’architecture : une application web React accède à la plateforme par une passerelle Nginx. Une API de contrôle Node.js gère projets, jeux de données, tâches et modèles, les stocke dans MongoDB, Redis et un stockage S3, relaie le service d’annotation (FastAPI, SAM 2, GroundingDINO) et déploie les workflows. Les workers d’entraînement (FastAPI, PyTorch) interrogent l’API pour obtenir des tâches et envoient des heartbeats, et les plugins de modèles se chargent dans l’annotation et l’entraînement. Caméras et robots diffusent via un gestionnaire de capteurs en Go vers un relais média (RTSP, HLS, WebRTC) dont les images alimentent le moteur de workflows, où chaque workflow s’exécute dans son propre worker."
      }
    }
  },
  {
    slug:"realtime-data-platform", year:"2023", private:true,
    video:projectFilm("realtime-data-platform","Real-Time Hydrogen Data Platform","Plateforme de données hydrogène en temps réel",{
      en:"Local demonstration with synthetic MQTT data. Original station, source-configuration and live-chart screens; architecture anonymized. The local run uses compatibility shims. English narration; English and French captions.",
      fr:"Démonstration locale avec données MQTT synthétiques. Écrans d’origine de la station, de la configuration de la source et des graphiques en direct ; architecture anonymisée. L’exécution locale utilise des adaptations de compatibilité. Narration anglaise ; sous-titres anglais et français."
    }),
    eyebrow:{en:"Full-stack · Hydrogen data",fr:"Full stack · Données hydrogène"},
    title:{en:"Real-Time Hydrogen Data Platform",fr:"Plateforme de données hydrogène en temps réel"},
    summary:{
      en:"A React and Node.js platform for hydrogen station records, live MQTT storage charts and spreadsheet reports, with separate Python services.",
      fr:"Une plateforme React et Node.js pour les fiches de stations d’hydrogène, les graphiques MQTT en direct et les rapports tabulaires, avec des services Python."
    },
    role:{en:"Full-Stack Developer Intern · Web Applications & Data",fr:"Développeur full stack stagiaire · Applications web & données"},
    org:"Hydrogen Research Institute",
    tech:["React","Node.js","Express","Socket.IO","MongoDB","Python","Flask","pandas","MQTT","Docker","Kubernetes","Jenkins"],
    context:{
      en:"Hydrogen station data arrived through two different paths: live MQTT messages and spreadsheet reports. The web interface needed to display both, manage station records and call Python analysis tools. A Node.js API handled application records in MongoDB, while a separate messaging bridge connected MQTT to the browser.",
      fr:"Les données des stations d’hydrogène arrivaient par deux chemins distincts : messages MQTT en direct et rapports sous forme de feuilles de calcul. L’interface web devait afficher les deux, gérer les fiches des stations et appeler des outils d’analyse Python. Une API Node.js gérait les données applicatives dans MongoDB, tandis qu’une passerelle de messagerie distincte reliait MQTT au navigateur."
    },
    built:{
      en:["Developed React interfaces and Express APIs for station records, source configuration and technical data.","Connected MQTT messages to live charts through a separate Node.js and Socket.IO bridge.","Built Python processing for spreadsheet reports, including time series and weekly summaries.","Integrated separate Python tools for vehicle simulation and product recommendations.","Containerized services and contributed data models, architecture documentation and Jenkins/Kubernetes configuration."],
      fr:["Développé des interfaces React et des API Express pour les fiches des stations, la configuration des sources et les données techniques.","Relié les messages MQTT aux graphiques en direct par une passerelle Node.js et Socket.IO distincte.","Développé le traitement Python de rapports tabulaires, dont les séries temporelles et les synthèses hebdomadaires.","Intégré des outils Python distincts pour la simulation de véhicules et la recommandation de produits.","Conteneurisé les services et contribué aux modèles de données, à la documentation d’architecture et aux configurations Jenkins/Kubernetes."]
    },
    decisions:{
      en:[["Two ingestion paths","MQTT messages reach the browser through Socket.IO. A separate Python processor turns spreadsheets into JSON reports; importing that output into application records is a separate step."],["Application state has its own API","Express and MongoDB manage station records and configured sources. The live bridge reads that configuration; the inspected version forwards messages without saving each update to the database."],["Python tools sit behind service interfaces","Flask services separate spreadsheet processing, vehicle simulation and recommendation work from the web API. Dockerfiles package the components; Jenkins and Kubernetes files describe build and deployment configuration."]],
      fr:[["Deux chemins d’ingestion","Les messages MQTT atteignent le navigateur via Socket.IO. Un traitement Python distinct transforme les feuilles de calcul en rapports JSON ; l’import de ces résultats dans les données applicatives constitue une étape séparée."],["L’état applicatif dispose de sa propre API","Express et MongoDB gèrent les fiches des stations et les sources configurées. La passerelle en direct lit cette configuration ; la version inspectée transmet les messages sans enregistrer chaque mise à jour en base."],["Des outils Python derrière des interfaces de services","Les services Flask séparent le traitement tabulaire, la simulation de véhicules et la recommandation de l’API web. Des Dockerfiles empaquettent les composants ; les fichiers Jenkins et Kubernetes décrivent la configuration de compilation et de déploiement."]]
    },
    flow:{en:["MQTT messages","Node.js bridge","Socket.IO events","React live charts"],fr:["Messages MQTT","Passerelle Node.js","Événements Socket.IO","Graphiques React en direct"]},
    flowLabel:{en:"Live message path",fr:"Chemin des messages en direct"},
    // The homepage card shows the real interface; the motion loop stays on the case-study hero.
    homeCard:{src:"assets/projects/realtime-data-platform-station.webp",width:1600,height:1000,alt:{
      en:"Station record and live high- and medium-pressure hydrogen storage charts from a local demonstration with synthetic MQTT data",
      fr:"Fiche de station et graphiques en direct du stockage d’hydrogène à haute et moyenne pression, issus d’une démonstration locale avec données MQTT synthétiques"
    }},
    // Case-study hero loop rendered from the Archify source; "-dark" files are the dark-theme versions.
    motion:{width:1600,height:1000,
      video:{en:"assets/projects/realtime-data-platform-loop-en.mp4",fr:"assets/projects/realtime-data-platform-loop-fr.mp4"},
      poster:{en:"assets/projects/realtime-data-platform-loop-en.webp",fr:"assets/projects/realtime-data-platform-loop-fr.webp"}
    },
    diagram:{
      src:{en:"assets/projects/realtime-data-platform-diagram-en.png",fr:"assets/projects/realtime-data-platform-diagram-fr.png"},
      alt:{
        en:"Simplified architecture: MQTT messages reach React live charts through a Node.js and Socket.IO bridge. A separate Python service processes spreadsheet reports. An Express API manages station records in MongoDB; other Python services provide technical analysis.",
        fr:"Architecture simplifiée : les messages MQTT atteignent les graphiques React en direct via une passerelle Node.js et Socket.IO. Un service Python distinct traite les rapports tabulaires. Une API Express gère les fiches des stations dans MongoDB ; d’autres services Python fournissent des analyses techniques."
      }
    }
  },
  {
    slug:"hackzone-tunisia-x", year:"2022",
    video:projectFilm("hackzone-tunisia-x","HackZone Tunisia X","HackZone Tunisia X"),
    repo:{name:"HZ-X-challenges",url:"https://github.com/boubakriibrahim/HZ-X-challenges"},
    eyebrow:{en:"Infrastructure · Cybersecurity",fr:"Infrastructure · Cybersécurité"},
    title:{en:"HackZone Tunisia X",fr:"HackZone Tunisia X"},
    summary:{
      en:"Challenge preparation, infrastructure and technical operations for HackZone Tunisia X. The public archive includes containerized web challenges and an Android reverse-engineering exercise.",
      fr:"Préparation de défis, infrastructure et opérations techniques pour HackZone Tunisia X. Le dépôt public contient des défis web conteneurisés et un exercice de rétro-ingénierie Android."
    },
    role:{en:"Infrastructure & Cybersecurity",fr:"Infrastructure & cybersécurité"},
    org:"HackZone Tunisia X",
    tech:["Azure","Python","Flask","PHP","Docker Compose","Nginx","Android"],
    context:{
      en:"A live CTF needs competition services to stay available while participants actively probe challenge environments. The work centered on infrastructure deployment, challenge preparation, monitoring and incident response.",
      fr:"Un CTF en direct doit maintenir les services disponibles pendant que les participants testent activement les environnements. Le travail portait sur le déploiement d’infrastructure, la préparation des défis, la supervision et la résolution d’incidents."
    },
    built:{
      en:["Helped organize a 24-hour event.","Contributed to deployment of infrastructure used to host competition challenges and services.","Prepared challenges involving web vulnerabilities, Linux systems and reverse engineering.","Provided technical support, service monitoring and incident resolution throughout the event."],
      fr:["Participé à l’organisation d’un événement de 24 heures.","Contribué au déploiement de l’infrastructure hébergeant les défis et services de compétition.","Préparé des défis autour des vulnérabilités web, systèmes Linux et rétro-ingénierie.","Assuré le support technique, la supervision et la résolution d’incidents pendant l’événement."]
    },
    decisions:{
      en:[["Availability under adversarial use","Monitoring and operational support were part of the event design, not an afterthought."],["Isolation and reproducibility","Containerized challenge environments help separate services and make recovery easier."],["Operate what you build","Infrastructure work included live troubleshooting under event pressure."]],
      fr:[["Disponibilité en contexte adversarial","La supervision et le support opérationnel faisaient partie de la conception de l’événement."],["Isolation et reproductibilité","Des environnements conteneurisés facilitent la séparation des services et leur remise en service."],["Exploiter ce que l’on construit","Le travail d’infrastructure incluait le diagnostic en direct sous la pression de l’événement."]]
    },
    flow:{en:["Challenges","Azure / Docker","Monitoring","Support","Participants"],fr:["Défis","Azure / Docker","Supervision","Support","Participants"]}
  },
  {
    slug:"web-security-challenges",
    video:projectFilm("web-security-challenges","Web Security Challenges","Défis de sécurité web"),
    repo:{name:"Web_Challenges",url:"https://github.com/boubakriibrahim/Web_Challenges"},
    eyebrow:{en:"Security education · Web challenges",fr:"Formation en sécurité · Défis web"},
    title:{en:"Web Security Challenges",fr:"Défis de sécurité web"},
    summary:{
      en:"A collection of web challenges used for security teaching, with focused exercises around SQL injection, PHP comparisons, authentication and JWTs.",
      fr:"Une collection de défis web utilisée pour enseigner la sécurité, avec des exercices ciblés sur l’injection SQL, les comparaisons PHP, l’authentification et les JWT."
    },
    role:{en:"Challenge author · Security teaching",fr:"Auteur de défis · Formation en sécurité"},
    org:"CSI ENSI",
    tech:["PHP","JavaScript","HTML / CSS","SQL","JWT","Composer"],
    context:{
      en:"These exercises turn web-security concepts into small applications that students can inspect and reason about. Each challenge focuses on a specific behavior in application code, from input handling to authentication.",
      fr:"Ces exercices transforment les notions de sécurité web en petites applications que les étudiants peuvent examiner et analyser. Chaque défi porte sur un comportement précis du code, du traitement des entrées à l’authentification."
    },
    built:{
      en:["Prepared web-security challenges for teaching and hands-on practice.","Organized separate exercises for SQL injection, loose PHP comparisons, regular-expression handling and JWT authentication.","Published the PHP and JavaScript sources, page assets and supporting SQL files so the exercises can be inspected."],
      fr:["Préparé des défis de sécurité web pour la formation et la mise en pratique.","Organisé des exercices distincts sur l’injection SQL, les comparaisons faibles en PHP, les expressions régulières et l’authentification JWT.","Publié les sources PHP et JavaScript, les ressources des pages et les fichiers SQL associés pour permettre l’étude des exercices."]
    },
    decisions:{
      en:[["One concept at a time","Separate challenge directories make it possible to study individual application behaviors."],["Source available for discussion","The application code gives students concrete material to inspect when discussing why a vulnerability exists."],["Teaching context","These intentionally vulnerable exercises are learning material for a controlled lab environment."]],
      fr:[["Une notion à la fois","Des répertoires distincts permettent d’étudier séparément les comportements des applications."],["Du code pour la discussion","Les sources donnent aux étudiants un support concret pour comprendre l’origine d’une vulnérabilité."],["Un cadre pédagogique","Ces exercices volontairement vulnérables sont des supports d’apprentissage destinés à un laboratoire contrôlé."]]
    },
    flow:{en:["Challenge","Web interface","PHP / JavaScript","Application behavior","Discussion"],fr:["Défi","Interface web","PHP / JavaScript","Comportement observé","Discussion"]},
    flowLabel:{en:"Learning workflow",fr:"Parcours pédagogique"}
  },
  {
    slug:"ensi-cyber-range", year:"2022",
    video:projectFilm("ensi-cyber-range","ENSI Cyber Range","ENSI Cyber Range"),
    repo:{name:"ENSI-Cyber-Range-App",url:"https://github.com/boubakriibrahim/ENSI-Cyber-Range-App"},
    eyebrow:{en:"Network security · Desktop application",fr:"Sécurité réseau · Application de bureau"},
    title:{en:"ENSI Cyber Range",fr:"Cyber Range ENSI"},
    summary:{
      en:"An academic team project that brings network discovery, scenario explanations and experiment controls into a Python desktop interface for security learning.",
      fr:"Un projet académique en équipe qui réunit découverte réseau, explications de scénarios et commandes d’expérimentation dans une interface Python dédiée à l’apprentissage de la sécurité."
    },
    role:{en:"Developer · Academic team project",fr:"Développeur · Projet académique en équipe"},
    org:"ENSI",
    tech:["Python","PySide6 / Qt","Scapy","Qt Material","netifaces"],
    context:{
      en:"Developed as an ENSI design and programming project, Cyber Range puts explanations beside the controls used in network-security experiments. The interface brings discovery, target selection and experiment feedback into one place.",
      fr:"Développé dans le cadre d’un projet de conception et de programmation à l’ENSI, Cyber Range place les explications à côté des commandes d’expérimentation en sécurité réseau. L’interface rassemble découverte, sélection des cibles et retours d’exécution."
    },
    built:{
      en:["Contributed to a Python desktop application built with PySide6 and Qt Material, alongside Adem Hmissa.","The interface includes network discovery, target and interface selection, scenario descriptions, a console and start/stop controls.","Separate Python modules cover network scanning, ARP spoofing, DHCP starvation and SYN flooding for lab demonstrations."],
      fr:["Contribué à une application de bureau Python avec PySide6 et Qt Material, aux côtés d’Adem Hmissa.","L’interface propose la découverte réseau, la sélection des cibles et des interfaces, la description des scénarios, une console et des commandes de démarrage et d’arrêt.","Des modules Python distincts couvrent le scan réseau, l’usurpation ARP, la saturation DHCP et le SYN flooding pour des démonstrations en laboratoire."]
    },
    decisions:{
      en:[["Explanation beside execution","Scenario descriptions appear in the same interface as the experiment controls, making the teaching context visible."],["Background work","QRunnable workers and a QThreadPool separate background tasks from the main Qt event loop."],["Separate network modules","Scanning and network scenarios live in separate Python modules, while the desktop window coordinates user input."]],
      fr:[["L’explication à côté de l’exécution","Les descriptions des scénarios accompagnent les commandes d’expérimentation pour garder le contexte pédagogique visible."],["Traitements en arrière-plan","Des workers QRunnable et un QThreadPool séparent les tâches en arrière-plan de la boucle principale Qt."],["Modules réseau distincts","Le scan et les scénarios réseau résident dans des modules Python séparés ; la fenêtre de bureau coordonne les entrées de l’utilisateur."]]
    },
    flow:{en:["Discover","Select targets","Read explanation","Run / stop","Inspect feedback"],fr:["Découvrir","Choisir les cibles","Lire l’explication","Démarrer / arrêter","Observer les retours"]},
    flowLabel:{en:"Application workflow",fr:"Parcours dans l’application"}
  }
];
