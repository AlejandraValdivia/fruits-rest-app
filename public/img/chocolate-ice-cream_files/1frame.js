let adWidth, adHeight, variables, imageReady = false, fontReady = false;

myFT.on("instantads", () => {
    variables = myFT.instantAds;
    adWidth=myFT.manifestProperties.width;
    adHeight=myFT.manifestProperties.height;

    buildAd();
    preloadImage();

    myFT.applyClickTag(main, 1, variables.Dynamic_URL);
    document.head.appendChild(document.createElement("style")).innerHTML = variables.insertCSS;

    document.fonts.ready.then(() => {
        fontReady = true;
        if(imageReady) {
            trace('animate from font')
            setTimeout(() => startAnimation(), 500);
        }
    })
    
});

function buildAd() {
    main.style.width = (adWidth - 2) + 'px';
    main.style.height = (adHeight - 2) + 'px';

    const headline = variables.Headline1.split('|').map(line => {
        return '<span class="line">' + line + '</span><br>'
    }).join('');

    setHeadline(headline, 1);
    setHeadline(variables.Headline2, 2);

    const arrowSVG = `<svg class="ctaArrow" x="0px" y="0px" viewBox="0 0 13.8 10.5" style="enable-background:new 0 0 13.8 10.5;" xml:space="preserve">
        <style type="text/css">
        .st0{stroke:#000000;stroke-width:0.555;stroke-miterlimit:10;}
        </style>
        <g>
            <path class="st0" d="M8.7,10.2c0,0-0.1,0-0.1-0.1C8.4,10,8.3,9.6,8.5,9.4c0,0,0.1-0.1,0.1-0.1c1.1-1.1,2.1-2.3,3.2-3.4
                c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0c-3.6,0-7.2,0-10.8,0c-0.1,0-0.2,0-0.3,0C0.4,5.6,0.3,5.4,0.3,5.2
                c0-0.2,0.2-0.4,0.4-0.4c0.1,0,0.1,0,0.2,0c3.6,0,7.2,0,10.8,0c0,0,0.1,0,0.2,0c-0.1-0.1-0.1-0.1-0.1-0.1c-1.1-1.1-2.1-2.3-3.2-3.4
                C8.4,1,8.3,0.9,8.4,0.6c0.1-0.3,0.5-0.5,0.7-0.3c0,0,0.1,0.1,0.1,0.1c1.3,1.4,2.7,2.9,4,4.3c0.1,0.1,0.1,0.2,0.2,0.3
                c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.2,0.3-0.3,0.4c-1.3,1.4-2.6,2.8-3.9,4.2c-0.1,0.1-0.2,0.2-0.4,0.3C8.9,10.2,8.8,10.2,8.7,10.2z"/>
        </g>
        </svg>`;

    animateCta.innerHTML = '<span class="cta_text">' + variables.CTA_copy + arrowSVG + '</span>';
    animateCtaContainer.style.fontSize = variables.CTA_font_size + 'px';
    setXY(animateCtaContainer, variables.CTA_xy);
    setXY(animateCtaBGContainer, variables.CTA_xy);
    setCtaColor(variables.CTA_font_color, variables.CTA_button_color);
    animateCta.classList.add(checkPlatform()[0], checkPlatform()[1]);

    animateCtaContainer.addEventListener('mouseover', () => {
        setCtaColor(variables.CTA_font_hover_color, variables.CTA_button_hover_color);
    });

    animateCtaContainer.addEventListener('mouseout', () => {
        setCtaColor(variables.CTA_font_color, variables.CTA_button_color);
    });

    setXY(Logo, variables.Logo_xy);
    setXY(Main_image, variables.Main_image_xy);

    function setCtaColor(text, bg) {
        animateCta.style.color = text;
        animateCtaBG.style.backgroundColor = bg;
        document.getElementsByClassName('st0')[0].style.stroke = text
    }


}

