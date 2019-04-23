import React, { Component } from 'react';

class IterationSample extends Component {
    state ={
        names : ['눈사람','얼음','눈','바람'],
        name : ''
    };

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    handleInsert = () => {  //state 업데이트는 직접 접근해서 push로 하면 안됨. 사본 생성해서 접근해야함.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name : ''
        })
    }

    // handleRemove = (index) => {
    //     const {names} = this.state;
    //     this.setState({
    //         names :[  //... ES6의 전개 연산자. ...뒤에 배열을 꺼내서 현재 배열에 복사함.
    //         ...names.slice(0,index), 
    //         ...names.slice(index +1, names.length)
    //         ]
    //     });
    // }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names :  //... ES6의 전개 연산자. ...뒤에 배열을 꺼내서 현재 배열에 복사함.
            names.filter((item, i) => i !== index)
            
        });
    }



    render() {
        const nameList = this.state.names.map((name, index) => (<li key={index} onDoubleClick ={()=>{this.handleRemove(index)}}>{name}</li>));        
        return (
            <div>
              <input onChange={this.handleChange} 
              value = {this.state.name}  />
              <button onClick={this.handleInsert}>추가</button>

              <ul>
               {nameList} 
              </ul>
            </div>
            
        );
    }
}

export default IterationSample;