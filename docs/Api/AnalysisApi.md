# AnalysisApi

All URIs are relative to *https://api.cloudinary.com/v2/analysis/CLOUD_NAME/analyze*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeAiVisionGeneral**](AnalysisApi.md#analyzeAiVisionGeneral) | **POST** /ai_vision_general | Analyze - AI Vision General
[**analyzeAiVisionModeration**](AnalysisApi.md#analyzeAiVisionModeration) | **POST** /ai_vision_moderation | Analyze - AI Vision Moderation
[**analyzeAiVisionTagging**](AnalysisApi.md#analyzeAiVisionTagging) | **POST** /ai_vision_tagging | Analyze - AI Vision Tagging
[**analyzeCaptioning**](AnalysisApi.md#analyzeCaptioning) | **POST** /captioning | Analyze - Captioning
[**analyzeCldFashion**](AnalysisApi.md#analyzeCldFashion) | **POST** /cld_fashion | Analyze - Cld-Fashion
[**analyzeCldText**](AnalysisApi.md#analyzeCldText) | **POST** /cld_text | Analyze - Cld-Text
[**analyzeCoco**](AnalysisApi.md#analyzeCoco) | **POST** /coco | Analyze - Coco
[**analyzeCustom**](AnalysisApi.md#analyzeCustom) | **POST** /custom | Analyze - custom model
[**analyzeGoogleTagging**](AnalysisApi.md#analyzeGoogleTagging) | **POST** /google_tagging | Analyze - Google Tagging
[**analyzeHumanAnatomy**](AnalysisApi.md#analyzeHumanAnatomy) | **POST** /human_anatomy | Analyze - Human Anatomy
[**analyzeLvis**](AnalysisApi.md#analyzeLvis) | **POST** /lvis | Analyze - Lvis
[**analyzeShopClassifier**](AnalysisApi.md#analyzeShopClassifier) | **POST** /shop_classifier | Analyze - Shop Classifier
[**analyzeUnidet**](AnalysisApi.md#analyzeUnidet) | **POST** /unidet | Analyze - Unidet


# **analyzeAiVisionGeneral**
> AnalyzeAIVisionGeneralResponse analyzeAiVisionGeneral(analyzeAIVisionGeneralRequest)

The General mode serves a wide array of applications by providing detailed answers to diverse questions about an image. Users can inquire about any aspect of an image, such as identifying objects, understanding scenes, or interpreting text within the image.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeAIVisionGeneralResponse,
    type AnalyzeAIVisionGeneralRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeAIVisionGeneralRequest | A JSON object containing request parameters
const analyzeAIVisionGeneralRequest: AnalyzeAIVisionGeneralRequest = null;

// Example using parameters
apiInstance.analyzeAiVisionGeneral(analyzeAIVisionGeneralRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeAIVisionGeneralRequest** | **AnalyzeAIVisionGeneralRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeAIVisionGeneralResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeAiVisionModeration**
> AnalyzeAIVisionModerationResponse analyzeAiVisionModeration(analyzeAIVisionModerationRequest)

The Moderation mode accepts multiple questions about an image, to which the response provides concise answers of \"yes,\" \"no,\" or \"unknown.\" This functionality allows for a nuanced evaluation of whether the image adheres to specific content policies, creative specs, or aesthetic criteria.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeAIVisionModerationRequest,
    type AnalyzeAIVisionModerationResponse,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeAIVisionModerationRequest | A JSON object containing request parameters
const analyzeAIVisionModerationRequest: AnalyzeAIVisionModerationRequest = null;

// Example using parameters
apiInstance.analyzeAiVisionModeration(analyzeAIVisionModerationRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeAIVisionModerationRequest** | **AnalyzeAIVisionModerationRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeAIVisionModerationResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeAiVisionTagging**
> AnalyzeAIVisionTaggingResponse analyzeAiVisionTagging(analyzeAIVisionTaggingRequest)

The Tagging mode accepts a list of tag names along with their corresponding descriptions. If the image matches the description, which may encompass various elements, it will be appropriately tagged. This approach enables customers to align with their own brand taxonomy, offering a dynamic, flexible, and open method for image classification.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeAIVisionTaggingResponse,
    type AnalyzeAIVisionTaggingRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeAIVisionTaggingRequest | A JSON object containing request parameters
const analyzeAIVisionTaggingRequest: AnalyzeAIVisionTaggingRequest = null;

// Example using parameters
apiInstance.analyzeAiVisionTagging(analyzeAIVisionTaggingRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeAIVisionTaggingRequest** | **AnalyzeAIVisionTaggingRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeAIVisionTaggingResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeCaptioning**
> AnalyzeCaptioningResponse analyzeCaptioning(analyzeCaptioningRequest)

Provides a caption for an image.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeCaptioningRequest,
    type AnalyzeCaptioningResponse,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeCaptioningRequest | A JSON object containing request parameters
const analyzeCaptioningRequest: AnalyzeCaptioningRequest = null;

// Example using parameters
apiInstance.analyzeCaptioning(analyzeCaptioningRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeCaptioningRequest** | **AnalyzeCaptioningRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeCaptioningResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeCldFashion**
> AnalyzeCldFashionResponse analyzeCldFashion(analyzeCldFashionRequest)

Analyze an image using the [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s fashion model is specifically dedicated to items of clothing. The response includes attributes of the clothing identified, for example whether the garment contains pockets, its material and the fastenings used.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeCldFashionResponse,
    type AnalyzeCldFashionRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeCldFashionRequest | A JSON object containing request parameters
const analyzeCldFashionRequest: AnalyzeCldFashionRequest = null;

// Example using parameters
apiInstance.analyzeCldFashion(analyzeCldFashionRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeCldFashionRequest** | **AnalyzeCldFashionRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeCldFashionResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeCldText**
> AnalyzeCldTextResponse analyzeCldText(analyzeCldTextRequest)

Analyze an image using the [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s text model tells you if your image includes text, and where it\'s located. Used with image tagging, you can then search for images that contain blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or specify a crop that avoids the text.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeCldTextResponse,
    type AnalyzeCldTextRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeCldTextRequest | A JSON object containing request parameters
const analyzeCldTextRequest: AnalyzeCldTextRequest = null;

// Example using parameters
apiInstance.analyzeCldText(analyzeCldTextRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeCldTextRequest** | **AnalyzeCldTextRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeCldTextResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeCoco**
> AnalyzeCocoResponse analyzeCoco(analyzeCocoRequest)

Analyze an image using the [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model contains just 80 common objects.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeCocoRequest,
    type AnalyzeCocoResponse,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeCocoRequest | A JSON object containing request parameters
const analyzeCocoRequest: AnalyzeCocoRequest = null;

// Example using parameters
apiInstance.analyzeCoco(analyzeCocoRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeCocoRequest** | **AnalyzeCocoRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeCocoResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeCustom**
> AnalyzeCustomResponse analyzeCustom(analyzeCustomRequest)

TODO

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeCustomRequest,
    type AnalyzeCustomResponse,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeCustomRequest | A JSON object containing request parameters
const analyzeCustomRequest: AnalyzeCustomRequest = null;

// Example using parameters
apiInstance.analyzeCustom(analyzeCustomRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeCustomRequest** | **AnalyzeCustomRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeCustomResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeGoogleTagging**
> AnalyzeGoogleTaggingResponse analyzeGoogleTagging(analyzeGoogleTaggingRequest)

Provides tags for an image using Google\'s tagging service.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeGoogleTaggingResponse,
    type AnalyzeGoogleTaggingRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeGoogleTaggingRequest | A JSON object containing request parameters
const analyzeGoogleTaggingRequest: AnalyzeGoogleTaggingRequest = null;

// Example using parameters
apiInstance.analyzeGoogleTagging(analyzeGoogleTaggingRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeGoogleTaggingRequest** | **AnalyzeGoogleTaggingRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeGoogleTaggingResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeHumanAnatomy**
> AnalyzeHumanAnatomyResponse analyzeHumanAnatomy(analyzeHumanAnatomyRequest)

Analyze an image using the [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s human anatomy model identifies parts of the human body in an image. It works best when the majority of a human body is detected in the image.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeHumanAnatomyResponse,
    type AnalyzeHumanAnatomyRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeHumanAnatomyRequest | A JSON object containing request parameters
const analyzeHumanAnatomyRequest: AnalyzeHumanAnatomyRequest = null;

// Example using parameters
apiInstance.analyzeHumanAnatomy(analyzeHumanAnatomyRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeHumanAnatomyRequest** | **AnalyzeHumanAnatomyRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeHumanAnatomyResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeLvis**
> AnalyzeLvisResponse analyzeLvis(analyzeLvisRequest)

Analyze an image using the [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Large Vocabulary Instance Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeLvisResponse,
    type AnalyzeLvisRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeLvisRequest | A JSON object containing request parameters
const analyzeLvisRequest: AnalyzeLvisRequest = null;

// Example using parameters
apiInstance.analyzeLvis(analyzeLvisRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeLvisRequest** | **AnalyzeLvisRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeLvisResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeShopClassifier**
> AnalyzeShopClassifierResponse analyzeShopClassifier(analyzeShopClassifierRequest)

Analyze an image using the [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s shop classifier model detects if the image is a product image taken in a studio, or if it\'s a natural image.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeShopClassifierResponse,
    type AnalyzeShopClassifierRequest,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeShopClassifierRequest | A JSON object containing request parameters
const analyzeShopClassifierRequest: AnalyzeShopClassifierRequest = null;

// Example using parameters
apiInstance.analyzeShopClassifier(analyzeShopClassifierRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeShopClassifierRequest** | **AnalyzeShopClassifierRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeShopClassifierResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **analyzeUnidet**
> AnalyzeUnidetResponse analyzeUnidet(analyzeUnidetRequest)

Analyze an image using the [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a unified model, combining a number of object models, including [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the wild.

### Example

```typescript
import {
    AnalysisApi,
    ICloudinaryUrlConfig,
    type AnalyzeUnidetRequest,
    type AnalyzeUnidetResponse,
    type ErrorResponse,
} from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// AnalyzeUnidetRequest | A JSON object containing request parameters
const analyzeUnidetRequest: AnalyzeUnidetRequest = null;

// Example using parameters
apiInstance.analyzeUnidet(analyzeUnidetRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analyzeUnidetRequest** | **AnalyzeUnidetRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeUnidetResponse**

### Authorization

[OAuth2](README.md#OAuth2), [basicAuth](README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis succeeded |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**429** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

