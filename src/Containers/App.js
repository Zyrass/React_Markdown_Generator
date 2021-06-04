import Marked from 'marked'
import React, { useState, useEffect } from "react"

import './App.css';


function App() {

  const [markdown, setMarkdown] = useState("# `Prévisualisateur - Believemy`\n### Oh ! De la magie !\nEn réalité, pas vraiment : ceci s\\'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !\n\n### Cas d\\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Believemy](https://believemy.com)")

  const changeMarkdownHandler = (event) => {
    const data = event.target.value
    setMarkdown(data)
  }

  useEffect(() => {
    console.log("Ok chargé")
  }, [])

  // Sécurité
  function loadMarkdown() {
    const data = (Marked(markdown, {
      breaks: true,
      langPrefix: 'javascript'
    }))
    console.log("data : ------------- ", data)
    return {__html: data}
  }

  return (
    <div className="App">
      
      <h1>Zyrass Markdown Project</h1>

      <div className="container">
        <section className="left">
          <form action="/" method="post">
            <textarea 
              name="markdown"
              id="markdown"
              placeholder="Veuillez saisir du Markdown ici"              onChange={(e) => changeMarkdownHandler(e)}
              defaultValue={markdown}
            >
            </textarea>
          </form>
        </section>
        <section className="right">
          <div dangerouslySetInnerHTML={ loadMarkdown() } />
        </section>
      </div>

    </div>
  );
}

export default App;
