import {
    Link
  } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../App.css';
export default function AlbumDetail(props) {

    const [albumDetails, setAlbumDetails] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/albums")
            .then((resp) => resp.json())
            .then((data) => {
                setAlbumDetails(data);
            });
    }, []);

    const id = props.match.params.id
    const [activeAlbum, setActiveAlbum] = useState(albumDetails.find((data) => data.id == id))

    return  (
        <div className="App">
           <div className="header"><h1>Album title </h1></div>
             <div className="fullList">
                 <div className="albumLinks">
            {albumDetails.map((album) => {
                return <p key={activeAlbum.id.photos}>
                    <Link to={`activeAlbum/${activeAlbum.id.photos}`}></Link><img src={activeAlbum.photos.thumbnail}></img>
                <h3>{activeAlbum.name}</h3></p>;
            })}

        </div>
    </div>
</div>
    )}



//albumDetails.photos.thumbnail
//albumDetails.photos.name 
//



// export default function AlbumDetail(props) {
//     return <div>album detail</div>
// }