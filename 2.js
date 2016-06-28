var numbers = process.argv.slice(2)
var sum = 0;

numbers.forEach(function(num) {
  sum += Number(num);
});

console.log(sum);
