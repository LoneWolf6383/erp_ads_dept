/* eslint-disable no-lone-blocks */
import './App.css';
import 'react-bootstrap'
import {LogInPage} from './pages/logInPage'
// import { FeedBackForm } from './pages/feedBackForm';
// import { FacultyLogin } from './components/SignUPIN/facultyLogin'
// import { GenerateCOFeedback } from './components/generateCOFeedback'
// import {DynDropDown} from './components/DynTabs/dynDropDown'
// import { FeedbackGenerator } from './components/feedbackGenerator';
// import {StudentDashboard} from './pages/studentDashboard'
// import { FacultyDashboard } from './pages/facultyDashboard';
// import {DynTabs} from './components/dynTabscopy'
// import {PolarAreaChart} from './components/GraphPlot/polarAreaChart'
// import { StudentBackpack } from './components/studentBackpack'
function App() { 
  return ( 
    <div style={{height:'100%'}}>
      <LogInPage/>
      {/* <FacultyDashboard /> */}
    </div>

);
}
export default App;
{/* <FeedbackGenerator/> */}
{/* <StudentDashboard/>  */}
{/* <PolarAreaChart/> */}
{/* <FacultyDashboard/> */}
{/* <StudentLogInPage/> */}
{/* <FeedBackForm/> */}
{/* <DynTabs/> */}