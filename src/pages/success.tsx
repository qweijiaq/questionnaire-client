import PageWrapper from "@/components/PageWrapper";

/**
 * 成功页面组件，用于展示问卷提交成功的情况
 */
export default function Success() {
  return (
    <PageWrapper title="提交成功">
      {/* 页面标题 */}
      <h1>成功</h1>
      {/* 提示信息 */}
      <p>问卷提交成功</p>
    </PageWrapper>
  );
}
