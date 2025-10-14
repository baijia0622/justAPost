import EditorJS, {API, BlockMutationEvent} from '@editorjs/editorjs';

const editor_Deprecation = new EditorJS({
    // 預設為唯獨
    readOnly: true,

    // 開始後解除唯獨模式
    onReady: () => {
        console.log('聊天室已經準備好囉!!')
        editor_Deprecation.readOnly.toggle();
    },

    // 編輯器的ID
    holder: 'editorjs',

    //預設內容
    placeholder: '提醒：請不要撰寫任何色情、暴力、政治相關的內容，官方有權刪除不當內容',

    // 工具配置
    // 傳入每個工具的類別或物件
    tools: {
    },

    // 內容變更時觸發
    onChange(api: API, event: BlockMutationEvent | BlockMutationEvent[]) {
        console.log('你編輯了：', event);
    }

    // data?: OutputData;
});

// promise寫法
// editor_Deprecation.isReady
//     .then(()=>{
//         console.log('Editor已經準備好了')
//     })
//     .catch((reason)=>{
//         console.log(`Editor準備失敗，原因：${reason}`)
//     })

// async/await寫法
try {
    await editor_Deprecation.isReady;
    console.log('Editor已經準備好了')
} catch (reason) {
    console.log(`Editor準備失敗，原因：${reason}`)
}

// 儲存內容並發出
editor_Deprecation.save().then((outputData) => {
    console.log('Article data: ', outputData)
}).catch((error) => {
    console.log('Saving failed: ', error)
});

