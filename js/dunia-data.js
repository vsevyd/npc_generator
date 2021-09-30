﻿'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const DUNIA = {
    player: 'Anastasia',
    isGM: false,
    charShortName: 'Дункан', charLongName: 'сэр Дункан Стараг',
    charShortConcept: 'сэр-храмовник', charLongDescr: 'рыцарь-храмовник',
    bkgImage: './img/dunia_bg.png',
    maxHP: 30, currentHP: 30,
    initD6: 3, initMod: 1,
    maxActionPoints: 14, currentRoundAP: 14,
    speedFt: 29, speedHx: 6, runMult: 3,
    armor:   [],
    attack:  [
		{ shortName:'Бастард МР', longName:'Полуторный меч МР, посеребрёный, зачарованный', meel:true, complex:true,
            actionPoints:5, attackDice:4, attackMod:3, damageDice:6, damageMod:1,
            wParts: [
                { attackName:'Колоть', armorPiercing:2, knockingDown:1,},
                { attackName:'Pубить', armorPiercing:0, knockingDown:3,},
                { attackName:'Двуручный укол', actionPoints:4, damageDice:8, damageMod:1, armorPiercing:2, knockingDown:1,},
                { attackName:'Двуручный удар', actionPoints:4, damageDice:8, damageMod:1, armorPiercing:0, knockingDown:3,},
            ],
        	criticalChance:9, criticalDamage:5,
            range:4,  parry:23,
            weight:3.5, price:96,	coins:'sp', hardness:11, condition:39,},

		{ shortName:'Латная рукавица', longName:'Латная рукавица', meel:true, complex: false, actionPoints:3,
        	attackName:'Бить', attackDice:3, attackMod:0, damageDice:4, damageMod:0,
        	criticalChance:9, criticalDamage:5, armorPiercing:0, knockingDown:3,
            range:0, parry:18, weight:1.5, price:5,	coins:'sp', hardness:11, condition:30,},

		{ shortName:'Удар щитом', longName:'Большой cтальной щит, удар', meel:true, complex: false, actionPoints:5,
        	attackName:'Толкать', attackDice:3, attackMod:0, damageDice:6, damageMod:0,
        	criticalChance:9, criticalDamage:5, armorPiercing:0, knockingDown:12,
            range:1, parry:26, weight:20, price:37, coins:'sp', hardness:15, condition:200,},
            ],
    defence: [
		{ shortName:'Париро&shyвание, 1&nbsp;рука', longName:'Полуторный меч, одноручное парирование', actionPoints:4,
            parry:23,
            // parry reserve (количество запасенных парирований): XX (количество нажатий кнопки 'Парирование'),
        },
		{ shortName:'Париро&shyвание, 2&nbsp;руки', longName:'Полуторный меч, двуручное парирование', actionPoints:3,
            parry:19,
            // parry reserve (количество запасенных парирований): XX (количество нажатий кнопки 'Парирование'),
        },
		{ shortName:'Уклоне&shyние', longName:'Дункан, уклонение', actionPoints:2,
            parry: 16,
            //parry reserve (количество запасенных уклонений): XX (количество нажатий кнопки 'Уклонение'),
        },
		{ shortName:'Блок щитом', longName:'Дункан, блок щитом', actionPoints:4,
            parry:26,
            //parry reserve: XX,
        },
	],
};
