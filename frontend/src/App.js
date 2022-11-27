import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//?  REDUX
// import { useSelector } from "react-redux";
import store from "./store";
// import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import "./App.css";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/header";
// import SignUp from "./components/signUp/signUp";
import LogIn from "./components/logIn/logIn";
import Auth from "./components/auth/auth";
import ContactUs from "./components/contactUs/contactUs";
import Premium from "./components/Premium/Premium";
import Demo from "./components/SSB/Demo/Demo";
import Guide from "./components/Guide/Guide";
import Editor from "./components/Editor/Editor";

//? PRACTICE INSTRUCTION
import OirPracticeInstruction from "./components/SSB/instruction/oir/oirPractice/oirPractice";
import PPDTPracticeInstruction from "./components/SSB/instruction/ppdt/ppdtPractice/ppdtPractice";
import TatPracticeInstruction from "./components/SSB/instruction/tat/tatPractice/tatPractice";
import WatPracticeInstruction from "./components/SSB/instruction/wat/watPractice/watPractice";
import SRTPracticeInstruction from "./components/SSB/instruction/srt/srtPractice/srtPractice";

//? TEST INSTRUCTION
import OirTestInstruction from "./components/SSB/instruction/oir/oirTest/oirTest";
import PPDTTestInstruction from "./components/SSB/instruction/ppdt/ppdtTest/ppdtTest";
import TatTestInstruction from "./components/SSB/instruction/tat/tatTest/tatTest";
import WatTestInstruction from "./components/SSB/instruction/wat/watTest/watTest";
import SRTTestInstruction from "./components/SSB/instruction/srt/srtTest/srtTest";
import SDInstruction from "./components/SSB/instruction/sd/sdInstruction";

//? SSB PRACTICE
import OirPractice from "./components/SSB/oir/oirPractice/oir";
import PPDTPractice from "./components/SSB/ppdt/ppdtPractice/ppdt";
import TATPractice from "./components/SSB/tat/practiceMode/tatPractice";
import WATPractice from "./components/SSB/wat/practiceMode/watPractice";
import SRTPractice from "./components/SSB/srt/srtPractice/srtPractice";

//?SSB TEST
import OirTest from "./components/SSB/oir/oirTest/oir";
import PPDTTest from "./components/SSB/ppdt/ppdtTest/ppdt";
import TATTest from "./components/SSB/tat/testMode/tatTest";
import WatTest from "./components/SSB/wat/testMode/watTest";
import SRTTest from "./components/SSB/srt/srtTest/setTest";
import Sd from "./components/SSB/selfDescription/sd";

//?PRACTICE SETS
import OirPracticeSet from "./components/SSB/sets/practiceSet/oir";
import PPDTPracticeSet from "./components/SSB/sets/practiceSet/ppdt";
import TATPracticeSet from "./components/SSB/sets/practiceSet/tat";
import WATPracticeSet from "./components/SSB/sets/practiceSet/wat";
import SRTPracticeSet from "./components/SSB/sets/practiceSet/srt";
import GPEPracticeSet from "./components/SSB/sets/practiceSet/gpe";

//?TEST SETS
import OirTestSet from "./components/SSB/sets/testSet/oir";
import PPDTTestSet from "./components/SSB/sets/testSet/ppdt";
import TATTestSet from "./components/SSB/sets/testSet/tat";
import WATTestSet from "./components/SSB/sets/testSet/wat";
import SRTTestSet from "./components/SSB/sets/testSet/srt";
import GPETestSet from "./components/SSB/sets/testSet/gpe";

//?RESPONSES
import GPETestResponses from "./components/SSB/gpe/testResponsePage";
import TATTestResponses from "./components/SSB/tat/testMode/testResponsePage";
import PPDTTestResponses from "./components/SSB/ppdt/ppdtTest/testResponsePage";
import SRTTestResponses from "./components/SSB/srt/srtTest/testResponsePage";
import WATTestResponses from "./components/SSB/wat/testMode/testResponsePage";
import OIRTestResponses from "./components/SSB/oir/oirTest/testResponsePage";

