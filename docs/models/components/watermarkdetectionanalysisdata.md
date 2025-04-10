# WatermarkDetectionAnalysisData

## Example Usage

```typescript
import { WatermarkDetectionAnalysisData } from "@cloudinary/analysis/models/components";

let value: WatermarkDetectionAnalysisData = {
  detections: [
    {
      name: "banner",
      confidence: 0.99,
    },
  ],
  modelVersion: 1,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `detections`                                                     | [components.Detections](../../models/components/detections.md)[] | :heavy_minus_sign:                                               | N/A                                                              | [<br/>{<br/>"name": "banner",<br/>"confidence": 0.99<br/>}<br/>] |
| `modelVersion`                                                   | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 1                                                                |