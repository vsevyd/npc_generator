'use strict'
// объявление переменных
const SHORT_NAME = CHAR.charShortName;
const LONG_NAME =  CHAR.charLongName;
const CONCEPT = CHAR.charShortConcept;
const DESCRIPT = CHAR.charLongDescr;
const INI_D6 = CHAR.initD6; // initiative Roll Dice
const INI_MD = CHAR.initMod; // initiative Roll Modifider
const AtName = []; // attack Name
const AttOpt = []; // опция выбранного оружия
const AttAP  = []; // Attack Action Points
const ADice  = []; // Attack Dice
const AMod  = [];  // Attack Modifinder
const DDice  = []; // Damage Dice
const DMod  = [];  // Damage Modifinder
const Crit  = [];  // criticalChance
const CrDam  = []; // criticalDamage
const ArmPi  = []; // armorPiercing
const KnDwn  = []; // knockingDown
const Ammo  = [];  // Ammonition Counter
const Ammos  = [[],[],[],[],[],];
const Load  = []; // loaded Ammo(nition) ?
const ReLd  = []; // RE-load Ammo(nition) ?
const Rang  = []; // attack or shutting range
const AimAP = []; // aiming Action Points value
const AimMax = []; // aiming Maxinum Score
const AimAmn = []; // aiming Amount
const AimBon = []; // aiming Bonus
const AimDam = []; // aiming Damage Bonus
const EnchaT = []; // есть Зачарование
const EnchOpt = []; // опция выбранного Зачарования
const EnchNm = []; // enchantment Name
const EnchAo = [[],[],[],[],[],]; // enchantment Amount
const ReEnch = [[],[],[],[],[],]; // ReEnchantment Action Points
const EnchAP = []; // enchantment Action Points
const EnchAD = []; // enchantment Attack Dice
const EnchAM = []; // enchantment Attack Modifinder
const EnchDD = []; // enchantment Damage Dice
const EnchDM = []; // enchantment Damage Modifinder
const DefAP  = []; // defence Action Points
const DeVal  = []; // defence Bonus
const DeAmt  = []; // defence Amount
let initiative = null;
const MAX_AP = CHAR.maxActionPoints;
let round_AP = MAX_AP;
// считывание из БД данных персонажа и заполнение страницы Листа Персонажа по загрузке страницы
let showAttack = 'on';
let showDefence = 'off';
document.getElementById('l_Attack').addEventListener("click", () => {
    console.log("Attack Click");
    if (showAttack === 'off') {
        showAttack = 'on';
        document.getElementById('attackList').className = 'left-slide-block';
        document.getElementById('l_Attack').className = 'ah4';
        showDefence = 'off';
        document.getElementById('defenceList').className = 'right-slide-block hide-slide';
        document.getElementById('l_Defence').className = 'ah4 right turn-right';
    } else if (showAttack === 'on') {
        showDefence = 'on';
        document.getElementById('defenceList').className = 'right-slide-block';
        document.getElementById('l_Defence').className = 'ah4 right';
        showAttack = 'off';
        document.getElementById('attackList').className = 'left-slide-block hide-slide';
        document.getElementById('l_Attack').className = 'ah4 turn-left';
    }
});
document.getElementById('l_Defence').addEventListener("click", () => {
    console.log("Defence Click");
    if (showDefence === 'off') {
        showDefence = 'on';
        document.getElementById('defenceList').className = 'right-slide-block';
        document.getElementById('l_Defence').className = 'ah4 right';
        showAttack = 'off';
        document.getElementById('attackList').className = 'left-slide-block hide-slide';
        document.getElementById('l_Attack').className = 'ah4 turn-left';
    } else if (showDefence === 'on') {
        showAttack = 'on';
        document.getElementById('attackList').className = 'left-slide-block';
        document.getElementById('l_Attack').className = 'ah4';
        showDefence = 'off';
        document.getElementById('defenceList').className = 'right-slide-block hide-slide';
        document.getElementById('l_Defence').className = 'ah4 right turn-right';
    }
});
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
    document.getElementById('initiativeRoll').textContent = `${INI_D6}D+${INI_MD}=`;
    document.getElementById('initiativeResult').value = initiative;
    document.getElementById('actionPointsResult').value = round_AP;
