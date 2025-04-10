# AnalyzeGoogleLogoDetectionResponse

## Example Usage

```typescript
import { AnalyzeGoogleLogoDetectionResponse } from "@cloudinary/analysis/models/components";

let value: AnalyzeGoogleLogoDetectionResponse = {
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
      logoAnnotations: [
        {
          mid: "/m/045c7b",
          description: "google",
          score: 0.980325,
          boundingPoly: {
            vertices: [
              {
                x: 12,
                y: 42,
              },
              {
                x: 439,
                y: 42,
              },
              {
                x: 439,
                y: 285,
              },
              {
                x: 12,
                y: 285,
              },
            ],
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `limits`                                                                                                               | [components.LimitsObject](../../models/components/limitsobject.md)                                                     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `requestId`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    | 17c3b70c5096df0e77e838323abb7029                                                                                       |
| `data`                                                                                                                 | [components.AnalyzeGoogleLogoDetectionResponseData](../../models/components/analyzegooglelogodetectionresponsedata.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |