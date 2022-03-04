 document.querySelectorAll(".drop").forEach(el => {
   el.addEventListener("click", function () {
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

 var fields = {
   'email': [{
       'logo': 'KY',
       'name': 'Kara Young',
       'status': 'Account Update'
     },
     {
       'logo': 'DA',
       'name': 'Daisy Anderson',
       'status': 'Account Update'
     },
     {
       'logo': 'OG',
       'name': 'Oscar Garner',
       'status': 'Account Update'
     }
   ],
   'notification': [{
       'cond': 'Server Rebooted',
       'numb': '45 min ago'
     },
     {
       'cond': 'Licence Expiring Soon',
       'numb': '8 hrs ago'

     },
     {
       'cond': 'Kelly Portfolio.pdf',
       'numb': '670 kb'
     }
   ]

 }

 
 function emailNotification() {
   fields['email'].forEach(element => {
     let html = ` <li><a href="#">
    <span class="avatar-title rounded-circle">${element.logo}</span>
    <h6>${element.name}</h6>
    <p>${element.status}</p>
    </a></li>`
     $('#mail').append(html)
   })
 }


 function bellNotification() {
   fields['notification'].forEach( element => {
     let noti = `<li><a href="#">
      <h6>${element.cond}</h6>
      <p>${element.numb}</p>
      </a></li>`
     $('#notify').append(noti)
   })
 }
 
 $(document).ready(() => {
   emailNotification()
   bellNotification()

 });