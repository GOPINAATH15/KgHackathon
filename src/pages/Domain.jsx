import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/Domain.css";

import aiImg from "../assets/domain-images/ai.jpeg";
import healthcareImg from "../assets/domain-images/healthcare.jpeg";
import sustainableImg from "../assets/domain-images/sustainable.jpeg";
import womensafetyImg from "../assets/domain-images/womensafety.jpeg";

const domainData = {
  /* ============================= */
  /* DOMAIN 1 — WOMEN'S SAFETY     */
  /* ============================= */

  "cyber-safety-phishing-detection": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,

    problemTitle: "AI-Driven Cyber Safety Awareness & Phishing Detection Platform",

    realWorldContext:
      "Digital fraud, phishing attacks, and social engineering scams are increasing globally, disproportionately affecting vulnerable users, including women, students, and first-time internet users. Many individuals lack awareness and real-time protection mechanisms against evolving cyber threats.",

    challengeStatement:
      "Design and develop an intelligent cybersecurity platform capable of detecting suspicious content such as phishing messages, malicious URLs, and fraudulent communications while providing users with real-time alerts and educational safety guidance.",

    targetUsers: [
      "Students and general internet users",
      "Women and vulnerable digital users",
      "Educational institutions",
      "Cybersecurity awareness organizations"
    ],

    solutionExpectations: [
      "Analyze text, emails, URLs, or messages for phishing indicators",
      "Provide risk classification and explanations",
      "Offer contextual safety tips and awareness modules",
      "Display user-friendly alerts"
    ],

    innovationScope: [
      "AI/NLP-based threat detection",
      "Browser extensions",
      "Mobile apps or desktop tools",
      "Edge security devices",
      "Explainable AI interfaces"
    ],

    technicalApproach: [
      "React / Flutter frontend",
      "Python FastAPI / Node.js backend",
      "NLP models / heuristic detection",
      "Cloud or local processing"
    ],

    expectedDeliverables: [
      "Functional prototype (software/hardware/hybrid)",
      "Threat detection demonstration",
      "Architecture diagram",
      "GitHub repository",
      "Demo video (optional)"
    ],

    constraintsGuidelines: [
      "Real email integration optional (simulation allowed)",
      "Must explain detection logic",
      "Privacy-focused design encouraged"
    ]
  },

  "voice-based-safety-assistant": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,

    problemTitle: "AI-Powered Voice-Based Safety Assistant for Emergency Support",

    realWorldContext:
      "In emergencies, users may not be able to operate complex interfaces. Voice-based interaction enables faster response, especially for individuals with limited literacy or accessibility needs.",

    challengeStatement:
      "Develop an intelligent voice-enabled assistant that allows users to trigger emergency actions, request help, and receive safety guidance using natural language commands.",

    targetUsers: [
      "Women and vulnerable individuals",
      "Elderly users",
      "People with accessibility challenges",
      "Night commuters"
    ],

    solutionExpectations: [
      "Voice command recognition",
      "SOS triggering through voice",
      "Multilingual or regional language support",
      "Emergency response workflows"
    ],

    innovationScope: [
      "Offline speech recognition",
      "Embedded safety devices",
      "Wearable assistants",
      "AI conversational systems"
    ],

    technicalApproach: [
      "Speech-to-text APIs or offline models",
      "Mobile/web interface or embedded hardware",
      "Integration with notification systems"
    ],

    expectedDeliverables: [
      "Working prototype",
      "Voice interaction demo",
      "Architecture explanation",
      "Demo scenario video"
    ],

    constraintsGuidelines: [
      "Must include false-trigger handling",
      "Offline or low-network solutions encouraged"
    ]
  },

  "public-transport-safety-intelligence": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,

    problemTitle: "AI-Based Public Transport Safety Intelligence & Risk Monitoring System",

    realWorldContext:
      "Public transportation environments can pose safety challenges due to crowd dynamics, environmental conditions, and unpredictable incidents. Current safety systems lack predictive intelligence.",

    challengeStatement:
      "Build an intelligent system that monitors public transport environments, predicts potential safety risks, and provides alerts or recommendations to enhance passenger safety.",

    targetUsers: [
      "Daily commuters",
      "Women travelers",
      "Public transport authorities",
      "Smart city planners"
    ],

    solutionExpectations: [
      "Risk prediction based on contextual data",
      "Monitoring dashboard",
      "Real-time or simulated alerts",
      "Visualization of safe vs risky conditions"
    ],

    innovationScope: [
      "Computer vision-based monitoring",
      "IoT sensors",
      "Wearable alert devices",
      "AI prediction models"
    ],

    technicalApproach: [
      "Map visualization platforms",
      "AI/ML analytics",
      "IoT simulation or hardware integration"
    ],

    expectedDeliverables: [
      "Prototype system",
      "Safety risk visualization",
      "Demonstration scenario",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Real CCTV integration is not required",
      "Simulation-based data is acceptable"
    ]
  },

  "smart-campus-safety-ecosystem": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,

    problemTitle: "Integrated Smart Campus Safety & Emergency Response Ecosystem",

    realWorldContext:
      "Educational campuses require proactive safety infrastructure to manage emergencies, monitor environments, and provide rapid response mechanisms. Traditional security systems are reactive and fragmented.",

    challengeStatement:
      "Develop a unified smart safety platform for campuses that integrates monitoring, emergency response, and intelligent risk alerts.",

    targetUsers: [
      "Students and faculty",
      "Campus security teams",
      "Institutional administrators"
    ],

    solutionExpectations: [
      "Emergency alert workflows",
      "Smart monitoring dashboard",
      "Zone-based safety tracking",
      "Incident reporting interface"
    ],

    innovationScope: [
      "AI surveillance analytics",
      "Smart SOS kiosks",
      "Mobile safety apps",
      "IoT-based safety sensors"
    ],

    technicalApproach: [
      "Web/mobile frontend",
      "AI analytics or rule-based models",
      "Embedded hardware or IoT simulation"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Campus safety scenario demo",
      "System architecture documentation"
    ],

    constraintsGuidelines: [
      "Real hardware optional",
      "Ethical and privacy considerations mandatory"
    ]
  },

  /* ============================= */
  /* DOMAIN 2 — HEALTHCARE         */
  /* ============================= */

  "lab-test-interpretation-assistant": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,

    problemTitle: "AI-Powered Laboratory Test Interpretation & Clinical Insight Assistant",

    realWorldContext:
      "Patients and even junior healthcare professionals often struggle to interpret laboratory reports due to complex medical terminology and reference ranges. Misunderstanding lab results can lead to anxiety, delayed medical action, or improper self-assessment.",

    challengeStatement:
      "Design an intelligent system that analyzes laboratory test results and provides simplified explanations, risk insights, and contextual educational information to support patient understanding and clinical decision awareness.",

    targetUsers: [
      "Patients and caregivers",
      "Medical students and junior clinicians",
      "Telemedicine platforms",
      "Health awareness applications"
    ],

    solutionExpectations: [
      "Input interface for lab values",
      "An interpretation engine with explanation logic",
      "Risk-level visualization (informational only)",
      "User-friendly health insights dashboard"
    ],

    innovationScope: [
      "AI-driven medical explanation engine",
      "NLP-based health guidance",
      "Voice-based explanation interface",
      "Integration with wearable or health tracking apps"
    ],

    technicalApproach: [
      "Web/mobile application",
      "Rule-based + AI model interpretation",
      "Medical dataset mapping",
      "Visualization tools"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Sample lab dataset demonstration",
      "Interpretation logic explanation",
      "GitHub repository",
      "Demo video"
    ],

    constraintsGuidelines: [
      'Must include disclaimer: "Not a medical diagnosis."',
      "Explainable outputs required",
      "Avoid black-box decisions"
    ]
  },

  "mental-health-early-warning-system": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,

    problemTitle: "AI-Driven Mental Health Early Warning & Wellbeing Monitoring System",

    realWorldContext:
      "Mental health challenges such as stress, anxiety, and burnout are increasing globally. Early detection mechanisms are limited, and individuals often seek support only after symptoms escalate.",

    challengeStatement:
      "Develop an intelligent system capable of identifying early warning signals of mental health risks using behavioral, conversational, or activity-based indicators while promoting awareness and preventive support.",

    targetUsers: [
      "Students and professionals",
      "Mental health awareness platforms",
      "Counselors and wellness programs"
    ],

    solutionExpectations: [
      "Behavioral or conversational data analysis",
      "Risk trend visualization",
      "Wellness recommendation engine",
      "User privacy-focused design"
    ],

    innovationScope: [
      "NLP emotion analysis",
      "Voice tone analysis",
      "Wearable sensor integration",
      "AI-driven wellness suggestions"
    ],

    technicalApproach: [
      "AI/NLP sentiment models",
      "Time-series behavioral analysis",
      "Mobile or web interface",
      "Edge processing for privacy (optional)"
    ],

    expectedDeliverables: [
      "Working prototype",
      "Demo scenario showing risk detection",
      "Explanation of AI logic",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Ethical design mandatory",
      "Privacy-first architecture required",
      "Not a medical diagnostic tool"
    ]
  },

  "rural-healthcare-access-platform": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,

    problemTitle: "Smart Rural Healthcare Access & Low-Bandwidth Telemedicine Platform",

    realWorldContext:
      "Rural populations often lack access to healthcare due to connectivity challenges, resource shortages, and infrastructure limitations. Digital health systems must function in low-bandwidth environments.",

    challengeStatement:
      "Build a platform that improves rural healthcare accessibility by enabling remote consultation, symptom triage, and health resource discovery using lightweight and offline-capable solutions.",

    targetUsers: [
      "Rural patients",
      "Community health workers",
      "Primary healthcare centers",
      "NGOs and public health agencies"
    ],

    solutionExpectations: [
      "Offline-first design",
      "Symptom-based triage module",
      "Telemedicine or consultation workflow",
      "Local health resource mapping"
    ],

    innovationScope: [
      "Edge computing solutions",
      "SMS/voice-based systems",
      "Portable health kiosk prototypes",
      "AI symptom classification"
    ],

    technicalApproach: [
      "Progressive Web Apps (PWA)",
      "Lightweight backend architecture",
      "Offline data synchronization",
      "IoT health devices (optional)"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Demonstration using a simulated rural scenario",
      "Architecture diagram",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Must work in low-connectivity conditions (simulation acceptable)",
      "Privacy and data protection considerations required"
    ]
  },

  "medication-adherence-tracker": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,

    problemTitle: "AI-Enabled Medication Adherence Monitoring & Reminder System",

    realWorldContext:
      "Medication non-adherence is a major global healthcare issue leading to ineffective treatment outcomes and increased healthcare costs. Patients often forget dosage schedules or misunderstand prescriptions.",

    challengeStatement:
      "Develop an intelligent system that helps patients track medication schedules, provides reminders, and detects adherence patterns to improve treatment consistency.",

    targetUsers: [
      "Chronic disease patients",
      "Elderly individuals",
      "Caregivers and families",
      "Healthcare providers"
    ],

    solutionExpectations: [
      "Medication scheduling interface",
      "Smart reminder system",
      "Adherence tracking dashboard",
      "Alert mechanism for missed doses"
    ],

    innovationScope: [
      "Smart pillbox hardware integration",
      "Voice reminders",
      "AI adherence pattern prediction",
      "Wearable integration"
    ],

    technicalApproach: [
      "Mobile/web application",
      "Notification systems",
      "AI pattern analysis (optional)",
      "IoT sensor integration"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Adherence workflow demonstration",
      "System architecture",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Real medical integration is not required",
      "Must include clear user safety messaging"
    ]
  },

  /* ============================= */
  /* DOMAIN 3 — SUSTAINABLE ENV    */
  /* ============================= */

  "food-waste-reduction-redistribution": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,

    problemTitle: "AI-Driven Food Waste Reduction & Intelligent Redistribution Platform",

    realWorldContext:
      "Food wastage contributes significantly to environmental pollution and resource inefficiency, while many communities face food insecurity. Efficient redistribution of surplus food remains a logistical and predictive challenge.",

    challengeStatement:
      "Design and develop an intelligent platform that identifies surplus food sources, predicts potential food waste, and optimizes redistribution to beneficiaries such as NGOs, shelters, or communities.",

    targetUsers: [
      "Restaurants and event organizers",
      "Educational institutions and hostels",
      "NGOs and food redistribution networks",
      "Sustainability-focused organizations"
    ],

    solutionExpectations: [
      "Food donor registration interface",
      "Surplus prediction or detection module",
      "Matching system between donors and receivers",
      "Logistics visualization or route suggestion"
    ],

    innovationScope: [
      "AI prediction models for food surplus",
      "Smart packaging or freshness sensors (hardware option)",
      "Real-time inventory monitoring",
      "Environmental impact analytics"
    ],

    technicalApproach: [
      "Web/mobile platform",
      "AI/ML forecasting or rule-based systems",
      "Map-based logistics visualization",
      "Cloud or edge deployment"
    ],

    expectedDeliverables: [
      "Working prototype",
      "Redistribution workflow demonstration",
      "Sample dataset and prediction logic",
      "GitHub repository",
      "Demo video"
    ],

    constraintsGuidelines: [
      "Real logistics integration not required (simulation acceptable)",
      "Must include environmental impact indicators"
    ]
  },

  "water-usage-optimization-platform": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,

    problemTitle: "AI-Based Water Consumption Monitoring & Optimization System",

    realWorldContext:
      "Water scarcity and inefficient usage patterns create major environmental challenges. Monitoring consumption and providing actionable insights can significantly reduce wastage and improve sustainability.",

    challengeStatement:
      "Develop a system that monitors water usage patterns, identifies inefficiencies, and provides intelligent recommendations to optimize water consumption.",

    targetUsers: [
      "Residential communities",
      "Industrial facilities",
      "Smart building operators",
      "Agricultural users"
    ],

    solutionExpectations: [
      "Water usage visualization dashboard",
      "Inefficiency detection",
      "Recommendation engine for optimization",
      "Usage trend analysis"
    ],

    innovationScope: [
      "IoT water flow sensors",
      "AI anomaly detection",
      "Predictive consumption analytics",
      "Gamification for conservation awareness"
    ],

    technicalApproach: [
      "Real-time dashboards",
      "Sensor data simulation or hardware integration",
      "Data analytics using AI or statistical models"
    ],

    expectedDeliverables: [
      "Prototype dashboard",
      "Data visualization outputs",
      "Optimization logic explanation",
      "Demo scenario"
    ],

    constraintsGuidelines: [
      "Real sensor deployment optional",
      "Simulation data allowed"
    ]
  },

  "climate-risk-early-alert-system": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,

    problemTitle: "AI-Based Climate Risk Prediction & Early Alert Platform",

    realWorldContext:
      "Climate change has increased the frequency of extreme weather events such as floods, heatwaves, and storms. Early warning systems can improve preparedness and reduce environmental and human risks.",

    challengeStatement:
      "Design an intelligent system that analyzes environmental and historical data to predict climate-related risks and provide early alerts to communities or authorities.",

    targetUsers: [
      "Local communities",
      "Disaster management agencies",
      "Urban planners",
      "Environmental monitoring organizations"
    ],

    solutionExpectations: [
      "Climate risk prediction module",
      "Alert generation system",
      "Visualization of risk zones",
      "Scenario-based simulation"
    ],

    innovationScope: [
      "Satellite or weather dataset analysis",
      "Edge environmental sensors",
      "AI predictive modeling",
      "Smart notification systems"
    ],

    technicalApproach: [
      "Data analytics and visualization tools",
      "Machine learning or rule-based models",
      "Mapping platforms for geographic visualization"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Risk prediction demonstration",
      "Architecture overview",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Real-time weather integration is optional",
      "Use open datasets or simulated data"
    ]
  },

  "soil-health-sustainable-farming-advisor": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,

    problemTitle: "AI-Driven Soil Health Analysis & Sustainable Farming Advisory System",

    realWorldContext:
      "Soil degradation and inefficient farming practices impact crop productivity and environmental sustainability. Farmers require accessible tools that provide data-driven recommendations for eco-friendly agriculture.",

    challengeStatement:
      "Develop an intelligent advisory platform that analyzes soil parameters and recommends sustainable crop selection, fertilizer usage, and eco-friendly farming practices.",

    targetUsers: [
      "Farmers and agricultural communities",
      "Agricultural advisors",
      "Agri-tech startups",
      "Sustainability researchers"
    ],

    solutionExpectations: [
      "Soil data input interface",
      "Crop/fertilizer recommendation engine",
      "Sustainability scoring or eco-impact indicators",
      "Farmer-friendly visualization"
    ],

    innovationScope: [
      "IoT soil sensors",
      "AI recommendation models",
      "Offline mobile applications for rural use",
      "Multilingual interfaces"
    ],

    technicalApproach: [
      "Mobile or web platform",
      "AI/ML or rule-based recommendation systems",
      "Agricultural datasets integration"
    ],

    expectedDeliverables: [
      "Prototype system",
      "Recommendation workflow demonstration",
      "Dataset explanation",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Real hardware optional",
      "Must explain recommendation logic clearly"
    ]
  },

  /* ============================= */
  /* DOMAIN 4 — AI & AUTOMATION    */
  /* ============================= */

  "resume-screening-skill-matching-platform": {
    domainTitle: "AI & Automation",
    image: aiImg,

    problemTitle: "AI-Powered Intelligent Resume Screening & Skill Matching Platform",

    realWorldContext:
      "Modern recruitment processes involve analyzing large volumes of resumes manually, which leads to inefficiencies, biases, and delays. Organizations require intelligent tools to match candidate skills with job roles accurately and fairly.",

    challengeStatement:
      "Design and develop an AI-driven platform capable of automatically analyzing resumes, extracting relevant skills and experience, and matching candidates with suitable job roles or learning pathways.",

    targetUsers: [
      "Recruiters and HR professionals",
      "Job seekers and students",
      "Educational institutions",
      "Career development platforms"
    ],

    solutionExpectations: [
      "Resume upload and parsing system",
      "Skill extraction and classification engine",
      "Job-role matching with scoring",
      "Candidate ranking or recommendation interface"
    ],

    innovationScope: [
      "NLP-based resume understanding",
      "Skill ontology or knowledge graph",
      "Bias-aware matching algorithms",
      "AI-powered career recommendation systems"
    ],

    technicalApproach: [
      "NLP frameworks (spaCy, transformers, etc.)",
      "Web/mobile interface",
      "Backend API with matching algorithms",
      "Optional vector database or semantic search"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Skill matching demonstration",
      "Architecture diagram",
      "GitHub repository",
      "Demo video"
    ],

    constraintsGuidelines: [
      "Transparency in the matching logic is required",
      "Avoid unfair bias in recommendations"
    ]
  },

  "ai-code-quality-assistant": {
    domainTitle: "AI & Automation",
    image: aiImg,

    problemTitle: "AI-Based Code Quality Analysis & Learning Assistant",

    realWorldContext:
      "Students often struggle with improving coding practices, debugging efficiently, and understanding best practices. Automated tools that provide real-time guidance can significantly enhance learning outcomes.",

    challengeStatement:
      "Develop an AI-powered assistant that analyzes source code and provides feedback on logic errors, performance issues, coding standards, and improvement suggestions.",

    targetUsers: [
      "Programming students",
      "Coding bootcamps",
      "Educational institutions",
      "Self-learners"
    ],

    solutionExpectations: [
      "Code input or repository analysis",
      "Static or dynamic code evaluation",
      "AI-driven suggestions and explanations",
      "Learning-focused feedback interface"
    ],

    innovationScope: [
      "AI code analysis models",
      "Automated refactoring suggestions",
      "Code visualization tools",
      "Integration with IDE plugins"
    ],

    technicalApproach: [
      "Static analysis tools",
      "AI/LLM integration (optional)",
      "Web-based coding environment or plugin"
    ],

    expectedDeliverables: [
      "Working prototype",
      "Code analysis demonstration",
      "Sample evaluation reports",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Educational focus encouraged",
      "Avoid reliance on external paid APIs unless simulated"
    ]
  },

  "ai-meeting-intelligence-assistant": {
    domainTitle: "AI & Automation",
    image: aiImg,

    problemTitle: "AI-Based Meeting Intelligence & Automated Insight Assistant",

    realWorldContext:
      "Meetings generate large amounts of information, but extracting actionable insights manually is time-consuming. Organizations require intelligent tools that summarize discussions and identify key decisions automatically.",

    challengeStatement:
      "Create an AI-powered system capable of capturing meeting conversations, generating summaries, extracting action items, and providing intelligent meeting analytics.",

    targetUsers: [
      "Corporate teams",
      "Educational institutions",
      "Project managers",
      "Remote collaboration teams"
    ],

    solutionExpectations: [
      "Speech-to-text or text input processing",
      "Automated meeting summary generation",
      "Action item extraction",
      "Meeting analytics dashboard"
    ],

    innovationScope: [
      "Voice recognition systems",
      "AI summarization models",
      "Smart calendar integration",
      "Hardware-based meeting recording devices"
    ],

    technicalApproach: [
      "NLP models for summarization",
      "Audio processing or transcript analysis",
      "Web/mobile interface"
    ],

    expectedDeliverables: [
      "Functional prototype",
      "Meeting summary demonstration",
      "Architecture overview",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "Real-time audio processing optional",
      "Privacy and data protection considerations required"
    ]
  },

  "no-code-workflow-automation-builder": {
    domainTitle: "AI & Automation",
    image: aiImg,

    problemTitle: "AI-Driven Autonomous Workflow Automation Builder (No-Code Platform)",

    realWorldContext:
      "Automation tools often require technical expertise, limiting accessibility for non-programmers. No-code automation platforms can empower users to design workflows visually and automate repetitive tasks.",

    challengeStatement:
      "Design a no-code platform that enables users to build automated workflows through visual interfaces and AI-driven suggestions without writing code.",

    targetUsers: [
      "Business users",
      "Students and educators",
      "Startups and small organizations",
      "Productivity-focused professionals"
    ],

    solutionExpectations: [
      "Drag-and-drop workflow builder",
      "Trigger-action automation system",
      "AI-assisted workflow suggestions",
      "Workflow execution monitoring"
    ],

    innovationScope: [
      "Visual automation interfaces",
      "Natural language workflow creation",
      "AI agent-based automation",
      "Integration with external services (simulation allowed)"
    ],

    technicalApproach: [
      "Web-based builder interface",
      "Backend workflow engine",
      "AI/NLP for automation suggestions"
    ],

    expectedDeliverables: [
      "Functional no-code platform prototype",
      "Automation workflow demonstration",
      "Architecture documentation",
      "GitHub repository"
    ],

    constraintsGuidelines: [
      "External API integrations optional",
      "Must demonstrate at least one end-to-end automation scenario"
    ]
  }
};

