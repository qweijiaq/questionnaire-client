import React, { FC } from "react";
import styles from "./QuestionTextarea.module.scss";

type PropsType = {
  fe_id: string; // 表单元素 ID
  props: {
    title: string; // 文本域标题
    placeholder?: string; // 文本域占位符
  };
};

const QuestionTextarea: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      <p>{title}</p>
      <div className={styles.textAreaWrapper}>
        <textarea name={fe_id} placeholder={placeholder} rows={5} />{" "}
        {/* 渲染文本域 */}
      </div>
    </>
  );
};

export default QuestionTextarea;
