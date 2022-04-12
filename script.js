function fizzBuzz(number) {
    {
      var numbers = [];
            if (number < 4){
            return "Please insert a value greater than or equal to 4";
                }
            else
                if (number == null){
            return [];
                }
            else 
                  if (isNaN(number)){
            return "Please insert a number larger or equal to 4";
            } //changed to isNAN
    
        for (let i = 1; i <= number; i++){
            if(i%4 == 0 && i%5 == 0){
                numbers.push("FIZZBUZZ");
            }
            else if (i%4 == 0){
                numbers.push("Fizz");
            }
            else if(i%5 == 0){
                numbers.push("Buzz");
            }
            else{
            numbers.push(i);
        }
      }
     }
     return numbers;
    }

  console.log(fizzBuzz(10));