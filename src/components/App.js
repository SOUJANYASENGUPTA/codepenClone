import React, { useEffect, useState } from "react";
import Editor from "./Editor";


function App() {
  const [html, setHTML] = useState('')
  const [js, setJS] = useState('')
  const [css, setCSS] = useState('')
  const [srcDoc,setsrcDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
    setsrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `
    )
    return clearTimeout(timeout);
    }, 250)
  },[html,css,js])

  return (
   <>
   <div className="pane top-pane">
    <Editor 
    language="xml" 
    displayName="HTML" 
    value={html} 
    onChange={setHTML}/>
    <Editor
     language="css" 
     displayName="CSS" 
     value={css} 
     onChange={setCSS}
    />
    <Editor
      language="javascript" 
      displayName="JS" 
      value={js} 
      onChange={setJS} 
    />
   </div>
   <div className="pane">
   <iframe
     srcDoc={srcDoc}
     title="output"
     sandbox="allow-scripts"
     frameBorder = "0"
     width="100%"
     height="100%"
   />
   </div>
      </> 
  )
}

export default App;
