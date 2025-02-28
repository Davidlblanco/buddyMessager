import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
    const [message64, setMessage64] = useState('');
    const [searchParams] = useSearchParams();
    const message = searchParams.get('m');
    return (
        <>
            {message ? (
                <div>{atob(message)}</div>
            ) : (
                <>
                    <label>
                        <p>Whrite your message:</p>
                        <input
                            type="text"
                            onChange={(e) => setMessage64(e.target.value)}
                            value={message64}
                        ></input>
                    </label>
                    {message64 ? (
                        <p>{window.location.host + '?m=' + btoa(message64)}</p>
                    ) : null}
                </>
            )}
        </>
    );
}

export default App;
