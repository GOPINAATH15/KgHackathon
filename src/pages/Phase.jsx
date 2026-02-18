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

  <p className="muted">
    This phase ensures proper team formation, registration validation,
    and selection of the problem statement before the hackathon begins.
  </p>

  {/* Team Formation Guidelines */}
  <h4>Team Formation Guidelines</h4>
  <ul>
    <li>Each team must consist of <strong>3 to 4 members</strong> from the same institution.</li>
    <li>Cross-college teams are not permitted.</li>
    <li>Each team must include <strong>at least 1 female participant</strong>.</li>
    <li>Teams with <strong>2 female participants</strong> are strongly encouraged.</li>
    <li>Every team must designate one member as the <strong>Team Leader</strong>.</li>
    <li>A participant can be part of only <strong>one team</strong>.</li>
  </ul>

  {/* Register for the Hackathon */}
  <h4>Register for the Hackathon</h4>
  <p className="muted">Teams must:</p>
  <ul>
    <li>Complete the official registration form on the website.</li>
    <li>Provide accurate team and participant details.</li>
    <li>Confirm participation by completing the registration payment.</li>
    <li>Registration is confirmed only after successful payment verification.</li>
  </ul>

  {/* Choose Domain & Problem Statement */}
  <h4>Choose Domain & Problem Statement</h4>
  <p className="muted">During registration, teams must select:</p>
  <ul>
    <li>One official hackathon domain.</li>
    <li>One predefined problem statement.</li>
    <li>The selected problem statement will remain final throughout the hackathon.</li>
  </ul>


</motion.div>


        {/* PHASE II */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase II — On-Campus 30-Hour Hackathon</h3>
          <div className="phase-block">

            <h3 className="phase-main-title">
              Round 1 — Preliminary Development Round
            </h3>

            {/* Duration */}
            <div className="phase-item">
              <h4>Duration</h4>
              <p>10:00 AM (05 March 2026) to 04:00 AM (06 March 2026)</p>
              <p className="muted">Continuous 30-hour development phase</p>
            </div>

            {/* Arrival */}
            <div className="phase-item">
              <h4>Arrival & Check-in</h4>
              <p>
                Teams report to the venue for ID verification, seating allocation,
                opening briefing, and rules explanation.
              </p>
            </div>

            {/* Kickoff */}
            <div className="phase-item">
              <h4>Kick-off & Problem Understanding</h4>
              <p>
                Revisit the problem statement, clarify requirements,
                and finalize architecture & development plan.
              </p>
            </div>

            {/* Build */}
            <div className="phase-item">
              <h4>Build Your Solution (24 Hours)</h4>
              <p className="subheading">Teams will:</p>
              <ul>
                <li>Design system architecture</li>
                <li>Develop MVP</li>
                <li>Integrate tools, frameworks & AI</li>
                <li>Implement core features</li>
              </ul>
            </div>

            {/* Mentorship */}
            <div className="phase-item">
              <h4>Mentorship & Progress Review</h4>
              <p>
                Receive guidance during checkpoints, technical validation,
                and GitHub progress review.
              </p>
            </div>

            {/* Submission */}
            <div className="phase-item">
              <h4>Round 1 Final Submission</h4>
              <p className="subheading">Teams must submit:</p>
              <ul>
                <li>Working prototype / MVP</li>
                <li>Source code repository</li>
                <li>Documentation (README.md)</li>
                <li>Presentation deck</li>
              </ul>
            </div>

            {/* Evaluation */}
            <div className="phase-item">
              <h4>Round 1 Evaluation & Shortlisting</h4>
              <ul>
                <li>Innovation & Creativity</li>
                <li>Technical Implementation</li>
                <li>SDG Alignment & Impact</li>
                <li>Feasibility & Scalability</li>
                <li>Presentation Readiness</li>
              </ul>
              <p className="highlight notice-important">
                Top 10% teams will be shortlisted for the final round.
              </p>

              <p className="muted notice-subtle">
                Remaining teams conclude participation after Round 1.
              </p>
            </div>

            {/* Phase 3 */}
            {/* <div className="phase-item final-phase">
              <h4>Phase III — Final Evaluation & Showcase</h4>
              <p>
                Shortlisted teams present their solutions to the jury panel,
                demonstrate working prototypes, and compete for final awards.
              </p>
            </div> */}

          </div>
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

          {/* Live Jury Presentation */}
          <h4>Live Jury Presentation</h4>
          <p className="muted">Shortlisted teams will:</p>
          <ul>
            <li>Deliver live presentations.</li>
            <li>Demonstrate a working prototype.</li>
            <li>Explain architecture and technical decisions.</li>
            <li>Respond to jury questions.</li>
          </ul>

          {/* Final Evaluation */}
          <h4>Final Evaluation</h4>
          <p className="muted">An expert jury panel will evaluate:</p>
          <ul>
            <li>Innovation & originality</li>
            <li>Technical depth & execution</li>
            <li>Real-world applicability and SDG impact</li>
            {/* <li>SDG impact & social relevance</li> */}
            <li>Scalability & future potential</li>
            <li>Presentation clarity</li>
          </ul>

          {/* Showcase & Winner Announcement */}
          <h4>Showcase & Winner Announcement</h4>
          <ul>
            {/* <li>Top teams will be recognized and celebrated.</li> */}
            <li>Final Winners will be selected from shortlisted teams.</li>
            {/* <li>Awards and recognition will be announced during the closing ceremony.</li> */}
          </ul>

          <p className="highlight notice-important">
            Awards and recognition will be announced during the closing ceremony.
          </p>

        </motion.div>


      </div>
    </section>
  );
}
