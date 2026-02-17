import { motion } from "framer-motion";
import "../styles/Phase.css";

export default function Phase() {
  return (
    <section className="phase-section" id="phases">
      <div className="phase-container">

        <motion.h2
          className="phase-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathon Journey
        </motion.h2>

        {/* PHASE I */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase I — Registration & Onboarding</h3>
          <ul>
            <li>Form Your Team: 3 or 4 members from the same institution.</li>
            <li>Register : Complete registration & confirm via payment.</li>
            <li>Choose Domain & Problem Statement: Selection will be final.</li>
          </ul>
        </motion.div>

        {/* PHASE II */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase II — On-Campus 24-Hour Hackathon</h3>
          <p><strong>(Round 1 — Preliminary Development Round)</strong></p>
          <ul>
            <li><strong>Duration:</strong> 10:00 AM (05 March 2026) to 10:00 AM (06 March 2026)</li>
            <li>Continuous 24-hour development phase.</li>
          </ul>

          <ul>
            <li><strong>Arrival & Check-in:</strong> Teams report to the venue, ID verification, seating allocation, opening briefing & rules explanation.</li>
            <li><strong>Kick-off & Problem Understanding:</strong> Revisit problem statement, clarify requirements, finalize architecture & development plan.</li>
            <li><strong>Build Your Solution (24 Hours):</strong> Design system architecture, develop MVP, integrate tools/frameworks/AI, implement core features.</li>
            <li><strong>Mentorship & Progress Review:</strong> Guidance during checkpoints, technical validation & GitHub progress review.</li>
          </ul>

          <ul>
            <li><strong>Round 1 Final Submission:</strong></li>
            <li> Working prototype / MVP</li>
            <li> Source code repository</li>
            <li> Documentation (README.md)</li>
            <li> Presentation deck</li>
          </ul>

          <ul>
            <li><strong>Evaluation & Shortlisting Criteria:</strong></li>
            <li> Innovation & Creativity</li>
            <li> Technical Implementation</li>
            <li> SDG Alignment & Impact</li>
            <li> Feasibility & Scalability</li>
            <li> Presentation Readiness</li>
            <li><strong>Top 10% teams will be shortlisted for the final round.</strong></li>
            <li>Remaining teams conclude participation after Round 1.</li>
          </ul>
        </motion.div>

        {/* PHASE III */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase III — Final Evaluation & Showcase</h3>
          <p><strong>(Round 2 — Jury Presentation)</strong></p>

          <ul>
            <li><strong>Live Jury Presentation:</strong> Deliver presentation, demonstrate prototype, explain architecture & decisions, respond to jury questions.</li>
            <li><strong>Final Evaluation:</strong> Judged on innovation, technical depth, real-world applicability, SDG impact, scalability & presentation clarity.</li>
            <li><strong>Showcase & Winner Announcement:</strong> Winners selected from shortlisted teams and announced during the closing ceremony.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
