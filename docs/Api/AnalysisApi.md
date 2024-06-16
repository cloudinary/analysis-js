# AnalysisApi

All URIs are relative to *https://api.cloudinary.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyzeUri**](AnalysisApi.md#analyzeUri) | **POST** /{cloud_name}/analysis/analyze/uri | Analyze an asset


# **analyzeUri**
> AnalyzeResponse analyzeUri(cloudName, analyzeUriRequest)

Analyzes an asset with the requested analysis type. 

### Example

```typescript
import { AnalysisApi, ICloudinaryUrlConfig,  } from '@cloudinary/analysis';

// Configuration can be passed in:
const configuration: ICloudinaryUrlConfig = {cloudinaryUrl: '<cloudinary_url>'}
const apiInstance = new AnalysisApi(configuration);

// Or by default an environment variable can be used:
// const apiInstance = new AnalysisApi();

// string | The name of your Cloudinary cloud
const cloudName = "your-cloud-name";
// AnalyzeUriRequest | A JSON object containing request parameters
const analyzeUriRequest = {
    uri: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    analysisType: "captioning",
    parameters: {
      vqaTagging: {
        tagDefinitions: [
          {
            name: "cigarettes",
            description: "A pack of cigarettes",
          },
        ],
        multiLabel: false,
      },
      vqaModeration: {
        rejectionQuestions: [
          "Does the image contain any violent activity?",
        ],
      },
      vqaGeneral: {
        prompts: ["Please describe this image in detail","Does this image contain an animal?"],
      },
      custom: {
        modelName: "my_model",
        modelVersion: 1,
      },
    },
  };

// Example using parameters
apiInstance.analyzeUri(cloudName, analyzeUriRequest)
    .then((result) => { console.log('API called successfully. Returned data: ' + JSON.stringify(result)); })
    .catch((error) => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudName** | **string**| The name of your Cloudinary cloud |
 **analyzeUriRequest** | **AnalyzeUriRequest**| A JSON object containing request parameters |


### Return type

**AnalyzeResponse**

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
**404** | Asset not found |  -  |
**420** | Rate limited |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

