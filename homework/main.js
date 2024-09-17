// 9 - masala
{
  console.log(` 9 - masala`);
  let array = [1, 3, 3, 5, 6, 7, 4, 5, 6, 4, 3, 5];
  function dublicateDelete(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      } else {
      }
    }
    return console.log(newArr);
  }
  dublicateDelete(array);
}
// 10 - masala
{
  console.log(`10 - masala`);
  function getLevel(n) {
    result = [];
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        result.push(2 ** i);
      }
      return console.log(result);
    } else {
      return `0 dan katta son kirit`;
    }
  }
  getLevel(12);
}
// 11 - masala
// {
//   console.log(`11 - masala`);

//   //   let n = prompt("son kirit");
//   let Yigindi = (str = prompt("son kirit")) => {
//     arr = str.split("");
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       result += Number(element);
//     }
//     return console.log(result);
//   };
//   Yigindi();
// }
// 12 - masala
{
  console.log(`12- masala`);

  let foo = (...rest) => {
    let a = rest;
    let yigindi = 0;
    for (let i = 0; i < a.length; i++) {
      yigindi += a[i];
    }
    return console.log(String(yigindi).split(""));
  };
  foo(2, 4, 5, 7, 89, 7, 6, 5, 4);
}
// 13 - masala
{
  function palindrome(num) {
    let reverse = [];
    let arr = String(num).split("");
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      reverse.unshift(element);
    }

    if (reverse.join("") === String(num)) {
      if (!parseInt(num)) {
        return `kiritilgan Soz palindrome, string`;
      } else {
        return ` kiritilgan son palindrome`;
      }
    } else return `false`;
  }

  console.log(palindrome(121));
}
// 14 - masala

{
  function foo(obj) {
    let yigindi = 0;
    let yigindiRaqam = 0;

    for (let item in obj) {
      yigindi += obj[item];
    }
    arr = String(yigindi).split("");
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      yigindiRaqam += +element;
    }
    return `yigindi - ${yigindi}, raqamlarYigindisi - ${yigindiRaqam}`;
  }
  let object = {
    s: 3,
    g: 6,
    yu: 9,
  };

  console.log(foo(object));
}
// 15 - masala
{
  console.log(`15 - masala`);
}
// 16 - masala
{
  console.log(`16 - masala`);
  function getInitialOdds(n) {
    let toqSonlar = [1];
    let toqSon = 1;
    for (let i = 1; i < n; i++) {
      toqSon += 2;
      toqSonlar.push(toqSon);
    }
    return console.log(toqSonlar);
  }
  getInitialOdds(4);
}
// 17 - masala
{
  console.log(`17 - masala`);
  function arrayConcat(list1, list2) {
    newArr = [...list1, ...list2];
    newArr.sort((a, b) => a - b);
    return console.log(newArr);
  }
  arr1 = [1, 2, 4, 3, 2, 5, 2];
  arr2 = [1, 2, 2, 3, 4];
  arrayConcat(arr1, arr2);
}
// 18 - masala
{
  console.log(`18-masala`);
  console.log(` 9 - masala`);
  let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 2, 2];
  function dublicatePush(arr) {
    let newArr = [];
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      } else {
        newArr2.push(arr[i]);
      }
    }
    return console.log(newArr2);
  }
  dublicatePush(array);
}
// 19 - masala
{
  console.log(`19 - masala`);
  var reverse = function (x) {
    result = String(x).split("").reverse().join("");
    return console.log(result);
  };
  reverse(123456789);
}
