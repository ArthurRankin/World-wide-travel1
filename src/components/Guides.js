import React, { Component} from 'react';
import './guides.css';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
// import Nav from './Nav.js';




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







    let Nav = (props) => {
      return(
          <ul className="nav justify-content-center">
              <li className="nav-item">
                  <NavLink className="nav-link text-light" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink  className="nav-link text-light" to="/all-guides">All Guides</NavLink>
              </li>
            



              <Route exact path='/' component={Home} />
              <Route path='/all-guides' component={AllGuides} />
              <Route path='/guide-page' component={GuidePage} />
          </ul>   

  )}




let GuidePage = (props) => {
  console.log(this.location);
return(
  <div>
      <div className="card text-center bg-white">
          <div className="card-body">
              
          </div>
      </div>
  </div>
  )}

  
  let AllGuides = (props) => {
    const listItems = guides.map((book, index) =>
    <div key={index} className="card container mt-2 mb-2 bg-white" style={{width: 18 + 'rem'}}>
    <div className="card-body">
      <h5 className="card-title">" {book.title} "</h5>
      <p className="card-text">Type: {book.type}</p>
      <p className="card-text">Price: {book.price}</p>
      <button><Link to={{ pathname: '/guide-page', query: {title: book.title} }}>Guide Info</Link></button>
    </div>
  </div>
  );
  return (
    <BrowserRouter>
    <div className="container d-flex flex-column text-center justify-conent-center mt-5 ">
      <h3 className="text-light">Guide Books</h3>
      <div className="container d-flex flex-wrap justify-conent-center  mt-5">
          {listItems}
      </div>

      
    </div>
    </BrowserRouter>
  );
}




let Home = () => {
  return(
    <div className="container mt-5">
        <div className="text-center text-light">
            <h1>HOME</h1>
        </div>
    </div>
)}
  


  class Guides extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/all-guides'>All Guides</Link>
              </li>
            </ul>


class Guides extends Component {

render() {

  return(
    <BrowserRouter>
      <div className="container ">
        <div className="d-flex flex-column">

          <Nav />

        </div>
      </div>
    </BrowserRouter>
  )}
}




export default Guides;