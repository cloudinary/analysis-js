# Cloudinary Analyze API (Beta)

Use the Analyze API to analyze any external asset and return details based on the type of analysis requested.

Currently supports the following analysis options:
  * [AI Vision - Tagging](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#tagging_mode)
  * [AI Vision - Moderation](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#moderation_mode)
  * [AI Vision - General](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#general_mode)
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

All URIs are relative to *https://api.cloudinary.com/v2/analysis/CLOUD_NAME/analyze*

| Class | Method | HTTP request | Description |
| ------------ | ------------- | ------------- | ------------- |
*AnalysisApi* | [**analyzeAiVisionGeneral**](docs/Api/AnalysisApi.md#analyzeAiVisionGeneral) | **POST** /ai_vision_general | Analyze - AI Vision General
*AnalysisApi* | [**analyzeAiVisionModeration**](docs/Api/AnalysisApi.md#analyzeAiVisionModeration) | **POST** /ai_vision_moderation | Analyze - AI Vision Moderation
*AnalysisApi* | [**analyzeAiVisionTagging**](docs/Api/AnalysisApi.md#analyzeAiVisionTagging) | **POST** /ai_vision_tagging | Analyze - AI Vision Tagging
*AnalysisApi* | [**analyzeCaptioning**](docs/Api/AnalysisApi.md#analyzeCaptioning) | **POST** /captioning | Analyze - Captioning
*AnalysisApi* | [**analyzeCldFashion**](docs/Api/AnalysisApi.md#analyzeCldFashion) | **POST** /cld_fashion | Analyze - Cld-Fashion
*AnalysisApi* | [**analyzeCldText**](docs/Api/AnalysisApi.md#analyzeCldText) | **POST** /cld_text | Analyze - Cld-Text
*AnalysisApi* | [**analyzeCoco**](docs/Api/AnalysisApi.md#analyzeCoco) | **POST** /coco | Analyze - Coco
*AnalysisApi* | [**analyzeCustom**](docs/Api/AnalysisApi.md#analyzeCustom) | **POST** /custom | Analyze - custom model
*AnalysisApi* | [**analyzeGoogleTagging**](docs/Api/AnalysisApi.md#analyzeGoogleTagging) | **POST** /google_tagging | Analyze - Google Tagging
*AnalysisApi* | [**analyzeHumanAnatomy**](docs/Api/AnalysisApi.md#analyzeHumanAnatomy) | **POST** /human_anatomy | Analyze - Human Anatomy
*AnalysisApi* | [**analyzeLvis**](docs/Api/AnalysisApi.md#analyzeLvis) | **POST** /lvis | Analyze - Lvis
*AnalysisApi* | [**analyzeShopClassifier**](docs/Api/AnalysisApi.md#analyzeShopClassifier) | **POST** /shop_classifier | Analyze - Shop Classifier
*AnalysisApi* | [**analyzeUnidet**](docs/Api/AnalysisApi.md#analyzeUnidet) | **POST** /unidet | Analyze - Unidet


### Models

 - [AIVisionGeneralAnalysisData](docs/Model/AIVisionGeneralAnalysisData.md)
 - [AIVisionGeneralAnalysisDataResponsesInner](docs/Model/AIVisionGeneralAnalysisDataResponsesInner.md)
 - [AIVisionModerationAnalysisData](docs/Model/AIVisionModerationAnalysisData.md)
 - [AIVisionModerationAnalysisDataResponsesInner](docs/Model/AIVisionModerationAnalysisDataResponsesInner.md)
 - [AIVisionTaggingAnalysisData](docs/Model/AIVisionTaggingAnalysisData.md)
 - [AIVisionTaggingAnalysisDataTagsInner](docs/Model/AIVisionTaggingAnalysisDataTagsInner.md)
 - [AnalysisPayload](docs/Model/AnalysisPayload.md)
 - [AnalysisType](docs/Model/AnalysisType.md)
 - [AnalyzeAIVisionGeneralRequest](docs/Model/AnalyzeAIVisionGeneralRequest.md)
 - [AnalyzeAIVisionGeneralRequestAllOf](docs/Model/AnalyzeAIVisionGeneralRequestAllOf.md)
 - [AnalyzeAIVisionGeneralResponse](docs/Model/AnalyzeAIVisionGeneralResponse.md)
 - [AnalyzeAIVisionGeneralResponseAllOf](docs/Model/AnalyzeAIVisionGeneralResponseAllOf.md)
 - [AnalyzeAIVisionModerationRequest](docs/Model/AnalyzeAIVisionModerationRequest.md)
 - [AnalyzeAIVisionModerationRequestAllOf](docs/Model/AnalyzeAIVisionModerationRequestAllOf.md)
 - [AnalyzeAIVisionModerationResponse](docs/Model/AnalyzeAIVisionModerationResponse.md)
 - [AnalyzeAIVisionModerationResponseAllOf](docs/Model/AnalyzeAIVisionModerationResponseAllOf.md)
 - [AnalyzeAIVisionTaggingRequest](docs/Model/AnalyzeAIVisionTaggingRequest.md)
 - [AnalyzeAIVisionTaggingRequestAllOf](docs/Model/AnalyzeAIVisionTaggingRequestAllOf.md)
 - [AnalyzeAIVisionTaggingRequestAllOfTagDefinitions](docs/Model/AnalyzeAIVisionTaggingRequestAllOfTagDefinitions.md)
 - [AnalyzeAIVisionTaggingResponse](docs/Model/AnalyzeAIVisionTaggingResponse.md)
 - [AnalyzeAIVisionTaggingResponseAllOf](docs/Model/AnalyzeAIVisionTaggingResponseAllOf.md)
 - [AnalyzeCaptioningRequest](docs/Model/AnalyzeCaptioningRequest.md)
 - [AnalyzeCaptioningResponse](docs/Model/AnalyzeCaptioningResponse.md)
 - [AnalyzeCaptioningResponseAllOf](docs/Model/AnalyzeCaptioningResponseAllOf.md)
 - [AnalyzeCldFashionRequest](docs/Model/AnalyzeCldFashionRequest.md)
 - [AnalyzeCldFashionResponse](docs/Model/AnalyzeCldFashionResponse.md)
 - [AnalyzeCldFashionResponseAllOf](docs/Model/AnalyzeCldFashionResponseAllOf.md)
 - [AnalyzeCldTextRequest](docs/Model/AnalyzeCldTextRequest.md)
 - [AnalyzeCldTextResponse](docs/Model/AnalyzeCldTextResponse.md)
 - [AnalyzeCldTextResponseAllOf](docs/Model/AnalyzeCldTextResponseAllOf.md)
 - [AnalyzeCocoRequest](docs/Model/AnalyzeCocoRequest.md)
 - [AnalyzeCocoResponse](docs/Model/AnalyzeCocoResponse.md)
 - [AnalyzeCocoResponseAllOf](docs/Model/AnalyzeCocoResponseAllOf.md)
 - [AnalyzeCustomRequest](docs/Model/AnalyzeCustomRequest.md)
 - [AnalyzeCustomRequestAllOf](docs/Model/AnalyzeCustomRequestAllOf.md)
 - [AnalyzeCustomResponse](docs/Model/AnalyzeCustomResponse.md)
 - [AnalyzeCustomResponseAllOf](docs/Model/AnalyzeCustomResponseAllOf.md)
 - [AnalyzeGoogleTaggingRequest](docs/Model/AnalyzeGoogleTaggingRequest.md)
 - [AnalyzeGoogleTaggingResponse](docs/Model/AnalyzeGoogleTaggingResponse.md)
 - [AnalyzeGoogleTaggingResponseAllOf](docs/Model/AnalyzeGoogleTaggingResponseAllOf.md)
 - [AnalyzeHumanAnatomyRequest](docs/Model/AnalyzeHumanAnatomyRequest.md)
 - [AnalyzeHumanAnatomyResponse](docs/Model/AnalyzeHumanAnatomyResponse.md)
 - [AnalyzeHumanAnatomyResponseAllOf](docs/Model/AnalyzeHumanAnatomyResponseAllOf.md)
 - [AnalyzeLvisRequest](docs/Model/AnalyzeLvisRequest.md)
 - [AnalyzeLvisResponse](docs/Model/AnalyzeLvisResponse.md)
 - [AnalyzeLvisResponseAllOf](docs/Model/AnalyzeLvisResponseAllOf.md)
 - [AnalyzeResponse](docs/Model/AnalyzeResponse.md)
 - [AnalyzeShopClassifierRequest](docs/Model/AnalyzeShopClassifierRequest.md)
 - [AnalyzeShopClassifierResponse](docs/Model/AnalyzeShopClassifierResponse.md)
 - [AnalyzeShopClassifierResponseAllOf](docs/Model/AnalyzeShopClassifierResponseAllOf.md)
 - [AnalyzeUnidetRequest](docs/Model/AnalyzeUnidetRequest.md)
 - [AnalyzeUnidetResponse](docs/Model/AnalyzeUnidetResponse.md)
 - [AnalyzeUnidetResponseAllOf](docs/Model/AnalyzeUnidetResponseAllOf.md)
 - [AnalyzeUriRequest](docs/Model/AnalyzeUriRequest.md)
 - [BaseAnalyzeRequest](docs/Model/BaseAnalyzeRequest.md)
 - [BaseAnalyzeResponse](docs/Model/BaseAnalyzeResponse.md)
 - [CaptioningAnalysisData](docs/Model/CaptioningAnalysisData.md)
 - [CaptioningAnalysisDataData](docs/Model/CaptioningAnalysisDataData.md)
 - [CldFashionAnalysisData](docs/Model/CldFashionAnalysisData.md)
 - [CldTextAnalysisData](docs/Model/CldTextAnalysisData.md)
 - [CocoAnalysisData](docs/Model/CocoAnalysisData.md)
 - [CustomAnalysisData](docs/Model/CustomAnalysisData.md)
 - [ErrorResponse](docs/Model/ErrorResponse.md)
 - [ErrorResponseError](docs/Model/ErrorResponseError.md)
 - [Feature](docs/Model/Feature.md)
 - [GoogleTaggingAnalysisData](docs/Model/GoogleTaggingAnalysisData.md)
 - [GoogleTaggingAnalysisDataLabelAnnotations](docs/Model/GoogleTaggingAnalysisDataLabelAnnotations.md)
 - [GoogleTaggingAnalysisDataLabelAnnotationsLabelsInner](docs/Model/GoogleTaggingAnalysisDataLabelAnnotationsLabelsInner.md)
 - [HumanAnatomyAnalysisData](docs/Model/HumanAnatomyAnalysisData.md)
 - [Limits](docs/Model/Limits.md)
 - [LimitsUsage](docs/Model/LimitsUsage.md)
 - [LvisAnalysisData](docs/Model/LvisAnalysisData.md)
 - [ShopClassifierAnalysisData](docs/Model/ShopClassifierAnalysisData.md)
 - [Source](docs/Model/Source.md)
 - [UnidetAnalysisData](docs/Model/UnidetAnalysisData.md)


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
