import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        //Defined the proxy in package.json so its not repetitive.
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
            headers:{
              token: 'jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU0MzIwMCwiZXhwIjoxNjM3OTc1MjAwfQ.F7atb-tXrSd4WZ9LVO-M9pjfH1aCQHiAha6Qwf_OeZk'
            }
          }
        );
     
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />

      {
        lists.map((list)=> {

          console.log(list.title)
          return <List list = {list}/>
          
        })
      }
     
   
    </div>
  );
};

export default Home;
