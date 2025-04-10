# AsyncOperationAcceptedResponseData

## Example Usage

```typescript
import { AsyncOperationAcceptedResponseData } from "@cloudinary/analysis/models/components";

let value: AsyncOperationAcceptedResponseData = {
  taskId: "<id>",
  status: "processing",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `taskId`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [components.TaskStatus](../../models/components/taskstatus.md) | :heavy_check_mark:                                             | The status of an async task                                    |