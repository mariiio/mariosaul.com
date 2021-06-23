import React, { useState } from "react"
import styles from "../styles/skills.module.css"

const skills = {
  backend: [
    "Elasticsearch",
    "Elixir",
    "Express",
    "MongoDB",
    "Node.js",
    "OOP",
    "Phoenix",
    "PostgreSQL",
    "Rails",
    "Redis",
    "Ruby",
    "Testing",
  ],
  frontend: [
    "CSS",
    "Cypress",
    "GraphQL",
    "HTML",
    "Javascript",
    "REST",
    "React",
    "Swift (iOS)",
    "Vue.js",
    "Web perf.",
    "Webpack",
    "npm",
  ],
  cloud: [
    "AWS",
    "Athena",
    "CI/CD",
    "CloudFront",
    "Docker",
    "Firehose",
    "Git",
    "Heroku",
    "K8s",
    "Kinesis",
    "Lambda",
    "S3",
    "SNS",
    "SQS",
  ],
  languages: ["English", "Hebrew", "Spanish"],
  other: ["Agile", "Leadership", "Management", "Scrum"],
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(Object.keys(skills)[0])
  const handleChange = event => {
    setSelectedSkill(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <i className={`${styles.titleIcon} nes-icon trophy is-medium`}></i>
        <h2 className={styles.mainTitle}>Player's</h2>
        <div className={`${styles.select} nes-select`}>
          <select required value={selectedSkill} onChange={handleChange}>
            {Object.keys(skills).map(skillOption => {
              return (
                <option value={skillOption}>
                  {skillOption.charAt(0).toUpperCase() + skillOption.slice(1)}
                </option>
              )
            })}
          </select>
        </div>
        <h2 className={styles.mainTitle}>Top Skills</h2>
        <i className={`${styles.titleIcon} nes-icon trophy is-medium`}></i>
      </div>

      <div className={styles.skillsContainer}>
        {skills[selectedSkill].map(skill => {
          return (
            <a
              href="javascript:void(0)"
              className={`${styles.badge} nes-badge`}
            >
              <span class="is-primary">{skill}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
