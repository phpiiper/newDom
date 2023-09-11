function toast(text){
    var div = document.getElementById("toast");
    if (div !== null) {div.remove()}
    div = document.createElement("div"); document.getElementById("content").appendChild(div); div.id = "toast";

    div.innerText = text;
    setTimeout(function(){   div.classList.add("visible");   },100)
    setTimeout(function(){   div.classList.toggle("visible");   },3000)
}


function coverDiv(parent){
    var div = document.createElement("div"); div.className = "coverDiv"; parent.appendChild(div)
    div.onclick = function(event){removeAround(event);}
    return div
}
function removeAround(event){
    var r = event.composedPath()[0]; var cover = r
    while ((cover.parentNode !== null && cover.parentNode !== undefined) && cover.className !== "coverDiv") {cover = cover.parentNode}
    if (cover.parentNode == null || cover.parentNode == undefined) {return}
    r = cover.childNodes[0]

    var rc = r.getBoundingClientRect()
    var cW = event.clientX; var cH = event.clientY
    var w = rc.x; var h = rc.y;

    var totalW = rc.width + w; var totalH = rc.height + h;
    if ((cH < h || cH > totalH) || (cW < w || cW > totalW)) { cover.remove() }}


function cIcon(name,ops){
    let c = document.createElement("span"); c.classList.add("material-symbols-outlined"); c.innerText = name;
    if (ops != undefined){
        for (var i=0; i<ops.length; i++){ let o = ops[i];
            if (o[0] === "dataset"){ c["dataset"][o[1]] = o[2]; }
            if (o[0] !== "style" && o[0] !== "dataset"){ c[o[0]] = o[1] }
            if (o[0] === "style") { for (var x=1; x<o.length; x++){ let st = o[x];
                c["style"][st[0]] = st[1] }}
        }}
    return c
}


function createConfirm(parent,text,obj){
    let p = parent; if (typeof p == "string"){p = document.getElementById(parent);}
    if (document.getElementsByClassName("coverDiv").length !== 0){
        while (p.className !== "coverDiv") {p = p.parentNode;}
    }
    let cd = coverDiv(p); let div = document.createElement("div"); div.className = "confirmDiv"; cd.appendChild(div);
    let dtx = document.createElement("div"); dtx.innerText = text; dtx.className = "confirmText"; div.appendChild(dtx);
    if (obj !== undefined && "input" in obj){let din = document.createElement("input"); din.type = obj["input"]; din.className = "confirmInput"; div.appendChild(din);
        for (var i=1; i<obj["input"].length; i++){let ind = obj["input"][i]; din[ind[0]] = ind[1] }
    }
    let con = document.createElement("div"); con.innerText = "Confirm"; div.appendChild(con); con.className = "confirmButton";
    // obj {styles: [], dataset: [], function: goHere; }
    if (obj !== undefined){
        if ("styles" in obj){
            for (var i=0; i<obj["styles"].length; i++){let so = obj["styles"][i]; div.style[so[0]] = so[1];}}
        if ("datasets" in obj){
            for (var i=0; i<obj.datasets.length; i++){let dto = obj.datasets[i]; div.dataset[dto[0]] = dto[1];}}
        if ("functions" in obj){
            for (var i=0; i<obj.functions.length; i++){ let fo = obj.functions[i]
                con[fo[0]] = fo[1];
            }}
    }
}

/*
Use: Creating the normal [.card] element
-- Returns the [.card] element created
 */
function createCard(obj){
    if (typeof obj == "object" && !Array.isArray(obj)){
        let div = document.createElement("div"); div.className = "card"; div.dataset.data = JSON.stringify(obj);
        let img = document.createElement("img"); img.className = "cardImg"; img.src = obj["src"]; div.appendChild(img);
        let txt = document.createElement("div"); txt.className = "cardTxt"; txt.innerText = obj["name"]; div.appendChild(txt); if ("dependencies" in obj || "specials" in obj) {txt.innerText += "*"}

        div.onclick = function(){ addToList(div,"scBody")}
        return div
    }
    return false
}




/* STATIC CREATIONS */

/*
Use: Creating the [.edition] elements and their accompanying [.editionB] sibling
-- Only one time use
 */
