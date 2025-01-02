import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from 'uuid'

const initState: boxSliceStateType = {
    box1: [
        {price: '25', title: 'Межбровье', id: v1(), checked: false},
        {price: '25', title: 'Надгубная зона', id: v1(), checked: false},
        {price: '45', title: 'Носогубный треугольник', id: v1(), checked: false},
        {price: '35', title: 'Щёки', id: v1(), checked: false},
        {price: '35', title: 'Виски', id: v1(), checked: false},
        {price: '25', title: 'Подбородок', id: v1(), checked: false},
        {price: '65', title: 'Лицо полностью', id: v1(), checked: false},
        {price: '35', title: 'Шея', id: v1(), checked: false},
    ],
    box2: [
        {price: '45', title: 'Подмышки', id: v1(), checked: false},
        {price: '65', title: 'Плечи', id: v1(), checked: false},
        {price: '65', title: 'Руки до локтя (от плеча/от кисти до локтя)', id: v1(), checked: false},
        {price: '95', title: 'Руки полностью', id: v1(), checked: false},
        {price: '25', title: 'Ареолы', id: v1(), checked: false},
        {price: '85', title: 'Грудь полностью', id: v1(), checked: false},
        {price: '25', title: 'Полоска живота', id: v1(), checked: false},
    ],
    box3: [
        {price: '85', title: 'Живот', id: v1(), checked: false},
        {price: '100', title: 'Спина', id: v1(), checked: false},
        {price: '65', title: 'Бикини классическое', id: v1(), checked: false},
        {price: '80', title: 'Глубокое бикини', id: v1(), checked: false},
        {price: '65', title: 'Ягодицы', id: v1(), checked: false},
        {price: '95', title: 'Бёдра', id: v1(), checked: false},
        {price: '80', title: 'Голени', id: v1(), checked: false},
        {price: '135', title: 'Ноги полностью', id: v1(), checked: false},
    ]
}

export type BoxType = {
    price: string
    title: string
    id: string
    checked: boolean
}
export type BoxNumberType = 'box1' | 'box2' | 'box3'

export type boxSliceStateType = {
    [key in BoxNumberType]: BoxType[];
};

export const boxSlice = createSlice({
    name: 'box',
    initialState: initState,
    reducers: {
        SelectService(state, action: PayloadAction<{ boxNumber: BoxNumberType, id: string }>) {
            const pointId = state[action.payload.boxNumber].findIndex(el => el.id === action.payload.id)
            state[action.payload.boxNumber][pointId].checked = !state[action.payload.boxNumber][pointId].checked
        }
    }
})

export const boxReducer = boxSlice.reducer
export const {SelectService} = boxSlice.actions
