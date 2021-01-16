const kanji = document.getElementById("kanji");
const input = document.getElementById("input");
//const value = input.value;
const result = document.getElementById("result");
const kanjiList = [
'日次更新済日付',
'売上伝票日付',
'売上伝票番号',
'得意先相手先伝票番号',
'受付係',
'受付係名',
'担当者コード',
'担当者名',
'分類コード１（部門）',
'分類名称１（部門）',
'分類コード２（部門）',
'分類名称２（部門）',
'分類コード３（部門）',
'分類名称３（部門）',
'売上仕入部門コード',
'担当者部門名',
'得意先コード',
'得意先略称',
'得意先御担当者名',
'業種コード',
'業種名称',
'業態コード',
'業態名称',
'戦略区分（得意先）',
'戦略区分名（得意先）',
'納品先コード',
'納品先略称',
'倉庫コード',
'倉庫名',
'帳端区分',
'帳端名称',
'締日付',
'備考',
'行番号',
'表示商品コード',
'メーカーコード',
'メーカー名',
'ﾒｰｶｰ規格番号',
'売上数量',
'原価単価',
'販売単価',
'売上金額',
'最新卸単価',
'最新定価',
'粗利額',
'粗利率',
'伝票管理NO.',
'取引区分略称',
'明細備考２',
'最新担当者コード',
'最新担当者名',
'最新部門コード',
'最新部門名',
'ﾀｲﾑｽﾀﾝﾌﾟ（時間）',
'ﾀｲﾑｽﾀﾝﾌﾟ（日付）',
'ﾒｰｶｰ商品ｺｰﾄﾞ',
'社内行備考',
'社内備考',
'カタログ注文品番',
'受注伝票番号',
'単価ランク用分類１',
'単価ランク用分類２',
'単価ランク用分類３'
]
const yomiList = [
'...?',
'うりあげでんぴょうひづげ',
'...?',
'...?',
'うけつけがかり',
'うけつけがかりめ',
'たんとうしゃこーど',
'たんとうしゃめ',
'ぶんるいこーどいち（ぶもん）',
'ぶんるいめいしょういち',
'ぶんるいこーどに　（ぶもん）',
'ぶんるいめいしょうに　（ぶもん）',
'ぶんるいこーどさん　（ぶもん）',
'ぶんるいめいしょう３　（ぶもん）',
'うりあげしいぶもんこーど',
'たんとうしゃぶもんめ',
'とくいさきこーど',
'とくいさきらくしょう',
'とくいさきたんとうしゃ',
'ぎょうしゅこーど',
'ぎょうしゅめいしょう',
'ぎょうたいこーど',
'ぎょうたいめいしょう',
'せんりゃくくぶん（とくいさき）',
'せんりゃくくぶんめ（とくさき）',
'のうひんさきこーど',
'のうひんさきりゃくしょう',
'そうここーど',
'そうこうめ',
'...？',
'...？',
'しめひづげ',
'びこう',
'ぎょうばんごう',
'ひょうじしょひんこーど',
'めーかーこーど',
'めーかーめ',
'めーかーきかくばんごう',
'うりあげすりょう',
'げんかたんか',
'はんばいたんか',
'うりあげきんがく',
'さいしんおろしたんか',
'さいしんていか',
'あらりがく',
'あらりりつ',
'でんぴょうかんりなんば',
'とりひきくぶんりゃくしょう',
'めいさいびこう',
'さいしんたんとしゃこーど',
'さいしんたんとしゃめ',
'さいしんぶもんこーど',
'さいしんぶもんめ',
'たいむすたんぷ（じかん）',
'たいむｓたんぷ（ひづけ）',
'めーかーしょうひんこーど',
'しゃないぎょうびこう',
'しゃないびこう',
'かたろぐちゅうもんひんばん',
'じゅちゅうでんぴょうばんご',
'たんからんくようぶんるいいち',
'たんからんくようぶんるいに',
'たんからんくようぶんるいさん'
]
const englishList = [
'Daily updated date',
'Sales slip Date',
'Sales slip number',
'Customers destination document number',
'receptionist',
'Receptionist name',
'Rep code',
'Contact Person Name',
'Classification code 1 (department)',
'Category Name 1 (department)',
'Classification code 2 (department)',
'Category Name 2 (department)',
'Classification code 3 (department)',
'Category Name 3 (department)',
'Sales purchasing department code',
'Personnel department name',
'Customer code',
'Customers abbreviation',
'Customer your contact name',
'Industry code',
'Industry name',
'Business category code',
'Format name',
'Strategy classification (customer)',
'Strategy division name (customer)',
'Delivery destination code',
'Delivery destination abbreviation',
'Warehouse code',
'Warehouse name',
'End accounts distinguish',
'End account name',
'Parties pay day',
'Remarks',
'line number',
'Display product code',
'Manufacturer code',
'Manufacture name',
'Studio Standard number',
'Sales volume',
'Cost unit price',
'Unit selling price',
'Sales amount',
'Latest wholesale unit price',
'Latest list price',
'The amount of crude Lee',
'Crude rates',
'Slip management NO.',
'Trading division abbreviation',
'Details Remarks 2',
'The latest person in charge code',
'The latest contact name',
'The latest department code',
'Latest department name',
'Time stamp (time)',
'Time stamp (date)',
'Manufacturer product code',
'In-house line Remarks',
'House Remarks',
'Order catalog part number',
'Sales order number',
'For cost-per-rank classification 1',
'For cost-per-rank classification 2',
'For cost-per-rank classification 3'
]
const sentenceList = [
"kkkk"
]
// ]
//const vocabList = ["何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)","何 (what)<br>何 (what)"]
const extraVocabList = [
    {
        "one": "blank",
        "two": "blank",
        "three": "blank",
        "four": "blank",
    },
    {
        "one": "not blank",
        "two": "not blank",
        "three": "not blank",
        "four": "not blank",
    }
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
  //  extravocab.innerHTML = extraVocabList[randomNum].one+"<br> "+extraVocabList[randomNum].two+"<br>"+extraVocabList[randomNum].three;
    kanji.innerHTML = kanjiList[randomNum];
    result.innerHTML = ("&nbsp;")
    correction.innerHTML = ("&nbsp;");
    english.innerHTML = ("&nbsp;");
    console.log(kanjiList.length);
    console.log(yomiList.length);
    console.log(englishList.length);
    //sentence.innerHTML = (".");
    //extravocab.innerHTML = (".");


});