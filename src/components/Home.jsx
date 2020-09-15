import React from "react";
import Searchbar from "./SearchBar";
import Order from "./Order";
import DeleteAll from "./DeleteAll";
import AddTutorial from "./AddTutorial";

function Home() {
  const [tutorial, setTutorial] = React.useState([]);

  React.useEffect(() => {
    getTutorials();
  }, []);

  const getTutorials = async () => {
    const data = await fetch(
      "https://rayentutorialtestapp.azurewebsites.net/tutorials"
    );
    const tutorials = await data.json();
    console.log(tutorials);
    setTutorial(tutorials);
  };

  return (
    <div className="App">
      <header className="header">
        <p>Tutoriales</p>
      </header>
      <Searchbar />
      <Order />
      <ul className="tutorialBox">
        {" "}
        {tutorial.map((item) => (
          <li key={item.id}>
            {item.nombre} {item.profesor} {item.fecha}{" "}
          </li>
        ))}
      </ul>
      <DeleteAll />
      <AddTutorial />
    </div>
  );
}

export default Home;
