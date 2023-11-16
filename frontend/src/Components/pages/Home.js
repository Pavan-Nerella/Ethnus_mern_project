import Navigation from "../Navigation";
import Curosels from "../Curosels";
import Footer from "../Footer";
import Areyoudoctor from "../pages/Areyoudoctor";
import Areyoupatient  from "../pages/Areyoupatient";
export default function Home(props) {
  return (
    <div>/
      <Navigation updateMode={props.update} modeValue={props.modeValue}  />
      <Curosels modeValue={props.modeValue} />
      <Areyoudoctor/>
      <Areyoupatient/>
      <Footer />
    </div>
  );
}
