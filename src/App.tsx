import './App.css';
import React, {useEffect, useState} from "react";
import {PriceBlock} from "./components/PriceBlock";
import {useDispatch} from "react-redux";
import {BoxNumberType, SelectService} from "./store/reducers/boxesReducer";
import {BlockWithData} from "./components/BlockWithData";
// @ts-ignore
import leftArrow from './assets/leftArrow.png'
// @ts-ignore
import rightArrow from './assets/rightArrow.png'

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
                <img alt={'Arrow'} src={leftArrow} className={'left_arrow'} onClick={prevBlock}/>
                <BlockWithData currentBox={boxToShow} checkboxClick={checkboxClick}/>
                <img alt={'Arrow'} src={rightArrow} className={'right_arrow'} onClick={nextBlock}/>
            </div>
            <PriceBlock/>
        </div>
    );
}

export default App;
