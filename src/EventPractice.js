import React, {Component} from 'react';
import './EventPractice.css';

class EventPractice extends Component {
    constructor(props){
        super(props);
        this.state={
            username : '',
            message : ""
        }
        this.handleChange = this.handleChange.bind(this);  //컴포넌트에 임의메소드 만들면 기본적으로 this에 접근불가능함. bind로 묶어줘야함.
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }


    handleKeyPress =(e)=>{
        console.log(e);
        if(e.key === 'Enter'){ //e.key를 찍으면 입력한 키값이 나옴.
            this.handleClick();
        }
    }

    handleClick =()=>{
        alert(this.state.username+':'+this.state.message);
        this.setState({
            message:''
        });
    }

    render() {
        return (
            <div>
               <h1>연습 이벤트</h1>
               
               <input type="text" name="username" placeholder="유저명" 
               value={this.state.username}
               onChange ={this.handleChange}
               
               />
               
               <input type="text" name="message" placeholder="입력해주세요" 
               value={this.state.message}
               onChange ={this.handleChange}
               onKeyPress ={this.handleKeyPress}
               />
               <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;