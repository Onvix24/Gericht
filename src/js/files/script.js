// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

//Календарь
// import datepicker from "js-datepicker";

window.addEventListener("load", function (e) {
   const bg = document.querySelectorAll("[data-bg]");
   if (bg.length) {
      bg.forEach((bgItem) => {
         bgItem.insertAdjacentHTML("beforeend", `<div class="bg-item"></div>`);
      });
   }

   // const picker = datepicker("[data-calendar]", {

   // });
});
