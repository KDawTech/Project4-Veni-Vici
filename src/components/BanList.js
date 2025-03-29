import React from 'react';

const BanList = ({ banList, setBanList }) => {
    const remove = (value) => {
        setBanList(banList.filter(item => item !== value));
    };

    return (
        <div className="ban-list">
            <h3>Ban List</h3>
            <p>Select an attribute in your listing to ban it</p>
            {banList.map((item, index) => (
                <button key={index} onClick={() => remove(item)}>
                    {item} 
                </button>
            ))}
        </div>
    );
};

export default BanList;
