// thanks to Claude with this function

console.log("tes")

const translation = {
  en: {
    home:"home",
    projects:"projects",
    experience: "experience",
    dark: "dark"
    
  },

  id: {
    home:"beranda",
    projects:"projek",
    experience: "pengalaman",
    dark: "gelap"
  }
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translation[lang][key];
  });
}

let currentLanguage = "en";

const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "id" : "en";

  setLanguage(currentLanguage);

  langToggle.textContent = currentLanguage.toLowerCase();
});