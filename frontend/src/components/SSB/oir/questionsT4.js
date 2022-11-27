export const questionsFour = [
  {
    id: 1,
    question:
      "Arrange the words given below in a meaningful sequence. 1.Key	2.Door	3.Lock  4.Room	5.Switch on.",
    answer: "1, 3, 2, 4, 5",
    options: [
      "5, 1, 2, 4, 3",
      "4, 2, 1, 5, 3",
      "1, 3, 2, 4, 5",
      "1, 2, 3, 5, 4",
    ],
    explanations: [
      "The correct order is : 1.Key	 3.Lock	 2.Door	 4.Room	 5.Switch on",
    ],
  },
  {
    id: 2,
    question:
      "Arrange the words given below in a meaningful sequence. 1.Word 	2.Paragraph 	3.Sentence  4.Letters	 5.Phrase",
    answer: "4, 1, 5, 3, 2",
    options: [
      "4, 1, 5, 2, 3",
      "4, 1, 3, 5, 2",
      "4, 2, 5, 1, 3",
      "4, 1, 5, 3, 2",
    ],
    explanations: [
      "The correct order is : 4.Letters	 1.Word	 5.Phrase	 3.Sentence	 2.Paragraph",
    ],
  },
  {
    id: 3,
    question:
      "Arrange the words given below in a meaningful sequence. 1.Police	2.Punishment	3.Crime 4.Judge	 5.Judgement",
    answer: "3, 1, 4, 5, 2",
    options: [
      "3, 1, 2, 4, 5",
      "1, 2, 4, 3, 5",
      "5, 4, 3, 2, 1",
      "3, 1, 4, 5, 2",
    ],
    explanations: [
      "The correct order is : 3.Crime	1.Police	4.Judge	 5.Judgement	2.Punishment",
    ],
  },
  {
    id: 4,
    question:
      "Arrange the words given below in a meaningful sequence. 1.Family	 2.Community	3.Member 4.Locality 	5.Country",
    answer: "3, 1, 2, 4, 5",
    options: [
      "3, 1, 2, 4, 5",
      "3, 1, 2, 5, 4",
      "3, 1, 4, 2, 5",
      "3, 1, 4, 5, 2",
    ],
    explanations: [
      "The correct order is : 3.Member	1.Family	2.Community	 4.Locality	 5.Country",
    ],
  },
  {
    id: 5,
    question:
      "Arrange the words given below in a meaningful sequence. 1.Poverty	2.Population	3.Death 4.Unemployment	5.Disease",
    answer: "2, 4, 1, 5, 3",
    options: [
      "2, 3, 4, 5, 1",
      "3, 4, 2, 5, 1",
      "2, 4, 1, 5, 3",
      "1, 2, 3, 4, 5",
    ],
    explanations: [
      "The correct order is : 2.Population	4.Unemployment	1.Poverty	 5.Disease	3.Death",
    ],
  },
  {
    id: 6,
    question:
      "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    answer: "Father",
    options: ["Brother", "Uncle", "Cousin", "Father"],
    explanations: [
      "The boy in the photograph is the only son of the son of Suresh's mother i.e., the son of Suresh. Hence, Suresh is the father of the boy.",
    ],
  },
  {
    id: 7,
    question:
      "If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
    answer: "P - M + N x Q",
    options: ["Q - N + M x P", "P + S x N - Q", "P - M + N x Q", "Q - S % P"],
    explanations: [
      "P - M → P is the brother of M, M + N → M is the mother of N, N x Q → N is the sister of Q, Therefore, P is the maternal uncle of Q.",
    ],
  },
  {
    id: 8,
    question:
      "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
    answer: "Cannot be determined",
    options: ["Brother", "Sister", "Nephew", "Cannot be determined"],
    explanations: [
      "If D is Male, the answer is Nephew. If D is Female, the answer is Niece. As the sex of D is not known, hence, the relation between D and A cannot be determined.",
    ],
  },
  {
    id: 9,
    question:
      "If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?",
    answer: "M x N - C + F",
    options: [
      "M - N x C + F",
      "F - C + N x M",
      "N + M - F x C",
      "M x N - C + F",
    ],
    explanations: [
      "M x N → M is the father of N, N - C → N is the sister of C, and C + F → C is the brother of F. Hence, M is the father of C or C is the son of M.",
    ],
  },
  {
    id: 10,
    question:
      "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
    answer: "Brother",
    options: ["Brother", "Nephew", "Uncle", "Son-in-law"],
    explanations: [
      "The father of the boy's uncle → the grandfather of the boy and daughter of the grandfather → sister of the father.",
    ],
  },
  {
    id: 11,
    question: "120, 99, 80, 63, 48, ?",
    answer: "35",
    options: ["35", "38", "39", "40"],
    explanations: [
      "The pattern is - 21, - 19, - 17, - 15,.....So, missing term = 48 - 13 = 35.",
    ],
  },
  {
    id: 12,
    question: "589654237, 89654237, 8965423, 965423, ?",
    answer: "96542",
    options: ["58965", "65423", "89654", "96542"],
    explanations: [
      "The digits are removed one by one from the beginning and the end in order alternately so as to obtain the subsequent terms of the series.",
    ],
  },
  {
    id: 13,
    question: "3, 10, 101,?",
    answer: "10202",
    options: ["10101", "10201", "10202", "11012"],
    explanations: [
      "Each term in the series is obtained by adding 1 to the square of the preceding term. So, missing term = (101)2 + 1 = 10202.",
    ],
  },
  {
    id: 14,
    question: "In the series 2, 6, 18, 54, ...... what will be the 8th term ?",
    answer: "4374",
    options: ["4370", "4374", "7443", "7434"],
    explanations: [
      "Clearly, 2 x 3 = 6, 6 x 3 = 18, 18 x 3 = 54,.....So, the series is a G.P. in which a = 2, r = 3.Therefore 8th term = ar8-1 = ar7 = 2 x 37 = (2 x 2187) = 4374.",
    ],
  },
  {
    id: 15,
    question: "125, 80, 45, 20, ?",
    answer: "5",
    options: ["5", "8", "10", "12"],
    explanations: [
      "The pattern is - 45, - 35, - 25, .....So, missing term = 20 - 15 = 5.",
    ],
  },
  {
    id: 16,
    question: "CUP : LIP :: BIRD : ?",
    answer: "BEAK",
    options: ["BUSH", "GRASS", "FOREST", "BEAK"],
    explanations: [
      "Cup is used to drink something with the help of lips. Similarly, birds collect grass with the help of their beak to make their nest.",
    ],
  },
  {
    id: 17,
    question: "Flow : River :: Stagnant : ?",
    answer: "Pool",
    options: ["Rain", "Stream", "Pool", "Canal"],
    explanations: [
      "As Water of a River flows similarly water of Pool is Stagnant.",
    ],
  },
  {
    id: 18,
    question: "Paw : Cat :: Hoof : ?",
    answer: "Horse",
    options: ["Lamb", "Elephant", "Lion", "Horse"],
    explanations: ["As cat has Paw similarly Horse has Hoof."],
  },
  {
    id: 19,
    question: "Ornithologist : Bird :: Archaeologist : ?",
    answer: "Archaeology",
    options: ["Islands", "Mediators", "Archaeology", "Aquatic"],
    explanations: [
      "As Ornithologist is a specialist of Birds similarly Archaeologist is a specialist of Archaeology.",
    ],
  },
  {
    id: 20,
    question: "Peacock : India :: Bear : ?",
    answer: "Russia",
    options: ["Australia", "America", "Russia", "England"],
    explanations: [
      "As Peacock is the national bird of India, similarly Bear is the national animal of Russia.",
    ],
  },
  {
    id: 21,
    question:
      "One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
    answer: "North",
    options: ["East", "West", "North", "South"],
    explanations: [
      "No answer description available for this question. We are working on adding a picture representation of the explanation.",
    ],
  },
  {
    id: 22,
    question:
      "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
    answer: "None of these",
    options: ["North", "South", "South-East", "None of these"],
    explanations: [
      "No answer description available for this question. We are working on adding a picture representation of the explanation.",
    ],
  },
  {
    id: 23,
    question:
      "If South-East becomes North, North-East becomes West and so on. What will West become?",
    answer: "South-East",
    options: ["North-East", "North-West", "South-East", "South-West"],
    explanations: [
      "No answer description available for this question. We are working on adding a picture representation of the explanation.",
    ],
  },
  {
    id: 24,
    question:
      "A man walks 5 km toward the south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
    answer: "South-West",
    options: ["West", "South", "North-East", "South-West"],
    explanations: [
      "No answer description available for this question. We are working on adding a picture representation of the explanation.",
    ],
  },
  {
    id: 25,
    question:
      "Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M. ?",
    answer: "West",
    options: ["South-East", "South", "North", "West"],
    explanations: [
      "No answer description available for this question. We are working on adding a picture representation of the explanation.",
    ],
  },

  {
    id: 26,
    question: "Choose the word which is different from the rest.",
    answer: "Chicken",
    options: ["Chicken", "Snake", "Swan", "Crocodile"],
    explanations: ["All except Chicken can live in water."],
  },
  {
    id: 27,
    question: "Choose the word which is different from the rest.",
    answer: "Veil",
    options: ["Cap", "Turban", "Helmet", "Veil"],
    explanations: [
      "All except Veil cover the head, while veil covers the face.",
    ],
  },
  {
    id: 28,
    question: "Choose the word which is different from the rest.",
    answer: "Eagle",
    options: ["Kiwi", "Eagle", "Emu", "Ostrich"],
    explanations: ["All except Eagle are flightless birds."],
  },

  {
    id: 29,
    question: "Choose the word which is different from the rest.",
    answer: "Ayurveda",
    options: ["Rigveda", "Yajurveda", "Atharvaveda", "Ayurveda"],
    explanations: [
      "All except Ayurveda are names of holy scriptures, the four Vedas. Ayurveda is a branch of medicine.",
    ],
  },
  {
    id: 30,
    question: "Choose the word which is different from the rest.",
    answer: "Oil",
    options: ["Curd", "Butter", "Oil", "Cheese"],
    explanations: ["All except Oil are products obtained from milk."],
  },
  {
    id: 31,
    question: "A train always has",
    answer: "Engine",
    options: ["Rails", "Driver", "Guard", "Engine"],
    explanations: ["Engine is the basic thing for trains."],
  },
  {
    id: 32,
    question: "Which one of the following is always found in 'Bravery'?",
    answer: "Courage",
    options: ["Experience", "Power", "Courage", "Knowledge"],
    explanations: ["Courage makes us brave"],
  },
  {
    id: 33,
    question: "A song always has",
    answer: "Word",
    options: ["Word", "Chorus", "Musician", "Tymbal"],
    explanations: [
      "First we have to collect the words then we can implement it into a song.",
    ],
  },
  {
    id: 34,
    question:
      "Verification of truth: Yesterday I saw an ice cube which had already melted due to heat of a nearby furnace.",
    answer: "Never",
    options: ["Always", "Never", "Often", "Sometimes"],
    explanations: [
      "Since the ice cube had already melted due to the heat of a nearby furnace so after this ice cannot remain as an ice cube.",
    ],
  },
  {
    id: 35,
    question: "What is found necessarily in milk?",
    answer: "Whiteness",
    options: ["Cream", "Curd", "Water", "Whiteness"],
    explanations: [
      "Even though water, curd, and cream are removed from milk it will be white in color due to the reason that it is rich in calcium, Casein which helps contribute to milk's white color.",
    ],
  },
  {
    id: 36,
    question:
      "Sirius is the name of the brightest star which is serious in nature.",
    answer: "Absurd",
    options: ["True", "False", "Probable", "Absurd"],
    explanations: [
      "Sirius is the brightest start not because it is serious in nature but because it's relatively close to Earth.",
    ],
  },
  {
    id: 37,
    question: "Car Nicobar is the northernmost point of the Nicobar islands.",
    answer: "True",
    options: ["True", "False", "Probable", "Absurd"],
    explanations: [
      "Car Nicobar is the northernmost point of the Nicobar Islands.",
    ],
  },
  {
    id: 38,
    question: "Assam Rifles is a part of Ministry of Defence.",
    answer: "False",
    options: ["True", "False", "Probable", "Absurd"],
    explanations: ["The Assam Rifles is under the control of Indian Army."],
  },
  {
    id: 39,
    question: "India is the world's fifth largest wind power producer.",
    answer: "True",
    options: ["True", "False", "Probable", "Absurd"],
    explanations: [
      " India is the fifth largest producer of wind energy with the sector alone constituting 68 percent of the total renewable energy produced in the country",
    ],
  },
  {
    id: 40,
    question: "Cricket is the National game of India.",
    answer: "False",
    options: ["True", "False", "Probable", "Absurd"],
    explanations: ["India does not have a National games."],
  },
];
