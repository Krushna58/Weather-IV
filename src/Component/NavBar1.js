import { useState, useEffect } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "./ContextApi/UserContext";

  

export default function Navbar1({ onSearch , emailid }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); 

  // const { email } = UserContext(UserContext)

   
  

  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "74118886e3de48b592162836251507";

  //------------------------------------------------------------------
  const [showProfileMenu, setShowProfileMenu] = useState(false);

 //---------------------------------------------------------------

 const email = localStorage.getItem("userEmail");
const handleDelete = async ({ email }) => {
  const confirmDelete = window.confirm(
    "This action will permanently delete your account. Do you wish to proceed?"
  );

  if (confirmDelete) {
    try {
      await axios.delete(`http://localhost:8080/weather/${email}`);
      console.log("email id -" + email);
      
      alert("Your account has been deleted");
      navigate("/");
    } catch (error) {
      alert(`Failed to delete account: ${error.response?.data || error.message}`);
    }
  }
};

//----------------------------------------------------------------------------

  const handlelogout = () =>{
    const confirmLogout = window.confirm("Are you sure you want to Logout??");
    if(confirmLogout){
    

      localStorage.removeItem("userEmail");
       localStorage.removeItem('sessionActive');
              navigate('/');
          alert("User Logged Out");

             
    }

    
  };


  //----------------------------------------------------------------------

  // Fetch matching cities whenever query changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300); // debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setSuggestions([]);
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    onSearch(name);
    setSuggestions([]);
  };

  return (
    <nav className="navbar navbar-dark bg-Primary me-3  " style={{backgroundColor:"skyblue"}}>
      <span className="navbar-brand">Weather Portal</span>
      <form className="d-flex position-relative " onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter City"
          value={query}
          onChange={(e) => setQuery(e.target.value)}

          
        />
        <button className="btn btn-light" type="button" ><i class="bi bi-search"></i></button>
        <button className="btn btn-light ms-2 " type="button" onClick={()=>{navigate("/history")}}>History</button>
        
       
        {/* <button className="btn btn-light  ms-2" type="button"></button> */}

        <div className="position-relative ms-3" >
          <button className="btn btn-light" type="button" onClick={()=>setShowProfileMenu(!showProfileMenu)}><i class="bi bi-person-circle"></i>
          {showProfileMenu && (
            <div className="dropdown-menu dropdown-menu-end show" style={{
              position:"absolute",
              top: "100%",
              right:0,
              zIndex: 1001,
              backgroundColor : "white",
              border : "1px solid #ccc",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              // minWidth: "160px",
              // maxHeight: "200px",
              overflowY: "auto",
              whiteSpace: "nowrap",
              maxWidth:"80vw",
              wordWrap:"break-word"

              


            
            }}>
              {/* <button className="dropdown-item" onClick={handleResetPassword}>Reset password</button> */}

              <button className="dropdown-item " type="button" onClick={handlelogout}>Logout</button>
                <button className="dropdown-item" type="button"onClick={() => handleDelete({ email })}
                >Delete Account</button>
                 {/* <button className="dropdown-item" onClick={handleDelete}>Delete Account</button> */}

            </div>
          )}
          </button>
        </div>
         

        {suggestions.length > 0 && (
          <ul
            className="list-group position-absolute"
            style={{
              top: "100%",
              zIndex: 1000,
              width: "100%",
              left: 0,
              
             
            }}
          >
            {suggestions.map((city) => (
              <li
                key={city.id}
                className="list-group-item list-group-item-action"
                onClick={() => handleSuggestionClick(city.name)}
              >
                {city.name}, {city.region}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </form>
    </nav>
  );
}
