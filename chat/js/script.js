 document.querySelectorAll(".drop").forEach(el=>{
    el.addEventListener("click", function(){
        this.classList.toggle("active");
      });
  })
  // $('.languages').find('option:first').attr('selected', 'selected');
  // $('.languages').val(0);
  // $('.languages option:eq(0)').attr('selected','selected');
  // $('.languages').get(0).selectedIndex = 0;


//   $(document).ready(function(){
//     // Show hide popover
//     $(".dropdown").click(function(){
//         $(this).find(".drop").slideToggle("fast");
//     });
// });
// $(document).on("click", function(event){
//     var $trigger = $(".dropdown");
//     if($trigger !== event.target && !$trigger.has(event.target).length){
//         $(".drop").slideUp("fast");
//     }            
// });