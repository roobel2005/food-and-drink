import React, { useState, useCallback } from 'react';

const URL = 'http://localhost:3002/addFoodAndDrinks';

function Drinks(props) {
    const [value, setValue] = useState('');

    const change = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const click = useCallback(() => {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('id'),
            },
            body: JSON.stringify({
                id: '',
                type: 'drink',
                name: value,
                link: 'images/crash.jpg',
            }),
        });

        props.setIndicator(Math.random());
        setValue('');
    }, [value]);

    return (
        <div>
            <div>
                <h2>DRINKS:</h2>
                <ul>
                    {props.data.map((currentValue) => (
                        <li key={currentValue.name}>
                            <p>{currentValue.name}</p>
                            <img src={currentValue.link} alt={currentValue.name} />
                        </li>
                    ))}
                </ul>
                <p>add drink:</p>
                <input type="text" value={value} onChange={change} />
                <button onClick={click}>add</button>
            </div>
        </div>
    );
}

export default React.memo(Drinks);
