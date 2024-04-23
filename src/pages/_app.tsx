// 导入全局样式表
import "@/styles/globals.css";
// 导入 Next.js 应用所需的类型定义
import type { AppProps } from "next/app";

/**
 * 应用的根组件，接受 AppProps 类型的参数
 * @param Component - 当前渲染的组件
 * @param pageProps - 传递给页面组件的 props
 */
export default function App({ Component, pageProps }: AppProps) {
  // 渲染当前组件并传递页面 props
  return <Component {...pageProps} />;
}
