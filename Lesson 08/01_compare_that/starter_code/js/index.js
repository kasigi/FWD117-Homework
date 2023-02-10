
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
     console.log("Hello!");
     console.log(a);
     console.log(b);
     console.log("I'm so happpy");
     
     // If a OR b is not a number
     if (isNaN(a) || isNaN(b)){
        comparison = "N/A";
      }

      // If a is greater than b
      if( a > b ){
        comparison = ">";
      }

      // If b is greater than a
      if( b > a ){
        comparison = "<";
      }

      // If they are equal
      if( b == a ){
        comparison = "=";
      }




     document.querySelector('#comparison').innerText = comparison;
   };
 