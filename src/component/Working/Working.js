import React from 'react';

const Working = () => {
    return (
        <div>
            {/* exercise Details  */}
            <section>
                <div className='exercise-details-container'>
                    <div className='break-container'>
                        <h3>Working Details</h3>
                    </div>
                    <div className='exercise-time'>
                        <div>
                            <p><strong>Work Time's</strong></p>
                        </div>
                        <div>
                            <p><strong></strong></p>
                        </div>
                    </div>
                    <div className='exercise-time'>
                        <div>
                            <p><strong>Break Time's</strong></p>
                        </div>
                        <div>
                            <p><strong></strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn-add-to-list'>Contact</button>
                </div>
            </section>
        </div>
    );
};

export default Working;