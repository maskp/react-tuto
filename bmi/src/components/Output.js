import React,{Component} from 'react';

class Output extends Component{
  constructor(props){
    super();

    }

  toFeet(n){
    let realFeet = ((n*.393700)/12)
    let feet = Math.floor(realFeet)
    let inches = Math.round((realFeet - feet) * 12)
    return feet + "'"+inches;
  }

  toLbs(n){
    let nearExact = n/.45359237;
    let lbs = Math.floor(nearExact)
    return lbs;
  }


  render(){
    let height=this.toFeet(this.props.data.height);
    let weight=this.toLbs(this.props.data.weight);
    let bmi=this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}</h3>
        <h3>{bmi}</h3>
         <h3 className={(this.props.data.bmiClass === "obese") ? "danger" : ""}>{bmiClass} {(this.props.data.bmiClass === "obese") ? <a href='http://someproductsite.com'>What Can i Do?</a> : ""}</h3>
      </div>
    )
  }
}

export default Output
