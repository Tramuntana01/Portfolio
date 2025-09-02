const translations = {
  en: {
    title: "JavaScript Lab",
    subtitle: "Mini-projects and exercises to practice JS fundamentals.",
    labProjectsTitle: "Projects Lab",
    calcTitle: "Calculator",
    timerTitle: "Timer",
    todoTitle: "To-Do List",
    todoPlaceHolder: "Add new task"
  },
  es: {
    title: "Laboratorio de JavaScript",
    subtitle: "Mini-proyectos y ejercicios para practicar fundamentos de JS.",
    labProjectsTitle: "Laboratorio de Proyectos",
     calcTitle: "Calculadora",
     timerTitle: "Temporizador",
     todoTitle: "Lista de Tareas",
     todoPlaceHolder: "Añadir nueva tarea"
  }
};

let currentLang = localStorage.getItem("langLab") || "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[currentLang][key];

    if (!text) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else {
      el.textContent = text;
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

applyTranslations();

