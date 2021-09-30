'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const HEIAN = {
    player: 'Sergey',
    isGM: true,
    charShortName: 'Хэйан', charLongName: 'Хэйлиан Лунный Ручей "Следопыт Высокого Леса"',
    charShortConcept: 'эльф-следопыт', charLongDescr: 'эльф следопыт',
    bkgImage: './img/heian_bg.png',
    maxHP: 28, currentHP: 28,
    initD6: 7, initMod: 0,
    maxActionPoints: 26, currentRoundAP: 26,
    speedFt: 52, speedHx: 10, runMult: 5,
    armor:   [],
    attack:  [
		{ shortName:'Дервиш МР', longName:'Дервиш МР', meel:true, complex:true,
            pair:true, mainHand:true, attackPenalty:0, actionPoints:5,
            wParts: [
                { attackName:'Рубить', attackDice:7, damageDice:7,  },
                { attackName:'Слабый удар', attackDice:6, damageDice:6, },
                { attackName:'Оч. слабый удар', attackDice:5, damageDice:5, },
            ], attackMod:0, damageMod:2,
            armorPiercing:1, knockingDown:2,
            enchantments: [
                { enchName:'Волшебное оружие', duration:'fight', amount:5,  attackMod:3, damageMod:3, },
                { enchName:'Разящий клинок',   duration:'hit',  reEnch:10, damageDice:4, damageMod:1,  },
            ],
        	criticalChance:6, criticalDamage:14,
            range:4,  parry:30,
            weight:3, price:30, coins:'gp', hardness:12, condition:36, },

		{ shortName:'Тесак МР', longName:'Тесак МР', meel:true, complex:true,
            pair:true, mainHand:false, attackPenalty:0, actionPoints:4,
            wParts: [
                { attackName:'Рубить', attackDice:7, damageDice:6, },
                { attackName:'Слабый удар', attackDice:6, damageDice:5, },
                { attackName:'Оч. слабый удар', attackDice:5, damageDice:4, },
            ], attackMod:0, damageMod:2,
                 armorPiercing:1, knockingDown:1,
            enchantments: [
                { enchName:'Волшебное оружие', duration:'fight', amount:5, attackMod:3, damageMod:3, },
            ],
        	criticalChance:6, criticalDamage:14,
            range:2, parry:27, weight:2, price:12, coins:'gp', hardness:12, condition:18, },

        { shortName:'Лук', longName:'Эльфийский лук', meel:false, complex:true,
            actionPoints:6, reload:1,
            wParts: [
                { attackName:'Боевая стрела', ammunition:10, attackDice:7, attackMod:2, damageDice:10, damageMod:3, armorPiercing:3, knockingDown:0, },
                { attackName:'Бронебойная стрела', ammunition:10, attackDice:8, attackMod:0, damageDice:10, damageMod:1, armorPiercing:6, knockingDown:-2, },
            ],
            criticalChance:6, criticalDamage:14,
            range:6,
            weight:4, price:75, coins:'gp', hardness:11, condition:44, },

        { shortName:'Метательный нож', longName:'Метательный нож', meel:false,
            actionPoints:3, reload:0,
            attackName:'Метать', ammunition:6,
            attackDice:6, attackMod:0, damageDice:5, damageMod:1,
            criticalChance:7, criticalDamage:14,
            armorPiercing:0, knockingDown:0,
            enchantments: [
                { enchName:'Разящий клинок', duration:'hit', amount:6, damageDice:4, damageMod:1, },
            ],
            range:2,
            weight:0.25, price:3, coins:'gp', hardness:12, condition:6, },

        { shortName:'Жезл', longName:'Деревянный меч-жезл', meel:true, complex: false, actionPoints:4,
        	attackName:'Удар', attackDice:7, attackMod:0, damageDice:6, damageMod:3,
        	criticalChance:6, criticalDamage:14, armorPiercing:0, knockingDown:3,
            range:4, parry:25, weight:2, price:43,	coins:'gp', hardness:8, condition:16, },

        { shortName:'Заклинание', longName:'Хэйан, заклинание', meel:false, complex:true,
        actionPoints:10, reload:false,
        attackDice:4, attackMod:0,
        wParts: [
            { attackName:'Заклинание, 1 круг', actionPoints:10, damageDice:7, damageMod:2, },
            { attackName:'Заклинание, 2 круг', actionPoints:20, damageDice:7, damageMod:2, },
            { attackName:'Заклинание, 3 круг', actionPoints:30, damageDice:7, damageMod:2, },
            { attackName:'Заклинание, 4 круг', actionPoints:40, damageDice:7, damageMod:2, },
            { attackName:'Заклинание, 5 круг', actionPoints:50, damageDice:7, damageMod:2, },
        ],
            criticalChance:99, criticalDamage:5, armorPiercing:0, knockingDown:0,
            range:2, parry:10, weight:0, price:0, coins:'gp', hardness:0, condition:0, },

        { shortName:'Удар щитом', longName:'Деревянный щит, удар', meel:true, complex:false, actionPoints:4,
        	attackName:'Толкать', attackDice:5, attackMod:2, damageDice:6, damageMod:0,
        	criticalChance:7, criticalDamage:14, armorPiercing:0, knockingDown:6,
            range:0, parry:31, weight:8, price:20, coins:'gp', hardness:14, condition:75, },
            ],

    defence: [
		{ shortName:'Дервиш', longName:'Дервиш, парирование', actionPoints:4,  parry:30, },
		{ shortName:'Тесак', longName:'Тесак, парирование', actionPoints:3, parry:27, },
		{ shortName:'Уклоне&shyние', longName:'Хэйан, уклонение', actionPoints:2, parry:25, },
		{ shortName:'Мёртвые не&nbsp;сражаются', longName:'Мёртвые не сражаются', actionPoints:3, parry:28, },
		{ shortName:'Защита щитом', longName:'Хэйан, Защита щитом', actionPoints:3, parry:31, },
        { shortName:'Заклина&shyние',   longName:'Заклинание щит',  actionPoints:5, parry:27, },
	],
};
