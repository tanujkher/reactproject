import React from 'react';

const PlayerSingle = (prop) => {
    return (
        <div className="row">
            <div className="col s5">
                <div className="card">
                    <div className="card-image">
                        <img src="Sample_User_Icon.png" alt='User' />
                        <span style={{ color: 'teal' }} className="card-title">{prop.player.firstName} {prop.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone : {prop.player.phone === undefined ? 'NA' : prop.player.phone} &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Email : {prop.player.email === undefined ? 'NA' : prop.player.email}</p>
                    </div>
                    {/* <div className="card-action">
                        <a href="#">This is a link</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;