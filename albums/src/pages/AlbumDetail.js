/* Getting the album items lined up
correctly in grid just wouldn't work.  It seems to be different using React. */

import {
    Link,
    useParams
  } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../App.css';
      
// function AlbumDetail(props) {
//     return <div><Link to="/album/1">Album</Link>
//     </div>
// }

export default function AlbumDetail(props) {

const { id } = useParams()
// console.log(id)

    const [albumDetails, setAlbumDetails] = useState({})
    useEffect(() => {
      // console.log(props.match.params)
        fetch(`http://localhost:3001/albums/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data)
                setAlbumDetails(data);
            });
    }, [id]);

    return  (
        <div className="App">
           <div className="header"><h1>{albumDetails.name}</h1></div>
           <ol className="nav">
             <li><Link className="albumLink" to="/album/1">My Cat</Link></li>
             <li><Link className="albumLink" to="/album/2">My Other Cat</Link></li>
             <li><Link className="albumLink" to="/album/3">My Mom's Cat</Link></li>
             <li><Link className="albumLink" to="/album/4">Someone's Kittens</Link></li>
             <li><Link className="albumLink" to="/album/5">Cat Lady World</Link></li>
             <li><Link className="albumLink" to="/album/6">Kittyland Love Centre</Link></li>
             </ol>
             <div className="fullList">
                 <ul className="albumLinks">
            {albumDetails.photos && albumDetails.photos.map((photo, index) => {
                return <p align="center" key={index}>
                    <li className="photo">
                    <img src={photo.thumbnail} alt="AlbumContents"></img></li>
                <li className="caption" align="center"><h3>{photo.name}</h3></li></p>
                

            })}
            
        </ul>
    </div>
</div>

)}