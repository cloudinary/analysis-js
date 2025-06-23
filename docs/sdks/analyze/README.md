# Analyze
(*analyze*)

## Overview

Use the Analyze API to analyze any external asset and return details based on the type of analysis requested.

### Available Operations

* [aiVisionGeneral](#aivisiongeneral) - Analyze - AI Vision General
* [aiVisionModeration](#aivisionmoderation) - Analyze - AI Vision Moderation
* [aiVisionTagging](#aivisiontagging) - Analyze - AI Vision Tagging
* [captioning](#captioning) - Analyze - Captioning
* [cldFashion](#cldfashion) - Analyze - Cld-Fashion
* [cldText](#cldtext) - Analyze - Cld-Text
* [coco](#coco) - Analyze - Coco
* [googleLogoDetection](#googlelogodetection) - Analyze - Google Logo Detection
* [googleTagging](#googletagging) - Analyze - Google Tagging
* [humanAnatomy](#humananatomy) - Analyze - Human Anatomy
* [imageQuality](#imagequality) - Analyze - Image Quality Analysis
* [lvis](#lvis) - Analyze - Lvis
* [shopClassifier](#shopclassifier) - Analyze - Shop Classifier
* [unidet](#unidet) - Analyze - Unidet
* [watermarkDetection](#watermarkdetection) - Analyze - Watermark Detection

## aiVisionGeneral

The General mode serves a wide array of applications by providing detailed answers to diverse questions about an image. Users can inquire about any aspect of an image, such as identifying objects, understanding scenes, or interpreting text within the image.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeAiVisionGeneral } from "@cloudinary/analysis/funcs/analyzeAiVisionGeneral.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeAiVisionGeneral(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    prompts: [
      "Describe this image in detail",
      "Does this image contain an insect?",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeAiVisionGeneral failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AnalyzeAIVisionGeneralRequest](../../models/components/analyzeaivisiongeneralrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeAiVisionGeneralResponse](../../models/operations/analyzeaivisiongeneralresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## aiVisionModeration

The Moderation mode accepts multiple questions about an image, to which the response provides concise answers of "yes," "no," or "unknown." This functionality allows for a nuanced evaluation of whether the image adheres to specific content policies, creative specs, or aesthetic criteria.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.aiVisionModeration({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    rejectionQuestions: [
      "Does this image contain any violent activity?",
      "Is there any nudity in the image?",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeAiVisionModeration } from "@cloudinary/analysis/funcs/analyzeAiVisionModeration.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeAiVisionModeration(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    rejectionQuestions: [
      "Does this image contain any violent activity?",
      "Is there any nudity in the image?",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeAiVisionModeration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AnalyzeAIVisionModerationRequest](../../models/components/analyzeaivisionmoderationrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeAiVisionModerationResponse](../../models/operations/analyzeaivisionmoderationresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## aiVisionTagging

The Tagging mode accepts a list of tag names along with their corresponding descriptions. If the image matches the description, which may encompass various elements, it will be appropriately tagged. This approach enables customers to align with their own brand taxonomy, offering a dynamic, flexible, and open method for image classification.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.aiVisionTagging({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    tagDefinitions: [
      {
        name: "cigarettes",
        description: "Does the image contain a pack of cigarettes?",
      },
      {
        name: "furniture",
        description: "Does the image contain any tables, chairs, couches or sofas?",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeAiVisionTagging } from "@cloudinary/analysis/funcs/analyzeAiVisionTagging.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeAiVisionTagging(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    tagDefinitions: [
      {
        name: "cigarettes",
        description: "Does the image contain a pack of cigarettes?",
      },
      {
        name: "furniture",
        description: "Does the image contain any tables, chairs, couches or sofas?",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeAiVisionTagging failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AnalyzeAIVisionTaggingRequest](../../models/components/analyzeaivisiontaggingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeAiVisionTaggingResponse](../../models/operations/analyzeaivisiontaggingresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## captioning

Provides a caption for an image.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.captioning({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeCaptioning } from "@cloudinary/analysis/funcs/analyzeCaptioning.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeCaptioning(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeCaptioning failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeCaptioningResponse](../../models/operations/analyzecaptioningresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## cldFashion

Analyze an image using the [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's fashion model is specifically dedicated to items of clothing. The response includes attributes of the clothing identified, for example whether the garment contains pockets, its material and the fastenings used.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.cldFashion({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeCldFashion } from "@cloudinary/analysis/funcs/analyzeCldFashion.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeCldFashion(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeCldFashion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeCldFashionResponse](../../models/operations/analyzecldfashionresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## cldText

Analyze an image using the [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's text model tells you if your image includes text, and where it's located. Used with image tagging, you can then search for images that contain blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or specify a crop that avoids the text.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.cldText({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeCldText } from "@cloudinary/analysis/funcs/analyzeCldText.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeCldText(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeCldText failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeCldTextResponse](../../models/operations/analyzecldtextresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## coco

Analyze an image using the [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model contains just 80 common objects.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.coco({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeCoco } from "@cloudinary/analysis/funcs/analyzeCoco.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeCoco(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeCoco failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeCocoResponse](../../models/operations/analyzecocoresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## googleLogoDetection

Detects popular product logos within an image.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.googleLogoDetection({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeGoogleLogoDetection } from "@cloudinary/analysis/funcs/analyzeGoogleLogoDetection.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeGoogleLogoDetection(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeGoogleLogoDetection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AnalyzeGoogleLogoDetectionResponse](../../models/components/analyzegooglelogodetectionresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## googleTagging

Provides tags for an image using Google's tagging service.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.googleTagging({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeGoogleTagging } from "@cloudinary/analysis/funcs/analyzeGoogleTagging.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeGoogleTagging(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeGoogleTagging failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeGoogleTaggingResponse](../../models/operations/analyzegoogletaggingresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## humanAnatomy

Analyze an image using the [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's human anatomy model identifies parts of the human body in an image. It works best when the majority of a human body is detected in the image.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.humanAnatomy({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeHumanAnatomy } from "@cloudinary/analysis/funcs/analyzeHumanAnatomy.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeHumanAnatomy(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeHumanAnatomy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeHumanAnatomyResponse](../../models/operations/analyzehumananatomyresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## imageQuality

Analyze an image using the [Image Quality Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#image_quality_analysis) model.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.imageQuality({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeImageQuality } from "@cloudinary/analysis/funcs/analyzeImageQuality.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeImageQuality(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeImageQuality failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeImageQualityResponse](../../models/operations/analyzeimagequalityresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## lvis

Analyze an image using the [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Large Vocabulary Instance Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.lvis({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeLvis } from "@cloudinary/analysis/funcs/analyzeLvis.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeLvis(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeLvis failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeLvisResponse](../../models/operations/analyzelvisresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## shopClassifier

Analyze an image using the [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's shop classifier model detects if the image is a product image taken in a studio, or if it's a natural image.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.shopClassifier({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeShopClassifier } from "@cloudinary/analysis/funcs/analyzeShopClassifier.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeShopClassifier(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeShopClassifier failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeShopClassifierResponse](../../models/operations/analyzeshopclassifierresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## unidet

Analyze an image using the [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a unified model, combining a number of object models, including [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the wild.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.unidet({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeUnidet } from "@cloudinary/analysis/funcs/analyzeUnidet.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeUnidet(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeUnidet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeUnidetResponse](../../models/operations/analyzeunidetresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## watermarkDetection

Analyze an image using the [Watermark Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection) detection model.

### Example Usage

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
  const result = await cloudinaryAnalysis.analyze.watermarkDetection({
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAnalysisCore } from "@cloudinary/analysis/core.js";
import { analyzeWatermarkDetection } from "@cloudinary/analysis/funcs/analyzeWatermarkDetection.js";

// Use `CloudinaryAnalysisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAnalysis = new CloudinaryAnalysisCore({
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await analyzeWatermarkDetection(cloudinaryAnalysis, {
    source: {
      uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("analyzeWatermarkDetection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BaseAnalyzeRequest](../../models/components/baseanalyzerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AnalyzeWatermarkDetectionResponse](../../models/operations/analyzewatermarkdetectionresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404              | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |