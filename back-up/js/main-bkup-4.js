'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let NPChar = localStorage.getItem('NPChar');
    document.getElementById("NP_Char").value = NPChar;
    ShowHideFields(NPChar);
    return
});

document.getElementById('NP_Char').addEventListener("change", () => {
    let NPChar = document.getElementById('NP_Char').value;
    localStorage.setItem('NP_Char', NPChar);
    ShowHideFields(NPChar);
    return
});

  function getRandomInt(max) {  /* функция генерации (псевдо)случайного числа в диапазоне [0,max) */
		return Math.floor(Math.random() * Math.floor(max));
	}
  function getRandomPercentage() { /* функция генерации (псевдо)случайного % в диапазоне [0,100.0) */
    return Math.random() * 100;
  }
  // функция : выбор из таблицы значений с процентами //
  function selectFromTable(tab_vals, tab_pers) {
    let randomValue = getRandomPercentage();
    let i = 0;
    let percents = tab_pers[i];
    do {
      if (randomValue <= percents) {
        f_Value = tab_vals[i];
        break;
      }
      i++;
      percents = percents + tab_pers[i];
    } while (i < tab_vals.length);
    return f_Value;
  }
  // функция : выбор из таблицы значений с процентами в диапазоне //
  function selectFromTableRng(tab_vals, tab_pers, rng_min, rng_max) {
    let randomValue = rng_min + getRandomInt(100 - (rng_min + (100 - rng_max)));
    let i = 0;
    let percents = tab_pers[i];
    do {
      if (randomValue <= percents) {
        f_Value = tab_vals[i];
        break;
      }
      i++;
      percents = percents + tab_pers[i];
    } while (i < tab_vals.length);
    return f_Value;
  }
  // функция : вытор по ряду Фибоначчи //
  function selectFibonacci(table) {
    let max_index = table.length - 1;
    let Fibonacci_tbl = [ 1, 2, ] // задача ряда Фибонначчи требуемой длины
    let Fibonacci_sum = 3 ;
    for (let i=3; i<table.length; i++) {
      Fibonacci_tbl[i-1] = Fibonacci_tbl[i-3] + Fibonacci_tbl[i-2];
      Fibonacci_sum = Fibonacci_sum + Fibonacci_tbl[i-1];
      }

    let random = getRandomInt(Fibonacci_sum) + 1;
    i = 0;
    let summ = Fibonacci_tbl[i];
    do {
      if (random <= summ) {
        f_Value = table[max_index - i];
        break;
      }
      i++;
      summ = summ + Fibonacci_tbl[i];
    } while (i < table.length);
    // alert (max_index - i);
    return f_Value;
  }
  // фунцкия : выбор нескольких имён //
  function getName(table, max) {
    let Name = "";
    let numberMnames = getRandomInt(max + 1);
    let i = 0;
    do {
      Name = Name + " " + table[getRandomInt(table.length)];
      i++;
    } while (i < numberMnames);
    return Name;
  }

  function ShowHideFields(NPCtype) {
    // console.log(NPCtype);
    switch (NPCtype) {
      case "Name":
        document.getElementById("NPC_Strength").style.display = 'none'; // $("#elementId").hide();
        document.getElementById("NPC_Virtue").style.display = 'none';  // $("#elementId").hide();
        document.getElementById("NPC_Hubris").style.display = 'none';  // $("#elementId").hide();
        break;
      case "Brute":
        document.getElementById("NPC_Strength").style.display = 'block'; // $("#elementId").hide();
        document.getElementById("NPC_Virtue").style.display = 'none';  // $("#elementId").hide();
        document.getElementById("NPC_Hubris").style.display = 'none';  // $("#elementId").hide();
        break;
      case "Hero":
      case "Villain":
        document.getElementById("NPC_Strength").style.display = 'block'; // $("#elementId").hide();
        document.getElementById("NPC_Virtue").style.display = 'block';  // $("#elementId").hide();
        document.getElementById("NPC_Hubris").style.display = 'block';  // $("#elementId").hide();
        break;
      }
  }

  // основной алгоритм //
  function Generate() { /* основной алгоритм генерации всего на свете */
    let Lang = document.getElementById('s_lang').value;
    let Nation = document.getElementById('Nation').value;
    let Origin = document.getElementById('Origin').value;
    var checkbox = document.getElementById('show_Origin');
    let Religion = document.getElementById('Religion').value;
    let Gender = document.getElementById('Gender').value;
    let Sexuality = document.getElementById('Sexuality').value;
    let Age = document.getElementById('Age').value, NPC_Age;
    let min_Age = 0, max_Age = 100;
    let Estate = document.getElementById('Estate').value;
    let Class = document.getElementById('Class').value;
    let firstName, secondName, SurName, NPC_Name;
    let NPCtype = document.getElementById('NP_Char').value;
    let NPC_Strength, Strength, Influence;
    let Brawn = 0, Finesse = 0, Resolve = 0, Wits = 0, Panache = 0; /* Traits */

    let ni; // НАЦИЯ //
    if (Nation == "Random") { // Случайный вы6ор Нации
      ni = getRandomInt(tbl_Nations.length - 2) + 1;
      Nation = tbl_Nations[ni];
    } else { // Определение выбранной пользователем Нации
      ni = 1;
      do {
        if (Nation == tbl_Nations[ni]) {
          //alert (Nation);
          break;
        }
        ni++;
      } while (ni < tbl_Nations.length);
    }

    let oi; // ПРОИСХОЖДЕНИЕ //
    if (Origin == "Random") { /* генерация Происхождения (Heritage) */
      Origin = selectFromTable(tbl_Origins[ni], prs_Origins[ni]);
    }       // Определение выбранноого или сгенерированного Происхождения
      oi = 1;
      do {
        if (Origin == tbl_SNOr[oi]) {
          //alert (Origin);
          break;
        }
        oi++;
      } while (oi < tbl_SNOr.length);

  // РЕЛИГИЯ //
    if (Religion == "Random") { /* генерация Вероисповедания */
      Religion = selectFromTable(tbl_Religions[ni], prs_Religions[ni]);
    }

    if (Gender == "Random") {  /* генерация Пола / Гендера */
      Gender = selectFromTable(tbl_Genders[ni], prs_Genders[ni]);
    }

    if (Sexuality == "Random") { /* генерация сексуальной Ориентации */
      switch (Gender) { /* menz sexual otientationz */
        case "Male":
          Sexuality = selectFromTable(table_Male_Orientations, table_M_Ornts_pers);
          break;
        case "Female":  /* womenz sexual otientationz */
          Sexuality = selectFromTable(table_Female_Orientations, table_F_Ornts_pers);
          break;
        }
    }

  // ВОЗРАСТ //
    if (Age == "Random") {  //* генерация случайного Возраста */
      if (NPCtype == "Brute") { min_Age = 35; } // % --> 18 yo // минимальный возраст Брутов
      else if (NPCtype == "Hero") { min_Age = 36; } // минимальный возраст Героев
      else if (NPCtype == "Villain") { min_Age = 37; } // минимальный возраст Злодейцев
      else if (Estate == "Navy") { min_Age = 35, max_Age = 73; } // возраст в Армии
      else if (Estate == "Army") { min_Age = 36, max_Age = 73; } // возраст во ФЛоте
      else if (Estate == "Clergy") { min_Age = 38; }             // возраст Клериков
      switch (Gender) {
        case "Male" :    //* мужская таблица демографии */
          Age = selectFromTableRng(tbl_M_Ages[ni], prs_M_Ages[ni], min_Age, max_Age);
          break;
        case "Female" :    //* zhenskaja таблица демографии */
          Age = selectFromTableRng(tbl_F_Ages[ni], prs_F_Ages[ni], min_Age, max_Age);
          break;
      }
    } else if (Age > 0) {
      Age = +Age + getRandomInt(5);
    }

    switch (Origin) { /* раздача бонусов к Атрибутам от Происхождения */
      case "Avalon":
        Panache = getRandomInt(2);
        Resolve = 1 - Panache;
        break;
      case "Inismore":
        Panache = getRandomInt(2);
        Wits = 1 - Panache;
        break;
      case "HighMarches":
        Brawn = getRandomInt(2);
        Finesse = 1 - Brawn;
        break;
      case "Castille":
        Finesse = getRandomInt(2);
        Wits = 1 - Finesse;
        break;
      case "Eisen":
        Brawn = getRandomInt(2);
        Resolve = 1 - Brawn;
        break;
      case "Montaigne":
        Finesse = getRandomInt(2);
        Panache = 1 - Finesse;
        break;
      case "Sarmatia":
        Panache = getRandomInt(2);
        Brawn = 1 - Panache;
        break;
      case "Ussura":
        Wits = getRandomInt(2);
        Resolve = 1 - Wits;
        break;
      case "Vesten":
        Brawn = getRandomInt(2);
        Wits = 1 - Brawn;
        break;
      case "Vodacce":
        Finesse = getRandomInt(2);
        Resolve = 1 - Finesse;
        break;
    }

  // СОСЛОВИЕ //
    let ei = 0;
    let randomEstate = 0;
    if (Estate == tbl_Estates[ni][ei]) { // (Estate == "Random") --> Случайный вы6ор Сословия
      randomEstate = getRandomPercentage();
    } else {
      ei = 1;
      randomEstate = prs_Estates[ni][ei];
      do {
        if (Estate == tbl_Estates[ni][ei]) {
          //alert (Estate);
          break;
        }
        ei++;
        randomEstate = randomEstate + prs_Estates[ni][ei];
      } while (ei < tbl_Estates[ni].length);
    }
  // социальный КЛАСС //
    let randomClass;
    if (Class == "Random") { //* генерация Социального КсасСа */
      randomClass = getRandomPercentage();
    } else if ((NPCtype == "Hero") || (NPCtype == "Villain")) {
      randomClass = getRandomPercentage() / 30;
    } else if (NPCtype == "Brute") {
      randomClass = 10 + getRandomPercentage();
    } else if (Class == "Elite") {
      randomClass = getRandomPercentage() / 100;
    } else if (Class == "Upper class") {
      randomClass = getRandomPercentage() / 15;
    } else if (Class == "Top-Middle") {
      randomClass = 7 + getRandomPercentage() / 3.7;
    } else if (Class == "Low-Middle") {
      randomClass = 30 + getRandomPercentage() / 3.33;
    } else if (Class == "Lower class") {
      randomClass = 64 + getRandomPercentage() / 4;
    } else if (Class == "Marginal") {
      randomClass = 90 + getRandomPercentage() / 9.09;
    }

    let j = 1;
    let E_percents = prs_Estates[ni][j];
      do {
        if (randomEstate <= E_percents) {
           let i = 0;
           let percents = prs_Classes[ni][j][i];
           do {
             if (randomClass <= percents) {
               Class = tbl_Classes[ni][j][i];
               break;
             }
             i++;
             percents = percents + prs_Classes[ni][j][i];
         } while (i < tbl_Classes[ni][j].length);
         break;
       }
       j++;
       E_percents = E_percents + prs_Estates[ni][j];
     } while (j < tbl_Estates[ni].length);

    if ((Gender == 'Female') & (Age >= 18)) {
      for (let i=0; i<tbl_EN_ManTitles.length; i++) {
        if (Class == tbl_EN_ManTitles[i]) {
          Class = tbl_EN_FeminiTitles[Lang][i];
          break;
        }
      }
   }

// обращение к КЛЕРИКАлу (брат-сестра / отец-мать) //
//    if (Estate == "Clergy") {
//      if ((Class == "Hermit") || (Class == "Monk")) {
//        if (Gender == "Male") {
//          firstName = "brother ";
//        } else { // Gender == "Female"
//          firstName = "sister ";
//        }
//      } else { // other Clergy
//        if (Gender == "Male") {
//          firstName = "father";
//        } else { // Gender == "Female"
//          firstName = "mother";
//        }
//      }
//    } else { // NOT Clergy
      firstName = "" ;
//    }

    let Class_Name = "Normal";
    j = 0;
    do { // дифференциация имён по социальным КласСам
      let i = 1;
      do { // дифференциация имён по социальным КласСам
        //alert (Class_Names[j][i]);
        if (Class == Class_Names[j][i]) {
          Class_Name = Class_Names[j][0];
          break;
        }
        i++;
      } while (i < Class_Names[j].length);
      if (Class_Name != "Normal") break;
      j++;
    } while (j < Class_Names.length);

  // ИМЕНА //
    //* генерация 1-го имени в зависимости от Нации и Пола */
    switch (Nation) {
      case "Avalon": // множественные и классовые Английские имена
        switch (Class_Name) {
          case "Noble_Name" : // пафосные имена
          case "High_Name" : // пафосные имена
            firstName = (Gender == "Male") ? firstName + getName(M_EN_H_Names[Lang], 2) : firstName + getName(F_EN_H_Names[Lang], 2);
            break;
          case "Normal" :
            firstName = (Gender == "Male") ? firstName + getName(M_EN_Names[Lang], 3) : firstName + getName(F_EN_Names[Lang], 3);
            break;
          case "Low_Name" :
            firstName = (Gender == "Male") ? firstName + M_EN_L_Names[Lang][getRandomInt(M_EN_L_Names[Lang].length)] :
            firstName + F_EN_L_Names[Lang][getRandomInt(F_EN_L_Names[Lang].length)];
            break;
          }
        NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
        break;
      case "Castille": // заморо4енные Испанские имена и двойные фамилии
        if (Gender == "Male") {
          firstName = firstName + getName(M_SP_Names[Lang], 2);
        } else { // (Gender == "Female")
          let Maria = getRandomInt(5);
          if (Maria != 0) {
            firstName = firstName + getName(F_SP_Names[Lang], 2);
          } else { // Name == Maria
            firstName = firstName + Maria_lang[Lang] + Maria_Names[Lang][getRandomInt(Maria_Names[Lang].length)];
          }
        }
        if (Origin == "Castille") {
          NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)] + name_union_lang[Lang] + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
        } else {
          NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
        }
        break;
      case "Eisen": // германские имена и фамилии
        firstName = (Gender == "Male") ? firstName + getName(M_Names[Lang][ni], 2) : firstName + getName(F_Names[Lang][ni], 2);
          if (Class_Name == "Noble_Name") {
            NPC_Name = firstName + " " + GE_predicats[Lang][getRandomInt(GE_predicats[Lang].length)] + GE_Noblesse[Lang][getRandomInt(GE_Noblesse[Lang].length)];
          } else {
            NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
          }
        break;
      case "Montaigne": //  французские 4етверные имена + аристократи4еские фамилии
        firstName = (Gender == "Male") ? firstName + getName(M_Names[Lang][ni], 3) : firstName + getName(F_Names[Lang][ni], 3);
          if ((Gender == "Male") || (Class_Name == "Low_Name")) { firstName = M_FR_sm_Names[Lang][getRandomInt(M_FR_sm_Names[Lang].length)] }
          if (Class_Name == "Noble_Name") {
            NPC_Name = firstName + " " + FR_Noblesse[Lang][getRandomInt(FR_Noblesse[Lang].length)];
          } else {
            NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
          }
        break;
      case "Sarmatia": // двойные польские и балтские имена
        firstName = (Gender == "Male") ? firstName + getName(M_Names[Lang][ni], 2) : firstName + getName(F_Names[Lang][ni], 2);
        SurName = Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
        if (Gender == "Female") {
          switch (Lang) {
            case '0': // language == ENGlish
              switch (SurName[SurName.length - 1]) { // [i], [y], [u], [e], [o], [a] + [g]
                case "i":
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "anka" : SurName + "na";
                  break;
                case "а":
                  if (Age > (18 + getRandomInt(10))) {
                    SurName = SurName.replace("а","i");
                    SurName = SurName + "na";
                  } else {
                    SurName = SurName.replace("а","i");
                    SurName = SurName + "anka";
                  }
                break;
                case "e":
                case "o":
                case "y":
                  //
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "ianka" : SurName + "ina";
                  break;
                case "g":
                  SurName = SurName.replace("g","ż");
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "anka" : SurName + "yna";
                  break;
                default:
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "ówna" : SurName + "owa";
                }
              break;
            case '1': // language == RUSsian
              switch (SurName[SurName.length - 1]) { // [i], [y], [u], [e], [o], [a] + [g]
                case "а":
                  if (Age > (18 + getRandomInt(10))) {
                    SurName = SurName.replace("а","и");
                    SurName = SurName + "на";
                  } else {
                    SurName = SurName.replace("а","я");
                    SurName = SurName + "нка";
                  }
                  break;
                case "и":
                case "е":
                case "о":
                case "у":
                  if (Age > (18 + getRandomInt(10))) {
                    SurName = SurName + "на";
                  } else {
                    SurName = SurName.replace("и","я");
                    SurName = SurName + "нка";
                  }
                  break;
                case "г":
                  SurName = SurName.replace("г","ж");
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "анка" : SurName + "ина";
                  break;
                default:
                  SurName = (Age < (18 + getRandomInt(10))) ? SurName + "увна" : SurName + "ова";
              }
            break;
          }
        }
        NPC_Name = firstName + " " + SurName;
        break;
      case "Ussura": // сословные руссские имена
        switch (Class_Name) {
          case "Noble_Name" : // дворянские боярские имена
            if (Gender == "Male") {
              firstName = M_RU_NE_Names[getRandomInt(M_RU_NE_Names.length)];
              NPC_Name = firstName + " " + RU_N_Surnames[getRandomInt(RU_N_Surnames.length)];
              NPC_Name = NPC_Name + " сын " + RU_NE_fatherNames[getRandomInt(RU_NE_fatherNames.length)];
            } else { // (Gender == "Female")
              firstName = F_RU_NE_Names[getRandomInt(F_RU_NE_Names.length)];
              SurName = RU_N_F_Surnames[getRandomInt(RU_N_F_Surnames.length)];
              NPC_Name = firstName + " " + SurName;
              NPC_Name = NPC_Name + " дочь " + RU_NE_fatherNames[getRandomInt(RU_NE_fatherNames.length)];
            }
            break;
          case "High_Name" : // пафосные имена
            if (Gender == "Male") {
              firstName = M_RU_Names[getRandomInt(M_RU_Names.length)];
              NPC_Name = firstName + " " + Surnames[oi][getRandomInt(Surnames[oi].length)];
              NPC_Name = NPC_Name + " сын " + RU_fatherNames[getRandomInt(RU_fatherNames.length)];
            } else { // (Gender == "Female")
              firstName = F_RU_Names[getRandomInt(F_RU_Names.length)];
              NPC_Name = firstName + " " + RU_F_Surnames[getRandomInt(RU_F_Surnames.length)];
              NPC_Name = NPC_Name + " дочь " + RU_fatherNames[getRandomInt(RU_fatherNames.length)];
            }
            break;
          case "Normal" :
            if (Gender == "Male") {
              firstName = M_Names[Lang][ni][getRandomInt(M_Names[Lang][ni].length)];
              NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
            } else {
              firstName = F_Names[Lang][ni][getRandomInt(F_Names[Lang][ni].length)];
              SurName = (Origin == "Ussura") ? RU_F_Surnames[getRandomInt(RU_F_Surnames.length)] : Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
              NPC_Name = firstName + " " + SurName;
            }
            break;
          case "Low_Name" :
            firstName = (Gender == "Male") ? M_RU_L_Names[getRandomInt(M_RU_L_Names.length)] : F_RU_L_Names[getRandomInt(F_RU_L_Names.length)];
            SurName = (Gender == "Male") ? RU_L_Surnames[getRandomInt(RU_L_Surnames.length)] : RU_FL_Surnames[getRandomInt(RU_FL_Surnames.length)];
            NPC_Name = firstName + " " + SurName;
            break;
          }
        break;
      case "Vendel": // скандинавские имена и отчества
        if (Gender == "Male") {
          firstName = getName(M_Names[Lang][ni], 1);
          oi = (oi < 2) ? oi : (oi == 2) ? oi - 1 : oi - 2;
          NPC_Name = firstName + "" + getName(M_Names[Lang][oi], 1) + fathername_lang[Lang];
        } else { // (Gender == "Female")
            firstName = getName(F_Names[Lang][ni], 1);
            oi = (oi < 2) ? oi : (oi == 2) ? oi - 1 : oi - 2;
            NPC_Name = firstName + "" + getName(M_Names[Lang][oi], 1) + fathername_lang[(+Lang+2)];
        }
        break;
      case "Vodacce": //  итальянские имена
        firstName = (Gender == "Male") ? firstName + getName(M_Names[Lang][ni], 2) : firstName + getName(F_Names[Lang][ni], 2);
          if (Class_Name == "Noble_Name") {
            NPC_Name = firstName + " " + VO_Noblesse[Lang][getRandomInt(VO_Noblesse[Lang].length)];
          } else if (Class_Name == "High_Name") {
            oi = (oi < 2) ? oi : (oi == 2) ? oi - 1 : oi - 2;
            SurName = M_Names[Lang][oi][getRandomInt(M_Names[Lang][oi].length)]; // выбор родового имени
            // alert (SurName[0]);
            switch (SurName[0]) { // определение первой гласной
              case "A":
              case "O":
              case "E":
              case "I":
              case "Y":
              case "U":
              case "А":
              case "О":
              case "Е":
              case "Є":
              case "Э":
              case "И":
              case "У":
              case "Ю":
                NPC_Name = firstName + VO_predicats[(+Lang+2)] + SurName;
                break;
              default:
                NPC_Name = firstName + VO_predicats[Lang] + " " + SurName;
            }
          } else {
            NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
          }
        break;
      default:
        firstName = (Gender == "Male") ? firstName + M_Names[Lang][ni][getRandomInt(M_Names[Lang][ni].length)] :
        firstName + F_Names[Lang][ni][getRandomInt(F_Names[Lang][ni].length)];
        NPC_Name = firstName + " " + Surnames[Lang][oi][getRandomInt(Surnames[Lang][oi].length)];
    }

    Age = +Age;
    if (Age < 1) {
        NPC_Age = lang_Ages[Lang][0];
    } else if ((Age < 10) || (Age > 20)) {
      switch (Age % 10) {
        case 1:
          NPC_Age = Age + lang_Ages[Lang][1];
          break;
        case 2:
        case 3:
        case 4:
          NPC_Age = Age + lang_Ages[Lang][2];
          break;
        default:
          NPC_Age = Age + lang_Ages[Lang][3];
        }
    } else {
        NPC_Age = Age + lang_Ages[Lang][3];
    }

    if (NPCtype == "Brute") { // определение силы брута
      // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ... ряд Фибоначчи, а что вы думали
      Strength = selectFibonacci(Strength_dots);
      NPC_Strength = lang_Strength[Lang][0] + ": " + Strength;
      //
    } else if (NPCtype == "Hero") { // определение силы Героя
      Strength = selectFibonacci(Strength_dots);
      NPC_Strength = lang_Strength[Lang][0] + ": " + Strength;
      //
    } else if (NPCtype == "Villain") { // определение силы и влияния Злодейца
      Strength = selectFibonacci(Strength_smld);
      Influence = selectFibonacci(Strength_smld);
      NPC_Strength = lang_Strength[Lang][0] + ": " + Strength + " " + lang_Strength[Lang][1] + ": " + Influence;
      //
    } else {
      NPC_Strength = "";
    }

    let Arcana, Virtue, Hubris; // Arcana
    if ((NPCtype == "Brute") || (NPCtype == "Name")) {
      Virtue = "";
      Hubris = "";
      Arcana = "";
    } else if ((NPCtype == "Hero") || (NPCtype == "Villain")) {
      Virtue = lang_Arcana[Lang][1] + ": " + tbl_Virtue[Lang][getRandomInt(tbl_Virtue.length)];
      Hubris = lang_Arcana[Lang][2] + ": " + tbl_Hubris[Lang][getRandomInt(tbl_Hubris.length)];
      Arcana = Virtue + Hubris;
    }


    if ((Lang == 0) & (Age < 18)) {
      Class = Class + "’s child"
    }

    //* перевод содержания переменных перед отвравкой на вывод */
    if (Lang > 0) {
      for (let i=1; i<lang_Class[0].length; i++) {
        if (Class == lang_Class[0][i]) {
          if (Age < 18) {
            Class = (Gender == "Male") ? "сын " : "дочь ";
            Class = Class + lang_Class[+Lang+1][i];
          } else {
            Class = lang_Class[Lang][i];
          }
          break;
        }
      }
      for (let i=1; i<lang_Nation[0].length; i++) {
        if (Nation == lang_Nation[0][i]) {
          Nation = lang_Nation[Lang][i];
          break;
        }
      }
      for (let i=1; i<lang_Origins[0].length; i++) {
        if (Origin == lang_Origins[0][i]) {
          Origin = lang_Origins[Lang][i];
          break;
        }
      }
      for (let i=1; i<lang_Religion[0].length; i++) {
        if (Religion == lang_Religion[0][i]) {
          Religion = lang_Religion[Lang][i];
          break;
        }
      }
      for (let i=1; i<lang_Sexuality[0].length; i++) {
        if (Sexuality == lang_Sexuality[0][i]) {
          Sexuality = lang_Sexuality[Lang][i];
          break;
        }
      }
    }

    if (checkbox.checked) {
      Origin = " (" + Origin + "), ";
    } else {
      Origin = ", ";
    }

    //* составление Социального Класса + Возраст */
    document.getElementById('NPC_Class').value = Class + ", " + NPC_Age;
    //* отправление полного имени в форму */
	document.getElementById('NPC_Name').value = NPC_Name;
    //* составление Национальность, Вероисповедание */
    document.getElementById('NPC_Nation').value = Nation + Origin + Religion + ", " + Sexuality;
    //* возвращение силы НПЦ */
    document.getElementById('NPC_Strength').value = NPC_Strength;
    //* возвращение Арканы */
    document.getElementById('NPC_Virtue').value = Virtue;
    document.getElementById('NPC_Hubris').value = Hubris;

  }
