// Create a contextual calculator


let calc={
   
    sum:function(n1,n2){
        var r=this.num1+this.num2+n1+n2;
        return r 
    },
    diff:function(n1,n2){
        var d=this.num1-this.num2-n1-n2;
        return d 
    },

    mul:function(n1,n2){
        var m=this.num1*this.num2*n1*n2;
        return m },

    div:function(){
        var d=(this.num1/this.num2)/(n1/n2);
        return d;
    },

    
};

let set1={
    num1:10,
    num2:20,
};

let set2={
    num1:75,
    num2:56,
};
let set3={
    num1:13,
    num2:34,
};
let set4={
    num1:20,
    num2:100,
};
let set5={
    num1:400,
    num2:4,
};

// call

var result; // declaration of the variable.
const operator = prompt(
  "Enter operator to perform the calculation ( either +, -, * or / ): "
);
var n1=parseFloat(prompt("Enter your number1"));
var n2=parseFloat(prompt("Enter your seconfd num"));
switch (operator) {
  case "+":
      
      result=calc.sum.call(set1,n1,n2);        //call- In call numbers explicitly are passed as arguments
      console.log('set1 sum using call');
      console.log(set1.num1+"+"+set1.num2+"+"+n1+"+"+n2+"="+result);
      window.alert(set1.num1+"+"+set1.num2+"+"+n1+"+"+n2+"="+result);
      break;
  case "-":
      
      let arra_params=[n1,n2];                                      //apply

      result=calc.diff.apply(set2,arra_params);      // in apply array of numbers are passed as argument
      console.log('set3 difference using apply');
      console.log(set2.num1+"-"+set2.num2+"-"+n1+"-"+n2+"="+result);
      window.alert(set2.num1+"-"+set2.num2+"-"+n1+"-"+n2+"="+result);
      break;

  case "*":
        result=calc.mul.call(set4,n1,n2);        ////bind
        console.log('set4 mul using bind');
        console.log(set4.num1+"x"+set4.num2+"x"+n1+"x"+n2+"="+result);
        window.alert(set4.num1+"x"+set4.num2+"x"+n1+"x"+n2+"="+result);                                         
      break;
    
  case "/":
        result=calc.div.call(set5,n1,n2);        ////bind
        console.log('set5 div using bind');
        console.log(set5.num1+"/"+set5.num2+"/"+n1+"/"+n2+"="+result);
        window.alert(set5.num1+"/"+set5.num2+"/"+n1+"/"+n2+"="+result); 
        break;

  default:
    window.alert("The operator is invalid");
    break;
}
