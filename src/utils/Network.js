import { getObjByKey } from "./Storage";
export const POSTNETWORK = async (
  url,
  payload,
  token = false,
  content = false
) => {
  //   console.log();

  let headers = {
    Accept: "application/json",
    "Content-Type": content ? "multipart/form-data" : "application/json",
  };
  if (token) {
    let loginRes = await getObjByKey("loginResponse");
    console.log("loginnnnnnnn", loginRes.token);
    headers = { ...headers, Authorization: loginRes.token };
  }

  // console.log(headers);
  return await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("error" + error);
    });
};


export const GETNETWORK = async (url, token = false) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    let loginRes = await getObjByKey("loginResponse");
    // console.log(loginRes)
    headers = { ...headers, Authorization: loginRes.token };
  }
  return fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const ADMINGETNETWORK = async (url, token = false) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    let loginRes = await getObjByKey("loginResponse");
    console.log("hyyyyyyyyyyyyfffffffff",loginRes.token)
    headers = { ...headers, Authorization: "Bearer " + loginRes.token };
  }
  return fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const ADMINPOSTNETWORK = async (
  url,
  payload,
  token = false,
  content = false
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": content ? "multipart/form-data" : "application/json",
  };
  if (token) {
    let loginRes = await getObjByKey("loginResponse");
    headers = { ...headers, Authorization: "Bearer " + loginRes.token };
  }

  return await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("error" + error);
    });
};



export const ORDERPOSTNETWORK = async (url, payload, token = false) => {

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  };
  if (token) {
    let loginRes = await getObjByKey('loginResponse');
    headers = { ...headers, Authorization: "Bearer " + loginRes.token }
  }
  // console.log('payload'+JSON.stringify(payload))
  try {
    return Promise.all([await fetch(url, {
      method: 'POST',
      headers: headers,
      body: payload,
      redirect: 'follow'
    }).then((response) => response.json())
      .then((response) => {
        return response
      }).catch(error => {
        console.error('error' + error);
      })])
  } catch (err) {
    console.log(err);
  }

}