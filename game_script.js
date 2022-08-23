const config = {
    css: {
        ids:{
            menuButtons: "menuButton-",
            menuMainBack: "menuMainBackground",
            menuPaperBack: "menuPaperBack",
            container: "container",
            workbenchOverlay: "workbenchOverlay",
            demonOverlay: "demonOverlay",
            animContainer: "animContainer",
            AnimMainContainer: "AnimMainContainer",
            powderImage: "powderImage",
            gameContainer: "gameContainer",
            topBarContainer: "topBarContainer",
            bottleContainer: "bottleContainer",
            barsContainer: "barsContainer",
            bottomContainer: "bottomContainer",
            bottles: "bottle-",
            barContainer: "barCont-",
            barProgress: "barProg-",
            barPreview: "barPreview-",
            barMarker: "barMark-",
            resetButton: "reset-progress-button",
            currentLvlText: "current-Level-Text"
        },
        classes:{
            menuMainBack: "menu-main-background",
            menuPaperBack: "menu-paper-back",
            container: "container",
            workbenchOverlay: "workbench-overlay",
            demonOverlay: "demon-overlay",
            animContainer: "anim-container",
            AnimMainContainer: "Anim-main-container",
            powderImage: "powder-image",
            sealImage: "seal-image",
            gameContainer: "game-container",
            topBarContainer: "top-bar-container",
            bottleContainer: "bottle-container",
            barsContainer: "bars-container",
            bottomContainer: "bottom-container",
            menuButtons: "menu-button",
            bottles: "bottle",
            barContainer: "bar-container",
            barProgress: "bar-progress",
            barPreview: "bar-preview",
            barMarker: "bar-marker",
            barPreviewOpacityAnimation: "bar-preview-opacity-animation",
            resetButton: "reset-progress-button",
            currentLvlText: "current-Level-Text",
            fadeIn: "fade-in",
            fadeOut: "fade-out"
        },
        images:{
            paths: {
                backgrounds: "./img/bgs/",
                objects: "./img/objs/",
                demons: "./img/dms/",
            },
            backgrounds:{
                menu: "",
                workbench: "workbench.png",
                book: ""
            },
            objects:{
                bottle: "bottle.png",
                marker: "marker.png",
                paper: "paper.png",
                powder: "powder.png",
                slab: "slab.png"
            },
            animations: {
                sealAnimTime: 2000, //miliseconds
                SlabAnim: 1000,
                fadeIn: 1000,
                fadeOut: 1000,
            }
        },
    },
    applicationInfo:{
        version: "0.5",
        name: "Cultist",
        LocalStorageKey: "cltsgm",
    },
    gameData:{
        demons: [
            {
                name: "Furcas",//
                strength: [20, 70, 60],
                margin: 30
            },{
                name: "Furfur",//
                strength: [70, 10, 20],
                margin: 30
            },{
                name: "Halfas",//
                strength: [50,0,70],
                margin: 30
            },{
                name: "Raum",//
                strength: [30,30,40,60],
                margin: 30
            },{
                name: "Bifrons",//
                strength: [30,40,50,60],
                margin: 30
            },{
                name: "Andromalius",//
                strength: [40,40,70,40],
                margin: 30
            },{
                name: "Marbas",//
                strength: [60,20,70,30],
                margin: 30
            },{
                name: "Buer",//
                strength: [30,20,40,80],
                margin: 20
            },{
                name: "Botis",//
                strength: [40,60,80,40],
                margin: 20
            },{
                name: "Marax",//
                strength: [70,40,60,30],
                margin: 20
            },{
                name: "Glasya-Labolas",//
                strength: [10,10,40,40],
                margin: 20
            },{
                name: "Foras",//
                strength: [30,40,50,60],
                margin: 20
            },{
                name: "Malphas",//
                strength: [60,20,70,30,40],
                margin: 30
            },{
                name: "Haagenti",//
                strength: [0, 40, 50, 10, 60],
                margin: 30
            },{
                name: "Camio",//
                strength: [60,70,30,60,40,20],
                margin: 30
            },{
                name: "Ose",//
                strength: [30, 20, 70, 60, 40],
                margin: 30
            },{
                name: "Amy",//
                strength: [50, 10, 60, 0, 30],
                margin: 30
            }
        ],
        scenes:{
            menu:{
                id: 0,
                buttons: [
                    {
                        text: "PLAY",
                        nextSceneId: 1
                    },{
                        text: "OPTIONS",
                        nextSceneId: 3
                    }
                ]
            },
            workbench:{
                id: 1,
                sceneObjects: {
                    bars:{
                        strength: 100,
                        height: 6,
                        numOfBars: 7
                    },
                    bottles: [
                        {
                            text: "AG",
                            strength: [10,20,30,10,20,20,30]
                        },{
                            text: "AU",
                            strength: [20,20,30,40,30,20,10]
                        },{
                            text: "CU",
                            strength: [30,10,30,10,20,10,0]
                        },{
                            text: "FE",
                            strength: [0,10,0,30,20,10,10]
                        },{
                            text: "HG",
                            strength: [10,10,10,10,10,10,10]
                        },{
                            text: "PB",
                            strength: [10,0,0,10,30,20,10]
                        },{
                            text: "SN",
                            strength: [0,10,20,30,20,10,0]
                        },
                    ],
                    buttons: {
                        resetCurrentProgress: {
                            text: "RESET"
                        },
                        book: {
                            text: "BOOK",
                            nextSceneId: 2
                        }
                    }
                }
            },
            book:{
                id: 2,
            },
            options:{
                id: 3,
            }
        },
        defaultState:{
            currentScene: 0,
            currentProgress: [0, 0, 0, 0, 0, 0, 0],
            currentDemon: 0,
            isSlabClean: true,
            isNextLevelIssued: false
        }
    }
}

