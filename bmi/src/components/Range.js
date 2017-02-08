import React,{Component} from 'react';

class Range extends Component{
  constructor(props){
    super();
    this.state = {
      value:props.hoight
      
    }
  }

  static defaultProps={
    min:0,
    max:245,
    step:1
  }

  onChange(event){

    this.props.Everyday(this.state.value)
    this.setState({
      value:event.target.value
    })
  }

  render(){
    return(
      <div className="Range">
        <input type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange.bind(this)}
          />

      </div>
    )
  }
}
export default Range;
