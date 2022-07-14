function SecondaryCards(props) {
    return (
        <div className="secondary-card" style={{ backgroundColor: props.cardBG }}>
            <div className="secondary-top-row">
                <div className="secondary-subtext" style={{ color: props.secondaryText }}>{props.subtext}</div>
                <img src={`/images/icon-${props.type}.svg`} className="secondary-icon" alt="icon" />
            </div>
            <div className="secondary-bottom-row">
                <div className="secondary-big-num" style={{ color: props.primaryText }}>{props.num}</div>
                <div className="secondary-container-update">
                    <img src={`/images/icon-${props.update}.svg`} className="secondary-arrow" alt="arrow" />
                    <div className="secondary-update-num" style={{
                    color: props.update === 'up' ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'
                }}>{`${props.updNum}`}</div>
                </div>
            </div>
        </div>
    )
}

export default SecondaryCards;