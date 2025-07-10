import { useState } from "react";
import { marked } from "marked";
import "./App.css";

const initialMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading...

[Visit freeCodeCamp](https://www.freecodecamp.org)

\`inline code\`

\`\`\`
// Code block example:
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item one
- List item two
- List item three

> This is a blockquote.

**Bold text example**

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
}

export default App;
