import { createStore } from 'redux';

// 初期値(ステートの値)の設定
const initData = {
    data: [{message: 'sample data', created: new Date()}],
    mode: 'default',
    fdata: []
};

// レデューサーの作成
export function memoReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'FIND':
            return findReduce(state, action);
        default:
            return state;
    }
}

// 追加・削除・検索のレデューサー

