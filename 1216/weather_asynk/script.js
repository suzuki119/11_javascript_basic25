//関数式
const getWeather = function (json) {
    const weatherText = json[0].timeSeries[0].areas[0].weathers[0];//天気
    const maxTemp = json[0].timeSeries[2].areas[0].temps[1];//最高気温
    const minTemp = json[0].timeSeries[2].areas[0].temps[0];//最低気温
    const popMorning = json[0].timeSeries[1].areas[0].pops[0];//降水確率午前
    const popAfternoon = json[0].timeSeries[1].areas[0].pops[1];//降水確率午後

    return {
        weatherText: weatherText,
        maxTemp: maxTemp,
        minTemp: minTemp,
        popMorning: popMorning,
        popAfternoon: popAfternoon
    }
}


// ボタンを押す
const Btn = document.querySelector(".loadBtn");

const loadWeather = async function () {
    const result = document.querySelector(".box");
    const response = await fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json'
    );
    const json = await response.json();

    console.log(json);
    console.log(json[0].timeSeries[0].areas[0].weathers[0]);//天気
    console.log(json[0].timeSeries[2].areas[0].temps[0]);//最低気温
    console.log(json[0].timeSeries[2].areas[0].temps[1]);//最高気温
    console.log(json[0].timeSeries[1].areas[0].pops[0]);//降水確率午前
    console.log(json[0].timeSeries[1].areas[0].pops[1]);//降水確率午後

    const weathers = getWeather(json);
    console.log(weathers);

}

Btn.addEventListener("click", function () {
    console.log("ボタンが起動しました")
    loadWeather;
    // fetchで APIにアクセス
    //エンドポイント
    fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json'
    ).then(function (response) {
        //取得したJSONをオブジェクトに変換する
        return response.json();
    }).then(function (json) {

        // 今日の天気情報
        // JSONを解析




        // HTMLに表示する
        weather.innerHTML = `<h2>今日の天気（愛知県西部）</h2>
      <p>天気：${weathers.weatherText}</p>
      <p>最高気温：${weathers.maxTemp}℃</p>
      <p>最低気温：${weathers.minTemp}℃</p>
      <p>降水確率（午前）：${weathers.popMorning}%</p>
      <p>降水確率（午後）：${weathers.popAfternoon}%</p>
    `;

    }).catch(function (error) {
        console.log(error);
    });
    // 読み込み中は「読み込み中…」を表示
    // async / awaitで書き直す

})
