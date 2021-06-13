import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Template from "./components/Template";
import MainBody from './components/mainBody';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' ;
// import { Domain } from '@material-ui/icons';
import Formheader from './components/Formheader';
import Centeredtabs from './components/Tabs';
import Question_form from './components/Question_form';
import DailySurvey_Question from './components/DailySurvey_Question';
import WeeklySurvey_Question  from './components/WeeklySurvey_Quetion';
import MonthlySurvey_Question from './components/MonthlySurvey_Question';
// import personList from './components/api';
import Login from './components/Login';

function App() 
{

  return (
    <div className="app">
      <Router>
        <Switch>

            <Route exact path="/monthlySurvey/:id">
                <Formheader />
                <Centeredtabs />
                <MonthlySurvey_Question />
            </Route>

            <Route exact path="/login/:id">
                <Login />
            </Route>

            <Route exact path="/weeklySurvey/:id">
                <Formheader />
                <Centeredtabs />
                <WeeklySurvey_Question />
            </Route>

            <Route exact path="/dailySurvey/:id">
                <Formheader />
                <Centeredtabs />
                <DailySurvey_Question />
            </Route>

            <Route exact path="/form/:id" >
                <Formheader />
                <Centeredtabs />
                <Question_form />
                {/* <personList /> */}
            </Route>

            <Route exact path="/" >
                <Header />
                <Template />
                <MainBody />
            </Route>

        </Switch>
      </Router> 
    </div>
  );
  
}

export default App;
