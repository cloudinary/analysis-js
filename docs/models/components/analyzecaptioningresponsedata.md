# AnalyzeCaptioningResponseData

## Example Usage

```typescript
import { AnalyzeCaptioningResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeCaptioningResponseData = {
  analysis: {
    data: {
      caption: "A cat sitting on a table",
    },
    modelVersion: 1,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `entity`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `analysis`                                                                             | [components.CaptioningAnalysisData](../../models/components/captioninganalysisdata.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |