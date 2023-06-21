const Balance = (props) => {
    return (
        <div className="balance">
            <p>Balance: {props.currCredits - props.currDebits}</p>
        </div>
    )
}

export default Balance;