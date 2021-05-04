//import logo from './logo.svg';
import './App.css';
import Fresh from "./Fresh";
import TopBanner from "./TopBanner";
import { Component } from 'react';

const topBannerLink = "http://localhost:3001/";
const topBannerImage = "/images/banner_top.jpg";

class App extends Component {
  render() {
    return (
      <div id="layout_body">
        <div id="layout_header">
          <div className="TopBanner">
            <TopBanner link={topBannerLink} image={topBannerImage} />
          </div>
          <div className="HeaderArea">
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
