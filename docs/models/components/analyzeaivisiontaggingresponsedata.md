# AnalyzeAIVisionTaggingResponseData

## Example Usage

```typescript
import { AnalyzeAIVisionTaggingResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeAIVisionTaggingResponseData = {
  analysis: {
    tags: [
      {
        name: "cat",
      },
      {
        name: "table",
      },
    ],
    modelVersion: 1,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `entity`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `analysis`                                                                                       | [components.AIVisionTaggingAnalysisData](../../models/components/aivisiontagginganalysisdata.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |