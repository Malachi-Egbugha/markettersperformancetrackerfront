//check if is current path
import { History } from 'history';
export const isActive = (history: History, path: string) => {
  let activate = history.location.pathname === path ? true : false;
  return activate;
};

//check is user is head of department
//check if user is HR head
