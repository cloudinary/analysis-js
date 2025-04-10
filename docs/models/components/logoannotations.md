# LogoAnnotations

## Example Usage

```typescript
import { LogoAnnotations } from "@cloudinary/analysis/models/components";

let value: LogoAnnotations = {
  description: "crocodile until pish programme moor woefully weird",
  score: 6490.09,
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