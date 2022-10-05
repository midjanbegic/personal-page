import { Feature, Title } from "components";
import React from "react";
import "../Experience/Experience.css";

const Experience = () => {
  const experience = [
    {
      title: "Front-End Developer",
      items: [
        {
          id: 1,
          title: "HTML",
          level: "Advanced",
        },
        {
          id: 2,
          title: "CSS",
          level: "Advanced",
        },
        {
          id: 3,
          title: "JavaScript",
          level: "Advanced",
        },
        {
          id: 4,
          title: "React",
          level: "Advanced",
        },
        {
          id: 5,
          title: "VUE",
          level: "Experienced",
        },
        {
          id: 6,
          title: "Bootstrap",
          level: "Experienced",
        },
        {
          id: 7,
          title: "SASS",
          level: "Experienced",
        },
        {
          id: 8,
          title: "Tailwind",
          level: "Experienced",
        },
      ],
    },
    {
      title: "Back-End Developer",
      items: [
        {
          id: 1,
          title: "Node.js",
          level: "Advanced",
        },
        {
          id: 2,
          title: "NestJS",
          level: "Experienced",
        },
        {
          id: 3,
          title: "Express",
          level: "Advanced",
        },
        {
          id: 4,
          title: "SQL",
          level: "Experienced",
        },
        {
          id: 5,
          title: ".NET",
          level: "Experienced",
        },
        {
          id: 6,
          title: "C#",
          level: "Experienced",
        },
        {
          id: 7,
          title: "VB",
          level: "Experienced",
        },
        {
          id: 8,
          title: "Delphi",
          level: "Intermediate",
        },
      ],
    },
  ];
  return (
    <section id="experience">
      <Title title="My Experience" text="What Skills I Have" />
      <div className="experience-container">
        {experience.map(({ title, items }) => (
          <div key={title} className="experience-item">
            <h2 className="experience-title">{title}</h2>
            <div className="experience-item-container">
              {items.map(({ id, title, level }) => (
                <Feature key={id} title={title} level={level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
