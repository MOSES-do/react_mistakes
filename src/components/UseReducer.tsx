import { useReducer} from 'react'

const reducer  = (state, action) =>{
    switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            
            case 'newUserInput':
                return { ...state , userInput: action.payload};

            case 'tgColor':
                return { ...state,  color: !state.color};
            default:
                throw new Error(`Unknown action ${action}`);
        }
}

function useReducers() {

     const [state, dispatch] = useReducer(reducer, {count: 0, userInput:'', color:false})
    //  const [userInput, setUserInput] = useState("");
	//  const [count, setCount] = useState(0);
	//  const [color, setColor] = useState(false);

     
  return (
		<div className="main" style={{ color: state.color ? "#FFF" : "#FFF952" }}>
			<h1>useReducer</h1>

			<input
				type="text"
				value={state.userInput}  
				onChange={(e) => dispatch({type: 'newUserInput', payload: e.target.value})}
			/>
			<br />
			<br />
            <p>{state.count}</p>

            <section>
                <button onClick={(()=>dispatch({type: 'decrement'}))}>-</button>
                <button onClick={()=>dispatch({type: 'increment'})}>+</button>
                <button onClick={()=>dispatch({type: 'tgColor'})}>Color</button>
            </section>

            {state.userInput}
		</div>
	);
}

export default useReducers