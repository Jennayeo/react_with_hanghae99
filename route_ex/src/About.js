import React from 'react';

const About = (props) => {
    console.log(props.match);
    return (<div>My name is {props.match.params.About_name}</div>);

}

export default About;