import React, { FC } from "react";
import styles from "./QuestionRadio.module.scss";

/**
 * PropsType 定义了 QuestionRadio 组件的属性类型
 * @param fe_id 组件标识符
 * @param props 组件属性对象
 *   @param title 标题
 *   @param options 选项列表
 *     @param value 选项值
 *     @param text 选项文本
 *   @param value 当前选中的值
 *   @param isVertical 是否竖向排列选项
 */
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{
      value: string;
      text: string;
    }>;
    value: string;
    isVertical: boolean;
  };
};

/**
 * QuestionRadio 是一个 React 函数组件，用于渲染单选框组件
 * @param fe_id 组件标识符
 * @param props 组件属性对象
 */
const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, options = [], value, isVertical } = props;

  return (
    <>
      {/* 渲染标题 */}
      <p>{title}</p>
      {/* 渲染选项列表 */}
      <ul className={styles.list}>
        {options.map((opt) => {
          const { value: val, text } = opt;

          // 根据 isVertical 决定样式
          let liClassName = "";
          if (isVertical) liClassName = styles.verticalItem;
          else liClassName = styles.horizontalItem;

          return (
            <li key={val} className={liClassName}>
              <label>
                {/* 渲染单选框 */}
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {/* 渲染选项文本 */}
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
