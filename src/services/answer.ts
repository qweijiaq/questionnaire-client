import { post } from "./ajax";

/**
 * 提交答卷信息
 * @param {any} answerInfo 答卷信息对象
 * @returns {Promise<any>} 返回包含提交结果的 Promise 对象
 */
export async function postAnswer(answerInfo: any) {
  const url = "/api/answer";
  const data = await post(url, answerInfo);
  return data;
}
