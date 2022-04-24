import { Editor, EditorState } from 'draft-js';
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import './style.css';
import 'draft-js/dist/Draft.css';
import { ClickContextProvider, useClickContext } from './contexts/ClickContext';
import Commands from './Commands';
import LinkedInComponent from './LinkedInComponent/LinkedInComponent';

const App = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const editor = React.useRef(null);
  const { nbClick } = useClickContext();
  return (
    <div>
      <Hello name={'William'}>
        <Commands />
      </Hello>

      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
      <div>Nombre de clicks {nbClick} </div>
      <LinkedInComponent />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <ClickContextProvider>
    <App />
  </ClickContextProvider>
);
