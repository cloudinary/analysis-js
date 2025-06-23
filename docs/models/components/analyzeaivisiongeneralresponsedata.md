# AnalyzeAIVisionGeneralResponseData

## Example Usage

```typescript
import { AnalyzeAIVisionGeneralResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeAIVisionGeneralResponseData = {
  analysis: {
    responses: [
      {
        value: "The image contains one cat.",
      },
      {
        value: "The cat is on top of the table.",
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
| `analysis`                                                                                       | [components.AIVisionGeneralAnalysisData](../../models/components/aivisiongeneralanalysisdata.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |