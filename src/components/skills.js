import React, { useState } from "react"
import { useSfx } from "../hooks/use-sfx.js"
import * as styles from "../styles/skills.module.css"

const skills = {
  backend: [
    { name: "Elasticsearch", level: 3 },
    { name: "Elixir/Phoenix" },
    { name: "Javascript", level: 4 },
    { name: "MongoDB", level: 3 },
    { name: "Node.js", level: 4 },
    { name: "NestJS/Express", level: 4 },
    { name: "OS & Network", level: 4 },
    { name: "Python", level: 1 },
    { name: "Redis", level: 3 },
    { name: "REST API", level: 4 },
    { name: "Ruby on Rails", level: 4 },
    { name: "SQL", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Unit Testing", level: 2 },
  ],
  frontend: [
    { name: "Angular", level: 2 },
    { name: "CSS/Sass", level: 1 },
    { name: "Cypress", level: 3 },
    { name: "GraphQL" },
    { name: "HTML", level: 4 },
    { name: "Javascript", level: 4 },
    { name: "Next.js", level: 4 },
    { name: "npm & Yarn", level: 3 },
    { name: "React", level: 4 },
    { name: "Swift (iOS)" },
    { name: "Tailwind CSS", level: 2 },
    { name: "Vue.js", level: 3 },
    { name: "Web perf.", level: 4 },
    { name: "Webpack", level: 3 },
  ],
  cloud: [
    { name: "Argo", level: 4 },
    { name: "Athena" },
    { name: "AWS", level: 4 },
    { name: "CI/CD", level: 4 },
    { name: "CloudFront", level: 4 },
    { name: "Docker", level: 3 },
    { name: "GH Actions", level: 4 },
    { name: "K8s", level: 2 },
    { name: "Kibana", level: 2 },
    { name: "Kinesis", level: 3 },
    { name: "Lambda", level: 4 },
    { name: "S3", level: 4 },
    { name: "SNS", level: 3 },
    { name: "SQS", level: 3 },
  ],
  languages: [
    { name: "English", level: 3 },
    { name: "Hebrew", level: 3 },
    { name: "Italian", level: 1 },
    { name: "Spanish", level: 4 },
  ],
  other: [
    { name: "Agile", level: 4 },
    { name: "Asking ChatGPT", level: 4 },
    { name: "Git", level: 4 },
    { name: "Leadership", level: 4 },
  ],
}

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(Object.keys(skills)[0])
  const { playClick, playPop } = useSfx()

  const handleChange = event => {
    playClick()
    setSelectedSkill(event.target.value)
  }

  const getLevelClass = level => {
    switch (level) {
      case 1:
        return "is-empty"
      case 2:
        return "is-transparent"
      case 3:
        return "is-half"
      case 4:
        return ""
      default:
        return ""
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainTitleContainer}>
        <i className={`${styles.titleIcon} nes-icon trophy is-medium`}></i>
        <h2 className={styles.mainTitle}>Mario's</h2>
        <div className={`${styles.select} nes-select`}>
          <select
            required
            value={selectedSkill}
            onMouseOver={playPop}
            onChange={handleChange}
          >
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
              {skill.level && (
                <a className={`${styles.favorite} nes-badge is-icon`}>
                  <span className="is-warning">
                    <i
                      className={`nes-icon heart is-small ${getLevelClass(
                        skill.level
                      )}`}
                    ></i>
                  </span>
                  <span></span>
                </a>
              )}
              <a className={`${styles.badge} nes-badge`}>
                <span className="is-primary">{skill.name}</span>
              </a>
            </span>
          )
        })}
      </div>
    </div>
  )
}
