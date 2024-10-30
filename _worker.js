export default {
  async fetch(request) {
    // 目标 URL
    const targetUrl = 'https://raw.githubusercontent.com/onepunchko/chromego_merge/refs/heads/main/sub/merged_proxies_new.yaml';

    // 创建新的请求，使用目标 URL 和原始请求的 HTTP 方法和头部
    const newRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.method === 'POST' ? request.body : null,
      redirect: 'follow'
    });

    // 发送请求到目标服务器
    const response = await fetch(newRequest);

    // 返回目标服务器的响应
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
}
