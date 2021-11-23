import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route, useLocation} from 'react-router-dom'

export default function ListItem({ index , item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})

  useEffect(()=> {

    const getMovie = async()=>{
try{

  const res = await axios.get('/movies/find/'+ item, {
    headers:{
      token: 'jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU0MzIwMCwiZXhwIjoxNjM3OTc1MjAwfQ.F7atb-tXrSd4WZ9LVO-M9pjfH1aCQHiAha6Qwf_OeZk'
    }
  });

  setMovie(res.data)
}catch(err){
  console.log(err)
};

    };
    getMovie()
  }, [item])
  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
  const location = useLocation()
  
  return (

    <Link to={{ pathname:'/watch', movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt="title pic"
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.description}
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}
