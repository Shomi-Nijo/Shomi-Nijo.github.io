// 変数
var min = 1;
var max;
var choice;
var randomIndex;
var bracketColor;
var arrow;
var choiceElement =[];
var maxArray = [];
var choiceArray= [];

// 番号配列の生成関数
const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 枠色の割り当て関数
const allotColor = () => {
    switch(true){
        case max == 18:
            switch(true){
                case choiceArray.at(-1) >= 16:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 13:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 11:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 9:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 7:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
        case max >= 16:
            switch(true){
                case choiceArray.at(-1) >= 15:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 13:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 11:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 9:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 7:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
        case max == 15:
            switch(true){
                case choiceArray.at(-1) >= 14:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 12:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 10:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 8:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 6:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 4:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
        case max == 14:
            switch(true){
                case choiceArray.at(-1) >= 13:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 11:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 9:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 7:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
        case max == 13:
            switch(true){
                case choiceArray.at(-1) >= 12:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 10:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 8:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 6:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 4:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break; 
        case max == 12:
            switch(true){
                case choiceArray.at(-1) >= 11:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 9:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 7:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 4:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break; 
        case max == 11:
            switch(true){
                case choiceArray.at(-1) >= 10:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 8:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 6:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 4:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
        case max == 10:
            switch(true){
                case choiceArray.at(-1) >= 9:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) >= 7:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) >= 6:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) >= 5:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) >= 4:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) >= 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) >= 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) >= 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break; 
        case max <= 9:
            switch(true){
                case choiceArray.at(-1) >= 8:
                    bracketColor = "bracketColor_pink";
                    break;
                case choiceArray.at(-1) == 7:
                    bracketColor = "bracketColor_orange";
                    break;
                case choiceArray.at(-1) == 6:
                    bracketColor = "bracketColor_green";
                    break;
                case choiceArray.at(-1) == 5:
                    bracketColor = "bracketColor_yellow";
                    break;
                case choiceArray.at(-1) == 4:
                    bracketColor = "bracketColor_blue";
                    break;
                case choiceArray.at(-1) == 3:
                    bracketColor = "bracketColor_red";
                    break;
                case choiceArray.at(-1) == 2:
                    bracketColor = "bracketColor_black";
                    break;
                case choiceArray.at(-1) == 1:
                    bracketColor = "bracketColor_white";
                    break;
            };
            break;
    };
}

// ページを読み込む
window.onload = function () {
    // 「数字を選ぶ」を押下する
    document.getElementById("choose").onclick = function getRandom(){

        // エラーの初期化
        document.getElementById('error').style.display = "none";

        // 出力の初期化
        document.getElementById('output').style.display = "block";

        // 番号の初期化
        document.getElementById('output').innerHTML = "";

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

            // 出力場所の取得
            outputElement = document.getElementById('output');

            // 数字の数だけランダムに数字を取得する
            for(let i = choice; i > 0; i--){
                // 取得した数字を出力用配列に追加
                randomIndex = Math.floor(Math.random() * maxArray.length);
                choiceArray.push(maxArray[randomIndex]);

                // 既に取得した数字を番号配列から削除
                maxArray.splice(randomIndex,1);

                // 枠色の割り当て
                allotColor()

                // 取得した数字をdiv要素として出力
                var outputchild = choiceArray.indexOf(choiceArray.at(-1));

                choiceElement[outputchild] = document.createElement('div');
                choiceElement[outputchild].classList.add(bracketColor);
                choiceElement[outputchild].style.width = "50px";
                choiceElement[outputchild].innerHTML = choiceArray.at(-1);

                outputElement.appendChild(choiceElement[outputchild]);

                // 選択する残りの数が1より大きい場合、>を追加する
                if(i > 1){
                    arrow = document.createElement('div');
                    arrow.classList.add('arrow')
                    arrow.innerHTML = ">";
                    outputElement.appendChild(arrow);
                }
            }
        }
    }
}
