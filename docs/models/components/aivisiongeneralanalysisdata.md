# AIVisionGeneralAnalysisData

## Example Usage

```typescript
import { AIVisionGeneralAnalysisData } from "@cloudinary/analysis/models/components";

let value: AIVisionGeneralAnalysisData = {
  responses: [
    {
      value: "The image contains one cat.",
    },
    {
      value: "The cat is on top of the table.",
    },
  ],
  modelVersion: 1,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `responses`                                                                                                        | [components.AIVisionGeneralAnalysisDataResponse](../../models/components/aivisiongeneralanalysisdataresponse.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | [<br/>{<br/>"value": "The image contains one cat."<br/>},<br/>{<br/>"value": "The cat is on top of the table."<br/>}<br/>] |
| `modelVersion`                                                                                                     | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | 1                                                                                                                  |