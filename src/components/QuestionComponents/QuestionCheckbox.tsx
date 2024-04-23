import React, { FC, useEffect, useState } from "react";
import styles from "./QuestionCheckbox.module.scss";

/**
 * PropsType 定义了组件的属性类型
 * - fe_id: 组件的前端 id
 * - props: 组件的其他属性，包括：
 *   - title: 标题
 *   - isVertical: 是否垂直布局，默认为水平布局
 *   - list: 选项列表，包括：
 *     - value: 选项值
 *     - text: 选项显示文本
 *     - checked: 是否默认选中
 */
type PropsType = {
  fe_id: string;
  props: {
    title: string;
    isVertical?: boolean;
    list: Array<{
      value: string;
      text: string;
      checked: boolean;
    }>;
  };
};

/**
 * QuestionCheckbox 是一个复选框组件，接收 PropsType 属性
 */
const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, list = [] } = props;

  // 用于存储当前选中的值的状态
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // 初始化时，根据默认选中状态设置选中值
  useEffect(() => {
    list.forEach((item) => {
      const { value, checked } = item;
      if (checked) {
        setSelectedValues((selectedValues) => selectedValues.concat(value));
      }
    });
  }, [list]);

  // 切换选中状态的函数
  function toggleChecked(value: string) {
    if (selectedValues.includes(value)) {
      // 如果已经被选中了，则取消选择
      setSelectedValues((selectedValues) =>
        selectedValues.filter((v) => v !== value)
      );
    } else {
      // 如果未被选中，则增加选择
      setSelectedValues((selectedValues) => selectedValues.concat(value));
    }
  }

  return (
    <>
      <p>{title}</p>

      {/* 隐藏域用于存储选中值 */}
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />

      {/* 选项列表 */}
      <ul className={styles.list}>
        {list.map((item) => {
          const { value, text, checked } = item;

          // 根据是否垂直布局确定样式类名
          let className;
          if (isVertical) className = styles.verticalItem;
          else className = styles.horizontalItem;

          return (
            <li key={value} className={className}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(value)}
                  onChange={() => toggleChecked(value)}
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCheckbox;
