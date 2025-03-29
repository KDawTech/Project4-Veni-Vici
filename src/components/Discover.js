import React, { useState, useEffect } from 'react';
import BanList from './BanList';
import History from './History';

const API_URL = "https://api.thecatapi.com/v1/images/search?has_breeds=1";
const API_KEY = "live_WnN4hWckW2KLIYyJGMvuPVfFsNSts5srM0M5h15w28L3yMT0pkjNpKQeKw49UGeT";

const Discover = () => {
    const [item, setItem] = useState(null);
    const [banList, setBanList] = useState([]);
    const [history, setHistory] = useState([]);

    const fetchRandomItem = async () => {
        try {
            let result;
            do {
                const res = await fetch(API_URL, {
                    headers: { 'x-api-key': API_KEY }
                });
                const data = await res.json();
                result = data[0];
            } while (
                result?.breeds &&
                (
                    banList.includes(result.breeds[0]?.origin) ||
                    banList.includes(result.breeds[0]?.name) ||
                    banList.includes(result.breeds[0]?.weight?.metric) ||
                    banList.includes(result.breeds[0]?.life_span)
                )
            );

            setItem(result);
            setHistory(prev => [result, ...prev]);
        } catch (error) {
            console.error("API Error", error);
        }
    };

    useEffect(() => { fetchRandomItem(); }, []);

    const handleBan = (value) => {
        if (!banList.includes(value)) {
            setBanList([...banList, value]);
        }
    };

    return (
        <div className="discover-container">
            <History history={history} />
            <div className="card">
                {item && item.breeds && (
                    <>
                        <h2>{item.breeds[0].name}</h2>
                        <div className="attributes">
                            <button onClick={() => handleBan(item.breeds[0]?.origin)}>{item.breeds[0]?.origin}</button>
                            <button onClick={() => handleBan(item.breeds[0]?.weight?.metric)}>{item.breeds[0]?.weight?.metric} lbs</button>
                            <button onClick={() => handleBan(item.breeds[0]?.life_span)}>{item.breeds[0]?.life_span} years</button>
                        </div>
                        <img src={item.url} alt="cat" />
                    </>
                )}
                <button className="discover-btn" onClick={fetchRandomItem}>Discover</button>
            </div>
            <BanList banList={banList} setBanList={setBanList} />
        </div>
    );
};

export default Discover;
