import React, { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/Common.module.scss";

type PropsType = {
  title: string; // 页面标题
  desc?: string; // 页面描述
  css?: string; // 自定义 CSS 样式
  js?: string; // 自定义 JavaScript
  children: JSX.Element | JSX.Element[]; // 子组件
};

/**
 * 页面包装器组件
 * @param {PropsType} props - 组件属性
 * @returns {JSX.Element} 页面包装器元素
 */
const PageWrapper: FC<PropsType> = (props: PropsType) => {
  // 解构属性
  const { title, desc = "", css = "", js = "", children } = props;

  return (
    <>
      <Head>
        {/* 页面头部 */}
        <title>{title}</title> {/* 页面标题 */}
        <meta name="description" content={desc} /> {/* 页面描述 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* 页面视口设置 */}
        <link rel="icon" href="/favicon.ico" /> {/* 页面图标 */}
        <style>{css}</style> {/* 自定义 CSS 样式 */}
      </Head>
      <main className={styles.container}>
        {/* 页面内容 */}
        {children}
      </main>
      <Script id="page-js">{js}</Script> {/* 自定义 JavaScript */}
    </>
  );
};

export default PageWrapper;
