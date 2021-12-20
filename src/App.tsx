import './App.css';
import React, {useEffect, useState} from "react";
import {PriceBlock} from "./components/PriceBlock";
import {useDispatch} from "react-redux";
import {BoxNumberType, SelectService} from "./store/reducers/boxesReducer";
import {BlockWithData} from "./components/BlockWithData";

function App() {
    document.title = 'Калькулятор'
    const [boxToShow, setBoxToShow] = useState<BoxNumberType>('box1')
    const dispatch = useDispatch()
    const [newStyle, setNewStyle] = useState<boolean>(true)

    const checkboxClick = (checkboxId: string) => {
        dispatch(SelectService({boxNumber: boxToShow, id: checkboxId}))
    }
    useEffect(() => {
        setNewStyle(true)
    }, [newStyle])

    const nextBlock = () => {
        setTimeout(() => {
            boxToShow === 'box3' && setBoxToShow("box1")
            boxToShow === 'box2' && setBoxToShow("box3")
            boxToShow === 'box1' && setBoxToShow("box2")
        }, 0)
        setNewStyle(false)
    }

    const prevBlock = () => {
        setTimeout(() => {
            boxToShow === 'box3' && setBoxToShow("box2")
            boxToShow === 'box2' && setBoxToShow("box1")
            boxToShow === 'box1' && setBoxToShow("box3")
        }, 0)
        setNewStyle(false)
    }

    return (
        <div className={newStyle ? 'show' : 'hide'}>
            <div className={'points_container'}>
                <span className={'left_arrow'} onClick={prevBlock}> {'<'} </span>
                <BlockWithData currentBox={boxToShow} checkboxClick={checkboxClick}/>
                <span className={'right_arrow'} onClick={nextBlock}> {'>'}</span>
            </div>
            <PriceBlock/>
        </div>
    );
}

export default App;
