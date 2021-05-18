import React from 'react';
import {Link} from 'react-router-dom';

const Gnb = (props) => (
    <ul className="gnb">
        <li>
            <Link to="/?code=1" className={ props.code === '1' ? 'tab_fresh on' : 'tab_fresh'}>일반 농산물류</Link>
        </li>
        <li>
            <Link to="/?code=2" className={ props.code === '2' ? 'tab_fresh on' : 'tab_fresh'}>선채과수류</Link>
        </li>
        <li>
            <Link to="/?code=3" className={ props.code === '3' ? 'tab_fresh on' : 'tab_fresh'}>버섯특작류</Link>
        </li>
        <li>
            <Link to="/?code=4" className={ props.code === '4' ? 'tab_fresh on' : 'tab_fresh'}>축산물류</Link>
        </li>
        <li>
            <Link to="/?code=5" className={ props.code === '5' ? 'tab_fresh on' : 'tab_fresh'}>가공식품류</Link>
        </li>
        <li>
            <Link to="/?code=6" className={ props.code === '6' ? 'tab_fresh on' : 'tab_fresh'}>기타특산물류</Link>
        </li>
        <li>
            <Link to="/?code=7" className={ props.code === '7' ? 'tab_fresh on' : 'tab_fresh'}>전통주류</Link>
        </li>
    </ul>
)

export default Gnb;