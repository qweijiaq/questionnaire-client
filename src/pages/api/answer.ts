import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/services/answer";

/**
 * 生成答案信息
 * @param {any} reqBody - 请求体数据
 * @returns {object} 格式化后的答案信息对象
 */
function genAnswerInfo(reqBody: any) {
  const answerList: any[] = [];

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return; // 如果是 questionId 则跳过
    answerList.push({
      componentId: key, // 组件ID
      value: reqBody[key], // 组件值
    });
  });

  return {
    questionId: reqBody.questionId || "", // 问题ID
    answerList, // 答案列表
  };
}

/**
 * 处理提交答案的 API 请求
 * @param {NextApiRequest} req - 请求对象
 * @param {NextApiResponse} res - 响应对象
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    // 如果不是 POST 请求，则返回错误信息
    res.status(200).json({ errno: -1, msg: "Method 错误" });
  }

  // 获取并格式化表单数据
  const answerInfo = genAnswerInfo(req.body);

  console.log("answerInfo", answerInfo);

  try {
    // 提交到服务端 Mock
    const resData = await postAnswer(answerInfo);
    if (resData.errno === 0) {
      // 如果提交成功了，则重定向到成功页面
      res.redirect("/success");
    } else {
      // 提交失败了，则重定向到失败页面
      res.redirect("/fail");
    }
  } catch (err) {
    // 如果出现错误，则重定向到失败页面
    res.redirect("/fail");
  }

  // res.status(200).json({ errno: 0 })
}