function createEdition(obj,loc){
if (typeof loc == "string") {var p = document.getElementById(loc)} else {var p = loc}

let div = document.createElement("div"); div.className = "edition"; div.dataset.data = "Close"; p.appendChild(div); div.innerText = obj["name"]; div.id = ("e" + obj["name"]).replaceAll(" ",""); div.style.backgroundColor = "rgba(" + obj["color"] + ",0.8)";

    div.addEventListener("click",function(){
        if (div.dataset.data == "Close") {div.dataset.data = "Open"}
        else {div.dataset.data = "Close"}
    })
    let db = document.createElement("div"); db.className = "editionB"; db.id = div.id + "Body"; p.appendChild(db)
}



/* POPUP pages */

/*
Use: Pops up the "Filter Page" div
-- loc (location to put in -- "content" is typically fine on normal use)
 */
function filterPage(loc){ // to pre-fill them
if (typeof loc == "string") {var b = document.getElementById(loc)} else {var b = loc}
b = coverDiv(b)

// HEADER
let div = document.createElement("div"); div.id = "filterPage"; b.appendChild(div); div.className = "scrollBar";
    let h = document.createElement("div"); h.id = "filterHeader"; div.appendChild(h)
        let hh = document.createElement("div"); hh.innerText = "Filter Cards"; h.appendChild(hh);
        let hs = document.createElement("div");  h.appendChild(hs); hs.id = "fcCount";
            hs.innerText = "(" + cards.length + ")";
        let r = document.createElement("div"); r.className = "filterReset"; r.appendChild(cIcon("restart_alt",[["dataset","text","Reset All Filters"],["style",["backgroundColor","rgba(var(--c2))"],["border-radius","1em"]]])); h.appendChild(r);
            r.onclick = function(){
                // remove all styles (for loop)
                let sl = document.getElementsByClassName("selectedFilter");
                while (sl.length > 0) {sl[0].classList.remove("selectedFilter")}
                // remove in style
                toggleFilter("","all")
                // toast it
                toast("Cleared all filters")
                // then reset it
                getData("filters")[1].dataset.filters = "{}";
                applyFilter()
                document.getElementById("fcCount").innerText = "(" + cards.length + ")";
            }

// FILTERS
var list = ["Edition","Type","Cost","Attributes","Keywords"]
for (var i=0; i<list.length; i++) {div.appendChild(fType(list[i]))}

// FOOTER / Apply
    let end = document.createElement("div"); end.id = "filterFooter"; div.appendChild(end); end.style = "justify-content: right;"
        let ab = document.createElement("button"); ab.innerText = "Apply"; end.appendChild(ab); ab.onclick = function(){
        let df = getData("filters",document.getElementById("filterPage"));
        if (Object.keys(df[0]).length != 0){ getData("filters")[1].dataset.filters = JSON.stringify(df[0]) }
            applyFilter();
        let count = Array.from(document.getElementsByClassName("card")).filter(x => x.style.display !== "none" && x.parentNode.className == "editionB").length;
        document.getElementById("fcCount").innerText = "(" + count + ")";
    }

    // PRE-Filling filters that already exist (or have been applied)
    let filt = getData("filters");
    if (filt[0] !== undefined && Object.keys(filt[0]).length > 0){
        for (k in filt[0]){
        let con = document.getElementById("f" + k);
        if (con !== null){ let cc = Array.from(Array.from(con.childNodes).find(x => x.className.includes("filterOD")).childNodes).filter(x => filt[0][k].includes(x.innerText));
            for (var i=0; i<cc.length; i++){cc[i].classList.add("selectedFilter")}
        }} // for key
        // Counting
        let count = Array.from(document.getElementsByClassName("card")).filter(x => x.style.display !== "none").length;
        document.getElementById("fcCount").innerText = "(" + count + ")";
    }
}

    function fType(type){
    let ed = document.createElement("div"); ed.id = "f"+type.replaceAll(" ",""); ed.className = "filterContainer";
        let eot = document.createElement("div"); eot.className = "filterHeader"; ed.appendChild(eot); eot.innerText = type;
        let eod = document.createElement("div"); eod.className = "filterOD"; ed.appendChild(eod);
        let r = document.createElement("div"); r.className = "filterReset"; ed.appendChild(r); r.appendChild(cIcon("restart_alt",[["style",["backgroundColor","rgba(" + "var(--c1)"  + ")"]]])); r.onclick = function(){
            toast("Cleared the \"" + type + "\" Filter")
            toggleFilter(type,"clear"); let lis = Array.from(eod.childNodes).filter(x => x.className.includes("selectedFilter"));
                for (var i=0; i<lis.length; i++){lis[i].classList.remove("selectedFilter")}
            }

if (type == "Edition"){
    for (var i=0; i<editions.length; i++){
        let edD = document.createElement("div"); edD.className = "filterOption"; eod.appendChild(edD); edD.innerText = editions[i]["name"]; edD.dataset.id = edD.innerText; edD.style.backgroundColor = "rgba(" + editions[i]["color"] + ",0.7)"; edD.onclick = function(){toggleFilter("Edition",edD)}
        }
} // Card Edition

if (type == "Type"){
let cf = cards.filter(x => !Array.isArray(x) && typeof x == "object");
var tl = []; for (var i=0;i<cf.length;i++){ let c = cf[i].type;
if (c.split("-").length == 1){if (!tl.includes(c)) {tl.push(c)}}
else { let cl = c.split("-"); for (var x=0; x<cl.length; x++) {if (!tl.includes(cl[x])){tl.push(cl[x])}}   }} // get all types
    for (var i=0; i<tl.length; i++){ // creates options
    let opt = document.createElement("div"); opt.className = "filterOption"; eod.appendChild(opt); opt.innerText = tl[i]; opt.dataset.id = opt.innerText; opt.onclick = function(){toggleFilter("Type",opt)}}
    } // Card Type

if (type == "Cost"){
    let max = 0; for (var i=0; i<cards.length; i++){if (cards[i]["cost"] > max){max = cards[i]["cost"]}};
for (var i=0; i<max+1; i++){
    let n = document.createElement("div"); n.className = "filterOption fNumber"; eod.appendChild(n); n.innerText = i; n.onclick = function(){toggleFilter("Cost",n)}
}}

if (type == "Attributes" || type == "Keywords"){
    if (type == "Attributes") { var list = ["Action","Card","Buy","Coin"] }
    else {
        var list = ["Trash","Discard","Name","Choose One:","Reveal","Gain","Curse","Tavern Mat","Draw"];
        ed.style.marginBottom = 0;
    }
    for (var i=0; i<list.length; i++){ let o = list[i]
        let op = document.createElement("div"); op.className = "filterOption"; eod.appendChild(op); op.innerText = o; op.onclick = function(){toggleFilter(type,op)}
    }


}

    return ed
    }



