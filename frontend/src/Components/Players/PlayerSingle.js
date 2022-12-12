import React from 'react';

const PlayerSingle = (prop) => {
    return (
        <div className="row">
            <div className="col s5">
                <div className="card">
                    <div className="card-image">
                        <img src="sample-1.jpg" alt='User' />
                        <a onClick={prop.deleteUser.bind(this, prop.player._id)} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">delete_forever</i></a>
                    </div>
                    <div className="card-content">
                        <span style={{ color: 'teal' }} className="card-title">{prop.player.firstName} {prop.player.lastName}</span>
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