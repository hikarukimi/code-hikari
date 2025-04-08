import React, {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from "antd";

interface EditorComponentProps {
    className?: string;
    text: string;
    setText: (text: string) => void;
    children: React.ReactNode;
}

export const EditorComponent = (props: EditorComponentProps) => {
    const editorRef = useRef<Editor | null>(null);

    useEffect(() => {
        const editorElement = document.querySelector('#editor');
        if (!editorElement) return;

        try {
            editorRef.current = new Editor({
                el: editorElement as HTMLElement,
                height: '500px',
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                initialValue: props.text
            });
            editorRef.current.reset()

            // 添加内容变化监听
            editorRef.current.on('change', () => {
                if (editorRef.current) {
                    props.setText(editorRef.current.getMarkdown());
                }
            });

            return () => {
                if (editorRef.current) {
                    editorRef.current.hide();
                }
            };
        } catch (error) {
            console.error('Editor init error:', error);
        }
    }, []);

    return (
        <div>
            <div
                id="editor"
                style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: '4px',
                    marginBottom: '16px'
                }}
            />
            <div>
                <Button
                    type="primary"
                    style={{ minWidth: '120px' }}
                    htmlType={'submit'}
                >
                    {props.children}
                </Button>
            </div>
        </div>
    );
};