# TagDefinitions

## Example Usage

```typescript
import { TagDefinitions } from "@cloudinary/analysis/models/components";

let value: TagDefinitions = {
  name: "cigarettes",
  description: "Does the image contain a pack of cigarettes?",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the tag to apply. This can be any string and does not affect the decision process | cigarettes                                                                                    |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A description to be used by the AI to determine whether the tag should be applied             | Does the image contain a pack of cigarettes?                                                  |