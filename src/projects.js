import React from 'react'

class Projects extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
            <h4>Projects</h4>
            <div className="anisep"></div>
            <br></br>
                <p>Projects are available in my <a href="https://github.com/suryakandikonda" target="_blank">GitHub Profile</a></p>
                <ul>
                    <li><a href="https://github.com/suryakandikonda/StudentCommunity" target="_blank">Online Portal for Students</a> : Developed a Online Community for the students, where they can post their projects and showcase their talents. Studied about the Databases, and learnt Bootstrap. Also studied about Sessions to include a feauture of Student Login, Logout. <i>Highlight:</i> Designed an admin panel to monitor the student's posts. The post will be published online if approved by Admin. Used PHP, MySQL for the back-end.</li>
                    <br></br>
                    <li><a href="https://github.com/suryakandikonda/OnlineContestDatabase" target="_blank">Database for Online Contest</a> : Worked on developing a Database for an Online Contest, like Quiz. Takes the answer from the participant, matches with the answer  in the database and if correct, updates the score.</li><br></br>

                    <li><a href="https://github.com/suryakandikonda/TicTacToeusingMinMax" target="_blank">Tic Tac Toe game using AI</a> : Studied about <strong>MinMax</strong> Algorithm and implemented it in developing Tic Tac Toe game in Python. Used tkinter module to develop GUI application in Python.</li><br></br>

                    <li><a href="https://suryakandikonda.github.io/sgpacal/" target="_blank">SGPA Calculator</a> : Designed a webpage using HTML and JS to calcuate the Semester Grade Point Average (SGPA) for the given Grades and Credits of the subject.</li><br></br>

                    <li><a href="https://github.com/suryakandikonda/Pong-Game-in-Python" target="_blank">Pong Game</a> : A GUI based multiplayer game in Python. Implements SimpleGUI module to design toggles and ball. Score is also calculated as pe the Game rules.</li><br></br>

                    <li><a href="https://codepen.io/suryakandikonda/pen/aqWprd" target="_blank">Green Screen Algorithm</a> : Studied about Green Screen Algorithma and developed Application that can delete the Green Mat background and replaces with the uploaded image.</li><br></br>

                    <li>Developed Single Page Applications using ReactJS framework. Example: This Webpage.</li><br></br>
                </ul>

                <br/><br/><br/><br/><br/>

            </div>
        )
    }
}

export default Projects