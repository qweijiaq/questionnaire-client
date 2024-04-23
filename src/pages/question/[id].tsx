import PageWrapper from "@/components/PageWrapper"; // 导入页面包装组件
import { getQuestionById } from "@/services/question"; // 导入根据问卷ID获取问卷数据的服务函数
import { getComponent } from "@/components/QuestionComponents"; // 导入获取问题组件的函数
import styles from "@/styles/Question.module.scss"; // 导入样式

/**
 * Question 页面的 Props 类型定义
 */
type PropsType = {
  errno: number; // 错误码
  data?: {
    // 问卷数据对象
    id: string; // 问卷ID
    title: string; // 问卷标题
    desc?: string; // 问卷描述
    js?: string; // 问卷相关 JavaScript 代码
    css?: string; // 问卷相关 CSS 样式
    isPublished: boolean; // 问卷是否已发布
    isDeleted: boolean; // 问卷是否已删除
    componentList: Array<any>; // 组件列表
  };
  msg?: string; // 错误消息
};

/**
 * Question 页面组件
 */
export default function Question(props: PropsType) {
  const { errno, data, msg = "" } = props; // 解构 Props

  // 数据错误处理
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  const {
    id,
    title = "",
    desc = "",
    isDeleted,
    isPublished,
    componentList = [],
  } = data || {}; // 解构问卷数据

  // 如果问卷已删除，则提示错误
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已经被删除</p>
      </PageWrapper>
    );
  }

  // 如果问卷尚未发布，则提示错误
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    );
  }

  // 渲染组件列表
  const ComponentListElem = (
    <>
      {componentList.map((c) => {
        const ComponentElem = getComponent(c);
        return (
          <div key={c.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        );
      })}
    </>
  );

  // 渲染问卷表单
  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer">
        <input type="hidden" name="questionId" value={id} />

        {ComponentListElem}

        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
}

/**
 * 获取服务器端 Props
 */
export async function getServerSideProps(context: any) {
  const { id = "" } = context.params; // 从上下文参数中获取问卷ID

  // 根据问卷ID获取问卷数据
  const data = await getQuestionById(id);

  return {
    props: data, // 返回问卷数据作为 Props
  };
}
