const list = [3, 13, 2, 44, 5, 6, 78, 8, 9];

// const x = list.sort();

// map / reduce

// list.forEach((element) => {
//   console.log(element);
// });

for (let i = 0; i < list.length; i++) {
  if (list[i] > list[i + 1]) {
    console.log(list[i], list[i + 1]);
    list.splice(i, 1);
    list.push(list[i]);
  }
}
console.log(list);
// let a = list[i];
// let b =  list[i + 1];
// let c = a;
// (a = b), (b = c), (c = a);
// const [a, b] = [b, a];

// const rates = 58

// if(a>b){return success(a,b)}else{return fail}
