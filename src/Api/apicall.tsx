import { LOCAL } from "./apiconfig";
type Props = {
  
    email: string;
    password: string;
  
}


//upload excel data to backend
//read all data in performance
//fetch all allocations
export const getAllocations = async () => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  
  try {
    let fetallocations = await fetch(`${LOCAL}/read`, {
      method: "POST",
      headers: headers,
      
    });
    return fetallocations.json();
  } catch (err) {
    console.log(err);
  }
};

//sigin api
export const signin = async (user:Props) => {
  return fetch(`${LOCAL}/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//signout
export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("usersign");
    return fetch(`${LOCAL}/api/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
      })
      .catch((err) => console.log(err));
  }
};



//add user api
export const adduser = async (user: Props) => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  return fetch(`${LOCAL}/api/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
 
//fetch users api
export const fetchusers = async () => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  return fetch(`${LOCAL}/user/read`, {
    method: "POST",
    headers: headers,
  
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
 
//update user
export const updateUser = async (id: any, update: any) => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  try {
    let updateuser = await fetch(`${LOCAL}/user/updateuser/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(update),
    });
    return updateuser.json();
  } catch (err) {
    console.log(err);
  }
};

//fetch statisticall report
export const stats= async () => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  try {
    let statsperf = await fetch(`${LOCAL}/stats`, {
      method: "POST",
      headers: headers,
    });
    return statsperf.json();
  } catch (err) {
    console.log(err);
  }
};

//find a user
export const finduser = async (id:any) => {
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');

  try {
    let finduser = await fetch(`${LOCAL}/user/finduser/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer: ${token}`,
      },
    });
    return finduser.json();
  } catch (err) {
    console.log(err);
  }
};

//update user
export const updatedetail = async (id: any, update: any) => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  try {
    let updateuser = await fetch(`${LOCAL}/user/updatedetail/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(update),
    });
    return updateuser.json();
  } catch (err) {
    console.log(err);
  }
};
//update Email
export const updateemail = async (id: any, update: any) => {
  const headers = new Headers();
  const { token } = JSON.parse(localStorage.getItem("usersign") || '{}');
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer: ${token}`);
  try {
    let updateuser = await fetch(`${LOCAL}/user/updateemail/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(update),
    });
    return updateuser.json();
  } catch (err) {
    console.log(err);
  }
};


