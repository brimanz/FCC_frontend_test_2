import React, {useState} from 'react';
import {marked} from 'marked';

//components import
import Header from './components/Header';


const App = () =>{

  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })


  return(
    <div className="App">
      <Header/>
      <textarea 
        id="editor"
        value={text}
        onChange={(e) =>{
          setText(e.target.value)
        }}
      >
      </textarea>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
        __html: marked(text),
        }}
      >
      </div>

    </div>
  );
}


export default App;