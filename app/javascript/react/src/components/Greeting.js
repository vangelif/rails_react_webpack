import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsData } from '../redux/greetingsSlice';

const Greeting = () => {
    const state = useSelector(state => state.greeting);
    console.log("STATE: ", state);
    // console.log("STATE: ", state);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getGreetingsData());
    }, [dispatch]);


    console.log("STATE: ", state);

    return (
        <>
            <div>
                <h1>GREETINGS</h1>
                {state}
            </div>
        </>
    )
}

export default Greeting;