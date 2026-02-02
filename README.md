# 2025年後期「JavaScript基礎」授業課題

このリポジトリは、授業で学んだ内容をまとめ、取り組みを記録するためのものです。
毎回の授業が終わったらpushして進捗を管理します

## 📆 授業ログ

### 9月30日

```
変数キーワード(let,const)
```

####　要素取得

```
document.querySelector(' ');
```

####　テキスト追加
```
elementA.textContent = elementB;
```

####　クリック処理
```
element.addEventListener("click", function () {

        });
```


### 10月30日
```
for(let i=0;i<XXX; i++)
```

### オブジェクトとキー
        const animals = [
            { name: 'ポチ', age: 5 },
            { name: 'たま」', age: 2 }
        ];

        const animalName = animals[1].name;

### ajax
ajaxは再読み込みがサーバー側（ctrl+r）の必要のない非同期処理で、スクロールやクリックに反応し、新しくデータを持ってくる
Googleマップはスクロールとしてコレを使用している
### fetch

fetch('読み込みたいURL'
)
.then(function (response) {
    //取得したJSONをオブジェクトに変換する
    return response.json();

})
.then(function (json) {
    処理

})
.catch(function (error){
    (エラーの場合)
});

### 1月6日
グローバルスコープ => 関数スコープ => ブロックスコープ

        function main() {
            const i = 1;
        }
        //console.log(i);<関数スコープの呼び出しでエラーになる

        if (true) {
            const j = 2;
        }
        //console.log(j);<ブロックスコープの呼び出しでエラーになる

        const k = 3;
        if (true) {
            console.log(k); //<グローバルスコープなので、外側から参照できるが予期せぬバグも起こりやすい
        }
