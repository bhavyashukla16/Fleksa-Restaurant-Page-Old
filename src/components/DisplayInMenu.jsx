import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import DisplayInCart from "./DisplayInCart";

function DisplayInMenu(props){

  const [count, setCount] = useState(0);

  function increaseAndDisplay(){
    setCount(count + 1);

    return (
      <DisplayInCart 
        nameOfDish={props.dishName}
        countOfDish={count}
        priceOfDish={props.dishPrice}
      />
    );
  }

    return (
      <div className="dish"> 
        <p className="dish-name">{props.dishName}</p>
        <p className="dish-des">{props.dishDescription}</p>

        <div className="price-tag">
         <p className="dish-price">{props.dishPrice}</p>

         {(props.dishTag !== "")  && (
         <div className="tag-div">
         <p className="dish-tag">{props.dishTag}</p>
         </div> )
         }

         {count !==0 && (
         <div className="display-count">
         <h6 className="count">
         {count}
         </h6>
         </div>  )
         }

         <div className="add-icon" onClick={increaseAndDisplay}>
          <AddIcon />
        </div>

        </div>

        <div className="bottom-hr"></div>
        
    </div>
    );
}

export default DisplayInMenu;