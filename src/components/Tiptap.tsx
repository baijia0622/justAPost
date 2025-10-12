'use client'

import {useEditor, EditorContent, useEditorState, Editor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import {UndoRedo} from '@tiptap/extensions'

const extensions = [StarterKit.configure({
    heading: {
        levels: [1, 2, 3],
    },
}), Highlight.configure({multicolor: true}),
    TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'left',
    }),
    // UndoRedo.configure({
    //     depth: 30,
    // })
]

function MenuBar({editor}: { editor: Editor }) {
    const editorState = useEditorState({
        editor,
        selector: ctx => {
            return {
                isBlockquote: ctx.editor.isActive('blockquote') ?? false,
                isBulletList: ctx.editor.isActive('bulletList') ?? false,
                isOrderedList: ctx.editor.isActive('orderedList') ?? false,
                isHeading1: ctx.editor.isActive('heading', {level: 1}) ?? false,
                isHeading2: ctx.editor.isActive('heading', {level: 2}) ?? false,
                isHeading3: ctx.editor.isActive('heading', {level: 3}) ?? false,
                isBold: ctx.editor.isActive('bold') ?? false,
                isItalic: ctx.editor.isActive('italic') ?? false,
                isHighlight: ctx.editor.isActive('highlight') ?? false,
                isUnderline: ctx.editor.isActive('underline') ?? false,
                isStrike: ctx.editor.isActive('strike') ?? false,
                isTextAlignLeft: ctx.editor.isActive({textAlign: 'left'}) ?? false,
                isTextAlignCenter: ctx.editor.isActive({textAlign: 'center'}) ?? false,
                isTextAlignRight: ctx.editor.isActive({textAlign: 'right'}) ?? false,
            }
        }
    })

    const {canUndo, canRedo} = useEditorState({
        editor,
        selector: ctx => {
            return {
                canUndo: ctx.editor.can().chain().focus().undo().run(),
                canRedo: ctx.editor.can().chain().focus().redo().run(),
            }
        },
    })

    return (
        <div className={`flex justify-start items-center control-group bg-white p-2 mt-2 rounded-sm`}>
            <div className={`button-goup`}>
                {/*引用*/}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`${editorState.isBlockquote ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                    </svg>
                </button>

                {/*項目符號*/}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`${editorState.isBulletList ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                    </svg>
                </button>

                {/*有序清單*/}
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`${editorState.isOrderedList ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99"/>
                    </svg>
                </button>


            </div>

            <div className={`button-goup`}>
                {/*H1標題*/}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                    className={`${editorState.isHeading1 ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25"/>
                    </svg>
                </button>

                {/*H2標題*/}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    className={`${editorState.isHeading2 ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"/>
                    </svg>
                </button>

                {/*H3標題*/}
                <button
                    onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                    className={`${editorState.isHeading3 ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M20.905 14.626a4.52 4.52 0 0 1 .738 3.603c-.154.695-.794 1.143-1.504 1.208a15.194 15.194 0 0 1-3.639-.104m4.405-4.707a4.52 4.52 0 0 0 .738-3.603c-.154-.696-.794-1.144-1.504-1.209a15.19 15.19 0 0 0-3.639.104m4.405 4.708H18M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"/>
                    </svg>
                </button>
            </div>

            <div className={`button-goup`}>
                {/*粗體*/}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${editorState.isBold ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinejoin="round"
                              d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"/>
                    </svg>
                </button>

                {/*斜體*/}
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${editorState.isItalic ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"/>
                    </svg>
                </button>

                {/*下劃線*/}
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`${editorState.isUnderline ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd"
                              d="M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"/>
                    </svg>
                </button>

                {/*刪除線*/}
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`${editorState.isStrike ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd"
                              d="M9.657 4.728c-1.086.385-1.766 1.057-1.979 1.85-.214.8.046 1.733.81 2.616.746.862 1.93 1.612 3.388 2.003.07.019.14.037.21.053h8.163a.75.75 0 0 1 0 1.5h-8.24a.66.66 0 0 1-.02 0H3.75a.75.75 0 0 1 0-1.5h4.78a7.108 7.108 0 0 1-1.175-1.074C6.372 9.042 5.849 7.61 6.229 6.19c.377-1.408 1.528-2.38 2.927-2.876 1.402-.497 3.127-.55 4.855-.086A8.937 8.937 0 0 1 16.94 4.6a.75.75 0 0 1-.881 1.215 7.437 7.437 0 0 0-2.436-1.14c-1.473-.394-2.885-.331-3.966.052Zm6.533 9.632a.75.75 0 0 1 1.03.25c.592.974.846 2.094.55 3.2-.378 1.408-1.529 2.38-2.927 2.876-1.402.497-3.127.55-4.855.087-1.712-.46-3.168-1.354-4.134-2.47a.75.75 0 0 1 1.134-.982c.746.862 1.93 1.612 3.388 2.003 1.473.394 2.884.331 3.966-.052 1.085-.384 1.766-1.056 1.978-1.85.169-.628.046-1.33-.381-2.032a.75.75 0 0 1 .25-1.03Z"
                              clipRule="evenodd"/>
                    </svg>
                </button>

                {/*螢光筆*/}
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={`${editorState.isHighlight ? 'is-active' : ''} tiptap-btn`}
                >
                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">*/}
                    {/*    <path fillRule="evenodd"*/}
                    {/*          d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"*/}
                    {/*          clipRule="evenodd"/>*/}
                    {/*</svg>*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/>
                    </svg>
                </button>
            </div>

            <div className={`button-goup`}>
                {/*靠左顯示*/}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`${editorState.isTextAlignLeft ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"/>
                    </svg>
                </button>

                {/*置中顯示*/}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`${editorState.isTextAlignCenter ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>

                {/*靠右顯示*/}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`${editorState.isTextAlignRight ? 'is-active' : ''} tiptap-btn`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                    </svg>
                </button>
            </div>

            <div className={`button-goup`}>
                {/*水平線*/}
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        className={`tiptap-btn`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                    </svg>
                </button>
            </div>

            {/*<div className="button-group">*/}
            {/*    /!*撤銷*!/*/}
            {/*    <button onClick={() => editor.chain().focus().undo().run()} disabled={!canUndo} type="button">*/}
            {/*        Undo*/}
            {/*    </button>*/}
            {/*    /!*重作*!/*/}
            {/*    <button onClick={() => editor.chain().focus().redo().run()} disabled={!canRedo} type="button">*/}
            {/*        Redo*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content: `<p>在此輸入你的回覆</p>`,
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    })

    if (!editor) {
        return null
    }

    return (
        <>
            <MenuBar editor={editor}/>
            <EditorContent className={`mt-1`} editor={editor}/>
        </>
    )
}

export default Tiptap
