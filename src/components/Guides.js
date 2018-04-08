import React from 'react';
import './guides.css';



    let guides = [{
      "type": "city",
      "title": "Paris on $10 a Day",
      "price": 18.99
    }, {
      "type": "city",
      "title": "Venice: Canals and Stuff",
      "price": 14.50
    }, {
      "type": "city",
      "title": "Visiting Hoboken: Why?",
      "price": 1.25
    }, {
      "type": "country",
      "title": "Touring Brazil's Empty Olympic Stadiums",
      "price": 13.50
    }, {
      "type": "country",
      "title": "'Murica: Only Commies Travel Abroad",
      "price": 20.00
    }, {
      "type": "country",
      "title": "Australia: Every Animal Here Can Kill You",
      "price": 18.00
    }, {
      "type": "region",
      "title": "Backpacking Europe on Two Showers a Week",
      "price": 12.48
    }, {
      "type": "region",
      "title": "Rainforests of Cental America",
      "price": 15.00
    }, {
      "type": "region",
      "title": "The Evil Genius Guide to Taking over the Tri City Area",
      "price": 13.49
    }]

  

let Guides = (props) => {
        const listItems = guides.map((book) =>
        <div key={book.price} className="card container mt-2 mb-2" style={{width: 18 + 'rem'}}>
          <div key={book.price} className="card-body">
            <h5 key={book.title} className="card-title">{book.title}</h5>
            <p key={book.type} className="card-text">Type: {book.type}</p>
            <p key={book.price} className="card-text">Price: {book.price}</p>
          </div>
        </div>
        );


        return (
          <div className="container d-flex flex-column text-center justify-conent-center mt-5">
            <h3>Guide Books</h3>
            <div className="container d-flex flex-wrap justify-conent-center mt-5">
                {listItems}
            </div>
          </div>
        );
}

export default Guides;