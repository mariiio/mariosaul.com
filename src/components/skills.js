import React, { useState } from "react"
import styles from "../styles/skills.module.css"

const skills = {
  backend: [
    "Node.js",
    "Express",
    "Ruby",
    "Rails",
    "Elixir",
    "Phoenix",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Testing",
    "OOP",
  ],
  frontend: [
    "HTML",
    "CSS",
    "Web perf.",
    "REST",
    "GraphQL",
    "Javascript",
    "React",
    "Vue.js",
    "Webpack",
    "npm",
    "Cypress",
    "Swift",
    "iOS",
  ],
  cloud: [
    "Git",
    "CI/CD",
    "AWS",
    "Heroku",
    "Kinesis",
    "CloudFront",
    "Lambda",
    "Athena",
    "SQS",
    "SNS",
    "S3",
    "Firehose",
    "Docker",
    "K8s",
  ],
  languages: ["Spanish", "English", "Hebrew"],
  other: ["Agile", "Scrum", "Leadership", "Management"],
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
