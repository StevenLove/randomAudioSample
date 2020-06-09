document.addEventListener("DOMContentLoaded", init);
function init(){
    document.querySelector("#randomize").addEventListener("click",randomize)
    getAudioElement().oncanplay = playAudio;
    setCategory("acx0");
    randomize();
    getIdentifierElement().addEventListener("change",updateAudio);
    getCategoryElement().addEventListener("change",updateAudio);
}

function randomize(){
    console.log("randomize");
    let digits = 6;
    let max = 198999;
    let number = ""+Math.floor(Math.random()*max);
    let str = number.padStart(digits,"0")
    setIdentifier(str);
    updateAudio();
}
function getIdentifierElement(){return document.querySelector("#identifier");}
function setIdentifier(v){getIdentifierElement().value = v;}
function getIdentifier(){return getIdentifierElement().value;}

function getCategoryElement(){return document.querySelector("#category")}
function setCategory(v){getCategoryElement().value = v;}
function getCategory(){return getCategoryElement().value}
// number like 008724
function getURL(){
    let identifier = getIdentifier();
    let category = getCategory();
    let url = "https://samples.audible.co.uk/bk/"+category+"/"+identifier+"/bk_"+category+"_"+identifier+"_sample.mp3"
    
    /* Here's a list of some other links. Note the different 4-letter publisher names like 'peng'
    Each publisher set has a different # of books in it; harry potter only has 36. There are more 
    publishers in other languages but I'm not sure I want to get into them. I would probably want
    to record the max value for each publisher if I want to be able to randomize among them.
    But for now, acx0 is sufficient.
     */
    // let url = "https://samples.audible.co.uk/bk/acx0/"+text+"/bk_acx0_"+text+"_sample.mp3"
    // let url = "https://samples.audible.co.uk/bk/adbl/003327/bk_adbl_003327_sample.mp3"
    // Request URL: https://samples.audible.com/bk/peng/001678/bk_peng_001678_sample.mp3
    // Request URL: https://samples.audible.com/bk/rand/006061/bk_rand_006061_sample.mp3
    // Request URL: https://samples.audible.com/bk/harp/006461/bk_harp_006461_sample.mp3
    // Request URL: https://samples.audible.com/bk/potr/000001/bk_potr_000001_sample.mp3 max is 36
    // Request URL: https://samples.audible.com/bk/brll/012055/bk_brll_012055_sample.mp3
    // Request URL: https://samples.audible.com/bk/aren/004465/bk_aren_004465_sample.mp3
    // Request URL: https://samples.audible.com/bk/hach/005034/bk_hach_005034_sample.mp3
    // Request URL: https://samples.audible.com/bk/podm/000065/bk_podm_000065_sample.mp3
    // Request URL: https://samples.audible.com/bk/rhsp/001418/bk_rhsp_001418_sample.mp3 spanish
    // Request URL: https://samples.audible.com/bk/naxo/000373/bk_naxo_000373_sample.mp3




    return url;
}

function getAudioElement(){return document.querySelector("audio");}
function playAudio(){getAudioElement().play()}
function updateAudio(){
    console.log("update audio");
    getAudioElement().src = getURL();
}