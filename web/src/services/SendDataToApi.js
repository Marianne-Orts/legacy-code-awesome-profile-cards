const sendDataToApi = (data) => {
  const urlServe = "http://localhost:3000/card";

  return fetch(urlServe, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export default sendDataToApi;
