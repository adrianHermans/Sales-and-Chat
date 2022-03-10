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
    $('.drop').removeClass('active')
    console.log(element);
    $(element.currentTarget).closest('.wrapper').find(element.currentTarget).toggleClass('active').focus();
    
  })
  $(window).click(el => {
    console.log(el);
    var $target = $(el.target)
    if(!$target.closest('.toggle-trigger').length && $('.toggle-trigger').hasClass('active')){
      $('.toggle-trigger').removeClass('active')
    }
  });

}


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
      <div id='note'>
        <a href="#">
          <div class='icons'><i class=${element.icon}> </i></div>
          <div>
            <div> <h6>${element.cond}</h6> </div>
            <div> <p>${element.numb}</p> </div>
          </div>
          <div><i class=${element.close}></i> </div>
        </a>
      </div>
    `
    $('.notify-b').append(noti)
  })
}



$(document).ready(() => {
  openDropdown()
  emailNotification()
  bellNotification()

});
