'use strict'
document.getElementById('site-title').textContent = "NPC Chart : GM Page";
// объявление переменных
const NPC = [HVITTI, ILDE, ORNN,];
NPC.forEach((ITM, I) => {
    const SHORT_NAME = NPC[I].charShortName;
    const LONG_NAME =  NPC[I].charLongName;
    const CONCEPT = NPC[I].charShortConcept;
    const DESCRIPT = NPC[I].charLongDescr;
    const INI_D6 = NPC[I].initD6;
    const INI_MD = NPC[I].initMod;
    let initiative = null;
    const MAX_AP = NPC[I].maxActionPoints;
    let round_AP = MAX_AP;
    // считывание из БД данных персонажа и заполнение страницы Листа Персонажа по загрузке страницы
        // let backgroundContr = document.createElement('div');
        //     backgroundContr.className = "background-container";
        // NPC_1.prepend(backgroundContr); // вставить "backgroundContr" в начало <div> NPC_1
        // let backgroundImage = document.createElement('img');
        //     backgroundImage.setAttribute('src', `${NPC.bkgImage}`);
        //     backgroundImage.className = "background-image";
        //     backgroundContr.prepend(backgroundImage); // вставить "backgroundImage" в начало <backgroundContr>
        document.getElementById(`NPC_Name_${I+1}`).textContent = SHORT_NAME;
        document.getElementById(`NPC_Descrip_${I+1}`).textContent = CONCEPT;
        document.getElementById(`initiativeRoll_${I+1}`).textContent = `${INI_D6}D+${INI_MD}=`;
        document.getElementById(`initiativeResult_${I+1}`).value = initiative;
        document.getElementById(`actionPointsResult_${I+1}`).value = round_AP;
        let showAttack = 'on';
        let showDefence = 'off';
        document.getElementById(`l_Attack_${I+1}`).addEventListener("click", () => {
            // console.log("Attack Click");
            if (showAttack === 'off') {
                showAttack = 'on';
                document.getElementById(`attackList_${I+1}`).className = 'left-slide-block';
                document.getElementById(`l_Attack_${I+1}`).className = 'ah4';
                showDefence = 'off';
                document.getElementById(`defenceList_${I+1}`).className = 'right-slide-block hide-slide';
                document.getElementById(`l_Defence_${I+1}`).className = 'ah4 right turn-right';
            } else if (showAttack === 'on') {
                showDefence = 'on';
                document.getElementById(`defenceList_${I+1}`).className = 'right-slide-block';
                document.getElementById(`l_Defence_${I+1}`).className = 'ah4 right';
                showAttack = 'off';
                document.getElementById(`attackList_${I+1}`).className = 'left-slide-block hide-slide';
                document.getElementById(`l_Attack_${I+1}`).className = 'ah4 turn-left';
            }
        });
        document.getElementById(`l_Defence_${I+1}`).addEventListener("click", () => {
            // console.log("Defence Click");
            if (showDefence === 'off') {
                showDefence = 'on';
                document.getElementById(`defenceList_${I+1}`).className = 'right-slide-block';
                document.getElementById(`l_Defence_${I+1}`).className = 'ah4 right';
                showAttack = 'off';
                document.getElementById(`attackList_${I+1}`).className = 'left-slide-block hide-slide';
                document.getElementById(`l_Attack_${I+1}`).className = 'ah4 turn-left';
            } else if (showDefence === 'on') {
                showAttack = 'on';
                document.getElementById(`attackList_${I+1}`).className = 'left-slide-block';
                document.getElementById(`l_Attack_${I+1}`).className = 'ah4';
                showDefence = 'off';
                document.getElementById(`defenceList_${I+1}`).className = 'right-slide-block hide-slide';
                document.getElementById(`l_Defence_${I+1}`).className = 'ah4 right turn-right';
            }
        });
    // create Attack BlockS by function from aRRay
    NPC[I].attack.forEach( function createAttackBlock(item, index) {
        let attackList = document.getElementById(`attackList_${I+1}`)
            let attackBlock = document.createElement('div');
            attackBlock.setAttribute('id', `attackBlock_${I+1}${index+1}`);
            attackBlock.className = "block-button";
            attackList.append(attackBlock); // вставить "attackBlock_${I+1}#" в конец <'attackList'>
            attackBlock.insertAdjacentHTML('beforebegin', `<!--Attack Block ${I+1}#${index+1}-->`);
            //
            let attack_Title = document.createElement('div');
            attack_Title.className = "darkcell";
            attackBlock.prepend(attack_Title); // вставить "attack_Title" в начало <`attackBlock_${I+1}#`>
                //
                let aIt = document.createElement('h5');
                aIt.setAttribute('id', `aIt_${I+1}${index+1}`);
                aIt.textContent = item.shortName;
                attack_Title.prepend(aIt);
                //
            let attack_Chars = document.createElement('div');
            attack_Chars.className = "row lightcell no-margin";
            attackBlock.append(attack_Chars); // вставить "attack_Chars" в конец <`attackBlock${I+1}_#`>
                //
                let range = 0;
                let rangeMin = 0;
                let rangeMax = 12 * item.range;
                if (!item.meel) {
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
                        rg_Value.setAttribute('id', `attack_${I+1}${index+1}RgVal`);
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
                        rg_range.setAttribute('id', `attack_${I+1}${index+1}Range`);
                        rg_range.className = "input-light range";
                        rg_range.type = "range";
                        rg_range.min = rangeMin;
                        rg_range.max = rangeMax;
                        rg_range.value = 0;
                        rg_range_col.append(rg_range);
                        //
                        rg_range.addEventListener("change", function changeRange() {
                            let range = document.getElementById(`attack_${I+1}${index+1}Range`).value;
                            document.getElementById(`attack_${I+1}${index+1}RgVal`).value = range;
                            if ("attackMod" in item.wParts[ATTACK.O]) ATTACK.MOD = item.wParts[ATTACK.O].attackMod;
                            else ATTACK.MOD = item.attackMod;
                            ATTACK.MOD = ATTACK.MOD - Math.trunc(range / item.range);
                            console.log(range / item.range);
                            attack_Roll.textContent = (ATTACK.MOD >= 0) ? `${ATTACK.DICE}D+`+`${ATTACK.MOD}=` : `${ATTACK.DICE}D`+`${ATTACK.MOD}=`;
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
                attack_Result.setAttribute('id', `attack_${I+1}${index+1}Result`);
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
                l_Damage.setAttribute('id', `l_Damage_${I+1}${index+1}`);
                l_Damage.textContent = 'Урон:';
                dmg_Ttl.prepend(l_Damage);
                //
                let damage_Result = document.createElement('input');
                damage_Result.setAttribute('id', `damage_${I+1}${index+1}Result`);
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
            // заполнение параметров оружия
            // объект с характеристиками оружия
            let ATTACK = {
                Name:'Name',
                O:0, // опция выбранного оружия
                AP:0,  // Action Points
                DICE:0, // Attack Dice
                MOD:0, // Attack Modifinder
                DEMDICE:0, // Damage Dice
                DEMMOD:0, // Damage Modifinder
                CRIT:0, // criticalChance
                CRDAM:0, // criticalDamage
                ARMPI:0, // armorPiercing
                KNDWN:0, // knockingDown
                AMMO:[],
                loaded:0, // loaded Ammo(nition) ?
                reload:0, // RE-load Ammo(nition) ?
            };
            // если оружие простое
            if (!item.complex && item.meel) {
                let attName = document.createElement('h6');
                attName.setAttribute('id', `attName_${I+1}${index+1}`);
                ATTACK.Name = item.attackName;
                attName.textContent = ATTACK.Name;
                at_Name.prepend(attName);
                // если оружие много-составное ближнее / рукопашное
            } else if (item.meel) {
                let att_Select = document.createElement('select');
                att_Select.setAttribute('id', `attSelect_${I+1}${index+1}`);
                att_Select.className = "select-light out-h6";
                att_Select.name = `attSelect_${I+1}${index+1}`;
                att_Select.size = "1";
                att_Select.placeholder = "Choose Attack Type";
                at_Name.prepend(att_Select);
                    item.wParts.forEach( function fillAttackSelect(wPart, jndex) { // option s
                        let att_option = document.createElement('option');
                        att_option.setAttribute('id', `attOption_${I+1}${index+1}${jndex+1}`);
                        att_option.className = "out-h6";
                        att_option.value = `${jndex+1}`;
                        att_option.textContent = wPart.attackName;
                        att_Select.append(att_option);
                    });
                    ATTACK.O = document.getElementById(`attSelect_${I+1}${index+1}`).value -1;
                    // добавляем реакцию по выбору части оружия / способа атаки
                    att_Select.addEventListener("change", function fillWeaponValues() {
                        ATTACK.O = att_Select.value -1;
                        if ("actionPoints" in item.wParts[ATTACK.O]) ATTACK.AP = item.wParts[ATTACK.O].actionPoints;
                        else ATTACK.AP = item.actionPoints;
                        actionPoints.textContent = ATTACK.AP;
                        //
                        if ("attackDice" in item.wParts[ATTACK.O]) ATTACK.DICE = item.wParts[ATTACK.O].attackDice;
                        else ATTACK.DICE = item.attackDice;
                        if ("attackMod" in item.wParts[ATTACK.O]) ATTACK.MOD = item.wParts[ATTACK.O].attackMod;
                        else ATTACK.MOD  = item.attackMod;
                        attack_Roll.textContent = `${ATTACK.DICE}D+`+`${ATTACK.MOD}=`;
                        //
                        if ("damageDice" in item.wParts[ATTACK.O]) ATTACK.DEMDICE = item.wParts[ATTACK.O].damageDice;
                        else ATTACK.DEMDICE = item.damageDice;
                        if ("damageMod"  in item.wParts[ATTACK.O]) ATTACK.DEMMOD = item.wParts[ATTACK.O].damageMod;
                        else ATTACK.DEMMOD = item.damageMod;
                        damage_Roll.textContent = `${ATTACK.DEMDICE}D+`+`${ATTACK.DEMMOD}=`;
                        //
                        if ("criticalChance" in item.wParts[ATTACK.O]) ATTACK.CRIT = item.wParts[ATTACK.O].criticalChance;
                        else ATTACK.CRIT = item.criticalChance;
                        criticalChance.textContent = ATTACK.CRIT;
                        if ("criticalDamage" in item.wParts[ATTACK.O]) ATTACK.CRDAM = item.wParts[ATTACK.O].criticalDamage;
                        else ATTACK.CRDAM = item.criticalDamage;
                        criticalDamage.textContent = ATTACK.CRDAM;
                        if ("armorPiercing" in item.wParts[ATTACK.O]) ATTACK.ARMPI = item.wParts[ATTACK.O].armorPiercing;
                        else ATTACK.ARMPI = item.armorPiercing;
                        armorPiercing.textContent = ATTACK.ARMPI;
                        if ("knockingDown" in item.wParts[ATTACK.O]) ATTACK.KNDWN = item.wParts[ATTACK.O].knockingDown;
                        else ATTACK.KNDWN = item.knockingDown;
                        knockingDown.textContent = `+${ATTACK.KNDWN}`;
                    });
            } else if (!item.meel) { // RanGe Weappon
                let ammoSelect = document.createElement('select');
                ammoSelect.setAttribute('id', `attSelect_${I+1}${index+1}`);
                ammoSelect.className = "select-light out-h6";
                ammoSelect.name = `attSelect_${I+1}${index+1}`;
                ammoSelect.size = "1";
                ammoSelect.placeholder = "Choose Your Ammo";
                at_Name.prepend(ammoSelect);
                if (item.reload) { // ReLoad Action !!
                    let reload_option = document.createElement('option');
                    reload_option.setAttribute('id', `attOption_${I+1}${index+1}0reload`);
                    reload_option.className = "out-h6";
                    reload_option.selected = "selected";
                    reload_option.disabled = "disabled";
                    reload_option.value = `0`;
                    ATTACK.reload = item.reload;
                    reload_option.textContent = `зарядить ${ATTACK.reload} ОД`;
                    ammoSelect.append(reload_option);
                }
                    item.wParts.forEach( function fillAmmoSelect(ammo, jndex) { // option-s Ammo
                        let ammoption = document.createElement('option');
                        ammoption.setAttribute('id', `attOption_${I+1}${index+1}${jndex+1}`);
                        ammoption.className = "out-h6";
                        ammoption.value = `${jndex+1}`;
                        ammoption.textContent = ammo.attackName;
                        if (ammo.ammunition) {
                            ATTACK.AMMO[jndex] = ammo.ammunition;
                            ammoption.textContent = ammoption.textContent+` [${ATTACK.AMMO[jndex]}]`;
                        }
                        ammoSelect.append(ammoption);
                    });
                    ATTACK.O = document.getElementById(`attSelect_${I+1}${index+1}`).value -1;
                    ATTACK.loaded = false;
                    // добавляем реакцию по выбору боевого заряда в дистанционном оружии
                    ammoSelect.addEventListener("change", function fillAmmoValues() {
                        ATTACK.O = ammoSelect.value -1;
                        if ("actionPoints" in item.wParts[ATTACK.O]) ATTACK.AP = item.wParts[ATTACK.O].actionPoints;
                        else ATTACK.AP = item.actionPoints;
                        //
                        if ("attackDice" in item.wParts[ATTACK.O]) ATTACK.DICE = item.wParts[ATTACK.O].attackDice;
                        else ATTACK.DICE = item.attackDice;
                        if ("attackMod"  in item.wParts[ATTACK.O]) ATTACK.MOD = item.wParts[ATTACK.O].attackMod;
                        else ATTACK.MOD = item.attackMod;
                        //
                        if ("damageDice" in item.wParts[ATTACK.O]) ATTACK.DEMDICE = item.wParts[ATTACK.O].damageDice;
                        else ATTACK.DEMDICE = item.damageDice;
                        if ("damageMod"  in item.wParts[ATTACK.O]) ATTACK.DEMMOD = item.wParts[ATTACK.O].damageMod;
                        else ATTACK.DEMMOD = item.damageMod;

                        if ("criticalChance" in item.wParts[ATTACK.O]) ATTACK.CRIT = item.wParts[ATTACK.O].criticalChance;
                        else ATTACK.CRIT = item.criticalChance;
                        if ("criticalDamage" in item.wParts[ATTACK.O]) ATTACK.CRDAM = item.wParts[ATTACK.O].criticalDamage;
                        else ATTACK.CRDAM = item.criticalDamage;
                        if ("armorPiercing" in item.wParts[ATTACK.O]) ATTACK.ARMPI = item.wParts[ATTACK.O].armorPiercing;
                        else ATTACK.ARMPI = item.armorPiercing;
                        if ("knockingDown" in item.wParts[ATTACK.O]) ATTACK.KNDWN = item.wParts[ATTACK.O].knockingDown;
                        else   ATTACK.KNDWN = item.knockingDown;
                        //
                        let range = document.getElementById(`attack_${I+1}${index+1}Range`).value;
                        document.getElementById(`attack_${I+1}${index+1}RgVal`).value = range;
                        ATTACK.MOD = ATTACK.MOD - Math.trunc(range / item.range);
                        attack_Roll.textContent = (ATTACK.MOD >= 0) ? `${ATTACK.DICE}D+`+`${ATTACK.MOD}=` : `${ATTACK.DICE}D`+`${ATTACK.MOD}=`;
                        //
                        actionPoints.textContent = ATTACK.AP;
                        // attack_Roll.textContent = `${ATTACK.DICE}D+`+`${ATTACK.MOD}=`;
                        damage_Roll.textContent = `${ATTACK.DEMDICE}D+`+`${ATTACK.DEMMOD}=`;
                        criticalChance.textContent = ATTACK.CRIT;
                        criticalDamage.textContent = ATTACK.CRDAM;
                        armorPiercing.textContent = ATTACK.ARMPI;
                        knockingDown.textContent = (ATTACK.KNDWN > 9) ? ATTACK.KNDWN : `+${ATTACK.KNDWN}`;
                        // перезарядка :: учёт Очков Действий
                        let reload;
                        if (ATTACK.loaded) reload = 1;
                        else reload = ATTACK.reload;
                        round_AP = round_AP - reload;
                        document.getElementById(`actionPointsResult_${I+1}`).value = round_AP;
                        // document.getElementById(`attOption_${index+1}${o+1}`).disabled = "disabled";
                        ATTACK.loaded = true;
                    });
                }
                //
                let actionPoints = document.createElement('p');
                actionPoints.setAttribute('id', `actionPoints_${I+1}a${index+1}`);
                actionPoints.className = "ah6";
                let attack_Roll = document.createElement('p');
                attack_Roll.setAttribute('id', `attack_${I+1}${index+1}Roll`);
                attack_Roll.className = "ah6";
                //
                let damage_Roll = document.createElement('p');
                damage_Roll.setAttribute('id', `damage_${I+1}${index+1}Roll`);
                damage_Roll.className = "ah7";
                //
                let criticalChance = document.createElement('p');
                criticalChance.setAttribute('id', `criticalChance_${I+1}${index+1}`);
                criticalChance.className = "ah7";
                let criticalDamage = document.createElement('p');
                criticalDamage.setAttribute('id', `criticalDamage_${I+1}${index+1}`);
                criticalDamage.className = "ah7";
                let armorPiercing = document.createElement('p');
                armorPiercing.setAttribute('id', `armorPiercing_${I+1}${index+1}`);
                armorPiercing.className = "ah7";
                let knockingDown = document.createElement('p');
                knockingDown.setAttribute('id', `knockingDown_${I+1}${index+1}`);
                knockingDown.className = "ah7";
                // console.log(ATTACK.O);
                if (ATTACK.O === -1) {
                    ATTACK.AP = "–";
                    ATTACK.DICE = "–";
                    ATTACK.MOD  = "–";
                    ATTACK.DEMDICE = "–";
                    ATTACK.DEMMOD  = "–";
                    ATTACK.CRIT  = "–";
                    ATTACK.CRDAM = "–";
                    ATTACK.ARMPI = "–";
                    ATTACK.KNDWN = "–";
                } else if (!item.complex) {
                    ATTACK.AP = item.actionPoints;
                    ATTACK.DICE = item.attackDice;
                    ATTACK.MOD = item.attackMod;
                    ATTACK.DEMDICE = item.damageDice;
                    ATTACK.DEMMOD = item.damageMod;
                    ATTACK.CRIT = item.criticalChance;
                    ATTACK.CRDAM = item.criticalDamage;
                    ATTACK.ARMPI = item.armorPiercing;
                    ATTACK.KNDWN = item.knockingDown;
                } else {
                    if ("actionPoints" in item.wParts[ATTACK.O]) ATTACK.AP = item.wParts[ATTACK.O].actionPoints;
                    else ATTACK.AP = item.actionPoints;
                    if ("attackDice" in item.wParts[ATTACK.O]) ATTACK.DICE = item.wParts[ATTACK.O].attackDice;
                    else ATTACK.DICE = item.attackDice;
                    if ("attackMod"  in item.wParts[ATTACK.O]) ATTACK.MOD = item.wParts[ATTACK.O].attackMod;
                    else ATTACK.MOD = item.attackMod;
                    if ("damageDice" in item.wParts[ATTACK.O]) ATTACK.DEMDICE = item.wParts[ATTACK.O].damageDice;
                    else ATTACK.DEMDICE = item.damageDice;
                    if ("damageMod"  in item.wParts[ATTACK.O]) ATTACK.DEMMOD = item.wParts[ATTACK.O].damageMod;
                    else ATTACK.DEMMOD = item.damageMod;
                    if ("criticalChance" in item.wParts[ATTACK.O]) ATTACK.CRIT = item.wParts[ATTACK.O].criticalChance;
                    else ATTACK.CRIT = item.criticalChance;
                    if ("criticalDamage" in item.wParts[ATTACK.O]) ATTACK.CRDAM = item.wParts[ATTACK.O].criticalDamage;
                    else ATTACK.CRDAM = item.criticalDamage;
                    if ("armorPiercing" in item.wParts[ATTACK.O]) ATTACK.ARMPI = item.wParts[ATTACK.O].armorPiercing;
                    else ATTACK.ARMPI = item.armorPiercing;
                    if ("knockingDown" in item.wParts[ATTACK.O]) ATTACK.KNDWN = item.wParts[ATTACK.O].knockingDown;
                    else   ATTACK.KNDWN = item.knockingDown;
                }
                actionPoints.textContent = ATTACK.AP;
                attack_Roll.textContent = `${ATTACK.DICE}D+`+`${ATTACK.MOD}=`;
                damage_Roll.textContent = `${ATTACK.DEMDICE}D+`+`${ATTACK.DEMMOD}=`;
                criticalChance.textContent = ATTACK.CRIT;
                criticalDamage.textContent = ATTACK.CRDAM;
                armorPiercing.textContent = ATTACK.ARMPI;
                knockingDown.textContent = (ATTACK.KNDWN > 9) ? ATTACK.KNDWN : `+${ATTACK.KNDWN}`;
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
        document.getElementById(`aIt_${I+1}${index+1}`).parentNode.addEventListener("click", function attackByWeappon() {
            if (round_AP > 0) {
                if (ATTACK.AP !== "–") {
                    let attack = diceRoller(ATTACK.DICE, 6, ATTACK.MOD);
                    document.getElementById(`attack_${I+1}${index+1}Result`).value = attack;
                    //
                    let damage = diceRoller(ATTACK.DEMDICE, 6, ATTACK.DEMMOD);
                    document.getElementById(`damage_${I+1}${index+1}Result`).value = damage;
                    //
                    round_AP = round_AP - ATTACK.AP;
                    document.getElementById(`actionPointsResult_${I+1}`).value = round_AP;
                    //
                    let knockingDown = damage + ATTACK.KNDWN;
                    document.getElementById(`knockingDown_${I+1}${index+1}`).textContent = knockingDown;
                    //
                    // if (!item.meel) {
                        if ("ammunition" in item.wParts[ATTACK.O]) {
                            ATTACK.AMMO[ATTACK.O] = ATTACK.AMMO[ATTACK.O] - 1;
                            console.log(`attOption_${I+1}${index+1}${ATTACK.O+1}`);
                            document.getElementById(`attOption_${I+1}${index+1}${ATTACK.O+1}`).textContent = `${item.wParts[ATTACK.O].attackName} [${ATTACK.AMMO[ATTACK.O]}]`;
                            if (ATTACK.AMMO[ATTACK.O] === 0) {
                                document.getElementById(`attOption_${I+1}${index+1}${ATTACK.O+1}`).disabled = "disabled";
                                document.getElementById(`attOption_${I+1}${index+1}${ATTACK.O+1}`).remove();
                                //
                                ATTACK.AP = "–";
                                ATTACK.DICE = "–";
                                ATTACK.MOD  = "–";
                                ATTACK.DEMDICE = "–";
                                ATTACK.DEMMOD  = "–";
                                ATTACK.CRIT  = "–";
                                ATTACK.CRDAM = "–";
                                ATTACK.ARMPI = "–";
                                ATTACK.KNDWN = "–";
                                //
                                actionPoints.textContent = ATTACK.AP;
                                attack_Roll.textContent = `${ATTACK.DICE}D`+`${ATTACK.MOD}`;
                                damage_Roll.textContent = `${ATTACK.DEMDICE}D`+`${ATTACK.DEMMOD}`;
                                criticalChance.textContent = ATTACK.CRIT;
                                criticalDamage.textContent = ATTACK.CRDAM;
                                armorPiercing.textContent = ATTACK.ARMPI;
                                knockingDown.textContent = ATTACK.KNDWN;
                                //
                                this.removeEventListener('click', attackByWeappon);
                            }
                    }
                    if (!item.meel && item.reload) {
                        document.getElementById(`attOption_${I+1}${index+1}0reload`).selected = "selected";
                        ATTACK.loaded = false;
                        //
                        ATTACK.AP = "–";
                        ATTACK.DICE = "–";
                        ATTACK.MOD  = "–";
                        ATTACK.DEMDICE = "–";
                        ATTACK.DEMMOD  = "–";
                        ATTACK.CRIT  = "–";
                        ATTACK.CRDAM = "–";
                        ATTACK.ARMPI = "–";
                        //
                        actionPoints.textContent = ATTACK.AP;
                        attack_Roll.textContent = `${ATTACK.DICE}D`+`${ATTACK.MOD}`;
                        damage_Roll.textContent = `${ATTACK.DEMDICE}D`+`${ATTACK.DEMMOD}`;
                        criticalChance.textContent = ATTACK.CRIT;
                        criticalDamage.textContent = ATTACK.CRDAM;
                        armorPiercing.textContent = ATTACK.ARMPI;
                    }
                    if (round_AP <= 0) {
                        let attackList = document.getElementById(`attackList_${I+1}`);
                        for (let i = 0; i < attackList.children.length; i++) {
                            attackList.children[i].className = "";
                        }
                        let defenceList = document.getElementById(`defenceList_${I+1}`);
                        for (let i = 0; i < defenceList.children.length; i++) {
                            defenceList.children[i].className = "";
                        }
                    }
                }
            }
        });
    });
    //
    // create Defence BlockS by function from aRRay
    NPC[I].defence.forEach( function createDefenceBlock(item, index) {
        let defenceList = document.getElementById(`defenceList_${I+1}`)
        let defenceBlock = document.createElement('div');
        defenceBlock.setAttribute('id', `defenceBlock_${I+1}${index+1}`);
        defenceBlock.className = "block-button";
        defenceList.append(defenceBlock); // вставить "defenceBlock_${I+1}" в конец <'defenceList'>
        defenceBlock.insertAdjacentHTML('beforebegin', `<!--Defence Block ${I+1}#${index+1}-->`);
        //
        let defence_Title = document.createElement('div');
        defence_Title.className = "darkcell";
        defenceBlock.prepend(defence_Title); // вставить "defence_Title" в начало <`defenceBlock_${I+1}`>
            //
            let dShTt = document.createElement('h5');
            dShTt.setAttribute('id', `dShTt_${I+1}${index+1}`);
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
                actionPoints.setAttribute('id', `actionPoints_${I+1}d${index+1}`);
                actionPoints.className = "ah6";
                actionPoints.textContent = item.actionPoints;
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
                defSkillBon.setAttribute('id', `defSkillBon_${I+1}${index+1}`);
                defSkillBon.className = "ah6";
                defSkillBon.textContent = item.parry;
                def_Bon.append(defSkillBon);
            //
            let dAm_Amnt = document.createElement('div');
            dAm_Amnt.className = "col-2 no-padding";
            defence_Chars.append(dAm_Amnt);
                //
                let defenceAmount = document.createElement('p');
                defenceAmount.setAttribute('id', `defenceAmount_${I+1}${index+1}`);
                defenceAmount.className = "ah6";
                defenceAmount.textContent = '×0';
                dAm_Amnt.append(defenceAmount);
        // добавляем реакцию по клику на 3ashite
        document.getElementById(`defenceBlock_${I+1}${index+1}`).addEventListener("click", () => {
            let defAmount = document.getElementById(`defenceAmount_${I+1}${index+1}`).textContent;
                defAmount = Number(defAmount[1]);
            if (round_AP > 0) {
                defAmount = defAmount + 1;
                document.getElementById(`defenceAmount_${I+1}${index+1}`).textContent = `×${defAmount}`;
                round_AP = round_AP - item.actionPoints;
                document.getElementById(`actionPointsResult_${I+1}`).value = round_AP;
                if (round_AP <= 0) {
                    let attackList = document.getElementById(`attackList_${I+1}`);
                    for (let i = 0; i < attackList.children.length; i++) {
                        attackList.children[i].className = "";
                    }
                    let defenceList = document.getElementById(`defenceList_${I+1}`);
                    for (let i = 0; i < defenceList.children.length; i++) {
                        defenceList.children[i].className = "";
                    }
                }
            }
        });
    });
    // const InitiativeLog = []; // Log
    // генерация Инициативы по нажатию поля Инициативы
    // добавляем реакцию по клику на полe Инициативы
    document.getElementById(`Initiative_${I+1}`).parentNode.addEventListener("click", () => {
        if (initiative === null) {
            initiative = diceRoller(INI_D6, 6, INI_MD);
            document.getElementById(`initiativeResult_${I+1}`).value = initiative;
            document.getElementById(`Initiative_${I+1}`).className = "darkcell"; //$('#Initiative').removeClass('initiative');
            // InitiativeLog.push(initiative);
            // console.log(InitiativeLog);
        }
    })
    document.getElementById(`end_turn_${I+1}`).addEventListener( "click", () => {
        round_AP = (round_AP > 0) ? MAX_AP : round_AP + MAX_AP;
        document.getElementById(`actionPointsResult_${I+1}`).value = round_AP;
        endRound(I);
    });
});

//
document.getElementById('end_fight').addEventListener( "click", () => {
    document.getElementById('initiativeResult').value = initiative = null;
    document.getElementById('actionPointsResult').value = MAX_AP;
    // document.getElementById('attack_1Result').value = null;
    // document.getElementById('damage_1Result').value = null;
    endRound();
    // document.getElementById('attackBlock_1').className = "block-button"; //$('#weaponBlock_1').addClass('block-button');
});

function endRound(I) {
    let attackList = document.getElementById(`attackList_${I+1}`);
    for (let i = 0; i < attackList.getElementsByTagName('input').length; i++) {
        let range = document.getElementById(`attack_${I+1}${i+1}Range`).value;
        if (document.getElementById(`attack_${I+1}${i+1}Range`) == null) {
            attackList.getElementsByTagName('input')[i].value = null;
        } else {
            document.getElementById(`attack_${I+1}${i+1}RgVal`).value = range;
            document.getElementById(`attack_${I+1}${i+1}Range`).value = range;
        }
    }
    for (let i = 0; i < defenceList.getElementsByTagName('input').length; i++) {
        defenceList.getElementsByTagName('input')[i].value = null;
    }
    for (let i = 0; i < attackList.children.length; i++) {
        let item = NPC.attack[i];
        if ("knockingDown" in NPC.attack[i]) {
            document.getElementById(`knockingDown_${i+1}`).textContent = (item.knockingDown > 9) ? `${item.knockingDown}` : `+${item.knockingDown}`;
        } else {
            let o = document.getElementById(`attSelect_${i+1}`).value - 1;
            // console.log('i=',i,'o=',o);
            if (o == -1) document.getElementById(`knockingDown_${i+1}`).textContent = '–';
            else document.getElementById(`knockingDown_${i+1}`).textContent = `+${item.wParts[o].knockingDown}`;

        }
    }
    if (round_AP > 0) {
        for (let i = 0; i < attackList.children.length; i++) {
            attackList.children[i].className = "block-button";
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
