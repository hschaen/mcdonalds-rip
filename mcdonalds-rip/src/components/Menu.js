import React from 'react'
import {Card, CardTitle, Button, CardText} from "reactstrap";
const Menu = (props) => {
    let addItem = () => {
        props.addMenuPrice(props.itemCost, props.itemEmoji)
    }
        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                <Card body>
  <CardTitle>Menu Item: {props.menuItem }</CardTitle>
  <CardText>Menu Price: ${ props.itemCost }</CardText>
  <Button onClick={ addItem }>Add {props.menuItem }</Button>
</Card></div>
            </>
        );
}
export default Menu;