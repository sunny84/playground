import React from 'react';
import {Link} from 'react-router-dom';

const GoodsList = (props) => {
    return(
        <div>
            
            <div className="grid_item_wrap">
                <div className="grid_item">
                {props.list.map((good, index) => (
                    index < 16 ? (
                        <div className="grid_box" key={index}>
                            <div className="grid_item_box">
                                <Link to={`/fresh/${good.item}`} className="link_goods"></Link>
                                <div className="thumb_info">
                                    <img src={good.thumbnail} className="img_good" alt={good.name} />
                                </div>
                                <div className="spac_wrap">
                                    <div className="spac_inner">
                                        <div className="goods_name"><span>{good.name}</span></div>
                                        <div className="goods_consumer"><span>{good.consumer}</span></div>
                                        <div className="goods_sale_price"><span>{good.sale_price}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <br></br>
                    )
                ))}
                </div>
            </div>
            <table align="center" border="0" cellspacing="0">
                <tbody>
                    <tr>
                        <td>
                            <div className="paging_navigation">
                                <a href="?page=1&code=0008">1</a> <a href="?page=2&code=0008">2</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            /*
            <ul className="list_goods">
                {props.list.map((good, index) => (
                    <li key={index}>
                        <Link to={`/fresh/${good.item}`} className="link_goods">
                            <img src={good.thumbnail} className="img_good" alt={good.name} />
                            <div className="info_good">
                                <strong className="name_good">
                                    {good.name}
                                </strong>
                                <p class="good_consumer">{good.consumer}</p>
                                <p class="good_saleprice">{good.sale_price}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            */
    )
}

export default GoodsList;
