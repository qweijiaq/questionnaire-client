import React, { FC, CSSProperties } from "react";

type PropsType = {
  // 不需要 fe_id，而是直接接收文本内容
  text: string; // 标题文本内容
  level: number; // 标题级别，1、2、3 分别对应 h1、h2、h3
  isCenter?: boolean; // 是否居中显示，默认左对齐
};

const QuestionTitle: FC<PropsType> = ({ text, level, isCenter }) => {
  // 样式对象
  const style: CSSProperties = {};
  // 如果需要居中显示，则设置文本对齐方式为居中
  if (isCenter) style.textAlign = "center";

  // 根据标题级别渲染不同级别的标题
  if (level === 1) return <h1 style={style}>{text}</h1>; // h1 标题
  if (level === 2) return <h2 style={style}>{text}</h2>; // h2 标题
  if (level === 3) return <h3 style={style}>{text}</h3>; // h3 标题

  return null; // 如果级别不在 1、2、3 中，则返回 null
};

export default QuestionTitle;
