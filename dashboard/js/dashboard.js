var fields = {
    "banners": [
        {
            "lane": "first",
            "name": "Revenue",
            "idBanner": "banner1",
            "idChart": "chart1"
        },
        {
            "lane": "first",
            "name": "Sales by Category",
            "idBanner": "banner2",
            "idChart": "chart2"
        },
        {
            "lane": "second",
            "name": "Daily sales",
            "idBanner": "banner3",
            "idChart": "chart3"
        },
        {
            "lane": "second",
            "name": "Summary",
            "idBanner": "banner4",
            "idChart": "chart4"
        },
        {
            "lane": "second",
            "name": "Orders",
            "idBanner": "banner5",
            "idChart": "chart5"
        },
        {
            "lane": "third",
            "name": "Recent Activities",
            "idBanner": "banner6",
            "idChart": "chart6"
        },
        {
            "lane": "third",
            "name": "Transactions",
            "idBanner": "banner7",
            "idChart": "chart7"
        },
        {
            "lane": "third",
            "name": "Wallet Balance",
            "idBanner": "banner8",
            "idChart": "chart8"
        },
        {
            "lane": "fourth",
            "name": "Recent Orders",
            "idBanner": "banner9",
            "idChart": "chart9"
        },
        {
            "lane": "fourth",
            "name": "Top Selling Product",
            "idBanner": "banner10",
            "idChart": "chart10"
        }
    ]
}

$(document).ready(() => {
    setBanners()
});

function setBanners() {
    fields["banners"].forEach( element =>{
        if(element.lane == "first"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart}"></div>
            </div>`;
            $(".firstRow").append(banner)
        }
        if(element.lane == "second"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart}"></div>
            </div>`;
            $(".secondRow").append(banner)
        }
        if(element.lane == "third"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart}"></div>
            </div>`;
            $(".thirdRow").append(banner)
        }
        if(element.lane == "fourth"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart}"></div>
            </div>`;
            $(".fourthRow").append(banner)
        }
    })
}