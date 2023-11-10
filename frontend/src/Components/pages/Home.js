import Navigation from "../Navigation";
import Curosels from "../Curosels";
import Footer from "../Footer";

export default function Home(props) {
  return (
    <div>
    <Navigation updateMode={props.update} modeValue={props.modeValue}  />
      <Curosels modeValue={props.modeValue} />
      <Footer />
    </div>
  );
}
