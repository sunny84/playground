import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import GoodsList from "../component/GoodsList";

class Main extends Component{
    constructor(props){
        super(props);

        const query = new URLSearchParams(props.location.search);
        const item = query.get('item');
        this.state = {
            item : item || "쌀/잡곡",
            goodsList : []
        };
    }

    componentDidMount(){
        this._getList();
    }

    componentDidUpdate(prevProps){
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let previtem = prevQuery.get('item');

        let query = new URLSearchParams(this.props.location.search);
        let item = query.get('item');

        if(previtem !== item){
            this.setState({
                item
            })
        };
    }

    _getList(){
        const apiUrl='dummy/goods_list.json';
        axios.get(apiUrl)
            .then(data=>{
                this.setState({
                    goodsList : data.data.goodList
                });
            })
            .catch(error=>{
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <Header/>
                <Gnb item={this.state.item} />
                { this.state.goodsList.length > 0 ? (
                    <GoodsList list={
                        this.state.goodsList.filter(good=>(
                            good.item === this.state.item
                        ))
                    }/>
                    ) : (
                    <span>LOADING...</span>
                )}
                <Footer />
            </div>
        )
    }
}

export default Main;
