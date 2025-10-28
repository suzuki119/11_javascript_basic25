// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');

  seHit.currentTime = 0; //連続した時に再生位置を0に戻す
  seHit.play();
}

//死亡時の処理の定義
function defeat() {
  hp = 0;
  hpText.textContent = 0;
  hpBar.value = 0;

  //撃破時のエフェクト適用（enemy--fly または enemy--squash）
  enemy.classList.add('enemy--fly');

  //撃破後のボタン無効化処理
  //!!.disabledで無効化!!
  attackButton.disabled = true;

  //撃破メッセージの表示
  //一度のみの発動なので、変数無しでいい
  if (dangerpoint === 1) {
    text.textContent = 'モンスターに負けた';
  }
  else {
    text.textContent = 'モンスターをたおした';
  }


  //.playで効果音を実行
  seDefeat.play();

}

// 状態（HP）
let hp = MAX_HP;

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

const text = document.querySelector('.log');




let dangerpoint = 0;
const protectButton = document.querySelector('.protectBtn');

protectButton.addEventListener('click', function () {
  text.textContent = '攻撃だ！';
  dangerpoint = 0;
})

//ランダムダメージの実装
attackButton.addEventListener('click', function () {

  //!!randomは０から１の値!!
  const damage =
    //.floorで小数点以下切り下げ
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;

  // ダメージ計算
  hp = hp - damage;
  text.textContent = ''

  //!!関数の呼び出し!!
  shakeEnemy();




  //HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0 || dangerpoint === 1) {
    //!!死亡時の関数を呼び出し!!
    defeat();

  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
  }


  //!!Math.roundで四捨五入!!
  const danger = Math.round(Math.random() * 1);
  console.log(Boolean(danger));
  if (hp > 0) {
    text.textContent = '安全だ！';
  }
  if (dangerpoint !== 1 && hp > 0 && Boolean(danger) === true) {
    text.textContent = '危険だ！';
    dangerpoint = 1;
  }

})

//効果音の追加（オプション）
const seDefeat = document.querySelector('#se-defeat');
const seHit = document.querySelector('#se-hit');


//リスタート機能の実装（オプション）
// リスタート処理
const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', function () {
  // HPを初期値に戻す
  hp = MAX_HP;
  hpText.textContent = hp;
  hpBar.value = hp;
  dangerpoint = 0;

  enemy.classList.remove('enemy--fly'); // 撃破演出のクラスを削除

  attackButton.disabled = false; // 攻撃ボタンを有効化

  document.querySelector('.log').textContent = ''; // ログをクリア
});




//-----------------------------




// 初期設定
const MAX_HP2 = 100;

//震えるアニメーション関数の定義
function shakeEnemy2() {
  const enemyArea2 = document.querySelector('.enemy2');
  enemyArea2.classList.remove('hit');
  enemyArea2.offsetWidth;
  enemyArea2.classList.add('hit');

  seHit.currentTime = 0; //連続した時に再生位置を0に戻す
  seHit.play();
}

//死亡時の処理の定義
function defeat2() {
  hp2 = 0;
  hpText2.textContent = 0;
  hpBar2.value = 0;

  //撃破時のエフェクト適用（enemy--fly または enemy--squash）
  enemy2.classList.add('enemy--fly');

  //撃破後のボタン無効化処理
  //!!.disabledで無効化!!
  attackButton2.disabled = true;

  //撃破メッセージの表示
  //一度のみの発動なので、変数無しでいい
  if (dangerpoint2 === 1) {
    text2.textContent = 'モンスターに負けた';
  }
  else {
    text2.textContent = 'モンスターをたおした';
  }


  //.playで効果音を実行
  seDefeat.play();

}

// 状態（HP）
let hp2 = MAX_HP2;

// モンスター
const enemy2 = document.querySelector('.enemyImg2');

// HP表示部分
const hpText2 = document.querySelector('.hpText2 span');
const hpBar2 = document.querySelector('.hpBar2');

// 攻撃処理
const attackButton2 = document.querySelector('.attackBtn2');

const text2 = document.querySelector('.log2');




let dangerpoint2 = 0;
const protectButton2 = document.querySelector('.protectBtn2');

protectButton2.addEventListener('click', function () {
  text2.textContent = '攻撃だ！';
  dangerpoint2 = 0;
})

//ランダムダメージの実装
attackButton2.addEventListener('click', function () {

  //!!randomは０から１の値!!
  const damage2 =
    //.floorで小数点以下切り下げ
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;

  // ダメージ計算
  hp2 = hp2 - damage2;
  text2.textContent = ''

  //!!関数の呼び出し!!
  shakeEnemy2();




  //HP表示の更新ロジック修正（マイナス値の防止）
  if (hp2 <= 0 || dangerpoint2 === 1) {
    //!!死亡時の関数を呼び出し!!
    defeat2();

  } else {
    hpText2.textContent = hp2;
    hpBar2.value = hp2;
  }


  //!!Math.roundで四捨五入!!
  const danger2 = Math.round(Math.random() * 1);
  console.log(Boolean(danger2));
  if (hp2 > 0) {
    text2.textContent = '安全だ！';
  }
  if (dangerpoint2 !== 1 && hp2 > 0 && Boolean(danger2) === true) {
    text2.textContent = '危険だ！';
    dangerpoint2 = 1;
  }

})

//リスタート機能の実装（オプション）
// リスタート処理
const restartBtn2 = document.querySelector('.restartBtn2');
restartBtn2.addEventListener('click', function () {
  // HPを初期値に戻す
  hp2 = MAX_HP2;
  hpText2.textContent = hp2;
  hpBar2.value = hp2;
  dangerpoint2 = 0;

  enemy2.classList.remove('enemy--fly'); // 撃破演出のクラスを削除

  attackButton2.disabled = false; // 攻撃ボタンを有効化

  document.querySelector('.log2').textContent = ''; // ログをクリア
});
