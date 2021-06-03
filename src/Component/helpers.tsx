
export const pad = (num:number, size:number ) => {
      let check:string = "" + num;
      while (check.length < size) check = "0" + check;
      return check;
    }