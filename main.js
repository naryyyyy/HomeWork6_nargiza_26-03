//console.log(...Loading);
//
//   setTimeout(() => {
//    product.soldOut=true
//    console.log(product, '2 step');
//   }, 3000);
//   setTimeout(() => {
//    console.log();
//   }, 2000);
//},1000)
//const promiseRequest = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//   const product={
//    name:'Product name',
//    price:'$0'
//   }
//   console.log(product, '1 step')
//   resolve(product)
//}, 1000)
//})
//
//const resolveData=(product)=>{
//    setTimeout(() => {
//        product.soldOut=true
//        console.log(product, '2 step');
//    }, 3000);
//}
//const rejectData=()=>{
//    console.log(error);
//}
//promiseRequest.then(resolveData, rejectData)
//const request= new Promise((resolve, reject)=>{
//    setTimeout(() => {
 //       const product ={
         //   name:'Iphone XX',
         //   price:'$4000'
 //       }
 //       console.log(product);
 //       resolve(product)
  //  }, 1000);
//})
//const rejectData=()=>{
 //   console.log(error);
//}
//request.then(product=>{
//    return new Promise((resolve)=>{
 //       setTimeout(() => {
   //        product.price='$5000'
   //     console.log(product, '2 step'); 
 //       }, 2000);
        
 //   })
//}).then((product)=>{
//    setTimeout(() => {
//        product.soldOut=true
//        console.log(product, '3 step');
//    }, 2000);
//}).catch(()=>{//
 //   return alert('error')
//})
//.finally(()=>{//
 //   return alert('finally')
//})
// const request=fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((response)=>response.json())
// .then((data)=>console.log(data.title))
//console.log(request);

//fetch('https://jsonplaceholder.typicode.com/todos')
//.then(response=>response.json())
//.then(data=>{
//  data.forEach(item=>{
//    //
//  })
//});
const card=document.querySelector('.card')
const btnPrev=document.querySelector('.btn-prev')
const btnNext=document.querySelector('.btn-next')

let count=1
const getData=(id)=>{
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => response.json())
    .then(todo => {
      card.innerHTML =` 
        <h2>${todo.title}</h2>
        <span>${todo.id}</span>
        <h3>${todo.completed}</h3>`
      ;
    })
    .catch(error => console.log(error));
};

btnNext.onclick = () => {
  count++;
  getData(count);
};

btnPrev.onclick = () => {
  if (count > 1) {
    count--;
    getData(count);
  }
};

getData(count);
 //2hw
 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));


























