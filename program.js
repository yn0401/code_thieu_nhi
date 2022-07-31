function GiaiThua(n) {
    if (n == 0) {
      return 1;
    }
    let GiaiThua = 1;
    for (let i = 2; i <= n; i++) {
        GiaiThua = GiaiThua * i;
    }
    return GiaiThua;
  }

  function C(n, k) {
    let total = 0;
    if (n >= 0 && k <= n) {
      temp = GiaiThua(n) / (GiaiThua(k) * GiaiThua(n - k));
      return temp;
    }
  }
  
  function main(input) {
    const array = input.split(" ");
  //   console.log(input);
    let x = Number(array[0]);
    let y = Number(array[1]);
    let la = 52;
    let chat = 13;
    let xacSuat = 0;
    if (y <= x && y <= 13) {
      for (let i = y; i <= x; i++) {
        if (i <= 13) {
          xacSuat += (C(chat, i) * C(la - chat, x - i)) / C(la, x);
        }
      }console.log(xacSuat.toFixed(2));
    }else{
      console.log("0");
    }
  }
let u = main("10 5");
  module.exports = main;