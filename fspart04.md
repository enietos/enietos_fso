### 3. **Preview the Markdown File**:
Once you add the Mermaid diagram and save your Markdown file, GitHub automatically renders the diagram when viewing the file in the repository. You can also see the rendered diagram in the **Preview** tab within the GitHub editor before committing your changes.

### Example Diagram:
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST <new_note>
    activate server
    server-->>browser: Code 302
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: the HTML file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes
