# MCP Inspector (Client-Side)

A lightweight, fully client-side tool for testing MCP (Model Context Protocol) servers using streamable HTTP — no server-side dependencies required.

## Overview

This tool was built to provide a developer-friendly way to test MCP-compatible servers directly from the browser. Unlike existing solutions that rely on server-side intermediaries, this inspector is designed to run entirely on the client-side, making it easy to integrate into any web application or frontend project.

## Features

- ✅ **Client-Side Only**: Requires no backend or proxy. Communicates directly with MCP servers over streamable HTTP.
- 🔁 **Reusable**: Designed as a modular component that can be dropped into any frontend project.
- 🛠️ **Extensible**: Easily customizable and adaptable to suit different UI needs or workflows.
- 📊 **Activity History**: Built-in history tracking for debugging and observability of MCP interactions.

## Getting Started

**Note:** This package has not been published to npm or yarn yet.

### Installation

You can install the package directly from the GitHub repository using npm or yarn:

```bash
npm install wso2/mcp-inspector
```

or

```bash
yarn add wso2/mcp-inspector
```

### Usage

Import and use the `MCPInspector` React component in your application:

```jsx
import MCPInspector from 'wso2/mcp-inspector';

const MyComponent = () => {
  const url = 'https://your-mcp-server.com/mcp';
  const token = 'your-auth-token';
  const isTokenFetching = false;
  const isUrlFetching = false;

  const handleTokenRegenerate = () => {
    // Logic to regenerate the token
  };

  return (
    <MCPInspector
      url={url}
      token={token}
      isTokenFetching={isTokenFetching}
      isUrlFetching={isUrlFetching}
      handleTokenRegenerate={handleTokenRegenerate}
    />
  );
};
```

Note: All props are optional. If not provided, the component will fall back to its internal defaults or show relevant placeholder behavior.

## Activity History & Debugging

The MCP Inspector includes a built-in activity history feature for better debugging and observability. The history tracks all MCP interactions including:

- **Connection Events**: Connect/disconnect operations with success/failure status
- **Tool Operations**: Tool list fetching, tool calls with parameters and results
- **Ping Operations**: Server ping requests and responses
- **Error Tracking**: Detailed error information with context
- **Performance Metrics**: Response times for operations

### History Event Format

Each history event is a structured JSON object:

```json
{
  "type": "info" | "error" | "debug" | "warning",
  "timestamp": "2025-07-03T10:30:45.123Z",
  "source": "connect|ping|listTools|callTool|makeRequest",
  "message": "Human-readable description",
  "details": {
    "key": "value"
  }
}
```

### Accessing History

The activity history is displayed in a **fixed panel at the bottom** of the MCP Inspector interface, providing consistent visibility regardless of tab selection or content changes. It provides:

- Real-time event logging with color-coded severity levels (newest events at top)
- Expandable details for each event  
- Latest events appear at the top for immediate visibility
- Clear history functionality
- Automatic cleanup on connect/disconnect
- **Fixed positioning** - remains stable at the bottom, unaffected by content changes in tabs
- **Always visible** - maintains consistent placement across all interface states

This feature is particularly useful for:
- Debugging connection issues
- Understanding MCP server behavior
- Performance analysis
- Error troubleshooting

## License

[MIT](./LICENSE)
