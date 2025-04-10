# ErrorObject

## Example Usage

```typescript
import { ErrorObject } from "@cloudinary/analysis/models/components";

let value: ErrorObject = {
  category: "user_error",
  code: "MA_00001",
  message: "missing parameters",
  details: {},
  requestId: "17c3b70c5096df0e77e838323abb7029",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `category`                                                           | [components.ErrorCategory](../../models/components/errorcategory.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `code`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | MA_00001                                                             |
| `message`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | missing parameters                                                   |
| `details`                                                            | [components.Details](../../models/components/details.md)             | :heavy_minus_sign:                                                   | N/A                                                                  | {<br/>"parameters": [<br/>"uri",<br/>"analysis_type"<br/>]<br/>}     |
| `requestId`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | 17c3b70c5096df0e77e838323abb7029                                     |