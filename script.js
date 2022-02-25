
  document.querySelectorAll(".drop").forEach(el=>{
    el.addEventListener("click", function(){
        this.classList.toggle("active");
      });
  })