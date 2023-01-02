import React from 'react';

const Break = () => {
    const breakTimes = {
        one: "10", tow: "20", three: "30", four: "70", five: "60"
    }
    const { one, tow, three, four, five } = breakTimes

    const breakBtnHandler = (breakTimes) => {
        console.log(breakTimes)
    }
    return (
        <div>
            {/* Add a break  section */}
            <section className='break-container'>
                <h3>Add A break</h3>
                <div className="break">
                    <div className='break-time'>
                        <button onClick={() => breakBtnHandler(one)}>{one}s</button>
                    </div>
                    <div className='break-time' >
                        <button onClick={() => breakBtnHandler(tow)}>{tow}s</button>
                    </div>
                    <div className='break-time'>
                        <button onClick={() => breakBtnHandler(three)}>{three}s</button>
                    </div>
                    <div className='break-time'>
                        <button onClick={() => breakBtnHandler(four)}>{four}s</button>
                    </div>
                    <div className='break-time'>
                        <button onClick={() => breakBtnHandler(five)}>{five}s</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Break;