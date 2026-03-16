import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css"; // 共用首頁的樣式

export default function About() {
  return (
    <Layout title="關於我" description="了解更多關於 7Lun 的故事">
      <main className={styles.mainContainer}>
        <div className="container">
          <div className={styles.aboutContent} style={{ paddingTop: "2rem" }}>
            <div className={styles.aboutText}>
              <h1 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                關於 7Lun
              </h1>
              <p className={styles.description}>
                你好！我目前正走在前端開發的旅程中。
                對我來說，每一行程式碼都是一個成長的腳印。
                我喜歡在開發過程中探索各種可能，並透過文字記錄下那些曾經讓我困惑、最後卻豁然開朗的瞬間。
              </p>
              <h3 style={{ color: "#6f4e37" }}>我的特質</h3>
              <ul className={styles.description}>
                <li>
                  <strong>持續學習：</strong> 擁抱新技術，目前正深入鑽研 React
                  生態系。
                </li>
                <li>
                  <strong>細膩排版：</strong>{" "}
                  追求視覺上的舒適感，熱愛奶茶色系與簡約設計。
                </li>
                <li>
                  <strong>筆記愛好者：</strong>{" "}
                  相信「寫得下來才是自己的」，因此有了程式字典的誕生。
                </li>
              </ul>
            </div>
            <div className={styles.avatarWrapper}>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&h=300"
                alt="7Lun"
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
