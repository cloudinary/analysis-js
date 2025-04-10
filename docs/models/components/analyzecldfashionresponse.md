# AnalyzeCldFashionResponse

## Example Usage

```typescript
import { AnalyzeCldFashionResponse } from "@cloudinary/analysis/models/components";

let value: AnalyzeCldFashionResponse = {
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
      tags: {},
      modelVersion: 1,
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `limits`                                                                                             | [components.LimitsObject](../../models/components/limitsobject.md)                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | 17c3b70c5096df0e77e838323abb7029                                                                     |
| `data`                                                                                               | [components.AnalyzeCldFashionResponseData](../../models/components/analyzecldfashionresponsedata.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |