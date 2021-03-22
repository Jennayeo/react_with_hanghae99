import React from "react";
// import img from "./jiyoung.png";

const MainPage = (props) => {

    return (
        <div className="container"> 
            {/* //div로 감싸준다. 아우터 박스 만들기위해 */}
            <div className="main">
                {/* <img className="main_s" src={img}/> */}
                <h1><span>{props.month}</span>{props.year}</h1>
                {/* <input className="text-box" type="text" placeholder="내 이름"/> */}
                <button className="btn">시작하기</button>
            </div>
        </div>
    )
}

export default MainPage;