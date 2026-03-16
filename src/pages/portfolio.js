import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

function PortfolioHeader() {
  return (
    <div className="container text--center" style={{ padding: "4rem 0" }}>
      <h1 className={styles.sectionTitle}>我的專案作品集</h1>
      <p className={styles.description}>
        這裡紀錄了我從零開始，一步步打磨出的專案成果。
      </p>
    </div>
  );
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "伴你在日常 withyourlife",
      desc: "專為銀髮族與身障人士設計的輔具電商平台。使用 Vite 開發並整合 Bootstrap 5 進行客製化切版，注重介面的清晰度與操作的直覺性。",
      link: "/blog/withyourlife-project",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      tags: ["Vite", "Bootstrap 5", "電商切版"],
    },
    {
      title: "YeStep 步道檢索平台",
      desc: "專注於功能實作的步道搜尋系統。開發核心的檢索與篩選功能，優化使用者在查詢自然步道時的互動體驗。",
      link: "/blog/yestep-project",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "檢索功能"],
    },
  ];

  return (
    <Layout title="作品集" description="7Lun 的前端專案展示">
      <main className={styles.mainContainer} style={{ paddingTop: "0" }}>
        <PortfolioHeader />
        <div className="container">
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
                  <span className={styles.projectLinkText}>查看專案細節 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
