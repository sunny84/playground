import React, { Component } from 'react';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";

class FreshHome extends Component{
    render(){
        return (
            <div>
                <Header />
                <Gnb />
                FreshHome
                <Footer />
            </div>
        )
    }
}

export default FreshHome;