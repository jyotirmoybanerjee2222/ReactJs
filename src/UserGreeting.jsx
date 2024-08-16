import PropTypes from 'prop-types';

function UserGreeting(props){
    
    // if(props.isLoggedIn)
    // {
    //     return<h2> welcome {props.userName} </h2>
    // }
    // else{
    //     return <h2>Please log in to Continue {props.userName}</h2>
    // }
    const welcomeMessage =  <h2 className="welcome-message">
                            Welcome {props.userName}
                            </h2>

    const loginpromt = <h2 className="login-promt">
                        Please log in {props.userName}
                        </h2>


   // return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.userName}</h2> : <h2 className="login-promt">Please log in {props.userName}</h2>);
   return(props.isLoggedIn ? welcomeMessage : loginpromt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username:  PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName:  "Guest",
}

export default UserGreeting