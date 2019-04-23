import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name : '사쿠라',
        
    }
    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }
    
    // constructor(props){ //Component로부터 상속받아, Coponent의 메소드를 커스템해서 쓰고 싶어서 생성자 생성.
    //     super(props);        
    //     }
    // }

    state={number:1000} // 생성자 없이 transform-class-속성문법으로 생성자 밖에서 정의가능. 

    render(){
        return (
            <div>
                내이름은 {this.props.name}이야. .{/*props사용시 this붙여야함. */}
                나는 {this.props.age}살이다.
                <p>숫자는 {this.state.number}</p>
                <button onClick={()=>
                    this.setState({
                        number : this.state.number+1 //왜 ++가 안먹히지? 업데이트시 무조건 setState만 사용.
                    })
                }>더하기</button>
            </div>
        )
    }
}




export default MyComponent; //다른 파일에서 이 파일을 import할때 위 쪽에 선언한 클래스를 불러오도록 해줌.
//다른 파일에서 MyComponent를 html 처럼 <MyComponent/> 사용만으로 데이터를 불러올수있음.

