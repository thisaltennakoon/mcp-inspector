# MCP Playground (Client-Side)

A lightweight, fully client-side tool for inspecting and testing MCP (Model Context Protocol) servers using streamable HTTP — no server-side dependencies required.

## Overview

This tool was built to provide a developer-friendly way to test and inspect MCP-compatible servers directly from the browser. Unlike existing solutions that rely on server-side intermediaries, this inspector is designed to run entirely on the client-side, making it easy to integrate into any web application or frontend project.

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
npm install wso2/mcp-playground
```

or

```bash
yarn add wso2/mcp-playground
```

### Usage


Import and use the `MCPPlayground` React component in your application. All props are optional and can be provided as needed:

```jsx
import MCPPlayground from 'wso2/mcp-playground';

const MyComponent = () => {
  const url = 'https://your-mcp-server.com/mcp';
  const token = 'your-auth-token';
  const headerName = 'Authorization';
  const shouldSetHeaderNameExternally = false;
  const isTokenFetching = false;
  const isUrlFetching = false;

  const handleTokenRegenerate = () => {
    // Logic to regenerate the token
  };

  return (
    <MCPPlayground
      url={url}
      token={token}
      headerName={headerName}
      shouldSetHeaderNameExternally={shouldSetHeaderNameExternally}
      isTokenFetching={isTokenFetching}
      isUrlFetching={isUrlFetching}
      handleTokenRegenerate={handleTokenRegenerate}
    />
  );
};
```

You can omit any of the props if you want to use the component's internal defaults or placeholder behavior.


## Props

The `MCPPlayground` component accepts the following props:

| Prop                          | Type           | Description |
|-------------------------------|----------------|-------------|
| `url`                         | `string`      | The MCP server endpoint URL to connect to.|
| `token`                       | `string`      | The authentication token to use for requests.|
| `headerName`                  | `string`      | The name of the HTTP header to use for the token. If not set, `Authorization` default header may be used. |
| `shouldSetHeaderNameExternally` | `boolean`   | If `true`, the component expects the parent to manage the header name for authentication. If `false` or omitted, the component manages it internally. |
| `isTokenFetching`             | `boolean`     | Indicates if the token is currently being fetched. When `true`, the UI may show a loading state for the token. |
| `isUrlFetching`               | `boolean`     | Indicates if the URL is currently being fetched. When `true`, the UI may show a loading state for the URL. |
| `handleTokenRegenerate`       | `() => void`  | Callback function to trigger token regeneration. Useful for providing a button or action to refresh the token. |

All props are optional. If not provided, the component will fall back to its internal defaults or show relevant placeholder behavior.

## License

[MIT](./LICENSE)
