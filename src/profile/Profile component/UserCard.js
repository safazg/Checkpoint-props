import React from 'react'
import PropTypes from 'prop-types'


const authStyle = {
    color: "green",
};
const notAuthStyle = {
    color: "red",
};


function UserCard(props) {
    
    const {
    user: {name , email, age, isAuth, address },
    alertName,
    } = props;

    return (
        <section id="title">
            <h2 class="text-important">About me</h2>
        <div className="user-card">
        <h2 style={isAuth ? authStyle : notAuthStyle}> Name : {name} </h2>
    <h2> Email : {email} </h2>
    <h2> Age : {age} </h2>
    {address && <h2> Address : {address}</h2>}
    <button onClick={() => alertName(name)}> Click Me </button>
        </div>
        </section>
    );
    }

    UserCard.prototype = {
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            age: PropTypes.number,
            isAuth: PropTypes.bool,   
        }),
        alertName: PropTypes.func,
    };


    UserCard.defaultProps = {
        user: {
        name: "Hello",
        age: 100,
        email: "No Data",
        isAuth: false,
        },
 };
    export default UserCard;