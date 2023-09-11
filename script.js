var t = new Date
var date = (t.getMonth()+1).toString() + t.getDate().toString() + t.getFullYear().toString()


function getData(data,elem){
    let b = document.getElementById("mainBody"); if (elem !== undefined) {b = elem; if (typeof elem == "string"){b = document.getElementById(elem)}}
    if (b.dataset[data] == undefined) { return [{},b]}
    else {return [JSON.parse(b.dataset[data]),b]}
}

function addEditions(){
    let el = editions
    // filter filters if exists
    // then loop
    for (var i=0; i<el.length; i++){
        createEdition(el[i],"clBody")
    }
}

function addCards(){
    let cl = cards
    // filter filters if exists
    // then loop
    for (var i=0; i<cl.length; i++){
        if (typeof cl[i] == "object" && !Array.isArray(cl[i])){
        let elem = createCard(cl[i],"clBody");
        document.getElementById(("e"+(cl[i]["edition"].replaceAll(" ",""))+"Body").replaceAll(" ","")).appendChild(elem)
    }}
}



function getDeckLength(){ // get length of deck (minus those w/ .gcDiv
    let b = document.getElementById("scBody"); let bc = Array.from(b.childNodes).filter(x=> !x.id.includes("sc"))
    return bc.length;
}

function toggleFilter(cat,elem){
    let c = cat; let curVal = getData("filters",document.getElementById("filterPage"))
    let o = curVal[0];
    if (typeof elem == "object"){var t = elem.innerText;}
    if (elem == "clear"){
        if (c in o) {delete o[c]}
        curVal[1].dataset.filters = JSON.stringify(o)
        return
    }
    else if (elem == "all"){
        curVal[1].dataset.filters = JSON.stringify({})
        return
    }
    else if (c in o){
        if (o[c].includes(t)) { // remove
            let rem = []; for (var i=0; i<o[c].length; i++){
                if (o[c][i] !== t) {rem.push(o[c][i])} }
            o[c] = rem
            if (o[c].length == 0) {delete o[c]}
        }
        else {o[c].push(t);} // add (not in list)
    }
    else {o[c] = [t]}

    elem.classList.toggle("selectedFilter")
    curVal[1].dataset.filters = JSON.stringify(o)
}

function applyFilter(){
    let f = getData("filters")[0]; let b = Array.from(document.getElementsByClassName("card")).filter(x => x.parentNode.className == "editionB");

    if (Object.keys(f).length == 0){ // no filters
        for (var i=0; i<b.length; i++){b[i].style.display = "flex";}
        let ed = document.getElementsByClassName("edition")
        for (var i=0; i<ed.length; i++){ed[i].dataset.data = "Close";}
    }
    else {
        for (var i=0; i<b.length; i++){ let bc = JSON.parse(b[i].dataset.data);
            if (cardMatch(bc,f)) {b[i].style.display = "flex";}
            else {b[i].style.display = "none";}     }
        let ed = document.getElementsByClassName("edition");
        for (var i=0;i<ed.length; i++){ed[i].dataset.data = "Open";}
    }
    lsSave()
}

function addToList(elem,body){
    let b = body; if (typeof body == "string") {b = document.getElementById(body);}
    let c = JSON.parse(elem.dataset.data)
        let maxCards = getData("prefs")[0]; if ("maxCards" in maxCards) {maxCards = getData("prefs")[0].maxCards[2]} else {maxCards = 10}
    if (getDeckLength() == maxCards) { toast("You can only have up to " + maxCards + " cards in a deck.") } // will be customized later
    else {
        if ("special" in c || "dependencies" in c){
            b.appendChild(elem); elem.onclick = function(){removeFromList(elem)}
            if ("special" in c){
                for (var i=0; i<c.special.length; i++){
                    let sp = c.special[i].split(": ")
                    if (!checkSpecial(sp[1])){
                        let list = document.createElement("div"); list.className = "gcDiv";  b.appendChild(list); list.id = "sc" + sp[1].replaceAll(" ",""); list.dataset.data = elem.dataset.data;
                        let lc = cards.find(x => Array.isArray(x) && x[0] == sp[1]);
                            list.classList.add("cSize" + (lc.length-1));
                        for (var cd=1; cd<lc.length; cd++){
                            let nc = createCard(lc[cd],list); list.appendChild(nc); nc.onclick = function(){}} // can't be selected
                    }
                    } // loop
            } //specials
            else { // dependencies
                let list = document.createElement("div"); list.className = "gcDiv"; b.appendChild(list); list.classList.add("cSize" + (c.dependencies.length+1)); list.id = "gc" + c.name.replaceAll(" ",""); list.dataset.data = elem.dataset.data;
                list.appendChild(elem); elem.onclick = function(){removeFromList(elem)}
                for (var i=0; i<c.dependencies.length; i++){
                    let nc = createCard(c.dependencies[i],list); list.appendChild(nc); nc.onclick = function(){removeFromList(elem)}
                }
            }
        }
        else {b.appendChild(elem); elem.onclick = function(){removeFromList(elem)}}

    }}

