const translations = {
  en: {
    title: "JavaScript Lab",
    subtitle: "Mini-projects and exercises to practice JS fundamentals.",
    labProjectsTitle: "Projects Lab",
    calcTitle: "Calculator",
  },
  es: {
    title: "Laboratorio de JavaScript",
    subtitle: "Mini-proyectos y ejercicios para practicar fundamentos de JS.",
    labProjectsTitle: "Laboratorio de Proyectos",
     calcTitle: "Calculadora",
  }
};

let currentLang = localStorage.getItem("langLab") || "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  document.getElementById("lang-toggle").innerText =
    currentLang === "en" ? "ES" : "EN";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("langLab", currentLang);
  applyTranslations();
});

// Inicializar
applyTranslations();
