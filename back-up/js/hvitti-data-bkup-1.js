'use strict'
// новые базы данных : Массивы Объектов : вкуснотищща
const HVITTI = {
    player: 'Vsevyd',
    isGM: false,
    charFirstName: 'Хвиттисворт', charSecondtName: 'Варааскег',
    charConcept: 'гном Изобретатель', charDescr: ' и Алхимик',
    maxHP: 28, currentHP: 28,
    initD6: 4, initMod: 0,
    maxActionPoints: 14, currentRoundAP: 14,
    speedFt: 25, speedHx: 5, runMult: 4,
    armor:   [],
    attack:  [
            {shortName: 'Mолот', longName: 'Люцернхаммер, молот', meel: true, actionPoints: 6,
                attackDice: 5, attackMod: 0, damageDice: 8, damageMod: 2,
                criticalChance: 6, criticalDamage: 11, armorPiercing: 0,
                knockingDown: 6, range: 7, parry: 20,
                weight: 3.5, price: 6, coins: 'sp', condition: 5, conditionMax: 15,},
            { shortName: 'Клевец', longName: 'Люцернхаммер, клевец', meel: true, actionPoints: 6,
            	attackDice: 5, attackMod: 0, damageDice: 8, damageMod: 2,
            	criticalChance: 6, criticalDamage: 11, armorPiercing: 5,
            	knockingDown: 2, range: 7, parry: 20,
                weight: 3.5, price: 6, coins: 'sp', condition: 5, conditionMax: 15,},
            ],
    defence: [],
};
