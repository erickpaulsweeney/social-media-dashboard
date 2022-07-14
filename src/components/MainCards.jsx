function MainCards(props) {
    return (
        <div className={"main-card"} style={{ backgroundColor: props.cardBG }}>
            <div className={"main-border-top " + props.type}></div>
            <div className="main-top-row">
                <img src={`/images/icon-${props.type}.svg`} className="main-icon" alt="icon" />
                <div className="handle" style={{ color: props.secondaryText }}>{props.handle}</div>
            </div>
            <div className="main-big-num" style={{ color: props.primaryText }}>{props.num}</div>
            <div className="main-subtext" style={{ color: props.secondaryText }}>{props.subtext}</div>
            <div className="main-bottom-row">
                <img src={`/images/icon-${props.update}.svg`} className="main-arrow" alt="arrow" />
                <div className="main-update-num" style={{
                    color: props.update === 'up' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'
                }}>{`${props.updNum} Today`}</div>
            </div>
        </div>
    )
}

export default MainCards;