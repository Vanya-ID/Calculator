import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from 'uuid'

const initState: boxSliceStateType = {
    box1: [
        {price: '19', title: 'Межбровье', id: v1(), checked: false},
        {price: '19', title: 'Надгубная зона', id: v1(), checked: false},
        {price: '27', title: 'Носогубный треугольник', id: v1(), checked: false},
        {price: '24', title: 'Щёки', id: v1(), checked: false},
        {price: '24', title: 'Виски', id: v1(), checked: false},
        {price: '19', title: 'Подбородок', id: v1(), checked: false},
        {price: '49', title: 'Лицо полностью', id: v1(), checked: false},
        {price: '24', title: 'Шея', id: v1(), checked: false},
    ],
    box2: [
        {price: '29', title: 'Подмышки', id: v1(), checked: false},
        {price: '48', title: 'Плечи', id: v1(), checked: false},
        {price: '48', title: 'Руки до локтя (от плеча/от кисти до локтя)', id: v1(), checked: false},
        {price: '19', title: 'Кисти рук', id: v1(), checked: false},
        {price: '84', title: 'Руки полностью', id: v1(), checked: false},
        {price: '19', title: 'Ареолы', id: v1(), checked: false},
        {price: '72', title: 'Грудь полностью', id: v1(), checked: false},
        {price: '19', title: 'Полоска живота', id: v1(), checked: false},
    ],
    box3: [
        {price: '72', title: 'Живот', id: v1(), checked: false},
        {price: '84', title: 'Спина', id: v1(), checked: false},
        {price: '48', title: 'Бикини классическое', id: v1(), checked: false},
        {price: '68', title: 'Глубокое бикини', id: v1(), checked: false},
        {price: '48', title: 'Ягодицы', id: v1(), checked: false},
        {price: '78', title: 'Бёдра', id: v1(), checked: false},
        {price: '68', title: 'Голени', id: v1(), checked: false},
        {price: '108', title: 'Ноги полностью', id: v1(), checked: false},
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
