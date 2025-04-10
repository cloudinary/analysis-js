# AIVisionModerationAnalysisData

## Example Usage

```typescript
import { AIVisionModerationAnalysisData } from "@cloudinary/analysis/models/components";

let value: AIVisionModerationAnalysisData = {
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responses`                                                                                                                                        | [components.AIVisionModerationAnalysisDataResponses](../../models/components/aivisionmoderationanalysisdataresponses.md)[]                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                | [<br/>{<br/>"prompt": "Does the image contain any violent activity?",<br/>"value": "no"<br/>},<br/>{<br/>"prompt": "Is there any nudity in the image?",<br/>"value": "yes"<br/>}<br/>] |
| `modelVersion`                                                                                                                                     | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                | 1                                                                                                                                                  |