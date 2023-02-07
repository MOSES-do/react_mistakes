import {useState} from 'react'
import '../App.css'




const Home = () => {
    const [count, setCount] = useState(0);
  return (
		<div className="main">
			<h1>{count}</h1>
			<div className="row">
				<button onClick={() => setCount(count + 1)}>+</button>
				<button
					style={{ marginLeft: "2rem" }}
					onClick={() => setCount(count - 1)}>
					-
				</button>
			</div>
			<div style={{ marginTop: "1rem" }} className="row">
				<button onClick={() => setCount(0)}>RESET</button>
			</div>
		</div>
	);
}

export default Home