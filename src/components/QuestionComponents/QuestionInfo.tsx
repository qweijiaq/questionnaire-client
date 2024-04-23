import React, { FC } from "react";

/**
 * 问题信息组件属性类型
 */
type PropsType = {
  /**
   * 标题
   */
  title: string;
  /**
   * 描述
   */
  desc?: string;
};

/**
 * 问题信息组件
 * @param {PropsType} props 组件属性
 * @returns {JSX.Element} 返回问题信息组件的 JSX 元素
 */
const QuestionInfo: FC<PropsType> = ({ title, desc }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default QuestionInfo;
