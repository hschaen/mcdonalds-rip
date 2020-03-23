import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu'

class App extends Component {
    constructor() {
        super()
        this.state = {
            totalPrice: 0,
            menu: [
              {name: "Burger", cost: 4.5, emoji: "🍔"},
              {name: "Fries", cost: 1.5, emoji: "🍟"},
              {name: "Drink", cost: 2, emoji: "🥤"},
              {name: "Ice Cream", cost: 2.5, emoji: "🍦"},
            ],
            emojiList: []
          }
    }
    addMenuPrice = (price, emoji) => {
        let newTotal = this.state.totalPrice
        this.setState({totalPrice: newTotal += price})
        this.state.emojiList.push(emoji)
        this.setState({emojiList: this.state.emojiList})
    }
    render() {
        return (
           <>
            <h3>Select your items:</h3>
            <div>
                {this.state.menu.map((value, index) => {
                    return (
                        <Menu 
                            key={index}
                            menuItem={value.name}
                            itemCost={value.cost}
                            itemEmoji={value.emoji}
                            addMenuPrice={this.addMenuPrice}
                        />
                    )
                })}
            </div>
            <p>Total Cost: {this.state.totalPrice}</p>
            <div style={{ height: "40px"}}>
                Items: {this.state.emojiList.map((value, index) => {
                return(
                    <span key={ index }>
                        { value }
                    </span>
                )})}
            </div>
            <p data-line="95" class="sync-line" style={{margin:"0"}}></p>
           </>
        );
    }
}

export default App;
