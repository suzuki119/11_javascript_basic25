// 配列リテラル
const luckList = ["極吉", "超吉", "巨吉", "大吉", "中吉", "小吉", "薄吉", "小凶", "凶", "大凶", "超凶", "極凶"];

const luckDescription = [
    "最高の運勢です。思い切った挑戦が成功へつながるでしょう。周囲の応援にも恵まれます。",
    "非常に良い運気です。普段より積極的に動くことで、大きな成果を得られます。",
    "大きな幸運が訪れる予感。努力してきたことが実を結び、嬉しい知らせが届きそうです。",
    "運気は好調です。新しいことを始めると良い流れに乗れます。気持ちを前向きに保ちましょう。",
    "まずまずの運勢。落ち着いて行動すれば順調に進みます。周囲への気配りが吉を呼びます。",
    "小さな幸せが見つかる日。欲張らず、今あるものに感謝する姿勢が運を強めます。",
    "運気は控えめですが穏やか。無理をせず、いつも通りで過ごすと良い方向へ向かいます。",
    "注意が必要な日。焦りは禁物です。ゆっくり確認しながら進めるとトラブルを防げます。",
    "運気は下降気味。慎重な判断が求められます。無理な予定は避けて休息を大切にしましょう。",
    "思わぬ問題が起こりやすい日。冷静に対処すれば大事にはなりません。周囲に頼るのも吉。",
    "強い逆風の運気です。新しい挑戦は控え、今は準備と見直しの時間にすると好転します。",
    "最も厳しい運勢。慎重に動き、無茶を避けることで被害を最小限に。心身のケアを優先しましょう。"
];

// ラッキーアイテム
const items = ["紅茶", "オレンジ", "車", "桜", "松", "桶", "腕", "亀", "栗", "鈴", "サンダル", "ラジカセ"];

//ラッキーナンバー
const numbers = [];

//結果
const thisresult = document.querySelector("#result");


// 星座ごとの結果を記憶するオブジェクトの用意
const fortuneMemory = {};


//array（配列）を受け取り、長さを参照してランダムな変数を返す
const getRandomElement = function (array) {
    const index = Math.floor(Math.random() * array.length);
    return index;
};

//占いの関数
const getFortune = function () {
    const luckIndex = getRandomElement(luckList);

    const numberIndex = getRandomElement(numbers);

    const itemIndex = getRandomElement(items);


    //配列内の要素の移動(spliceで行っている)
    const luck = luckList.splice(luckIndex, 1)[0];
    const lucktext = luckDescription.splice(luckIndex, 1)[0];

    const number = numbers.splice(numberIndex, 1)[0];
    const item = items.splice(itemIndex, 1)[0];


    //オブジェクトとキーで返す
    return {
        luck: luck,
        item: item,
        number: number,
        luckDescription: lucktext
    };
};

//文字の全角化
function toZenkaku(num) {
    return String(num).replace(/[0-9]/g, s => String.fromCharCode(s.charCodeAt(0) + 0xFEE0));
}

//占いボタンの取得
const starlist = document.querySelectorAll(".starlist div");
console.log(starlist);




const sun = document.querySelector("#circle .ball");

for (let i = 0; i < starlist.length; i++) {

    //ラッキーナンバーの用意
    numbers.push(i + 1);


    starlist[i].addEventListener("click", function () {

        //占い結果を入れるオブジェクト
        let resultObj;

        //fortuneMemory[i]の真偽判定
        if (fortuneMemory[i]) {
            // すでに占われた星座なら、記憶した結果を使う
            resultObj = fortuneMemory[i];
            console.log("記憶された運勢の使用");
        } else {
            // 初回のみランダム生成し,fortuneMemoryに記憶
            resultObj = getFortune();
            fortuneMemory[i] = resultObj;
            console.log("初回");
        }
        console.log(resultObj);
        console.log(fortuneMemory);
        console.log(numbers);

        // 運勢テキストに「吉」「凶」が含まれるか判定
        let luckpoint = "";
        if (resultObj.luck.includes('吉')) {
            luckpoint = 'good';
        } else if (resultObj.luck.includes('凶')) {
            luckpoint = 'bad';
        }

        thisresult.innerHTML =
            `
    <h2 class="${luckpoint}">${resultObj.luck}</h2>
    <p>${resultObj.luckDescription}</p>
<p class="number">ラッキーナンバー：<span>${toZenkaku(resultObj.number)}</span></p>
    <p>アイテム：${resultObj.item}</p>
    `;
        //$で変数として確定させる,※(``)が必要

        thisresult.classList.add("show"); // アニメーション
        thisresult.style.background = `url('./img/4x/${i + 1}.png') no-repeat center / contain rgba(255, 225, 0, 0.13)`;//背景に星座の画像


        //配列の全てが出たかの確認
        if (numbers.length === 0) {
            const resetBtn = document.querySelector(".reset");
            resetBtn.classList.add("light");
        }
    });
}
console.log(numbers);












const slotResult = document.getElementById("slot-result");
const startButton = document.getElementById("startBtn");
const stopButtons = document.querySelectorAll(".stopBtn");

const symbols = ["🍒", "🍋", "🔔", "⭐", "🍉", "7️⃣"];

// 初期表示
function init() {
    slotResult.innerHTML = `
            <div class="resultlist">
            <div class="slot">？</div>
            <div class="slot">？</div>
            <div class="slot">？</div>
            </div>
        `;
}

init();

let timers = [null, null, null];
let indexes = [0, 0, 0];
let isSpinning = false;

// スタート
startButton.addEventListener("click", () => {
    if (isSpinning) return;
    isSpinning = true;

    const slots = document.querySelectorAll(".slot");

    for (let i = 0; i < 3; i++) {
        slots[i].classList.add("spinning");

        timers[i] = setInterval(() => {
            slots[i].textContent = symbols[indexes[i] % symbols.length];
            indexes[i]++;
        }, 200);
    }
});

// ストップ（目押し）
stopButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const i = btn.dataset.index;
        const slots = document.querySelectorAll(".slot");

        if (!timers[i]) return;

        clearInterval(timers[i]);
        timers[i] = null;
        slots[i].classList.remove("spinning");

        // 全部止まったらリセット可能に
        if (timers.every(t => t === null)) {
            isSpinning = false;
        }
    });
});
