//davaleba

// pirveli davaleba 1

const array = [5, 25, 89, 120, 36];

//1
array.push('javascript', 'pyton');

//2
array.unshift('html', 'css');

//3
const quantity = array.length
console.log(quantity)

//4
array.pop();
array.shift();

//5
console.log(array);



//meore davaleba II

const fruits = ['pear', 'juic', 'banana'];

//1
const length = fruits.length;
console.log(length);

//2
fruits.push('apple', 'ananas');

//3
fruits.unshift('watermelon');

//4
const length1 = fruits.length;
console.log(length1);

//5
fruits.splice(2, 0, 'mango')
console.log(fruits);

//6
fruits.shift();
fruits.pop();

//7
console.log(fruits);





mesame davaleba III

let array = [12, 25, 3, 6, 8, 14, 7, 23];

const arraydouble = array.map(function (item) {
    return item / 3;
})

console.log(arraydouble);



meotxe davaleba IV

let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let arrayNumbers = array.filter(function (item) {
    if(typeof item === 'number') {
        console.log(item)
    }
})


mexute davaleba V

let languages = ['html', 'css', 'javascript', 'python', 'php'];

const languagesFilter = languages.filter(function (item){
    if(item.length > 3) {
        console.log(item);
    }
})


meekvse davaleba VI 

let item = [12, 'google', 32, null, 'yahoo', 25];

let newItem = item.map(function (item) {
    if(typeof item === 'number' ){
        console.log(item * item); 
   }else if(typeof item === 'string') {
        console.log(item.toUpperCase());
    }
})

console.log(newItem)


meshvide davaleba VII

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let wordsAsoebi = words.filter(function (item) {   
    if (typeof item === 'string') {
        if(item.includes ('m', 'M')) {
            console.log(item);
        }
    }
})




merve davaleba VIII

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];


let gaertianebuli = arr1.concat(arr3, arr2);

console.log(gaertianebuli);




mecxre davaleba IX

let arr = [1, 2, 3, 4, 5];

let arr2 = arr.array.forEach(element => {
    
});


meate davaleba X

let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

let newNumbers = numbers.filter(function (item) {
    if(item > 0) {
        console.log(item);
    }
})



metertmete davaleba XI

let arr = [-1, -2, -3, 4].some((item) => item > 0) 

console.log(arr)



metormete davaleba XII

let array =[23,45,32,5,87,7,3,98].sort(function (x,y) {
    
    return y-x
})


console.log(array)


mecamete davaleba XIII

let array =[1, 2, 3, 4, 5];

array.splice(2, 0, 'a', 'b', 'c')

console.log(array);