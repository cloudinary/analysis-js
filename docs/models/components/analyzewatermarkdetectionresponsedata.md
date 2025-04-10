# AnalyzeWatermarkDetectionResponseData

## Example Usage

```typescript
import { AnalyzeWatermarkDetectionResponseData } from "@cloudinary/analysis/models/components";

let value: AnalyzeWatermarkDetectionResponseData = {
  analysis: {
    detections: [
      {
        name: "banner",
        confidence: 0.99,
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
| `analysis`                                                                                             | [components.WatermarkDetectionAnalysisData](../../models/components/watermarkdetectionanalysisdata.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |