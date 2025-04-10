# AIVisionTaggingAnalysisData

## Example Usage

```typescript
import { AIVisionTaggingAnalysisData } from "@cloudinary/analysis/models/components";

let value: AIVisionTaggingAnalysisData = {
  tags: [
    {
      name: "cat",
    },
    {
      name: "table",
    },
  ],
  modelVersion: 1,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `tags`                                               | [components.Tags](../../models/components/tags.md)[] | :heavy_check_mark:                                   | N/A                                                  | [<br/>{<br/>"name": "cat"<br/>},<br/>{<br/>"name": "table"<br/>}<br/>] |
| `modelVersion`                                       | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  | 1                                                    |