var field = {
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
            "subTitle": "Go to columns for details.",
            "hasSubTitle": true,
            "hasIcon": true,
            "icon": '<img src="../../img/dollar-symbol.png" id="iconChart3">',
            "hasIcon": true,
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
    setCharts()
});

function setBanners() {
    field["banners"].forEach(element =>{
        if(element.lane == "first"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart} charts"></div>
            </div>`;
            $(".firstRow").append(banner)
        }
        if(element.lane == "second"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerHead">
                    ${element.hasTitle ? `<div class="bannerHeadText">
                                            <div class="bannerTitle">${element.name}</div>
                                            ${element.hasSubTitle ? `<div class="bannerSubTitle">${element.subTitle}</div>` : ``}
                                          </div>` : ``}
                    ${element.hasIcon ? `<div class="bannerHeadText ">
                        ${element.hasIcon ? `<div class="bannerIcon">${element.icon}</div>` : ``}
                    </div>` : ``}
                </div>
                <div class="${element.idChart} charts"></div>
            </div>`;
            $(".secondRow").append(banner)
        }
        if(element.lane == "third"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart} charts"></div>
            </div>`;
            $(".thirdRow").append(banner)
        }
        if(element.lane == "fourth"){
            let banner = `
            <div class="${element.idBanner} banner">
                <div class="bannerTitle">${element.name}</div>
                <div class="${element.idChart}" charts></div>
            </div>`;
            $(".fourthRow").append(banner)
        }
    })
}