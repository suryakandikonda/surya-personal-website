import React from 'react'
import linkedin from './linkedin.png'
import github from './github.png'
import twitter from './twitter.png'
import insta from './insta.png'

const sty = {
    textAlign:'center',
};

const imgsty = {
    width:'70px',
    height:'70px',
    marginRight:'10px'
};

const instasty = {
    width:'80px',
    height:'70px',
    marginRight:'10px'
};

const twittersty = {
    width:'80px',
    height:'80px',
    marginRight:'10px'
};



class Contact extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
            <h4>Contact me</h4>
            <div className="anisep"></div>
            <br></br>
                <h3 style={sty}>Follow me on:</h3>
                <a href="https://www.linkedin.com/in/suryakandikonda/" target="_blank"><img src={linkedin} style={imgsty}/></a>
                <a href="https://twitter.com/suryakandikonda" target="_blank"><img src={twitter} style={twittersty}/></a>
                <a href="https://github.com/suryakandikonda" target="_blank"><img src={github} style={imgsty}/></a>
                <a href="https://www.instagram.com/suryakandikonda/" target="_blank"><img src={insta} style={instasty}/></a>
                
            <br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default Contact