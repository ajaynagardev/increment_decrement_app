import '../style/applogic.css';
import { useState } from 'react';
function AppLogic(){

    const [count, setCount] = useState(0);
    function decreaseHandler(){
        setCount(count-1);
    }
    function increaseHandler(){
        setCount(count+1);
    }
    function restHandler(){
        setCount(0);
    }
    return(
        
        <div className='main-container'>
            <div className='App-header-i'>
            <h2 >increment & decrement app</h2>
            </div>
            <div className='container'>
                <div className='increment' onClick={increaseHandler}>&#8724;</div>
                <div className='number'>{count}</div>
                <div className='decrement' onClick={decreaseHandler}>&minus;</div>
            </div>
                <div onClick={restHandler} className='reset'>Reset</div>
        
        </div>
    );
}
export default AppLogic;