function setHeadline(headlineText, serial) {
    const headlineDiv = document.getElementById('headline' + serial);
    headlineDiv.innerHTML = headlineText;
    setXY(headlineDiv, variables['Headline' + serial + '_xy']);
    headlineDiv.style.fontSize = variables['Headline' + serial + '_font_size'] + 'px';
    headlineDiv.style.color = variables['Headline' + serial + '_font_color'];
    
}

function setXY(div, xy) {
    const xyList = xy.split(',');
    if(xyList[0] && parseInt(xyList[0])) {
        div.style.left = xyList[0] + 'px';
    }
    if(xyList[1] && parseInt(xyList[1])) {
        div.style.top = xyList[1] + 'px';
    }
}


function preloadImage() {
    const imageCount = 2;
    let imageLoaded = 0;

    ['Main_image', 'Logo'].forEach(image => {
        const currentImage = document.getElementById(image);
        currentImage.src = variables[image];
        currentImage.addEventListener('load', checkLoad, false);
    })


    function checkLoad() {
        imageLoaded++;
        if (imageLoaded == imageCount) {
            imageReady = true;
            if(fontReady) {
                trace('animate from image')
                setTimeout(() => startAnimation(), 500);
                // startAnimation();
            }
            
        }
    }
}

//gsap.registerPlugin(split);
function startAnimation() {
    document.getElementById("headline1").style.marginTop=(130-document.getElementById("headline1").offsetHeight)/2+"px";
    const tl = new TimelineMax();
    tl.set(animateCtaBGContainer, {width: animateCtaContainer.clientWidth, height: animateCtaContainer.clientHeight, delay: .5})
    tl.set(".animateCtaContainer", {left:(adWidth-animateCtaContainer.clientWidth)/2 })
    tl.set([main], {opacity: 1});
    
    tl.addLabel('start');
    tl.to(Main_image, 1, {scale: 1, ease: Power1.easeOut}, 'start');
    tl.to('.line', .3, {opacity: 1, y: 0, stagger: .1, ease: Power1.easeOut}, 'start+=.25');
    tl.to(animateCtaBG, .5, {width: '100%', delay: .2, ease: Linear.easeNone}, 'start+=.25')
        .to([animateCtaBGContainer, '.ctaArrow'], .25, {x: -5})
        .to([animateCtaBGContainer, '.ctaArrow'], .25, {x: 0})

    
}

function setAdditionalCss(div, style) {
    const propertyValue = style.split(':'); 
    div.style[propertyValue[0]] = propertyValue[1];
}

function trace(t) {
    const url = document.URL;
    (url.includes("127.0.0.1") || url.includes("localhost") || url.includes("https://api.flashtalking.net")) 
    && console.log(t);
}


// Browser Checking
  
function checkPlatform() {
    try {
        var a = new Array();
        if (navigator.platform.toLowerCase().indexOf("mac") > -1) {
            a[0] = "macOS";
        } else if (navigator.platform.toLowerCase().indexOf("win") > -1) {
            a[0] = "windows";
        } else {
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                a[0] = "iOS";
            } else if (navigator.userAgent.match(/Opera Mini/i)) {
                a[0] = "opera";
            } else if (navigator.userAgent.match(/Android/i)) {
                a[0] = "android";
            } else if (navigator.userAgent.match(/BlackBerry/i)) {
                a[0] = "BlackBerry";
            } else if (
                navigator.userAgent.match(/IEMobile/i) ||
                navigator.userAgent.match(/WPDesktop/i)
            ) {
                a[0] = "WindowsPhone";
            }
        }

        var MSIE = window.navigator.userAgent.indexOf("MSIE ");

        var Edge = window.navigator.userAgent.indexOf("Edge/");

        var Trdt = window.navigator.userAgent.indexOf("Trident/");

        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            a[1] = "chrome";
        } else if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
            a[1] = "firefox";
        } else if (
            navigator.vendor &&
            navigator.vendor.toLowerCase().indexOf("apple") > -1
        ) {
            a[1] = "safari";
        } else if (MSIE > 0 || Edge > 0 || Trdt > 0) {
            a[1] = "IE";
        }

        return a;
    } catch (error) {
        console.error("Error on checkPlatform(): " + error.message);
    }
}

//Cross browser code ends...