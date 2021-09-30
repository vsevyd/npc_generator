﻿'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const HVITTI = {
    player: 'Vsevyd',
    isGM: false,
    charFirstName: 'Хвиттисворт', charSecondtName: 'Варааскег',
    charConcept: 'гном Изобретатель', charDescr: ' и Алхимик',
    maxHP: 28, currentHP: 28,
    initD6: 4, initMod: 0,
    maxActionPoints: 14, currentRoundAP: 14,
    speedFt: 23, speedHx: 5, runMult: 4,
    armor:   [],
    weapon:  [
		{ shortName:'Mолот', longName:'Люцернхаммер, молот', meel:true, actionPoints:6,
	attackDice:5, attackMod:0, damageDice:8, damageMod:2,
	criticalChance:6, criticalDamage:11, armorPiercing:0,
	knockingDown:6, range:7, parry:20, weight:3.5, price:6, coins:'sp', condition:5, conditionMax:15,},
		{ shortName: 'Клевец', longName: 'Люцернхаммер, клевец', meel: 	true, actionPoints: 6,
	attackDice: 5, attackMod: 0, damageDice: 8, damageMod: 2,
	criticalChance: 6, criticalDamage: 11, armorPiercing: 5,
	knockingDown: 2, range: 7, parry: 20, weight: 3.5, price: 6, coins: 	'sp', condition: 5, conditionMax: 15,},
		{ shortName: 'Пика', longName: 'Люцернхаммер, Пика', meel: 	true, actionPoints: 6,
	attackDice: 5, attackMod: 0, damageDice: 8, damageMod: 2,
	criticalChance: 6, criticalDamage: 11, armorPiercing: 5,
	knockingDown: 2, range: 7, parry: 20, weight: 3.5, price: 6, coins: 	'sp', condition: 5, conditionMax: 15,},
		{ shortName: 'Боевой болт', longName: 'Тяжелый арбалет, Боевой 	болт', meel: false, actionPoints: 5, reload (перезарядка боеприпаса 	оружия): 14 (ОД),
	attackDice: 6, attackMod: 1, damageDice: 10, damageMod: 				3, criticalChance: 6, criticalDamage: 11, armorPiercing: 			2, knockingDown: 0, range: 30, parry: 20, weight: 5, 				price: 50, coins: 'gp', condition: 7, conditionMax: 				35,},
		{ shortName: 'Алхимический болт ', longName: 'Тяжелый арбалет, Алхимический 	болт', meel: false, actionPoints: 5, reload (перезарядка боеприпаса 	оружия): 14 (ОД),
	attackDice: 6, attackMod: 1, damageDice: 12, damageMod: 				1, criticalChance: 6, criticalDamage: 11, armorPiercing: 			0, knockingDown: 2, range: 30, parry: 20, weight: 5, 				price: 50, coins: 'gp', condition: 7, conditionMax: 				35,},
            ],
    defence: [
		{ shortName: 'Парирование', longName: 'Люцернхаммер, 	парирование', actionPoints: 5,
	parry: 20, parry reserve (количество запасенных 	парирований): XX 	(количество нажатий кнопки 'Парирование'),},
		{ shortName: 'Уклонение', longName: 'Хвиттисворд, уклонение', 	actionPoints: 2,
	parry: 16, parry reserve (количество запасенных уклонений): XX 	(количество нажатий кнопки 'Уклонение'),},
		{ shortName: 'Рукопашная защита', longName: 'Хвиттисворд, 	рукопашная защита', actionPoints: 2,
	parry: 14, parry reserve (количество запасенных защит руками): XX 	(количество нажатий кнопки 'Рукопашная защита'),},
		],
};
