setInterval(function() {
    var PageSelector = document.querySelector("body > div:nth-child(1) > div.content-app > div.ivu-row-flex > div.ivu-col.ivu-col-span-19 > div.page");
    if(PageSelector == null) {
        PageSelector = document.querySelector("#main > div > div.ivu-card-body > div > div.page");
    }
    if(PageSelector != null) {
        if(PageSelector.style.position != 'fixed') {
            PageSelector.style.position = 'fixed';
            PageSelector.style.top = '-5px';
            PageSelector.style.left = '60%';                                                                                                                 
            PageSelector.style.zIndex = 1000000000;
        }
    }
}, 500);