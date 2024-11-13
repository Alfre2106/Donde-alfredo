// Función para alternar el menú en dispositivos móviles
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); ú
}

// Validación del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener los valores del formulario
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (name && email && message) {
        alert("Gracias, " + name + "! Tu mensaje ha sido enviado correctamente.");
       
        this.reset(); // Limpia el formulario después de enviar
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const quienesSomosSection = document.querySelector(".quienes-somos-section");
  
    function handleScroll() {
      const sectionPosition = quienesSomosSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (sectionPosition < screenPosition) {
        quienesSomosSection.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const productosSection = document.querySelector(".productos-section");
    const productosItems = document.querySelectorAll(".producto-item");
  
    function handleScroll() {
      const sectionPosition = productosSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (sectionPosition < screenPosition) {
        productosSection.classList.add("visible");
  
        // Mostrar cada producto con un retraso
        productosItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 200); // 200 ms de retraso entre cada producto
        });
  
        window.removeEventListener("scroll", handleScroll);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  });
    