function optionsPage(loc){
let p = loc; if (typeof loc == "string") {p = document.getElementById(loc)}
    let cov = coverDiv(p)
let div = document.createElement("div"); div.id = "optionsPage"; cov.appendChild(div); div.className = "scrollBar";
    let ld = document.createElement("div"); ld.id = "opLeft"; div.appendChild(ld); ld.className = "opContainer";
        // Settings Header
        let lh = document.createElement("div"); lh.className = "opHeader"; lh.innerText = "Settings"; ld.appendChild(lh);
        // Cards Per Row (2x --> Library, Deck)
            let cd = document.createElement("div"); cd.className = "opDiv"; ld.appendChild(cd);
                let cdh = document.createElement("div"); cdh.className = "opdH"; cdh.innerText = "Cards Per Row"; cd.appendChild(cdh)
                let lib = [["Library","clBody"],["Deck","scBody"]]
                for (var i=0; i<lib.length; i++){ let lbl = lib[i]
                    let od = document.createElement("div"); od.className = "opCardC"; cd.appendChild(od);
                        let oh = document.createElement("div"); oh.innerText = lbl[0]; od.appendChild(oh);
                        let lis = document.createElement("div"); lis.className = "opcRow"; od.appendChild(lis);
                            for (var x=1; x<=5; x++){
                                let n = document.createElement("div"); n.innerText = x; lis.appendChild(n); n.className = "opCCO";
                                    if (document.getElementById(lbl[1]).className.at(-1) == n.innerText) {n.id = "selectedOp" + lbl[0]}
                                n.onclick = function(){
                                    let op = document.getElementById("selectedOp" + lbl[0]);
                                        if (op !== null){ op.id = "";} n.id = ("selectedOp" + lbl[0]);
                                            setPrefs()
                                }
                            }
                }
        // Font
        let fd = document.createElement("div"); fd.className = "opDiv"; ld.appendChild(fd);
            let fch = document.createElement("div"); fch.className  = "opdH"; fch.innerText = "Customize Font"; fd.appendChild(fch);
            let fc = document.createElement("div"); fc.id = "opfContainer"; fd.appendChild(fc);
                let find = document.createElement("div"); fc.appendChild(find) // font type
                find.style = "display: flex; flex-direction: column;"
                    let fin = document.createElement("div"); fin.id = "oInpFT"; find.appendChild(fin);
                        let fsel = document.createElement("div"); fsel.id ="oInpSelected"; fin.appendChild(fsel);
                            let arr = document.createElement("div"); arr.id = "oiArr"; fsel.appendChild(arr); arr.appendChild(cIcon("arrow_drop_down"));
                        let fbod = document.createElement("div"); fbod.id ="oInpOptions"; fin.appendChild(fbod);
                            for (var i=0; i<fontList.length; i++){ let fa = fontList[i];
                                let of = document.createElement("div"); fbod.appendChild(of); of.className = "fontOp"; of.innerText = fa; of.style.fontFamily = of.innerText;
                                    if (fa == "Noto Sans"){fsel.prepend(of); of.id = "selectedFont";}
                                    of.onclick = function(){
                                        if (of.id != "selectedFont") {
                                        let slc = document.getElementById("selectedFont"); let oc = document.getElementById("oInpOptions"); let pos = (Array.from(oc.childNodes)).find(x => x.innerText == fa);
                                            pos.after(slc); slc.id = ""; fsel.prepend(of); of.id = "selectedFont";
                                            setPrefs()
                                    }
                                }
                        }
                    let ftx = document.createElement("span"); ftx.innerText = "Font"; find.appendChild(ftx); ftx.className = "oInpTX"
                let fsize = document.createElement("div"); fc.appendChild(fsize); // font size
                    fsize.style = "display: flex; flex-direction: column;";
                    let fsi = document.createElement("input"); fsi.value = 18; fsize.appendChild(fsi); fsi.className = "fontOp"; fsi.style = "height: 100%; background-color: white; border: none; outline: none; width: 50px;"; fsi.type = "number"; fsi.id = "opFontSize";
                        fsi.max = 30; fsi.min = 8;
                        let chNum = function(){
                            if (fsi.value > 30) {fsi.value = 30}
                            if (fsi.value >= 8 && fsi.value <= 30){setPrefs()}}
                            fsi.onkeyup = chNum; fsi.onchange = chNum;
                    let fst = document.createElement("span"); fst.innerText = "Size (px)"; fsize.appendChild(fst); fst.className = "oInpTX";
        // Themes
        let td = document.createElement("div"); td.className = "opDiv"; ld.appendChild(td);
            let tch = document.createElement("div"); tch.className  = "opdH"; tch.innerText = "Site Themes"; td.appendChild(tch);
            let tc = document.createElement("div"); td.appendChild(tc); tc.id = "opThemeDiv";
                for (var i=0; i<themes.length; i++){ let the = themes[i]
                    let t = document.createElement("div"); t.className = "opTheme"; tc.appendChild(t); t.dataset.data = the["id"]; t.style.backgroundColor = "rgba("+(the["colors"][1])+")"; t.style.color = "rgba("+(the["colors"][0])+")";
                        let big = document.createElement("div"); big.className = "opThemeT"; big.innerText = "Aa"; t.appendChild(big);
                        let sm = document.createElement("div"); sm.className = "opThemeH"; sm.innerText = the.name; t.appendChild(sm);
                            if (the.name == "Default") {t.id = "selectedTheme";}
                        t.onclick = function(){
                            if (t.id !== "selectedTheme"){
                            document.getElementById("selectedTheme").id = ""; t.id = "selectedTheme";
                            setPrefs()
                        }}
                        }

    let rd = document.createElement("div"); rd.id = "opRight"; div.appendChild(rd); rd.className = "opContainer";
        // Data Header
        let rh = document.createElement("div"); rh.className = "opHeader"; rh.innerText = "Data"; rd.appendChild(rh);
        // Max Cards in location
            let mcd = document.createElement("div"); mcd.className = "opdContainer"; rd.appendChild(mcd);
                let min = document.createElement("input"); min.type = "number"; min.min = 0; mcd.appendChild(min); min.className = "opdOption"; min.style = "width: 3em; padding: 0.5em 0;"; min.value = 10; min.id = "maxCardsDeckInp"
                    function minFunction(){ if (min.value < 1) {min.value = 1} else {setPrefs()} }
                    min.onkeyup = minFunction; min.onchange = minFunction
                let mtx = document.createElement("div"); mtx.className = "opdText"; mcd.appendChild(mtx); mtx.innerText = "Max Cards allowed in decks";
        // Download
            let upl = document.createElement("div"); upl.className = "opdContainer"; rd.appendChild(upl);
            let ubtn = document.createElement("div"); ubtn.innerText = "Download"; upl.appendChild(ubtn); ubtn.className = "opdOption";
                ubtn.onclick = downloadData
            let utx = document.createElement("div"); utx.className = "opdText"; upl.appendChild(utx); utx.innerText = "Download the data (Settings, Decks) into a file to keep as a backup, or to upload here on a different device.";
        // Upload
            let down = document.createElement("div"); down.className = "opdContainer"; rd.appendChild(down);
            let dbtn = document.createElement("input"); dbtn.innerText = "Upload"; down.appendChild(dbtn); dbtn.className = "opdOption"; dbtn.type = "file";
                dbtn.style.fontSize = "0.5em"; dbtn.onchange = uploadData;
            let dtx = document.createElement("div"); dtx.className = "opdText"; down.appendChild(dtx); dtx.innerText = "Upload the file (downloaded here) to overwrite all data. WARNING: Will remove all current data permanently.";
        // Reset
            let reset = document.createElement("div"); reset.className = "opdContainer"; rd.appendChild(reset);
            let rbtn = document.createElement("div"); rbtn.innerText = "Reset"; reset.appendChild(rbtn); rbtn.className = "opdOption";
                rbtn.onclick = resetData;
            let rtx = document.createElement("div"); rtx.className = "opdText"; reset.appendChild(rtx); rtx.innerText = "Reset all data on this website. WARNING: Is not reversible.";

let pd = getData("prefs"); let prefs = pd[0];
if (Object.keys(prefs).length != 0){ // prefs exist, change vals visible
        if ("maxCards" in prefs){
        // lib cards
            document.getElementById("selectedOpLibrary").id = "";
            let lib = Array.from(Array.from(Array.from(document.getElementsByClassName("opcRow"))).find(x => x.parentNode.childNodes[0].innerText == "Library").childNodes).find(x => x.innerText == prefs["maxCards"][0]); lib.id = "selectedOpLibrary"
        // deck cards
            document.getElementById("selectedOpDeck").id = "";
            let dec = Array.from(Array.from(Array.from(document.getElementsByClassName("opcRow"))).find(x => x.parentNode.childNodes[0].innerText == "Deck").childNodes).find(x => x.innerText == prefs["maxCards"][1]); dec.id = "selectedOpDeck"
            // cards in deck
            min.value = 10; if (prefs["maxCards"][2] !== undefined){min.value = prefs["maxCards"][2]}
        }
        if ("font" in prefs){
    // font family
        let slct = Array.from(fbod.childNodes).find(x => x.innerText == prefs.font[0]); let rem = document.getElementById("selectedFont");
            if (![undefined,null].includes(slct).innerText !== rem.innerText){
        rem.id = ""; slct.after(rem); document.getElementById("oInpSelected").prepend(slct); slct.id = "selectedFont";}
    /* font size */ fsi.value = prefs.font[1].replace("px","") }
        if ("theme" in prefs){
    // theme
    if (prefs["theme"].replaceAll(" ","") !== ""){
    let nt = Array.from(document.getElementsByClassName("opTheme")).find(x => x.dataset.data == prefs["theme"]); let rt = document.getElementById("selectedTheme"); rt.id = ""; nt.id = "selectedTheme"; }}
}}


