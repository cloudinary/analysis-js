# AnalyzeGoogleTaggingResponse


## Supported Types

### `components.AnalyzeGoogleTaggingResponse`

```typescript
const value: components.AnalyzeGoogleTaggingResponse = {
  limits: {
    items: [
      {
        type: "ai_vision",
        usedByRequest: 123,
        remaining: 500,
        limit: 10000,
        resetTime: new Date("2024-01-20T12:34:56Z"),
      },
    ],
  },
  requestId: "17c3b70c5096df0e77e838323abb7029",
  data: {
    analysis: {
      labelAnnotations: {
        labels: [
          {
            label: "cat",
            score: 0.9,
          },
          {
            label: "table",
            score: 0.8,
          },
        ],
      },
    },
  },
};
```

### `components.AsyncOperationAcceptedResponse`

```typescript
const value: components.AsyncOperationAcceptedResponse = {
  data: {
    taskId:
      "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
    status: "pending",
  },
  requestId: "17c3b70c5096df0e77e838323abb7029",
};
```

