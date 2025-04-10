# GoogleLogoDetectionAnalysisData

## Example Usage

```typescript
import { GoogleLogoDetectionAnalysisData } from "@cloudinary/analysis/models/components";

let value: GoogleLogoDetectionAnalysisData = {
  logoAnnotations: [
    {
      mid: "/m/045c7b",
      description: "google",
      score: 0.980325,
      boundingPoly: {
        vertices: [
          {
            x: 12,
            y: 42,
          },
          {
            x: 439,
            y: 42,
          },
          {
            x: 439,
            y: 285,
          },
          {
            x: 12,
            y: 285,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `logoAnnotations`                                                          | [components.LogoAnnotations](../../models/components/logoannotations.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |