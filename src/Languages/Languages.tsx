import LangBloc from "./LangBloc";
import AboutMe from "./AboutMe";
// import Projets from "./Projets";
import "./aboutme.css"

function Languages() {
  return (
	<div>
		<AboutMe/>
		<LangBloc/>
		{/* <Projets/> */}
	</div>
  );
}

export default Languages;