function func(a, b) {
  if (b) {
      return func(b, a % b);
  } else {
      return Math.abs(a);
  };
};

console.log('Наибольший общий делитель: ' +
func(Number(prompt('Укажите первое число: ', 1)),
Number(prompt('Укажите второе число: ', 1))));