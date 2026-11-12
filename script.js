console.log("tes")

const translation = {
  en: {
    home: "home",
    projects: "projects",
    experience: "experience",
    dark: "dark",
    light: "light"
  },

  id: {
    home: "beranda",
    projects: "projek",
    experience: "pengalaman",
    dark: "gelap",
    light: "terang"
  }
}

let currentTheme = "dark";
let currentLanguage = "en";

const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translation[lang][key];
  });
}

function updateThemeLabel() {
  themeToggle.textContent = translation[currentLanguage][currentTheme];
}

langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "id" : "en";

  setLanguage(currentLanguage);

  langToggle.textContent = currentLanguage === "en" ? "id" : "en";
  updateThemeLabel();
});

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.dataset.theme = currentTheme;

  updateThemeLabel();
});

setLanguage(currentLanguage);
document.body.dataset.theme = currentTheme;
updateThemeLabel();
