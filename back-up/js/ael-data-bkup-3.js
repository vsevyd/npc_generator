﻿'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const AEL = {
    player: 'Eugene',
    isGM: false,
    charShortName: 'Аэль', charLongName: 'Аэль Эмар',
    charShortConcept: 'эльф мечник', charLongDescr: 'молодой эльф мечник',
    bkgImage: './img/ael_bg.png',
    maxHP: 20, currentHP: 20,
    initD6: 4, initMod: 0,
    maxActionPoints: 18, currentRoundAP: 18,
    speedFt: 39, speedHx: 8, runMult: 5,
    armor:   [],
    attack:  [
		{ shortName:'Скьявона МР', longName:'Скьявона МР из эльфийской стали', meel:true, complex:true,
            actionPoints:5, attackDice:5, attackMod:2, damageDice:6, damageMod:0,
            wParts: [
                { attackName:'Колоть', armorPiercing:3, knockingDown:1,},
                { attackName:'Pубить', armorPiercing:1, knockingDown:3,},
            ],
        	criticalChance:8, criticalDamage:11,
            range:3,  parry:25,
            weight:3, price:50,	coins:'gp', condition:12, conditionMax:36,},
		{ shortName:'Кинжал', longName:'Кинжал (что-то-там)', meel:true, complex: false, actionPoints:3,
        	attackName:'Колоть', attackDice:4, attackMod:2, damageDice:4, damageMod:0,
        	criticalChance:8, criticalDamage:11, armorPiercing:0, knockingDown:0,
            range:1, parry:19, weight:0.5, price:18, coins:'bp', condition:10, conditionMax:5,},
		{ shortName:'Деревянный меч', longName:'Деревянный меч МР из даэдра', meel:true, complex: false, actionPoints:4,
        	attackName:'Бить', attackDice:5, attackMod:2, damageDice:4, damageMod:2,
        	criticalChance:8, criticalDamage:11, armorPiercing:0, knockingDown:3,
            range:3, parry:23, weight:1.5, price:6,	coins:'sp', condition:7, conditionMax:10,},
		{ shortName:'Удар щитом', longName:'Стальной щит-крыло, удар', meel:true, complex: false, actionPoints:4,
        	attackName:'Толкать', attackDice:5, attackMod:1, damageDice:5, damageMod:2,
        	criticalChance:8, criticalDamage:11, armorPiercing:0, knockingDown:7,
            range:2, parry:25, weight:10, price:8, coins:'gp', condition:16, conditionMax:110,},
            ],
    defence: [
		{ shortName:'Париро&shyвание', longName:'Скьявона, парирование', actionPoints:4,
            parry:25,
            // parry reserve (количество запасенных парирований): XX (количество нажатий кнопки 'Парирование'),
        },
		{ shortName:'Уклоне&shyние', longName:'Аэль, уклонение', actionPoints:2,
            parry: 21,
            //parry reserve (количество запасенных уклонений): XX (количество нажатий кнопки 'Уклонение'),
        },
		{ shortName:'Блок щитом', longName:'Аэль, блок щитом', actionPoints:3,
            parry:25,
            //parry reserve: XX,
        },
	],
};