//
    CHAR.attack.forEach( function createAttackBlock(item, index) {
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
        // заполнение параметров оружия
        // присвоение элементу массива оружия/атики значений
        AtName[index] = item.shortName; // attack Name
        AttOpt[index] = -1; // опция выбранного оружия
        AttAP[index]  = item.actionPoints; // Action Points
        ADice[index]  = item.attackDice; // Attack Dice
        AMod[index]  = item.attackMod; // Attack Modifinder
        DDice[index]  = item.damageDice; // Damage Dice
        DMod[index]  = item.damageMod; // Damage Modifinder
        Crit[index]  = item.criticalChance; // criticalChance
        CrDam[index]  = item.criticalDamage; // criticalDamage
        ArmPi[index]  = item.armorPiercing; // armorPiercing
        KnDwn[index]  = item.knockingDown; // knockingDown
        Rang[index]  = item.range; // attack or shutting range
        let range = 0;
        let rangeMin = 0;
        let rangeMax = 12 * Rang[index];
        let penalty  = 0; // range penalty
            //
            let aIt = document.createElement('h5');
            aIt.setAttribute('id', `aIt_${index+1}`);
            aIt.className = "narrow-screen";
            aIt.textContent = AtName[index];
            attack_Title.prepend(aIt);
            //
            let attackItem = document.createElement('h5');
            attackItem.setAttribute('id', `attackItem_${index+1}`);
            attackItem.className = "wide-screen";
            attackItem.textContent = item.longName;
            attack_Title.append(attackItem);
        //
        let attack_Chars = document.createElement('div');
        // attack_Chars.setAttribute('id', `attack_Chars`);
        attack_Chars.className = "row lightcell no-margin";
        attackBlock.append(attack_Chars); // вставить "attack_Chars" в конец <`attackBlock_#`>
            //
            if (!item.meel) { // если оружие даленее — вставляем блок Дальности
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
                    // rg_Text.setAttribute('id', `range_${index+1}`);
                    rg_Text.className = "narrow-screen";
                    rg_Text.textContent = 'Далн.:';
                    rg_Title_col.append(rg_Text);
                    //
                    let rg_Value = document.createElement('input');
                    rg_Value.setAttribute('id', `attack_${index+1}RgVal`);
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
                    rg_range.setAttribute('id', `attack_${index+1}Range`);
                    rg_range.className = "input-light range";
                    rg_range.type = "range";
                    rg_range.min = rangeMin;
                    rg_range.max = rangeMax;
                    rg_range.value = 0;
                    rg_range_col.append(rg_range);
                    // расчет и применение Штрафа за дальность
                    rg_range.addEventListener("change", function changeRange() {
                        range = document.getElementById(`attack_${index+1}Range`).value;
                        document.getElementById(`attack_${index+1}RgVal`).value = range;
                        penalty = Math.trunc(range / Rang[index]);
                        // console.log(range / Rang[index]);
                        attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" :
                         ((AMod[index]-penalty) >= 0)
                         ? `${ADice[index]}D+`+`${AMod[index]-penalty}=`
                         : `${ADice[index]}D`+`${AMod[index]-penalty}=`;
                    });
                    // — — вставляем блок прицеливания
                let aiming_Title_col = document.createElement('div');
                aiming_Title_col.setAttribute('id', `aiming_${index+1}`);
                aiming_Title_col.className = "col-8 no-padding";
                attack_Chars.append(aiming_Title_col);
                    // За каждое нажатие кнопки "Прицеливание" отнимается по 1 ОД от текущего значения,
                    // но добавляется +2 к меткости (Атаке)
                    // и +0 к урону (резервируем сразу для способности) к следующей атаке по цели.
                    AimAP[index] = 1; // aiming Action Points value
                    AimMax[index] = 4; // aiming Maxinum Score
                    AimAmn[index] = 0; // aiming Amount
                    AimBon[index] = 2; // aiming Bonus
                    AimDam[index] = 0; // aiming Damage Bonus
                    let aiming_Title = document.createElement('h6');
                    aiming_Title.className = "condensed";
                    aiming_Title.textContent = 'Прицеливание:';
                    aiming_Title_col.append(aiming_Title);
                //  aiming Action Points
                let aiming_AP_col = document.createElement('div');
                aiming_AP_col.className = "col-2 min-padding";
                attack_Chars.append(aiming_AP_col);
                    // aiming Action Points
                    let aiming_AP = document.createElement('span');
                    aiming_AP.className = "ah7";
                    aiming_AP.textContent = `${AimAP[index]}ОД`;
                    aiming_AP_col.append(aiming_AP);
                //
                let aiming_amount_col = document.createElement('div');
                aiming_amount_col.className = "col-2 min-padding";
                attack_Chars.append(aiming_amount_col);
                    //
                    let aiming_amount = document.createElement('span');
                    aiming_amount.setAttribute('id', `aiming_amount_${index+1}`);
                    aiming_amount.className = "ah7";
                    aiming_amount.textContent = `${AimAmn[index]}/${AimMax[index]}`;
                    aiming_amount_col.append(aiming_amount);
                    // добавление бонуса за Прицеливание к Атаке
                    // aiming Action Points value // aiming Maxinum Score // aiming Amount // aiming Bonus // aiming Damage Bonus
                aiming_Title_col.addEventListener("click", function addAimingBonus() {
                    if ((AttOpt[index] > -1) && (round_AP > 0)) {
                        if (AimAmn[index] < AimMax[index]) {
                            AimAmn[index]++;
                            AMod[index] = AMod[index] + AimBon[index];
                            DMod[index] = DMod[index] + AimDam[index];
                            round_AP = round_AP - AimAP[index];
                            document.getElementById('actionPointsResult').value = round_AP;
                            aiming_amount.textContent = `${AimAmn[index]}/${AimMax[index]}`;
                            // attack_Roll.textContent = `${ADice[index]}D+`+`${AMod[index]}=`;
                            attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" :
                                ((AMod[index]-penalty) >= 0) ? `${ADice[index]}D+`+`${AMod[index]-penalty}=` : `${ADice[index]}D`+`${AMod[index]-penalty}=`;
                            if (AimAmn[index] === AimMax[index]) aiming_Title_col.className = "col-8 no-padding";
                        }
                    }
                });
            }
            //
            let aP_ValFld = document.createElement('div');
            aP_ValFld.className = "col-1 no-padding";
            attack_Chars.append(aP_ValFld);
            let aP_Ttl = document.createElement('div');
            aP_Ttl.className =    "col-3 no-padding";
            attack_Chars.append(aP_Ttl);
                //
                let l_AP_a = document.createElement('h6');
                l_AP_a.setAttribute('id', `l_AP_a${index+1}`);
                l_AP_a.className = "narrow-screen";
                l_AP_a.textContent = 'ОД,';
                aP_Ttl.append(l_AP_a);
                let l_ActionPoints_a = document.createElement('h6');
                l_ActionPoints_a.setAttribute('id', `l_ActionPoints_a${index+1}`);
                l_ActionPoints_a.className = "wide-screen";
                l_ActionPoints_a.textContent = 'Очков Действий:';
                aP_Ttl.append(l_ActionPoints_a);
            //
            let att_Ttl = document.createElement('div');
            att_Ttl.className = "col-3 col-lg-7 no-padding";
            attack_Chars.append(att_Ttl);
            let att_Rll = document.createElement('div');
            att_Rll.className = "col-3 col-lg-3 no-padding";
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
                //
                let attack_Result = document.createElement('input');
                attack_Result.setAttribute('id', `attack_${index+1}Result`);
                attack_Result.className = "input-light out-h6";
                attack_Result.type = "text";
                attack_Result.size = "2";
                attack_Result.readonly = "readonly";
                attack_Result.placeholder = "AT";
                att_Res.append(attack_Result);
            //
            let at_Name = document.createElement('div');
            at_Name.className = "col-4 col-lg-7 no-padding";
            attack_Chars.append(at_Name);
            let dmg_Ttl = document.createElement('div');
            dmg_Ttl.className = "col-3 col-lg-7 no-padding";
            attack_Chars.append(dmg_Ttl);
            let dmg_Rll = document.createElement('div');
            dmg_Rll.className = "col-3 col-lg-3 no-padding";
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
                //
                let damage_Result = document.createElement('input');
                damage_Result.setAttribute('id', `damage_${index+1}Result`);
                damage_Result.className = "input-light out-h6";
                damage_Result.type = "text";
                damage_Result.size = "2";
                damage_Result.readonly = "readonly";
                damage_Result.placeholder = "DM";
                dmg_Res.append(damage_Result);
            //
            EnchaT[index] = false;
            EnchAP[index] = 0;
            EnchAD[index] = 0;
            EnchAM[index] = 0;
            EnchDD[index] = 0;
            EnchDM[index] = 0;
            if ("enchantments" in item) { // если в оружии есть Зачарование
                // ставим поля для Зачарования
                let enchantments_Ttl = document.createElement('div');
                enchantments_Ttl.className = "col-6 col-lg-5 no-padding";
                attack_Chars.append(enchantments_Ttl);
                let enchantments_Sel = document.createElement('div');
                enchantments_Sel.className = "col-6 col-lg-5 no-padding";
                attack_Chars.append(enchantments_Sel);
                    //
                    let l_ench = document.createElement('h6');
                    l_ench.setAttribute('id', `l_ench_${index+1}`);
                    l_ench.className = "ah7 narrow-screen";
                    l_ench.textContent = 'Зачарование:';
                    enchantments_Ttl.append(l_ench);
                    let ench_Select = document.createElement('select');
                    ench_Select.setAttribute('id', `enchSelect_${index+1}`);
                    ench_Select.className = "select-light out-h6";
                    ench_Select.name = `enchSelect_${index+1}`;
                    ench_Select.size = "1";
                    ench_Select.placeholder = "Choose Enchantments";
                    enchantments_Sel.prepend(ench_Select);
                        let ench_0ption = document.createElement('option');
                        ench_0ption.setAttribute('id', `enchOption_${index+1}0`);
                        ench_0ption.className = "out-h6";
                        ench_0ption.selected = "selected";
                        ench_0ption.disabled = "disabled";
                        ench_0ption.value = `0`;
                        // ReLd[index] = item.reload;
                        ench_0ption.textContent = `активировать`; // , 0 ОД
                        ench_Select.append(ench_0ption);
                        item.enchantments.forEach( function fillEnchantmentsSelect(enchantment, endex) { // option`s
                            let ench_option = document.createElement('option');
                            ench_option.setAttribute('id', `enchOption_${index+1}${endex+1}`);
                            ench_option.className = "out-h6";
                            ench_option.value = `${endex+1}`;
                            EnchNm[index] = enchantment.enchName;
                            let ench_text = EnchNm[index];
                            EnchAo[index][endex] = ('amount' in enchantment) ? enchantment.amount : '∞';
                            ench_text = ('amount' in enchantment) ? `${EnchNm[index]} [${EnchAo[index][endex]}]` : ench_text;
                            ReEnch[index][endex] = ('reEnch' in enchantment) ? enchantment.reEnch : 0;
                            ench_text = ('reEnch' in enchantment) ? `${EnchNm[index]}, ${ReEnch[index][endex]} ОД` : ench_text;
                            ench_option.textContent = ench_text;
                            ench_Select.append(ench_option);
                        });
                        //
                        EnchOpt[index] = document.getElementById(`enchSelect_${index+1}`).value -1;
                        // добавляем реакцию по выбору Зачарования
                        ench_Select.addEventListener("change", function fillEnchantment() {
                            EnchOpt[index] = ench_Select.value -1;
                            if (EnchOpt[index] > -1) { // если выбрано какое-то Зачарование
                                EnchaT[index] = true;
                                EnchAo[index][EnchOpt[index]] = (EnchAo[index][EnchOpt[index]] === '∞') ? '∞' : EnchAo[index][EnchOpt[index]]-1;
                                EnchNm[index] = item.enchantments[EnchOpt[index]].enchName;
                                let ench_text = EnchNm[index];
                                ench_text = (EnchAo[index][EnchOpt[index]] !== '∞') ? ench_text + ` [${EnchAo[index][EnchOpt[index]]}]` : ench_text;
                                ench_text = (ReEnch[index][EnchOpt[index]] !== 0) ? ench_text + `, ${ReEnch[index][EnchOpt[index]]} ОД` : ench_text;
                                document.getElementById(`enchOption_${index+1}${EnchOpt[index]+1}`).textContent = ench_text;
                                // enchantments Action Points
                                if ("actionPoints" in item.enchantments[EnchOpt[index]]) EnchAP[index] = item.enchantments[EnchOpt[index]].actionPoints;
                                else EnchAP[index] = 0;
                                actionPoints.textContent = AttAP[index] - EnchAP[index];
                                // enchantments Attack Dice
                                if ("attackDice" in item.enchantments[EnchOpt[index]]) EnchAD[index] = item.enchantments[EnchOpt[index]].attackDice;
                                else EnchAD[index] = 0; // enchantments Attack Modifinder
                                if ("attackMod" in item.enchantments[EnchOpt[index]]) EnchAM[index] = item.enchantments[EnchOpt[index]].attackMod;
                                else EnchAM[index] = 0;
                                attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" : `${ADice[index]+EnchAD[index]}D+`+`${AMod[index]+EnchAM[index]}=`;
                                // enchantments Damage Dice
                                if ("damageDice" in item.enchantments[EnchOpt[index]]) EnchDD[index] = item.enchantments[EnchOpt[index]].damageDice;
                                else EnchDD[index] = 0; // enchantments Damage Modifinder
                                if ("damageMod"  in item.enchantments[EnchOpt[index]]) EnchDM[index] = item.enchantments[EnchOpt[index]].damageMod;
                                else EnchDM[index] = 0;
                                damage_Roll.textContent = `${DDice[index]+EnchDD[index]}D+`+`${DMod[index]+EnchDM[index]}=`;
                                //
                                // if ("criticalChance" in item.wParts[AttOpt[index]]) Crit[index] = item.wParts[AttOpt[index]].criticalChance;
                                // else Crit[index] = item.criticalChance;
                                // criticalChance.textContent = Crit[index];
                                // if ("criticalDamage" in item.wParts[AttOpt[index]]) CrDam[index] = item.wParts[AttOpt[index]].criticalDamage;
                                // else CrDam[index] = item.criticalDamage;
                                // criticalDamage.textContent = CrDam[index];
                                // if ("armorPiercing" in item.wParts[AttOpt[index]]) ArmPi[index] = item.wParts[AttOpt[index]].armorPiercing;
                                // else ArmPi[index] = item.armorPiercing;
                                // armorPiercing.textContent = ArmPi[index];
                                // if ("knockingDown" in item.wParts[AttOpt[index]]) KnDwn[index] = item.wParts[AttOpt[index]].knockingDown;
                                // else KnDwn[index] = item.knockingDown;
                                // knockingDown.textContent = ((KnDwn[index] > 9) || (KnDwn[index] <= 0)) ? KnDwn[index] : `+${KnDwn[index]}`;
                                //
                                round_AP = round_AP - ReEnch[index][EnchOpt[index]];
                                document.getElementById('actionPointsResult').value = round_AP;
                            }
                        });
            }
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
                l_CC.className = "ah7 narrow-screen";
                l_CC.textContent = 'ШК:';
                crch_Ttl.prepend(l_CC);
                let l_CriticalChance = document.createElement('h6');
                l_CriticalChance.setAttribute('id', `l_CriticalChance_${index+1}`);
                l_CriticalChance.className = "wide-screen";
                l_CriticalChance.textContent = 'Шанс Крита:';
                crch_Ttl.append(l_CriticalChance);
                //
                let l_CD = document.createElement('h6');
                l_CD.setAttribute('id', `l_CD_${index+1}`);
                l_CD.className = "ah7 narrow-screen";
                l_CD.textContent = 'КУ:';
                crdm_Ttl.prepend(l_CD);
                let l_CriticalDamage = document.createElement('h6');
                l_CriticalDamage.setAttribute('id', `l_CriticalDamage_${index+1}`);
                l_CriticalDamage.className = "wide-screen";
                l_CriticalDamage.textContent = 'Крит Урон:';
                crdm_Ttl.append(l_CriticalDamage);
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
                l_APr.className = "ah7 narrow-screen";
                l_APr.textContent = 'ББ:';
                arpr_Ttl.prepend(l_APr);
                let l_ArmorPiercing = document.createElement('h6');
                l_ArmorPiercing.setAttribute('id', `l_ArmorPiercing_${index+1}`);
                l_ArmorPiercing.className = "wide-screen";
                l_ArmorPiercing.textContent = 'Броне-Бойн.:';
                arpr_Ttl.append(l_ArmorPiercing);
                //
                let l_KD = document.createElement('h6');
                l_KD.setAttribute('id', `l_KD_${index+1}`);
                l_KD.className = "ah7 narrow-screen";
                l_KD.textContent = 'Сб:';
                kndn_Ttl.prepend(l_KD);
                let l_KnockingDown = document.createElement('h6');
                l_KnockingDown.setAttribute('id', `l_KnockingDown_${index+1}`);
                l_KnockingDown.className = "wide-screen";
                l_KnockingDown.textContent = 'Сбивание:';
                kndn_Ttl.append(l_KnockingDown);
                // Заполняем поля значение
                // если оружие простое
                if (!item.complex && item.meel) { // если оружие простое ближнее / рукопашное
                    // console.log(`${item.shortName} is Simple Weapon`);
                    AttOpt[index] = 99;
                    let attName = document.createElement('h6');
                    attName.setAttribute('id', `attName_${index+1}`);
                    attName.className = "";
                    AtName[index] = item.attackName;
                    attName.textContent = AtName[index];
                    at_Name.prepend(attName);
                    // если оружие много-составное ближнее / рукопашное
                } else if (item.meel && item.complex) { // если оружие много-составное ближнее / рукопашное
                    let att_Select = document.createElement('select');
                    att_Select.setAttribute('id', `attSelect_${index+1}`);
                    att_Select.className = "select-light out-h6";
                    att_Select.name = `attSelect_${index+1}`;
                    att_Select.size = "1";
                    att_Select.placeholder = "Choose Attack Type";
                    at_Name.prepend(att_Select);
                        item.wParts.forEach( function fillAttackSelect(wPart, jndex) { // option s
                            let att_option = document.createElement('option');
                            att_option.setAttribute('id', `attOption_${index+1}${jndex+1}`);
                            att_option.className = "out-h6";
                            att_option.value = `${jndex+1}`;
                            att_option.textContent = wPart.attackName;
                            att_Select.append(att_option);
                        });
                        AttOpt[index] = document.getElementById(`attSelect_${index+1}`).value -1;
                        // добавляем реакцию по выбору части оружия / способа атаки
                        att_Select.addEventListener("change", function fillWeaponValues() {
                            AttOpt[index] = att_Select.value -1;
                            if ("actionPoints" in item.wParts[AttOpt[index]]) AttAP[index] = item.wParts[AttOpt[index]].actionPoints;
                            else AttAP[index] = item.actionPoints;
                            //
                            if ("attackDice" in item.wParts[AttOpt[index]]) ADice[index] = item.wParts[AttOpt[index]].attackDice;
                            else ADice[index] = item.attackDice;
                            if ("attackMod" in item.wParts[AttOpt[index]]) AMod[index] = item.wParts[AttOpt[index]].attackMod;
                            else AMod[index]  = item.attackMod;
                            //
                            if ("damageDice" in item.wParts[AttOpt[index]]) DDice[index] = item.wParts[AttOpt[index]].damageDice;
                            else DDice[index] = item.damageDice;
                            if ("damageMod"  in item.wParts[AttOpt[index]]) DMod[index] = item.wParts[AttOpt[index]].damageMod;
                            else DMod[index] = item.damageMod;
                            //
                            actionPoints.textContent = AttAP[index] - EnchAP[index];
                            attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" : `${ADice[index]+EnchAD[index]}D+`+`${AMod[index]+EnchAM[index]}=`;
                            damage_Roll.textContent = `${DDice[index]+EnchDD[index]}D+`+`${DMod[index]+EnchDM[index]}=`;
                            //
                            if ("criticalChance" in item.wParts[AttOpt[index]]) Crit[index] = item.wParts[AttOpt[index]].criticalChance;
                            else Crit[index] = item.criticalChance;
                            criticalChance.textContent = Crit[index];
                            if ("criticalDamage" in item.wParts[AttOpt[index]]) CrDam[index] = item.wParts[AttOpt[index]].criticalDamage;
                            else CrDam[index] = item.criticalDamage;
                            criticalDamage.textContent = CrDam[index];
                            if ("armorPiercing" in item.wParts[AttOpt[index]]) ArmPi[index] = item.wParts[AttOpt[index]].armorPiercing;
                            else ArmPi[index] = item.armorPiercing;
                            armorPiercing.textContent = ArmPi[index];
                            if ("knockingDown" in item.wParts[AttOpt[index]]) KnDwn[index] = item.wParts[AttOpt[index]].knockingDown;
                            else KnDwn[index] = item.knockingDown;
                            knockingDown.textContent = ((KnDwn[index] > 9) || (KnDwn[index] <= 0)) ? KnDwn[index] : `+${KnDwn[index]}`;
                        });
                } else if (!item.meel) { // RanGe Weappon
                    let ammoSelect = document.createElement('select');
                    ammoSelect.setAttribute('id', `attSelect_${index+1}`);
                    ammoSelect.className = "select-light out-h6";
                    ammoSelect.name = `attSelect${index+1}`;
                    ammoSelect.size = "1";
                    ammoSelect.placeholder = "Choose Your Ammo";
                    at_Name.prepend(ammoSelect);
                    if (item.reload) { // ++ ReLoad Action !!
                        let reload_option = document.createElement('option');
                        reload_option.setAttribute('id', `attOption_${index+1}0reload`);
                        reload_option.className = "out-h6";
                        reload_option.selected = "selected";
                        reload_option.disabled = "disabled";
                        reload_option.value = `0`;
                        ReLd[index] = item.reload;
                        reload_option.textContent = `зарядить, ${ReLd[index]} ОД`;
                        ammoSelect.append(reload_option);
                    }
                    if (!item.complex && !item.wParts) { // Range Simple weappon
                        if (!item.wParts) { // если у оружия доступен только один вид боеприпасов
                            let ammunition = document.createElement('option'); // создаём единственную опцию с зарядами / боеприпасами
                            ammunition.setAttribute('id', `attOption_${index+1}1`);
                            ammunition.className = "out-h6";
                            ammunition.value = `1`;
                            ammunition.textContent = item.attackName;
                            ammoSelect.append(ammunition);
                            //
                            if (item.ammunition) { // если у заряда указано (ограничено) количество — зоздаём счетчик зарядов
                                Ammo[index] = item.ammunition;
                                // ammoption.textContent = ammoption.textContent+` [${Ammo[N][index][jndex]}]`;
                                aIt.textContent = item.shortName+` [${Ammo[index]}]`;
                            }
                        }
                    }  else if (item.complex) { // Range && Complexx weappon
                                                // создаём несколько опций для зарядов / боепривасов
                            item.wParts.forEach( function fillAmmoSelect(ammo, jndex) { // option-s Ammo
                                let ammoption = document.createElement('option');
                                ammoption.setAttribute('id', `attOption_${index+1}${jndex+1}`);
                                ammoption.className = "out-h6";
                                ammoption.value = `${jndex+1}`;
                                if ("ammunition" in ammo) Ammos[index][jndex] = ammo.ammunition;
                                ammoption.textContent = ("ammunition" in ammo)
                                 ? `${ammo.attackName} [${Ammos[index][jndex]}]`
                                 :    ammo.attackName;
                                ammoSelect.append(ammoption);
                            });
                    }

                        AttOpt[index] = document.getElementById(`attSelect_${index+1}`).value -1;
                        console.log(AttOpt[index]);
                        Load[index] = (AttOpt[index] > -1) ? true : false;
                        document.getElementById(`aiming_${index+1}`).className = (Load[index]) ? "col-8 no-padding aiming-button" : "col-8 no-padding";
                        // добавляем реакцию по выбору боевого заряда в дистанционном оружии
                        ammoSelect.addEventListener("change", function fillAmmoValues() {
                            AttOpt[index] = ammoSelect.value -1;
                            if ("actionPoints" in item.wParts[AttOpt[index]]) AttAP[index] = item.wParts[AttOpt[index]].actionPoints;
                            else AttAP[index] = item.actionPoints;
                            //
                            if ("attackDice" in item.wParts[AttOpt[index]]) ADice[index] = item.wParts[AttOpt[index]].attackDice;
                            else ADice[index] = item.attackDice;
                            if ("attackMod"  in item.wParts[AttOpt[index]]) AMod[index] = item.wParts[AttOpt[index]].attackMod;
                            else AMod[index] = item.attackMod;
                            //
                            AimAmn[index] = 0;
                            //
                            if ("damageDice" in item.wParts[AttOpt[index]]) DDice[index] = item.wParts[AttOpt[index]].damageDice;
                            else DDice[index] = item.damageDice;
                            if ("damageMod"  in item.wParts[AttOpt[index]]) DMod[index] = item.wParts[AttOpt[index]].damageMod;
                            else DMod[index] = item.damageMod;
                            //
                            if ("criticalChance" in item.wParts[AttOpt[index]]) Crit[index] = item.wParts[AttOpt[index]].criticalChance;
                            else Crit[index] = item.criticalChance;
                            if ("criticalDamage" in item.wParts[AttOpt[index]]) CrDam[index] = item.wParts[AttOpt[index]].criticalDamage;
                            else CrDam[index] = item.criticalDamage;
                            if ("armorPiercing" in item.wParts[AttOpt[index]]) ArmPi[index] = item.wParts[AttOpt[index]].armorPiercing;
                            else ArmPi[index] = item.armorPiercing;
                            if ("knockingDown" in item.wParts[AttOpt[index]]) KnDwn[index] = item.wParts[AttOpt[index]].knockingDown;
                            else KnDwn[index] = item.knockingDown;
                            //
                            actionPoints.textContent = AttAP[index] - EnchAP[index];
                            // attack_Roll.textContent = `${ADice[index]}D+`+`${AMod[index]}=`;
                            range = document.getElementById(`attack_${index+1}Range`).value;
                            document.getElementById(`attack_${index+1}RgVal`).value = range;
                            penalty = Math.trunc(range / Rang[index]);
                            //
                            document.getElementById(`aiming_amount_${index+1}`).textContent = `${AimAmn[index]}/${AimMax[index]}`;
                            //
                            attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" :
                                ((AMod[index]+EnchAD[index]-penalty) >= 0) ? `${ADice[index]+EnchAD[index]}D+`+`${AMod[index]+EnchAD[index]-penalty}=`
                                : `${ADice[index]+EnchAD[index]}D`+`${AMod[index]+EnchAD[index]-penalty}=`;
                            // console.log(range / Rang[index]);
                            damage_Roll.textContent = `${DDice[index]+EnchDD[index]}D+`+`${DMod[index]+EnchDM[index]}=`;
                            criticalChance.textContent = Crit[index];
                            criticalDamage.textContent = CrDam[index];
                            armorPiercing.textContent = ArmPi[index];
                            knockingDown.textContent = ((KnDwn[index] > 9) || (KnDwn[index] <= 0)) ? KnDwn[index] : `+${KnDwn[index]}`;
                            // перезарядка :: учёт Очков Действий
                            let reload;
                            if (Load[index]) reload = 1;
                            else reload = ReLd[index];
                            round_AP = round_AP - reload;
                            document.getElementById('actionPointsResult').value = round_AP;
                            // document.getElementById(`attOption_${index+1}${o+1}`).disabled = "disabled";
                            Load[index] = true;
                            if ((round_AP > 0) && (AttOpt[index] > -1) && (AimAmn[index] < AimMax[index])) {
                                document.getElementById(`aiming_${index+1}`).className = "col-8 no-padding aiming-button";
                            }
                        });
                    }
                //
                let actionPoints = document.createElement('p');
                actionPoints.setAttribute('id', `actionPoints_a${index+1}`);
                actionPoints.className = "ah7";
                let attack_Roll = document.createElement('p');
                attack_Roll.setAttribute('id', `attack_${index+1}Roll`);
                attack_Roll.className = "ah7";
                //
                let damage_Roll = document.createElement('p');
                damage_Roll.setAttribute('id', `damage_${index+1}Roll`);
                damage_Roll.className = "ah7";
                //
                let criticalChance = document.createElement('p');
                criticalChance.setAttribute('id', `criticalChance_${index+1}`);
                criticalChance.className = "ah7";
                let criticalDamage = document.createElement('p');
                criticalDamage.setAttribute('id', `criticalDamage_${index+1}`);
                criticalDamage.className = "ah7";
                let armorPiercing = document.createElement('p');
                armorPiercing.setAttribute('id', `armorPiercing_${index+1}`);
                armorPiercing.className = "ah7";
                let knockingDown = document.createElement('p');
                knockingDown.setAttribute('id', `knockingDown_${index+1}`);
                knockingDown.className = "ah7";
                // console.log(AttOpt[index]);
                // console.log(item.wParts);
                if (AttOpt[index] === -1) {
                    AttAP[index] = "–";
                    ADice[index] = "–";
                    AMod[index]  = "–";
                    DDice[index] = "–";
                    DMod[index]  = "–";
                    Crit[index]  = "–";
                    CrDam[index] = "–";
                    ArmPi[index] = "–";
                    KnDwn[index] = "–";
                } else if (item.wParts === undefined) {
                    AttAP[index] = item.actionPoints;
                    ADice[index] = item.attackDice;
                    AMod[index] = item.attackMod;
                    DDice[index] = item.damageDice;
                    DMod[index] = item.damageMod;
                    Crit[index] = item.criticalChance;
                    CrDam[index] = item.criticalDamage;
                    ArmPi[index] = item.armorPiercing;
                    KnDwn[index] = item.knockingDown;
                } else {
                    if ("actionPoints" in item.wParts[AttOpt[index]]) AttAP[index] = item.wParts[AttOpt[index]].actionPoints;
                    else AttAP[index] = item.actionPoints;
                    if ("attackDice" in item.wParts[AttOpt[index]]) ADice[index] = item.wParts[AttOpt[index]].attackDice;
                    else ADice[index] = item.attackDice;
                    if ("attackMod"  in item.wParts[AttOpt[index]]) AMod[index] = item.wParts[AttOpt[index]].attackMod;
                    else AMod[index] = item.attackMod;
                    if ("damageDice" in item.wParts[AttOpt[index]]) DDice[index] = item.wParts[AttOpt[index]].damageDice;
                    else DDice[index] = item.damageDice;
                    if ("damageMod"  in item.wParts[AttOpt[index]]) DMod[index] = item.wParts[AttOpt[index]].damageMod;
                    else DMod[index] = item.damageMod;
                    if ("criticalChance" in item.wParts[AttOpt[index]]) Crit[index] = item.wParts[AttOpt[index]].criticalChance;
                    else Crit[index] = item.criticalChance;
                    if ("criticalDamage" in item.wParts[AttOpt[index]]) CrDam[index] = item.wParts[AttOpt[index]].criticalDamage;
                    else CrDam[index] = item.criticalDamage;
                    if ("armorPiercing" in item.wParts[AttOpt[index]]) ArmPi[index] = item.wParts[AttOpt[index]].armorPiercing;
                    else ArmPi[index] = item.armorPiercing;
                    if ("knockingDown" in item.wParts[AttOpt[index]]) KnDwn[index] = item.wParts[AttOpt[index]].knockingDown;
                    else KnDwn[index] = item.knockingDown;
                }
                actionPoints.textContent = AttAP[index];
                attack_Roll.textContent = (AMod[index] === "–") ? `${ADice[index]}D`+`${AMod[index]}` :
                    (ADice[index] === 'auto') ? "avto" :
                    ((AMod[index]-penalty) >= 0)
                        ? `${ADice[index]}D+`+`${AMod[index]-penalty}=`
                        : `${ADice[index]}D`+`${AMod[index]-penalty}=`;
                damage_Roll.textContent = (DMod[index] === "–") ? `${DDice[index]}D`+`${DMod[index]}` : `${DDice[index]}D+`+`${DMod[index]}=`;
                criticalChance.textContent = Crit[index];
                criticalDamage.textContent = CrDam[index];
                armorPiercing.textContent = ArmPi[index];
                knockingDown.textContent = (KnDwn[index] === "–") ? KnDwn[index] :
                    ((KnDwn[index] > 9) || (KnDwn[index] <= 0)) ? KnDwn[index] : `+${KnDwn[index]}`;
                //
                aP_ValFld.append(actionPoints);
                att_Rll.append(attack_Roll);
                dmg_Rll.append(damage_Roll);
                crch_Val.append(criticalChance);
                crdm_Val.append(criticalDamage);
                arpr_Val.append(armorPiercing);
                kndn_Val.append(knockingDown);
                //
        // добавляем реакцию по клику на Oruzhii
        document.getElementById(`aIt_${index+1}`).parentNode.addEventListener("click", function attackByWeappon() {
            if (round_AP > 0) {
                if (AttAP[index] !== "–") {
                    let attack = (ADice[index] === 'auto') ? "avto" : diceRoller((ADice[index]+EnchAD[index]), 6, (AMod[index]+EnchAM[index]-penalty));
                    console.log(EnchAD[index]);
                    document.getElementById(`attack_${index+1}Result`).value = attack;
                    //
                    let damage = diceRoller((DDice[index]+EnchDD[index]), 6, (DMod[index]+EnchDM[index]));
                    document.getElementById(`damage_${index+1}Result`).value = damage;
                    //
                    round_AP = round_AP - (AttAP[index] - EnchAP[index]);
                    document.getElementById('actionPointsResult').value = round_AP;
                    //
                    let knockingDown = damage + KnDwn[index];
                    // console.log(document.getElementById(`knockingDown_${index+1}`)); // knockingDown_1
                    document.getElementById(`knockingDown_${index+1}`).textContent = knockingDown;
                    //
                    if (!item.meel) {  // weapon range
                        AimAmn[index] = 0; // Обнуление Прицеливания
                        document.getElementById(`aiming_amount_${index+1}`).textContent = `${AimAmn[index]}/${AimMax[index]}`;
                        if (item.complex) {
                            if ("attackMod" in item.wParts[AttOpt[index]]) AMod[index] = item.wParts[AttOpt[index]].attackMod;
                            else AMod[index]  = item.attackMod;
                            if ("damageMod"  in item.wParts[AttOpt[index]]) DMod[index] = item.wParts[AttOpt[index]].damageMod;
                            else DMod[index] = item.damageMod;
                        } else {
                            AMod[index]  = item.attackMod;
                            DMod[index] = item.damageMod;
                        }
                        //
                        if ((round_AP > 0) && (AttOpt[index] > -1)) {
                            document.getElementById(`aiming_${index+1}`).className = "col-8 no-padding aiming-button";
                        }
                        if ("ammunition" in item) {
                            Ammo[index] = Ammo[index] - 1;
                            document.getElementById(`aIt_${index+1}`).textContent = `${item.shortName} [${Ammo[index]}]`;
                            //
                            if (Ammo[index] === 0) {
                                document.getElementById(`attOption_${index+1}${AttOpt[index]+1}`).disabled = "disabled";
                                document.getElementById(`attOption_${index+1}${AttOpt[index]+1}`).remove();
                                document.getElementById(`enchOption_${index+1}0`).parentNode.parentNode.parentNode.style.display = 'none';
                                // document.getElementById(`enchOption_${index+1}0`).parentNode.parentNode.parentNode.previousSibling.style.display = 'none';
                                //
                                AttAP[index] = "–";
                                ADice[index] = "–";
                                AMod[index]  = "–";
                                DDice[index] = "–";
                                DMod[index]  = "–";
                                //
                                this.removeEventListener('click', attackByWeappon);
                            }
                        } else if ("wParts" in item) {
                            if ("ammunition" in item.wParts[AttOpt[index]]) {
                                Ammos[index][AttOpt[index]] = Ammos[index][AttOpt[index]] - 1;
                                document.getElementById(`attOption_${index+1}${AttOpt[index]+1}`).textContent = `${item.wParts[AttOpt[index]].attackName} [${Ammos[index][AttOpt[index]]}]`;
                                if (Ammos[index][AttOpt[index]] === 0) {
                                    document.getElementById(`attOption_${index+1}${AttOpt[index]+1}`).disabled = "disabled";
                                    document.getElementById(`attOption_${index+1}${AttOpt[index]+1}`).remove();
                                    //
                                    // AttAP[index] = "–";
                                    // ADice[index] = "–";
                                    // AMod[index]  = "–";
                                    // DDice[index] = "–";
                                    // DMod[index]  = "–";
                                    // Crit[index]  = "–";
                                    // CrDam[index] = "–";
                                    // ArmPi[index] = "–";
                                    // KnDwn[index] = "–";
                                    //
                                    this.removeEventListener('click', attackByWeappon);
                                }
                            }
                        }
                    }
                    if (!item.meel && item.reload) {
                        document.getElementById(`attOption_${index+1}0reload`).selected = "selected";
                        Load[index] = false;
                        //
                        AttAP[index] = "–";
                        ADice[index] = "–";
                        AMod[index]  = "–";
                        DDice[index] = "–";
                        DMod[index]  = "–";
                        // Crit[index]  = "–";
                        // CrDam[index] = "–";
                        // KnDwn[index] = "–";
                    }
                    //
                    if ("enchantments" in item) {
                        document.getElementById(`enchOption_${index+1}0`).selected = "selected";
                        EnchaT[index] = false;
                        EnchAD[index] = 0;
                        EnchAM[index] = 0;
                        EnchDD[index] = 0;
                        EnchDM[index] = 0;
                        if (EnchAo[index][EnchOpt[index]] === 0) {
                            document.getElementById(`enchOption_${index+1}${EnchOpt[index]+1}`).disabled = "disabled";
                            document.getElementById(`enchOption_${index+1}${EnchOpt[index]+1}`).remove();
                        }
                    }
                    //
                    actionPoints.textContent = AttAP[index];
                    attack_Roll.textContent = (ADice[index] === 'auto') ? "avto" :
                        (AMod[index] === "–") ? `${ADice[index]}D${AMod[index]}` :
                        ((AMod[index]-penalty) >= 0) ? `${ADice[index]}D+`+`${AMod[index]-penalty}=` : `${ADice[index]}D`+`${AMod[index]-penalty}=`;
                    damage_Roll.textContent = (DMod[index] === "–") ? `${DDice[index]}D${DMod[index]}` : `${DDice[index]}D+${DMod[index]}=`;
                    criticalChance.textContent = Crit[index];
                    criticalDamage.textContent = CrDam[index];
                    armorPiercing.textContent = ArmPi[index];
                    // document.getElementById(`knockingDown_${index+1}`).textContent = KnDwn[index];
                    //
                    if (round_AP <= 0) {
                        for (let i = 0; i < attackList.children.length; i++) {
                            attackList.children[i].className = "";
                        }
                        for (let i = 0; i < defenceList.children.length; i++) {
                            defenceList.children[i].className = "";
                        }
                    }
                }
            }
        });
    });
    // create Defence BlockS by function from aRRay
    CHAR.defence.forEach( function createDefenceBlock(item, index) {
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
            dShTt.innerHTML = item.shortName;
            defence_Title.prepend(dShTt);
            //
            let defenceTitle = document.createElement('h5');
            defenceTitle.setAttribute('id', `defenceTitle_${index+1}`);
            defenceTitle.className = "wide-screen";
            defenceTitle.textContent = item.longName;
            defence_Title.append(defenceTitle);
        //
        let defence_Chars = document.createElement('div');
        defence_Chars.className = "row lightcell justify-content-start no-margin";
        defenceBlock.append(defence_Chars); // вставить "defence_Chars" в конец <`defencekBlock_#`>
            //
            let dP_ValFld = document.createElement('div');
            dP_ValFld.className = "col-1 no-padding";
            defence_Chars.prepend(dP_ValFld);
            let dP_Ttl = document.createElement('div');
            dP_Ttl.className    = "col-2 no-padding";
            defence_Chars.append(dP_Ttl);
                //
                let l_AP_d = document.createElement('h6');
                l_AP_d.setAttribute('id', `l_AP_d${index+1}`);
                l_AP_d.className = "narrow-screen";
                l_AP_d.textContent = 'ОД,';
                dP_Ttl.prepend(l_AP_d);
                let l_ActionPoints_d = document.createElement('h6');
                l_ActionPoints_d.setAttribute('id', `l_ActionPoints_d${index+1}`);
                l_ActionPoints_d.className = "wide-screen";
                l_ActionPoints_d.textContent = 'Очков Действий:';
                dP_Ttl.append(l_ActionPoints_d);
                let actionPoints = document.createElement('p');
                actionPoints.setAttribute('id', `actionPoints_d${index+1}`);
                actionPoints.className = "ah6";
                DefAP[index] = item.actionPoints;
                actionPoints.textContent = DefAP[index];
                dP_ValFld.append(actionPoints);
            //
            let def_Ttl = document.createElement('div');
            def_Ttl.className = "col-5 no-padding";
            defence_Chars.append(def_Ttl);
            let def_Bon = document.createElement('div');
            def_Bon.className = "col-1 no-padding";
            defence_Chars.append(def_Bon);
                //
                let l_Skill = document.createElement('h6');
                l_Skill.setAttribute('id', `l_defSkill_${index+1}`);
                l_Skill.className = "";
                l_Skill.innerHTML = `${item.shortName}:`;
                def_Ttl.prepend(l_Skill);
                let defSkillBon = document.createElement('p');
                defSkillBon.setAttribute('id', `defSkillBon_${index+1}`);
                defSkillBon.className = "ah6";
                DeVal[index] = item.parry;
                defSkillBon.textContent = DeVal[index];
                def_Bon.append(defSkillBon);
            //
            // let dAm_Ttl = document.createElement('div');
            // dAm_Ttl.className = "col-10 no-padding";
            // defence_Chars.append(dAm_Ttl);
            let dAm_Amnt = document.createElement('div');
            dAm_Amnt.className = "col-2 no-padding";
            defence_Chars.append(dAm_Amnt);
                //
                // let l_defAmount = document.createElement('h6');
                // l_defAmount.setAttribute('id', `l_defAmount_${index+1}`);
                // l_defAmount.className = "";
                // l_defAmount.textContent = 'Количество:';
                // dAm_Ttl.prepend(l_defAmount);
                let defenceAmount = document.createElement('p');
                defenceAmount.setAttribute('id', `defenceAmount_${index+1}`);
                defenceAmount.className = "ah6";
                DeAmt[index] = 0;
                defenceAmount.textContent = '×0';
                // let defenceAmount = document.createElement('input');
                // defenceAmount.setAttribute('id', `defenceAmount_${index+1}`);
                // defenceAmount.className = "input-light out-h61";
                // defenceAmount.type = "text";
                // defenceAmount.size = "1";
                // defenceAmount.readonly = "readonly";
                // defenceAmount.placeholder = "X";
                dAm_Amnt.append(defenceAmount);
        // добавляем реакцию по клику на 3ashite
        document.getElementById(`defenceBlock_${index+1}`).addEventListener("click", () => {
            //
            if (round_AP > 0) {
                DeAmt[index]++;
                document.getElementById(`defenceAmount_${index+1}`).textContent = `×${DeAmt[index]}`;
                round_AP = round_AP - DefAP[index];
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
document.getElementById('Initiative').parentNode.addEventListener("click", () => {
    if (initiative === null) {
        initiative = diceRoller(INI_D6, 6, INI_MD);
        document.getElementById('initiativeResult').value = initiative;
        document.getElementById('Initiative').className = "darkcell"; //$('#Initiative').removeClass('initiative');
        InitiativeLog.push(initiative);
        console.log(InitiativeLog);
    }
})
//
document.getElementById('end_round').addEventListener( "click", () => {
    round_AP = (round_AP > 0) ? MAX_AP : round_AP + MAX_AP;
    document.getElementById('actionPointsResult').value = round_AP;
    endRound();
});
document.getElementById('end_fight').addEventListener( "click", () => {
    document.getElementById('initiativeResult').value = initiative = null;
    document.getElementById('actionPointsResult').value = MAX_AP;
    // document.getElementById('attack_1Result').value = null;
    // document.getElementById('damage_1Result').value = null;
    endRound();
    // document.getElementById('attackBlock_1').className = "block-button"; //$('#weaponBlock_1').addClass('block-button');
});

function endRound() {
    for (let i = 0; i < attackList.getElementsByTagName('input').length; i++) { // перезаполняем установки дальности стрельбы
        if (document.getElementById(`attack_${i+1}Range`)) {
            let range = document.getElementById(`attack_${i+1}Range`).value;
            if (document.getElementById(`attack_${i+1}Range`) == null) {
                attackList.getElementsByTagName('input')[i].value = null;
            } else {
                document.getElementById(`attack_${i+1}RgVal`).value = range;
                document.getElementById(`attack_${i+1}Range`).value = range;
            }
        }

    }
    for (let i = 0; i < defenceList.children.length; i++) { // обнуляем счётчики защит
        // defenceList.getElementsByTagName('input')[i].value = null;
        DeAmt[i] = 0;
        document.getElementById(`defenceAmount_${i+1}`).textContent = '×0';
    }
    for (let i = 0; i < attackList.children.length; i++) { // перезаписываем бонусы Сбивания-с-ног
        let item = CHAR.attack[i];
        if ("knockingDown" in CHAR.attack[i]) {
            KnDwn[i] = item.knockingDown;
        }
        if ("wParts" in CHAR.attack[i]) {
            let o = document.getElementById(`attSelect_${i+1}`).value - 1;
            // console.log('i=',i,'o=',o);
            if (o === -1) KnDwn[i] = '–';
            else {
                if ("knockingDown" in item.wParts[o]) KnDwn[i] = item.wParts[o].knockingDown;
                else KnDwn[i] = item.knockingDown;
            }
        }
        document.getElementById(`knockingDown_${i+1}`).textContent = ((KnDwn[i] === '–') || (KnDwn[i] > 9) || (KnDwn[i] <= 0)) ? `${KnDwn[i]}` : `+${KnDwn[i]}`;
    }
    if (round_AP > 0) { // снова включаем кнопки атаки
        for (let i = 0; i < attackList.children.length; i++) {
            attackList.children[i].className = "block-button";
            if ((AttOpt[i] > -1) && (AimAmn[i] < AimMax[i])) {
                document.getElementById(`aiming_${i+1}`).className = "col-8 no-padding aiming-button";
            }
        }
        for (let i = 0; i < defenceList.children.length; i++) {
            defenceList.children[i].className = "block-button";
        }
    }
}
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
