import React,{ useState,useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { SET_ALERT } from '../../context/types';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const [user,setUser] = useState({
        email: '',
        password1: ''
    });
    const { setAlert } = alertContext;
    const { login, error, clearErrors ,isAuthenticated } = authContext;
    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value});

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const onSubmit = e => {
        e.preventDefault();
        if( email === '' || password === '') {
            setAlert('Please fill all the fields','danger');
        } else {
            login({
                email,password
            })
        }
        console.log('Login Submit');
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} name="email" onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} name="password" onChange={onChange} required />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login;