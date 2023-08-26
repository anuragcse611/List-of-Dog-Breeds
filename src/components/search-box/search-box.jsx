import { Component } from "react";
import "./styles.css"
class SearchBox extends Component {

render(){
  const {onChangeHandler} = this.props
    return(
        <input
        className= {`box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={onChangeHandler}
      />

    )
}

}

export default SearchBox;