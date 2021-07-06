import PropTypes from 'prop-types';
import Button from "./Button";



const Header = ({title, toggleAdd, color, text}) => {

    return (
        <div className="header">
            {/*<h1>{props.title}</h1>*/}
            {/*<h1 style={{color: "red", backgroundColor: "#ff4b4b"}}>{title}</h1>*/}
            {/*<h1 style={headingStyle}>{title}</h1>*/}
            <h1>{title}</h1>
            <Button color={color} action={toggleAdd} text={text}/>
            {/*<button className="btn">Ajouter</button>*/}
        </div>
    )
}


Header.defaultProps = {
    title: 'Mon ToDo List'
}

Header.propTypes = {
    title: PropTypes.string
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header