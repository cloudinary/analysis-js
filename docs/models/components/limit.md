# Limit

## Example Usage

```typescript
import { Limit } from "@cloudinary/analysis/models/components";

let value: Limit = {
  type: "google_tagging",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.Feature](../../models/components/feature.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usedByRequest`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The amount of quota used by the current request                                               |
| `remaining`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The remaining quota                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total quota limit                                                                         |
| `resetTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time in UTC when the limit will be reset                                                      |