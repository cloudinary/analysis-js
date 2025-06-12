<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinaryAnalysis } from "@cloudinary/analysis";

const cloudinaryAnalysis = new CloudinaryAnalysis({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAnalysis.analyze.aiVisionGeneral({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    prompts: [
      "Describe this image in detail",
      "Does this image contain an insect?",
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->