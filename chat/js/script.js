
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
      'icon': '"fa-solid fa-server"',
      'cond': 'Server Rebooted',
      'numb': '45 min ago',
      'close': '"fa-solid fa-xmark"'
    },
    {
      'icon': '"fa-solid fa-heart"',
      'cond': 'Licence Expiring Soon',
      'numb': '8 hrs ago',
      'close': '"fa-solid fa-xmark"'
    },
    {
      'icon': '"fa-solid fa-file-lines"',
      'cond': 'Kelly Portfolio.pdf',
      'numb': '670 kb',
      'close': '"fa-solid fa-xmark"'
    }
  ]

}

function openDropdown() {
  $('.toggle-trigger').click((element) => {
    
    $(element.currentTarget).toggleClass('active')

    $(element.currentTarget).toggleClass('active').focus();
  })

  $(window).click(el => {

  $('.toggle-trigger').on('focusout', function(){

    var $target = $(el.target)
    $(this).removeClass('active')
  })
}) 
}
  // $(window).click(el => {
  //   if(!$target.closest('.toggle-trigger').length && $('.toggle-trigger').hasClass('active')){
  //     $('.toggle-trigger').removeClass('active')
  //   }
    // $(el).closest('body').find('.wrapper').find('.active').removeClass('active')

  // });




function emailNotification() {
  fields['email'].forEach(element => {
    let html = ` <li><a href="#">
    <span class="avatar-title rounded-circle">${element.logo}</span>
    <div class='mail-lane'>
    <h6>${element.name}</h6>
    <p>${element.status}</p>
    </div>
    </a></li> `
    $('#mail').append(html)
  })
}


function bellNotification() {
  fields['notification'].forEach(element => {
    let noti = `
    
    `
    $('#notify').append(noti)
  })
}



// function bellNotification() {
//   fields['notification'].forEach(element => {
//     let noti = `<li><a href="#">
//     <i class=${element.icon}></i>
//      <div class='notify-lane'>
//       <h6>${element.cond}</h6>
//       <p>${element.numb}</p>
//       </div>
//       <i class=${element.close}></i>
//       </a></li>`
//     $('#notify').append(noti)
//   })
// }



$(document).ready(() => {
  openDropdown()
  emailNotification()
  bellNotification()

});
