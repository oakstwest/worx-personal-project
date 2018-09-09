import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['apples', 'peaches', 'pears', 'strawberries'],
      cart: []
    }
  }

  componentDidMount() {
    // go get logged in users info
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    this.setState({
      cart: cart ? cart : []
    })
  }

  addToCart(fruitToAdd) {
    // if logged in, store cart items in database
    // axios call to server to add item
    this.setState({
      cart: [...this.state.cart, fruitToAdd]
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    })

  }

  delete(fruit) {
    let updatedArr = this.state.cart.filter(item => {
      return item !== fruit
    })
    this.setState({
      cart: updatedArr
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    })
  }

  render() {
    let fruitList = this.state.items.map(fruit => {
      return (
        <div key={fruit}>
          <p>{fruit}</p>
          <button onClick={() => this.addToCart(fruit)}>Add to cart</button>
          <button onClick={() => this.delete(fruit)}>Delete</button>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Fruit Stand</h1>
        {fruitList}
      </div>
    );
  }
}

export default App;
