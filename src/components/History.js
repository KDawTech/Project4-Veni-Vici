import React from 'react';

const History = ({ history }) => {
    return (
        <div className="history">
            <h3>Who have we seen so far?</h3>
            {history.map((item, index) => (
                <div key={index} className="history-item">
                    <img src={item.url} alt="history-cat" />
                    <p>A {item.breeds[0]?.name} cat from {item.breeds[0]?.origin}</p>
                </div>
            ))}
        </div>
    );
};

export default History;

