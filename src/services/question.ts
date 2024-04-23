import { get } from "./ajax";

/**
 * 根据问卷 ID 获取问卷信息
 * @param {string} id 问卷 ID
 * @returns {Promise<any>} 返回包含问卷信息的 Promise 对象
 */
export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`; // Mock 或服务端
  const data = await get(url);
  return data;
}
