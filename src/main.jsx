import React from 'react'
import ReactDOM from 'react-dom'
import MCPInspector from './app/MCPInspector.tsx'

ReactDOM.render(
    <React.StrictMode>
        <MCPInspector
            shouldSetHeaderNameExternally={true}
        />
    </React.StrictMode>,
    document.getElementById('root')
)
