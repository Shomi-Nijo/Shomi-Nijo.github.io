// 変数
var min = 1;
var max
var choice
var randomIndex
let maxArray = [];
let choiceArray= [];

// 関数
const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// ページを読み込む
window.onload = function () {
    // 「数字を選ぶ」を押下する
    document.getElementById("choose").onclick = function getRandom(){

        document.getElementById('error').style.display = "none";
        document.getElementById('output').style.display = "block";

        //　出力用配列の初期化
        choiceArray = [];

        // MAXとCHOICEを取得する
        max = document.getElementById("max").valueAsNumber;
        choice = document.getElementById("choice").valueAsNumber;

        // 
        if(choice >= max){
            // CHOICEがMAX以上の場合、エラーを表示する
            document.getElementById('error').textContent = "CHOICEはMAXの数値より小さく指定してください。";
            document.getElementById('error').style.display = "block";
            document.getElementById('output').style.display = "none";
        }
        else{
            // 枠配列の生成
            maxArray = range(min,max,1);

            // 数字の数だけランダムに数字を取得する
            for(let i = choice; i > 0; i--){
                // 出力用配列に追加
                randomIndex = Math.floor(Math.random() * maxArray.length);
                choiceArray.push(maxArray[randomIndex]);
                // 配列の要素の削除
                maxArray.splice(randomIndex,1);
            }
            // 結果の出力
            //for(let i = choice; i > 0; i--){
            
            //}
            document.getElementById('output').textContent = choiceArray.toString();
        }
    }
}
