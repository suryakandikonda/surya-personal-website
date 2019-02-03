import React from 'react'

const sty = {
    textAlign:'center',
};

class TechnicalSkills extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h4>Technical Skills</h4>
                <div className="anisep"></div>
                <br></br>
                <div className="row">
                    <div className="col-sm" style={sty}>
                        <h2>Interested</h2><br></br>
                        <p>Algorithms</p>
                        <p>Data Structures</p>
                        <p>Web Technologies</p>
                        <p>Database</p>                    
                    </div>

                    <div className="col-sm" style={sty}>
                        <h2>Programming Languages</h2><br></br>
                        <p>Python</p>
                        <p>C</p>
                        <p>C++</p>
                        <p>Java</p>
                        <p>JavaScript</p>
                    </div>

                    <div className="col-sm" style={sty}>
                        <h2>Web Development and Tools</h2><br></br>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>PHP</p>
                        <p>MySQL</p>
                        <p>Bootstrap</p>
                        <p>ReactJS</p>
                    </div>
                </div>


                <br/><br/><br/><br/><br/>
                
            </div>
        )
    }
}

export default TechnicalSkills