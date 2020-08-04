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

// 追加・削除・検索のレデュース処理(上記のcaseのreturn)

// メモ追加のレデュース処理
function addReduce(state, action) {
    let data = {
        message: action.message,
        created: new Date()
    };

    let newData = state.data.slice(); // 配列のコピー
    newData.unshift(data); // dataという連想配列をnewDataという連想配列の先頭に追加。
    return {
        data: newData, // dataが先頭に追加された後のnewData。
        message: 'Added!',
        mode: 'default',
        fdata: []
    };
}

