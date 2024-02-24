// About.js
import React from "react";
import Navbar2 from "./Navbar2";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Navbar2 />
      <div className="about-content">
        <div className="abstract">
        {/* <h2>Abstract</h2> */}
          <p>
          <h2>Abstract</h2>
            In the current landscape characterized by an abundance of online
            content, the efficient distillation of crucial information is
            imperative. The App marks a transformative evolution in our approach
            to handling online content, driven by cutting-edge NLP models like
            the "flan-t5-base" mode. It simplifies content consumption by
            converting audio from YouTube links into written transcripts,
            skillfully condensing them into concise summaries. This groundbreaking
            technology eliminates the laborious task of sifting through lengthy
            video content in search of crucial information. Its applicability is
            particularly prominent in academic and professional spheres, offering
            swift insights for students navigating complex subjects and
            streamlining the process of extracting essential information from
            extensive reports. This versatile tool not only simplifies but
            accelerates the entire process, directly addressing the challenges of
            information overload and protracted searches. This versatility is
            especially valuable for aiding students in comprehending complex
            subjects and assisting professionals in swiftly extracting key
            insights from extensive reports.
          </p>
          <p>
            <strong>Keywords:</strong> Video Summarization, Prompting,
            Information retrieval, NLP model
          </p>
        </div>
        <div className="team-members">
          <div className="member">
            <img src="ian_photo.jpg" alt="Ian Thomas" className="member-photo" />
            <p className="member-name">Ian Thomas</p>
            <p className="member-roll-no">1021259</p>
          </div>
          <div className="member">
            <img src="joevita_photo.jpg" alt="Joevita Jose Thomas" className="member-photo" />
            <p className="member-name">Joevita Jose Thomas</p>
            <p className="member-roll-no">1021260</p>
          </div>
          <div className="member">
            <img src="sakshi_photo.jpg" alt="Sakshi Patil" className="member-photo" />
            <p className="member-name">Sakshi Patil</p>
            <p className="member-roll-no">1021268</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
