# LabelAnnotations

## Example Usage

```typescript
import { LabelAnnotations } from "@cloudinary/analysis/models/components";

let value: LabelAnnotations = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `labels`                                               | [components.Label](../../models/components/label.md)[] | :heavy_minus_sign:                                     | N/A                                                    |