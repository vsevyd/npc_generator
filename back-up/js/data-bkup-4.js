let tbl_Nations = ["Random", "Avalon", "Castille", "Eisen", "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", ];

let tbl_EN_Genders = ["Female", "Male",];
let prs_EN_Genders = [53.7, 46.3,];
let prs_GE_Genders = [55.52, 44.48,];
let tbl_Genders = [0, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, tbl_EN_Genders, ];
let prs_Genders = [0, prs_EN_Genders, prs_GE_Genders, prs_GE_Genders, prs_EN_Genders, prs_EN_Genders, prs_EN_Genders, prs_EN_Genders, prs_EN_Genders, ];

let tbl_EN_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_EN_Origins = [87.4, 3.6, 4.6, 0.5, 0.2, 0.3, 1.2, 0.1, 0.1, 0.2, 0.3, 1.5, ];
let tbl_SP_Origins = ["Castille", "Avalon", "Highland", "Inismore", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_SP_Origins = [80.0, 0.7, 0.1, 0.2, 1.46, 1.46, 3.0, 0.6, 0.73, 7.0, 3.0, 1.0, ];
let tbl_GE_Origins = ["Eisen", "Avalon", "Highland", "Inismore", "Castille",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_GE_Origins = [91, 0.2, 0.1, 0.1, 2, 1.1, 3.6, 2.6, 0.1, 1.0, 0.2, 1.0, ];
let tbl_FR_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_FR_Origins = [0.9, 1.75, 1.75, 1.57, 1.67, 88, 1.0, 0.5, 0.73, 1.33, 1.0, 1.0, ];
let tbl_SA_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_SA_Origins = [0.04, 0.01, 0.01, 1.21, 0.28, 1.21, 93, 2.91, 1.21, 1.21, 1.0, 1.0, ];
let tbl_US_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Catai", "Judas", ];
let prs_US_Origins = [0.5, 0.1, 0.1, 0.5, 4.4, 0.5, 15, 66, 0.5, 0.5, 4.0, 3.0, 4.0, ];
let tbl_VE_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_VE_Origins = [1.33, 0.66, 0.66, 0.33, 1.33, 0.66, 1.33, 1.33, 92, 0.33, 0.1, 1.0, ];
let tbl_VO_Origins = ["Avalon", "Highland", "Inismore", "Castille", "Eisen",
    "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", "Cressent", "Judas", ];
let prs_VO_Origins = [0.3, 0.1, 0.2, 0.4, 0.3, 1.0, 3.0, 0.5, 0.3, 90, 3.0, 1.0, ];

let tbl_Origins = [0, tbl_EN_Origins, tbl_SP_Origins, tbl_GE_Origins, tbl_FR_Origins, tbl_SA_Origins, tbl_US_Origins, tbl_VE_Origins, tbl_VO_Origins, ];
let prs_Origins = [0, prs_EN_Origins, prs_SP_Origins, prs_GE_Origins, prs_FR_Origins, prs_SA_Origins, prs_US_Origins, prs_VE_Origins, prs_VO_Origins, ];

let tbl_EN_Religion = ["Avalonian", "Protestant", "Vaticine", "Orthodox", "agnostic", "muslim", "pagan", "unknown",];
let prs_EN_Religion = [65.0, 17.0, 9.0, 0.1, 4.2, 1.7, 2.9, 0.1, ];
let tbl_SP_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_SP_Religion = [95.0, 1.21, 0.6, 0.5, 1.1, 0.03, 2.2, 0.05, 0.05, 0.05, ];
let tbl_GE_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_GE_Religion = [45.3, 44.8, 0.16, 1.14, 2.5, 0.12, 3.1, 2.3, 0.3, 0.3, ];
let tbl_FR_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_FR_Religion = [97.0, 2.0, 0.3, 1.0, 0.4, 0.6, 3.2, 0.05, 0.05, 0.05, ];
let tbl_SA_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_SA_Religion = [91.7, 0.36, 0.03, 1.3, 0.05, 0.05, 3.0, 1.5, 0.05, 2.05, ];
let tbl_US_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "Old Believer", "agnostic", "pagan", "oter", "unknown",];
let prs_US_Religion = [9.19, 2.9, 0.0033, 70, 11.1, 4.15, 1.75, 2.27, 3.45, 0.05, 2.05, ];
let tbl_VE_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_VE_Religion = [11.1, 82.0, 1.11, 1.11, 1.1, 0.1, 3.33, 3.33, 0.3, 0.3, ];
let tbl_VO_Religion = ["Vaticine", "Protestant", "Avalonian", "Orthodox", "muslim", "Judaist", "agnostic", "pagan", "oter", "unknown",];
let prs_VO_Religion = [95.0, 1.21, 0.6, 0.5, 3.7, 0.2, 0.9, 0.1, 0.1, 0.05, ];

let tbl_Religions = [0, tbl_EN_Religion, tbl_SP_Religion, tbl_GE_Religion, tbl_FR_Religion, tbl_SA_Religion, tbl_US_Religion, tbl_VE_Religion, tbl_VO_Religion, ];
let prs_Religions = [0, prs_EN_Religion, prs_SP_Religion, prs_GE_Religion, prs_FR_Religion, prs_SA_Religion, prs_US_Religion, prs_VE_Religion, prs_VO_Religion, ];

let tbl_EN_M_Ages = [0, 1, 3, 5, 6, 9, 10, 12, 15, 18, 20,
      21, 24, 25, 30, 35, 36, 40, 45, 48, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,];
let prs_EN_M_Ages = [18.0, 0.54, 0.68, 1.78, 1, 3.43, 0.92, 1.86, 2.79, 3.73, 1.33,
      3.73, 3.75, 1.13, 6.33, 6.18, 1.3, 4.95, 6.21, 3.74, 2.52, 6.72, 5.71, 4.48, 2.2, 1.29, 1.27, 1.29, 1.28, 1.19,];
let prs_GE_M_Ages = [18.0, 0.54, 0.69, 2.08, 1.03, 3.66, 1, 3, 5.37, 7.63, 3,
      1, 2, 1, 6.66, 5.34, 1, 5, 5, 3, 2, 4, 5, 4, 2, 1, 1, 1, 1, 1,];

let tbl_M_Ages = [0, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, tbl_EN_M_Ages, ];
let prs_M_Ages = [0, prs_EN_M_Ages, prs_GE_M_Ages, prs_GE_M_Ages, prs_GE_M_Ages, prs_EN_M_Ages, prs_GE_M_Ages, prs_EN_M_Ages, prs_EN_M_Ages, ];

let tbl_EN_F_Ages = [0, 1, 3, 5, 6, 9, 10, 12, 15, 18, 20,
      21, 24, 25, 30, 35, 36, 40, 45, 48, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,];
let prs_EN_F_Ages = [18.0, 0.31, 0.44, 1.19, 0.675, 2.505, 0.96, 1.98, 3.26, 3.47, 2.33,
      1.26, 3.57, 1.12, 5.87, 5.71, 1.14, 4.46, 5.6, 3.28, 2.19, 5.9, 5.93, 4.78, 3.33, 2.65, 2.44, 2.15, 1.73, 1.21, 0.56,];
let prs_GE_F_Ages = [18.0, 0.31, 0.69, 1.97, 0.03, 3.64, 1.54, 3.82, 5.37, 3.63, 1,
      1, 4, 1, 5, 6, 1, 5, 5.59, 3.41, 2, 6, 4, 4, 2.55, 1.62, 1.31, 1.52, 1.47, 1.22, 0.31,];

let tbl_F_Ages = [0, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, tbl_EN_F_Ages, ];
let prs_F_Ages = [0, prs_EN_F_Ages, prs_GE_F_Ages, prs_GE_F_Ages, prs_GE_F_Ages, prs_EN_F_Ages, prs_EN_F_Ages, prs_EN_F_Ages, prs_EN_F_Ages, ];

  let table_Male_Orientations  =  ["Straight", "Some Exp", "Asexual", "Bi", "Gay",];
  let table_M_Ornts_pers = [92.7,  4.3, 0.4, 1.0, 1.6,];
  let table_Female_Orientations = ["Straight", "Some Exp", "Asexual", "Bi", "Gay",];
  let table_F_Ornts_pers = [84.6, 10.1, 3.0, 1.4, 0.9,];

  let tbl_EN_Clergy = ["Archbishop", "Bishop", "Abbot Parliamentarian", "Abbot", "Prior",
  "Archdeacon", "Deacon", "Canonic", "Superior", "Priest",
  "Vicar", "Chaplain", "Monk", "Monk", "Monk", "Hermit", "Hermit",];
  let prs_EN_Clergy = [0.1, 0.9, 3, 3, 8, 4.5, 3.5, 6, 5, 6.5, 5.5, 9, 9, 10, 16, 7, 4,];
  //
  let tbl_EN_Army = ["Field Marshal", "General", "Lieutenant General", "Major General", "Brigadier",
  "Colonel", "Lieutenant Colonel", "Major", "Captain", "Lieutenant",
  "Second Lieutenant", "Staff Sergeant", "Sergeant", "Corporal", "Servant", "Lance Corporal", "Soldier",];
  let prs_EN_Army = [0.1, 0.9, 2, 4, 8, 4.5, 3.5, 6, 5, 6.5, 5.5, 9, 9, 10, 4, 7, 16,];
  //
  let tbl_EN_Navy = ["Navy Captain", "Navy Lieutenant", "Navy Master", "Navy Purser", "Midshipman",
  "Midshipman's mate", "Master's mate", "Gunner", "Boatswain", "Carpenter",
  "Armourer", "Ropemaker", "Caulker", "Master-at-arms", "Sailmaker", "Coxswain", "Quartermaster",
  "Cooper", "Ship's corporal", "Watch captains", "Armourer's mate", "Gunner's mate", "Boatswain's mate", "Caulker's mate",
  "Carpenter's mate", "Sailmaker's mate", "Quartermaster's mate", "Able Seaman", "Ordinary Seaman", "Boy", ];
  let prs_EN_Navy = [0.33, 0.9, 1, 1, 2, 3, 2, 1, 2, 3, 1, 1, 2, 1, 1, 1, 1, 1, 3, 2, 3, 6, 6, 6, 6, 2, 3, 9.56, 13.33, 14,88, ];
  //
  let tbl_EN_Citizens = ["Duke", "Marquis", "Earl (Count)", "Viscount", "Baron", "Baronet", "Mayor",
  "Rich Merchant", "Alderman", "Merchant", "Small Merchant", "Expert",
  "Shopkeeper", "Artisan", "Laborer", "Servant", "Beggar", "Criminal",];
  let prs_EN_Citizens = [0.1, 0.3, 0.5, 1, 2, 3, 8, 4.5, 3.5, 6, 5, 6.5, 5.5, 9, 9, 10, 16, 7, 4,];
  //
  let tbl_EN_Villagers = ["Duke", "Marquis", "Earl (Count)", "Viscount", "Baron", "Baronet", "Knight", // Lord
  "Rich Squire", "Rich Gentleman", "Squire", "Gentleman", "Yeoman",
  "Freeholder", "Farmer", "Copyholder", "Villein", "Farmhand", "Vagrant", "Criminal",];
  let prs_EN_Villagers = [0.1, 0.3, 0.5, 1, 2, 3, 8, 4.5, 3.5, 6, 5, 6.5, 5.5, 9, 9, 10, 16, 7, 4,];
  // German: Kaiser, König, Herzog, Fürst, Kurfürst, Graf, Markgraf, Pfalzgraf, Freiherr
  let tbl_EN_ManTitles = ["Duke", "Marquis", "Earl (Count)",
  "Viscount", "Baron", "Baronet", "Knight", "Lord",
  "Rich Squire", "Rich Gentleman", "Squire", "Gentleman", "Bojarin",
  "Farmhand", "Laborer", "Servant", "Beggar", "Vagrant", "Criminal",
  "Black-sew peasant", "Serf peasant",];
  let tbl_EN_FeminiTitles = [["Duchess", "Marchioness", "Countess",
  "Viscountess", "Baroness", "Dame", "Dame", "Lady",
  "Rich Lady", "Rich Lady", "Lady", "Lady", "Bojarynya",
  "Farmhand", "Domestic", "Maid", "Hooker", "Whore", "Slut",
  "Black-sew peasant", "Serf peasant",], [
  "Герцогиня", "Маркиза", "Графиня",
  "Виконтесса", "Баронесса", "Баронесса", "Дама", "Леди",
  "Богатая леди", "Богатая леди", "Леди", "Леди", "Боярыня",
  "Батрачка", "Прислуга", "Служанка", "Потаскушка", "Блудница", "Шлюха",
  "Черносошная крестьянка", "Крепостная крестьянка"],];
   //
let tbl_EN_Estates = ["Random", "Clergy", "Army", "Navy", "Citizen", "Villager", ];
let prs_EN_Estates = [0, 1, 1, 0.92, 18, 79, ];
let tbl_EN_Classes = [0, tbl_EN_Clergy, tbl_EN_Army, tbl_EN_Navy, tbl_EN_Citizens, tbl_EN_Villagers, ];
let prs_EN_Classes = [0, prs_EN_Clergy, prs_EN_Army, prs_EN_Navy, prs_EN_Citizens, prs_EN_Villagers, ];
    //

let tbl_US_Clergy = ["Archbishop", "Bishop", "Abbot", "Prior",
    "Archdeacon", "Deacon", "Canonic", "Superior", "Priest",
    "Chaplain", "Monk", "Hermit", ];
let prs_US_Clergy = [0.1, 0.9, 3, 3,    4, 8, 6, 5, 31,    10, 25, 4,];
    //let num_En_Clergy = (table_En_Clergy.length);
let tbl_US_Army = ["General", "Lieutenant General", "Major General", "Brigadier",
    "Colonel", "Lieutenant Colonel", "Major", "Captain", "Lieutenant",
    "Second Lieutenant", "Staff Sergeant", "Sergeant", "Corporal", "Lance Corporal", "Soldier",];
let prs_US_Army = [0.9, 2, 4, 8, 4.5, 3.5, 6, 5, 6.5, 5.5, 9, 9, 10, 4, 7, 16, ];
    //let num_En_Army = (table_En_Army.length);
let tbl_US_Navy = ["Navy Captain", "Navy Lieutenant", "Navy Master", "Navy Purser", "Midshipman",
    "Midshipman's mate", "Master's mate", "Gunner", "Boatswain", "Carpenter",
    "Armourer", "Ropemaker", "Caulker", "Master-at-arms", "Sailmaker", "Coxswain", "Quartermaster",
    "Cooper", "Ship's corporal", "Watch captains", "Armourer's mate", "Gunner's mate", "Boatswain's mate", "Caulker's mate",
    "Carpenter's mate", "Sailmaker's mate", "Quartermaster's mate", "Able Seaman", "Ordinary Seaman", "Boy", ];
let prs_US_Navy = [0.33, 0.9, 1, 1, 2, 3, 2, 1, 2, 3, 1, 1, 2, 1, 1, 1, 1, 1, 3, 2, 3, 6, 6, 6, 6, 2, 3, 9.56, 13.33, 14,88, ];
let tbl_US_Citizens = ["Bojarin",
    "Rich Merchant", "Merchant", "Small Merchant", "Expert",
    "Shopkeeper", "Artisan", "Laborer", "Servant", "Beggar", "Criminal", ];
let prs_US_Citizens = [5,    2, 3, 6, 8,    6, 5, 29, 26, 6, 4,];
let tbl_US_Villagers = ["Bojarin",
    "Black-sew peasant", "Serf peasant", "Vagrant", "Criminal",];
let prs_US_Villagers = [5, 32, 53, 6, 4,];
let tbl_US_Estates = ["Random", "Clergy", "Army", "Navy", "Citizen", "Villager", ];
let prs_US_Estates = [0, 1.2, 0.9, 0.38, 7.52, 90, ]; // army 0.9...2.0 %
let tbl_US_Classes = [0, tbl_US_Clergy, tbl_US_Army, tbl_US_Navy, tbl_US_Citizens, tbl_US_Villagers, ];
let prs_US_Classes = [0, prs_US_Clergy, prs_US_Army, prs_US_Navy, prs_US_Citizens, prs_US_Villagers, ];
// tbl_Nations = ["Random", "Avalon", "Castille", "Eisen", "Montaigne", "Sarmatia", "Ussura", "Vendel", "Vodacce", ];
let tbl_Estates = [0, tbl_EN_Estates, tbl_EN_Estates, tbl_EN_Estates, tbl_EN_Estates, tbl_EN_Estates, tbl_US_Estates, tbl_EN_Estates, tbl_EN_Estates, ];
let prs_Estates = [0, prs_EN_Estates, prs_EN_Estates, prs_EN_Estates, prs_EN_Estates, prs_EN_Estates, prs_US_Estates, prs_EN_Estates, prs_EN_Estates, ];
let tbl_Classes = [0, tbl_EN_Classes, tbl_EN_Classes, tbl_EN_Classes, tbl_EN_Classes, tbl_EN_Classes, tbl_US_Classes, tbl_EN_Classes, tbl_EN_Classes, ];
let prs_Classes = [0, prs_EN_Classes, prs_EN_Classes, prs_EN_Classes, prs_EN_Classes, prs_EN_Classes, prs_US_Classes, prs_EN_Classes, prs_EN_Classes, ];

let Noble_Names = ["Noble_Name", "Duke", "Marquis", "Earl (Count)", "Viscount", "Baron", "Baronet", "Bojarin",
   ];
let High_Names = ["High_Name", "Archbishop", "Bishop", "Abbot Parliamentarian", "Abbot", "Prior", "Archdeacon",
   "Field Marshal", "General", "Lieutenant General", "Major General",  "Navy Captain", "Navy Lieutenant",
   "Mayor", "Knight",
   ];
let Low_Names = ["Low_Name", "Monk", "Hermit", "Armourer's mate", "Gunner's mate", "Boatswain's mate", "Caulker's mate",
   "Carpenter's mate", "Sailmaker's mate", "Quartermaster's mate", "Able Seaman", "Ordinary Seaman", "Boy",
   "Corporal", "Servant", "Lance Corporal", "Soldier", "Laborer", "Farmhand", "Beggar", "Vagrant", "Criminal",
   "Serf peasant", "Black-sow peasant",
   ];
let Class_Names = [Noble_Names, High_Names, Low_Names,
   ];

let M_EN_H_Names_EN = [ /* Таблица high-class мужских английских высоких имён */
   "Aaron", "Adam", "Albert", "Alexander", "Alfred", "Andrew", "Anthony", "Arnold", "Arthur",
   "Benjamin", "Bernard", "Brandon", "Bartholomew",
   "Calvin", "Carlos", "Charles", "Christian", "Christopher", "Curtis",
   "Daniel", "David", "Davis", "Dennis", "Derek", "Donald", "Douglas", "Dustin", "Dylan",
   "Edgar", "Edmond", "Edward", "Edwin", "Elton", "Emmett", "Ernest", "Ethan",
   "Ferdinand", "Floyd", "Francis", "Frederick", "Fuller",
   "George", "Gerald", "Gilbert", "Glover", "Gordon", "Graham",
   "Harold", "Harrison", "Herbert", "Howard",
   "James", "Jonathan",  "Keith", "Kenneth", "Kevin",
   "Leonard", "Louis", "Martin", "Marvin", "Maurice", "Maximilian", "Melvin", "Michael",
   "Nathan", "Norman", "Oliver", "Oscar", "Osteen", "Oswald", "Owen",
   "Patrick", "Paul", "Peter", "Philip",
   "Ralph", "Raymond", "Richard", "Robert", "Rodger", "Roland", "Ronald",
   "Samuel", "Simon", "Stephen",
   "Theodore", "Thomas", "Victor", "Wayne", "Wilhelm", "William", "Wilson", ];
let M_EN_Names_EN = [ /* Таблица людских мужских английских имён */
    "Aaron", "Adam", "Alan", "Albert", "Alexander", "Alfred", "Andrew", "Anthony", "Arnold", "Arthur",
    "Barry", "Benjamin", "Bernard", "Brandon", "Brian", "Bruce", "Bryan",
    "Calvin", "Carlos", "Charles", "Charlie", "Chris", "Christian", "Christopher", "Colin", "Conrad", "Curtis",
    "Dale", "Daniel", "Dave", "David", "Davis", "Dean", "Dennis", "Derek", "Dick", "Donald", "Douglas", "Duke", "Dustin", "Dylan",
    "Earl", "Edgar", "Edmond", "Edward", "Edwin", "Elton", "Emmett", "Eric", "Ernest", "Ethan",
    "Felix", "Floyd", "Francis", "Frank", "Fuller",
    "George", "Gerald", "Gilbert", "Glover", "Gordon", "Graham",
    "Harold", "Harrison", "Harry", "Henry", "Herbert", "Howard",
    "James", "Jeff", "Jerry", "Jim", "Joel", "John", "Jonathan",
    "Kane", "Keith", "Kenneth", "Kevin", "Kurt",      "Larry", "Leonard", "Louis", "Lynn",
    "Mark", "Martin", "Marvin", "Matt", "Maurice", "Melvin", "Michael",
    "Nathan", "Neal", "Neil", "Norman",      "Oliver", "Oscar", "Osteen", "Oswald", "Owen",
    "Patrick", "Paul", "Peter", "Philip",      "Ralph", "Randy", "Raymond", "Richard", "Robert", "Rodger", "Roland", "Ronald", "Roy",
    "Samuel", "Simon", "Stephen", "Steve",      "Terry", "Theodore", "Thomas",
    "Victor", "Wayne", "Wilhelm", "William", "Wilson",];
let M_EN_L_Names_EN = [ /* Таблица людских мужских английских низких имён */
    "Aaron", "Adam", "Alan", "Alex", "Andy", "Arny", "Arthy",
    "Barry", "Ben", "Benjy", "Berny", "Bill", "Billy", "Bob", "Bobby",
    "Brad", "Brand", "Brian", "Bruce", "Bryan", "Bud", "Bart", "Bass", "Bert",
    "Cal", "Carl", "Chack", "Chris", "Colin", "Connie", "Curtis",
    "Dale", "Dan", "Danny", "Dave", "David", "Davis", "Dean", "Denn", "Dirk", "Dick", "Don", "Donald", "Duke", "Dylan",
    "Earl", "Edgar", "Ed", "Edwin", "Elton", "Emmett", "Eric", "Erny", "Ethan",
    "Felix", "Floyd", "Frank", "Fred", "Fuller",
    "Gary", "George", "Glover", "Gordon", "Graham", "Greg",
    "Harry",  "Jack", "Jake", "James", "Jay", "Jeff", "Jerry", "Jim", "Joel", "John", "Johnny", "Jon",
    "Kane", "Keith", "Ken", "Kevin", "Kurt", "Kit",      "Larry", "Leo", "Lou", "Lynn",
    "Mark", "Martin", "Marv", "Matt", "Max", "Mel", "Mitch", "Mike",
    "Nathan", "Neal", "Neil", "Nick", "Norman",
    "Oliver", "Oscar", "Osteen", "Oswald", "Owen",
    "Patrick", "Paul", "Pete", "Peter", "Phil",
    "Ralph", "Randy", "Rick", "Rob", "Rodger", "Roland", "Ronald", "Ronnie", "Roy",
    "Sam", "Sid", "Simon", "Smith", "Steve", "Spike", "Sandie",
    "Ted", "Terry", "Tim", "Tom", "Tony",
    "Vic", "Wayne", "Willie", "Wilson",];
//
let M_SP_Names_EN = [ /* Таблица людских мужских испанских имён */
      "José", "Antonio", "Juan", "Manuel", "Francisco", "Luis", "Miguel", "Javier", "Ángel", "Carlos",
      "Daniel", "Alejandro", "Pablo", "David", "Adrián", "Hugo", "Álvaro", "Javier", "Diego", "Sergio",
      "Miguel", "Diego", "Luis", "Santiago", "Alejandro", "Emiliano", "Daniel", "Jesús", "Leonardo", "Eduardo", ];
//
let M_GE_Names_EN = [ /* Таблица людских мужских германских / немецких имён */
  "Peter", "Michael", "Tomas", "Andreas", "Wolfgang", "Klaus", "Jurgen", "Gunter", "Stefan", "Kristian",
  "Uwe", "Werner", "Horst", "Frank", "Dieter", "Manfred", "Gerhard", "Hans", "Bernt", "Torsten",
  "Matthias", "Helmut", "Walter", "Heinz", "Martin", "Joerg", "Rolf", "Jens", "Swen", "Alexander",
  "Maximilian", "Alexander", "Leon", "Paul", "Luca", "Elias", "Felix", "Lucas", "Jonas", "David",
  "Lukas", "Tobias", "Julian", "Simon", "Martin", "Gunther", "Sebastian", "Alexander", "Helmuth", "Florian",
  "Karl", "Heinz", "Elias", "Alexander", "Daniel", "Luca",
  "Elias", "Alexander", "Daniel", "Luca", "David", "Michael", "Liam", "Jonas", "Noah", "Lukas",
  "Julian", "Thomas", "Linus", "Sebastian", "Florian", "Fabian", "Levi", "Simon", "Milan", "Andreas",
  "Jan", "Samuel", "Robin", "Tobias", "Emil", "Tim", "Christian", "Adrian", "Markus", "Felix",
  "Paul", "Benjamin", "Marcel", "Damian", "Jonathan", "Finn", "Martin", "Manuel", "Stefan", "Patrick",
  "Oliver", "Dominik", "Peter", "Marvin", "Moritz", "Johannes", "Philipp", "Anton", "Tom", "Max", ];
//
let M_FR_Names_EN = [ /* Таблица людских мужских французских имён */
  "Jean", "Michel", "Philippe", "Alain", "Patrick", "Pierre", "Nicolas", "Christophe", "Christian", "Daniel",
  "Bernard", "Eric", "Frédéric", "Laurent", "Olivier", "Stéphane", "Pascal", "David", "Gérard", "Julien", "Jacques",
  "Alain", "Albert", "Alexandre", "Alexis", "André", "Bayard", "Bernard", "Bertrand", "Charles", "Denys",
  "Dominique", "Edouard", "Elie", "Emmanuel", "Eric", "Etienne", "François", "Georges", "Gérald", "Gilbert",
  "Gilles", "Hubert", "Hugues", "Jean", "Luc", "Louis", "Ludovic", "Maurice", "Mathieu", "Michel",
  "Nicolas", "Paul", "Philippe", "Pierre", "Raymond", "Robert", "Thibaut", "Urbain", "Vincent", "Xavier",
  "Yves", "Jean-Claude", "Jean-Jacques", "Jean-Michel", ];
let M_FR_sm_Names_EN = [ /* Таблица small мужских французских имён */
  "Lino", "Belbo", "Xanto", "Lixa", "Adé", "Daya", "Nado", "Ato", "Charley", "Deñizo",
  "Domi", "Ned", "Ly", "Amel", "Ric", "Tino", "Franck", "Jory", "Adar", "Berty",
  "Egée", "Albert", "Alexandre", "Alexis", "André", "Bayard", "Bernard", "Bertrand", "Charles", "Denys",
  "Bertini", "Huga", "Jaki", "Gionni", "Lubel", "Ludo", "Mucha", "Mathé", "Mica", "Nick",
  "Paolo", "Philo", "Pié", "Ramy", "Berto", "Taubi", "Urfé", "Vici", "Xercés", "Yvan",];
//
let M_PL_Names_EN = [ /* Таблица людских мужских сарматских / Балканских и польских имён */
  "Bogdan", "Bożydar", "Bogumił", "Bogusław", "Bolesław", "Bronisław", "Czesław", "Jarosław",
  "Kazimierz", "Lech", "Lścisław", "Lechosław", "Lesław", "Leszek", "Ludomir", "Mieczysław",
  "Mieszko", "Mirosław", "Przemysław", "Radosław", "Radzimir", "Sławomir", "Stanisław", "Tomisław",
  "Wacław", "Wieńczysław", "Wiesław", "Władysław", "Włodzimierz", "Wojciech", "Zbigniew", "Zdzisław",
  "Ziemowit", "Piotr", "Łukasz", "Andrzej", "Grzegorz", "Jacek", "Jerzy", "Maciej", "Mikołaj", "Tadeusz",
  "Wawrzyniec",
  "Stanisław", "Włodzimierz", "Wojciech",
  "Olgierd", "Witold", "Grażyna",  "Danuta",
  "Algirdas", "Vytautas", "Gražina", "Kęstutis", "Birutė", ];
//
let M_RU_NE_Names = [ //* Noble, Elite Таблица людских мужских аристократических руссских имён */
  "Олег", "Петр", "Константин", "Ярослав", "Мстислав", "Дмитрий", "Федор",
   ];
let RU_NE_fatherNames = [ //* Noble, Elite Таблица людских мужских аристократических отчеств */
   "Олега", "Петра", "Константина", "Ярослава", "Мстислава", "Дмитрия", "Федора",
   ];
let M_RU_L_Names = [ /* Таблица людских мужских простонародных руссских имён */
  "Тишка", "Гришка", "Митька", "Олешкo", "Стенька", "Ондрейко", "Павлик", "Десятка",
  "Пятунька", "Ермачко", "Жданко", "Петрушка", "Васька", "Ждан", "Бажен", "Елка",
  "Дорошка", "Матюшка", "Богдан", "Архип", "Никодим", "Иван", "Савелий", "Кузьма",
   ];
let M_RU_Names = [ /* Таблица людских мужских руссских имён */
  "Амвросий", "Богдан", "Борис", "Вавила", "Гавриил", "Григорий", "Даниил", "Евдоким",
  "Захар", "Иван", "Кирилл", "Кузьма", "Лазарь", "Макар", "Никита", "Дмитрий", "Михаил",
  "Алексей", "Павел", "Панкрат", "Парамон", "Пётр", "Родион", "Роман", "Савва", "Семён",
  "Сергей", "Степан", "Тарас", "Юлиан", "Фаддей", "Федот", "Харитон", "Юрий", "Яков",
   ];
let RU_fatherNames = [ /* Таблица людских мужских руссских отчеств */
   "Амвросия", "Богдана", "Бориса", "Вавилы", "Гавриила", "Григория", "Даниила", "Евдокима",
   "Захара", "Ивана", "Кирилла", "Кузьмы", "Лазаря", "Макара", "Никиты", "Дмитрия", "Михаила",
   "Алексея", "Павла", "Панкрата", "Парамона", "Петра", "Родиона", "Романа", "Саввы", "Семёна",
   "Сергея", "Степана", "Тараса", "Юлиана", "Фаддея", "Федота", "Харитона", "Юрия", "Якова",
  ];
//
let M_VE_Names_EN = [ /* Таблица людских мужских скандинавских имён */
  "Aalto", "Anders", "Arne", "Arvid", "Asmund", "Axel",
  "Bjorns", "Bernt", "Bergen", "Bartram", "Broder",
  "Carlsen", "Casper", "Claus", "Canute",
  "Daan", "Dag", "Daved", "Daven",
  "Elvis", "Emanual", "Erik", "Eric",
  "Folke", "Frans", "Fransen", "Frey",
  "Goran", "Gunnar",
  "Hjordis", "Hjalmar", "Havelock", "Harold", "Han", "Handon",
  "Isak",
  "Lakob", "Jann", "Jen", "Jarel", "Jeppe", "Jens", "Joakim", "Jokum", ];
//
let M_VO_Names_EN = [ /* Таблица людских мужских итальянских имён */
    "Abele", "Adolfo", "Adriano", "Alberto", "Alessandro", "Alonzo", "Amato", "Amadeo", "Andrea", "Anastasio",
    "Batista", "Baltassare", "Benvenuto", "Berthold", "Bernardo",
    "Camillo", "Callisto", "Casimiro", "Carlos", "Colombano", "Conrad", "Christiano", "Cecilio", "Cesare",
    "Dario", "Dino", "Dzherardo", "Donato", "Dorieno",
    "Eligio", "Emanuele", "Ennio", "Enrique", "Ernesto", "Eugenio",
    "Fabio", "Fabrizio", "Fausto", "Flavio", "Floerino", "Franco", "Fredo", "Fernando", "Francis",
    "Gasparo", "Guerin", "Gustavo", "Guido", "Geronimo", "Guiseppe", "Gianni", "Gino", "Giuliano", "Gianluca", "Giancarlo",
    "Hugo", "Hironimo",
    "Italo",
    "Jacomo", "Jhon",
    "Leopoldo", "Ladislao", "Leonardo", "Lorenzo", "Luciano", "Luce", "Luigi",
    "Marco", "Manfredo", "Mario", "Martino", "Marcello", "Massimiliano", "Maurizio", "Menlayo", "Merino",
    "Nazario", "Nicola",
    "Orsino", "Oscar", "Orlando", "Ottavio",
    "Paolo", "Patrizio", "Prospero", "Pellegrino",
    "Renato", "Riccardo", "Ruggerio",
    "Sandro", "Silvestri", "Sergio", "Silvio",
    "Teofilo", "Teodoro",
    "Uberto",
    "Valentino", "Vincent", "Vitale", "Victor",
    "Zhanluidzhi", ];
//
let M_Names_EN = ["Random", M_EN_Names_EN, M_SP_Names_EN, M_GE_Names_EN, M_FR_Names_EN, M_PL_Names_EN, M_RU_Names, M_VE_Names_EN, M_VO_Names_EN, ];

let F_EN_H_Names_EN = [ /* Таблица людских женских английских имён */
  "Abigayle", "Agnes", "Adelaida", "Alice", "Amanda", "Amelia", "Alexandrina",
  "Anastasia", "Angelina", "Ariel", "Audrey", "Avery", "Ashley",
  "Barbara", "Beatrice", "Bridget", "Britney",
  "Camilla", "Caroline", "Cassandra", "Constance", "Christine", "Charlote", "Cheril", "Catherine",
  "Diana", "Dorothy",  "Eva", "Evelyn", "Edison", "Edith", "Eleanor",
  "Elizabeth",  "Ester",  "Florance",
  "Gabriel", "Gwendolen", "Gwinnett", "Gloria", "Grace",
  "Heather",  "Isabella", "Irene",
  "Juliet", "Janice", "Jennifer", "Jessica",
  "Joan", "Jodie", "Joyce", "Jocelyn", "Juliette", "Jacqueline", "Janet", "Josephine",
  "Katherine", "Kimberly",
  "Laura", "Leona", "Lesley", "Lydia", "Lillian", "Linda", "Louise",
  "Madeline", "Margaret", "Maria", "Marcia", "Melissa", "Marian", "Miranda", "Monica",
  "Madison", "Mandy", "Muriel",
  "Naomi", "Nataly", "Nicole", "Nora", "Norma",
  "Olivia",  "Pamela", "Patricia", "Paula", "Priscilla",
  "Rebecca", "Regina", "Rachel", "Rosemary", "Rose", "Ruth",
  "Sabrina", "Samantha", "Sandra", "Sara", "Selena", "Scarlet", "Sophia", "Stella", "Susan",
  "Teresa", "Tiffany",       "Sheila", "Sharon", "Sherril", "Shirley",
  "Valery", "Vanessa", "Veronica", "Vivian", "Victoria", "Violette", "Virginia", ];
let F_EN_Names_EN = [ /* Таблица людских женских английских имён */
  "Abigayle", "Agata", "Agnes", "Ida", "Iris", "Alice", "Amanda", "Amelia",
  "Anastasia", "Angelina", "Ann", "Ariel", "Arya", "Audrey", "Avery", "Ashley",
  "Barbara", "Beatrice", "Bridget", "Britney", "Batty",
  "Camilla", "Caroline", "Constance", "Christine", "Candy", "Cecil", "Chloe", "Cheril", "Catherine",
  "Debra", "Diana", "Dorothy",  "Eva", "Evelyn", "Edison", "Edith", "Eleanor",
  "Elizabeth", "Ella", "Emily", "Emma", "Ester",  "Florance",
  "Gabriel", "Gwinnett", "Gloria", "Grace", "Gill", "Gina",
  "Heather",  "Ivy", "Isabella", "Irma", "Irene",
  "Juliet", "Jane", "Janice", "Jenny", "Jennifer", "Jessie", "Jessica",
  "Joan", "Jodie", "Joyce", "Jocelyn", "Judy", "Julia", "June",
  "Janet",       "Karen", "Katherine", "Kimberly", "Kelly",
  "Laura", "Leila", "Leona", "Lesley", "Lydia", "Lillian", "Linda", "Lucy",
  "Madeline", "Margaret", "Maria", "Marcia", "Melissa", "Marian", "Miranda", "Mia", "Molly", "Mona", "Monica", "Maggie",
  "Madison", "May", "Mandy", "Mary", "Muriel",
  "Naomi", "Nataly", "Nicole", "Nora", "Norma", "Nancy",  "Olivia",
  "Pamela", "Patricia", "Paula", "Peggy", "Page", "Penny", "Polly",
  "Rebecca", "Regina", "Rachel", "Rosemary", "Rose", "Ruth",
  "Sabrina", "Sally", "Samantha", "Sandra", "Sara", "Selena", "Sandy", "Scarlet", "Sophia", "Stacy", "Stella", "Susan",
  "Teresa", "Tina", "Tiffany", "Tracy",      "Sheila", "Sharon", "Sherry", "Shirley",
  "Valery", "Vanessa", "Veronica", "Vivian", "Victoria", "Viola", "Virginia",     "Wendy", "Zara", "Zoe", ];
let F_EN_L_Names_EN = [ /* Таблица людских женских английских low имён */
  "Agata", "Agnes", "Adele", "Ida", "Iris", "Alice", "Amanda", "Amelia",
  "Ann", "Ariel", "Arya", "Audrey", "Avery", "Ashley",
  "Babs", "Beate", "Bridget", "Britney", "Betsy", "Batty", "Bella", "Becky", "Bess",
  "Camil", "Case", "Christy", "Candy", "Cecil", "Chloe", "Cheril", "Cathie",
  "Debra", "Di", "Dorothy", "Drina",  "Eva", "Evelyn", "Edison", "Edith", "Eliza",
  "Elizabeth", "Ella", "Emily", "Emma", "Ester",  "Flore",
  "Gaby", "Gwen", "Given", "Grace", "Gill", "Gine", "Ginny",
  "Heather",  "Ivy", "Irma", "Irene",
  "July", "Jane", "Jany", "Jenny", "Jessie", "Josy",
  "Joan", "Jodie", "Joyce", "Judy", "Julia", "June", "Jacy", "Janet", "Josy",
  "Karen", "Kathe", "Kim", "Kelly",
  "Laura", "Leila", "Leona", "Lesley", "Lydia", "Lilly", "Linda", "Lucy",
  "Mady", "Margo", "Maria", "Mell", "Mary", "Mira", "Mia", "Molly", "Mona", "Maggy", "Meg",
  "May", "Mandy", "Mary",      "Naomi", "Nataly", "Nicole", "Nora", "Norma", "Nancy", "Nessie",
  "Olivia",  "Pamela", "Paty", "Paula", "Peggy", "Page", "Penny", "Polly",
  "Rachel", "Rosy", "Rose", "Ruth",
  "Sabrina", "Sally", "Same", "Sandra", "Sara", "Sandy", "Sophia", "Stacy", "Stella", "Susan",
  "Teresa", "Tina", "Tracy", "Tricia",     "Sheila", "Sharon", "Sherry", "Shirly",
  "Lery", "Vess", "Vera", "Vivy", "Vicky", "Viola",
  "Wendy", "Zara", "Zoe", ];
//
let Maria_Names_EN = [ /* María */
  " de las Mercedes", " de los Dolores", " la Reina de los Ángeles",
  " del Amparo", " de la Anunciación", " de la Luz", " de los Milagros",
  " de la Piedad", " del Socorro", " de la Cruz", " del Consuelo",
  " de la Soledad", " de la Salud", " del Pilar", " de Montserrat", ];
let F_SP_Names_EN = [ /* Таблица людских женских Испанских имён */
  "María", "Carmen", "Ana", "Isabel", "Dolores", "Pilar", "Josefa", "Teresa", "Rosa", "Antonia",
  "Lucia", "María", "Paula", "Sara", "Carla", "Claudia", "Laura", "Marta", "Irene", "Alba",
  "María",  "Fernanda", "Valeria", "Ximena", "Guadelupe", "Daniela",
  "Camila", "Mariana", "Andrea", "María José", "Sofía", ];
//
let F_GE_Names_EN = [ /* Таблица людских женских германских / немецких имён */
  "Ursula", "Karin", "Helga", "Sabine", "Ingrid", "Renate", "Monika", "Susanne", "Gisela", "Petra",
  "Birgit", "Andrea", "Anna", "Brigitte", "Klaudia", "Erika", "Krista", "Elke", "Stephanie", "Gertrud",
  "Elizabeth", "Maria", "Angelika", "Heike", "Gabriele", "Katrin", "Ilse", "Nicole", "Anja", "Barbara",
  "Marie", "Sophie", "Maria", "Anna", "Emma", "Mia", "Sophia", "Leoni", "Lena", "Johanna",
  "Leonie", "Sarah", "Anna", "Hannah", "Lena", "Julia", "Sophie", "Katharina", "Laura", "Lara",
  "Linnéa", "Anna-Lena", "Lisa-Marie", "Julia",  "Laura",
  "Julia", "Laura", "Anna", "Emma", "Lea", "Lisa", "Sarah", "Maria", "Lena", "Lina",
  "Alina", "Emilia", "Mia", "Hannah", "Lara", "Elena", "Vanessa", "Sophie", "Selina", "Nina",
  "Leonie", "Johanna", "Melina", "Marie", "Luisa", "Jana", "Sandra", "Jessica", "Emily", "Mila",
  "Nele", "Melanie", "Katharina", "Sophia", "Oonagh", "Theresa", "Zoe", "Elisabeth", "Jasmin", "Michelle",
  "Claudia", "Valentina", "Franziska", "Nadine", "Annika", "Nicole", "Charlotte", "Nora", "Jennifer", "Sabrina", ];
//
let F_FR_Names_EN = [ /* Таблица людских женских французских имён */
  "Marie", "Nathalie", "Isabelle", "Sylvie", "Catherine", "Françoise", "Martine", "Christine", "Monique", "Nicole",
  "Valérie", "Sophie", "Anne", "Céline", "Brigitte", "Laurence", "Jacqueline", "Michele", "Dominique", "Corinne",
  "Aurélie", "Céline", "Brigitte", "Patricia",  "Marie", "Emma", "Camille", "Marie",
  "Romane", "Camille", "Anaїs", "Justine", "Zoé", "Sarah", "Jade", "Inès", "Charlotte", "Eva",
  "Louise", "Pauline", "Léa", "Manon", "Clara", "Emma", "Océane", "Lucie", "Chloé", "Julie", ];
//
let F_PL_Names_EN = [ /* Таблица людских женских французских имён */
  "Bożena", "Marzanna", "Wanda", "Wisława", "Agnieszka", "Małgorzata", "Katarzyna",
  "Jadwiga", "Kinga", "Olga", "Agnė", "Justina", "Audra", "Lajma", "Ruta",
  "Aušra", "Liudvika", "Saulė", "Vitalija", "Mariyona", "Svayone", "Gabija", "Morta",
  "Eglė", "Giedre", "Ona", "Edita", "Gintarė", "Rasa", "Jadwiga", "Daina", "Rozhe",
  "Joanna", "Alicja", "Elżbieta", "Urszula", "Jadwiga", "Małgorzata", "Antonina", ];
//
let F_RU_NE_Names = [ /* Таблица людских женских аристократических руссских имён */
  "Софья", "Дарья", "Ольга", "Анна", "Наталья", "Елизавета",
   ];
let F_RU_L_Names = [ /* Таблица людских женских простонародных руссских имён */
   "Огафьица", "Марьица", "Катеринка", "Оленкa", "Овдотьица", "Федорка", "Ефросинья",
   "Фроска", "Матрена", "Татьяна", "Анфиса", "Фекла",
    ];
let F_RU_Names = [ /* Таблица людских женских руссских имён */
   "Анна", "Агриппина", "Дарья", "Евдокия", "Екатерина", "Гликерия", "Мавра", "Мелания",
   "Мария", "Анастасия", "Ирина", "Прасковья", "Пелагея", "Софья", "Татьяна", "Феодосия",
   "Фотиния", "Улитка",
  ];
  //
let F_VE_Names_EN = [ /* Таблица людских женских германских / немецких имён */
  "Andrea", "Agata", "Agne", "Agneta", "Anneli",
  "Barbro", "Berit", "Birgit", "Britta", "Brigitta",
  "Caren", "Caryn", "Cristen",
  "Gerda", "Gretha", "Gurdrun",
  "Hedda", "Helga", "Hilde",
  "Janica", "Juni", "Jytte",
  "Kaia", "Kallan", "Karan", "Karena", "Kristina",
  "Maja", "Malin", "Marte", "Mette", "Mia", "Mikele", "Monika",
  "Rica", "Rikarda", "Ronja", "Rut",
  "Sanna", "Signe", "Sonia", "Steena", "Suren", "Syrin", ];
//
let F_VO_Names_EN = [ /* Таблица людских женских Испанских имён */
  "Augostina", "Adriana", "Alba", "Albertina", "Antonella",
  "Beatrice",
  "Carla", "Chiara",
  "Domenica",
  "Elena", "Edda", "Elouisa", "Erminia", "Evlalia",
  "Federica", "Francheska",
  "Gracia",
  "Immakoleta",
  "Julia", "Julietta",
  "Letizia", "Lucretia",
  "Maddalena",
  "Nicoletta", "Noemi",
  "Ornella", "Ottavia",
  "Patricia", "Perla",
  "Rachel", "Riccarda", "Rosabella", "Romilda",
  "Simona", "Susanna",
  "Theothila", "Ximena", "Guadelupe", "Daniela",
  "Vittoria", "Mariana", "Andrea", "María José", "Sofía", ];
//
let F_Names_EN = ["Random", F_EN_Names_EN, F_SP_Names_EN, F_GE_Names_EN, F_FR_Names_EN, F_PL_Names_EN, F_RU_Names, F_VE_Names_EN, F_VO_Names_EN, ];


let EN_Surnames = [ /*- Таблица людских английских фамилий */
    "Adderiy", "Addington", "Adrian", "Aldridge", "Allford", "Alsopp",
    "Andrews", "Archibald", "Arnold", "Arthurs", "Attwood", "Audley", "Austin", "Ayrton",
    "Babcock", "Backer", "Baldwin", "Bargeman", "Barnes", "Barrington", "Bawerman", "Becker", "Berrington", "Birch",
    "Bishop", "Black", "Blare", "Blomfield", "Boolman", "Bootman", "Bosworth", "Bradberry", "Bradshaw", "Brickman", "Brooks", "Brown", "Bush",
    "Calhoun", "Campbell", "Carey", "Carrington", "Carroll", "Carter", "Chandter",
    "Chapman", "Chesterton", "Clapton", "Clifford", "Coleman", "Conors", "Cook", "Cramer", "Creighton", "Croftoon", "Crossman",
    "Daniels", "Day", "Dean", "Derrick", "Donovan", "Douglas", "Dowman", "Dutton", "Duncan", "Dunce", "Durham",
    "Eddington", "Edwards", "Ellington", "Elmers", "Evans",
    "Faber", "Fane", "Farmer", "Farrell", "Finch", "Fisher", "Flatcher", "Fleming",
    "Ford", "Forman", "Forster", "Foster", "Francis", "Fraser", "Freeman", "Fulton",
    "Galbraith", "Gardner", "Gate", "Gerald", "Gibbs", "Gilbert", "Gill", "Gill", "Goldman", "Goodman", "Gustman",
    "Haig", "Hailey", "Hamphrey", "Hancock", "Hardman", "Hawkins", "Higgins", "Hodges", "Hoggarth", "Holiday", "Holmes", "Howard",
    "James", "Jeff", "Jenkin", "Jerome", "Jones",
    "Keat", "Kelly", "Kendal", "Kennedy", "Kennett", "Kingsman", "Kirk",
    "Laird", "Lamberts", "Larkins", "Lawman", "Leapman", "Leman", "Lewin", "Little", "Livingston", "Longman",
    "Macey", "Mackenzie", "Mansfield", "Marlow", "Marshman", "Mathews", "Mercer", "Miers", "Miller", "Miln", "Milton", "Molligan", "Murphy",
    "Nash", "Nathan", "Neal", "Nevill", "Nyman",
    "Oakman", "Ogden", "Oldman", "Oldridge", "Oliver", "Osborne", "Oswald", "Otis", "Owen",
    "Page", "Palmer", "Pass", "Peacock", "Pearcy", "Philips", "Porter",
    "Quincy", "Raleigh", "Ralphs", "Ramacey", "Reynolds", "Richards", "Roberts", "Roger", "Russel", "Ryder",
    "Salisburry", "Salomon", "Samuels", "Saunder", "Shackley", "Sheldon", "Sherlock", "Shorter", "Simon", "Smith", "Stanley", "Stephen", "Sykes",
    "Taft", "Taylor", "Thorndike", "Thornton", "Timmons", "Tracey", "Turner",
    "Vance", "Vaughan", "Wainwright", "Walkman", "Wallace",
    "Waller", "Walter", "Ward", "Warren", "Wayne", "Webster", "Wesley", "White", "Winter", "Wood", "Youmans", "Young",];
let SC_Surnames = [ /* Таблица людских шотландских фамилий */
  "Anstruther", "Archie", "Armour", "Adam", "Arthur", "Abercromby", "Agkew", "Areskine",
  "Barrach", "Barclay", "Borthwick", "Brodie", "Buchanan", "Belsches", "Beton", "Boyd", "Buchan",
  "Forbes", "Gordon", "Galt", "Glass", "Grant", "Graham", "Gair", "Gilbert",
  "Dunlop", "Johnston", "Drummond", "Haddon", "Home", "Hannay", "Innes",
  "Carnegie", "Crichton", "Kennedy", "Kerr", "Kincade", "Combie",
  "Leslie", "Lindsay", "Logan", "Lockhart", "Lamondson", "Lamond",
  "MacAdam", "MacAlister", "MacAndrais", "MacAlpin", "MacBane", "MacBrieve", "MacGregor", "MacDuff",
  "MacDonald", "McDonnell", "MacInally", "MacKenzie", "MacKinlay",
  "MacCorry", "MacOwen",  "MacLarty", "MacLachlan", "McCarthy", "MacKenna", "McGrath", "MacDermott",
  "McLoughlin", "MacMinn", "MacMahon", "MacNamara", "MacTavish", "MacFarlane", "MacFeat", "MaCowen", "Monro", "Marr",
  "Montgomery", "Morris", "Moffat", "MacDougall", "MacLeod", "MacLean",
  "Nisbet", "Nern", "Ogilvy", "Ollivant", "Pollock",
  "Rollo", "Ramsay", "Ross", "Sandilands", "Sinclair", "Scott",  "Shaw", "Thodd", "Tawse",
  "Wallace", "Weir", ];
let IR_Surnames = [ /* Таблица людских ирландских фамилий */
  "Buckley", "Bell", "Burns", "Byrne", "Boyle", "Brown", "Brennan", "Brady", "Burke",
  "Cullen", "Clarke", "Collins", "Connolly", "Casey", "Campbell",
  "Dunne", "Duffy", "Doyle", "Donnelly", "Donovan", "Daly",
  "Gallagher", "Griffin", "Graham",
  "Fitzgerald", "Fitzpatrick", "Flanagan", "Flynn", "Foley",
  "Higgins", "Healy", "Hogan", "Hughes", "Hayes",
  "Kelly", "Kavanagh", "Kane", "Kennedy", "Kenny", "Keane", "O’Keane", "O’Kehen", "King",
  "Lyons", "Lynch", "Murphy", "Maguire", "Magee", "Mullan", "Martin", "Maher", "Molony", "Moran", "Moore", "Murray",
  "Nolan", "O’Brien", "O’Dwyer", "O’Donnell", "O’Doherty", "O’Callaghan", "O’Keeffe", "O’Connell", "O’Connor", "O’Carroll",
  "O’Leary", "O’Mahony", "O’Neill", "O’Reilly", "O’Rourke", "O’Sullivan", "O’Farrell", "O’Shea",
  "Power", "Quinn", "Ryan", "Reid", "Reagan",
  "Smith", "Stewart", "Sweeney", "Sheehan", "White", "Whelan", "Walsh", "Ward",];
//
let SP_Surnames = [ /* Таблица людских ИСПАНСКИХ фамилий */
  "García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Martín", "Gómez",
  "Aguilar","Alonso","Alvarez","Arias – Ариас",
  "Benitez","Blanco","Bravo",
  "Caballero","Calvo","Campos","Cano","Carmona","Carrasco","Castillo","Castro","Cortes","Cruz",
  "Delgado","Delgado","Diez","Dominguez","Duran",
  "Esteban",
  "Fernandez","Ferrer","Flores","Fuentes",
  "Gallardo","Gallego","Garcia","Garrido","Gimenez","Gomez","Gonzalez","Guerrero","Gutierrez",
  "Hernandez","Herrera","Herrero","Hidalgo",
  "Iglesias","Jimenez",
  "Lopez","Lorenzo",
  "Marquez","Martinez","Medina","Mendez","Molina","Montero","Mora","Morales","Moreno",
  "Navarro","Nieto",
  "Ortega","Ortiz",
  "Parra","Pascual","Pastor","Pena","Perez",
  "Ramirez","Ramos","Rey","Reyes","Rodriguez","Romero","Rubio","Ruiz",
  "Saez","Sanchez","Santana","Santiago","Santos","Sanz","Serrano","Suarez",
  "Torrez",
  "Vargaz","Vazquez","Vega","Velasco","Vincente", ];
//
let GE_Surnames = [ /* Таблица людских German фамилий */
  "Becker", "Bauer", "Braun", "Braunfels", "Balduin",
  "Koch", "Krüger", "Köhler", "Klein", "Krause", "Günther",
  "Hoffmann", "Hartmann", "Hahn", "Habsburg", "Hermann",
  "Fischer", "Garrison", "Eichenwald", "Fürstenberg",
  "Lehmann", "Lange", "Luxemburg",
  "Mueller", "Meyer", "Meiendorf",
  "Richter", "Neumann", "Peters", "Thill",
  "Schneider", "Schröder", "Schulz", "Schmidt", "Schäfer", "Schwarz",
  "Wagner", "Weber", "Werner", "Weiss", "Wolf", "Zimmermann"];
let GE_predicats = [["von ", "von ", "von ", "von ", "von ", "von ", "von ", "von ", "von ", "von ",
    "zu ", "zu ", "zu ", "zu ", "zu ",    "von und zu ", ],[
    "фон ", "фон ", "фон ", "фон ", "фон ", "фон ", "фон ", "фон ", "фон ", "фон ",
    "цу ", "цу ", "цу ", "цу ", "цу ",    "фон унд цу ", ],];
let GE_Noblesse_EN = [ //* Немецких аристократических фамилий */
    "Albedyll", "Stachelberg", "Rennenkampff", "Kaltenbrunner", "Hasenclever", "Winterhalter",
    "Bilderling", "Reichenbach", "Öttinger", "Oetinger", "Glasenapp", "Lamprecht",
    "Ratzenberger", "Klee", "Baade", "Callenberg", "Kalb", "Tappert", ];
//
let FR_Surnames = [ /* Таблица людских французских фамилий */
  "Michel", "Pierre", "Thomas", "Robert", "Richard", "Laurent", "Bertrand", "Bernard",
  "Legrand", "Moreau", "Roux", "Leroux", "Bossu", "Oreille",
  "France", "Pariseau", "Depardieu", "Langlais", "Dupont",
  "Meunier", "Mitterrand", "Fournier", "Boulanger",
  "Durand", "Morel", "Girard", "Duroy", "Duval", "Dubois", ];
let FR_Noblesse_EN = [ /* Таблица аристократических французских фамилий */
  "de Bauffremont", "de Beaufort-Spontin", "de Beauvau-Craon", "de Béthune", "Blacas d'Aulps",
  "de Caylus", "de Caylus-Rougé", "de Cossé-Brissac", "de Broglie", "des Cars",
  "de Clermont-Tonnerre", "de Gramont", "de Harcourt", "de Caumont La Force", "de La Rouchefoucauld",
  "Durfort Civrac de Lorge", "de Lucinge", "de Luynes", "Maillé de la Tour-Landry", "de Meunier",
  "de Merode", "de Mortemart", "de Noailles", "de Polignac", "de Praslin",
  "Rarécourt de La Vallée de Pimodan", "Riquet de Caraman-Chimay", "de Rohan-Rohan", "de Rohan-Chabot", "de Sabran-Pontevès",
  "Crussol d'Uzès", ];
//
let PL_Surnames = [ /* Таблица людских польских фамилий */
  "Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk",
  "Kamiński", "Lewandowski", "Zieliński", "Szymański", "Woźniak", "Dąbrowski",
  "Jankowski", "Mazur", "Wojciechowski", "Kwiatkowski", "Krawczyk", "Kaczmarek",
  "Madej", "Piotrowski", "Grabowski",
  "Zarębа", "Puchałа", "Przybyłа",
  "Pług", "Fertig", "Szelig"];
  //
let RU_N_Surnames = [ /* Таблица людских русских дворянских фамилий */
  "Шуйский", "Воротынский", "Оболенский", "Вяземский", ];
let RU_N_F_Surnames = [ /* Таблица людских русских дворянских женских фамилий */
  "Шуйская", "Воротынская", "Оболенская", "Вяземская",
  ];
let RU_L_Surnames = [ /* Таблица людских русских простонародных прзвищ  */
  "Потешкин", "Башкин", "Резвый", "Томило", "Китай", "Безсон", "Смирной", "Русин",
  "Богдан", "Первой", "Второй", "Третьяк",  "Гуляй", "Дружина", "Замятня", "Казарин",
  "Милюта", "Меньшик", "Неустрой", "Некрас", "Нечай", "Потеха", "Постник", "Поздей",
  "Вологженин", "Галичанин", "Крымсков", "Торопченин", "Романовец", "Городчанин", "Устюжанец",
  "Дровишник", "Завощик", "Калашник", "Порубщик", "Рогозинник", "Рудомет", "Щепетильник",
  "Дружина", "Нашивошник", "Постник", "Сапожник", "Власко", "Скоморох",
  "Веселой", "Лихач", "Молчан", "Плакса", "Немта", "Горбун", "Корноух", "Кривошея", "Шумило", "Безносoй",
  "Мерзлая-голова", "Кривой-колпак", "Набезденежье", "Высокие-щи", "Овсяной-разум",
  "Подсеки-корова", "Помойная-каша", "С-копейкой-два-гроша", "Добрыня", "Дунай",
  "Ермак", "Калита", "Лютой", "Мирослав", "Мурза", "Несмеян", "Одинец", "Пан", "Пересвет",
  "Сабур", "Соловей", "Тихомир", "Угрим", "Ярило",
  ];
let RU_FL_Surnames = [ /* Таблица людских русских простонародных прзвищ  */
  "Потешкина", "Башкина", "Резвая", "Томило", "Китай", "Безсон", "Смирная", "Русин",
  "Богдана", "Первая", "Вторая", "Третьяк",  "Гуляй", "Дружина", "Замятня", "Казарка",
  "Милюта", "Малая", "Неустрой", "Некраса", "Нечай", "Потеха", "Постница", "Поздея",
  "Вологженина", "Галичанина", "Крымскова", "Торопченина", "Романовец", "Городчанка", "Устюжанка",
  "Дровишница", "Завощица", "Калашница", "Порубщица", "Рогозинница", "Рудометка", "Щепетильница",
  "Дружина", "Нашивошница", "Постница", "Сапожница", "Власко", "Скоморох",
  "Веселац", "Лихачка", "Молчана", "Плакса", "Немта", "Горбуша", "Корноух", "Кривошея", "Шумила", "Безносая",
  "Мерзлая-голова", "Набезденежье", "Высокие-щи", "Овсяной-разум",
  "Подсеки-корова", "Помойная-каша", "С-копейкой-два-гроша", "Добрыня", "Дунай",
  "Ермачка", "Калита", "Лютая", "Мирослава", "Мурза", "Несмеяна", "Одинец", "Пана", "Пересвет",
  "Сабур", "Соловей", "Тихомира", "Угрима", "Ярая",
  ];
let RU_Surnames = [ /* Таблица людских мужских руссских фамилий */
  "Амвросьев", "Алексеев", "Богданов", "Борисов", "Безбородов", "Вавилов",
  "Гавриилов", "Григорьев", "Даниилов", "Евдокимов", "Захаров", "Иванов", "Кирилов",
  "Кузьмин", "Лазарьев", "Макаров", "Никитов", "Никаноров", "Дмитриев", "Михаилов",
  "Павлов", "Панкратов", "Парамонов", "Петров", "Родионов", "Романов", "Савин",
  "Семёнов", "Сергеев", "Степанов", "Тарасов", "Юлианов", "Фаддеев", "Федотов",
  "Харитонов", "Юриев", "Кузьмин", "Бессмертный", "Ивашкин", "Федькин", "Гераськин",
  "Анин", "Агрипин", "Дарьин", "Катин", "Маврин", "Марьин", "Настин", "Ирин",
  "Софьин", "Танин",
  "Кузнецов", "Богомолов", "Бондарев", "Бочаров", "Гончаров", "Мельников", "Ковалёв",
  "Кожевников", "Кожемякин", "Красильников", "Плотников", "Столяров", "Ткачёв",
  "Токарёв", "Ямщиков",
 ];
let RU_F_Surnames = [ /* Таблица людских мужских руссских фамилий */
   "Амвросьева", "Алексеева", "Богданова", "Борисова", "Безбородова", "Вавилова",
   "Гавриилова", "Григорьева", "Данилова", "Евдокимова", "Захарова", "Иванова", "Кирилова",
   "Кузьмина", "Лазарьева", "Макарова", "Никитова", "Никанорова", "Дмитриева", "Михаилова",
   "Павлова", "Панкратова", "Парамонова", "Петрова", "Родионова", "Романова", "Савина",
   "Семёнова", "Сергеева", "Степанова", "Тарасова", "Юлианова", "Фаддеева", "Федотова",
   "Харитонова", "Юриева", "Кузьмина", "Бессмертная", "Ивашкина", "Федькина", "Гераськина",
   "Анина", "Агрипина", "Дарьина", "Катина", "Маврина", "Марьина", "Настина", "Ирина",
   "Софьина", "Танина",
   "Кузнецова", "Богомолова", "Бондарева", "Бочарова", "Гончарова", "Мельникова", "Ковалёва",
   "Кожевникова", "Кожемякина", "Красильникова", "Плотникова", "Столярова", "Ткачёва",
   "Токарёва", "Ямщикова",
  ];
//
let VE_Surnames = [ /* Таблица людских скандинавских фамилий */
  "Abramsson", "Adamsson", "Albertsson", "Andersson", "Atchesson", "Bensson",
  "Charlsson", "Davidsson", "Dickinsson", "Dodsson", "Donaldsson", "Dysson",
  "Endersson", "Ericksson", "Fergusson", "Garrisson", "Gilsson", "Gimsson",
  "Harrisson", "Jacobsson", "Johnsson", "Masson", "Michaelsson",
  "Morrisson", "Metewsson", "Nelsson", "Nicholsson", "Parkinsson", "Parsson", "Patersson", "Petersson", "Robinsson",
  "Simpsson", "Stevensson", "Thompsson", "Watsson", "Wilsson", "Wilkinsson", ];
//let num_Ve_SUR_Names = (Ve_SUR_Names.length);
let VO_Surnames = [ /* Таблица людских итальянских фамилий */
  "Allegro",
  "Barbarossa", "Barbieri", "Bonmarito", "Bottichelli", "Bruno", "Bruni", "Budjardini", "Bianchi",
  "Cavalli", "Carbone", "Colombo", "Conte",
  "Esposito",
  "Ferrari", "Ferraro", "Ferari", "Finokkio", "Fumagalli",
  "Giudice", "Guerra", "Ghirlandaio", "Grasso", "Gentile",
  "Ingannamorte",
  "Manchini", "Marino", "Medici", "Moretti", "Moriyadi", "Morritt",
  "Neri",
  "Pelagatti", "Pelaratti", "Pellegrini", "Pontedra",
  "Quattroki",
  "Richi", "Rizzi", "Rizzo", "Romano", "Rossi", "Russo",
  "Saltaformajo", "Sarto", "Serra", "Squarchalupi",
  "Torregrossa",
  ];
let VO_predicats = [" di", " ди", " dʼ", " дʼ", ];
let VO_Noblesse_EN = [ /* Таблица аристократических итальянских фамилий */
  "dʼAldobrandini", "dʼAccoramboni", "dʼAsti", "di Barberini", "di Borghese",
  "del Carretto", "di Capponi", "di Caraffa", "di Oriolo", "Amato di Caccamo",
  "di Natoli", "di Odescalchi", "di Pamphili", "di Piccolomini", "Amato di Sciacca",
  "Thaon di Revel", "dʼIsolani", "di Canevaro", "di Caproni", "Menabrea di Val Dora",
  "di Salina", "di Barozzi", "di Dainese", "Capizucchi di Cassine di Strada", "di Paulucci",
  "di Santi", "di Florio", "di Piombino", "di Salerno", "di Taranto", "di Guidi",
  "di Marconi", "dʼEste", "dʼAvogadro", "dʼAccolti", "di Nogarola", "di Guasco",
  "del Vasto", "di Tocci", "di Collalto", "di Colloredo", "di Mancini", "di Mattei", ];
//
let CR_Surnames = [ /* Таблица людских мусульманских фамилий */
  "Abbas", "Abdalla", "Afzal", "Ahmed", "Akel", "Akhtar", "Aman", "Amir", "Atallah", "Aziz",
  "Badie", "Baig", "Bari", "Bashir", "Begum", "Beshara", "Bilal",
  "Dada", "Dallal", "Dar", "Darwish", "Din", "Doud",
  "Ebrahim", "Eid", "Elamin", "Elbaz", "Emami",
  "Fadel", "Faraj", "Farha", "Farooq", "Farran", "Fawaz", "Firman",
  "Gaber", "Ghaffari", "Ghanem",
  "Habeeb", "Hadi", "Hafeez", "Hai", "Haidar", "Hakim", "Hallal", "Hamdan", "Hana", "Haq",
  "Hariri", "Harroun", "Hasan", "Hashim",
  "Mian", "Mina", "Minhas", "Mirza", "Mitri", "Moghadam", "Mohiuddin", "Mona", "Muhammad", "Mustafa",
  "Nagi", "Nasir", "Niazi",
  "Obeid", "Odeh", "Omar", "Othman", "Ozer",
  "Parsa", "Pour",
  "Qadir", "Qasim",
  "Raad", "Rabbani", "Radi", "Rafiq", "Rahman", "Rahim",
  "Saab", "Saadeh", "Salaam", "Salik", "Salman", "Sayed", "Shakir",
  "Tamer", "Tariq",
  "Uddin",
  "Vaziri", "Vohra",
  "Wahab", "Waheed", "Wali",
  "Yamin", "Yousuf",
  "Zadeh", "Zahra", "Zia",  ];
//
let JD_Surnames = [ /* Таблица людских иудейских фамилий */
  "Aaronson", "Abelman", "Abram", "Acker", "Adelman", "Appelbaum",
  "Bach", "Becker", "Benowitz", "Berenson", "Berg", "Bing", "Blau",
  "Cohen", "Cooperman",
  "David", "Diamond", "Dillon", "Dreyfus", "Drucker",
  "Ecker", "Edelman", "Efron", "Ehrlich", "Einstein", "Elkayam", "Elkin", "Ezra",
  "Fabrikant", "Fairman", "Falk", "Fein", "Feigenbaum", "Feinberg", "Firman",
  "Garfinkel", "Gelb", "Gelber", "Geller", "Ginsberg", "Glaser", "Glick", "Gold",
  "Haim", "Halpert", "Hamburg", "Hellberg", "Heller", "Himel", "Hirsch", "Hyatt",
  "Isaac", "Israel", "Jablonsky", "Janowicz",
  "Kane", "Kaplan", "Katz", "Kaufman", "Kempler", "Kilman", "Kleinfeld", "Knopp",
  "Lachman", "Landman", "Laubenstein", "Lehrer", "Leib", "Leichtman", "Levi", "Levine",
  "Magid", "Maltzman", "Margolis", "Melamed", "Mehler", "Mendelson", "Meyer", "Mindel",
  "Nacht", "Nerenberg", "Nudell",
  "Oberman", "Ortman", "Osher", "Ostrov",
  "Perlman", "Polanski", "Portnoy",
  "Rabin", "Rabinowitz", "Rayman", "Reidel", "Rivlin", "Rosenbaum", "Rosenkranz", "Roth",
  "Sachs", "Sackman", "Sagan", "Salzberg", "Sandler", "Saperstein", "Sas", "Sasson",
  "Talman", "Tannenbaum", "Tilman", "Truman", "Turner",
  "Uhr", "Ulman",
  "Vogel",
  "Wallace", "Weiner", "Weinreich", "Weiss", "Winterstein", "Wohlberg",
  "Yakel", "Yampolsky", "Yurkovich",
  "Zalman", "Zechman", "Zion", "Ziv", "Zuckerberg", "Zuckerman", "Zur",  ];
//
let CT_Surnames = [ /* Таблица людских китайских фамилий */
  "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Zhou",
  "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Lin", "Gao", "Luo",
  "Zhen", "Liang", "Xie", "Song", "Tang", "Xu", "Deng", "Han", "Feng", "Cao",
  "Peng", "Zeng", "Xiao", "Tian", "Dong", "Pan", "Yuan", "Cai", "Jiang", "Yu",
  "Du", "Ye", "Cheng", "Wei", "Su", "Lu", "Ding", "Ren",
  "Yao", "Shen", "Zhong", "Jiang", "Cui", "Tan", "Wang", "Fan", "Liao",
  "Shi", "Jin", "Wei", "Jia", "Xia", "Fu", "Fang", "Zhou", "Xiong", "Bai",
  "Tan", "Qin", "Qiu", "Hou", "Jiang", "Yin", "Xue", "Yan", "Lei", "Long",
  "Li", "Shi", "Tao", "He", "Mao", "Duan", "Hao", "Gu", "Gong", "Shao",
  "Qin", "Wu", "Qian", "Dai", "Yan", "Mo", "Kong", "Xiang", "Chang", "Tang",  ];
//
let tbl_SNOr = ["Random", "Avalon", "Highland", "Inismore", "Castille",
                "Eisen", "Montaigne", "Sarmatia", "Ussura", "Vendel",
                "Vodacce", "Cressent", "Judas", "Catai", ];
let Surnames_EN = ["Random", EN_Surnames, SC_Surnames, IR_Surnames, SP_Surnames,
                GE_Surnames, FR_Surnames, PL_Surnames, RU_Surnames, VE_Surnames,
                VO_Surnames, CR_Surnames, JD_Surnames, CT_Surnames, ];

let Strength_dots = [ "●●●", "●●●●", "●●●●●", "●●●●● ●", "●●●●● ●●", "●●●●● ●●●", "●●●●● ●●●●", "●●●●● ●●●●●", ];
let Strength_smld = [ "●●●", "●●●●", "●●●●●", "••••• •", "••••• ••", "••••• •••", "••••• ••••", "••••• •••••", ];

//  Arcana
let tbl_EN_Virtue = ["The Fool, Wily", "The Road, Friendly", "The Magician, Willful",
    "The Lovers, Passionate", "The Wheel, Fortunate", "The Devil, Astute",
    "The Tower, Humble", "The Beggar, Insightful", "The Witch, Intuitive",
    "The War, Victorious", "The Hanged Man, Altruistic", "Coins (for the Ferryman), Adaptable",
    "The Thrones, Comforting", "The Moonless Night, Subtle", "The Sun, Glorious",
    "The Prophet, Illuminating", "Reunion, Exemplary", "The Hero, Courageous",
    "The Glyph, Temperate", "The Emperor, Commanding", ];
let tbl_EN_Hubris = ["The Fool, Curious", "The Road, Underconfident", "The Magician, Ambitious",
    "The Lovers, Star-Crossed", "The Wheel, Unfortunate", "The Devil, Trusting",
    "The Tower, Arrogant", "The Beggar, Envious", "The Witch, Manipulative",
    "The War, Loyal", "The Hanged Man, Indecisive", "Coins (for the Ferryman), Relentless",
    "The Thrones, Stubborn", "The Moonless Night, Confusion", "The Sun, Proud",
    "The Prophet, Overzealous", "Reunion, Bitterness", "The Hero, Foolhardy",
    "The Glyph, Superstitious", "The Emperor, Hot-Headed", ];
