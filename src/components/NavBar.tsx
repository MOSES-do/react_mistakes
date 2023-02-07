import { Link } from "react-router-dom";

const NavBar = () => {
  return (
		<nav className="navbar">
			<ul>
				<li className="links">
					<Link className="link" to="/">
						Home
					</Link>
				</li>
				<li className="links">
					<Link className="link" to="/callback">
						UseCallback
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/usememo">
						UseMemo
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/useref">
						UseRef
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/usereducer">
						UseReducer
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/uselayouteffect">
						UseLayoutEffect
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/useimperativehandle">
						UseImperativeHandle
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/jokes">
						UseAxios
					</Link>
				</li>

				<li className="links">
					<Link className="link" to="/posts">
						Posts
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar