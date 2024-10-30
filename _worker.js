addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Target URL
  const targetUrl = 'https://raw.githubusercontent.com/onepunchko/chromego_merge/refs/heads/main/sub/merged_proxies_new.yaml'

  // Create a new request with the target URL and original request's method and headers
  const newRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.method === 'POST'? request.body : null,
    redirect: 'follow'
  })

  // Send the request to the target server
  const response = await fetch(newRequest)

  // Return the target server's response
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  })
}

// Add this line to make it compatible with Pages
export default handleRequest