function sdPage(loc){
let p = loc; if (typeof loc == "string") {p = document.getElementById(loc)}
    let cov = coverDiv(p)
let div = document.createElement("div"); div.id = "sdPage"; cov.appendChild(div);
    let lc = document.createElement("div"); lc.id = "sdDeckDiv"; div.appendChild(lc);
        let list = document.createElement("div"); list.id = "sdDeckList"; lc.appendChild(list); // PUT DECK STUFF HERE
        let lb = document.createElement("div"); lb.id = "sdDeckMenu"; lc.appendChild(lb);
            lb.appendChild(cIcon("add",[
            ["style",["opacity","0"]]
            ]));
    let rc = document.createElement("div"); rc.id = "sdDeckPrev"; div.appendChild(rc);
        let rcd = document.createElement("div"); rcd.id = "sdDPDiv"; rc.appendChild(rcd); rcd.className = "cSize5"; // this is preview loc
        let rcm = document.createElement("div"); rcm.id = "sdDPMenu"; rc.appendChild(rcm);
            // list
            let del = cIcon("delete",[["dataset","text","Delete"]]);
                del.onclick = function(){ let rd = rcd.dataset.deck
                    if (rd !== undefined){
                        let oli = {
                            styles: [["backgroundColor","red"]],
                            functions: [ // f() for [Confirm] button
                                ["onclick",function(event){deleteDeck(rd);
                                    let evP = event.composedPath()[0]; while (evP.className !== "coverDiv") {evP = evP.parentNode}; evP.remove();} ]]  }
                        createConfirm(div,"Are you sure you want to delete [" + rcd.dataset.deck + "] ?",oli)
                        rcd.dataset.deck = undefined
                    }
                }
            let rename = cIcon("drive_file_rename_outline",[["dataset","text","Rename"]]);
                rename.onclick = function(){let rd = rcd.dataset.deck
                    if (rd !== undefined){
                        let oli = {
                            input: ["text",["placeholder",rd]],
                            datasets: [["prev",rd]],
                            styles: [["backgroundColor","orange"]],
                            functions: [ // f() for [Confirm] button
                                ["onclick",function(event){
                                    let check = renameDeck(rd,Array.from(event.composedPath()[1].childNodes).find(x => x.className.toLowerCase().includes("input")));
                                    if (check != "Same"){
                                    let evP = event.composedPath()[0]; while (evP.className !== "coverDiv") {evP = evP.parentNode} evP.remove();}} ]]  }
                        createConfirm(div,"Rename [" + rcd.dataset.deck + "]",oli)
                    }  } // function
            let load = cIcon("publish",[["dataset","text","Load"]]); load.onclick = function(){
                let rd = rcd.dataset.deck
                if (rd !== undefined){
                    let oli = {
                        styles: [["backgroundColor","orange"]],
                        functions: [ // f() for [Confirm] button
                            ["onclick",function(event){ loadDeck(rd); document.getElementById("sdPage").parentNode.remove(); }
                             ]] }
                    createConfirm(div,"Are you sure you want to load [" + rcd.dataset.deck + "] ? This will remove all cards currently loaded.",oli); }
            }
            rcm.appendChild(del);
            rcm.appendChild(rename);
            rcm.appendChild(load);

// add in all decks
addDeckList()
}


