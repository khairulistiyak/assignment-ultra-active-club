import React from 'react';
import Break from '../Breack/Break';
import Working from '../Working/Working';
import "./Profile.css"

const Profile = () => {
    return (
        <div >
            <main className='profile-container'>
                {/* profile-section */}
                <section>
                    <div className='profile-section'>
                        <div>
                            <img src="https://cdn2.f-cdn.com/ppic/204224786/logo/61444035/cu1w8/profile_logo_BQNXJ_5f652d255fc525a6f19723844c927b5d.jpg?image-optimizer=force&width=280%201x,%20https://cdn2.f-cdn.com/ppic/204224786/logo/61444035/cu1w8/profile_logo_BQNXJ_5f652d255fc525a6f19723844c927b5d.jpg?image-optimizer=force&width=560%202x" alt="" />
                        </div>
                        <div className='profile-info'>
                            <h3>Amena Akter Ankhi (<small className='nk-name'>Picchi designer</small>)</h3>
                            <p>From <strong>Natore</strong> </p>
                            <p>Works at <strong>Logo Designer</strong></p>
                        </div>
                    </div>
                </section>
                {/* wight - hight - age  */}
                <section>
                    <div className="calculation">
                        <div>
                            <h2><strong>60</strong><small> kg</small></h2>
                            <p>weight</p>
                        </div>
                        <div>
                            <h2><strong>5.2</strong><small></small></h2>
                            <p>Height</p>
                        </div>
                        <div>
                            <h2><strong>22</strong><small> yrs</small></h2>
                            <p>Age</p>
                        </div>
                    </div>
                </section>
                <Break></Break>
                <Working></Working>
            </main>
        </div>
    );
};

export default Profile;