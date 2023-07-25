import Classcomponent from "./Classcomponent";
import Signup from "./Component/Signup/Signup";

function App() {
  return (
    <>
    <div
      style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
        marginBlock:"inline-block"
      }}
    >
      <Signup />
    </div>
    </>
  );
}

export default App;
