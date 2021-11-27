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
              token: 'jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzgxMjM1MiwiZXhwIjoxNjM4MjQ0MzUyfQ.WnoO_DCBrC1WtEXGtch9j_vsIyUH1wwP9jYz6hZNEAM'
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
