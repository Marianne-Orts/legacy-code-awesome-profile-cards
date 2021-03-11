const sendDataToApi = (data) => {
  const urlServe = "https://awesome-profile-cards.herokuapp.com/card";

  return fetch(urlServe, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
};

export default sendDataToApi;
