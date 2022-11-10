'use strict';

{
  const productName = 'apples';
  console.log(productName);

  const productCategory = 'fruits';

  const productCount = 22;
  const productPrice = 150;

  const productSum = productCount * productPrice;
  console.log(`Общая сумма товара: ${productSum}`);
}

{
  const productName = prompt('Наименование товара? (Яблоки/груши/морковь/свекла)');
  console.log(typeof productName);

  const productCategory = prompt('Категория товара? (Фрукты/овощи)');
  console.log(typeof productCategory);

  const productCount = Number(prompt('Количество товара?'));
  if (Number.isNaN(productCount)) {
    prompt('Вы ввели некорректные данные');
  }

  const productPrice = Number(prompt('Цена товара? ($)'));
  if (Number.isNaN(productPrice)) {
    prompt('Вы ввели некорректные данные');
  }

  const productSum = productCount * productPrice;
  console.log(`На складе ${productCount} единицы товара "${productName}" на сумму ${productSum} долларов`)
}
