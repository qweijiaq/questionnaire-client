import React, { FC, CSSProperties } from "react";

/**
 * 段落组件属性类型
 */
type PropsType = {
  /**
   * 文本内容
   */
  text: string;
  /**
   * 是否居中显示，默认为 false
   */
  isCenter?: boolean;
};

/**
 * 段落组件
 */
const Paragraph: FC<PropsType> = ({ text, isCenter }) => {
  // 样式对象
  const style: CSSProperties = {};
  // 如果需要居中显示，则设置样式
  if (isCenter) style.textAlign = "center";

  // 将文本按换行符分割成数组
  const textList = text.split("\n");

  return (
    <p>
      {/* 遍历文本数组 */}
      {textList.map((t, index) => (
        <span key={index}>
          {/* 非第一行则添加换行 */}
          {index > 0 && <br />}
          {/* 显示文本内容 */}
          {t}
        </span>
      ))}
    </p>
  );
};

export default Paragraph;
