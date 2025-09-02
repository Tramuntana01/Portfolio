const textarea = document.getElementById("handyNotesInput");

textarea.value = localStorage.getItem("handyNotes") || "";

textarea.addEventListener("input", () => {
  localStorage.setItem("handyNotes", textarea.value);
});
