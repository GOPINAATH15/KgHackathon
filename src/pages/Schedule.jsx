import { motion } from "framer-motion";
// import "../styles/components.css";
import "../styles/Schedule.css";
// import bgImage from "../assets/schedule-bg.jpg";

import {
  FaUserCheck,
  FaMicrophone,
  FaCode,
  FaLightbulb,
  FaLaptopCode,
  FaUtensils,
  FaUserTie,
  FaClipboardCheck,
  FaMoon,
  FaBug,
  FaUpload,
  FaGavel,
  FaTrophy,
} from "react-icons/fa";

export default function Schedule() {
  const day1 = [
    {
      time: "08:30 – 09:30 AM", title: "Participant Check-in & ID Verification", icon: <FaUserCheck /> },
    { time: "09:30 – 10:00 AM", title: "Opening Ceremony & Hackathon Briefing ", icon: <FaMicrophone /> },
    { time: "10:00 – 10:30 PM", title: "Team Setup & Final Problem Confirmation", icon: <FaLightbulb /> },
    // { time: "10:15 – 10:30 PM", title: "Team Setup & Problem Statement Finalization", icon: <FaLaptopCode /> },
    { time: "10:30 AM ", title: "Hackathon Development Kickoff (Official Coding Begins)", icon: <FaCode /> },
    { time: "10:30 AM – 12:00 PM", title: "Problem Understanding & Architecture Planning", icon: <FaLaptopCode /> },
    { time: "12:00 PM – 01:00 PM", title: "Development Sprint – Phase 1", icon: <FaUserTie /> },
    { time: "01:00 – 02:00 PM", title: "Lunch Break", icon: <FaUtensils /> },
    { time: "02:00 – 04:30 PM", title: "Core Development Sprint", icon: <FaLaptopCode /> },
    { time: "04:30 – 05:30 PM", title: "Mentor Interaction Sessions", icon: <FaMoon /> },
    { time: "05:30 – 06:30 PM", title: "Midway Progress Review & Jury Interaction (Non-Elimination)", icon: <FaMoon /> },
    { time: "06:30 PM – 08:00 PM", title: "Development Sprint – Phase 2", icon: <FaUserTie /> },
    { time: "08:00 PM – 09:00 PM", title: "Dinner Break", icon: <FaUtensils /> },
    { time: "09:00 PM – 12:00 AM", title: "Night Coding Sprint", icon: <FaMoon /> },
  ];

  const day2 = [
    { time: "12:00 – 02:30 AM", title: "Advanced Development & Integration ", icon: <FaLaptopCode /> },
    { time: "02:30 – 03:00 AM", title: "Energy Booster Session / Optional Engagement Activity", icon: <FaUtensils /> },
    { time: "03:00 – 03:30 AM", title: "Refreshment Break", icon: <FaUtensils /> },
    { time: "03:30 – 06:00 AM", title: "Feature Completion & Optimization", icon: <FaLaptopCode /> },
    { time: "06:00 – 07:00 AM", title: "Breakfast Break", icon: <FaUtensils /> },
    { time: "07:00 – 08:30 AM", title: "Testing & Debugging ", icon: <FaBug /> },
    { time: "08:30 – 09:30 AM", title: "Presentation Preparation", icon: <FaClipboardCheck /> },
    { time: "09:30 – 10:30 AM", title: "Final Submission Upload, Code Freeze & Documentation Lock", icon: <FaUpload /> },
    { time: "10:30 AM", title: "Round 1 Development Ends", icon: <FaTrophy /> },
    { time: "10:30 AM – 12:00 PM", title: "Initial Evaluation & Shortlisting (Top 10% Teams Advance to Final Round)", icon: <FaTrophy /> },
    { time: "12:00 PM – 12:30 PM", title: "Participation Certificate Distribution & Session Wind-Up", icon: <FaUserCheck /> },
    { time: "12:30 PM – 01:15 PM", title: "Finalist Networking Lunch & Jury Interaction\nFinalist Briefing & Presentation Setup", icon: <FaUserTie /> },
    { time: "01:15 PM – 03:15 PM", title: "Grand Finale — Live Jury Presentations (Finalist Teams)", icon: <FaMicrophone /> },
    { time: "03:15 PM – 03:30 PM", title: "Final Deliberation by Jury", icon: <FaGavel /> },
    { time: "03:30 PM – 04:00 PM", title: "Winner Announcement & Closing Ceremony", icon: <FaTrophy /> },
  ];

  const renderTimeline = (events) =>
    events.map((event, index) => (
      <motion.div
        key={index}
        className={`schedule-item ${index % 2 === 0 ? "left" : "right"}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="schedule-icon">{event.icon}</div>
        <div className="schedule-time">{event.time}</div>
        <h3>{event.title}</h3>
      </motion.div>
    ));

  return (
    <section
      id="schedule">



      <h2>Event Schedule</h2>

      {/* DAY 1 */}
      <div className="day-header">Day 1 – Hackathon Kickoff</div>
      <div className="timeline">{renderTimeline(day1)}</div>

      {/* DAY 2 */}
      <div className="day-header">Day 2 – Final Submission & Results</div>
      <div className="timeline">{renderTimeline(day2)}</div>
    </section>
  );
}
