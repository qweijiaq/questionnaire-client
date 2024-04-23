import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  // title: string
  isHidden: string;
  props: any;
};

/**
 * 获取组件元素
 * @param {ComponentInfoType} comp 组件信息对象
 * @returns {ReactElement | null} 返回对应组件的 JSX 元素或 null
 */
export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  // 如果组件标记为隐藏，则返回 null
  if (isHidden) return null;

  // 根据组件类型返回对应的 JSX 元素
  if (type === "questionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type === "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props} />;
  }

  if (type === "questionTitle") {
    return <QuestionTitle {...props} />;
  }

  if (type === "questionParagraph") {
    return <QuestionParagraph {...props} />;
  }

  if (type === "questionInfo") {
    return <QuestionInfo {...props} />;
  }

  if (type === "questionTextarea") {
    return <QuestionTextarea fe_id={fe_id} props={props} />;
  }

  if (type === "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props} />;
  }

  // 如果未匹配到任何组件类型，则返回 null
  return null;
};
