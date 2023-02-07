import {useState, useEffect, useMemo} from 'react'

const fib = (n) =>{
  return (n <=  1) ? n : fib(n-1) + fib(n-2);
}

const UseMemo = () => {
  const [userNumber, setUserNumber] = useState('')
  const [randomInput, setRandomInput] = useState('')

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, setUserNumber]);

  useEffect(()=>{
    console.log('New Number');
  }, [fibNumber])


  return (
		<div className="main">
			<label>Fibonacci Sequence: </label>
			<input
				type="number"
				value={userNumber}
				placeholder="Position"
				onChange={(e) => setUserNumber(e.target.value)}
			/>
			<p>Number: {fibNumber || "--"}</p>
			<br />
			<br />
			<label>Random Input:</label>
			<input
				type="text"
				value={randomInput}
				placeholder="Input"
				onChange={(e) => setRandomInput(e.target.value)}
			/>
			<p>{randomInput}</p>
		</div>
	);
}

export default UseMemo



/*

UseMemo normalisez the output of a function and not the function

*/