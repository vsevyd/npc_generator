'use strict'
// загрузка в локальное хранилище значений языка интерфейса и типа персонажа по умолканию, во избежании неопределённостей
localStorage.setItem('lS_Lang', 'eng');
// объявление переменных
const CHAR = HVITTI; // для унификаци  кода присваеваем константе ЧАР текучего Персонажа !!!
const FIRST_NAME = CHAR.charFirstName;
const SECOND_NAME = CHAR.charSecondtName;
const CONCEPT = CHAR.charConcept;
const DESCRIPT = CHAR.charDescr;
const INI_D6 = CHAR.initD6;
const INI_MD = CHAR.initMod;
let initiative = null;
const MAX_AP = CHAR.maxActionPoints;
let round_AP = MAX_AP;
// считывание из БД данных персонажа и заполнение страницы Листа Персонажа по загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pageTitle1').textContent = FIRST_NAME;
    document.getElementById('pageTitleSd').textContent = SECOND_NAME;
    document.getElementById('pageTitl2').textContent = CONCEPT;
    document.getElementById('pageTitl2D').textContent = DESCRIPT;
    document.getElementById('initiativeRoll').textContent = `${INI_D6}d6+${INI_MD}=`;
    document.getElementById('initiativeResult').value = initiative;
    document.getElementById('actionPointsResult').value = round_AP;
    // write 1st attack block
    document.getElementById('aIt_1').textContent = CHAR.attack[0].shortName;
    document.getElementById('attackItem_1').textContent = CHAR.attack[0].longName;
    document.getElementById('actionPoints_1').textContent = CHAR.attack[0].actionPoints;
    document.getElementById('attack_1Roll').textContent = `${CHAR.attack[0].attackDice}d6+${CHAR.attack[0].attackMod}=`;
    document.getElementById('damage_1Roll').textContent = `${CHAR.attack[0].damageDice}d6+${CHAR.attack[0].damageMod}=`;
    document.getElementById('criticalChance_1').textContent = CHAR.attack[0].criticalChance;
    document.getElementById('criticalDamage_1').textContent = CHAR.attack[0].criticalDamage;
    document.getElementById('armorPiercing_1').textContent = CHAR.attack[0].armorPiercing;
    document.getElementById('knockingDown_1').textContent = CHAR.attack[0].knockingDown;
    // create 2nd attack Block
    let attBlockNumber = 3;
    createBlock(attBlockNumber);
    function createBlock(numb) {
        let attackBlock = document.createElement('div');
        attackBlock.setAttribute('id', `attackBlock_${numb}`);
        attackBlock.className = "block-button";
        attackList.append(attackBlock); // вставить "attackBlock_2" в конец <'attackList'>
        attackBlock.insertAdjacentHTML('beforebegin', `<!-- Attack Block #${numb} -->`);
    }

    let attackBlock_2 = document.createElement('div');
    attackBlock_2.setAttribute('id', `attackBlock_2`);
    attackBlock_2.className = "block-button";
    attackList.append(attackBlock_2); // вставить "attackBlock_2" в конец <'attackList'>
    attackBlock_2.insertAdjacentHTML('beforebegin', `<!-- Attack Block #2 -->`);
        //
        let attack_2Title = document.createElement('div');
        // attack_2Title.setAttribute('id', `attack_2Title`);
        attack_2Title.className = "darkcell";
        attackBlock_2.prepend(attack_2Title); // вставить "attack_2Title" в начало <`attackBlock_2`>
            //
            let aIt_2 = document.createElement('h5');
            aIt_2.setAttribute('id', `aIt_2`);
            aIt_2.className = "narrow-screen";
            aIt_2.textContent = CHAR.attack[1].shortName;
            attack_2Title.prepend(aIt_2);
            //
            let attackItem_2 = document.createElement('h5');
            attackItem_2.setAttribute('id', `attackItem_2`);
            attackItem_2.className = "wide-screen";
            attackItem_2.textContent = CHAR.attack[1].longName;
            attack_2Title.append(attackItem_2);
        //
        let attack_2Chars = document.createElement('div');
        // attack_2Chars.setAttribute('id', `attack_2Chars`);
        attack_2Chars.className = "row lightcell no-margin";
        attackBlock_2.append(attack_2Chars); // вставить "attack_2Chars" в конец <`attackBlock_2`>
            //
            let aP_2Ttl = document.createElement('div');
            aP_2Ttl.className = "col-7 no-padding";
            attack_2Chars.prepend(aP_2Ttl);
            let aP_2ValFld = document.createElement('div');
            aP_2ValFld.className = "col-3 no-padding";
            attack_2Chars.append(aP_2ValFld);
                //
                let l_AP_a1 = document.createElement('h6');
                l_AP_a1.setAttribute('id', `l_AP_a1`);
                l_AP_a1.className = "narrow-screen";
                l_AP_a1.textContent = 'ОД:';
                aP_2Ttl.prepend(l_AP_a1);
                let l_ActionPoints_a2 = document.createElement('h6');
                l_ActionPoints_a2.setAttribute('id', `l_ActionPoints_a2`);
                l_ActionPoints_a2.className = "wide-screen";
                l_ActionPoints_a2.textContent = 'Очков Действий:';
                aP_2Ttl.append(l_ActionPoints_a2);
                let actionPoints_2 = document.createElement('p');
                actionPoints_2.setAttribute('id', `actionPoints_2`);
                actionPoints_2.className = "ah6";
                actionPoints_2.textContent = CHAR.attack[1].actionPoints;
                aP_2ValFld.append(actionPoints_2);
            //
            let att_2Ttl = document.createElement('div');
            att_2Ttl.className = "col-6 col-lg-7 no-padding";
            attack_2Chars.append(att_2Ttl);
            let att_2Rll = document.createElement('div');
            att_2Rll.className = "col-4 col-lg-3 no-padding";
            attack_2Chars.append(att_2Rll);
            let att_2Res = document.createElement('div');
            att_2Res.className = "col-2 align-self-end no-padding";
            attack_2Chars.append(att_2Res);
                //
                let l_Attack_2 = document.createElement('h6');
                l_Attack_2.setAttribute('id', `l_Attack_2`);
                l_Attack_2.className = "";
                l_Attack_2.textContent = 'Атака:';
                att_2Ttl.prepend(l_Attack_2);
                let attack_2Roll = document.createElement('p');
                attack_2Roll.setAttribute('id', `attack_2Roll`);
                attack_2Roll.className = "ah6";
                attack_2Roll.textContent = `${CHAR.attack[1].attackDice}d6+${CHAR.attack[1].attackMod}=`;
                att_2Rll.append(attack_2Roll);
                let attack_2Result = document.createElement('input');
                attack_2Result.setAttribute('id', `attack_2Result`);
                attack_2Result.className = "input-light out-h6";
                attack_2Result.type = "text";
                attack_2Result.size = "2";
                attack_2Result.readonly = "readonly";
                attack_2Result.placeholder = "AT";
                att_2Res.append(attack_2Result);
            //
            let dmg_2Ttl = document.createElement('div');
            dmg_2Ttl.className = "col-6 col-lg-7 no-padding";
            attack_2Chars.append(dmg_2Ttl);
            let dmg_2Rll = document.createElement('div');
            dmg_2Rll.className = "col-4 col-lg-3 no-padding";
            attack_2Chars.append(dmg_2Rll);
            let dmg_2Res = document.createElement('div');
            dmg_2Res.className = "col-2 align-self-end no-padding";
            attack_2Chars.append(dmg_2Res);
                //
                let l_Damage_2 = document.createElement('h6');
                l_Damage_2.setAttribute('id', `l_Damage_2`);
                l_Damage_2.className = "";
                l_Damage_2.textContent = 'Урон:';
                dmg_2Ttl.prepend(l_Damage_2);
                let damage_2Roll = document.createElement('p');
                damage_2Roll.setAttribute('id', `damage_2Roll`);
                damage_2Roll.className = "ah6";
                damage_2Roll.textContent = `${CHAR.attack[1].damageDice}d6+${CHAR.attack[1].damageMod}=`;
                dmg_2Rll.append(damage_2Roll);
                let damage_2Result = document.createElement('input');
                damage_2Result.setAttribute('id', `damage_2Result`);
                damage_2Result.className = "input-light out-h6";
                damage_2Result.type = "text";
                damage_2Result.size = "2";
                damage_2Result.readonly = "readonly";
                damage_2Result.placeholder = "DM";
                dmg_2Res.append(damage_2Result);
            //
            let crch_2Ttl = document.createElement('div');
            crch_2Ttl.className = "col-2 col-lg-5 no-padding";
            attack_2Chars.append(crch_2Ttl);
            let crch_2Val = document.createElement('div');
            crch_2Val.className = "col-1 col-lg-1 no-padding";
            attack_2Chars.append(crch_2Val);
            let crdm_2Ttl = document.createElement('div');
            crdm_2Ttl.className = "col-2 col-lg-5 no-padding";
            attack_2Chars.append(crdm_2Ttl);
            let crdm_2Val = document.createElement('div');
            crdm_2Val.className = "col-1 col-lg-1 no-padding";
            attack_2Chars.append(crdm_2Val);
                //
                let l_CC_2 = document.createElement('h6');
                l_CC_2.setAttribute('id', `l_CC_2`);
                l_CC_2.className = "narrow-screen";
                l_CC_2.textContent = 'ШК:';
                crch_2Ttl.prepend(l_CC_2);
                let l_CriticalChance_2 = document.createElement('h6');
                l_CriticalChance_2.setAttribute('id', `l_CriticalChance_2`);
                l_CriticalChance_2.className = "wide-screen";
                l_CriticalChance_2.textContent = 'Шанс Крита:';
                crch_2Ttl.append(l_CriticalChance_2);
                let criticalChance_2 = document.createElement('p');
                criticalChance_2.setAttribute('id', `criticalChance_2`);
                criticalChance_2.className = "ah6";
                criticalChance_2.textContent = CHAR.attack[1].criticalChance;
                crch_2Val.append(criticalChance_2);
                //
                let l_CD_2 = document.createElement('h6');
                l_CD_2.setAttribute('id', `l_CD_2`);
                l_CD_2.className = "narrow-screen";
                l_CD_2.textContent = 'КУ:';
                crdm_2Ttl.prepend(l_CD_2);
                let l_CriticalDamage_2 = document.createElement('h6');
                l_CriticalDamage_2.setAttribute('id', `l_CriticalDamage_2`);
                l_CriticalDamage_2.className = "wide-screen";
                l_CriticalDamage_2.textContent = 'Крит Урон:';
                crdm_2Ttl.append(l_CriticalDamage_2);
                let criticalDamage_2 = document.createElement('p');
                criticalDamage_2.setAttribute('id', `criticalDamage_2`);
                criticalDamage_2.className = "ah6";
                criticalDamage_2.textContent = CHAR.attack[1].criticalDamage;
                crdm_2Val.append(criticalDamage_2);
            //
            let arpr_2Ttl = document.createElement('div');
            arpr_2Ttl.className = "col-2 col-lg-5 no-padding";
            attack_2Chars.append(arpr_2Ttl);
            let arpr_2Val = document.createElement('div');
            arpr_2Val.className = "col-1 col-lg-1 no-padding";
            attack_2Chars.append(arpr_2Val);
            let kndn_2Ttl = document.createElement('div');
            kndn_2Ttl.className = "col-2 col-lg-5 no-padding";
            attack_2Chars.append(kndn_2Ttl);
            let kndn_2Val = document.createElement('div');
            kndn_2Val.className = "col-1 col-lg-1 no-padding";
            attack_2Chars.append(kndn_2Val);
                //
                let l_APr_1 = document.createElement('h6');
                l_APr_1.setAttribute('id', `l_APr_1`);
                l_APr_1.className = "narrow-screen";
                l_APr_1.textContent = 'ББ:';
                arpr_2Ttl.prepend(l_APr_1);
                let l_ArmorPiercing_2 = document.createElement('h6');
                l_ArmorPiercing_2.setAttribute('id', `l_ArmorPiercing_2`);
                l_ArmorPiercing_2.className = "wide-screen";
                l_ArmorPiercing_2.textContent = 'Броне-Бойн.:';
                arpr_2Ttl.append(l_ArmorPiercing_2);
                let armorPiercing_2 = document.createElement('p');
                armorPiercing_2.setAttribute('id', `armorPiercing_2`);
                armorPiercing_2.className = "ah6";
                armorPiercing_2.textContent = CHAR.attack[1].armorPiercing;
                arpr_2Val.append(armorPiercing_2);
                //
                let l_KD_2 = document.createElement('h6');
                l_KD_2.setAttribute('id', `l_KD_2`);
                l_KD_2.className = "narrow-screen";
                l_KD_2.textContent = 'Сб:';
                kndn_2Ttl.prepend(l_KD_2);
                let l_KnockingDown_2 = document.createElement('h6');
                l_KnockingDown_2.setAttribute('id', `l_KnockingDown_2`);
                l_KnockingDown_2.className = "wide-screen";
                l_KnockingDown_2.textContent = 'Сбивание:';
                kndn_2Ttl.append(l_KnockingDown_2);
                let knockingDown_2 = document.createElement('p');
                knockingDown_2.setAttribute('id', `knockingDown_2`);
                knockingDown_2.className = "ah6";
                knockingDown_2.textContent = CHAR.attack[1].knockingDown;
                kndn_2Val.append(knockingDown_2);
    // document.body.insertAdjacentHTML('beforeend', `<script type="text/javascript">
    //     console.log(!!! TEST !!!);
    //     document.getElementById('attackBlock_2').addEventListener("click", () => {
    //          if (round_AP > 0) {
    //              let attack = diceRoller(CHAR.attack[1].attackDice, 6, HVITTI.attack[1].attackMod);
    //              document.getElementById('attack_2Result').value = attack;
    //              let damage = diceRoller(CHAR.attack[1].damageDice, 6, HVITTI.attack[1].damageMod);
    //              document.getElementById('damage_2Result').value = damage;
    //              round_AP = round_AP - CHAR.attack[1].actionPoints;
    //              document.getElementById('actionPointsResult').value = round_AP;
    //              if (round_AP <= 0) {
    //                  document.getElementById('attackBlock_2').className = "";
    //              }
    //          }
    //     });
    // </script>`);
