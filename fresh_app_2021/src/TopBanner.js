import React, { Component } from "react";

class TopBanner extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <a href={this.props.link}>
                    <TopBannerImage image={this.props.image} />
                </a>
            </div>
        );
    }
}

class TopBannerImage extends Component {
    render() {
        return (
            <img src={this.props.image} border="0" width="970" height="90" alt="선물세트 바로가기"/>
        );
    }
}

export default TopBanner;