import { useEffect, useState } from 'react';

export default function(key, initialState) {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }
        return initialState;
    });

    useEffect(() => {
        localStorage.setItem(key.stringfy(state));
    }, [key, setState]);
}
