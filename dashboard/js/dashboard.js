var fields = {
    "banners": [
        {
            "lane": "first",
            "name": "Revenue",
            "hasTitle": true,
            "idBanner": "banner1",
            "idChart": "chart1"
        },
        {
            "lane": "first",
            "name": "Sales by Category",
            "hasTitle": true,
            "idBanner": "banner2",
            "idChart": "chart2"
        },
        {
            "lane": "second",
            "name": "Daily sales",
            "hasTitle": true,
            "idBanner": "banner3",
            "idChart": "chart3"
        },
        {
            "lane": "second",
            "name": "Summary",
            "hasTitle": true,
            "idBanner": "banner4",
            "idChart": "chart4"
        },
        {
            "lane": "second",
            "name": "Orders",
            "hasTitle": false,
            "idBanner": "banner5",
            "idChart": "chart5"
        },
        {
            "lane": "third",
            "name": "Recent Activities",
            "hasTitle": true,
            "idBanner": "banner6",
            "idChart": "chart6"
        },
        {
            "lane": "third",
            "name": "Transactions",
            "hasTitle": true,
            "idBanner": "banner7",
            "idChart": "chart7"
        },
        {
            "lane": "third",
            "name": "Wallet Balance",
            "hasTitle": true,
            "idBanner": "banner8",
            "idChart": "chart8"
        },
        {
            "lane": "fourth",
            "name": "Recent Orders",
            "hasTitle": true,
            "idBanner": "banner9",
            "idChart": "chart9"
        },
        {
            "lane": "fourth",
            "name": "Top Selling Product",
            "hasTitle": true,
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
                ${element.hasTitle ? `<div class="bannerTitle">${element.name}</div>` : ``}
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