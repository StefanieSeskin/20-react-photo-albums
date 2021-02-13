import {
    Link
  } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../App.css';
export default function Album(props) {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/albums")
            .then((resp) => resp.json())
            .then((data) => {
                setAlbums(data);
            });
    }, []);
    return  (
        <div className="App">
           <div className="header"><h1>My Albums</h1></div>
             <div className="fullList">
                 <ul className="albumLinks">
            {albums.map((album) => {
                return <p key={album.id}>
                    <Link to={`album/${album.id}`}><img src={album.thumbnail}></img></Link>
                <h3>{album.name}</h3></p>;
            })}

        </ul>f
    </div>
</div>
    )}

