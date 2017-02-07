import React, { Component } from 'react';

import './App.css';
var uuid = require('uuid')
var firebase = require('firebase');
var config = {
   apiKey: "AIzaSyCnFnJYHxtZqjjonO0mCYwoCVLLNrNeNhY",
   authDomain: "simpsonserv.firebaseapp.com",
   databaseURL: "https://simpsonserv.firebaseio.com",
   storageBucket: "simpsonserv.appspot.com",
   messagingSenderId: "481395634881"
 };
 firebase.initializeApp(config);


class App extends Component {
  constructor(){
    super();
    this.state={
      id:uuid.v1(),
      name:'',
      answers:{
        q1:'',
        q2:'',
        q3:'',
        q4:''
      },
        submitted: false
    }
this.handleQuestionChange = this.handleQuestionChange.bind(this)


  }

  handleNameSubmit(eve){
    var name = this.refs.name.value;
    this.setState({
      name
    },function(){
          console.log(this.state)
    })

    eve.preventDefault();
  }


  handleQuestionSubmit(event){
    alert(this.state.name)
    alert(this.state.id)
    alert(this.state.answers.q1)
      firebase.database().ref('survey/'+this.state.id).set({
        name: this.state.name,
        answers:this.state.answers
      });

      this.setState({submitted:true}, function(){
        console.log('Questions Submitted...');
      });
      event.preventDefault();
    }

  handleQuestionChange(eve){
    var answers = this.state.answers;
    if(eve.target.name==='q1'){
      answers.q1 = eve.target.value
    }
    else if (eve.target.name==='q2') {
      answers.q2 = eve.target.value
    }
    else if(eve.target.name==='q3'){
      answers.q3 = eve.target.value
    }
    else if(eve.target.name==='q4'){
      answers.q4 = eve.target.value
    }
    this.setState({
      answers:answers
    })
  }



  render() {
    var user;
    var questions;
    var sub;
    if(this.state.name && this.state.submitted===false){
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
        <div>
          <label>What is your favorite operating system?</label><br />
          <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange} />Windows<br />
          <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange} />OSX<br />
          <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux<br />
          <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange} />Solaris<br />
          <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange} />Other<br />
        </div>
        <div>
        <label>What is your favorite brand of TV?</label><br />
        <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange} />Sony<br />
        <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange} />Samsung<br />
        <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange} />Green<br />
        <input type="radio" name="q2" value="Vizio" onChange={this.handleQuestionChange} />Vizio<br />
        <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange} />Other<br />
      </div>
      <div>
        <label>What is your favorite Smartphone Brand?</label><br />
        <input type="radio" name="q3" value="Morning" onChange={this.handleQuestionChange} />Apple<br />
        <input type="radio" name="q3" value="Afternoon" onChange={this.handleQuestionChange} />Samsung<br />
        <input type="radio" name="q3" value="Evening" onChange={this.handleQuestionChange} />Nexus<br />
        <input type="radio" name="q3" value="Night" onChange={this.handleQuestionChange} />Blackberry<br />
        <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange} />Other<br />
      </div>
      <div>
        <label>What is your favorite CPU Brand?</label><br />
        <input type="radio" name="q4" value="Intel" onChange={this.handleQuestionChange} />Intel<br />
        <input type="radio" name="q4" value="AMD" onChange={this.handleQuestionChange} />AMD<br />
        <input type="radio" name="q4" value="Nvidia" onChange={this.handleQuestionChange} />Nvidia<br />
        <input type="radio" name="q4" value="ARM" onChange={this.handleQuestionChange} />ARM<br />
        <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange} />Other<br />
      </div>
        <input type="submit" value="Submit" />

      </form>
    </span>
    }
    //if no name and no question submission
    else if (!this.state.name && this.state.submitted===false){
      user = <span>
      <h2>Please enter your nameto begin survey</h2>
      <form onSubmit={this.handleNameSubmit.bind(this)}>
        <input type="text" placeholder="Enter Name ..." ref="name"/>
        <input type="submit" value="submit"/>
      </form>
      </span>
      questions='';
    } else if (this.state.submitted ===true){
      sub = <h1>Query submitted</h1>
    }
    return (
      <div>

        <div className="App-header text-center">

          <h2>simple Survey</h2>
        </div>

        <div className ='text-center'>
          {user}
        </div>

        <div className="container">
          {questions}
        </div>

        <div>
          {sub}
        </div>

      </div>

    );
  }
}

export default App;
