import React from "react";
import img from "./jiyoung.png";

const Start = (props) => {

    return (
        <div className="container"> 
            {/* //div로 감싸준다. 아우터 박스 만들기위해 */}
            <div className="main">
                <img className="main_s" src={img}/>
                <h1>나는 <span>{props.name}</span>에대해 얼마나 알고있을까?</h1>
                <input className="text-box" type="text" placeholder="내 이름"/>
                <button className="btn">시작하기</button>
            </div>
        </div>
    )
}

export default Start;