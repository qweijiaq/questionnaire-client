import React, { FC } from "react";
import styles from "./QuestionInput.module.scss";

/**
 * QuestionInput 组件属性类型
 */
type PropsType = {
  /**
   * 前端 ID
   */
  fe_id: string;
  /**
   * 组件属性对象
   */
  props: {
    /**
     * 输入框标题
     */
    title: string;
    /**
     * 输入框占位符
     */
    placeholder?: string;
  };
};

/**
 * QuestionInput 组件
 */
const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      {/* 输入框标题 */}
      <p>{title}</p>
      {/* 输入框包装器 */}
      <div className={styles.inputWrapper}>
        {/* 输入框 */}
        <input name={fe_id} placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionInput;
