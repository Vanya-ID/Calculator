import {Box, Button, Modal, Typography} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootStoreType} from "../store/store";
import {boxSliceStateType} from "../store/reducers/boxesReducer";

export const PriceBlock = () => {

    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState(0)
    const data = useSelector<RootStoreType, boxSliceStateType>(state => state.boxes)

    const boxes = Object.values(data)
    const checkedPoints = boxes.map(box => {
        return box.filter(point => point.checked)
    }).flat()

    const handleClose = () => setOpen(false);

    const buttonClick = () => {
        const totalPrice = checkedPoints.reduce((acc, el) => acc + +el.price, 0)
        setPrice(totalPrice)
        setOpen(true)
    }


    return (
        <div>
            <div className={'btn_wrapper'}>
                <Button style={checkedPoints.length < 3 ? {color: 'blue', fontWeight: 'bold'} : {}}
                        disabled={checkedPoints.length < 3} onClick={buttonClick} variant="contained">
                    {
                        checkedPoints.length < 3 ? `Выбрано ${checkedPoints.length} / 3` : 'Рассчитать'
                    }
                </Button>
                <span
                    className={checkedPoints.length > 2 ? 'show_selected_count' : 'hide_selected_count'}>Выбрано {checkedPoints.length} {checkedPoints.length >= 2 && checkedPoints.length < 5 ? 'зоны' : 'зон'}
                </span>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    pt: 2,
                    px: 4,
                    pb: 3,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Стоимость
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2, fontSize: '20px'}}>
                        {(price * 0.7).toFixed(2) + ' BYN'}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}