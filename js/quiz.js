window.onload = function () {
    var temperature = ["temperature", "Question1", "Quelle est votre temperature?????"];
    var fievre = ["fievre", "Question2", "Avez-vous de la fievre?????"];
    var mt = ["maux de tete", "Question3", "Avez-vous mal à la tete?????"];
    var dr = ["difficultés respiratoires", "Question4", "Avez-vous es difficultés respiratoires?????"];
    var mg = ["mal de gorge", "Question5", "Avez-vous des mals de gorge??????"];
    var diar = ["diarrhée", "Question6", "Avez-vous de la diarrhée??????"];
    var quest = 1;
    var num = document.getElementById("num");

    var temp = document.querySelector("#temperature");
    temp.onclick = function () {
        changeBC();
        question = document.getElementById("question");

        quest = 1; 
        num.textContent = (quest+"/6");
        //vider le contenu
        question.textContent = " ";
        var texte = document.createTextNode(temperature[1]);
        question.appendChild(texte);
 
        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(temperature[2]);
        para.appendChild(paragraphe);

        var choix1 = document.createElement("input");
        choix1.setAttribute('type', 'checkbox');
        choix1.setAttribute('name', 'r');
        choix1.setAttribute('value', 'Temperature > 36°C');
        var label1 = document.createElement("label");
        label1.textContent = "Temperature > 36°C";

        var choix2 = document.createElement("input");
        choix2.setAttribute('type', 'checkbox');
        choix2.setAttribute('name', 'r');
        choix2.setAttribute('value', 'Temperature < 36°C');
        var label2 = document.createElement("label");
        label2.textContent = "Temperature < 36°C";

        var choix3 = document.createElement("input");
        choix3.setAttribute('type', 'checkbox');
        choix3.setAttribute('name', 'r');
        choix3.setAttribute('value', '36.7°C<Temperature< 37°C');
        var label3 = document.createElement("label");
        label3.textContent = "36.7°C<Temperature< 37°C";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(choix1);
        form.appendChild(label1);
        form.appendChild(choix2);
        form.appendChild(label2);
        form.appendChild(choix3);
        form.appendChild(label3);
    };
    var fiev = document.querySelector("#fievre");
    fiev.onclick = function () {
        changeBC();
        quest = 2; 
        num.textContent = (quest+"/6");
        //recuperer l'element 
        question = document.getElementById("question");
        //vider le contenu 
        question.textContent = " ";
        //créer un nouveau contenu
        var texte = document.createTextNode(fievre[1]);
        question.appendChild(texte);

        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(fievre[2]);
        para.appendChild(paragraphe);

        var opt1 = document.createElement("input");
        opt1.setAttribute('type', 'checkbox');
        opt1.setAttribute('name', 'r');
        opt1.setAttribute('value', 'OUI');
        var label1 = document.createElement("label");
        label1.textContent = "OUI";

        var opt2 = document.createElement("input");
        opt2.setAttribute('type', 'checkbox');
        opt2.setAttribute('name', 'r');
        opt2.setAttribute('value', 'NON');
        var label2 = document.createElement("label");
        label2.textContent = "NON";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(opt1);
        form.appendChild(label1);
        form.appendChild(opt2);
        form.appendChild(label2); 
    };

    var mauTt = document.querySelector("#mauTete");
    mauTt.onclick = function () {
        changeBC();
        quest = 3; 
        num.textContent = (quest+"/6");
        question = document.getElementById("question");
        question.textContent = " ";
        var texte = document.createTextNode(mt[1]);
        question.appendChild(texte);

        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(mt[2]);
        para.appendChild(paragraphe);

        var opt = document.createElement("input");
        opt.setAttribute('type', 'checkbox');
        opt.setAttribute('name', 'r');
        opt.setAttribute('value', 'OUI');
        var label1 = document.createElement("label");
        label1.textContent = "OUI";


        var opt0 = document.createElement("input");
        opt0.setAttribute('type', 'checkbox');
        opt0.setAttribute('name', 'r');
        opt0.setAttribute('value', 'NON');
        var label2 = document.createElement("label");
        label2.textContent = "NON";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(opt);
        form.appendChild(label1);
        form.appendChild(opt0);
        form.appendChild(label2);
    };
    var difr = document.querySelector("#difResp");
    difr.onclick = function () {
        changeBC();
        quest = 4; 
        num.textContent = (quest+"/6");
        question = document.getElementById("question");
        question.textContent = " ";
        var texte = document.createTextNode(dr[1]);
        question.appendChild(texte);

        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(dr[2]);
        para.appendChild(paragraphe);

        var opt = document.createElement("input");
        opt.setAttribute('type', 'checkbox');
        opt.setAttribute('name', 'r');
        opt.setAttribute('value', 'OUI');
        var label1 = document.createElement("label");
        label1.textContent = "OUI";

        var opt0 = document.createElement("input");
        opt0.setAttribute('type', 'checkbox');
        opt0.setAttribute('name', 'r');
        opt0.setAttribute('value', 'NON');
        var label2 = document.createElement("label");
        label2.textContent = "NON";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(opt);
        form.appendChild(label1);
        form.appendChild(opt0);
        form.appendChild(label2); 
    };
    var malgorge = document.querySelector("#malg");
    malgorge.onclick = function () {
        changeBC();
        quest = 5; 
        num.textContent = (quest+"/6");
        question = document.getElementById("question");
        question.textContent = " ";
        var texte = document.createTextNode(mg[1]);
        question.appendChild(texte);

        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(mg[2]);
        para.appendChild(paragraphe);

        var opt = document.createElement("input");
        opt.setAttribute('type', 'checkbox');
        opt.setAttribute('name', 'r');
        opt.setAttribute('value', 'OUI');
        var label1 = document.createElement("label");
        label1.textContent = "OUI";

        var opt0 = document.createElement("input");
        opt0.setAttribute('type', 'checkbox');
        opt0.setAttribute('name', 'r');
        opt0.setAttribute('value', 'NON');
        var label2 = document.createElement("label");
        label2.textContent = "NON";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(opt);
        form.appendChild(label1);
        form.appendChild(opt0);
        form.appendChild(label2); 
    };

    var diarrhe = document.querySelector("#diarr");
    diarrhe.onclick = function () {
        changeBC();
        quest = 6; 
        num.textContent = (quest+"/6");
        question = document.getElementById("question");
        question.textContent = " ";
        var texte = document.createTextNode(diar[1]);
        question.appendChild(texte);

        para = document.getElementById("para");
        para.textContent = " ";
        var paragraphe = document.createTextNode(diar[2]);
        para.appendChild(paragraphe);

        var opt = document.createElement("input");
        opt.setAttribute('type', 'checkbox');
        opt.setAttribute('name', 'r');
        opt.setAttribute('value', 'OUI');
        var label1 = document.createElement("label");
        label1.textContent = "OUI";

        var opt0 = document.createElement("input");
        opt0.setAttribute('type', 'checkbox');
        opt0.setAttribute('name', 'r');
        opt0.setAttribute('value', 'NON');
        var label2 = document.createElement("label");
        label2.textContent = "NON";

        form = document.getElementById("form");
        form.textContent = " ";
        form.appendChild(opt);
        form.appendChild(label1);
        form.appendChild(opt0);
        form.appendChild(label2); 
    };
    const suivant = document.getElementById("suiv");
    suivant.addEventListener('click',() => {
        changeBC();
        quest = quest >= 6 ? 1 : quest + 1; //equation ternaire
        num.textContent = (quest+"/6");
      
    });

    function changeBC() {
        document.getElementById('temperature').style.color = quest == 1 ? "blue" : ""
        document.getElementById('fievre').style.color = quest == 2 ? "blue" : ""
        document.getElementById('mauTete').style.color = quest == 3 ? "blue" : ""
        document.getElementById('difResp').style.color = quest == 4 ? "blue" : ""
        document.getElementById('malg').style.color = quest == 5 ? "blue" : ""
        document.getElementById('diarr').style.color = quest == 6 ? "blue" : ""
    }

};



