# LogoAnnotation

## Example Usage

```typescript
import { LogoAnnotation } from "@cloudinary/analysis/models/components";

let value: LogoAnnotation = {
  description:
    "whenever grave rebel kettledrum outlaw access replacement empty kinase",
  score: 9727.12,
  boundingPoly: {},
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `mid`                                                              | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `score`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `boundingPoly`                                                     | [components.BoundingPoly](../../models/components/boundingpoly.md) | :heavy_check_mark:                                                 | N/A                                                                |