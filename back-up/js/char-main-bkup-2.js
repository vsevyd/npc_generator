'use strict'
// объявление переменных
const SHORT_NAME = CHAR.charShortName;
const LONG_NAME =  CHAR.charLongName;
const CONCEPT = CHAR.charShortConcept;
const DESCRIPT = CHAR.charLongDescr;
const INI_D6 = CHAR.initD6;
const INI_MD = CHAR.initMod;
let initiative = null;
const MAX_AP = CHAR.maxActionPoints;
let round_AP = MAX_AP;
// считывание из БД данных персонажа и заполнение страницы Листа Персонажа по загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
    // document.BODY.background.image = '';
    let backgroundContr = document.createElement('div');
        backgroundContr.className = "background-container";
    document.body.prepend(backgroundContr); // вставить "backgroundContr" в начало <BODY>
    let backgroundImage = document.createElement('img');
        backgroundImage.setAttribute('src', `${CHAR.bkgImage}`);
        backgroundImage.className = "background-image";
    backgroundContr.prepend(backgroundImage); // вставить "backgroundImage" в начало <backgroundContr>
    document.getElementById('site-title').textContent = SHORT_NAME;
    document.getElementById('pageTitleShort').textContent = SHORT_NAME;
    document.getElementById('pageTitleLong').textContent = LONG_NAME;
    document.getElementById('pageTitleConcept').textContent = CONCEPT;
    document.getElementById('pageTitleDescrip').textContent = DESCRIPT;
    document.getElementById('initiativeRoll').textContent = `${INI_D6}d6+${INI_MD}=`;
    document.getElementById('initiativeResult').value = initiative;
    document.getElementById('actionPointsResult').value = round_AP;
    // write 1st attack block
    // document.getElementById('aIt_1').textContent = CHAR.attack[0].shortName;
    // document.getElementById('attackItem_1').textContent = CHAR.attack[0].longName;
    // document.getElementById('actionPoints_1').textContent = CHAR.attack[0].actionPoints;
    // document.getElementById('attack_1Roll').textContent = `${CHAR.attack[0].attackDice}d6+${CHAR.attack[0].attackMod}=`;
    // document.getElementById('damage_1Roll').textContent = `${CHAR.attack[0].damageDice}d6+${CHAR.attack[0].damageMod}=`;
    // document.getElementById('criticalChance_1').textContent = CHAR.attack[0].criticalChance;
    // document.getElementById('criticalDamage_1').textContent = CHAR.attack[0].criticalDamage;
    // document.getElementById('armorPiercing_1').textContent = CHAR.attack[0].armorPiercing;
    // document.getElementById('knockingDown_1').textContent = CHAR.attack[0].knockingDown;
    // write 1st Defence Block
    // document.getElementById('l_Parry').textContent = CHAR.defence[0].shortName;
    // document.getElementById('l_Parrying').textContent = CHAR.defence[0].longName;
    // document.getElementById('actionPoints-d1').textContent = CHAR.defence[0].actionPoints;
    // document.getElementById('ParryingSkill').textContent = CHAR.defence[0].parry;
    // document.getElementById('parryingAmount').value = null;
    // create Attack BlockS by function from aRRay
    CHAR.attack.forEach( function createAttackBlock(item, index, arr) {
        let attackBlock = document.createElement('div');
        attackBlock.setAttribute('id', `attackBlock_${index+1}`);
        attackBlock.className = "block-button";
        attackList.append(attackBlock); // вставить "attackBlock_#" в конец <'attackList'>
        attackBlock.insertAdjacentHTML('beforebegin', `<!--Attack Block #${index+1}-->`);
        //
        let attack_Title = document.createElement('div');
        // attack_Title.setAttribute('id', `attack_2Title`);
        attack_Title.className = "darkcell";
        attackBlock.prepend(attack_Title); // вставить "attack_Title" в начало <`attackBlock_#`>
            //
            let aIt = document.createElement('h5');
            aIt.setAttribute('id', `aIt_${index+1}`);
            aIt.className = "narrow-screen";
            aIt.textContent = arr[index].shortName;
            attack_Title.prepend(aIt);
            //
            let attackItem = document.createElement('h5');
            attackItem.setAttribute('id', `attackItem_${index+1}`);
            attackItem.className = "wide-screen";
            attackItem.textContent = arr[index].longName;
            attack_Title.append(attackItem);
        //
        let attack_Chars = document.createElement('div');
        // attack_Chars.setAttribute('id', `attack_Chars`);
        attack_Chars.className = "row lightcell no-margin";
        attackBlock.append(attack_Chars); // вставить "attack_Chars" в конец <`attackBlock_#`>
            //
            let aP_Ttl = document.createElement('div');
            aP_Ttl.className = "col-7 no-padding";
            attack_Chars.prepend(aP_Ttl);
            let aP_ValFld = document.createElement('div');
            aP_ValFld.className = "col-3 no-padding";
            attack_Chars.append(aP_ValFld);
                //
                let l_AP_a = document.createElement('h6');
                l_AP_a.setAttribute('id', `l_AP_a${index+1}`);
                l_AP_a.className = "narrow-screen";
                l_AP_a.textContent = 'ОД:';
                aP_Ttl.prepend(l_AP_a);
                let l_ActionPoints_a = document.createElement('h6');
                l_ActionPoints_a.setAttribute('id', `l_ActionPoints_a${index+1}`);
                l_ActionPoints_a.className = "wide-screen";
                l_ActionPoints_a.textContent = 'Очков Действий:';
                aP_Ttl.append(l_ActionPoints_a);
                let actionPoints = document.createElement('p');
                actionPoints.setAttribute('id', `actionPoints_a${index+1}`);
                actionPoints.className = "ah6";
                actionPoints.textContent = (arr[index].meel) ? arr[index].actionPoints : arr[index].actionPoints + arr[index].reload;
                aP_ValFld.append(actionPoints);
            //
            let att_Ttl = document.createElement('div');
            att_Ttl.className = "col-6 col-lg-7 no-padding";
            attack_Chars.append(att_Ttl);
            let att_Rll = document.createElement('div');
            att_Rll.className = "col-4 col-lg-3 no-padding";
            attack_Chars.append(att_Rll);
            let att_Res = document.createElement('div');
            att_Res.className = "col-2 align-self-end no-padding";
            attack_Chars.append(att_Res);
                //
                let l_Attack = document.createElement('h6');
                l_Attack.setAttribute('id', `l_Attack_${index+1}`);
                l_Attack.className = "";
                l_Attack.textContent = 'Атака:';
                att_Ttl.prepend(l_Attack);
                let attack_Roll = document.createElement('p');
                attack_Roll.setAttribute('id', `attack_${index+1}Roll`);
                attack_Roll.className = "ah6";
                attack_Roll.textContent = `${arr[index].attackDice}d6+${arr[index].attackMod}=`;
                att_Rll.append(attack_Roll);
                let attack_Result = document.createElement('input');
                attack_Result.setAttribute('id', `attack_${index+1}Result`);
                attack_Result.className = "input-light out-h6";
                attack_Result.type = "text";
                attack_Result.size = "2";
                attack_Result.readonly = "readonly";
                attack_Result.placeholder = "AT";
                att_Res.append(attack_Result);
            //
            let dmg_Ttl = document.createElement('div');
            dmg_Ttl.className = "col-6 col-lg-7 no-padding";
            attack_Chars.append(dmg_Ttl);
            let dmg_Rll = document.createElement('div');
            dmg_Rll.className = "col-4 col-lg-3 no-padding";
            attack_Chars.append(dmg_Rll);
            let dmg_Res = document.createElement('div');
            dmg_Res.className = "col-2 align-self-end no-padding";
            attack_Chars.append(dmg_Res);
                //
                let l_Damage = document.createElement('h6');
                l_Damage.setAttribute('id', `l_Damage_${index+1}`);
                l_Damage.className = "";
                l_Damage.textContent = 'Урон:';
                dmg_Ttl.prepend(l_Damage);
                let damage_Roll = document.createElement('p');
                damage_Roll.setAttribute('id', `damage_${index+1}Roll`);
                damage_Roll.className = "ah6";
                damage_Roll.textContent = `${arr[index].damageDice}d6+${arr[index].damageMod}=`;
                dmg_Rll.append(damage_Roll);
                let damage_Result = document.createElement('input');
                damage_Result.setAttribute('id', `damage_${index+1}Result`);
                damage_Result.className = "input-light out-h6";
                damage_Result.type = "text";
                damage_Result.size = "2";
                damage_Result.readonly = "readonly";
                damage_Result.placeholder = "DM";
                dmg_Res.append(damage_Result);
            //
            let crch_Ttl = document.createElement('div');
            crch_Ttl.className = "col-2 col-lg-5 no-padding";
            attack_Chars.append(crch_Ttl);
            let crch_Val = document.createElement('div');
            crch_Val.className = "col-1 no-padding";
            attack_Chars.append(crch_Val);
            let crdm_Ttl = document.createElement('div');
            crdm_Ttl.className = "col-2 col-lg-5 no-padding";
            attack_Chars.append(crdm_Ttl);
            let crdm_Val = document.createElement('div');
            crdm_Val.className = "col-1 no-padding";
            attack_Chars.append(crdm_Val);
                //
                let l_CC = document.createElement('h6');
                l_CC.setAttribute('id', `l_CC_${index+1}`);
                l_CC.className = "narrow-screen";
                l_CC.textContent = 'ШК:';
                crch_Ttl.prepend(l_CC);
                let l_CriticalChance = document.createElement('h6');
                l_CriticalChance.setAttribute('id', `l_CriticalChance_${index+1}`);
                l_CriticalChance.className = "wide-screen";
                l_CriticalChance.textContent = 'Шанс Крита:';
                crch_Ttl.append(l_CriticalChance);
                let criticalChance = document.createElement('p');
                criticalChance.setAttribute('id', `criticalChance_${index+1}`);
                criticalChance.className = "ah6";
                criticalChance.textContent = arr[index].criticalChance;
                crch_Val.append(criticalChance);
                //
                let l_CD = document.createElement('h6');
                l_CD.setAttribute('id', `l_CD_${index+1}`);
                l_CD.className = "narrow-screen";
                l_CD.textContent = 'КУ:';
                crdm_Ttl.prepend(l_CD);
                let l_CriticalDamage = document.createElement('h6');
                l_CriticalDamage.setAttribute('id', `l_CriticalDamage_${index+1}`);
                l_CriticalDamage.className = "wide-screen";
                l_CriticalDamage.textContent = 'Крит Урон:';
                crdm_Ttl.append(l_CriticalDamage);
                let criticalDamage = document.createElement('p');
                criticalDamage.setAttribute('id', `criticalDamage_${index+1}`);
                criticalDamage.className = "ah6";
                criticalDamage.textContent = arr[index].criticalDamage;
                crdm_Val.append(criticalDamage);
            //
            let arpr_Ttl = document.createElement('div');
            arpr_Ttl.className = "col-2 col-lg-5 no-padding";
            attack_Chars.append(arpr_Ttl);
            let arpr_Val = document.createElement('div');
            arpr_Val.className = "col-1 no-padding";
            attack_Chars.append(arpr_Val);
            let kndn_Ttl = document.createElement('div');
            kndn_Ttl.className = "col-2 col-lg-5 no-padding";
            attack_Chars.append(kndn_Ttl);
            let kndn_Val = document.createElement('div');
            kndn_Val.className = "col-1 no-padding";
            attack_Chars.append(kndn_Val);
                //
                let l_APr = document.createElement('h6');
                l_APr.setAttribute('id', `l_APr_${index+1}`);
                l_APr.className = "narrow-screen";
                l_APr.textContent = 'ББ:';
                arpr_Ttl.prepend(l_APr);
                let l_ArmorPiercing = document.createElement('h6');
                l_ArmorPiercing.setAttribute('id', `l_ArmorPiercing_${index+1}`);
                l_ArmorPiercing.className = "wide-screen";
                l_ArmorPiercing.textContent = 'Броне-Бойн.:';
                arpr_Ttl.append(l_ArmorPiercing);
                let armorPiercing = document.createElement('p');
                armorPiercing.setAttribute('id', `armorPiercing_${index+1}`);
                armorPiercing.className = "ah6";
                armorPiercing.textContent = arr[index].armorPiercing;
                arpr_Val.append(armorPiercing);
                //
                let l_KD = document.createElement('h6');
                l_KD.setAttribute('id', `l_KD_${index+1}`);
                l_KD.className = "narrow-screen";
                l_KD.textContent = 'Сб:';
                kndn_Ttl.prepend(l_KD);
                let l_KnockingDown = document.createElement('h6');
                l_KnockingDown.setAttribute('id', `l_KnockingDown_${index+1}`);
                l_KnockingDown.className = "wide-screen";
                l_KnockingDown.textContent = 'Сбивание:';
                kndn_Ttl.append(l_KnockingDown);
                let knockingDown = document.createElement('p');
                knockingDown.setAttribute('id', `knockingDown_${index+1}`);
                knockingDown.className = "ah6";
                knockingDown.textContent = arr[index].knockingDown;
                kndn_Val.append(knockingDown);
        // добавляем реакцию по клику на Oruzhii
        document.getElementById(`attackBlock_${index+1}`).addEventListener("click", () => {
            if (round_AP > 0) {
                let attack = diceRoller(arr[index].attackDice, 6, arr[index].attackMod);
                document.getElementById(`attack_${index+1}Result`).value = attack;
                let damage = diceRoller(arr[index].damageDice, 6, arr[index].damageMod);
                document.getElementById(`damage_${index+1}Result`).value = damage;
                let actPots = (arr[index].meel) ? arr[index].actionPoints : arr[index].actionPoints + arr[index].reload;
                round_AP = round_AP - actPots;
                document.getElementById('actionPointsResult').value = round_AP;
                let knockingDown = damage + arr[index].knockingDown;
                document.getElementById(`knockingDown_${index+1}`).textContent = knockingDown;
                if (round_AP <= 0) {
                    for (let i = 0; i < attackList.children.length; i++) {
                        attackList.children[i].className = "";
                    }
                    for (let i = 0; i < defenceList.children.length; i++) {
                        defenceList.children[i].className = "";
                    }
                }
            }
        });
    });
    // create Defence BlockS by function from aRRay
    CHAR.defence.forEach( function createDefenceBlock(item, index, arr) {
        let defenceBlock = document.createElement('div');
        defenceBlock.setAttribute('id', `defenceBlock_${index+1}`);
        defenceBlock.className = "block-button";
        defenceList.append(defenceBlock); // вставить "defenceBlock_#" в конец <'defenceList'>
        defenceBlock.insertAdjacentHTML('beforebegin', `<!--Defence Block #${index+1}-->`);
        //
        let defence_Title = document.createElement('div');
        defence_Title.className = "darkcell";
        defenceBlock.prepend(defence_Title); // вставить "defence_Title" в начало <`defenceBlock_#`>
            //
            let dShTt = document.createElement('h5');
            dShTt.setAttribute('id', `dShTt_${index+1}`);
            dShTt.className = "narrow-screen";
            dShTt.textContent = arr[index].shortName;
            defence_Title.prepend(dShTt);
            //
            let defenceTitle = document.createElement('h5');
            defenceTitle.setAttribute('id', `defenceTitle_${index+1}`);
            defenceTitle.className = "wide-screen";
            defenceTitle.textContent = arr[index].longName;
            defence_Title.append(defenceTitle);
        //
        let defence_Chars = document.createElement('div');
        defence_Chars.className = "row lightcell justify-content-end no-margin";
        defenceBlock.append(defence_Chars); // вставить "defence_Chars" в конец <`defencekBlock_#`>
            //
            let dP_Ttl = document.createElement('div');
            dP_Ttl.className = "col-9 no-padding";
            defence_Chars.prepend(dP_Ttl);
            let dP_ValFld = document.createElement('div');
            dP_ValFld.className = "col-3 no-padding";
            defence_Chars.append(dP_ValFld);
                //
                let l_AP_d = document.createElement('h6');
                l_AP_d.setAttribute('id', `l_AP_d${index+1}`);
                l_AP_d.className = "narrow-screen";
                l_AP_d.textContent = 'ОД:';
                dP_Ttl.prepend(l_AP_d);
                let l_ActionPoints_d = document.createElement('h6');
                l_ActionPoints_d.setAttribute('id', `l_ActionPoints_d${index+1}`);
                l_ActionPoints_d.className = "wide-screen";
                l_ActionPoints_d.textContent = 'Очков Действий:';
                dP_Ttl.append(l_ActionPoints_d);
                let actionPoints = document.createElement('p');
                actionPoints.setAttribute('id', `actionPoints_d${index+1}`);
                actionPoints.className = "ah6";
                actionPoints.textContent = arr[index].actionPoints;
                dP_ValFld.append(actionPoints);
            //
            let def_Ttl = document.createElement('div');
            def_Ttl.className = "col-9 no-padding";
            defence_Chars.append(def_Ttl);
            let def_Bon = document.createElement('div');
            def_Bon.className = "col-3 no-padding";
            defence_Chars.append(def_Bon);
                //
                let l_Skill = document.createElement('h6');
                l_Skill.setAttribute('id', `l_defSkill_${index+1}`);
                l_Skill.className = "";
                l_Skill.textContent = arr[index].shortName;
                def_Ttl.prepend(l_Skill);
                let defSkillBon = document.createElement('p');
                defSkillBon.setAttribute('id', `defSkillBon_${index+1}`);
                defSkillBon.className = "ah6";
                defSkillBon.textContent = arr[index].parry;
                def_Bon.append(defSkillBon);
            //
            let dAm_Ttl = document.createElement('div');
            dAm_Ttl.className = "col-9 no-padding";
            defence_Chars.append(dAm_Ttl);
            let dAm_Amnt = document.createElement('div');
            dAm_Amnt.className = "col-3 no-padding";
            defence_Chars.append(dAm_Amnt);
                //
                let l_defAmount = document.createElement('h6');
                l_defAmount.setAttribute('id', `l_defAmount_${index+1}`);
                l_defAmount.className = "";
                l_defAmount.textContent = 'Количество:';
                dAm_Ttl.prepend(l_defAmount);
                let defenceAmount = document.createElement('input');
                defenceAmount.setAttribute('id', `defenceAmount_${index+1}`);
                defenceAmount.className = "input-light out-h61";
                defenceAmount.type = "text";
                defenceAmount.size = "1";
                defenceAmount.readonly = "readonly";
                defenceAmount.placeholder = "X";
                dAm_Amnt.append(defenceAmount);
        // добавляем реакцию по клику на 3ashite
        document.getElementById(`defenceBlock_${index+1}`).addEventListener("click", () => {
            let defAmount = Number(document.getElementById(`defenceAmount_${index+1}`).value);
            if (round_AP > 0) {
                defAmount = defAmount + 1;
                document.getElementById(`defenceAmount_${index+1}`).value = defAmount;
                round_AP = round_AP - arr[index].actionPoints;
                document.getElementById('actionPointsResult').value = round_AP;
                if (round_AP <= 0) {
                    for (let i = 0; i < attackList.children.length; i++) {
                        attackList.children[i].className = "";
                    }
                    for (let i = 0; i < defenceList.children.length; i++) {
                        defenceList.children[i].className = "";
                    }
                }
            }
        });
    });
