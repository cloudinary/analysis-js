# AnalyzeAIVisionModerationResponseData

## Example Usage

```typescript
import { AnalyzeAIVisionModerationResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeAIVisionModerationResponseData = {
  analysis: {
    responses: [
      {
        prompt: "Does the image contain any violent activity?",
        value: "no",
      },
      {
        prompt: "Is there any nudity in the image?",
        value: "yes",
      },
    ],
    modelVersion: 1,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `entity`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `analysis`                                                                                             | [components.AIVisionModerationAnalysisData](../../models/components/aivisionmoderationanalysisdata.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |