const translations = {
  en: {
    title: "JavaScript Lab",
    subtitle: "Mini-projects and exercises to practice JS fundamentals.",
    labProjectsTitle: "Projects Lab",
    calcTitle: "Calculator",
    calcDesc: "Basic operations with functions and validations.",
    todoTitle: "To-Do List",
    todoDesc: "Task manager using arrays.",
    viewDemo: "View demo",
    viewCode: "Code"
  },
  es: {
    title: "Laboratorio de JavaScript",
    subtitle: "Mini-proyectos y ejercicios para practicar fundamentos de JS.",
    labProjectsTitle: "Laboratorio de Proyectos",
    calcTitle: "Calculadora",
    calcDesc: "Operaciones básicas con funciones y validaciones.",
    todoTitle: "Lista de Tareas",
    todoDesc: "Gestor de tareas en arrays.",
    viewDemo: "Ver demo",
    viewCode: "Código"
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
