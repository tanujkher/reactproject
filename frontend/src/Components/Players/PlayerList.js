import React from 'react';

const PlayerList = (prop) => {
    return (
        <div>
            <ul className='collection with-header'>
                <li className='collection-header'><h4>Users</h4></li>
                {prop.players.map((item) => (
                    <a href='#!' className='collection-item' onClick={prop.updateCurrentPlayer.bind(this, item)} key={item._id}>{item.firstName} {item.lastName}</a>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;