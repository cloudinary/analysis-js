# AnalyzeImageQualityResponseData

## Example Usage

```typescript
import { AnalyzeImageQualityResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeImageQualityResponseData = {
  analysis: {
    quality: "medium",
    score: 0.45218,
    confidence: 0.8,
    modelVersion: 1,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `entity`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `analysis`                                                                                 | [components.ImageQualityAnalysisData](../../models/components/imagequalityanalysisdata.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |