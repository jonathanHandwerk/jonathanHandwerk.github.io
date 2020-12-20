const kanji = document.getElementById("kanji");
const input = document.getElementById("input");
//const value = input.value;
const result = document.getElementById("result");
const kanjiList = [
"導入",
"責任者", 
"検討", 
"明らかにする",
"機能",
"開発",
"現実",
"要望",
"組織的",
"行動",
"削除",
"嫌",
"通報",
"関する",
"体験",
"反対票",
"投じる",
"害",
"対策",
"挙"]
const yomiList = [
"どうにゅう", 
"せきにんしゃ",
"けんとう", 
"あきらかにする",
"きのう",
"かいはつ",
"げんじつ",
"ようぼう",
"そしき-てき",
"こうどう",
"さくじょ",
"いや",
"つうほう",
"かんする",
"たいけん",
"はんたい ひょう",
"とうじる",
"がい",
"たいさく",
"きょ",]
const englishList = ["introduction", "person in charge", "make clear;clarify", "function","function",
"development of",
"reality",
"Demand",
"organizational",
"Behavior",
"Delete",
"Unpleasant",
"Report",
"About",
"Experience",
"Opposing voice",
"cast",
"function",
"harm",
"Countermeasure",
"Behavior"]
const sentenceList = ["その国へ民主的な考えを導入するには時間がかかるだろう。", 
"彼が販売部の責任者だ。", 
"それは検討すべきことです。",
"彼は誰がそんなことを言ったのかを明らかにした。",
"寝ている間は、体の機能は不活発になり、体温は下がる。"]
//const vocabList = ["何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)"]
const extraVocabList = [
    {
        "one": "指導",
        "two": "導く",
        "three": "盲導犬",
        "four": "",
    },
    {
        "one": "責任",
        "two": "責める",
        "three": "免責",
        "four": "",
    },{
        "one": "検査",
        "two": "検定",
        "three": "検索条件",
        "four": "",
    },{
        "one": "説明",
        "two": "発明",
        "three": "照明",
        "four": "",
    },{
        "one": "飛行機",
        "two": "扇風機",
        "three": "危機",
        "four": "",
    },{
        "one": "開会",
        "two": "開通",
        "three": "公開",
        "four": "",
    },{
        "one": "現在",
        "two": "現金",
        "three": "現状",
        "four": "",
    },{
        "one": "必要",
        "two": "要請",
        "three": "希望",
        "four": "",
    },{
        "one": "番組",
        "two": "組み合わせ",
        "three": "織物",
        "four": "",
    },{
        "one": "旅行",
        "two": "行列",
        "three": "動物園",
        "four": "運動",
    },
    {
        "one": "削る",
        "two": "削減",
        "three": "掃除",
        "four": "免除",
    },{
        "one": "嫌い",
        "two": "機嫌",
        "three": "機嫌が悪い",
        "four": "嫌味",
    },{
        "one": "普通",
        "two": "交通",
        "three": "天気予報",
        "four": "情報",
    },{
        "one": "玄関",
        "two": "関係",
        "three": "関西",
        "four": "人間関係",
    },{
        "one": "体験学習",
        "two": "体温",
        "three": "経験",
        "four": "試験",
    },{
        "one": "反対",
        "two": "違反",
        "three": "絶対",
        "four": "投票",
    },{
        "one": "投手",
        "two": "投資",
        "three": "投げ出す",
        "four": "投機",
    },{
        "one": "害虫",
        "two": "害人",
        "three": "害獣",
        "four": "害鳥",
    },{
        "one": "対象",
        "two": "政策",
        "three": "苦肉の策",
        "four": "無策",
    },{
        "one": "挙尾虫",
        "two": "挙動不審",
        "three": "挙げられる",
        "four": "挙句",
    },
]
const rootsList = [
    {
        "a": "日",
        "b": "雨",
        "c": "ニ",
    }
]
//const random = Math.floor(Math.random()*kanjiList.length);
const correction = document.getElementById("correction");
const english = document.getElementById("english");
const sentence = document.getElementById("sentence");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const extravocab = document.getElementById("vocab");
const roots = document.getElementById("roots");
let randomNum = 0;


//main functionality, checks result, displays result, gets new question
//try adding a seperate get random number function
function randomNumber()
 {
    return Math.floor(Math.random()*kanjiList.length);
 }
function myFunction()
    {
    if (input.value === yomiList[randomNum]){
        //extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
        //roots.innerHTML = rootsList[0].a+"<br>"+rootsList[0].b+"<br>"+rootsList[0].c;
        //extravocab.innerHTML = vocabList[randomNum];
        result.innerHTML  = 'すごいです！'
        correct.innerHTML++;
        correction.innerHTML = '問題ないです！'
       // sentence.innerHTML = sentenceList[randomNum];
        english.innerHTML = englishList[randomNum];
        //extravocab.innerHTML = extraVocabList[randomNum];
        input.value = "";


        }else{
        //extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
       // roots.innerHTML = rootsList[0].a+"<br>"+rootsList[0].b+"<br>"+rootsList[0].c;
       // extravocab.innerHTML = vocabList[randomNum];;
        result.innerHTML = '残念です。'
        incorrect.innerHTML++;
        correction.innerHTML = yomiList[randomNum];
        english.innerHTML = englishList[randomNum];
       // sentence.innerHTML = sentenceList[randomNum];
        //extravocab.innerHTML = extraVocabList[randomNum];
        input.value = "";
        

        
        }
    }

//event listener for hitting the enter key
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13)
    {
    myFunction()
    }
});
//event listener for setting the kanji
    btn.addEventListener("click", function(){
    //alert('hello');
    randomNum = randomNumber();
    extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
    kanji.innerHTML = kanjiList[randomNum];
    result.innerHTML = ("&nbsp;")
    correction.innerHTML = ("&nbsp;");
    english.innerHTML = ("&nbsp;");
    //sentence.innerHTML = (".");
    //extravocab.innerHTML = (".");


});