export default function Domain() {
  const imageRef = useRef(null);
  const rowRef = useRef(null);

  const [offsetY, setOffsetY] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});

  const { domainId } = useParams();
  const domain = domainData[domainId];

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !rowRef.current) return;

      const rowTop = rowRef.current.offsetTop;
      const rowHeight = rowRef.current.offsetHeight;
      const imageHeight = imageRef.current.offsetHeight;

      const scrollY = window.scrollY;
      const offsetTop = 120;

      if (scrollY > rowTop - offsetTop) {
        const maxMove = rowHeight - imageHeight - offsetTop;

        let moveY = scrollY - rowTop + offsetTop;

        if (moveY > maxMove) moveY = maxMove;
        if (moveY < 0) moveY = 0;

        setOffsetY(moveY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!domain) {
    return (
      <h2 style={{ color: "#fff", textAlign: "center", marginTop: "120px" }}>
        Domain Not Found
      </h2>
    );
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className="domain-section">
      {/* HEADER */}
      <motion.div
        className="domain-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{domain.domainTitle}</h2>
        <p>{domain.problemTitle}</p>
      </motion.div>

      <motion.div
        ref={rowRef}
        className="domain-row"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT CONTENT */}
        <div className="domain-problem">
          <h3>REAL-WORLD CONTEXT</h3>
          <p>{domain.realWorldContext}</p>

          <h3>CHALLENGE STATEMENT</h3>
          <p>{domain.challengeStatement}</p>

          {/* TARGET USERS */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("targetUsers")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.targetUsers ? "open" : ""
                }`}
              >
                ▶
              </span>
              TARGET USERS
            </button>

            {expandedSections.targetUsers && (
              <ul className="dropdown-content">
                {domain.targetUsers.map((u, i) => (
                  <li key={i}>{u}</li>
                ))}
              </ul>
            )}
          </div>

          {/* SOLUTION EXPECTATIONS */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("solutionExpectations")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.solutionExpectations ? "open" : ""
                }`}
              >
                ▶
              </span>
              SOLUTION EXPECTATIONS
            </button>

            {expandedSections.solutionExpectations && (
              <ul className="dropdown-content">
                {domain.solutionExpectations.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>

          {/* INNOVATION SCOPE */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("innovationScope")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.innovationScope ? "open" : ""
                }`}
              >
                ▶
              </span>
              INNOVATION SCOPE
            </button>

            {expandedSections.innovationScope && (
              <ul className="dropdown-content">
                {domain.innovationScope.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>

          {/* TECHNICAL APPROACH */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("technicalApproach")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.technicalApproach ? "open" : ""
                }`}
              >
                ▶
              </span>
              TECHNICAL APPROACH
            </button>

            {expandedSections.technicalApproach && (
              <ul className="dropdown-content">
                {domain.technicalApproach.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
          </div>

          {/* EXPECTED DELIVERABLES */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("expectedDeliverables")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.expectedDeliverables ? "open" : ""
                }`}
              >
                ▶
              </span>
              EXPECTED DELIVERABLES
            </button>

            {expandedSections.expectedDeliverables && (
              <ul className="dropdown-content">
                {domain.expectedDeliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>

          {/* CONSTRAINTS & GUIDELINES */}
          <div className="dropdown-section">
            <button
              className="dropdown-toggle"
              onClick={() => toggleSection("constraintsGuidelines")}
            >
              <span
                className={`dropdown-icon ${
                  expandedSections.constraintsGuidelines ? "open" : ""
                }`}
              >
                ▶
              </span>
              CONSTRAINTS & GUIDELINES
            </button>

            {expandedSections.constraintsGuidelines && (
              <ul className="dropdown-content">
                {domain.constraintsGuidelines.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="domain-side-image"
          ref={imageRef}
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          <img src={domain.image} alt="Domain Visual" />
        </div>
      </motion.div>
    </section>
  );
}