//UTILITY

function clearGameContainer(containerId){
    let container = document.querySelector(`#${containerId}`);

    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function changeElementImg(cssElementClass, path, img){
    let nodes = document.querySelectorAll(`.${cssElementClass}`);

    for(el of nodes){
        el.style.backgroundImage = `url(${path + img})`;
    }
}

function applyCSSstyles(element, id, className){
    element.id = id;
    element.className = className;

    return element;
}

function appendElToContainer(csscontId, el){
    document.querySelector(`#${csscontId}`).appendChild(el);
}

function appendElArrToContainer(csscontId, elarr){
    for(el of elarr){
        appendElToContainer(csscontId, el);
    }
}

function getTextElement(text, csscontId){
    let txt = document.createElement('p');
    txt.innerHTML = text;
    return txt;
}

function getContentContainer(id, className){
    let cont = document.createElement("div");

    cont = applyCSSstyles(cont, id, className);

    return cont;
}

function fadeIn(cssobj){
    let fade = document.createElement("div")

    fade.className = cssobj.classes.fadeIn;

    appendElToContainer(cssobj.ids.container, fade);
}

function fadeOutEl(elId, cssobj){
    let el = document.querySelector(`#${elId}`);

    el.classList.add(cssobj.classes.fadeOut);
}

//LEVEL_CHECK

function startDemonSealAnimation(state, demonsarr, cssobj){
    let cont = getContentContainer(cssobj.ids.demonOverlay, cssobj.classes.demonOverlay);
    let img = document.createElement("img");
    let miniImg = document.createElement("img");
    let demonName = demonsarr[state.currentDemon].name;
    let displayText = document.createElement("p")

    displayText.innerText = (`DISCOVERD: ${demonName}`);

    img.src = cssobj.images.paths.demons + `${state.currentDemon}.png`;
    miniImg.src = img.src;

    miniImg.className = cssobj.classes.sealImage;

    appendElToContainer(cssobj.ids.AnimMainContainer, miniImg);

    fadeOutEl(cssobj.ids.powderImage, cssobj);

    cont.appendChild(img)
    cont.appendChild(displayText)

    setTimeout(() => {
        appendElToContainer(cssobj.ids.container, cont);
    }, cssobj.images.animations.SlabAnim);
}

function isLevelPassed(state, demonsarr){
    if(state.currentDemon + 1 > demonsarr.length){
        return false;
    }
    for(let i = 0; i < demonsarr[state.currentDemon].strength.length; i++){
       if(state.currentProgress[i] < demonsarr[state.currentDemon].strength[i] || 
        state.currentProgress[i] > demonsarr[state.currentDemon].strength[i] + demonsarr[state.currentDemon].margin){
            return false;
        }
    }
    return true;
}

function nextLevel(isLevelPassed, demonsarr, state, cssobj){
    if(isLevelPassed){
        state.isNextLevelIssued = true;
        for(let i = 0; i < state.currentProgress.length; i++){
            state.currentProgress[i] = 0
        }
        startDemonSealAnimation(state, demonsarr, cssobj)
        setTimeout(()=>{
            state.currentDemon++;
            drawScene(state, 1);
        }, cssobj.images.animations.sealAnimTime + cssobj.images.animations.SlabAnim);
    }
}

function resetCurrentProgressButton(buttonObj, cssobj, state){
    let butt = document.createElement("button");

    butt = applyCSSstyles(butt, cssobj.ids.resetButton, cssobj.classes.resetButton);
    butt.innerText = buttonObj.text;

    butt.addEventListener("click", () => {
        for(let i = 0; i < state.currentProgress.length; i++){
            state.currentProgress[i] = 0
        }
        drawScene(state, 1);
    })

    return butt;
}

//BOTTLES

function getBottleElementsArr(bottlesarr, cssobj){
    let arr = [];
    for(let i = 0; i < bottlesarr.length; i++){
        let bottleEl = document.createElement("button");
        bottleEl.innerHTML = bottlesarr[i].text;

        bottleEl = applyCSSstyles(bottleEl, cssobj.ids.bottles + i,  cssobj.classes.bottles);

        arr.push(bottleEl);
    }
    return arr;
}

function bottleMouseOverEvent(bottlearr, bottleData, prevarr, currProg, barObj, cssPrevBarAnimClass){
    for(let i = 0; i < bottlearr.length; i++){
        let widthArr = [];
        bottlearr[i].addEventListener("mouseover", () => {
            for(let j = 0; j < prevarr.length; j++){
                widthArr.push(bottleData[i].strength[j]);

                if(currProg[j] + widthArr[j] > barObj.strength) widthArr[j] = barObj.strength - currProg[j];

                prevarr[j].style.width = `${widthArr[j]}%`;

                prevarr[j].className = cssPrevBarAnimClass;
            }
        })
    }
}

function bottleMouseOutEvent(bottlearr, prevarr, currProg, barObj, cssPrevBarClass){
    for(let i = 0; i < bottlearr.length; i++){
        bottlearr[i].addEventListener("mouseout", () => {
            for(let j = 0; j < prevarr.length; j++){
                prevarr[j].style.width = `0%`;

                prevarr[j].className = cssPrevBarClass;
            }
        })
    }
}

function bottleClickEvent(bottlearr, bottleData, barObj, progarr, state){
    for(let i = 0; i < bottlearr.length; i++){
        bottlearr[i].addEventListener("click", () => {
            let widthArr = [];
            for(let j = 0; j < progarr.length; j++){
                widthArr.push(state.currentProgress[j] + bottleData[i].strength[j]);
                if(widthArr[j] > barObj.strength) widthArr[j] = barObj.strength;

                state.currentProgress[j] = widthArr[j];
            }
            drawScene(state, 1);
        })
    }
}

//BARS

function getBar(idIndex, cssId, cssClass, width, height){
    let bar = document.createElement("div");

    bar = applyCSSstyles(bar, cssId + idIndex, cssClass);

    bar.style.width = `${width}%`;
    bar.style.height = `${height}%`;

    return bar;
}

function getBarArr(width, height, amount, cssId, cssClass){
    let arr = [];

    for(let i = 0; i < amount; i++){
        let bar = getBar(i, cssId, cssClass, width, height);
        arr.push(bar);
    }
    return arr;
}

function getGameBarArr(cont, prog, prev, mark){
    let arr = [];
    for(let i = 0; i < prog.length; i++){
        cont[i].appendChild(prog[i]);
        cont[i].appendChild(prev[i]);
        cont[i].appendChild(mark[i]);
        arr.push(cont[i]);
    }
    for(let j = prog.length; j < cont.length; j++){
        arr.push(cont[j]);
    }
    return arr;
}

function showCurrentProgressOnBar(currProg, progBar, barObj){
    for(let i = 0; i < progBar.length; i++){
        progBar[i].style.width = `${currProg[i]}%`;
    }
}

function manageMarkerMargin(markarr, currentDemonObj, barsObj){
    for(let i = 0; i < markarr.length; i++){
        markarr[i].style.marginLeft = `${currentDemonObj.strength[i]}%`;
    }
}

//ANIMPANEL

function getPowderImgElement(cssobj){
    let img = document.createElement("img");
    img.src = cssobj.images.paths.objects + cssobj.images.objects.powder

    img = applyCSSstyles(img, cssobj.ids.powderImage, cssobj.classes.powderImage)

    return img;
}

function isPowderShow(state){
    let out = false;
    for(st of state.currentProgress){
        if(st != 0) out = true;
    }

    return out;
}

function getAnimMainContainerElement(gameData, state, cssobj){
    let cont = getContentContainer(cssobj.ids.AnimMainContainer, cssobj.classes.AnimMainContainer);
    let powder = getPowderImgElement(cssobj);

    if(isPowderShow(state)){
        cont.appendChild(powder);
    }

    return cont;
}

function getAnimPanelElement(gameData, state, cssobj){
    let animPanelCont = getContentContainer(cssobj.ids.animContainer, cssobj.classes.animContainer);
    let animMainCont = getAnimMainContainerElement(gameData, state, cssobj);

    let content = [animMainCont];

    for(el of content){
        animPanelCont.appendChild(el);
    }

    return animPanelCont;
}

//GAMEPANEL

function getTopBarElement(state, cssobj){
    let cont = getContentContainer(cssobj.ids.topBarContainer, cssobj.classes.topBarContainer);

    return cont;
}

function getBottleContainerElement(gameData, cssobj){
    let cont = getContentContainer(cssobj.ids.bottleContainer, cssobj.classes.bottleContainer);

    let bottlesData = gameData.scenes.workbench.sceneObjects.bottles

    let bottleArr = getBottleElementsArr(bottlesData, cssobj);

    for(bottle of bottleArr){
        cont.appendChild(bottle);
    }

    return cont;
}

function getBarContainerElement(gameData, state, cssobj){
    let cont = getContentContainer(cssobj.ids.barsContainer, cssobj.classes.barsContainer);

    let barsObjs = gameData.scenes.workbench.sceneObjects.bars;

    let contArr = getBarArr(
        100, barsObjs.height, barsObjs.numOfBars, cssobj.ids.barContainer, cssobj.classes.barContainer);
    
    let progArr = getBarArr(
        0, 100, gameData.demons[state.currentDemon].strength.length, cssobj.ids.barProgress, cssobj.classes.barProgress);
    
    let prevArr = getBarArr(
        0, 100, gameData.demons[state.currentDemon].strength.length, cssobj.ids.barPreview, cssobj.classes.barPreview);
        
    let markArr = getBarArr(
        gameData.demons[state.currentDemon].margin, 100, gameData.demons[state.currentDemon].strength.length, cssobj.ids.barMarker, cssobj.classes.barMarker);

    let barArr = getGameBarArr(contArr, progArr, prevArr, markArr);

    for(bar of barArr){
        cont.appendChild(bar);
    }

    return cont;
}

function getBottomContainerElement(gamedata, state, cssobj){
    let cont = getContentContainer(cssobj.ids.bottomContainer, cssobj.classes.bottomContainer);
    let lvl = document.createElement("p");
    let resetButt = resetCurrentProgressButton(gamedata.scenes.workbench.sceneObjects.buttons.resetCurrentProgress, cssobj, state);

    lvl.innerHTML = `LEVEL ${state.currentDemon + 1}`;

    lvl.className = cssobj.classes.resetButton;

    let content = [lvl, resetButt];

    for(el of content){
        cont.appendChild(el);
    }


    return cont;
}

function handleBottleEvents(gameData, state, bottleArr, barArr, cssobj){
    let bottlesData = gameData.scenes.workbench.sceneObjects.bottles;
    let barsObjs = gameData.scenes.workbench.sceneObjects.bars;

    let prevArr = [];
    let progArr = [];

    for(barcont of barArr){
        if(barcont.childNodes[1] != null) prevArr.push(barcont.childNodes[1])
    }

    for(bar of barArr){
        if(bar.firstChild != null) progArr.push(bar.firstChild);
    }

    bottleMouseOverEvent(
        bottleArr, bottlesData, prevArr, state.currentProgress, barsObjs, cssobj.classes.barPreviewOpacityAnimation);
    bottleMouseOutEvent(
        bottleArr, prevArr, state.currentProgress, barsObjs, cssobj.classes.barPreview);
    bottleClickEvent(
        bottleArr, bottlesData, barsObjs, progArr, state, cssobj.classes.barProgress);
}

function handleBars(gameData, state, barcont){
    let barsObjs = gameData.scenes.workbench.sceneObjects.bars;
    let markArr = [];
    let progArr = [];

    for(mark of barcont){
        if(mark.lastChild != null) markArr.push(mark.lastChild);
    }

    for(bar of barcont){
        if(bar.firstChild != null) progArr.push(bar.firstChild);
    }

    manageMarkerMargin(markArr, gameData.demons[state.currentDemon], barsObjs);
    showCurrentProgressOnBar(state.currentProgress, progArr, barsObjs);
}

function getGamePanelElement(gameData, state, cssobj){
    let gamePanelCont = getContentContainer(cssobj.ids.gameContainer, cssobj.classes.gameContainer);
    let top = getTopBarElement(state, cssobj);
    let bottleCont = getBottleContainerElement(gameData, cssobj);
    let barCont = getBarContainerElement(gameData, state, cssobj);
    let bot = getBottomContainerElement(gameData, state, cssobj);

    let content = [top, bottleCont, barCont, bot];

    for(el of content){
        gamePanelCont.appendChild(el);
    }

    handleBars(gameData, state, barCont.childNodes);
    handleBottleEvents(gameData, state, bottleCont.childNodes, barCont.childNodes, cssobj);

    return gamePanelCont;
}

//OVERLAY

function getWorkbenchOverlay(cssobj){
    let cont = getContentContainer(cssobj.ids.workbenchOverlay, cssobj.classes.workbenchOverlay);

    return cont;
}

//WORKBENCH

function drawWorkbench(gameData, state, cssobj){
    let animPanel = getAnimPanelElement(gameData, state, cssobj);
    let gamePanel = getGamePanelElement(gameData, state, cssobj);
    let overlay = getWorkbenchOverlay(cssobj);

    appendElToContainer(cssobj.ids.container, animPanel);
    appendElToContainer(cssobj.ids.container, gamePanel);
    appendElToContainer(cssobj.ids.container, overlay);

    changeElementImg(cssobj.classes.AnimMainContainer, cssobj.images.paths.objects, cssobj.images.objects.slab);
    changeElementImg(cssobj.ids.container, cssobj.images.paths.backgrounds, cssobj.images.backgrounds.workbench);
    changeElementImg(cssobj.classes.bottles, cssobj.images.paths.objects, cssobj.images.objects.bottle);
    changeElementImg(cssobj.classes.barsContainer, cssobj.images.paths.objects, cssobj.images.objects.paper);
    changeElementImg(cssobj.classes.barMarker, cssobj.images.paths.objects, cssobj.images.objects.marker);

    nextLevel(isLevelPassed(state, gameData.demons), gameData.demons, state, cssobj);
}

//MENU

function getMenuButtonElementsArr(buttonArr, cssobj){
    let arr = [];
    for(let i = 0; i < 1/*buttonArr.length*/; i++){
        let butt = document.createElement("button")
        butt.innerHTML = buttonArr[i].text;

        butt = applyCSSstyles(butt, cssobj.ids.menuButtons + i, cssobj.classes.menuButtons);
        arr.push(butt);
    }
    return arr;
}

function menuButtonClickEvent(buttArr, buttInfo, state, cssobj){
    for(let i = 0; i < buttArr.length; i++){
        buttArr[i].addEventListener("click", () => {
            fadeIn(cssobj);
            setTimeout(() => {
                drawScene(state, buttInfo[i].nextSceneId);
            }, cssobj.images.animations.fadeIn)
        })
    }
}

function drawMenuBackground(cssobj){
    let main = getContentContainer(cssobj.ids.menuMainBack, cssobj.classes.menuMainBack);
    let paperBack = getContentContainer(cssobj.ids.menuPaperBack, cssobj.classes.menuPaperBack);

    main.appendChild(paperBack);
    return main;
}

function drawMenu(gameData, state, appInfo, cssobj){
    let cont = drawMenuBackground(cssobj);
    let menuText = getTextElement(`${appInfo.name}`);
    let overlay = getWorkbenchOverlay(cssobj);

    let buttArr = getMenuButtonElementsArr(gameData.scenes.menu.buttons, cssobj);

    menuButtonClickEvent(buttArr, gameData.scenes.menu.buttons, state, cssobj);

    cont.firstChild.appendChild(menuText);
    for(butt of buttArr){
        cont.firstChild.appendChild(butt);
    }

    appendElToContainer(cssobj.ids.container, cont)
    appendElToContainer(cssobj.ids.container, overlay)

    changeElementImg(cssobj.ids.container, cssobj.images.paths.backgrounds, cssobj.images.backgrounds.workbench)
    changeElementImg(cssobj.classes.menuPaperBack, cssobj.images.paths.objects, cssobj.images.objects.paper);
}

//OPTIONS

function drawOptions(){

}

//GAMELOOP

function drawScene(state, sceneId = 0){
    let data = config.gameData;
    let appInfo = config.applicationInfo;
    let cssdata = config.css;
    
    clearGameContainer(cssdata.ids.container);

    for(scene of Object.values(data.scenes)){
        if(scene.id == sceneId){
            switch(scene.id){
                case 0:
                    drawMenu(data, state, appInfo, cssdata);
                break;
        
                case 1:
                    drawWorkbench(data, state, cssdata);
                break;
        
                case 2:
                    //drawOptions()
                break;

            }
        }
    }
}

function gameStart(){
    let state = config.gameData.defaultState;
    drawScene(state)
}

gameStart();

