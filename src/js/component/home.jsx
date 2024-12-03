import React from "react";
//include images into your bundle


//create your first component
const SecondCounter = ({ digitFour, digitThree, digitTwo, digitOne }) => {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SecondCounter;