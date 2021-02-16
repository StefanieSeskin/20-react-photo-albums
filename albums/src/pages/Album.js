/* Ran out of time to style nav and get the album items lined up
correctly in grid.  It seems to be different using React. */

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
                return <p align="center" key={album.id}>
                    <li className="photo">
                        <Link to={`album/${album.id}`}><img src={album.thumbnail} alt="AlbumThumbnail">
                        </img></Link></li>
                <li className="caption"><h3>{album.name}</h3></li></p>;
            })}

        </ul>
    </div>
</div>
    )}

