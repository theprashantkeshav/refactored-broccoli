import { gpeOneQuestions } from "./gpePracticeContents";
import { gpeTwoQuestions } from "./gpePracticeContents";
import { gpeThreeQuestions } from "./gpePracticeContents";
import { gpeFourQuestions } from "./gpePracticeContents";
import { gpeFiveQuestions } from "./gpePracticeContents";

import { gpeOne } from "./gpePracticeResponse";
import { gpeTwo } from "./gpePracticeResponse";
import { gpeThree } from "./gpePracticeResponse";
import { gpeFour } from "./gpePracticeResponse";
import { gpeFive } from "./gpePracticeResponse";

export const gpeQuestions = {
  one: gpeOneQuestions,
  two: gpeTwoQuestions,
  three: gpeThreeQuestions,
  four: gpeFourQuestions,
  five: gpeFiveQuestions,
};

export const gpeReponses = {
  one: gpeOne,
  two: gpeTwo,
  three: gpeThree,
  four: gpeFour,
  five: gpeFive,
};
