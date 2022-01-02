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
                <Button style={checkedPoints.length < 3 ? {
                    color: '#346ba3',
                    fontWeight: 'bold',
                    transform: 'scale(1.35)',
                    boxShadow: '2px 2px 2px black'
                } : {transform: 'scale(1.35', boxShadow: '4px 4px 2px #897979'}}
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
                    minWidth: 200,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    pt: 2,
                    px: 4,
                    pb: 3,
                }}>
                    <Typography style={{marginBottom: '20px'}} id="modal-modal-title" variant="h5" component="h2">
                        Стоимость
                    </Typography>
                    <Typography id="modal-modal-description" variant="h5" component="h2">
                        {Math.round(price * 0.8) + ' BYN'}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}