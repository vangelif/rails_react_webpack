import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsData } from '../redux/greetingsSlice';

const Greeting = () => {
    const { message: { message } } = useSelector(state => state.greeting);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getGreetingsData());
    }, [dispatch]);

    return (
        <>
            <div>
                <h1>GREETINGS</h1>
                {message}
            </div>
        </>
    )
}

export default Greeting;