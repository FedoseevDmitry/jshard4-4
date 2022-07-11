const compare = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  const compareFunc = firstNumber < secondNumber ?
  `Число ${secondNumber} больше.` : `Число ${firstNumber} больше.`;
  
  return compareFunc;
};

console.log(compare(Number(prompt('Введите первое число: ', 1)),
Number(prompt('Введите второе число: ', 2))));