import React,{Component} from 'react';

class Output extends Component{
  constructor(props){
    super();

    }


  render(){
    let height=this.props.data.height;
    let weight=this.props.data.weight;
    let bmi=this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;
    return (
      <div className="Output">
        TEst output
      </div>
    )
  }
}

export default Output
