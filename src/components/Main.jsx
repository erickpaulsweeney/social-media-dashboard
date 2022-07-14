import { useState } from "react";
import MainCards from "./MainCards";
import SecondaryCards from "./SecondaryCards";
import data from "./Data";

function Main(props) {

    let [dark, setDark] = useState(true);

    let primaryBG = dark ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)';
    let hoverBG = dark ? 'hsl(232, 19%, 15%)' : 'hsl(225, 100%, 98%)';
    let cardBG = dark ? 'hsl(228, 28%, 20%)' : 'hsl(227, 47%, 96%)';
    let primaryText = dark ? 'hsl(0, 0%, 100%)' : 'hsl(230, 17%, 14%)';
    let secondaryText = dark ? 'hsl(228, 34%, 66%)' : 'hsl(228, 12%, 44%)';
    let buttonBG = dark ? 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))' : 'linear-gradient(to right, hsl(230, 22%, 74%), hsl(230, 22%, 74%))'

    return (
        <div className="container-all" style={{ backgroundColor: primaryBG, color: primaryText }}>
            <div className="container-main">
                <div className="container-header">
                    <div className="container-upper-header">
                        <div className="header main-header" style={{ color: primaryText }}>Social Media Dashboard</div>
                        <div className="total-followers" style={{ color: secondaryText }}>Total Followers: 23,004</div>
                        <hr />
                    </div>

                    <div className="container-lower-header">
                        <div className="container-darkmode">
                            <div className="darkmode-text" style={{ color: primaryText }}>Dark Mode</div>
                            <div className="darkmode-button" style={{ backgroundImage: buttonBG, justifyContent: dark ? null : 'flex-end' }} onClick={() => dark ? setDark(false) : setDark(true) }>
                                <div className="button-circle" style={{ backgroundColor: primaryBG }}></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-main-cards">
                    {data.main.map(el => <MainCards key={el.type + el.subtext} dark={dark ? true : false}
                    type={el.type} subtext={el.subtext} num={el.num} update={el.update} updNum={el.updNum} handle={el.handle} 
                    primaryBG={primaryBG} hoverBG={hoverBG} cardBG={cardBG} primaryText={primaryText} secondaryText={secondaryText} />)}
                </div>


                <div className="header secondary-header">Overview - Today</div>
                <div className="container-secondary-cards">
                    {data.secondary.map(el => <SecondaryCards key={el.type + el.subtext} dark={dark ? true : false} 
                    type={el.type} subtext={el.subtext} num={el.num} update={el.update} updNum={el.updNum} 
                    primaryBG={primaryBG} hoverBG={hoverBG} cardBG={cardBG} primaryText={primaryText} secondaryText={secondaryText} />)}
                </div>
            </div>
        </div>
    )
}

export default Main;