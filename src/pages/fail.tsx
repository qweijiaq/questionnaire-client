import PageWrapper from "@/components/PageWrapper";

/**
 * 失败页面组件，用于展示问卷提交失败的情况
 */
export default function Fail() {
  return (
    <PageWrapper title="提交失败">
      {/* 页面标题 */}
      <h1>失败</h1>
      {/* 提示信息 */}
      <p>问卷提交失败</p>
    </PageWrapper>
  );
}
