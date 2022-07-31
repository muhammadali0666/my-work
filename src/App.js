import Left from "../src/components/section/section.js";
import Bottom from "../src/components/section-bottom/section-bottom";
import First from "../src/assets/img/first.png";
import Lamp from "../src/assets/img/lamp.png";
import Bolak from "../src/assets/img/bolak.png";
import People from "../src/assets/img/people.png";
import Person from "../src/assets/img/person.png";
import List from "../src/assets/img/list.png";
import Settings from "../src/assets/img/settings.png";
import Third from "../src/assets/img/third.png";
import Header from "../src/components/header/header";
import Search from "../src/assets/img/search.png";
import New from "../src/assets/img/new.png";
import Boy from "../src/assets/img/boy.png";
import Card from "../src/components/card/card";
import Mains from "../src/components/main/mains";
import MainsNext from "../src/components/mains-next/mains-next";

function App() {
  return (
    <div className="container">
      <div className="App d-flex w-100">
        <ul className="w-25">
          {<Left />}
          <ul className="list-unstyled">
            {<Bottom name="Overview" img={Bolak} />}
            {<Bottom name="Tickets" img={First} />}
            {<Bottom name="Ideas" img={Lamp} />}
            {<Bottom name="Contacts" img={People} />}
            {<Bottom name="Agents" img={Person} />}
            {<Bottom name="Articles" img={List} />}
            {<Bottom className="other" name="Settings" img={Settings} />}
            {<Bottom name="Subscription" img={Third} />}
          </ul>
        </ul>
        <div>
          {<Header img={Search} pic={New} rasim={Boy} />}

          <ul className="list-unstyled d-flex justify-content-around ms-4">
            <div className="d-flex justify-content-around">
              <Card value="Unresolved" number="60" />
              <Card value="Overdue" number="16" />
              <Card value="Open" number="43" />
              <Card value="On hold" number="64" />
            </div>
          </ul>
          {
            <div className="ms-4 d-flex border border-2">
              <Mains />
             <div>
              <MainsNext soz="Resolved" raqam="449"/>
              <MainsNext soz="Received" raqam="426"/>
              <MainsNext soz="Average first response time" raqam="33"/>
              <MainsNext soz="Average response time" raqam="3h 8m"/>
              <MainsNext soz="Resolution within SLA" raqam="94%"/>
             </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
