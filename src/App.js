import React from "react"
import Restaurent from "./component/basics/restaurent"
const App=()=>{
  return (<>
   <Restaurent/>
   <MyName/>
    {/* <h1>sefisfmimesf   {5+6}</h1> */}
    </>
    // you can return only one component 
    // it can be a division section of a react fragment 
    // in place of <React.Fragment> </React.Fragment> 
    // one can also use <> </>
    );
};

// how react looks at the above code 
// const App=()=>{
//   return react.createElement {'div',{},
// react.createElement {'h1',{},'hello world'}
// }
// }

const MyName = () =>{
  return <h1>
    {/* mitul gupta  */}
  </h1>
}

export default App;
