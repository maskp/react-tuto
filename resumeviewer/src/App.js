import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import Header from './components/Header'
import $ from 'jquery';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'foo':'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType:'json',
      cache:false,
      success:function(data){
        this.setState({resumeData:data})
      }.bind(this),
      error:function(xhr,status,err){
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }



  render() {

    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>

        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
