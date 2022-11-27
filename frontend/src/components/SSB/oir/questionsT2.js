export const questionsTwo = [
  {
    id: 1,
    question: " F2, __, D8, C16, B32,",
    answer: "E4",
    options: ["A16", "G4", "E4", "E3"],
    explanations: [
      "The first component of each term is a letter which is in reverse alphabetical order and the second component of each term is increasing by a multiple of 2.",
    ],
  },
  {
    id: 2,
    question:
      "A girl introduced a boy as the son of the daughter of the father of her uncle. The boy is girl's",
    answer: "Brother",
    options: ["Brother", "Son", "Uncle", "Nephew"],
    explanations: [
      "Girl's uncle's father = Girl's grandfather(paternal or maternal) Girl's uncle's father's daughter = Girl's grandfather's daughter = Girl's aunt or girl's mother. So, the body is the son of the girl's aunt or the girl's mother. The boy and girl could be cousins or slings. Thus, the boy would be the brother.",
    ],
  },
  {
    id: 3,
    question: "If FIRE is coded as `#*?%`, then FREEZE will be coded as",
    answer: "#?%%&%",
    options: ["#?%%&%", "??%%#*", "%%%?^^", "#?%%?^"],
    explanations: ["F-#, I-*, R-?, E-%, Z-&."],
  },
  {
    id: 4,
    question: "aab_aaa_bba_",
    answer: "bba",
    options: ["abb", "bba", "bab", "aab"],
    explanations: [
      "1 First blank space should be filled in by 'b' so that we have two a's followed by two b's 2 Second blank space should be filled in either by 'a' so that we have four a's followed by two b's or by 'b' so that we have three a's followed by three b's 3 Last space must be filled in by 'a' 4 Thus we have two possible answers: 'baa' and 'bba' But only 'baa' appears in the alternatives So the answer is (a). 5 In case we had both the possible answer in the alternatives we would have chosen the one that forms a more prominent pattern which is aabb/aaabbb/aa Thus our answer would have been 'bba'",
    ],
  },
  {
    id: 5,
    question: "4, 7, 12, 19, 28, ?",
    answer: "39",
    options: ["30", "36", "39", "49"],
    explanations: [
      "The pattern is + 3, + 5, + 7, + 9, .....So, missing term = 28 + 11 = 39.",
    ],
  },
  {
    id: 6,
    question: "10, 18, 28, 40, 54, 70, ?",
    answer: "88",
    options: ["85", "86", "87", "88"],
    explanations: [
      "The pattern is + 8, + 10, + 12, + 14, .....So, missing term = 70 + 18 = 88.",
    ],
  },
  {
    id: 7,
    question:
      "If X is the brother of the son of Y's son. How is X related to Y?",
    answer: "Grandson",
    options: ["Son", "Uncle", "Brother", "Grandson"],
    explanations: [
      "Son of Y's son means grandson of Y. Since X is the brother of son of Y's son that means X is also the grandson of Y.",
    ],
  },
  {
    id: 8,
    question: "Meaning of the proverb : To smell a rat",
    answer: "To suspect a trick or deceit",
    options: [
      "To detect a bad smell",
      "To misunderstand",
      "To suspect a trick or deceit",
      "To see hidden meaning",
    ],
    explanations: ["To smell a rat - To suspect a trick or deceit."],
  },
  {
    id: 9,
    question: "Meaning of the proverb : To spill the beans",
    answer: "To reveal secret information",
    options: [
      "To reveal secret information",
      "To misbehave",
      "To keep secrets",
      "To talk irrelevant",
    ],
    explanations: ["To spill the beans - To reveal secret information"],
  },
  {
    id: 10,
    question: "Meaning of the proverb : To get cold feet",
    answer: "To be afraid",
    options: [
      "To run for life",
      "To be afraid",
      "To fall sick",
      "To become discourteous",
    ],
    explanations: ["To get cold feet - To be afraid"],
  },
  {
    id: 11,
    question:
      "According to a military code, SYSTEM is SYSMET and NEARER is AENRER. What is the code for FRACTION?",
    answer: "CARFNOIT",
    options: ["CARFNOIT", "CARFTION", "FRACNOIT", "ARFCNOIT"],
    explanations: [
      "The letter is the first half and the latter half of the word are separately reversed to obtain the code.",
    ],
  },
  {
    id: 12,
    question: "A lover of mankind is called...",
    answer: "Philanthropist",
    options: ["Narcissist", "Philogynist", "Philanthropist", "Polyglot"],
    explanations: [
      "Narcissist - A person who has an excessive interest in or admiration of themselves.",
      "Philogynist - A person who likes or admires women.",
      "Philanthropist - A lover of mankind",
      "Polyglot - A person who knows and can use several languages.",
    ],
  },
  {
    id: 13,
    question: "Life history of a person written by that person is called...",
    answer: "Autobiography",
    options: ["Autobiography", "Topography", "Flexography", "Biography"],
    explanations: [
      "Autobiography - Life history of a person written by that person.",
      "Topography - The arrangement of the natural and artificial physical features of an area.",
      "Flexography - A rotary relief printing method using rubber or plastic plates.",
      "Biography - An account of someone's life written by someone else.",
    ],
  },
  {
    id: 14,
    question: "A person who writes beautiful writing is called",
    answer: "Calligrapher",
    options: ["Cartographer", "Calligrapher", "Choreographer", "Chauffeur"],
    explanations: [
      "Cartographer - A person who draws or produces maps.",
      "Calligrapher - A person who writes beautiful writing.",
      "Choreographer - A person who composes the sequence of steps and moves for a performance of dance.",
      "Chauffeur - A person employed to drive a private or hired car.",
    ],
  },
  {
    id: 15,
    question: "Flower : Bud :: Plant : ?",
    answer: "Seed",
    options: ["Seed", "Taste", "Flower", "Twig"],
    explanations: [
      "Bud grows into a Flower. Similarly, a Seed grows into a Plant. ",
    ],
  },
  {
    id: 16,
    question: "Race : Fatigue :: Fast : ?",
    answer: "Hunger",
    options: ["Food", "Appetite", "Hunger", "Weakness"],
    explanations: ["Race causes fatigue and fast causes hunger."],
  },
  {
    id: 17,
    question:
      "Thick is realted to Thin in the same way as Idle is related to...",
    answer: "Industrious",
    options: ["Virtuous", "Business", "Industrious", "Activity"],
    explanations: [
      "Thick and Thin are antonyms. So are Idle and Industrious. ",
    ],
  },
  {
    id: 18,
    question:
      "Engineer is related to machine in the same way as Doctor is related to...",
    answer: "Body",
    options: ["Hospital", "Body", "Disease", "Medicine"],
    explanations: ["First tackles the second."],
  },
  {
    id: 19,
    question: "Book is to Publisher as Film is to...",
    answer: "Producer",
    options: ["Writer", "Editor", "Director", "Producer"],
    explanations: ["The production of first is done by the second."],
  },
  {
    id: 20,
    question: "Trumpet is to Band as Knife is to...",
    answer: "Cutlery",
    options: ["Fork", "Cutlery", "Metal", "Cut"],
    explanations: [
      "Trumpet is a part of the band. Similarly, the knife is an item of cutlery.",
    ],
  },
  {
    id: 21,
    question: "Which word will come last in the dictionary?",
    answer: "Downfall",
    options: ["Dive", "Dock", "Domain", "Downfall"],
    explanations: ["Downfall will come last in the dictionary."],
  },
  {
    id: 22,
    question: "Which word will come last in the dictionary?",
    answer: "Feed",
    options: ["Fault", "Fax", "Feat", "Feed"],
    explanations: ["Feed will come last in the dictionary."],
  },
  {
    id: 23,
    question:
      "The last digit of the smallest number from the following : 55667788, 55668800, 55667708, 55667780",
    answer: "8",
    options: ["0", "08", "8", "88"],
    explanations: ["Smallest number is 55667780."],
  },
  {
    id: 24,
    question:
      "In a certain code, TOGETHER is written as RQEGRJCT. In the same code, PAROLE will be written as",
    answer: "NCPQJG",
    options: ["NCPQJG", "NCQPJG", "RCPQJK", "None of these"],
    explanations: [
      "The letters at odd positions are each moved two steps backward and those at even positions are each moved two steps forward to obtain the corresponding letters of the code.",
    ],
  },
  {
    id: 25,
    question:
      "A man is facing west. He turns 45 degree in the clockwise direction and then another 180 degree in the same direction and then 270 degree in the anticlockwise direction. Which direction is he facing now?",
    answer: "South-west",
    options: ["South", "North-west", "West", "South-west"],
    explanations: ["West -> North-west -> South-east -> South-west"],
  },

  {
    id: 26,
    question:
      "I am facing east. I turn 100 degree in the clockwise direction and then 145 degree in the anticlockwise direction. Which direction am i facing now ?",
    answer: "North-east",
    options: ["East", "North-east", "North", "South-west"],
    explanations: ["East -> South-west -> North-East."],
  },
  {
    id: 27,
    question:
      "What is the angle covered by an hour-hand between 8 AM and 5 PM.",
    answer: "270",
    options: ["45", "95", "270", "360"],
    explanations: ["3 hrs is 90 degree. Hence 9 hrs is 90x3 = 270 degree."],
  },
  {
    id: 28,
    question:
      "A bag contains 9 sand bags and these 9 sand bags contain 3 smaller bags each. What is the total number of smaller bags?",
    answer: "27",
    options: ["3", "9", "27", "81"],
    explanations: ["Total number of smaller bags is 9x3 = 27."],
  },

  {
    id: 29,
    question: "Unjumble the letters : euplrp",
    answer: "Purple",
    options: ["Prupel", "Puplep", "Purple", "Leprup"],
    explanations: ["euplrp is unjumbled as Purple."],
  },
  {
    id: 30,
    question: "Unjumble the letters : rbiot",
    answer: "Orbit",
    options: ["Robit", "Orbit", "Birot", "Torbi"],
    explanations: ["rbiot is unjumbled as Orbit."],
  },
  {
    id: 31,
    question: "a_bbc_aab_cca_bbcc",
    answer: "acba",
    options: ["bacb", "acba", "abba", "caba"],
    explanations: ["The series is aabbcc/aabbcc/aabbcc."],
  },
  {
    id: 32,
    question: "Find the wrong number in the series : 3, 5, 7, 9, 11, 13",
    answer: "9",
    options: ["3", "5", "7", "9"],
    explanations: ["All number are prime but 9 is an odd number."],
  },
  {
    id: 33,
    question: "Choose the group of letters which is different from others.",
    answer: "EHL",
    options: ["BEH", "CFI", "DGJ", "EHL"],
    explanations: [
      "In all other groups, there is a gap of two letters between first and second as well as between second and third letters.",
    ],
  },
  {
    id: 34,
    question: "Choose the group of letters which is different from others.",
    answer: "BD",
    options: ["BD", "MP", "NQ", "HK"],
    explanations: [
      "In all other groups, there is a gap of two letters between the given letters.",
    ],
  },
  {
    id: 35,
    question: "Choose the numerical pair which is different from others.",
    answer: "49 - 42",
    options: ["83 - 75", "58 - 50", "49 - 42", "25 - 17"],
    explanations: [
      "The difference between the numbers in pairs, except 49 - 42 is 8.",
    ],
  },
  {
    id: 36,
    question: "If a triangle were two sides, Hexagon would be...",
    answer: "Five",
    options: ["Five", "Seven", "Six", "Three"],
    explanations: ["Hexagon would have 6-1 = 5 Sides."],
  },
  {
    id: 37,
    question: "If trigger were pistols, Switch would be...",
    answer: "Light",
    options: ["Finger", "Wall", "Plastic", "Light"],
    explanations: [
      "Press on the trigger to run pistol similarly, press on switch to turn the light.",
    ],
  },
  {
    id: 38,
    question: "E/14, H/19, K/24, ?",
    answer: "N/29",
    options: ["N/28", "O/29", "N/29", "M/29"],
    explanations: ["Upper component of ratio increases by 3 and Lower by 5."],
  },
  {
    id: 39,
    question: "If 3 + 5 + 6 = 467, 1 + 2 + 6 = 237 then 5 + 7 + 2 = ?",
    answer: "683",
    options: ["567", "687", "683", "460"],
    explanations: ["Increase 1 in every number and join them together."],
  },
  {
    id: 40,
    question: "ABZY : CDXW : : EFVU : ?",
    answer: "GHTS",
    options: ["GHTS", "HGTS", "TSHG", "HGST"],
    explanations: [
      "Letters are incremented by 2 for the first half and decremented by 2 for the second half.",
    ],
  },
];
