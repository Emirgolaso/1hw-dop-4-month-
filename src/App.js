import Emka from "./Emka";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const handleDecrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <h1>{num}{num == 15 ? 'max' : num == 0 ? 'min' : ''}
      </h1>

      <button onClick={() => {
        if (num < 15) {
          setNum(num + 1);
        }
      }
      }


      >+</button>

      <button onClick={()=>{
          if (num+5 <= 15) {
            setNum(num + 5)
          }
      }}>+5</button>
      <button  onClick={()=>{
        if (num-5 >=0) {
           setNum(num - 5)
        }

           
          
      }}>-5</button>
      <button onClick={handleDecrement}>-</button>

      <button onClick={() => setNum(0)}>reset</button>

      {/* <Home />
     <Emka /> */}
    </div>
  );
}

export default App;
