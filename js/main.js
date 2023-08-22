const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Перевірка темної теми на рівні системних налаштувань //
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}
// 2. Перевірка темної теми в LocalStorage //
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}
// 3. Якщо в системі встановлена автоматична зміна режиму день/ніч
// Тобто коли ми працювали на світлій темі, а прийшов час на зміну на темну то щоб і на інших сторінках все відображалось - необхдіно додати в локалсторейдж зміну на новий моуд
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    if (newColorScheme) {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });
// Активація темного режиму //
btnDarkMode.onclick = function () {
  console.log(btnDarkMode);
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
// Метод toggle объекта classList. Метод toggle объекта classList чередует заданный
//  CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.
