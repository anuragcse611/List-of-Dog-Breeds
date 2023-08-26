import { Component } from "react";
import "./styles.css"
class CardList extends Component {
  render() {
    const { breeds } = this.props;
    return (
      <div className="card-list">
        {breeds.map((item) => (
         <div key = {item.id} className="card-container">
            <img className = "image" alt = {item.breed} src={item.img}/>
            <h2>{item.breed}</h2>
            <p>{item.origin}</p>



         </div>
        ))}
      </div>
    );
  }
}
export default CardList;