function addDeckList(){
    let dl = document.getElementById("sdDeckList"); while (dl.childNodes.length !== 0){dl.childNodes[0].remove()}
    let cl = document.getElementById("sdDPDiv"); while (cl.childNodes.length !== 0) {cl.childNodes[0].remove()}
    for (var i=0; i<decks.length; i++){ let de = decks[i];
        let dd = document.createElement("div"); dd.className = "deck"; dd.style.color = de["colors"][0]; dd.style.backgroundColor = de["colors"][1]; document.getElementById("sdDeckList").appendChild(dd); dd.dataset.id = de["name"];
        dd.onclick = function(){ dl.dataset.deck = dd.dataset.id
            openDeck("sdDPDiv",decks.find(x => x.name == dd.dataset.id))
        }
        let dn = document.createElement("div"); dn.innerText = de["name"]; dn.className = "deckName"; dd.appendChild(dn);
        let dt = document.createElement("div"); dt.innerText = de["desc"]; dt.className = "deckText"; dd.appendChild(dt);}}

function openDeck(loc,obj){ // from var decks INTO menu
    let p = loc; if (typeof loc == "string"){p = document.getElementById(loc)}
    while (p.childNodes.length !== 0){p.childNodes[0].remove()}
    let c = structuredClone(obj["cards"]);
        for (var i=0; i<c.length; i++){ if ((Array.isArray(c[i]))){
            c[i] = cards.find(x => x.name == c[i][0] && x.edition == c[i][1]);
        }}
    for (var i=0; i<c.length; i++){
        let nc = createCard(c[i]); nc.onclick = function(){}; p.appendChild(nc);
    }
    p.dataset.deck = obj["name"];
}

