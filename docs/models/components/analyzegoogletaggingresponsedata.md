# AnalyzeGoogleTaggingResponseData

## Example Usage

```typescript
import { AnalyzeGoogleTaggingResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeGoogleTaggingResponseData = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `entity`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `analysis`                                                                                   | [components.GoogleTaggingAnalysisData](../../models/components/googletagginganalysisdata.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |