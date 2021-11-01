import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import React from "react";
import {RootStoreType} from "../store/store";
import {useSelector} from "react-redux";
import {BoxNumberType} from "../store/reducers/boxesReducer";

type BlockWithDataType = {
    currentBox: BoxNumberType
    checkboxClick: (checkboxId: string) => void
}


export const BlockWithData = React.memo(({currentBox, checkboxClick}: BlockWithDataType) => {


    const data = useSelector((state: RootStoreType) => state.boxes[currentBox])


    return (
        <div className={'checkBoxes_wrapper'}>
            <FormGroup>
                {data.map((el, i) =>
                    <FormControlLabel key={i}
                                      control={<Checkbox checked={el.checked} id={el.id}
                                                         onClick={() => checkboxClick(el.id)}/>}
                                      label={el.title}/>
                )}
            </FormGroup>
        </div>
    )
})