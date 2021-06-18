// alert("Hello Everyone");
// var _$;
num=0
if (num<=-1) {
    ++num;
    console.log("num",num);
}
else{
    num--;
    console.log("num",num);
}
var int ="hello";
var float="world";
// alert("float "+"int");
// prompt("how many cats");
// var number=1;
// if (number==0) {
//     number++;
//     console.log("number",number);
// }
// else if (number===1) {
//     number--;
//     console.log("number",number);
// }
// else if (nubmer===2) {
//     // number++;
//     console.log("number",number);
// }
// else{
//     console.log("number is integer",number);
// }
// var pro=prompt("Enter your name");
//  var p=pro.length;
// console.log("length is",p);
// if (p>5 || p<12 && p===4) {
//     console.log("prompt",p);
// }
var way=5;
if (way==5) {
    console.log("way",way);
    if (way==5) {
        
           console.log("way",way);
           console.log("way",way);
           console.log("way",way);
            
        }
    }
    var city1="America";
// alert("welcome tu "+ city1)
var cities=["fsd","isb","mul","pes","khi","lhr"];
cities.splice(2,2,"i23","dfg");

// console.log("cities",cities);
// console.log("cities numbwer",cities[2]);
// cities.pop();
// console.log("cities",cities);
// cities.splice(1, 0,"hello")

console.log("cities splice",cities);
slice=cities.slice(1,2);
console.log("cities slice",slice)
for (let index = 0; index < 5; index++) {
console.log("Harry Potter",index);    
}
// shorter way tu write functions/
var up=()=>{
    alert('channel\'s');
}
console.log(typeof way);
console.log(this);
var cit=cities.indexOf("isb");
console.log("ind",cit);


const names=["num","bat","babaxax","ghjjj"];
// for(name of names){
//     console.log("aray is",names);
// }
// const title=document.querySelector(".para");
// const title1=document.querySelector(".but");
// // title.style.color="red";
// title.style.backgroundColor="yellow";


// title1.addEventListener("click",function () {
//     // title.classList.remove("change");
//     title.classList.add("change");
// })
var num=[1,2,3,3,4,4,5,5];
var num1=num.indexOf(0);
document.write(num1);
var words=("LEfti web chfsj");
 words.charAt(words.length-1)
// document.write(words.charAt(6));
console.log(words.charAt(6));
// replace method
var rep=words.replace("LEfti","Naveed");
console.log(rep);
// round method
var rand=4.6;
var math=Math.round(rand);
console.log(math);
// random method
var ran=7;
var math=Math.random(rand);
var m=math*10+1;
console.log(m);
var profit="200"-"130";
console.log(profit);
// var num=prompt("Enter num");
var par=parseInt(num);
console.log(par);
// converting string into number method

var N="24";
var nu=Number(N);
console.log(nu);
// converting number into string method
var str=12345;
var output= str.toString();
document.write(output);
console.log(output);
// toFixed concept
var a=1.450664553;
console.log(a.toFixed(4));
// function concept
function message(greeting,www) {
alert(greeting,www)
}
// return function
function add(a,b) {
    return(a+b);
}
document.write(add(10,50));

// object function
const user={
    name:"naveed",
    age:24,
    married: false,
}
console.log(user.name);
// ARROW function
const greet=()=>{
    return"goog morning";
}
console.log(greet());
// OR ANOTHER WAY TU write arrow funcntion
const great=()=>"Good morning satti g";
console.log(great());
// 2 parameters method 
const onClick=(name,end) =>"Good morning Naveed "+name + end;

console.log(onClick('harry',' By'));  

function n(a,d) {
    console.log(a,d);
}
n(2,6);
// map method
var arr=[10,20,30,40,50];
var newArr=arr.map(function (value,i,arr) {
    console.log(value);
   
    value++;

console.log(arr);
// return value>30;
//     console.log(value);

    // console.log(i);
})

console.log(newArr);
// filter method
var filter1=[10,30,40,50,60];
var b=arr.filter(function f() {
    
});
console.log(b);