function addDeckDiv(loc){
if (getDeck("#scBody").length == 0) {toast("A deck without any cards cannot be added.")}
else {
    let p = loc; if (typeof loc == "string") {p = document.getElementById(loc)}
let cov = coverDiv(p); let div = document.createElement("div"); div.id = "createDeckDiv"; cov.appendChild(div);

let l = document.createElement("div"); l.id = "cdLeft"; div.appendChild(l);
    let lndName = document.createElement("div"); lndName.className = "cdInputDiv"; l.appendChild(lndName);
        let inpN = document.createElement("input"); inpN.placeholder = "Deck Name"; lndName.appendChild(inpN);
        let txtN = document.createElement("span"); txtN.innerText = "Deck Name (Required)"; lndName.appendChild(txtN);
    let lndDesc = document.createElement("div"); lndDesc.className = "cdInputDiv"; l.appendChild(lndDesc);
        let inpD = document.createElement("input"); inpD.placeholder = "Description"; lndDesc.appendChild(inpD);
        let txtD = document.createElement("span"); txtD.innerText = "Description (Optional)"; lndDesc.appendChild(txtD);
    let colDiv = document.createElement("div"); colDiv.className = "cdColorsDiv"; colDiv.style = "display: flex; justify-content: center; height: 100%; align-items: end;"; l.appendChild(colDiv);
        let cBG = document.createElement("div"); cBG.className = "cdInputDiv"; colDiv.appendChild(cBG);
            let bgN = document.createElement("input"); bgN.type = "color"; bgN.value = "#ffffff"; cBG.appendChild(bgN);
            let bgT = document.createElement("span"); bgT.innerText = "Deck Color"; cBG.appendChild(bgT);
        let cFC = document.createElement("div"); cFC.className = "cdInputDiv"; colDiv.appendChild(cFC);
            let fcN = document.createElement("input"); fcN.type = "color"; cFC.appendChild(fcN);
            let fcT = document.createElement("span"); fcT.innerText = "Font Color"; cFC.appendChild(fcT);

let r = document.createElement("div"); r.id = "cdRight"; div.appendChild(r); r.className = "cSize5"
    let dc = document.createElement("div"); dc.id = "cdCardList"; r.appendChild(dc);
        let d = getDeck("#scBody"); for (var i=0; i<d.length; i++){
            let c = createCard(d[i],"cdCardList"); c.onclick = function(){}; dc.appendChild(c)
        }
    let cbtn = document.createElement("div"); cbtn.id = "cdCreateBtn"; r.appendChild(cbtn); cbtn.innerText = "Create Deck";
        cbtn.onclick = function(){
            let n = inpN.value; let tx = inpD.value; let bgC = bgN.value; let fcC = fcN.value; let d = getDeck("#cdCardList");
            if (n.replaceAll(" ","").length == 0) {toast("Please input a name for the deck.");}
            else if (decks.findIndex(x => x.name == n) !== -1){toast("A deck already has this name. Please use another name for this deck.")}
            else {
                let deck = {name: n, desc: tx, colors: [fcC,bgC], cards: d}
                decks.push(deck);
                toast("Deck [" + n + "] has been added to the list.")
                cov.remove()
                lsSave()
            } }
}}