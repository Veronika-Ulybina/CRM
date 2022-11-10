'use strict';

{
  const rnd = Math.random();
  const rain = Math.round(rnd);

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else if (rain === 0) {
    console.log('Дождя нет!');
  }
}

{
  const countMath = Number(prompt('Введите кол-во баллов по математике:'));
  const countRussianLang = Number(prompt('Введите кол-во баллов по русскому языку:'));
  const countInformatics = Number(prompt('Введите кол-во баллов по информатике:'));

  const sumPoints = countMath + countRussianLang + countInformatics;

  if (sumPoints >= 265) {
    prompt('Поздравляю, вы поступили на бюджет!');
  }
}

{
  const amountMoney = Number(prompt('Сколько денег Вы хотите снять?'));

  const isPossible = amountMoney >= 100 ? 'Возьмите деньги' : 'Операция не возможна';
  console.log(isPossible);
}
