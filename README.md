# Cloudinary Analyze API (Beta)

Use the Analyze API to analyze any external asset and return details based on the type of analysis requested.

Currently supports the following analysis options:
  * [Google tagging](https://cloudinary.com/documentation/google_auto_tagging_addon)
  * [Captioning](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
  * [Cld Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Cld Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)
  * [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)

  **Notes**: 
  * The Analyze API is currently in development and is available as a Public Beta, which means we value your feedback, so please feel free to [share any thoughts with us](https://support.cloudinary.com/hc/en-us/requests/new).
  * The analysis options require an active subscription to the relevant add-on. Learn more about [registering for add-ons](https://cloudinary.com/documentation/cloudinary_add_ons#registering_for_add_ons).

  The API supports both Basic Authentication using your Cloudinary API Key and API Secret (which can be found on the Dashboard page of your [Cloudinary Console](https://console.cloudinary.com/pm)) or OAuth2 ([Contact support](https://support.cloudinary.com/hc/en-us/requests/new) for more information regarding OAuth).


### API Endpoints

All URIs are relative to *https://api.cloudinary.com/v2*

| Class | Method | HTTP request | Description |
| ------------ | ------------- | ------------- | ------------- |
*AnalysisApi* | [**analyzeUri**](docs/Api/AnalysisApi.md#analyzeUri) | **POST** /{cloud_name}/analysis/analyze/uri | Analyze an asset


### Models

 - [AnalysisPayload](docs/Model/AnalysisPayload.md)
 - [AnalyzeResponse](docs/Model/AnalyzeResponse.md)
 - [AnalyzeUriRequest](docs/Model/AnalyzeUriRequest.md)
 - [AnalyzeUriRequestParameters](docs/Model/AnalyzeUriRequestParameters.md)
 - [CustomParameters](docs/Model/CustomParameters.md)
 - [ErrorResponse](docs/Model/ErrorResponse.md)
 - [ErrorResponseError](docs/Model/ErrorResponseError.md)
 - [TagDefinition](docs/Model/TagDefinition.md)
 - [VQAGeneralParameters](docs/Model/VQAGeneralParameters.md)
 - [VQAModerationParameters](docs/Model/VQAModerationParameters.md)
 - [VQATaggingParameters](docs/Model/VQATaggingParameters.md)



## Installation
```bash
npm install @cloudinary/analysis
```

## Get Help
If you run into an issue or have a question, you can either:
- Issues related to the SDK: [Open a Github issue](https://github.com/cloudinary/media-editing-js/issues)
- Issues related to your account: [Open a support ticket](https://cloudinary.com/contact)

## Additional Resources
- [Cloudinary Transformation and REST API References](https://cloudinary.com/documentation/cloudinary_references): Comprehensive references, including syntax and examples for all SDKs.
- [MediaJams.dev](https://mediajams.dev/): Bite-size use-case tutorials written by and for Cloudinary Developers
- [DevJams](https://www.youtube.com/playlist?list=PL8dVGjLA2oMr09amgERARsZyrOz_sPvqw): Cloudinary developer podcasts on YouTube.
- [Cloudinary Academy](https://training.cloudinary.com/): Free self-paced courses, instructor-led virtual courses, and on-site courses.
- [Code Explorers and Feature Demos](https://cloudinary.com/documentation/code_explorers_demos_index): A one-stop shop for all code explorers, Postman collections, and feature demos found in the docs.
- [Cloudinary Roadmap](https://cloudinary.com/roadmap): Your chance to follow, vote, or suggest what Cloudinary should develop next.
- [Cloudinary Facebook Community](https://www.facebook.com/groups/CloudinaryCommunity): Learn from and offer help to other Cloudinary developers.
- [Cloudinary Account Registration](https://cloudinary.com/users/register/free): Free Cloudinary account registration.
- [Cloudinary Website](https://cloudinary.com)


## Licence
Released under the MIT license.
