
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Client from "./users/client";

function App() {
  return (
    <div className="App">
      <Client />
      
      {/* <Prolancer /> 
      <Request />
      <Project />
      <Invoice />
      <Submit /> */}

      {/* <Button
           freelancer={freelancer}
        /> */}
    </div>
  );
}

export default App;

// const freelancer = {
//   name: "Mark Laboy",
//   trade: "Low Voltage",
//   company:"Audio Advice",
//   specialty:"Smart Home Automation",
//   bio: "Husband to a beautiful woman and a father of 4. The reasons why I get up, go to work and prosper...(try to). CEDIA and Control 4 Certified, I'm a dude who's a dad that works with devices that hopefully make people's dreams come true. Experienced in A/V, Networking, Surveillance, Lighting and Shades. Currently a student at NC State, studying Software Development.",
//   email: "mvlk5@example.com",
//   phone: "123-456-7890",
//   rate: 500,
// }
