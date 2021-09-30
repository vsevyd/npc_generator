'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const ILDE = {
    player: 'Tamara',
    isGM: false,
    charShortName: 'Илде', charLongName: 'Илде Даиндоттир',
    charShortConcept: '«Чёрный Клинок»', charLongDescr: 'дварфийка «Чёрный Клинок» и ювелир',
    bkgImage: './img/ilde_bg.png',
    maxHP: 32, currentHP: 32,
    initD6: 3, initMod: 1,
    maxActionPoints: 14, currentRoundAP: 14,
    speedFt: 23, speedHx: 5, runMult: 3,
    armor:   [],
    attack:  [
		{ shortName:'Клевец МР', longName:'Клевец МР, Волшебное оружие*12 х5 зарядов', meel:true, complex:true,
            actionPoints:6,
        	attackDice:4, attackMod:2, damageDice:6, damageMod:2,
            wParts: [
                { attackName:'Mолот',  armorPiercing:0, knockingDown:4,},
                { attackName:'Клевец', armorPiercing:5, knockingDown:0,},
            ],
        	criticalChance:8, criticalDamage:5,
            range:3, parry:22, weight:2, price:15, coins:'sp', condition:6, conditionMax:12,
        },
		{ shortName:'Удар щитом', longName:'Стальной ростовой щит, удар', meel:true, actionPoints:5,
        	attackName:'Толкать', attackDice:3, attackMod:2, damageDice:6, damageMod:2,
        	criticalChance:8, criticalDamage:5, armorPiercing:0, knockingDown:12,
            range:1, parry:27, weight:20, price:25, coins:'sp', condition:15, conditionMax:200,},
            ],
    defence: [
		{ shortName:'Парирование',longName:'Клевец, парирование', actionPoints:5, parry:22,},
		{ shortName:'Уклонение',  longName:'Илде, уклонение',  actionPoints:2, parry:16,},
		{ shortName:'Блок щитом', longName:'Илде, блок щитом', actionPoints:4, parry:27,},
	],
};
