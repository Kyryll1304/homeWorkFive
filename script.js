x = parseFloat(
  prompt(
    "Цей скрипт обчислить середнє арифметичне трьох чисел.Введіть перше...",
    ""
  )
);
const y = parseFloat(prompt("Введіть друге число", ""));
const z = parseFloat(prompt("Введіть третє число", ""));
const res = (x + y + z) / 3;
if (isNaN(x)) {
  alert("Ви ввели не число(Введіть перше...)");
} else if (isNaN(y)) {
  alert("Ви ввели не число(Введіть друге число)");
} else if (isNaN(z)) {
  alert("Ви ввели не число(Введіть третє число)");
} else {
  alert("Їх середнє арифметичне=" + res);
}
