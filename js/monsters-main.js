'use strict'
// document.getElementById('site-title').textContent = "NPC Chart : GM Page";
// объявление переменных
const MONS = [SKELETON, ZOMBIE, ];
const ENMS = [];
const INIT = [];
const RoAP = [];
const showAttack = [];
const showDefence = [];
const HPmax = [[],[],[],[],[],[],[],[],[],[],[],[],];
const HPcur = [[],[],[],[],[],[],[],[],[],[],[],[],];
const AttOpt = [[],[],[],[],[],[],[],[],[],[],[],[],];
const AttAP  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const ADice  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const AMod  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const DDice  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const DMod  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const Crit  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const CrDam  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const ArmPi  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const KnDwn  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const Ammo  = [[[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], [[],[],[],], ];
const Load  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const ReLd  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const Rang  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const DefAP  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const DeVal  = [[],[],[],[],[],[],[],[],[],[],[],[],];
const DeAmt  = [[],[],[],[],[],[],[],[],[],[],[],[],];
let N = -1; // ENeMieS Counter
// create monsters Selector
MONS.forEach( function addMonsterSelect(mon, m) { // option s
    let mon_option = document.createElement('option');
        mon_option.setAttribute('id', `mon_option_${m+1}`);
        mon_option.className = "oh2";
        mon_option.value = `${m+1}`;
        mon_option.textContent = mon.charShortName;
    sel_mob.append(mon_option);
});
option_0.selected = "selected";
// ADD monster div_column
document.getElementById('add_button').addEventListener( "click", () => {
    let mn = Number(document.getElementById(`sel_mob`).value)-1;
    if (mn > -1) {
        ENMS.push(MONS[mn]);
        N = N+1;
        // вскавка дива с фоновым изображением
        document.getElementById('add_mob').insertAdjacentHTML('beforebegin', `<!-- monster_${N+1} -->`);
        document.getElementById('add_mob').insertAdjacentHTML('beforebegin', `<div id="monster_${N+1}"
            class="col-4 npc-col"
            style="background-image: url(${ENMS[N].bkgImage});
                background-position: top center;
                background-repeat: no-repeat;
                background-size: 100% auto;">`);
        // считывание из БД данных персонажа и заполнение страницы Листа Персонажа по загрузке страницы
        HPmax[N] = ENMS[N].maxHP;
        HPcur[N] = HPmax[N];
        INIT[N] = null;
        RoAP[N] = ENMS[N].maxActionPoints;
        //
        let monster_N = document.getElementById(`monster_${N+1}`);
        let monstrNameRow = document.createElement('div');
            monstrNameRow.className = "row monster-header align-items-end row-bg-tr";
        monster_N.append(monstrNameRow);
            let monstrNameCol = document.createElement('div');
                monstrNameCol.className = "col-9 no-padding";
            monstrNameRow.append(monstrNameCol);
                let monsterTitle = document.createElement('h2');
                let monsterType = ENMS[N].charShortName;
                let monsterName = NAMES[N][getRandomInt(NAMES[N].length)];
                    monsterTitle.textContent = monsterType+" "+monsterName;
                monstrNameCol.append(monsterTitle);
            let monstrNumberCol = document.createElement('div');
                monstrNumberCol.className = "col-3 no-padding";
            monstrNameRow.append(monstrNumberCol);
                let monsterNumber = document.createElement('h1');
                monsterNumber.textContent = monsterName[0];
            monstrNumberCol.append(monsterNumber);
                //
            let hpMaxCol = document.createElement('div');
                hpMaxCol.className = "col-8 opacitycell no-padding";
            monstrNameRow.append(hpMaxCol);
                let maxHP = document.createElement('span');
                    maxHP.className = "ah3";
                    maxHP.setAttribute('id', `max_HP_${N+1}`);
                    maxHP.textContent = `maxHP:${HPmax[N]}`;
                hpMaxCol.append(maxHP);
                //
            let killedCol = document.createElement('div');
                killedCol.className = "col-1 opacitycell no-padding";
            monstrNameRow.append(killedCol);
                let killedButton = document.createElement('button');
                    killedButton.setAttribute('id', `killedButton_${N+1}`);
                    killedButton.className = "buttons mon-killed";
                    killedButton.textContent = "×";
                killedCol.append(killedButton);
                listenKillMonster(N);
                //
            let hitmeterCol = document.createElement('div');
                hitmeterCol.className = "col-3 opacitycell no-padding";
            monstrNameRow.append(hitmeterCol);
                let hpTitle = document.createElement('h3');
                    hpTitle.className = "ah3";
                    hpTitle.textContent = "HP:";
                hitmeterCol.append(hpTitle);
                let hitMeret = document.createElement('input');
                    hitMeret.setAttribute('id', `hitMeret_${N+1}`);
                    hitMeret.className = "input-light out-h3";
                    hitMeret.type = "text";
                    hitMeret.size = "2";
                    hitMeret.placeholder = "HP";
                    hitMeret.value = HPcur[N];
                hitmeterCol.append(hitMeret);
                //
            let initiativeCol = document.createElement('div');
                initiativeCol.className = "col-9 no-padding";
            monstrNameRow.append(initiativeCol);
                let initiativeDiv = document.createElement('div');
                    initiativeDiv.className = "initiative opacitycell";
                    initiativeDiv.setAttribute('id', `initiative_${N+1}`);
                initiativeCol.append(initiativeDiv);
                    let initiativeTitle = document.createElement('h3');
                        initiativeTitle.className = "ah3";
                        initiativeTitle.textContent = "Инициатива:";
                    initiativeDiv.append(initiativeTitle);
                    let initiativeRoll = document.createElement('span');
                        initiativeRoll.className = "ah3";
                        initiativeRoll.setAttribute('id', `initiativeRoll_${N+1}`);
                        initiativeRoll.textContent = `${ENMS[N].initD6}D+${ENMS[N].initMod}=`;
                    initiativeDiv.append(initiativeRoll);
                    let initiativeResult = document.createElement('input');
                        initiativeResult.setAttribute('id', `initiativeResult_${N+1}`);
                        initiativeResult.className = "input-light out-h3";
                        initiativeResult.type = "text";
                        initiativeResult.size = "2";
                        initiativeResult.readonly = "readonly";
                        initiativeResult.placeholder = "IN";
                        initiativeResult.value = INIT[N];
                    initiativeDiv.append(initiativeResult);
            let actionPointsCol = document.createElement('div');
                actionPointsCol.className = "col-3 no-padding";
            monstrNameRow.append(actionPointsCol);
                let actionPointsDiv = document.createElement('div');
                    actionPointsDiv.className = "opacitycell";
                actionPointsCol.append(actionPointsDiv);
                    let actionPointsTitle = document.createElement('h3');
                        actionPointsTitle.className = "ah3";
                        actionPointsTitle.textContent = "ОД:";
                    actionPointsDiv.append(actionPointsTitle);
                    let actionPointsResult = document.createElement('input');
                        actionPointsResult.setAttribute('id', `actionPointsResult_${N+1}`);
                        actionPointsResult.className = "input-light out-h3";
                        actionPointsResult.type = "text";
                        actionPointsResult.size = "2";
                        actionPointsResult.readonly = "readonly";
                        actionPointsResult.placeholder = "AP";
                        actionPointsResult.value = RoAP[N];
                    actionPointsDiv.append(actionPointsResult);
        //
        let attackdefenceSwitch = document.createElement('div');
            attackdefenceSwitch.className = "row gradient";
        monster_N.append(attackdefenceSwitch);
            let attackCol = document.createElement('div');
                attackCol.className = "col-5 gradient no-padding";
            attackdefenceSwitch.append(attackCol);
                let attackDiv = document.createElement('div');
                    attackDiv.className = "lightcell";
                attackCol.append(attackDiv);
                    let attackTitle = document.createElement('h4');
                        attackTitle.className = "ah4";
                        attackTitle.setAttribute('id', `l_Attack_${N+1}`);
                        attackTitle.textContent = "Атака";
                    attackDiv.append(attackTitle);
            let defenceCol = document.createElement('div');
                defenceCol.className = "col-7 gradient no-padding";
            attackdefenceSwitch.append(defenceCol);
                let defenceDiv = document.createElement('div');
                    defenceDiv.className = "lightcell";
                defenceCol.append(defenceDiv);
                    let defenceTitle = document.createElement('h4');
                        defenceTitle.className = "ah4 right turn-right";
                        defenceTitle.setAttribute('id', `l_Defence_${N+1}`);
                        defenceTitle.textContent = "Защита";
                    defenceDiv.append(defenceTitle);
        //
        let attackdefenceBlock = document.createElement('div');
            attackdefenceBlock.className = "row row-bg-tr";
        monster_N.append(attackdefenceBlock);
            let attackColumn = document.createElement('div');
                attackColumn.className = "col-6 no-padding";
                attackColumn.setAttribute('id', `Attack_Column_${N+1}`);
            attackdefenceBlock.append(attackColumn);
                let attackList = document.createElement('div');
                    attackList.className = "left-slide-block";
                    attackList.setAttribute('id', `attackList_${N+1}`);
                attackColumn.append(attackList);
            let defenceColumn = document.createElement('div');
                defenceColumn.className = "col-6 no-padding";
                defenceColumn.setAttribute('id', `Defence_Column_${N+1}`);
            attackdefenceBlock.append(defenceColumn);
                let defenceList = document.createElement('div');
                    defenceList.className = "right-slide-block hide-slide";
                    defenceList.setAttribute('id', `defenceList_${N+1}`);
                defenceColumn.append(defenceList);
        //
        showAttack[N] = 'on';
        showDefence[N] = 'off';
        listenAttackSlider(N);
        // document.getElementById(`l_Attack_${N+1}`).addEventListener("click", () => {
        //     console.log(`Attack ${N+1} Click`);
        //     if (showAttack === 'off') {
        //         showAttack = 'on';
        //         document.getElementById(`attackList_${N+1}`).className = 'left-slide-block';
        //         document.getElementById(`l_Attack_${N+1}`).className = 'ah4';
        //         showDefence = 'off';
        //         document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block hide-slide';
        //         document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right turn-right';
        //     } else if (showAttack === 'on') {
        //         showDefence = 'on';
        //         document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block';
        //         document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right';
        //         showAttack = 'off';
        //         document.getElementById(`attackList_${N+1}`).className = 'left-slide-block hide-slide';
        //         document.getElementById(`l_Attack_${N+1}`).className = 'ah4 turn-left';
        //     }
        // });
        listenDefenceSlider(N);
        // document.getElementById(`l_Defence_${N+1}`).addEventListener("click", () => {
        //     console.log(`Defence ${N+1} Click`);
        //     if (showDefence === 'off') {
        //         showDefence = 'on';
        //         document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block';
        //         document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right';
        //         showAttack = 'off';
        //         document.getElementById(`attackList_${N+1}`).className = 'left-slide-block hide-slide';
        //         document.getElementById(`l_Attack_${N+1}`).className = 'ah4 turn-left';
        //     } else if (showDefence === 'on') {
        //         showAttack = 'on';
        //         document.getElementById(`attackList_${N+1}`).className = 'left-slide-block';
        //         document.getElementById(`l_Attack_${N+1}`).className = 'ah4';
        //         showDefence = 'off';
        //         document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block hide-slide';
        //         document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right turn-right';
        //     }
        // });
        //
        // заполнение параметров оружия
        // объект с характеристиками оружия
        // ENMS[N].attack.forEach((item, i) => {
        //     AttOpt[N][i] = -1; // опция выбранного оружия
        //     AttAP[N][i] = item.actionPoints;  // Action Points
        //     ADice[N][i] = item.attackDice; // Attack Dice
        //     AMod[N][i] = item.attackMod; // Attack Modifinder
        //     DDice[N][i] = item.damageDice; // Damage Dice
        //     DMod[N][i] = item.damageMod; // Damage Modifinder
        //     Crit[N][i] = item.criticalChance; // criticalChance
        //     CrDam[N][i] = item.criticalDamage; // criticalDamage
        //     ArmPi[N][i] = item.armorPiercing; // armorPiercing
        //     KnDwn[N][i] = item.knockingDown; // knockingDown
        //     Ammo[N][i] = [];
        //     Load[N][i] = false; // loaded Ammo(nition) ?
        //     ReLd[N][i] = item.reload; // RE-load Ammo(nition) ?
        //     console.log(ADice[N][i],AMod[N][i]);
        // });
        // create Attack BlockS by function from aRRay
        ENMS[N].attack.forEach( function createAttackBlock(item, index) {
            //
            let attackList = document.getElementById(`attackList_${N+1}`);
                let attackBlock = document.createElement('div');
                attackBlock.setAttribute('id', `attackBlock_${N+1}${index+1}`);
                attackBlock.className = "block-button";
                attackList.append(attackBlock); // вставить "attackBlock_${N+1}#" в конец <'attackList'>
                attackBlock.insertAdjacentHTML('beforebegin', `<!--Attack Block ${N+1}#${index+1}-->`);
                //
                let attack_Title = document.createElement('div');
                attack_Title.className = "darkcell";
                attackBlock.prepend(attack_Title); // вставить "attack_Title" в начало <`attackBlock_${N+1}#`>
                //
                    let aIt = document.createElement('h5');
                    aIt.setAttribute('id', `aIt_${N+1}${index+1}`);
                    aIt.textContent = item.shortName;
                    attack_Title.prepend(aIt);
                //
                let attack_Chars = document.createElement('div');
                attack_Chars.className = "row lightcell no-margin";
                attackBlock.append(attack_Chars); // вставить "attack_Chars" в конец <`attackBlock${N+1}_#`>
                    //
                    let range = 0;
                    let rangeMin = 0;
                    let rangeMax = 12 * item.range;
                    if (!item.meel) { // Range Weappon
                        let rg_Title_col = document.createElement('div');
                        rg_Title_col.className = "col-3 no-padding";
                        attack_Chars.prepend(rg_Title_col);
                        let rg_Value_col = document.createElement('div');
                        rg_Value_col.className = "col-2 no-padding";
                        attack_Chars.append(rg_Value_col);
                        let rg_ft_col = document.createElement('div');
                        rg_ft_col.className = "col-1 no-padding";
                        attack_Chars.append(rg_ft_col);
                        let rg_range_col = document.createElement('div');
                        rg_range_col.className = "col-6 no-padding";
                        attack_Chars.append(rg_range_col);
                            //
                            let rg_Text = document.createElement('h6');
                            rg_Text.textContent = 'Далн.:';
                            rg_Title_col.append(rg_Text);
                            //
                            let rg_Value = document.createElement('input');
                            rg_Value.setAttribute('id', `attack_${N+1}${index+1}RgVal`);
                            rg_Value.className = "input-light out-h6";
                            rg_Value.type = "text";
                            rg_Value.size = "2";
                            rg_Value.readonly = "readonly";
                            rg_Value.placeholder = "RG";
                            rg_Value_col.append(rg_Value);
                            //
                            let rg_ft = document.createElement('p');
                            rg_ft.className = "ah7";
                            rg_ft.textContent = 'кл';
                            rg_ft_col.append(rg_ft);
                            //
                            let rg_range = document.createElement('input');
                            rg_range.setAttribute('id', `attack_${N+1}${index+1}Range`);
                            rg_range.className = "input-light range";
                            rg_range.type = "range";
                            rg_range.min = rangeMin;
                            rg_range.max = rangeMax;
                            rg_range.value = 0;
                            rg_range_col.append(rg_range);
                            //
                            AttOpt[N][index] = -1;
                            rg_range.addEventListener("change", function changeRange() {
                                AMod[N][index] = item.attackMod;
                                let range = document.getElementById(`attack_${N+1}${index+1}Range`).value;
                                document.getElementById(`attack_${N+1}${index+1}RgVal`).value = range;
// console.log(`AttOpt[${N}][${index}]`);
// console.log(item.wParts[AttOpt[N][index]]);
                            if ("wParts" in item) {
                                if ("attackMod" in item.wParts[AttOpt[N][index]]) AMod[N][index] = item.wParts[AttOpt[N][index]].attackMod;
                                else AMod[N][index] = item.attackMod;
                            }
                                AMod[N][index] = AMod[N][index] - Math.trunc(range / item.range);
                                attack_Roll.textContent = (AMod[N][index] >= 0)
                                 ? `${ADice[N][index]}D+`+`${AMod[N][index]}=`
                                 : `${ADice[N][index]}D`+`${AMod[N][index]}=`;
                            });
                    }
                //
                let aP_ValFld = document.createElement('div');
                aP_ValFld.className = "col-2 no-padding";
                attack_Chars.append(aP_ValFld);
                let aP_Ttl = document.createElement('div');
                aP_Ttl.className =    "col-2 no-padding";
                attack_Chars.append(aP_Ttl);
                    //
                    let l_AP_a = document.createElement('h6');
                    l_AP_a.textContent = 'ОД,';
                    aP_Ttl.append(l_AP_a);
                //
                let att_Ttl = document.createElement('div');
                att_Ttl.className = "col-3 no-padding";
                attack_Chars.append(att_Ttl);
                let att_Rll = document.createElement('div');
                att_Rll.className = "col-3 no-padding";
                attack_Chars.append(att_Rll);
                let att_Res = document.createElement('div');
                att_Res.className = "col-2 align-self-end no-padding";
                attack_Chars.append(att_Res);
                    //
                    let l_Attack = document.createElement('h6');
                    l_Attack.textContent = 'Атака:';
                    att_Ttl.prepend(l_Attack);
                    //
                    let attack_Result = document.createElement('input');
                    attack_Result.setAttribute('id', `attack_${N+1}${index+1}Result`);
                    attack_Result.className = "input-light out-h6";
                    attack_Result.type = "text";
                    attack_Result.size = "2";
                    attack_Result.readonly = "readonly";
                    attack_Result.placeholder = "AT";
                    att_Res.append(attack_Result);
                //
                let at_Name = document.createElement('div');
                at_Name.className = "col-4 no-padding";
                attack_Chars.append(at_Name);
                let dmg_Ttl = document.createElement('div');
                dmg_Ttl.className = "col-3 no-padding";
                attack_Chars.append(dmg_Ttl);
                let dmg_Rll = document.createElement('div');
                dmg_Rll.className = "col-3 no-padding";
                attack_Chars.append(dmg_Rll);
                let dmg_Res = document.createElement('div');
                dmg_Res.className = "col-2 align-self-end no-padding";
                attack_Chars.append(dmg_Res);
                    //
                    let l_Damage = document.createElement('h6');
                    l_Damage.setAttribute('id', `l_Damage_${N+1}${index+1}`);
                    l_Damage.textContent = 'Урон:';
                    dmg_Ttl.prepend(l_Damage);
                    //
                    let damage_Result = document.createElement('input');
                    damage_Result.setAttribute('id', `damage_${N+1}${index+1}Result`);
                    damage_Result.className = "input-light out-h6";
                    damage_Result.type = "text";
                    damage_Result.size = "2";
                    damage_Result.readonly = "readonly";
                    damage_Result.placeholder = "DM";
                    dmg_Res.append(damage_Result);
                //
                let crch_Ttl = document.createElement('div');
                crch_Ttl.className = "col-2 no-padding";
                attack_Chars.append(crch_Ttl);
                let crch_Val = document.createElement('div');
                crch_Val.className = "col-1 no-padding";
                attack_Chars.append(crch_Val);
                let crdm_Ttl = document.createElement('div');
                crdm_Ttl.className = "col-2 no-padding";
                attack_Chars.append(crdm_Ttl);
                let crdm_Val = document.createElement('div');
                crdm_Val.className = "col-1 no-padding";
                attack_Chars.append(crdm_Val);
                    //
                    let l_CC = document.createElement('h6');
                    l_CC.className = "ah7";
                    l_CC.textContent = 'ШК:';
                    crch_Ttl.prepend(l_CC);
                    //
                    let l_CD = document.createElement('h6');
                    l_CD.className = "ah7";
                    l_CD.textContent = 'КУ:';
                    crdm_Ttl.prepend(l_CD);
                //
                let arpr_Ttl = document.createElement('div');
                arpr_Ttl.className = "col-2 no-padding";
                attack_Chars.append(arpr_Ttl);
                let arpr_Val = document.createElement('div');
                arpr_Val.className = "col-1 no-padding";
                attack_Chars.append(arpr_Val);
                let kndn_Ttl = document.createElement('div');
                kndn_Ttl.className = "col-2 no-padding";
                attack_Chars.append(kndn_Ttl);
                let kndn_Val = document.createElement('div');
                kndn_Val.className = "col-1 no-padding";
                attack_Chars.append(kndn_Val);
                    //
                    let l_APr = document.createElement('h6');
                    l_APr.className = "ah7";
                    l_APr.textContent = 'ББ:';
                    arpr_Ttl.prepend(l_APr);
                    //
                    let l_KD = document.createElement('h6');
                    l_KD.className = "ah7";
                    l_KD.textContent = 'Сб:';
                    kndn_Ttl.prepend(l_KD);
                //
                AttOpt[N][index] = -1;
                // если оружие простое
                if (item.meel && !item.complex) { // Meel && Simple Weappon
                    let attName = document.createElement('h6');
                    attName.setAttribute('id', `attName_${N+1}${index+1}`);
                    attName.textContent = item.attackName;
                    at_Name.prepend(attName);
                    // если оружие много-составное ближнее / рукопашное
                } else if (item.meel && item.complex) { // Complexx Meel weappon
                    let att_Select = document.createElement('select');
                    att_Select.setAttribute('id', `attSelect_${N+1}${index+1}`);
                    att_Select.className = "select-light out-h6";
                    att_Select.name = `attSelect_${N+1}${index+1}`;
                    att_Select.size = "1";
                    att_Select.placeholder = "Choose Attack Type";
                    at_Name.prepend(att_Select);
                        item.wParts.forEach( function fillAttackSelect(wPart, jndex) { // option s
                            let att_option = document.createElement('option');
                            att_option.setAttribute('id', `attOption_${N+1}${index+1}${jndex+1}`);
                            att_option.className = "out-h6";
                            att_option.value = `${jndex+1}`;
                            att_option.textContent = wPart.attackName;
                            att_Select.append(att_option);
                        });
                        // добавляем реакцию по выбору части оружия / способа атаки
                        att_Select.addEventListener("change", function fillWeaponValues() {
                            AttOpt[N][index] = att_Select.value -1;
            console.log(AttOpt[N][index]);
                            if ("actionPoints" in item.wParts[AttOpt[N][index]]) AttAP[N][index] = item.wParts[AttOpt[N][index]].actionPoints;
                            else AttAP[N][index] = item.actionPoints;
                            actionPoints.textContent = AttAP[N][index];
                            //
                            if ("attackDice" in item.wParts[AttOpt[N][index]]) ADice[N][index] = item.wParts[AttOpt[N][index]].attackDice;
                            else ADice[N][index] = item.attackDice;
                            if ("attackMod" in item.wParts[AttOpt[N][index]]) AMod[N][index] = item.wParts[AttOpt[N][index]].attackMod;
                            else AMod[N][index]  = item.attackMod;
                            attack_Roll.textContent = `${ADice[N][index]}D+`+`${AMod[N][index]}=`;
                            //
                            if ("damageDice" in item.wParts[AttOpt[N][index]]) DDice[N][index] = item.wParts[AttOpt[N][index]].damageDice;
                            else DDice[N][index] = item.damageDice;
                            if ("damageMod"  in item.wParts[AttOpt[N][index]]) DMod[N][index] = item.wParts[AttOpt[N][index]].damageMod;
                            else DMod[N][index] = item.damageMod;
                            damage_Roll.textContent = `${DDice[N][index]}D+`+`${DMod[N][index]}=`;
                            //
                            if ("criticalChance" in item.wParts[AttOpt[N][index]]) Crit[N][index] = item.wParts[AttOpt[N][index]].criticalChance;
                            else Crit[N][index] = item.criticalChance;
                            criticalChance.textContent = Crit[N][index];
                            if ("criticalDamage" in item.wParts[AttOpt[N][index]]) CrDam[N][index] = item.wParts[AttOpt[N][index]].criticalDamage;
                            else CrDam[N][index] = item.criticalDamage;
                            criticalDamage.textContent = CrDam[N][index];
                            if ("armorPiercing" in item.wParts[AttOpt[N][index]]) ArmPi[N][index] = item.wParts[AttOpt[N][index]].armorPiercing;
                            else ArmPi[N][index] = item.armorPiercing;
                            armorPiercing.textContent = ArmPi[N][index];
                            if ("knockingDown" in item.wParts[AttOpt[N][index]]) KnDwn[N][index] = item.wParts[AttOpt[N][index]].knockingDown;
                            else KnDwn[N][index] = item.knockingDown;
                            knockingDown.textContent = `+${KnDwn[N][index]}`;
                        });
                } else if (!item.meel) { // RanGe Weappon = нужна перезарядка за ОД, возможность менять заряды, заряды кончаются
                    // создаём селектор зарядов, на всякий случай
                    let att_Select = document.createElement('select');
                    att_Select.setAttribute('id', `attSelect_${N+1}${index+1}`);
                    att_Select.className = "select-light out-h6";
                    att_Select.name = `attSelect_${N+1}${index+1}`;
                    att_Select.size = "1";
                    att_Select.placeholder = "Choose Ammoption";
                    at_Name.prepend(att_Select);
                    if (item.reload) { // ReLoad Action !! если ОД перезарядки  больше нуля — добавляем опцию перезарядки с ценой ОД
                        let reload_option = document.createElement('option');
                        reload_option.setAttribute('id', `attOption_${N+1}${index+1}0reload`);
                        reload_option.className = "out-h6";
                        reload_option.selected = "selected";
                        reload_option.disabled = "disabled";
                        reload_option.value = `0`;
                        ReLd[N][index] = item.reload;
                        reload_option.textContent = `зарядить ${ReLd[N][index]} ОД`;
                        att_Select.append(reload_option);
                    }
                    if (!item.complex && !item.wParts) { // Range Simple weappon
                        if (!item.wParts) { // если у оружия доступен только один вид боеприпасов
                            let ammunition = document.createElement('option'); // создаём единственную опцию с зарядами / боеприпасами
                            ammunition.setAttribute('id', `attOption_${N+1}${index+1}1`);
                            ammunition.className = "out-h6";
                            ammunition.value = `1`;
                            ammunition.textContent = item.attackName;
                            att_Select.append(ammunition);
                            //
                            if (item.ammunition) { // если у заряда указано (ограничено) количество — зоздаём счетчик зарядов
                                Ammo[N][index] = item.ammunition;
                                // ammoption.textContent = ammoption.textContent+` [${Ammo[N][index][jndex]}]`;
                                aIt.textContent = item.shortName+` [${Ammo[N][index]}]`;
                            }
                        }
                    } else { // создаём несколько опций для зарядов / боепривасов
                           item.wParts.forEach( function fillAmmoSelect(ammo, jndex) { // option-s Ammo
                               let ammoption = document.createElement('option');
                               ammoption.setAttribute('id', `attOption_${N+1}${index+1}${jndex+1}`);
                               ammoption.className = "out-h6";
                               ammoption.value = `${jndex+1}`;
                               ammoption.textContent = ammo.attackName;
                               Ammo[N][index] = [];
                               if (ammo.ammunition) { // если у каждого заряда ограничено количество — зоздаём индивидуальные счетчики зарядов
                       // console.log(N,index,jndex);
                                   Ammo[N][index][jndex] = ammo.ammunition;
                                   ammoption.textContent = ammoption.textContent+` [${Ammo[N][index][jndex]}]`;
                               }
                               ammoSelect.append(ammoption);
                           });
                        }

                    }
                    //
                    AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
                    console.log(AttOpt[N][index]);
                    Load[N][index] = false;
                    // добавляем реакцию по выбору боевого заряда в дистанционном оружии
                    // console.log(`att_Select_${N+1}${index+1}`);
                    // console.log(document.getElementById(`att_Select_15`));
                    //
                    listenAmmoChange(N, item, index);
                }
                    //
                    let actionPoints = document.createElement('p');
                    actionPoints.setAttribute('id', `actionPoints_${N+1}a${index+1}`);
                    actionPoints.className = "ah6";
                    let attack_Roll = document.createElement('p');
                    attack_Roll.setAttribute('id', `attack_${N+1}${index+1}Roll`);
                    attack_Roll.className = "ah6";
                    //
                    let damage_Roll = document.createElement('p');
                    damage_Roll.setAttribute('id', `damage_${N+1}${index+1}Roll`);
                    damage_Roll.className = "ah7";
                    //
                    let criticalChance = document.createElement('p');
                    criticalChance.setAttribute('id', `criticalChance_${N+1}${index+1}`);
                    criticalChance.className = "ah7";
                    let criticalDamage = document.createElement('p');
                    criticalDamage.setAttribute('id', `criticalDamage_${N+1}${index+1}`);
                    criticalDamage.className = "ah7";
                    let armorPiercing = document.createElement('p');
                    armorPiercing.setAttribute('id', `armorPiercing_${N+1}${index+1}`);
                    armorPiercing.className = "ah7";
                    let knockingDown = document.createElement('p');
                    knockingDown.setAttribute('id', `knockingDown_${N+1}${index+1}`);
                    knockingDown.className = "ah7";
                    //
                    // заполнение параметров оружия
                    if (item.meel) { // Meel  Weappon
                        if (!item.complex) { // Simple Weappon
                            AttAP[N][index] = item.actionPoints;
                            ADice[N][index] = item.attackDice;
                            AMod[N][index] = item.attackMod;
                            DDice[N][index] = item.damageDice;
                            DMod[N][index] = item.damageMod;
                            Crit[N][index] = item.criticalChance;
                            CrDam[N][index] = item.criticalDamage;
                            ArmPi[N][index] = item.armorPiercing;
                            KnDwn[N][index] = item.knockingDown;
                        } else if (item.complex) { // Complecs weappon
                            AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
                            if ("actionPoints" in item.wParts[AttOpt[N][index]]) AttAP[N][index] = item.wParts[AttOpt[N][index]].actionPoints;
                            else AttAP[N][index] = item.actionPoints;
                            if ("attackDice" in item.wParts[AttOpt[N][index]]) ADice[N][index] = item.wParts[AttOpt[N][index]].attackDice;
                            else ADice[N][index] = item.attackDice;
                            if ("attackMod"  in item.wParts[AttOpt[N][index]]) AMod[N][index] = item.wParts[AttOpt[N][index]].attackMod;
                            else AMod[N][index] = item.attackMod;
                            if ("damageDice" in item.wParts[AttOpt[N][index]]) DDice[N][index] = item.wParts[AttOpt[N][index]].damageDice;
                            else DDice[N][index] = item.damageDice;
                            if ("damageMod"  in item.wParts[AttOpt[N][index]]) DMod[N][index] = item.wParts[AttOpt[N][index]].damageMod;
                            else DMod[N][index] = item.damageMod;
                            if ("criticalChance" in item.wParts[AttOpt[N][index]]) Crit[N][index] = item.wParts[AttOpt[N][index]].criticalChance;
                            else Crit[N][index] = item.criticalChance;
                            if ("criticalDamage" in item.wParts[AttOpt[N][index]]) CrDam[N][index] = item.wParts[AttOpt[N][index]].criticalDamage;
                            else CrDam[N][index] = item.criticalDamage;
                            if ("armorPiercing" in item.wParts[AttOpt[N][index]]) ArmPi[N][index] = item.wParts[AttOpt[N][index]].armorPiercing;
                            else ArmPi[N][index] = item.armorPiercing;
                            if ("knockingDown" in item.wParts[AttOpt[N][index]]) KnDwn[N][index] = item.wParts[AttOpt[N][index]].knockingDown;
                            else KnDwn[N][index] = item.knockingDown;
                        }
                    } else if (!item.meel) { // Range Weappon
                        if (!item.complex) { // Simple Range Weappon
                            if (item.reload) { // need Reload
                                ReLd[N][index] = item.reload; // RE-load Ammo(nition) ?
                                Load[N][index] = false; // loaded Ammo(nition) ?
                                AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
                                AttAP[N][index] = "–";
                                ADice[N][index] = "–";
                                AMod[N][index]  = "–";
                                DDice[N][index] = "–";
                                DMod[N][index]  = "–";
                                Crit[N][index]  = "–";
                                CrDam[N][index] = "–";
                                ArmPi[N][index] = "–";
                                KnDwn[N][index] = "–";
                                if (item.ammunition) Ammo[N][index] = item.ammunition;
                            } else { // DOES`T need Reload
                                Load[N][index] = true; // loaded Ammo(nition) ?
                                AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
                                AttAP[N][index] = item.actionPoints;
                                ADice[N][index] = item.attackDice;
                                AMod[N][index] = item.attackMod;
                                DDice[N][index] = item.damageDice;
                                DMod[N][index] = item.damageMod;
                                Crit[N][index] = item.criticalChance;
                                CrDam[N][index] = item.criticalDamage;
                                ArmPi[N][index] = item.armorPiercing;
                                KnDwn[N][index] = item.knockingDown;
                            }
                        } else if (item.complex) { // Complex Range weappon
                            AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
                            if (AttOpt[N][index] === -1) { // оружие разряжено !
                                AttAP[N][index] = "–";
                                ADice[N][index] = "–";
                                AMod[N][index]  = "–";
                                DDice[N][index] = "–";
                                DMod[N][index]  = "–";
                                Crit[N][index]  = "–";
                                CrDam[N][index] = "–";
                                ArmPi[N][index] = "–";
                                KnDwn[N][index] = "–";
                                Load[N][index] = false; // loaded Ammo(nition) ?
                                if ("reload" in item.wParts[AttOpt[N][index]]) ReLd[N][index] = item.wParts[AttOpt[N][index]].reload;
                                else ReLd[N][index] = item.reload;
                            } else {
                                if ("reload" in item.wParts[AttOpt[N][index]]) ReLd[N][index] = item.wParts[AttOpt[N][index]].reload;
                                else ReLd[N][index] = item.reload;
                                //
                                if ("actionPoints" in item.wParts[AttOpt[N][index]]) AttAP[N][index] = item.wParts[AttOpt[N][index]].actionPoints;
                                else AttAP[N][index] = item.actionPoints;
                                if ("attackDice" in item.wParts[AttOpt[N][index]]) ADice[N][index] = item.wParts[AttOpt[N][index]].attackDice;
                                else ADice[N][index] = item.attackDice;
                                if ("attackMod"  in item.wParts[AttOpt[N][index]]) AMod[N][index] = item.wParts[AttOpt[N][index]].attackMod;
                                else AMod[N][index] = item.attackMod;
                                if ("damageDice" in item.wParts[AttOpt[N][index]]) DDice[N][index] = item.wParts[AttOpt[N][index]].damageDice;
                                else DDice[N][index] = item.damageDice;
                                if ("damageMod"  in item.wParts[AttOpt[N][index]]) DMod[N][index] = item.wParts[AttOpt[N][index]].damageMod;
                                else DMod[N][index] = item.damageMod;
                                if ("criticalChance" in item.wParts[AttOpt[N][index]]) Crit[N][index] = item.wParts[AttOpt[N][index]].criticalChance;
                                else Crit[N][index] = item.criticalChance;
                                if ("criticalDamage" in item.wParts[AttOpt[N][index]]) CrDam[N][index] = item.wParts[AttOpt[N][index]].criticalDamage;
                                else CrDam[N][index] = item.criticalDamage;
                                if ("armorPiercing" in item.wParts[AttOpt[N][index]]) ArmPi[N][index] = item.wParts[AttOpt[N][index]].armorPiercing;
                                else ArmPi[N][index] = item.armorPiercing;
                                if ("knockingDown" in item.wParts[AttOpt[N][index]]) KnDwn[N][index] = item.wParts[AttOpt[N][index]].knockingDown;
                                else KnDwn[N][index] = item.knockingDown;
                            }
                        }
                    }
            // console.log(AttOpt[N][index]);
                    actionPoints.textContent = AttAP[N][index];
                    attack_Roll.textContent = `${ADice[N][index]}D+`+`${AMod[N][index]}=`;
                    damage_Roll.textContent = `${DDice[N][index]}D+`+`${DMod[N][index]}=`;
                    criticalChance.textContent = Crit[N][index];
                    criticalDamage.textContent = CrDam[N][index];
                    armorPiercing.textContent = ArmPi[N][index];
                    knockingDown.textContent = (KnDwn[N][index] > 9) ? KnDwn[N][index] : `+${KnDwn[N][index]}`;
                    //
                    aP_ValFld.append(actionPoints);
                    att_Rll.append(attack_Roll);
                    dmg_Rll.append(damage_Roll);
                    crch_Val.append(criticalChance);
                    crdm_Val.append(criticalDamage);
                    arpr_Val.append(armorPiercing);
                    kndn_Val.append(knockingDown);
                    //
            //
            listenAttack(N, item, index);
        });
        //
        // create Defence BlockS by function from aRRay
        ENMS[N].defence.forEach( function createDefenceBlock(item, index) {
            let defenceList = document.getElementById(`defenceList_${N+1}`)
            let defenceBlock = document.createElement('div');
            defenceBlock.setAttribute('id', `defenceBlock_${N+1}${index+1}`);
            defenceBlock.className = "block-button";
            defenceList.append(defenceBlock); // вставить "defenceBlock_${N+1}" в конец <'defenceList'>
            defenceBlock.insertAdjacentHTML('beforebegin', `<!--Defence Block ${N+1}#${index+1}-->`);
            //
            let defence_Title = document.createElement('div');
            defence_Title.className = "darkcell";
            defenceBlock.prepend(defence_Title); // вставить "defence_Title" в начало <`defenceBlock_${N+1}`>
                //
                let dShTt = document.createElement('h5');
                dShTt.setAttribute('id', `dShTt_${N+1}${index+1}`);
                dShTt.innerHTML = item.shortName;
                defence_Title.prepend(dShTt);
            //
            let defence_Chars = document.createElement('div');
            defence_Chars.className = "row lightcell no-margin";
            defenceBlock.append(defence_Chars); // вставить "defence_Chars" в конец <`defencekBlock_#`>
                //
                let dP_ValFld = document.createElement('div');
                dP_ValFld.className = "col-2 no-padding";
                defence_Chars.prepend(dP_ValFld);
                let dP_Ttl = document.createElement('div');
                dP_Ttl.className    = "col-9 no-padding";
                defence_Chars.append(dP_Ttl);
                    //
                    let l_ActionPoints_d = document.createElement('h6');
                    l_ActionPoints_d.textContent = 'Очков Действий';
                    dP_Ttl.append(l_ActionPoints_d);
                    let actionPoints = document.createElement('p');
                    actionPoints.setAttribute('id', `actionPoints_${N+1}d${index+1}`);
                    actionPoints.className = "ah6";
                    DefAP[N][index] = item.actionPoints;
                    actionPoints.textContent = DefAP[N][index];
                    dP_ValFld.append(actionPoints);
                //
                let def_Ttl = document.createElement('div');
                def_Ttl.className = "col-7 no-padding";
                defence_Chars.append(def_Ttl);
                let def_Bon = document.createElement('div');
                def_Bon.className = "col-1 no-padding";
                defence_Chars.append(def_Bon);
                    //
                    let l_Skill = document.createElement('h6');
                    l_Skill.innerHTML = `${item.shortName}:`;
                    def_Ttl.prepend(l_Skill);
                    let defSkillBon = document.createElement('p');
                    defSkillBon.setAttribute('id', `defSkillBon_${N+1}${index+1}`);
                    defSkillBon.className = "ah6";
                    DeVal[N][index] = item.parry;
                    defSkillBon.textContent = DeVal[N][index];
                    def_Bon.append(defSkillBon);
                //
                let dAm_Amnt = document.createElement('div');
                dAm_Amnt.className = "col-2 no-padding";
                defence_Chars.append(dAm_Amnt);
                    //
                    let defenceAmount = document.createElement('p');
                    defenceAmount.setAttribute('id', `defenceAmount_${N+1}${index+1}`);
                    defenceAmount.className = "ah6";
                    DeAmt[N][index] = 0;
                    defenceAmount.textContent = `×${DeAmt[N][index]}`;
                    dAm_Amnt.append(defenceAmount);
            // добавляем реакцию по клику на 3ashite : DefAP[N][index], DeVal[N][index], DeAmt[N][index]
            listenDefence(N, item, index)
        });
        // добавляем реакцию по клику на полe Инициативы
        listenInitiative(N);
    }
    //
    // console.log(N+1);
    if ((N+1) === 12) { // если монстров на странице 12 - скрываем кнопку добавления новых монстров
        document.getElementById('add_mob').hidden = true;
    }
});
//
function listenKillMonster(N) { // при нажатии на кнопку "х" - скрываем блок данного монстра
    document.getElementById(`killedButton_${N+1}`).addEventListener( "click", () => {
        document.getElementById(`monster_${N+1}`).hidden = true;
    });
}
// const InitiativeLog = []; // Log
// генерация Инициативы по нажатию поля Инициативы
function listenInitiative(monsterNumber) {
    document.getElementById(`initiative_${monsterNumber+1}`).parentNode.addEventListener("click", () => {
        console.log(`initiative_${monsterNumber+1}`);
        if (!INIT[monsterNumber]) {
            INIT[monsterNumber] = diceRoller(ENMS[monsterNumber].initD6, 6, ENMS[monsterNumber].initMod);
            console.log(`initiativeResult_${monsterNumber+1}`);
            document.getElementById(`initiativeResult_${monsterNumber+1}`).value = INIT[monsterNumber];
            document.getElementById(`initiative_${monsterNumber+1}`).className = "opacitycell";
            // InitiativeLog.push(initiative);
            // console.log(InitiativeLog);
        }
    });
}
// ENMS.forEach((item, i) => { });
//
function listenAmmoChange(N, item, index) {
    document.getElementById(`attSelect_${N+1}${index+1}`).addEventListener("change", function fillAmmoValues() {
    // console.log(`att_Select_${N+1}${index+1}`);
    // console.log(document.getElementById(`att_Select_${N+1}${index+1}`));
        AttOpt[N][index] = document.getElementById(`attSelect_${N+1}${index+1}`).value -1;
        if ("wParts" in item) {
            if ("actionPoints" in item.wParts[AttOpt[N][index]]) AttAP[N][index] = item.wParts[AttOpt[N][index]].actionPoints;
            else AttAP[N][index] = item.actionPoints;
            //
            if ("attackDice" in item.wParts[AttOpt[N][index]]) ADice[N][index] = item.wParts[AttOpt[N][index]].attackDice;
            else ADice[N][index] = item.attackDice;
            if ("attackMod"  in item.wParts[AttOpt[N][index]]) AMod[N][index] = item.wParts[AttOpt[N][index]].attackMod;
            else AMod[N][index] = item.attackMod;
            //
            if ("damageDice" in item.wParts[AttOpt[N][index]]) DDice[N][index] = item.wParts[AttOpt[N][index]].damageDice;
            else DDice[N][index] = item.damageDice;
            if ("damageMod"  in item.wParts[AttOpt[N][index]]) DMod[N][index] = item.wParts[AttOpt[N][index]].damageMod;
            else DMod[N][index] = item.damageMod;
            //
            if ("criticalChance" in item.wParts[AttOpt[N][index]]) Crit[N][index] = item.wParts[AttOpt[N][index]].criticalChance;
            else Crit[N][index] = item.criticalChance;
            if ("criticalDamage" in item.wParts[AttOpt[N][index]]) CrDam[N][index] = item.wParts[AttOpt[N][index]].criticalDamage;
            else CrDam[N][index] = item.criticalDamage;
            if ("armorPiercing" in item.wParts[AttOpt[N][index]]) ArmPi[N][index] = item.wParts[AttOpt[N][index]].armorPiercing;
            else ArmPi[N][index] = item.armorPiercing;
            if ("knockingDown" in item.wParts[AttOpt[N][index]]) KnDwn[N][index] = item.wParts[AttOpt[N][index]].knockingDown;
            else KnDwn[N][index] = item.knockingDown;
            //
            if ("reload" in item.wParts[AttOpt[N][index]]) ReLd[N][index] = item.wParts[AttOpt[N][index]].reload;
            else ReLd[N][index] = item.reload;
            if ("range" in item.wParts[Rang[N][index]]) KnDwn[N][index] = item.wParts[AttOpt[N][index]].range;
            else Rang[N][index] = item.range;
        } else {
            AttAP[N][index] = item.actionPoints;
            //
            ADice[N][index] = item.attackDice;
            AMod[N][index] = item.attackMod;
            //
            DDice[N][index] = item.damageDice;
            DMod[N][index] = item.damageMod;
            //
            Crit[N][index] = item.criticalChance;
            CrDam[N][index] = item.criticalDamage;
            ArmPi[N][index] = item.armorPiercing;
            KnDwn[N][index] = item.knockingDown;
            //
            ReLd[N][index] = item.reload;
            Rang[N][index] = item.range;
        }
        //
        let range = document.getElementById(`attack_${N+1}${index+1}Range`).value;
        document.getElementById(`attack_${N+1}${index+1}RgVal`).value = range;
        AMod[N][index] = AMod[N][index] - Math.trunc(range / Rang[N][index]);
        let attackRoll = (AMod[N][index] >= 0) ? (ADice[N][index] + 'D+' + AMod[N][index] + '=') : (ADice[N][index] + 'D'  + AMod[N][index] + '=');
        document.getElementById(`attack_${N+1}${index+1}Roll`).textContent = attackRoll;
        //
        document.getElementById(`actionPoints_${N+1}a${index+1}`).textContent = AttAP[N][index];
        // attack_Roll.textContent = `${ADice[N][index]}D+`+`${AMod[N][index]}=`;
        document.getElementById(`damage_${N+1}${index+1}Roll`).textContent = `${DDice[N][index]}D+`+`${DMod[N][index]}=`;
        document.getElementById(`criticalChance_${N+1}${index+1}`).textContent = Crit[N][index];
        document.getElementById(`criticalDamage_${N+1}${index+1}`).textContent = CrDam[N][index];
        document.getElementById(`armorPiercing_${N+1}${index+1}`).textContent = ArmPi[N][index];
        document.getElementById(`knockingDown_${N+1}${index+1}`).textContent = (KnDwn[N][index] > 9) ? KnDwn[N][index] : `+${KnDwn[N][index]}`;
        // перезарядка :: учёт Очков Действий
        let reload;
        if (Load[N][index]) reload = 1;
        else reload = ReLd[N][index];
        RoAP[N] = RoAP[N] - reload;
        document.getElementById(`actionPointsResult_${N+1}`).value = RoAP[N];
        // document.getElementById(`attOption_${index+1}${o+1}`).disabled = "disabled";
        Load[N][index] = true;
    });
}
//
function listenAttackSlider(N) {
    document.getElementById(`l_Attack_${N+1}`).addEventListener("click", () => {
        console.log(`Attack ${N+1} Click`);
        console.log(showAttack[N]);
        if (showAttack[N] === 'off') {
            console.log(`showAttack ${N+1} =off`);
            showAttack[N] = 'on';
            document.getElementById(`attackList_${N+1}`).className = 'left-slide-block';
            document.getElementById(`l_Attack_${N+1}`).className = 'ah4';
            showDefence[N] = 'off';
            document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block hide-slide';
            document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right turn-right';
        } else if (showAttack[N] === 'on') {
            console.log(`showAttack ${N+1} =on`);
            showDefence[N] = 'on';
            document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block';
            document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right';
            showAttack[N] = 'off';
            document.getElementById(`attackList_${N+1}`).className = 'left-slide-block hide-slide';
            document.getElementById(`l_Attack_${N+1}`).className = 'ah4 turn-left';
        }
    });
}
function listenDefenceSlider(N) {
    document.getElementById(`l_Defence_${N+1}`).addEventListener("click", () => {
        console.log(`Defence ${N+1} Click`);
        if (showDefence[N] === 'off') {
            showDefence[N] = 'on';
            document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block';
            document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right';
            showAttack[N] = 'off';
            document.getElementById(`attackList_${N+1}`).className = 'left-slide-block hide-slide';
            document.getElementById(`l_Attack_${N+1}`).className = 'ah4 turn-left';
        } else if (showDefence[N] === 'on') {
            showAttack[N] = 'on';
            document.getElementById(`attackList_${N+1}`).className = 'left-slide-block';
            document.getElementById(`l_Attack_${N+1}`).className = 'ah4';
            showDefence[N] = 'off';
            document.getElementById(`defenceList_${N+1}`).className = 'right-slide-block hide-slide';
            document.getElementById(`l_Defence_${N+1}`).className = 'ah4 right turn-right';
        }
    });
}
//
function listenAttack(monsterNumber, item, attackNumber) {
    // добавляем реакцию по клику на Oruzhii
    document.getElementById(`aIt_${monsterNumber+1}${attackNumber+1}`).parentNode.addEventListener("click", function attackByWeappon() {
        console.log(`aIt_${monsterNumber+1}${attackNumber+1}`);
        if (RoAP[monsterNumber] > 0) {
            if (AttAP[monsterNumber][attackNumber] !== "–") {
                let attack = diceRoller(ADice[monsterNumber][attackNumber], 6, AMod[monsterNumber][attackNumber]);
                document.getElementById(`attack_${monsterNumber+1}${attackNumber+1}Result`).value = attack;
                //
                let damage = diceRoller(DDice[monsterNumber][attackNumber], 6, DMod[monsterNumber][attackNumber]);
                document.getElementById(`damage_${monsterNumber+1}${attackNumber+1}Result`).value = damage;
                //
                RoAP[monsterNumber] = RoAP[monsterNumber] - AttAP[monsterNumber][attackNumber];
                document.getElementById(`actionPointsResult_${monsterNumber+1}`).value = RoAP[monsterNumber];
                //
                let knockingDown = damage + KnDwn[monsterNumber][attackNumber];
                document.getElementById(`knockingDown_${monsterNumber+1}${attackNumber+1}`).textContent = knockingDown;
                //
                if (!item.meel) { // weapon range
                    if ("ammunition" in item) {
                        Ammo[monsterNumber][attackNumber] = Ammo[monsterNumber][attackNumber] - 1;
                        document.getElementById(`aIt_${monsterNumber+1}${attackNumber+1}`).textContent
                         = `${item.shortName} [${Ammo[monsterNumber][attackNumber]}]`;
                        // aIt.textContent = item.shortName+` [${Ammo[N][index]}]`;
                        if (Ammo[monsterNumber][attackNumber] === 0) {
                            document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}${AttOpt[monsterNumber][attackNumber]+1}`).disabled = "disabled";
                            document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}${AttOpt[monsterNumber][attackNumber]+1}`).remove();
                            //
                            // AttAP[monsterNumber][attackNumber] = "–";
                            // ADice[monsterNumber][attackNumber] = "–";
                            // AMod[monsterNumber][attackNumber]  = "–";
                            // DDice[monsterNumber][attackNumber] = "–";
                            // DMod[monsterNumber][attackNumber]  = "–";
                            // Crit[monsterNumber][attackNumber]  = "–";
                            // CrDam[monsterNumber][attackNumber] = "–";
                            // ArmPi[monsterNumber][attackNumber] = "–";
                            // KnDwn[monsterNumber][attackNumber] = "–";
                            // //
                            // actionPoints.textContent = AttAP[monsterNumber][attackNumber];
                            // attack_Roll.textContent = `${ADice[monsterNumber][attackNumber]}D+${AMod[monsterNumber][attackNumber]}`;
                            // damage_Roll.textContent = `${DDice[monsterNumber][attackNumber]}D+${DMod[monsterNumber][attackNumber]}`;
                            // criticalChance.textContent = Crit[monsterNumber][attackNumber];
                            // criticalDamage.textContent = CrDam[monsterNumber][attackNumber];
                            // armorPiercing.textContent = ArmPi[monsterNumber][attackNumber];
                            // knockingDown.textContent = KnDwn[monsterNumber][attackNumber];
                            //
                            this.removeEventListener('click', attackByWeappon);
                        }
                    } else if ("wParts" in item) {
                        if ("ammunition" in item.wParts[AttOpt[monsterNumber][attackNumber]]) {
                            Ammo[monsterNumber][attackNumber][AttOpt[monsterNumber][attackNumber]] = Ammo[monsterNumber][attackNumber][AttOpt[monsterNumber][attackNumber]] - 1;
        // console.log(`attOption_${monsterNumber+1}${index+1}${AttOpt[monsterNumber][attackNumber]+1}`);
                            document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}${ATTACK[monsterNumber][attackNumber]+1}`).textContent
                             = `${item.wParts[AttOpt[monsterNumber][attackNumber]].attackName} [${Ammo[monsterNumber][attackNumber][AttOpt[monsterNumber][attackNumber]]}]`;
                             //
                            if (Ammo[monsterNumber][attackNumber][AttOpt[monsterNumber][index]] === 0) {
                                document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}${AttOpt[monsterNumber][attackNumber]+1}`).disabled = "disabled";
                                document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}${AttOpt[monsterNumber][attackNumber]+1}`).remove();
                                //
                                // AttAP[monsterNumber][attackNumber] = "–";
                                // ADice[monsterNumber][attackNumber] = "–";
                                // AMod[monsterNumber][attackNumber]  = "–";
                                // DDice[monsterNumber][attackNumber] = "–";
                                // DMod[monsterNumber][attackNumber]  = "–";
                                // Crit[monsterNumber][attackNumber]  = "–";
                                // CrDam[monsterNumber][attackNumber] = "–";
                                // ArmPi[monsterNumber][attackNumber] = "–";
                                // KnDwn[monsterNumber][attackNumber] = "–";
                                // //
                                // actionPoints.textContent = AttAP[monsterNumber][attackNumber];
                                // attack_Roll.textContent = `${ADice[monsterNumber][attackNumber]}D+${AMod[monsterNumber][attackNumber]}`;
                                // damage_Roll.textContent = `${DDice[monsterNumber][attackNumber]}D+${DMod[monsterNumber][attackNumber]}`;
                                // criticalChance.textContent = Crit[monsterNumber][attackNumber];
                                // criticalDamage.textContent = CrDam[monsterNumber][attackNumber];
                                // armorPiercing.textContent = ArmPi[monsterNumber][attackNumber];
                                // knockingDown.textContent = KnDwn[monsterNumber][attackNumber];
                                //
                                this.removeEventListener('click', attackByWeappon);
                            }
                        }
                    }

                }
                if (!item.meel && item.reload) {
                    document.getElementById(`attOption_${monsterNumber+1}${attackNumber+1}0reload`).selected = "selected";
                    Load[monsterNumber][attackNumber] = false;
                    //
                    AttAP[monsterNumber][attackNumber] = "–";
                    ADice[monsterNumber][attackNumber] = "–";
                    AMod[monsterNumber][attackNumber]  = "–";
                    DDice[monsterNumber][attackNumber] = "–";
                    DMod[monsterNumber][attackNumber]  = "–";
                    Crit[monsterNumber][attackNumber]  = "–";
                    CrDam[monsterNumber][attackNumber] = "–";
                    ArmPi[monsterNumber][attackNumber] = "–";
                    //
                    document.getElementById(`actionPoints_${monsterNumber+1}a${attackNumber+1}`).textContent = AttAP[monsterNumber][attackNumber];
                    document.getElementById(`attack_${monsterNumber+1}${attackNumber+1}Roll`).textContent = `${ADice[monsterNumber][attackNumber]}D${AMod[monsterNumber][attackNumber]}`;
                    document.getElementById(`damage_${monsterNumber+1}${attackNumber+1}Roll`).textContent = `${DDice[monsterNumber][attackNumber]}D${DMod[monsterNumber][attackNumber]}`;
                    document.getElementById(`criticalChance_${monsterNumber+1}${attackNumber+1}`).textContent = Crit[monsterNumber][attackNumber];
                    document.getElementById(`criticalDamage_${monsterNumber+1}${attackNumber+1}`).textContent = CrDam[monsterNumber][attackNumber];
                    document.getElementById(`armorPiercing_${monsterNumber+1}${attackNumber+1}`).textContent = ArmPi[monsterNumber][attackNumber];
                }
                if (RoAP[monsterNumber] <= 0) {
                    let attackList = document.getElementById(`attackList_${monsterNumber+1}`);
                    for (let i = 0; i < attackList.children.length; i++) {
                        attackList.children[i].className = "";
                    }
                    let defenceList = document.getElementById(`defenceList_${monsterNumber+1}`);
                    for (let i = 0; i < defenceList.children.length; i++) {
                        defenceList.children[i].className = "";
                    }
                }
            }
        }
    });
};
// добавляем реакцию по клику на 3ashite : DefAP[N][index], DeVal[N][index], DeAmt[N][index]
function listenDefence(N, item, defNumber) {
    document.getElementById(`defenceBlock_${N+1}${defNumber+1}`).addEventListener("click", () => {
        // DeAm[N][index] = document.getElementById(`defenceAmount_${N+1}${index+1}`).textContent;
        // DeAm[N][index] = Number(DeAm[N][index][1]);
        if (RoAP[N] > 0) {
            DeAmt[N][defNumber] = DeAmt[N][defNumber] + 1;
            document.getElementById(`defenceAmount_${N+1}${defNumber+1}`).textContent = `×${DeAmt[N][defNumber]}`;
            RoAP[N] = RoAP[N] - DefAP[N][defNumber];
            document.getElementById(`actionPointsResult_${N+1}`).value = RoAP[N];
            if (RoAP[N] <= 0) {
                let attackList = document.getElementById(`attackList_${N+1}`);
                for (let i = 0; i < attackList.children.length; i++) {
                    attackList.children[i].className = "";
                }
                let defenceList = document.getElementById(`defenceList_${N+1}`);
                for (let i = 0; i < defenceList.children.length; i++) {
                    defenceList.children[i].className = "";
                }
            }
        }
    });
}
//
document.getElementById(`end_turn`).addEventListener( "click", () => {
    ENMS.forEach((item, I) => {
        RoAP[I] = (RoAP[I] > 0) ? ENMS[I].maxActionPoints : RoAP[I] + ENMS[I].maxActionPoints;
        document.getElementById(`actionPointsResult_${I+1}`).value = RoAP[I];
        endRound(I);
    });
});
//
document.getElementById('end_fight').addEventListener( "click", () => {
    ENMS.forEach((item, I) => {
        console.log(I);
        document.getElementById(`initiativeResult_${I+1}`).value = INIT[I] = null;
        document.getElementById(`actionPointsResult_${I+1}`).value = ENMS[I].maxActionPoints;
        console.log(`initiative_${I+1}`);
        document.getElementById(`initiative_${I+1}`).className = "initiative opacitycell";
        // document.getElementById('attack_1Result').value = null;
        // document.getElementById('damage_1Result').value = null;
        endRound(I);
    });
});
//
function endRound(I) {
    let attackList = document.getElementById(`attackList_${I+1}`);
    let defenceList = document.getElementById(`defenceList_${I+1}`);
    for (let i = 0; i < attackList.getElementsByTagName('input').length; i++) {
        if (document.getElementById(`attack_${I+1}${i+1}Range`) != null) {
            let range = document.getElementById(`attack_${I+1}${i+1}Range`).value;
            if (document.getElementById(`attack_${I+1}${i+1}Range`) == null) {
                attackList.getElementsByTagName('input')[i].value = null;
            } else {
                document.getElementById(`attack_${I+1}${i+1}RgVal`).value = range;
                document.getElementById(`attack_${I+1}${i+1}Range`).value = range;
            }
        };
    }
    for (let i = 0; i < defenceList.getElementsByTagName('input').length; i++) {
        defenceList.getElementsByTagName('input')[i].value = null;
    }
    for (let i = 0; i < attackList.children.length; i++) {
        let item = ENMS[I].attack[i];
        if ("knockingDown" in ENMS[I].attack[i]) {
            document.getElementById(`knockingDown_${I+1}${i+1}`).textContent = (item.knockingDown > 9) ? `${item.knockingDown}` : `+${item.knockingDown}`;
        } else {
            let o = document.getElementById(`attSelect_${i+1}`).value - 1;
            // console.log('i=',i,'o=',o);
            if (o == -1) document.getElementById(`knockingDown_${I+1}${i+1}`).textContent = '–';
            else document.getElementById(`knockingDown_${I+1}${i+1}`).textContent = `+${item.wParts[o].knockingDown}`;

        }
    }
    if (RoAP[I] > 0) {
        for (let i = 0; i < attackList.children.length; i++) {
            attackList.children[i].className = "block-button";
        }
        for (let i = 0; i < defenceList.children.length; i++) {
            defenceList.children[i].className = "block-button";
        }
    }
}
//
// function addChild (parent, child, teg, style) {
//         child = document.createElement(`teg`);
//         child.className = style;
//     parent.append(child);
//     return child
// }
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
