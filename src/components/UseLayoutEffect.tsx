import {useState, useLayoutEffect, useRef} from 'react'

const UseLayoutEffect = () => {

    const [number, setNumber] = useState(0);
    const [sectionStyle, setSectionStyle] = useState({})
    const sectionRef = useRef();

    useLayoutEffect(()=>{
        const random = Math.floor(Math.random() * 500)

        for(let i=0; i<=100000000; i++){
            if(i===100000000) setSectionStyle({paddingTop:`${random}px`})
        }
    }, [number])

  return (
		<div className="main">
			<h1>UseLayoutEffect</h1>

    <section ref={sectionRef} style={sectionStyle}>
        <h2>{number}</h2>
        <button onClick={() => setNumber(number + 1)}>+</button>
        <button onClick={() => setNumber(number - 1)}>-</button>
    </section>

		</div>
	);
}

export default UseLayoutEffect