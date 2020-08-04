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

// メモ削除のレデュース処理
function deleteReduce(state, action) {
    let newData = state.data.slice();
    newData.splice(action.index, 1); // // spliceは要素の削除・置き換え。
    return {
        data: newData,
        message: 'Delete' + action.index + ':',
        mode: 'delete',
        fdata: []
    }
}

// メモ検索のレデュース処理
function findReduce(state, action) {
    let f = action.find;
    let fdata = [];
    state.data.forEach((value) => {
        if (value.message.indexOf(f) >= 0) {
            fdata.push(value); // indexOfは、引数と同じ内容の要素の最初のインデックスを返す。
        }
    });
    return {
        data: state.data,
        message: 'find' + ':',
        mode: 'find',
        fdata: fdata
    };
}