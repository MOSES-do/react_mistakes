import {useState, useRef} from 'react'

const UseRef = () => {
    const [randomInput, setRandomInput] = useState('');
    const [seconds, setSeconds] = useState(0)
    const renders = useRef(0);
    const timerId = useRef();


    const handleChange = (e) =>{
        setRandomInput(e.target.value);
        renders.current++;
        setSeconds((oldValue) => oldValue + 1);
    }

    const startTimer = () =>{
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(oldValue => oldValue + 1)
        }, 1000);
    }

    const stopTimer = () =>{
        clearInterval(timerId.current);
    }

    const resetTimer = () =>{
        stopTimer();
        renders.current = 0;
        setSeconds(0);
        setRandomInput('')
    }

    return (
			<div className="main">
				<h1>UseRef</h1>
				<input
					type="text"
					placeholder="Random Input"
					value={randomInput}
					onChange={handleChange}
				/>
				<br />
				<p>Renders:{renders.current}</p>
				<br />
				<button onClick={startTimer}>Start</button>
				<button onClick={stopTimer}>Stop</button>
				<button onClick={resetTimer}>Reset</button>
				<br></br>
				<p>Seconds:{seconds}</p>
				<br></br>
				<p>{randomInput}</p>
			</div>
		);
}

export default UseRef;