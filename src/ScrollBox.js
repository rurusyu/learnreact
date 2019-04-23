import React, { Component } from 'react';


class ScrollBox extends Component {

    scrollToBottom = () => {
        const {scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight; 
        console.log("클릭",this.box.scrollTop,scrollHeight,clientHeight, this.box);
    }

    render() {
        const style ={
            border : '1px soild black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box = ref}}  //부모꺼에만 ref다니깐 자식 컴포넌트까지 볼수있음.
                >
                <div style={innerStyle} //ref를 자식에게 두면 부모꺼는 못봄.
                />
            </div>
        );
    }
}

export default ScrollBox;