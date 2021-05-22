import React from 'react';
import { LOGIN } from "./apiconfig";
type Props = {
   
    name: string;
    email: string;
    imageUrl: string;
    token: string;

  
}
export const login = async (data: Props) => {
    
    
    let response = await fetch(`${LOGIN}/authenticate`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
    });
    
    let bod = await response.json();
    return (bod);
}
//upload excel data to backend
//read all data in performance
//fetch all allocations
export const getAllocations = async () => {
  try {
    let fetallocations = await fetch('http://localhost:8080/read', {
      method: "POST",
    });
    return fetallocations.json();
  } catch (err) {
    console.log(err);
  }
};
