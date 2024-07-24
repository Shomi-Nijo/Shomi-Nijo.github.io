// 変数
var min = 1;
var max
var choice

// ページを読み込む
window.onload = function () {
    // 「数字を選ぶ」を押下する
    document.getElementById("choose").onclick = function getRandom(){
        // MAXの値からランダムに数字を取得する
        max = document.getElementById("number").valueAsNumber;
        choice = Math.floor(Math.random() * (max - min + 1) + min);
        // 結果の出力
        document.getElementById('output').textContent = choice.toString();
    };
};
