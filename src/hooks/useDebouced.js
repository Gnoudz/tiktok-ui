/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [deboundeValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);

    return deboundeValue;
}

export default useDebounce;
