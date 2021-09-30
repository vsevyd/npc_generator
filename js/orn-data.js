'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const ORN = {
    player: 'Vadimka',
    isGM: false,
    charShortName: 'Орн', charLongName: 'Орн Торбьёрнсон',
    charShortConcept: '«Чёрный Клинок»', charLongDescr: 'гном жрец «Чёрный Клинок»',
    bkgImage: './img/orn_bg.png',
    maxHP: 28, currentHP: 28,
    initD6: 4, initMod: 0,
    maxActionPoints: 12, currentRoundAP: 12,
    speedFt: 25, speedHx: 5, runMult: 4,
    armor:   [],
    attack:  [
		{ shortName:'Полокс "МО"', longName:'Полокс "Милость Отца" МР из гномьей стали', meel:true, complex:true,
        	attackDice:4, damageDice:8,
            wParts: [
                { attackName:'Mолот', actionPoints:6, attackMod:0, damageMod:3, armorPiercing:1, knockingDown:6,},
                { attackName:'Топор', actionPoints:6, attackMod:0, damageMod:3, armorPiercing:3, knockingDown:4,},
                { attackName:'Пика',  actionPoints:5, attackMod:1, damageMod:2, armorPiercing:6, knockingDown:2,},
            ],
        	criticalChance:10, criticalDamage:7,
            range:7, parry:16, weight:3.5, price:15, coins:'gp', condition:7, conditionMax:21,},

		{ shortName:'Маг.жезл "ПШ"', longName:'Магический жезл "Повелитель Штормов"', meel:false, actionPoints:5, reload:false,
        	attackDice:4, attackMod:3, damageDice:6, damageMod:0,
            wParts: [{ attackName:'Молния', ammunition:17, },],

            criticalChance:10, criticalDamage:7, armorPiercing:0, knockingDown:0,
            range:6, parry:16, weight:1.5, price:12, coins:'gp', condition:4, conditionMax:6,},

		{ shortName:'Заклинание', longName:'Орн, заклинание', meel:false, actionPoints:10, reload:false,
        	attackDice:4, attackMod:3, damageDice:6, damageMod:3,
            wParts: [{ attackName:'Заклинание', },],
            criticalChance:10, criticalDamage:7, armorPiercing:0, knockingDown:0,
            range:2, parry:0, weight:0, price:0, coins:'gp', condition:0, conditionMax:0,},
            ],
    defence: [
		{ shortName:'Парирование', longName:'Магический жезл, парирование', actionPoints:5, parry:16,},
		{ shortName:'Уклонение',   longName:'Орн, уклонение',               actionPoints:2, parry:11,},
	],
};
