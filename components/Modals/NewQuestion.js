import React, {useEffect} from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const NewQuestionModal = ({setShowAddQuestion, t}) => {
    const [question, setQuestion] = React.useState('Hello Techinika')
    const editor = useEditor({
        extensions: [
            BubbleMenu,
            StarterKit.configure({
                heading: {
                    levels: [1,2,3]
                }
            })
        ],
        content: question,
    })

    return (
        <>
             <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-1/4 my-2 mx-auto max-w-1/2">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="py-6 px-6 lg:px-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl text-gray-900 dark:text-white font-bold">{t('Ask your question')}</h3>
                                <button className="text-red-500 text-xs transition-all duration-150" onClick={() => setShowAddQuestion(false)}>
                                    {t('Close')}
                                </button>
                            </div>
                            
                            <form className="space-y-6 w-full" action="#">

                                { editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                                        <button
                                            onClick={() => editor.chain().focus().toggleBold().run()}
                                            className={editor.isActive('bold') ? 'active' : 'not-active'}
                                        >
                                            bold
                                        </button>
                                        <button
                                            onClick={() => editor.chain().focus().toggleItalic().run()}
                                            className={editor.isActive('italic') ? 'active' : 'not-active'}
                                        >
                                            italic
                                        </button>
                                        <button
                                            onClick={() => editor.chain().focus().toggleStrike().run()}
                                            className={editor.isActive('strike') ? 'active' : 'not-active'}
                                        >
                                            strike
                                        </button>
                                </BubbleMenu>}
                                <EditorContent editor={editor} onChange={e => console.log(e)}/> 
                                
                                <button type="submit" className="btn-long">{t('Publish')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}