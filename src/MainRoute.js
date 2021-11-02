import React, { useState } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Main from "./pages/Main/Main";
import Frontend from "./pages/Frontend/Frontend";
import Fullstack from "./pages/Fullstack/Fullstack";
import './Normalize.css';
import './App.css';
import Backend from "./pages/Backend/Backend";
import Design from "./pages/Design/Design";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

const App = () => {

    const [ThanksModalForCourses, setThanksModalForCourses] = useState(true)
    const [endModal, setEndModal] = useState(false)

    const openingModalHandler = () => {
        setEndModal(true)
    }



    return (
        <div className={'main__route'}>
            <Header />
            <Switch>
                <Route exact path={'/'} render={() => <Main  endModal={endModal} setEndModal={setEndModal} ThanksModalForCourses={ThanksModalForCourses} setThanksModalForCourses={setThanksModalForCourses} openingModalHandler={openingModalHandler} />} />
                <Route exact path={'/front'} render={() => <Frontend endModal={endModal} setEndModal={setEndModal} ThanksModalForCourses={ThanksModalForCourses} setThanksModalForCourses={setThanksModalForCourses} openingModalHandler={openingModalHandler} />} />
                <Route exact path={'/fullstack'} render={() => <Fullstack endModal={endModal} setEndModal={setEndModal} ThanksModalForCourses={ThanksModalForCourses} setThanksModalForCourses={setThanksModalForCourses} openingModalHandler={openingModalHandler} />} />
                <Route exact path={'/python'} render={() => <Backend endModal={endModal} setEndModal={setEndModal} ThanksModalForCourses={ThanksModalForCourses} setThanksModalForCourses={setThanksModalForCourses} openingModalHandler={openingModalHandler} />} />
                <Route exact path={'/ui-ux'} render={() => <Design endModal={endModal} setEndModal={setEndModal} ThanksModalForCourses={ThanksModalForCourses} setThanksModalForCourses={setThanksModalForCourses} openingModalHandler={openingModalHandler} />} />
                <Route path="/404" component={NotFound}/>
                <Redirect to={"/404"}/>
            </Switch>
        </div>
    );
};

export default App;