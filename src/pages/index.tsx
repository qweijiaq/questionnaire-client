import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// 使用 Inter 字体，并指定子集为拉丁字符集
const inter = Inter({ subsets: ["latin"] });

/**
 * 主页组件，展示欢迎页面和相关链接
 */
export default function Home() {
  return (
    <>
      {/* 页面头部 */}
      <Head>
        {/* 页面标题和描述 */}
        <title>蜗牛问卷</title>
        <meta name="description" content="Generated by create next app" />
        {/* 响应式视图 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 网站图标 */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 主要内容区域 */}
      <main className={styles.main}>
        {/* 居中容器 */}
        <div className={styles.center}>
          {/* 页面标题 */}
          <h1>欢迎使用蜗牛问卷</h1>
        </div>

        {/* 外部链接 */}
        <a
          href="https://github.com/qweijiaq"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* GitHub 链接 */}
          <h2 className={inter.className}>
            GitHub <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://blog.wei-jia.top"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 博客链接 */}
          <h2 className={inter.className}>
            Blog <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://page.wei-jia.top/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 个人主页链接 */}
          <h2 className={inter.className}>
            Page <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://woniu.blog.csdn.net/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* CSDN 链接 */}
          <h2 className={inter.className}>
            CSDN <span>-&gt;</span>
          </h2>
        </a>
      </main>
    </>
  );
}
