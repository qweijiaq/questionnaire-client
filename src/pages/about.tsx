import Head from "next/head";

type PropsType = {
  info: string;
};

/**
 * About 页面组件，用于展示关于页面信息
 * @param {PropsType} props - 组件的属性，包括 info 字段用于显示额外信息
 */
export default function About(props: PropsType) {
  return (
    <>
      {/* 定义页面的头部信息 */}
      <Head>
        <title>Next.js About</title>
        <meta name="description" content="about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About page</h1>
        <p>{props.info}</p>
      </main>
    </>
  );
}

/**
 * 获取服务器端渲染的属性
 * @returns {Promise} 包含 props 的 Promise 对象，包括 info 字段用于显示额外信息
 */
export async function getServerSideProps() {
  // 可以 await 异步请求

  console.log("每次请求都会执行...");

  return {
    props: {
      info: "请求来的数据 100",
    },
  };
}
