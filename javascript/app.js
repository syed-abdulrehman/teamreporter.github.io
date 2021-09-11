//alert ("hello world");
/*
var date = new Date();
var days = ["sunday","monday","tue","wed","thu","fri","sat"];
console.log(days[date.getDay()]);
console.log(date);
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours()+date.getMinutes()+date.getSeconds());

console.log(date.getTime());
*/
function hideout(){
var d= document.getElementById('p1');
d.style.color="red";
d.style.fontSize=2+"em";
console.log(d);
};

function linksrc(){
var c=document.getElementById('aa');
c.href="https://www.google.com";
c.style.color="red";

}

function linksrc1(){
    var e=document.getElementById('aa1');
    e.href="https://www.facebook.com";
    e.style.color="red";
    e.innerText="facebook";
    
    }

    function linksrc2(){
        var f=document.getElementById('aa2');
        f.href="https://www.twitter.com";
        f.style.color="red";
        
        }

function ch(){
   alert('hello');
    var g=document.getElementById('e');
   if (g.value===""){alert('email is required')};

}

function fillCity() {
     var cityName;
     var zipEntered = document.getElementById("zip").value;
     switch (zipEntered) {
     case "60608" :
     cityName = "Chicago";
     break;
     case "68114" :
     cityName = "Omaha";
     break;
     case "53212" :
     cityName = "Milwaukee";
     }
     document.getElementById("city").value = cityName;
     }
    

  //   alert('saylani'.toUpperCase());


  var string = 2.6;

  console.log(string.ceil);




var x= 9.5335;
var z= x.toFixed(2);


console.log(Math.round(x));
console.log(z)


class employee {
                  constructor(name,age,salary){
                     this.name   = name; 
                     this.age    = age;
                     this.salary = salary;
                                              }

                  info(){document.write(`EMPLOYEE CLASS <br>
                                         Name : ${this.name} <br>
                                         Age  : ${this.age} <br>
                                         Salary : ${this.salary} `)}
}


class manager extends employee {
            
            constructor(){
               super(); 
               console.log('hello from manager class');
            
         }

}
let b= new manager(manager,23,3000);
console.log(b.info());




let arr = ['abc','xyz'];
console.log(arr);
let bb =  JSON.stringify(arr);

let cc = JSON.parse(bb);

console.log('data of cc'+typeof(cc));
console.log('data of bb' + typeof(bb));



var user = document.getElementById("aa1");
console.log(user);








