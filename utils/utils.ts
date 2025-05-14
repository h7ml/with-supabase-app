import { redirect } from "next/navigation";

/**
 * 重定向到指定路径，并将编码后的消息作为查询参数。
 * @param {('error' | 'success')} type - 消息类型，可以是 'error' 或 'success'。
 * @param {string} path - 重定向到的路径。
 * @param {string} message - 要编码并作为查询参数添加的消息。
 * @returns {never} 此函数不返回任何内容，因为它会触发重定向。
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}