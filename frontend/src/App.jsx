import Prolancer from "./forms/ProlancerForm";
import Client from "./forms/ClientForm";
import Project from "./forms/ProjectForm";
import Request from "./forms/RequestForm";
import Invoice from "./forms/InvoiceForm";
// import Submit from "./components/Submit";
// import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Request />
      <Prolancer />
      <Client />
      <Project />
      <Invoice />
      {/* <Submit /> */}

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