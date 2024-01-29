import React from 'react';

import { useState } from "react";


const Jugs = () => {
    const [valueX, setValueX] = useState('');
    const [valueY, setValueY] = useState('');
    const [valueZ, setValueZ] = useState('');

    const [totalX, setTotalX] = useState(0);
    const [totalY, setTotalY] = useState(0);

    const handleChangeX = (event) => {
        event.preventDefault();
        const truncX = Math.trunc(event.target.value);
        setValueX(parseInt(truncX));
    };
    const handleChangeY = (event) => {
        event.preventDefault();
        const truncY = Math.trunc(event.target.value);
        setValueY(parseInt(truncY));
    };
    const handleChangeZ = (event) => {
        event.preventDefault();
        const truncZ = Math.trunc(event.target.value);
        setValueZ(parseInt(truncZ));
    };

    const handleClick = (event) => {
        event.preventDefault();
        setResp('');
        setResponse('');
        resolved();
    };
    const [resp, setResp] = useState('');
    const [response, setResponse] = useState('');
    const movements = [];

    const Fill = (jarra, newJarra) => {
        // console.log('jarra -> ' + jarra);
        if (jarra === 'X') {
            setTotalX((prevTotalX) => {
                // console.log('Prev TotalX: ' + prevTotalX);
                // console.log('X: ' + (prevTotalX + newJarra));
                return prevTotalX + newJarra;
            });
            movements.push('Jar X has been filled with -> ' + newJarra);
        } else if (jarra === 'Y') {
            setTotalY((prevTotalY) => {
                return prevTotalY + newJarra;
            });
            movements.push('Jar Y has been filled with ->' + newJarra);
        }

    };

    const Empty = (jarra) => {
        if (jarra === 'X') {
            setTotalX(0);
            movements.push('Jug has been emptied X');
        } else {
            setTotalY(0);
            movements.push('Jug has been emptied Y');
        }
    };

    const Transfer = (jarraOrigen, jarraDestino, count) => {
        movements.push('*********Start Water transfer*********');
        movements.push(jarraOrigen + ' -> ' + jarraDestino);
        Empty(jarraOrigen);
        Fill(jarraDestino, count);
        movements.push('*********End Water transfer*********');
    };

    const printMovements = () => {
        const arrayMapeado = movements.map((elemento) => {
            console.log(elemento);
            return elemento;
        });
    };

    const resolved = () => {
        const resultX = valueZ / valueX;
        const resultY = valueZ / valueY;
        if (valueZ === '' || valueX === '' || valueY === '') {
            setResp('Please complete all fields');
        } else if (Math.sign(valueX) == '-1' || Math.sign(valueY) == '-1' || Math.sign(valueZ) == '-1') {
            setResp('You can only enter positive numbers');
        } else if (valueZ <= valueX || valueZ <= valueY) {

            if (valueZ % valueX === 0 && valueZ % valueY === 0) {
                if (resultX === 1) {
                    Fill('X', valueX);
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                } else if (resultY === 1) {
                    Fill('Y', valueY);
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                }
            } else if (valueZ % valueX === 0) {
                if (resultX === 1) {
                    Fill('X', valueX);
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                } else if (valueY > (valueX * resultX)) {
                    for (let i = 0; i < resultX; i++) {
                        Fill('X', valueX);
                        Transfer('X', 'Y', valueX);
                    }
                    printMovements();
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                }
            } else if (valueZ % valueY === 0) {
                if (resultY === 1) {
                    Fill('Y', valueY);
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                } else if (valueX > (valueY * resultY)) {
                    for (let i = 0; i < resultY; i++) {
                        Fill('Y', valueY);
                        Transfer('Y', 'X', valueY);
                    }
                    printMovements();
                    setResponse(movements.map((movement, index) => <p key={index}>{movement}</p>));
                }
            } else {
                setResp('No Solution');
            }
        } else {
            setResp('No Solution');
        }
    }


    return (
        <div className='container'>
            <div>
                <h3 className="py-4 text-center">Water Jug Challenge</h3>
            </div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-bottle-water"></i></span>
                    <input type="number" min="0" max="100" onChange={handleChangeX} value={valueX || ''} className="form-control" placeholder="Capacity X" aria-label="Value X" />
                    <span className="input-group-text"><i className="fa-solid fa-bottle-water"></i></span>
                    <input type="number" min="0" max="100" onChange={handleChangeY} value={valueY || ''} className="form-control" placeholder="Capacity Y" aria-label="Value Y" />
                    <span className="input-group-text"><i className="fa-solid fa-faucet-drip"></i></span>
                    <input type="number" min="0" max="100" onChange={handleChangeZ} value={valueZ || ''} className="form-control" placeholder="Gallons Z" aria-label="Value Z" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
            <br />
            <br />
            <br />
            <span className="text-danger">{resp}</span>
            <span className="text-success text-center">{response}</span>
        </div>
    )
};

export default Jugs;
