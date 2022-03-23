import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  function addNewPlant(newPlant) {
    const newPlants = [...plants, newPlant]
    setPlants(newPlants)
  }

  function filterPlants(value) {
    const filteredPlants = plants.filter((plant) => plant.name.includes(value))
    setPlants(filteredPlants)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage filterPlants={filterPlants} addNewPlant={addNewPlant} plants={plants} />
    </div>
  );
}

export default App;