const InitiativeLog = []; // Log
// генерация Инициативы по нажатию поля Инициативы
// добавляем реакцию по клику на полe Инициативы
document.getElementById('Initiative').addEventListener("click", () => {
    if (initiative === null) {
        initiative = diceRoller(INI_D6, 6, INI_MD);
        document.getElementById('initiativeResult').value = initiative;
        document.getElementById('Initiative').className = "darkcell"; //$('#Initiative').removeClass('initiative');
        InitiativeLog.push(initiative);
        console.log(InitiativeLog);
    }
})
//
document.getElementById('end_round').addEventListener("click", () => {
    round_AP = (round_AP > 0) ? MAX_AP : round_AP + MAX_AP;
    document.getElementById('actionPointsResult').value = round_AP;
    for (let i = 0; i < attackList.getElementsByTagName('input').length; i++) {
        attackList.getElementsByTagName('input')[i].value = null;
    }
    for (let i = 0; i < defenceList.getElementsByTagName('input').length; i++) {
        defenceList.getElementsByTagName('input')[i].value = null;
    }
    if (round_AP > 0) {
        for (let i = 0; i < attackList.children.length; i++) {
            attackList.children[i].className = "block-button";
        }
        for (let i = 0; i < defenceList.children.length; i++) {
            defenceList.children[i].className = "block-button";
        }
    }
})
document.getElementById('end_fight').addEventListener("click", () => {
    // document.getElementById('initiativeResult').value = initiative = null;
    document.getElementById('actionPointsResult').value = MAX_AP;
    // document.getElementById('attack_1Result').value = null;
    // document.getElementById('damage_1Result').value = null;
    for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
        document.getElementsByTagName('input')[i].value = null;
    }
    document.getElementById('Initiative').className = "darkcell initiative"; //$('#Initiative').addClass('initiative');
    for (let i = 0; i < attackList.children.length; i++) {
        attackList.children[i].className = "block-button";
    }
    for (let i = 0; i < defenceList.children.length; i++) {
        defenceList.children[i].className = "block-button";
    }
    // document.getElementById('attackBlock_1').className = "block-button"; //$('#weaponBlock_1').addClass('block-button');
})
//
function diceRoller(X, D, M) {
    let roll = M;
    for (let i = 1; i <= X; i++) {
        roll = roll + getRandomInt(D) + 1
    }
    return roll
}
// функция генерации (псевдо)случайного числа в диапазоне [0,max)
function getRandomInt(max) {
    return Math.floor( Math.random() * Math.floor(max) )
};
// функция генерации (псевдо)случайного % в диапазоне [0,100.0)
function getRandomPercentage() {
    return Math.random() * 100
};
// функция преобразования массива объектов в строку // Symbol.toPrimitive
function toString(object) {
    let result = '{';
    for (let key in object) { result = result + `${key}: ${object[key]}, ` };
    result = result + '}';
    return result
}
  // функция : вытор по ряду Фибоначчи //
  function selectFibonacci(table) {
    let max_index = table.length - 1;
    let Fibonacci_tbl = [ 1, 2, ] // задача ряда Фибонначчи требуемой длины
    let Fibonacci_sum = 3 ;
    for (let i=3; i<table.length; i++) {
      Fibonacci_tbl[i-1] = Fibonacci_tbl[i-3] + Fibonacci_tbl[i-2];
      Fibonacci_sum = Fibonacci_sum + Fibonacci_tbl[i-1];
      }

    let random = getRandomInt(Fibonacci_sum) + 1;
    let i = 0;
    let summ = Fibonacci_tbl[i];
    let f_Value = '';
    do {
      if (random <= summ) {
        f_Value = table[max_index - i];
        break;
      }
      i++;
      summ = summ + Fibonacci_tbl[i];
    } while (i < table.length);
    // alert (max_index - i);
    return f_Value;
  }
