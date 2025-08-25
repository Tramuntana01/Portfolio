const translations = {
  en: {
    intro: "Exploring software development through self-taught projects and continuously building skills to shape my future in the tech industry.",
    projectsTitle: "AI-Generated Creative Projects",
    projectsDesc: "Ideas I’d like to build in the future, currently prototyped with AI.",
    proj1Desc: "Mini-game in React to guess Ragnarok Online maps from random cropped images.",
    proj2Desc: "Turn any map into a 3D globe. Upload your favorite map and explore it with rotation, lighting control, and custom markers.",
    viewDemo: "View demo",
    viewCode: "Code",
    skillsTitle: "Skills & Tools"
  },
  es: {
    intro: "Explorando el desarrollo de software a través de proyectos autodidactas y construyendo habilidades continuamente  para forjar mi futuro en la industria tecnológica.",
    projectsTitle: "Proyectos Creativos Generados con IA",
    projectsDesc: "Ideas que me gustaría construir en el futuro, actualmente prototipadas con IA.",
    proj1Desc: "Mini-juego en React para adivinar mapas de Ragnarok Online a partir de imágenes recortadas aleatorias.",
    proj2Desc: "Convierte cualquier mapa en un globo 3D. Sube tu mapa favorito y explóralo con rotación, control de iluminación y marcadores personalizados.",
    viewDemo: "Ver demo",
    viewCode: "Código",
    skillsTitle: "Habilidades y Herramientas"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

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
  localStorage.setItem("lang", currentLang);
  applyTranslations();
});


applyTranslations();
