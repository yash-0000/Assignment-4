Assignment problem no 1//
function findMinNumber(numbers) {
            if (numbers.length === 0) {
              return undefined; // Handle the case where the array is empty
            }
            
            let min = numbers[0]; // Initialize min with the first element
            for (let i = 1; i < numbers.length; i++) {
              if (numbers[i] < min) {
                min = numbers[i];
              }
            }
            
            return min;
          }
          //Assignment problem no 2//
          function reverseArray(arr) {
            const reversed = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              reversed.push(arr[i]);
            }
            return reversed;
          }
          
          //Assignment Problem no 3//
          function calculateAverage(numbers) {
            if (numbers.length === 0) {
              return undefined; // Handle the case where the array is empty
            }
            
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            const average = sum / numbers.length;
            return average;
}
                  //Ast Psignment problem no 4//
                  function removeEvenNumbers(numbers) {
                        return numbers.filter((num) => num % 2 !== 0);
                      }
   // Assignment problem no 5//
   function findCommonElements(arr1, arr2) {
            const common = [];
            for (const element of arr1) {
              if (arr2.includes(element) && !common.includes(element)) {
                common.push(element);
              }
            }
            return common;
          }
          
