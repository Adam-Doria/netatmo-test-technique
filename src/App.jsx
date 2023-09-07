import useFetchAPI from "./hook/useFetchAPI";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import UserCards from "./components/UserCards";
import spinner from "./assets/spinner.svg"
import { useState } from "react";
import "./App.css";

function App() {
  const [numberOfDisplay, setNumberofDisplay] = useState(10);
  const { userData, error, loading,setUserData} = useFetchAPI(numberOfDisplay);
  const [genderFilter, setGenderFilter] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearch = (user) => {
    const lowerCaseSearch = inputSearch.toLowerCase();
    const lowerCaseName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
    return lowerCaseName.includes(lowerCaseSearch);
  };

  const handleGenderFilter= (user) => {
    if (genderFilter.length > 1) {
      return user.gender === genderFilter;
    } else {
      return user;
    }
  }

  const deleteUser= (id) => setUserData(userData.filter(user=>user.id!==id))
  

  const handleDisplay= () => setNumberofDisplay(numberOfDisplay + 10)
   return (
    <>
      <Navbar/>
      <Filters
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
      />
      
      {loading && !error && <img src={spinner} alt="loader image"></img>} 
      
      {error && <p> une erreur est survenue</p>}

      {userData && (
        <ul className ="card">
          {userData
            .sort((a, b) => new Date(a.dob.date) - new Date(b.dob.date))
            .filter(handleGenderFilter)
            .filter(handleInputSearch)
            .map((user, index) => (
              <UserCards 
                key={index}
                name={user.name}
                location={user.location}
                phone={user.cell}
                picture={user.picture}
                dob={user.dob}
                id={user.id}
                email={user.email}
                deleteUsers={deleteUser}
                setNumberofDisplay={setNumberofDisplay}
              />
            ))}
        </ul>
      )}
      <button className="addUsers" onClick={handleDisplay}>
      &#x271B;
      </button>
    </>
  );
}

export default App;
