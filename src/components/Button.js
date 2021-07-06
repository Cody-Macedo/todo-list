const Button = ({color, action, text}) => {

    return (
        <div>
            <button style={{backgroundColor: color}} className="btn" onClick={action}>{text}</button>
        </div>
    )
}
export default Button