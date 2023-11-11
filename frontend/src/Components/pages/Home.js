import Navigation from "../Navigation";
import Curosels from "../Curosels";
import Footer from "../Footer";
import Areyoudoctor from "../Areyoudoctor";
import Areyoupatient from "../Areyoupatient";

export default function Home(props) {
  return (
    <div>
      <Navigation updateMode={props.update} modeValue={props.modeValue}  />
      <Curosels modeValue={props.modeValue} />
      <Areyoudoctor/>
      <Areyoupatient/>
      <Footer />
    </div>
  );
}
