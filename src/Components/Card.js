import React from 'react'

export default function Card() {
  const randNo = Math.floor(Math.random()*100)+1;
  const imageUrl = `https://source.unsplash.com/random/300x300?sig=${randNo}`;

  return (
    <div className="card" style={{width:18 + 'rem', margin:1+'rem'}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
