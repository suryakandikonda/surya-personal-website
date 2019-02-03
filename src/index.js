import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './home'
import Education from './education'
import Experience from './experience'
import TechnicalSkills from './technicalskills'
import RelevantCourses from './relevantcourses'
import Projects from './projects'
import Contact from './contact'
import * as serviceWorker from './serviceWorker';

    const ele = (
        <div className="background-home">
                <h2 className="home-title"><strong>Surya Kandikonda</strong></h2>
                <p className="home-subtitle">I Code, Design and Develop</p>
                <p className="home-contact"><strong>+91</strong> 73063 74787  |  suryasaikandikonda@gmail.com</p>
                <div className="seperator"></div>
            </div>
    );
    ReactDOM.render(ele, document.getElementById('headd'));


const home = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact aciveClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink aciveClassName="active" to="/education">Education</NavLink>
                </li>

                <li>
                    <NavLink aciveClassName="active" to="/experience">Experience</NavLink>
                </li>

                <li>
                    <NavLink aciveClassName="active" to="/technicalskills">Technical Skills</NavLink>
                </li>

                <li>
                    <NavLink aciveClassName="active" to="/relevantcourses">Relevant Courses</NavLink>
                </li>

                <li>
                    <NavLink aciveClassName="active" to="/projects">Projects</NavLink>
                </li>

                <li>
                    <NavLink aciveClassName="active" to="/contact">Contact me</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/education" component={Education} />
                <Route path="/experience" component={Experience} />
                <Route path="/technicalskills" component={TechnicalSkills} />
                <Route path="/relevantcourses" component={RelevantCourses} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </Router>
)



ReactDOM.render(home, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
