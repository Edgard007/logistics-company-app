const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const requestApi = (path = "", method = "GET", body = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: method,
      headers: { ...defaultHeaders, ...headers },
      body: Object.keys(body).length ? JSON.stringify({ ...body }) : null,
    })
      .then((response) => {
        const status = response.status;
        response
          .json()
          .then((json) => {
            resolve({ ok: status === 200, data: json, status: status });
          })
          .catch(() =>
            resolve({ ok: status === 200, data: [], status: status })
          );
      })
      .catch((e) => {
        console.error("||* ==> Error requestApi <== *||", e);
        resolve({ ok: false, data: {} });
      });
  });
};

export { requestApi };
