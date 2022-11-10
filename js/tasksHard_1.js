'use strict';

const amountIncome = Number(prompt('Сумма Вашего ежемесячного дохода?'));

if (amountIncome < 15000) {
  console.log(amountIncome * 0.13);
} else if (amountIncome >= 15000 || amountIncome <= 50000) {
  console.log(amountIncome * 0.2);
} else if (amountIncome > 50000) {
  console.log(amountIncome * 0.3);
}
