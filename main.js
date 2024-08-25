//1 exercise 

let result = []

for(let i = 0; i < Infinity;i++){
let order = prompt('Введите комманду')

let devide = order.split(', ')

devide[0] == 'add' ? result.push(devide[1]) : ''

for(let key in result){
    devide[0] == 'del' && devide[1] == result[key] ? result.splice(key,1) : ''
}


if(order == 'stop'){
    break
}
console.log(result);
}


//2 ecercise

let array = [1,2,3,4,5,6,7,8,9,10,11]

let odd = []
let even = []

for(let i = 0; i < array.length;i++){
if(array[i] %2 == 0){
odd.push(array[i])
}else if(array[i] %2 == 1){
    even.push(array[i])
}
}
console.log(even);
console.log(odd);