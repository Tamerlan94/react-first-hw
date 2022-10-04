import React, { useMemo, useState } from "react";

const Sum = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const checkParity = useMemo(() => checkParityFunc(result), [result]);

    const sum = () => {
        console.log("this is sum function");
        setResult(Number(num1) + Number(num2));        
    }

    const change1 = (e) => {
        setNum1(e.target.value);
    }
    const change2 = (e) => {
        setNum2(e.target.value);
    }

    return (
        <div>
            <input type="number" onChange={change1} value={num1} />
            <input type="number" onChange={change2} value={num2} />
            <button onClick={sum}>Sum this</button>
            <h4>{result}</h4>
            <h4>{checkParity}</h4>
        </div>
    )
}

const checkParityFunc = (num) => {
    console.log("Memo function");
    return (num % 2 == 0) ? 'Четное' : 'Не четное';
}

export default Sum;