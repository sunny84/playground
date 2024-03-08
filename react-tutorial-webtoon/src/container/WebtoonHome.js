// import 로 가져다 씁니다. 
import React, { Component } from 'react';
// extends 는 부모의 메소드를 그대로 사용할 수 있으며 오버라이딩 할 필요 없이 부모에 구현되있는 것을 직접 사용 가능하다.
class WebtoonHome extends Component{
    render(){
        return (
            <div>WebtoonHome</div>
        )
    }
}
// export 로 함수, 객체, 값을 내보내고
export default WebtoonHome