function removeFromList(elem){ let c = JSON.parse(elem.dataset.data); let b = document.getElementById("clBody")
    if ("dependencies" in c) {var container = elem.parentNode}

    let cd = cards.filter(x => !(JSON.stringify(getDeck("#scBody")).includes(JSON.stringify(x))) || JSON.stringify(x) == JSON.stringify(c));
    let eA = cd.findIndex(x => JSON.stringify(x) == JSON.stringify(c));
    let eb = document.getElementById("e" + cd[eA].edition.replaceAll(" ","") + "Body"); let eD = Array.from(eb.childNodes);
    var sibl = eD.findIndex(x => x.dataset.data == JSON.stringify(cd[eA-1]));
    if (sibl == -1) {eb.prepend(elem)}
    else { eD[sibl].after(elem); }
    elem.onclick = function(){addToList(elem,"scBody")}
    if ("special" in c || "dependencies" in c){
        if ("dependencies" in c) {container.remove()}
        else { // specials
            // other cards DON'T have "special" ["Gain: Ruins"], then REMOVE
            for (var i=0; i<c.special.length; i++){
                let sp = c.special[i]; let spc = document.getElementById("sc" + sp.split(": ")[1].replaceAll(" ",""));
                let val = getDeck("#scBody").filter(x => "special" in x && x.special.includes(sp));
                if (val.length == 1){spc.remove() }
            }
        }
    }
}


function checkSpecial(sp){
    let gl = document.getElementsByClassName("gcDiv");
    if (gl.length == 0 || (Array.from(gl).findIndex(x => x.id.substring(2).includes(sp)) == -1 )) {return false} // doesn't exist
    else {return true} // exists
}

function getDeck(name){
    if (typeof name == "string"){
        if (name[0] == "#"){ // deck list (#scBody)
            let p = document.getElementById(name.substring(1))
            let list = []; for (var i=0; i<p.childNodes.length; i++){list.push(JSON.parse(p.childNodes[i].dataset.data))} return list
        }
    }
}






function cardMatch(card,filters){
for (key in filters){ let kf = filters[key];
    if (key == "Name") {
        if (!card.name.toLowerCase().replaceAll(" ","").includes(kf.toLowerCase().replaceAll(" ",""))){return false}
    }
    if (key == "Edition") {  if (!kf.includes(card.edition)) {return false} }
    if (key == "Type") {if (kf.filter(x => card.type.includes(x)).length == 0) {return false} }
    if (key == "Cost"){
    if (!kf.includes(JSON.stringify(card.cost))){return false}}
    if (key == "Attributes" || key == "Keywords") { let tx = card.text; if (typeof tx == "string") {tx = [card.text]}; let tl = []
        if (key == "Attributes"){tl = tx.filter(x => Array.isArray(x))} else {tl = tx.filter(x => typeof x == "string")}
            if (tl.length == 0) {return false}
                let filtered = []
                if (key == "Attributes"){
                filtered = tl.filter(x => kf.filter(y => x[1].toLowerCase().includes(y.toLowerCase())).length !== 0); }
                if (key == "Keywords"){
                filtered = tl.filter(x => kf.filter(y => x.toLowerCase().includes(y.toLowerCase())).length !== 0); }
            if (filtered.length == 0) {return false}
    }

} // for key loop
return true
}



function searchTerm(){
let s = document.getElementById("searchBar").value;
    let g = getData("filters"); let go = g[0]; go.Name = s;
        if (s.length == 0) {delete go.Name}
    g[1].dataset.filters = JSON.stringify(go)
    applyFilter()
}


