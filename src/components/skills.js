import React, { useState } from "react"
import { useSfx } from "../hooks/use-sfx.js"
import styles from "../styles/skills.module.css"

const skills = {
  backend: [
    { name: "Elasticsearch", favorite: true },
    { name: "Elixir", favorite: false },
    { name: "Express", favorite: true },
    { name: "MongoDB", favorite: false },
    { name: "Node.js", favorite: true },
    { name: "Phoenix", favorite: false },
    { name: "PostgreSQL", favorite: false },
    { name: "Python", favorite: false },
    { name: "Rails", favorite: true },
    { name: "Redis", favorite: true },
    { name: "Ruby", favorite: true },
    { name: "Testing", favorite: true },
  ],
  frontend: [
    { name: "CSS", favorite: false },
    { name: "Cypress", favorite: false },
    { name: "GraphQL", favorite: false },
    { name: "HTML", favorite: true },
    { name: "Javascript", favorite: true },
    { name: "npm", favorite: false },
    { name: "React", favorite: true },
    { name: "Swift (iOS)", favorite: false },
    { name: "Vue.js", favorite: true },
    { name: "Web perf.", favorite: true },
    { name: "Webpack", favorite: true },
  ],
  cloud: [
    { name: "AWS", favorite: true },
    { name: "Athena", favorite: false },
    { name: "CI/CD", favorite: true },
    { name: "CloudFront", favorite: false },
    { name: "Docker", favorite: false },
    { name: "Firehose", favorite: false },
    { name: "Heroku", favorite: false },
    { name: "K8s", favorite: false },
    { name: "Kinesis", favorite: true },
    { name: "Lambda", favorite: true },
    { name: "S3", favorite: false },
    { name: "SNS", favorite: false },
    { name: "SQS", favorite: false },
  ],
  languages: [
    { name: "English", favorite: false },
    { name: "Hebrew", favorite: false },
    { name: "Spanish", favorite: true },
  ],
  other: [
    { name: "Agile", favorite: false },
    { name: "Git", favorite: true },
    { name: "Leadership", favorite: true },
    { name: "Management", favorite: false },
    { name: "Scrum", favorite: true },
  ],
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(Object.keys(skills)[0])
  const { playClick, playPop } = useSfx()

  const handleChange = event => {
    playClick()
    setSelectedSkill(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <i className={`${styles.titleIcon} nes-icon trophy is-medium`}></i>
        <h2 className={styles.mainTitle}>Mario's</h2>
        <div className={`${styles.select} nes-select`}>
          <select required value={selectedSkill} onMouseOver={playPop} onChange={handleChange}>
            {Object.keys(skills).map(skillOption => {
              return (
                <option key={skillOption} value={skillOption}>
                  {skillOption.charAt(0).toUpperCase() + skillOption.slice(1)}
                </option>
              )
            })}
          </select>
        </div>
        <h2 className={styles.mainTitle}>Skills</h2>
        <i className={`${styles.titleIcon} nes-icon trophy is-medium`}></i>
      </div>

      <div className={styles.skillsContainer}>
        {skills[selectedSkill].map(skill => {
          return (
            <span key={skill.name} className={styles.badgeContainer}>
              {skill.favorite && (
                <a
                  className={`${styles.favorite} nes-badge is-icon`}
                >
                  <span className="is-warning">
                    <i className="nes-icon star is-small"></i>
                  </span>
                  <span></span>
                </a>
              )}
              <a
                className={`${styles.badge} nes-badge`}
              >
                <span className="is-primary">{skill.name}</span>
              </a>
            </span>
          )
        })}
      </div>
    </div>
  )
}
