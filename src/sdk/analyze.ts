/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { analyzeAiVisionGeneral } from "../funcs/analyzeAiVisionGeneral.js";
import { analyzeAiVisionModeration } from "../funcs/analyzeAiVisionModeration.js";
import { analyzeAiVisionTagging } from "../funcs/analyzeAiVisionTagging.js";
import { analyzeCaptioning } from "../funcs/analyzeCaptioning.js";
import { analyzeCldFashion } from "../funcs/analyzeCldFashion.js";
import { analyzeCldText } from "../funcs/analyzeCldText.js";
import { analyzeCoco } from "../funcs/analyzeCoco.js";
import { analyzeGoogleLogoDetection } from "../funcs/analyzeGoogleLogoDetection.js";
import { analyzeGoogleTagging } from "../funcs/analyzeGoogleTagging.js";
import { analyzeHumanAnatomy } from "../funcs/analyzeHumanAnatomy.js";
import { analyzeImageQuality } from "../funcs/analyzeImageQuality.js";
import { analyzeLvis } from "../funcs/analyzeLvis.js";
import { analyzeShopClassifier } from "../funcs/analyzeShopClassifier.js";
import { analyzeUnidet } from "../funcs/analyzeUnidet.js";
import { analyzeWatermarkDetection } from "../funcs/analyzeWatermarkDetection.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Analyze extends ClientSDK {
  /**
   * Analyze - AI Vision General
   *
   * @remarks
   * The General mode serves a wide array of applications by providing detailed answers to diverse questions about an image. Users can inquire about any aspect of an image, such as identifying objects, understanding scenes, or interpreting text within the image.
   */
  async aiVisionGeneral(
    request: components.AnalyzeAIVisionGeneralRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeAiVisionGeneralResponse> {
    return unwrapAsync(analyzeAiVisionGeneral(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - AI Vision Moderation
   *
   * @remarks
   * The Moderation mode accepts multiple questions about an image, to which the response provides concise answers of "yes," "no," or "unknown." This functionality allows for a nuanced evaluation of whether the image adheres to specific content policies, creative specs, or aesthetic criteria.
   */
  async aiVisionModeration(
    request: components.AnalyzeAIVisionModerationRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeAiVisionModerationResponse> {
    return unwrapAsync(analyzeAiVisionModeration(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - AI Vision Tagging
   *
   * @remarks
   * The Tagging mode accepts a list of tag names along with their corresponding descriptions. If the image matches the description, which may encompass various elements, it will be appropriately tagged. This approach enables customers to align with their own brand taxonomy, offering a dynamic, flexible, and open method for image classification.
   */
  async aiVisionTagging(
    request: components.AnalyzeAIVisionTaggingRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeAiVisionTaggingResponse> {
    return unwrapAsync(analyzeAiVisionTagging(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Captioning
   *
   * @remarks
   * Provides a caption for an image.
   */
  async captioning(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeCaptioningResponse> {
    return unwrapAsync(analyzeCaptioning(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Cld-Fashion
   *
   * @remarks
   * Analyze an image using the [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's fashion model is specifically dedicated to items of clothing. The response includes attributes of the clothing identified, for example whether the garment contains pockets, its material and the fastenings used.
   */
  async cldFashion(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeCldFashionResponse> {
    return unwrapAsync(analyzeCldFashion(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Cld-Text
   *
   * @remarks
   * Analyze an image using the [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's text model tells you if your image includes text, and where it's located. Used with image tagging, you can then search for images that contain blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or specify a crop that avoids the text.
   */
  async cldText(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeCldTextResponse> {
    return unwrapAsync(analyzeCldText(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Coco
   *
   * @remarks
   * Analyze an image using the [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model contains just 80 common objects.
   */
  async coco(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeCocoResponse> {
    return unwrapAsync(analyzeCoco(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Google Logo Detection
   *
   * @remarks
   * Detects popular product logos within an image.
   */
  async googleLogoDetection(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<components.AnalyzeGoogleLogoDetectionResponse> {
    return unwrapAsync(analyzeGoogleLogoDetection(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Google Tagging
   *
   * @remarks
   * Provides tags for an image using Google's tagging service.
   */
  async googleTagging(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeGoogleTaggingResponse> {
    return unwrapAsync(analyzeGoogleTagging(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Human Anatomy
   *
   * @remarks
   * Analyze an image using the [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's human anatomy model identifies parts of the human body in an image. It works best when the majority of a human body is detected in the image.
   */
  async humanAnatomy(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeHumanAnatomyResponse> {
    return unwrapAsync(analyzeHumanAnatomy(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Image Quality Analysis
   *
   * @remarks
   * Analyze an image using the [Image Quality Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#image_quality_analysis) model.
   */
  async imageQuality(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeImageQualityResponse> {
    return unwrapAsync(analyzeImageQuality(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Lvis
   *
   * @remarks
   * Analyze an image using the [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Large Vocabulary Instance Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.
   */
  async lvis(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeLvisResponse> {
    return unwrapAsync(analyzeLvis(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Shop Classifier
   *
   * @remarks
   * Analyze an image using the [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary's shop classifier model detects if the image is a product image taken in a studio, or if it's a natural image.
   */
  async shopClassifier(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeShopClassifierResponse> {
    return unwrapAsync(analyzeShopClassifier(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Unidet
   *
   * @remarks
   * Analyze an image using the [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a unified model, combining a number of object models, including [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the wild.
   */
  async unidet(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeUnidetResponse> {
    return unwrapAsync(analyzeUnidet(
      this,
      request,
      options,
    ));
  }

  /**
   * Analyze - Watermark Detection
   *
   * @remarks
   * Analyze an image using the [Watermark Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection) detection model.
   */
  async watermarkDetection(
    request: components.BaseAnalyzeRequest,
    options?: RequestOptions,
  ): Promise<operations.AnalyzeWatermarkDetectionResponse> {
    return unwrapAsync(analyzeWatermarkDetection(
      this,
      request,
      options,
    ));
  }
}
