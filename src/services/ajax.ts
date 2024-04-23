const HOST = "http://localhost:3001"; // Mock 的 host

/**
 * 发起 GET 请求
 * @param {string} url 请求的 URL
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 */
export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`);
  const data = res.json();
  return data;
}

/**
 * 发起 POST 请求
 * @param {string} url 请求的 URL
 * @param {any} body 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 */
export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: "post",
    body: JSON.stringify(body),
  });
  const data = res.json();
  return data;
}
