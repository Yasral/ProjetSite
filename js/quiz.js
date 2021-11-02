window.onload = function () {
    var quest = 1;
    var num = document.getElementById("num");
    var tab =
        [
            ["temperature", "Question1", "Quelle est votre temperature?????", [
                '<input type="radio" name="r" value="Temperature > 36°C"/> <label>Temperature > 36°C</label> <input type="radio" name="r" value="Temperature < 36°C"/> <label>Temperature < 36°C</label> <input type="radio" name="r" value="36.7°C<Temperature< 37°C"/> <label>36.7°C<Temperature< 37°C</label>'
            ]
            ],
            ["fievre", "Question2", "Avez-vous de la fievre?????", [
                '<input type="radio" name="r" value="1"/> <label>Oui</label> <input type="radio" name="r" value="0"/> <label>Non</label>'
            ]
            ],
            ["maux de tete", "Question3", "Avez-vous mal à la tete?????", [
                '<input type="radio" name="r" value="1"/> <label>Oui</label> <input type="radio" name="r" value="0"/> <label>Non</label>'
            ]
            ],
            ["difficultés respiratoires", "Question4", "Avez-vous es difficultés respiratoires?????", [
                '<input type="radio" name="r" value="1"/> <label>Oui</label> <input type="radio" name="r" value="0"/> <label>Non</label>'
            ]
            ],
            ["mal de gorge", "Question5", "Avez-vous des mals de gorge??????", [
                '<input type="radio" name="r" value="1"/> <label>Oui</label> <input type="radio" name="r" value="0"/> <label>Non</label>'
            ]
            ],
            ["diarrhée", "Question6", "Avez-vous de la diarrhée??????", [
                '<input type="radio" name="r" value="1"/> <label>Oui</label> <input type="radio" name="r" value="0"/> <label>Non</label>'
            ]
            ]
        ];
    changeT();
    var temp = document.querySelector("#temperature");
    temp.onclick = function () {
        changeBC();
        quest = 1;
        changeT();
    };
    var fiev = document.querySelector("#fievre");
    fiev.onclick = function () {
        changeBC();
        quest = 2;
        changeT();
    };

    var mauTt = document.querySelector("#mauTete");
    mauTt.onclick = function () {
        changeBC();
        quest = 3;
        changeT();
    };
    var difr = document.querySelector("#difResp");
    difr.onclick = function () {
        changeBC();
        quest = 4;
        changeT();
    };
    var malgorge = document.querySelector("#malg");
    malgorge.onclick = function () {
        changeBC();
        quest = 5;
        changeT();
    };

    var diarrhe = document.querySelector("#diarr");
    diarrhe.onclick = function () {
        changeBC();
        quest = 6;
        changeT();
    };
    const suivant = document.getElementById("suiv");
    suivant.addEventListener('click', () => {
        // let recap = document.getElementsByTagName('r');
        // recap 
        changeBC(); 
        quest = quest >= 6 ? 1 : quest + 1; //equation ternaire
        changeT();

    });
    function changeT() {
        document.getElementById("question").textContent = tab[quest - 1][1];
        document.getElementById("para").textContent = tab[quest - 1][2];
        document.getElementById("form").innerHTML = tab[quest - 1][3]
        num.textContent = (quest + "/6");
    }

    function changeBC() {
        document.getElementById('temperature').style.color = quest == 1 ? "blue" : ""
        document.getElementById('fievre').style.color = quest == 2 ? "blue" : ""
        document.getElementById('mauTete').style.color = quest == 3 ? "blue" : ""
        document.getElementById('difResp').style.color = quest == 4 ? "blue" : ""
        document.getElementById('malg').style.color = quest == 5 ? "blue" : ""
        document.getElementById('diarr').style.color = quest == 6 ? "blue" : ""
    }

};



