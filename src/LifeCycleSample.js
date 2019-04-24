import React, { Component } from 'react';

class LifeCycleSample extends Component {
    
    state = {
        number : 0,
        color : null
    }

    myRef = null;
    
    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState){  //props로 받아온 값을 state에 동기화시키는 용도.
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color:nextProps.color}
        }
        return null;
    }

    componentDidMount(){  //첫 랜더링 다 마친 후 실행. 라이브러리, 프레임워크 함수 호출, 이벤트 등록, 비동기작업 처리할때 사용.
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){  //컴포넌트 업데이트 해야할지말지 정하는 메서드. false면 리랜더링안함.
        console.log('shouldComponentUpdate',nextProps,nextState);
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount(){  //컴포넌트를 돔에서 제거할때 실행. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM은 여기서 제거.
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number:this.state.number +1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){  //DOM의 변화를 반영하기 직전에 호출하는 메서드임. 업데이트 직전의 값 참고시 활용(스크롤바 위치등)
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.color;
        }
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){ //랜더링 완료 후 실행. 그 후에 실행될 만한 거 여기다 작성하면 됨.
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트 되기 직전 색상',snapshot);
        }
    }

    render() {
        console.log('render');
        
        const style={
            color : this.props.color
        };

        return (
            <div>
                <h1 style={style} ref = {ref => this.myRef = ref} >
                    {this.state.number}
                </h1>
                <p>color:{this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

    

export default LifeCycleSample;