function setPrefs(obj){ // if changing prefs
    if (obj === undefined){
    // cards per row
        let lc = document.getElementById("selectedOpLibrary") // library
        let dc = document.getElementById("selectedOpDeck") // deck
            // cards in deck
            let mcd = document.getElementById("maxCardsDeckInp")
    //Font
        let ft = document.getElementById("selectedFont") //Font family
        let fs = document.getElementById("opFontSize") //Font size
    //Theme
        let t = document.getElementById("selectedTheme")
        // turning data into object
    let vals = [lc.innerText,dc.innerText,ft.innerText,fs.value,t.dataset.data]
    let pf = getData("prefs")
        pf[0].maxCards = [vals[0],vals[1],mcd.value];
        pf[0].font = [vals[2],vals[3] + "px"]
        pf[0].theme = vals[4]
    pf[1].dataset["prefs"] = JSON.stringify(pf[0]);
    // now change them!
    document.getElementById("clBody").className = "cSize" + pf[0].maxCards[0] // cards per row (Library)
    document.getElementById("scBody").className = "cSize" + pf[0].maxCards[1] // cards per row (Deck)
    document.getElementById("customStyle").innerText = "div, input {font-size: " + pf[0].font[1] + "; font-family: " + pf[0].font[0] + "!important; }"; // fontSize & fontFamily
    if (document.getElementById("prefCss").href != vals[4]){
    document.getElementById("prefCss").href = vals[4];} // css
        }
    else { // localStorage stuff
        let v = obj; if (typeof obj == "string") {v = JSON.parse(obj);}
        if ("maxCards" in v["preferences"]) {
            document.getElementById("clBody").className = "cSize" + v["preferences"].maxCards[0] // cards per row (Library)
            document.getElementById("scBody").className = "cSize" + v["preferences"].maxCards[1] // cards per row (Deck)
        }
        if ("font" in v["preferences"]){
        document.getElementById("customStyle").innerText = "div, input {font-size: " + v["preferences"].font[1] + "; font-family: " + v["preferences"].font[0] + "!important; }"; } // fontSize & fontFamily

        if ("theme" in v["preferences"]) {document.getElementById("prefCss").href = v["preferences"]["theme"]; } // css
        if (document.getElementById("optionsPage") !== null) {
            document.getElementById("optionsPage").parentNode.remove(); optionsPage("content");
             }
    }


lsSave()
}





function lsSave(){ // get data
let prefs = getData("prefs")[0];
    let val = {
        preferences: {}, deckList: decks
    }
    if (prefs !== undefined) {val["preferences"] = prefs}
let str = JSON.stringify(val)
localStorage.dcpData = str
return str
}

function lsLoad(){
let d = JSON.parse(localStorage.dcpData);
    /* prefs */ getData("prefs")[1].dataset.prefs = JSON.stringify(d.preferences); setPrefs(d)
    /* decks */ decks = d.deckList
}

function downloadData(){
    let tx = lsSave()
    var file = new Blob([tx], {type: "text"});
    var a = document.createElement("a"); var url = URL.createObjectURL(file);
    a.href = url; a.download = "DCP-Download (" + date + ")"; document.body.appendChild(a); a.click();
    setTimeout(function() {document.body.removeChild(a); window.URL.revokeObjectURL(url);},0);
}

function uploadData(event){
    let f = readData(event.target.files[0]);
        f.then(function(result) {
        try {
        localStorage.dcpData = result; lsLoad();}
        catch (error) {toast("This file is not compatible. Please check for the right file.")}
        })
}
    async function readData(file){ let val = await file.text(); return await val }

function resetData(){
    console.log("Reset It!")
    //localStorage.clear("dcpData")
        decks = []
        getData("prefs")[1].removeAttribute("data-prefs");
        setPrefs({preferences: {
            font: ["Noto Sans","18px"], maxCards: ["3","5","10"], theme: ""
        }})
}

function deleteDeck(name){
    let loc = decks.findIndex(x => x.name == name);
    console.log(loc)
if (loc == -1){return}
else if (loc == 0) {decks.shift(); console.log(decks)}
else if (loc == decks.length-1) {decks.pop()}
else {
    let newlist = decks.slice(0,loc).concat(decks.slice(loc+1,decks.length))
    decks = newlist;
}
    addDeckList()
}

function renameDeck(prev,name){
    let n = name.value;
    let loc = decks.findIndex(x => x.name == n);
    if (n.length == 0) {toast("The input field is empty. Please enter a name for the deck."); return "Same"}
    else if (loc != -1) {toast("A deck already has this name. Please use another name for this deck."); return "Same"}
    else {
        decks.find(x => x.name == prev).name = n; addDeckList(); return n;
    }
}

function loadDeck(name){
    let b = document.getElementById("scBody");
    while (b.childNodes.length !== 0) {
        if (!b.childNodes[0].className.includes("gcDiv")) {removeFromList(b.childNodes[0]); }}
    let deck = decks.find(x => x.name == name).cards;
    for (var i=0; i<deck.length; i++){ let c = deck[i]
        if (Array.isArray(c)) {c = cards.find(x => x.name == deck[i][0] && x.edition == deck[i][1]);}
        let cli = Array.from(document.getElementById("clBody").childNodes).find(x => x.id == "e" + c.edition.replaceAll(" ","") + "Body").childNodes;
        let elem = Array.from(cli).find(x => x.dataset.data == JSON.stringify(c));
        addToList(elem,"scBody");
    }
}

// finals
addEditions()
addCards()

if (localStorage.dcpData !== undefined){
    let d = JSON.parse(localStorage.dcpData)
    if ("deckList" in d) {decks = d["deckList"]}
    getData("prefs")[1].dataset.prefs = JSON.stringify(d["preferences"])
    setPrefs(d)
}