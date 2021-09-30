'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const FAY = {
    player: 'Vadimka',
    isGM: false,
    charShortName: 'Фай', charLongName: 'Файдаен «Драконий Кашель»',
    charShortConcept: 'маг-пиромант', charLongDescr: 'волшебник-пиромант',
    bkgImage: './img/fay_bg.png',
    maxHP: 32, currentHP: 32,
    initD6: 4, initMod: 0,
    maxActionPoints: 16, currentRoundAP: 16,
    speedFt: 33, speedHx: 7, runMult: 5,
    armor:   [],
    attack:  [
        { shortName:'Посох мага', longName:'Волшебный посох МР', meel:false, complex:true,
            actionPoints:10, reload:false,
        	attackDice:4, attackMod:1, damageDice:5, damageMod:2,
            wParts: [
                { attackName:'Воплощение, 1 круг', actionPoints:8,},
                { attackName:'Заклинание, 1 круг', actionPoints:10,},
                { attackName:'Чары, Аним, 1 круг', actionPoints:12,},
                { attackName:'Воплощение, 2 круг', actionPoints:16,},
                { attackName:'Заклинание, 2 круг', actionPoints:20,},
                { attackName:'Чары, Аним, 2 круг', actionPoints:24,},
                { attackName:'Воплощение, 3 круг', actionPoints:24,},
                { attackName:'Заклинание, 3 круг', actionPoints:30,},
                { attackName:'Чары, Аним, 3 круг', actionPoints:36,},
                { attackName:'Воплощение, 4 круг', actionPoints:32,},
                { attackName:'Заклинание, 4 круг', actionPoints:40,},
                { attackName:'Чары, Аним, 4 круг', actionPoints:48,},
                { attackName:'Воплощение, 5 круг', actionPoints:40,},
                { attackName:'Заклинание, 5 круг', actionPoints:50,},
                { attackName:'Чары, Аним, 5 круг', actionPoints:60,},
            ],
            criticalChance:99, criticalDamage:7, armorPiercing:0, knockingDown:0,
            range:2, parry:9, weight:3.5, price:66, coins:'gp', hardness:9, condition:27, },

        { shortName:'Посох МР', longName:'Боевой посох мага', meel:true, complex:true,
            actionPoints:4,
            wParts: [
                { attackName:'Удар', attackDice:4, attackMod:2, damageDice:6, damageMod:0, armorPiercing:0, knockingDown:5, range:6, },
                { attackName:'Колоть', attackDice:4, attackMod:3, damageDice:7, damageMod:1, armorPiercing:7, knockingDown:0, range:8, },
            ],
        	criticalChance:10, criticalDamage:7,
            parry:16,
            weight:3.5, price:66,	coins:'gp', hardness:9, condition:27, },

        { shortName:'Кинжал МР', longName:'Обсидиантовый кинжал МР', meel:true, complex:false,
            actionPoints:3,
        	attackName:'Колоть', attackDice:3, attackMod:0, damageDice:3, damageMod:2,
        	criticalChance:10, criticalDamage:7, armorPiercing:2, knockingDown:0,
            range:1, parry:9, weight:0.4, price:3, coins:'sp', hardness:16, condition:3, },
            ],

    defence: [
		{ shortName:'Париро&shyвание', longName:'Посох, парирование', actionPoints:3, parry:16, },
		{ shortName:'Уклоне&shyние',   longName:'Фай, уклонение',     actionPoints:2, parry:14, },
	],
};
