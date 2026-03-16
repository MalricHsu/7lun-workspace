import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import authorPic from "../../static/img/author.png";

// --- 介紹區 (About Me) ---
function AboutMe() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h1 className={styles.greeting}>Hi, 我是 7Lun</h1>
            <h5 className={styles.subGreeting}>這裡收錄了我的開發軌跡</h5>
            <p className={styles.description}>
              將設計稿轉化為直覺介面，寫出好維護的程式碼是我的前端日常，目前專注於{" "}
              <strong>React 生態系</strong> 與 <strong>Vite 開發流程</strong>。
              <br />
              <br />
              我習慣透過<strong>「語法手冊」</strong>提煉語法重點，並在
              <strong>「生存日誌」</strong>
              寫下除錯的心路歷程。這裡不僅是我的學習筆記，更是把踩坑經驗轉化為成長的基地。
            </p>
            <div className={styles.actionButtons}>
              <Link className={styles.navBtn} to="/about">
                關於我
              </Link>
              <Link className={styles.navBtn} to="/blog">
                生存日誌
              </Link>
              <Link className={styles.navBtn} to="/docs/intro">
                語法手冊
              </Link>
            </div>
          </div>
          <div className={styles.avatarWrapper}>
            <img src={authorPic} alt="7Lun" className={styles.avatarImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 技能區 (Skills) ---
function Skills() {
  const skills = [
    {
      title: "HTML",
      desc: "熟練 HTML5 語意化結構，建立清晰且具邏輯性的網頁骨架，為開發打下堅實基礎。",
    },
    {
      title: "CSS / SCSS",
      desc: "運用 SCSS 管理樣式層級，並精通 Bootstrap 5 框架，建構完美的響應式設計。",
    },
    {
      title: "JavaScript",
      desc: "掌握 ES6+ 語法與非同步 API 操作，能處理複雜的資料邏輯與動態 DOM 交互。",
    },
    {
      title: "React",
      desc: "應用 Hooks 與組件化開發，專注於介面的重用性與狀態管理，提升專案開發效率。",
    },
    {
      title: "Vite",
      desc: "熟悉 Vite 構建工具，利用其極速的冷啟動與熱更新特性，優化前端開發環境與打包流程。",
    },
    {
      title: "Git / GitHub",
      desc: "使用 Git 進行版本管理，熟悉 GitHub 協作工作流。確保專案紀錄清晰，流暢進行團隊開發。",
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>技能 Skill</h2>
        <div className={styles.skillFlexContainer}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3 className={styles.skillName}>{skill.title}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 作品區 (Portfolio) ---
function Portfolio() {
  const projects = [
    {
      title: "伴你在日常 withyourlife",
      desc: "專為銀髮族與身障人士設計的輔具電商平台。使用 Vite 開發並整合 Bootstrap 5 進行高度客製化切版，呈現專業且易用的購物流程。",
      link: "/blog/withyourlife-project",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      tags: ["Vite", "Bootstrap 5"],
    },
    {
      title: "YeStep 步道檢索平台",
      desc: "專注於功能實作的步道檢索系統。開發核心的檢索功能，讓使用者能快速篩選資訊，優化資料查詢的互動體驗。",
      link: "/blog/yestep-project",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript"],
    },
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>專案 Project</h2>
        <div className={styles.projectFlexContainer}>
          {projects.map((project, idx) => (
            <Link
              key={idx}
              to={project.link}
              className={styles.projectItemCard}
            >
              <div className={styles.projectImageWrapper}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.projectImg}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.tagGroup}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.projectLinkText}>閱讀開發紀錄 →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="7lun的程式手冊" description="7Lun 的個人網站">
      <main className={styles.mainContainer}>
        <AboutMe />
        <Skills />
        <Portfolio />
      </main>
    </Layout>
  );
}