import GPEPractice from "./components/SSB/gpe/gpePractice";
import GPETest from "./components/SSB/gpe/gpeTest";
import GPEPracticeInstruction from "./components/SSB/instruction/gpe/gpePractice/gpePractice";
import GPETestInstruction from "./components/SSB/instruction/gpe/gpeTest/gpeTest";

//?EXTRAS
import OirPT from "./components/SSB/practiceOrTest/oirPT/oirPT";
import PpdtPT from "./components/SSB/practiceOrTest/ppdtPT/ppdtPT";
import SrtPT from "./components/SSB/practiceOrTest/srtPT/srtPT";
import TatPT from "./components/SSB/practiceOrTest/tatPT/tatPT";
import WatPT from "./components/SSB/practiceOrTest/watPT/watPT";
import GpePT from "./components/SSB/practiceOrTest/gpePT/gpePT";
import TestModule from "./components/SSB/module/testModule";
import PracticeModule from "./components/SSB/module/practiceModule";
import Faculty from "./components/SSB/faculty/faculty";
import NotFoundPage from "./custom/notFoundPage/notFoundPage";

function App() {
  // const state = useSelector((state) => state);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // if (state.auth.loading) {
  //   return null;
  // }

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Header} />

            {/* <Route exact path="/register" component={SignUp} /> */}
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/auth/:token" component={Auth} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/premium" component={Premium} />
            <Route exact path="/faculties" component={Faculty} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/guide" component={Guide} />
            <Route exact path="/editor/?promo='1234'" component={Editor} />

            {/* Practice Instrution */}
            <Route
              path="/officer-intelligence-rating-oir/practice-instruction/:setNumber"
              exact
              component={OirPracticeInstruction}
            />

            <Route
              path="/picture-perception-and-discussion-test-ppdt/practice-instruction/:setNumber"
              exact
              component={PPDTPracticeInstruction}
            />

            <Route
              exact
              path="/thematic-apperception-test-tat/practice-instruction/:setNumber"
              component={TatPracticeInstruction}
            />

            <Route
              exact
              path="/word-association-test-wat/practice-instruction/:setNumber"
              component={WatPracticeInstruction}
            />

            <Route
              exact
              path="/situation-reaction-test-srt/practice-instruction/:setNumber"
              component={SRTPracticeInstruction}
            />

            <Route
              exact
              path="/group-planning-exercise-gpe/practice-instruction/:setNumber"
              component={GPEPracticeInstruction}
            />

            {/* Test Instructions */}
            <Route
              path="/officer-intelligence-rating-oir-instruction/:setNumber"
              exact
              component={OirTestInstruction}
            />

            <Route
              path="/picture-perception-and-discussion-test-ppdt-instruction/:setNumber"
              exact
              component={PPDTTestInstruction}
            />

            <Route
              exact
              path="/thematic-apperception-test-tat-instruction/:setNumber"
              component={TatTestInstruction}
            />

            <Route
              exact
              path="/word-association-test-wat-instruction/:setNumber"
              component={WatTestInstruction}
            />

            <Route
              exact
              path="/situation-reaction-test-srt-instruction/:setNumber"
              component={SRTTestInstruction}
            />

            <Route
              exact
              path="/group-planning-exercise-gpe-instruction/:setNumber"
              component={GPETestInstruction}
            />

            <Route
              exact
              path="/self-description-test-sdt/instruction"
              component={SDInstruction}
            />

            {/* SSB PRACTICE */}
            <Route
              exact
              path="/officer-intelligence-rating-test-oir/practice-exercise/:setNumber"
              component={OirPractice}
            />

            <Route
              exact
              path="/picture-perception-and-descriptive-test-ppdt/practice-exercise/:setNumber"
              component={PPDTPractice}
            />

            <Route
              exact
              path="/thematic-apperception-test-tat/practice-exercise/:setNumber"
              component={TATPractice}
            />

            <Route
              exact
              path="/word-association-test-wat/practice-exercise/:setNumber"
              component={WATPractice}
            />

            <Route
              exact
              path="/situation-reaction-test-srt/practice-exercise/:setNumber"
              component={SRTPractice}
            />

            <Route
              exact
              path="/group-planning-exercise-gpe/practice-exercise/:setNumber"
              component={GPEPractice}
            />

            {/* SSB TEST */}
            <Route
              exact
              path="/officer-intelligence-rating-test-oir-exercise/:setNumber"
              component={OirTest}
            />

            <Route
              exact
              path="/picture-perception-and-descriptive-test-ppdt-exercise/:setNumber"
              component={PPDTTest}
            />

            <Route
              exact
              path="/thematic-apperception-test-tat-exercise/:setNumber"
              component={TATTest}
            />

            <Route
              exact
              path="/word-association-test-wat-exercise/:setNumber"
              component={WatTest}
            />

            <Route
              exact
              path="/situation-reaction-test-srt-exercise/:setNumber"
              component={SRTTest}
            />

            <Route
              exact
              path="/group-planning-exercise-gpe-exercise/:setNumber"
              component={GPETest}
            />

            <Route
              exact
              path="/service-selection-board-ssb/self-description-test-sdt"
              component={Sd}
            />

            {/* RESPONSES */}

            <Route
              exact
              path="/officer-intelligence-rating-test-oir-solution/:setNumber"
              component={OIRTestResponses}
            />

            <Route
              exact
              path="/picture-perception-and-descriptive-test-ppdt-solution/:setNumber"
              component={PPDTTestResponses}
            />

            <Route
              exact
              path="/thematic-apperception-test-tat-solution/:setNumber"
              component={TATTestResponses}
            />

            <Route
              exact
              path="/situation-reaction-test-srt-solution/:setNumber"
              component={SRTTestResponses}
            />

            <Route
              exact
              path="/word-association-test-wat-solution/:setNumber"
              component={WATTestResponses}
            />

            <Route
              exact
              path="/group-planning-exercise-gpe-solution/:setNumber"
              component={GPETestResponses}
            />

            {/* PRACTICE SET */}
            <Route
              exact
              path="/officer-intelligence-rating-test-oir/practice-exercise"
              component={OirPracticeSet}
            />
            <Route
              exact
              path="/picture-perception-and-descriptive-test-ppdt/practice-exercise"
              component={PPDTPracticeSet}
            />
            <Route
              exact
              path="/thematic-apperception-test-tat/practice-exercise"
              component={TATPracticeSet}
            />
            <Route
              exact
              path="/word-association-test-wat/practice-exercise"
              component={WATPracticeSet}
            />
            <Route
              exact
              path="/situation-reaction-test-srt/practice-exercise"
              component={SRTPracticeSet}
            />
            <Route
              exact
              path="/group-planning-exercise-gpe/practice-exercise"
              component={GPEPracticeSet}
            />
            {/* TEST SET */}
            <Route
              exact
              path="/officer-intelligence-rating-test-oir-exercise"
              component={OirTestSet}
            />
            <Route
              exact
              path="/picture-perception-and-descriptive-test-ppdt-exercise"
              component={PPDTTestSet}
            />
            <Route
              exact
              path="/thematic-apperception-test-tat-exercise"
              component={TATTestSet}
            />
            <Route
              exact
              path="/word-association-test-wat-exercise"
              component={WATTestSet}
            />
            <Route
              exact
              path="/situation-reaction-test-srt-exercise"
              component={SRTTestSet}
            />
            <Route
              exact
              path="/group-planning-exercise-gpe-test-module"
              component={GPETestSet}
            />

            {/* EXTRAS */}
            <Route
              exact
              path="/service-selection-board-ssb/officer-intelligence-rating-test-oir"
              component={OirPT}
            />
            <Route
              exact
              path="/service-selection-board-ssb/picture-perception-and-descriptive-test-ppdt"
              component={PpdtPT}
            />
            <Route
              exact
              path="/service-selection-board-ssb/situation-reaction-test-srt"
              component={SrtPT}
            />
            <Route
              exact
              path="/service-selection-board-ssb/thematic-apperception-test-tat"
              component={TatPT}
            />
            <Route
              exact
              path="/service-selection-board-ssb/word-association-test-wat"
              component={WatPT}
            />
            <Route
              exact
              path="/service-selection-board-ssb/group-planning-exercise-gpe"
              component={GpePT}
            />

            <Route
              exact
              path="/service-selection-board-ssb/practice-module"
              component={PracticeModule}
            />
            <Route
              exact
              path="/service-selection-board-ssb/test-module"
              component={TestModule}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
