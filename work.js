// 1 What is a callback in JavaScript?          done
// 2 What is a Promise in JavaScript?           done
// 3 What is the ternary operator syntax in JavaScript?   done
// 4 What does asynchronous mean in JavaScript?
// 5 What is async/await in JavaScript?
// 6 setInterval , clearInterval

// setTimeout(console.log('start'), 3000)


// setTimeout(() => {
//   console.log('here');
// }, 2000)



// console.log('end')


// setTimeout(console.log,2000 ,'ok')


function text (){
  console.log('bhavesh')
}

const one = setInterval(text,1000);

setTimeout(()=>{
  clearInterval(one)
},5000)