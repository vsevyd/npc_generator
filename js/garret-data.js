'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const GARRET = {
    player: 'Pavel',
    isGM: false,
    charShortName: 'Гаррет', charLongName: 'Гаррет Зубощель',
    charShortConcept: 'хоббит бард', charLongDescr: 'хоббит бард',
    bkgImage: './img/garret_bg.png',
    maxHP: 12, currentHP: 12,
    initD6: 4, initMod: 0,
    maxActionPoints: 16, currentRoundAP: 16,
    speedFt: 16, speedHx: 3, runMult: 5,
    armor:   [],
    attack:  [
		{ shortName:'Эльфийский тесак МР', longName:'Эльфийский тесак МР', meel:true, complex:true,
            actionPoints: 5,
        	attackDice:6, attackMod:1, damageDice:4, damageMod:2,
            wParts: [
                { attackName:'Резать', armorPiercing:0, knockingDown:2,},
                { attackName:'Колоть', armorPiercing:2, knockingDown:0,},
            ],
        	criticalChance:6, criticalDamage:9,
            range:2, parry:19, weight:1.5, price:24, coins:'sp', condition:11, conditionMax:16,
        },
            ],
    defence: [
		{ shortName:'Париро&shyвание', longName:'Эльфийский тесак, парирование', actionPoints:4, parry:19, },
		{ shortName:'Уклоне&shyние', longName:'Гаррет, уклонение', 	actionPoints:2, parry:18, },
	],
};
