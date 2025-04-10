# GoogleTaggingAnalysisData

## Example Usage

```typescript
import { GoogleTaggingAnalysisData } from "@cloudinary/analysis/models/components";

let value: GoogleTaggingAnalysisData = {
  labelAnnotations: {
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
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `labelAnnotations`                                                                     | [components.LabelAnnotations](../../models/components/labelannotations.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    | {<br/>"labels": [<br/>{<br/>"label": "cat",<br/>"score": 0.9<br/>},<br/>{<br/>"label": "table",<br/>"score": 0.8<br/>}<br/>]<br/>} |