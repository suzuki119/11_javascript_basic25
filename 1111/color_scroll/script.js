//1オブジェクトで色を用意
//const オブジェクト = キー:プロパティ

//const オブジェクト = キー:プロパティ
const settingColors =
    [{ r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 0, b: 255 },//青
    { r: 0, g: 255, b: 0 }, //緑
    { r: 255, g: 255, b: 0 }//黄色
    ];
console.log(settingColors);

/*背景色の設定方法
'rgb(' +
    r値 +
    ',' +
    g値 +
    ',' +
    b値 +
    ')';
    */




//2オブジェクトの色をbodyの背景色にする

document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';



/*背景色の設定方法
'rgb(' + r値 + ',' + g値 + ',' +b値 + ')';
*/


//3 4色制作して、配列にする



//4スクロールするたびにイベント
//5documentの縦の長さ取得
//6 1 / 4進んだら色が変わるようにする
//7スクロールを4分割
//8スクロール量を計算
//9変数scrollableを4分割
//10関数の定義
//11関数の呼び出し（実行）の実引数







function changeColor(num) {
    document.body.style.backgroundColor = "rgb(" + settingColors[num].r + "," + settingColors[num].g + "," + settingColors[num].b + ")";
}

window.addEventListener('scroll', function () {
    console.log('スクロールされました');
});
//windowを参照,スクロールしたかを常に取得


const fullheight = document.documentElement.scrollHeight;
console.log(fullheight);//全長2400

const scrollY = window.scrollY;//現在の位置参照
console.log(scrollY);//現在の位置

//スクロールするたびに(（"scroll"）)実行するイベントの追加






window.addEventListener("scroll", function () {

    //画面の高さを参照(windowそのものの高さ)
    const viewheight = document.documentElement.clientHeight;

    //スクロールできる長さ(サイトのスクロールできる全長)
    const scrollable = fullheight - viewheight;
    console.log(viewheight);
    console.log(scrollable);

    // 今のスクロール位置を取得
    const scrollY = window.scrollY;
    console.log(scrollY);

    // どのエリア（1〜4）にいるかを判断し関数に命令
    if (scrollY <= scrollable / 4) {
        changeColor(0);
    } else if (scrollY <= scrollable / 2) {
        changeColor(1);
    } else if (scrollY <= (scrollable * 3) / 4) {
        changeColor(2);
    } else {
        changeColor(3);
    }

});