// function filt(value) {
//     return value>20;
// }
var far=[10,20,30,40,50];
b=far.filter(function fill(value) {
    return value>20;
    
})
console.log(b);
// Rest Operator
function show(a,...args) {
    console.log(...args);
}
show(10,20,30,40,50);

function show1(a,...args) {
    console.log(a);
}
show1(10,20,30,40,50);
// console.log(show[0]);
// arguments method
function Rest(b,...a) {
    console.log("a",b);
    console.log(...a);
}
Rest(10,20,30);
// argumments method
function r(a) {
    console.log("a",a);
    console.log(arguments);
}
r(10,20,30,30);
// spread operator
a=[1,3,4,5,6];
b=[...a,1,2,4,5,6];
a[0]=20
console.log(a);
console.log(...b);

var global="G";
function print() {
    // var local="L";
    function child(){
        // var child=C
    }
    child()

}

// console.log(print());
// console.log(child());
// Syncronous Javascript one by one method will working only once
function fun2() {
    console.log("function is ending");
}
const fun=()=>{
    console.log("functoin is start");
    fun2();
    console.log("Hello Kidda:)");
}
fun();
// Asyncronous Javascript multiple funtion can perform one Time
const f=()=> {
    setTimeout(()=>{
        console.log("function is ending");

    },3000);
}
const afun=()=>{
    console.log("functoin is start");
    f();
    console.log("Hello Kidda:)");
}
afun();
const var1=()=>{
setTimeout(()=>{
console.log("helloworld");
},5000);
}
var1();
// promise function concept 
let p=new Promise((resolve,reject)=>{
let a=1+1;

if (a==4) {resolve("Success");
}
else{reject("Failure")}}
    )

p.then(console.log("Success"))
p.catch(console.log("Failure"));
// do while loop 42 lecture
var done=1;
do {
    console.log(done);
    done++;
} while (done<=3);
// While lecture 41
var why=0;
while(why<10){
    console.log("why",why);
    why++;
}
var con="gdddd";
var cat=5;
var concat=con +cat;
console.log(concat);
console.log(`my num is${cat}`);
var myVar=10;
// var myVar=myVar+5;
myVar=myVar*=5;
console.log(myVar);
myVar=myVar/=10;
console.log(myVar);
var age= 25;
if (age>25&&age<10) {
    console.log("good");
}else{
    console.log("bad");
}
var link=document.getElementsByTagName("a");
for (let i = 0; i < link.length; i++) {
link[i].className="linker"+i;
    
}
var a="1";
var b=10;
console.log(a+b);
console.log(typeof(a+b));
console.log(Math.max(1,2,3,54,6));
console.log(Math.PI);

var app="apple";
var v=5;
console.log(app*v);
app="6";
console.log(app*v);
if (!isNaN(app)) {
    console.log("golo molo");
}else{
    console.log("dddd");
}
var str='Heloo\'s "World" nab'
console.log(str);
console.log(str.indexOf("a"));
// split Method
var str="c,d,f,r,g,t,y,h";
undefined
str
"c,d,f,r,g,t,y,h"
var strArr=str.split(",");
undefined
console.log(strArr);

var objCar={
    speed:120,
    color: 12,
    shape:"german"
};
console.log(objCar);
console.log(objCar.speed);

// var myDate= new date();
// console.log(myDate());
var tile=document.getElementById("title").st;
// var data=tile.innerHTML="Hey Naveed";
// console.log(data);
var link=document.getElementById("llunk").style.backgroundColor="#000"; float="right";
link.setAttribute("id","link");
console.log(link);
// removing element in DOM
// var parent=document.getElementById("navbar").getElementsByTagName("ul");
function hover() {
    alert("Settime");
    
}



function swap() {
    var img=document.getElementById("img1").src;
    var img2=document.getElementById("img2").src;
    document.getElementById("img1").src=img2;
    document.getElementById("img2").src=img1;
}
var d=document.getElementById("ny");

console.log(d.childNodes[1]);


