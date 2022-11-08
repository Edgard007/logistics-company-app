const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * Hook to monitor the status of requests
 * @param {string} path URL
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [method] Method of request
 * @param {object} body Body of request
 * @param {object} headers Headers of request
 */
const requestApi = (path = "", method = "GET", body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: method,
      headers: { ...defaultHeaders, ...headers },
      body: Object.keys(body).length ? JSON.stringify({ ...body }) : null,
    })
      .then((response) => {
        const status = response?.status;
        const ok = response?.ok || false;

        response
          .json()
          .then((json) => {
            resolve({ ok: ok, data: json, status: status });
          })
          .catch(() => resolve({ ok: ok, data: [], status: status }));
      })
      .catch((e) => {
        console.error("||* ==> Error requestApi <== *||", e);
        resolve({ ok: false, data: {} });
      });
  });
};

export { requestApi };
