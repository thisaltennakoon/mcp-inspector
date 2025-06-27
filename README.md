# MCP Inspector (Client-Side)

A lightweight, fully client-side tool for testing MCP (Model Context Protocol) servers using streamable HTTP — no server-side dependencies required.

## Overview

This tool was built to provide a developer-friendly way to test MCP-compatible servers directly from the browser. Unlike existing solutions that rely on server-side intermediaries, this inspector is designed to run entirely on the client-side, making it easy to integrate into any web application or frontend project.

## Features

- ✅ **Client-Side Only**: Requires no backend or proxy. Communicates directly with MCP servers over streamable HTTP.
- 🔁 **Reusable**: Designed as a modular component that can be dropped into any frontend project.
- 🛠️ **Extensible**: Easily customizable and adaptable to suit different UI needs or workflows.

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

## License

[MIT](./LICENSE)
