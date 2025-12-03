import {memo} from 'react';


function Child({name}){

    console.log('자식 컴포넌트 작동...')
    return (
        <div
        style={
            {
                backgroundColor: 'blue',
                padding: '30px',
            }
        }
        >
        <h2>자식 컴포넌트</h2>
        {/* <p>이름 : {name}</p> */}
        <p>성: {name.firstName}</p>
        <p>이름: {name.lastName}</p>
        {/* <p>나이 : {age}</p> */}
        </div>
    )
}

export default memo(Child)
