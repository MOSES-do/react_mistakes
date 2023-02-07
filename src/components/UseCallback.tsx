import {useState, useEffect, useCallback} from 'react'

const UseCallback = () => {

    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState(0)
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')

    const sum = useCallback(() => Number(num1) + Number(num2), [num1, num2]) ;
    const buildArray = useCallback(() => [num1, num2], [num1, num2]);
    useEffect(()=>{
        console.log(`New sum. Value: ${buildArray()}`)
        // setResult(buildArray())
    }, [buildArray])
  return (
		<div>
			<main className="main">
				<input
					type="text"
					placeholder="input"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
				/>
				<br></br>
				<input
					type="text"
					placeholder="input"
					value={num1}
					onChange={(e) => setNum1(e.target.value)}
				/>
				<input
					type="text"
					placeholder="input"
					value={num2}
					onChange={(e) => setNum2(e.target.value)}
				/>
				<h1>Output: {userInput || "--"}</h1>
			</main>
		</div>
	);
}

export default UseCallback


/*
NOTE: useState rerenders components every time it is run, so also does the useEffect depends on a change in state to 
get an output. 

The useCallback is used to prevent the useEffect from running every time the component rerenders.'

The useCallback is wrapped around the function returnning a value and what the usefulness of the useCallback function is, is that
 sets a dependency on the function itself, that checks for
 chnages in its own parameters and only when a change is made will it run.

 A callback is used when a function goes into the dependency array of a hookeffect
*/