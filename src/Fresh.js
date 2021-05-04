import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Fresh.css";

class Fresh extends Component {
    static propTypes = {
        // props  데이터 자료형을 정해줌
        // Fresh 컴포넌트의 product 값은 string 타입이여야 하며,
        // isRequired를 지정한 product 값은 반드시 설정해야 합니다.
        product: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    };
    render() {
        console.log(this.props);
        return (
            // 컴포넌트는 항상 렌더를 해야 한다. 
            <div>
                <FreshPoster image={this.props.image} />
                <h1> {this.props.product} </h1>
            </div>
        );
    }
}

class FreshPoster extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired
    };
    render() {
        return (
            <img src={this.props.image} border="0" width="200" height="200" alt="product"/>
        );
    }
}

export default Fresh;