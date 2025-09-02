const translations = {
  en: {
    title: "JavaScript Tools",
    subtitle: "Tools created to practice JS fundamentals.",
    calcTitle: "Calculator",
    timerTitle: "Timer",
    todoTitle: "To-Do List",
    todoPlaceHolder: "Add new task",
    handyNotesTitle: "Handy Notes",
    handyNotesPlaceholder: "Write your notes here...",
  },
  es: {
    title: "Herramientas con JavaScript",
    subtitle: "Herramientas creadas para practicar fundamentos de JS.",
     calcTitle: "Calculadora",
     timerTitle: "Temporizador",
     todoTitle: "Lista de Tareas",
     todoPlaceHolder: "Añadir nueva tarea",
     handyNotesTitle: "Notas rápidas",
     handyNotesPlaceholder: "Escribe tus notas aquí...",
  }
};

let currentLang = localStorage.getItem("langTools") || "en";

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
  localStorage.setItem("langTools", currentLang);
  applyTranslations();
});

applyTranslations();