// });
// генерация Инициативы по нажатию поля Инициативы
const InitiativeLog = []; // Log
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

// добавляем реакцию по клику на Oruzhii
// document.getElementById('attackBlock_1').addEventListener("click", () => {
//     if (round_AP > 0) {
//         let attack = diceRoller(CHAR.attack[0].attackDice, 6, HVITTI.attack[0].attackMod);
//         document.getElementById('attack_1Result').value = attack;
//         let damage = diceRoller(CHAR.attack[0].damageDice, 6, HVITTI.attack[0].damageMod);
//         document.getElementById('damage_1Result').value = damage;
//         round_AP = round_AP - CHAR.attack[0].actionPoints;
//         document.getElementById('actionPointsResult').value = round_AP;
//         if (round_AP <= 0) {
//             document.getElementById('attackBlock_1').className = ""; //$('#weaponBlock_1').removeClass('block-button');
//         }
//     }
// })
document.getElementById('end_round').addEventListener("click", () => {
    // document.getElementById(`attack_${i}Result`).value = null;
    // document.getElementById(`damage_${i}Result`).value = null;
    round_AP = (round_AP > 0) ? MAX_AP : round_AP + MAX_AP;
    document.getElementById('actionPointsResult').value = round_AP;
    for (let i = 0; i < attackList.getElementsByTagName('input').length; i++) {
        attackList.getElementsByTagName('input')[i].value = null;
    }
    for (let i = 0; i < attackList.children.length; i++) {
        attackList.children[i].className = "block-button";
    }
    //document.getElementById('attackBlock_1').className = "block-button"; //$('#attackBlock_1').addClass('block-button');
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
// функция : выбор из таблицы значений с процентами //
function selectFromTable(OriginsTable = ORIGINS.England) {
    let randomValue = getRandomPercentage();
    let range = 0;
    // let f_Value = '';
    ORIGINS.England.forEach(function(item) {
        range = range + item.percent;
        item.range = range;
    });
    let f_Value = ORIGINS.England.find(item => randomValue <= item.range);
    return f_Value.value
}

  // функция : выбор из таблицы значений с процентами в диапазоне //
  function selectFromTableRng(tab_vals, tab_pers, rng_min, rng_max) {
    let randomValue = rng_min + getRandomInt(100 - (rng_min + (100 - rng_max)));
    let i = 0;
    let percents = tab_pers[i];
    let f_Value = '';
    do {
      if (randomValue <= percents) {
        f_Value = tab_vals[i];
        break;
      }
      i++;
      percents = percents + tab_pers[i];
    } while (i < tab_vals.length);
    return f_Value;
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
