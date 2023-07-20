// import React from 'react' <- 다른 컴포넌트,css... 불러들이고 싶을 때
// 데이터 바인딩
// 데이터 세팅 / 리액트

import { useState } from "react"

function Content() {
    // 여기가 데이터 세팅 구간. 여러 개 작성 가능
    // let [데이터담을변수명, 데이터수정용함수명] = useState(데이터)
    // state <-데이터 상태. 데이터는 문자, 숫자, 배열, 논리, 객체...가능
    /* 이미지 태그 이미지 사용 */
    // 2) 
    // : 그 외 폴더에 있을 때 
    // 컴포넌트 기준으로 src={require('파일경로/파일이름')} 
    let [cont2List, cont2ListSet] = useState(["안녕", "하세요", "반가워요"])
    let [testNumber, testNumberset] = useState(
        [
        {
            title:"여름셔츠",
            price:35000,
            date:"2023-05-16",
            thunbnail:require('../imgs/bn_01.jpg')
        }, 
        {
            title:"여름운동화",
            price:70000,
            date:"2023-04-20",
            thunbnail:require('../imgs/bn_02.jpg')
        }, 
        {
            title:"반바지",
            price:23000,
            date:"2023-03-27",
            thunbnail:require('../imgs/bn_03.jpg')
        }]
    );

    return (
        <div className="content1">
            <div className="cont1">
                {
                    // 베열명.map(function(el, idx){})
                    testNumber.map((item, idx)=>{
                        return( // 리턴 구간을 작성해야 태그 출력해줌(없으면 에러)
                            <div className="box" key={idx}>
                                <img src={item.thunbnail}/>
                                <h2>{item.title}</h2>
                                <p>{item.price}</p>
                                <span>{item.date}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="cont2">
                {
                    cont2List.map(function(item, idx){
                        return(
                            <p className="list" key={idx}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Content