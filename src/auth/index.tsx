//check if is current path
import { History } from 'history';
type Props = {
  
    email: string;
    password: string;
    token:string;
    _id:any;
    
}
export const isActive = (history: History, path: string) => {
  let activate = history.location.pathname === path ? true : false;
  return activate;
};


export const authenticate = (data:Props, next:any) => {
 
    localStorage.setItem("usersign", JSON.stringify(data));
    next();
  
};
//check if super admin
export const isSuperadmin = () => {
  let { user } = JSON.parse(localStorage.getItem("usersign") || '{}') ;
  let activate = user.usertype === "superadmin" ? true : false;
  console.log(activate);
  return activate;
};
//check if is admin
export const isAdmin = () => {
  let { user } = JSON.parse(localStorage.getItem("usersign") || '{}') ;
  let activate = user.usertype === "admin" ? true : false;
   console.log(activate);
  return activate;
};
//check if is normal user
export const isNormal = () => {
  let { user } = JSON.parse(localStorage.getItem("usersign") || '{}') ;
  let activate = user.usertype === "management" ? true : false;
   console.log(activate);
  return activate;
};
//check if user is signed in
export const isAuthenticated = () => {
  if (localStorage.getItem("usersign")) {
    return JSON.parse(localStorage.getItem("usersign") || '{}');
  } else {
    return false;
  }
};