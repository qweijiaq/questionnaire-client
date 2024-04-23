import { Html, Head, Main, NextScript } from "next/document";

/**
 * 自定义 Next.js 文档的根组件
 */
export default function Document() {
  return (
    <Html lang="en">
      {/* 定义文档的头部信息 */}
      <Head />
      <body>
        {/* 主要内容 */}
        <Main />
        {/* Next.js 所需的脚本 */}
        <NextScript />
      </body>
    </Html>
  );
}
