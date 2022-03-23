import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addNewPlant, filterPlants}) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search filterPlants={filterPlants} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
