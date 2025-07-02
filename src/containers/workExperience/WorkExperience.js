import React, {useContext, useEffect, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!workExperiences.display) return null;
 const experienceContent = (
    <div className="experience-container" id="workExperience">
      <div>
        <h1 className="experience-heading">Experiences</h1>
        <div className="experience-cards-div">
          {workExperiences.experience.map((card, i) => (
            <ExperienceCard
              key={i} 
              isDark={isDark}
              cardInfo={{
                company: card.company,
                desc: card.desc,
                date: card.date,
                companylogo: card.companylogo,
                role: card.role,
                descBullets: card.descBullets
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="experience">
      {isMobile ? experienceContent : (
        <Fade bottom duration={1000} distance="20px" appear>
          {experienceContent}
        </Fade>
      )}
    </div>
  );
}