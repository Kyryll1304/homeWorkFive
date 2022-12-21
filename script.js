var x, y, z, res;
x = parseFloat(
  prompt(
    "Цей скрипт обчислить середнє арифметичне трьох чисел.Введіть перше...",
    ""
  )
);
y = parseFloat(prompt("Введіть друге число", ""));
z = parseFloat(prompt("Введіть третє число", ""));

res = (Number(x) + Number(y) + Number(z)) / 3;

alert("Їх середнє арифметичне=" + res);
