//  document.querySelectorAll(".drop").forEach(el => {
//    el.addEventListener("click", function () {
//      this.classList.addClass("active");
//    });
//  })


function openDropdown() {
  $('.toggle-trigger').click((element) => {
    // alert('click')
    // console.log(element);
    $(element.currentTarget).toggleClass('active')
    // console.log(element);
  })

  //    $('.toggle-trigger').click(element=>{
  //      console.log(element);
  //      $('.li.drop.toggle-trigger').closest('.toggle-wrap').find('.toggle-area').toggleClass('active')
  //   })
  $(window).click(el => {
    console.log(el);
    var $target = $(el.target)
    if(!$target.closest('.toggle-trigger').length && $('.toggle-trigger').hasClass('active')){
      $('.toggle-trigger').removeClass('active')
    }
    // $(el).closest('body').find('.wrapper').find('.active').removeClass('active')

  });
}


//  function toggle(){
//    $('.drop').click(function(e){
//      alert('aaaaa')
//      e.preventDefault();
//      $(this).closest('.wrapper').find('.dropdown').slideToggle();
//    })
//  }


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
    <div class='mail-lane'>
    <h6>${element.name}</h6>
    <p>${element.status}</p>
    </div>
    </a></li>`
    $('#mail').append(html)
  })
}


function bellNotification() {
  fields['notification'].forEach(element => {
    let noti = `<li><a href="#">
     <div class='notify-lane'>
      <h6>${element.cond}</h6>
      <p>${element.numb}</p>
      </div>
      </a></li>`
    $('#notify').append(noti)
  })
}



$(document).ready(() => {
  emailNotification()
  bellNotification()
  openDropdown()
  //  toggle()
});