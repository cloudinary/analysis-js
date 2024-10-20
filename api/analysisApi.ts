/**
 * Analyze API (Beta)
 * Use the Analyze API to analyze any external asset and return details based on the type of analysis requested.  Currently supports the following analysis options:   * [AI Vision - Tagging](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#tagging_mode)   * [AI Vision - Moderation](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#moderation_mode)   * [AI Vision - General](https://cloudinary.com/documentation/cloudinary_ai_vision_addon#general_mode)   * [Google tagging](https://cloudinary.com/documentation/google_auto_tagging_addon)   * [Captioning](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)   * [Cld Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Cld Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)    **Notes**:    * The Analyze API is currently in development and is available as a Public Beta, which means we value your feedback, so please feel free to [share any thoughts with us](https://support.cloudinary.com/hc/en-us/requests/new).   * The analysis options require an active subscription to the relevant add-on. Learn more about [registering for add-ons](https://cloudinary.com/documentation/cloudinary_add_ons#registering_for_add_ons).    The API supports both Basic Authentication using your Cloudinary API Key and API Secret (which can be found on the Dashboard page of your [Cloudinary Console](https://console.cloudinary.com/pm)) or OAuth2 ([Contact support](https://support.cloudinary.com/hc/en-us/requests/new) for more information regarding OAuth). 
 */


import localVarRequest from 'request';
import http from 'http';
import 'dotenv/config';

/* tslint:disable:no-unused-locals */
import { AnalyzeAIVisionGeneralRequest } from '../model/analyzeAIVisionGeneralRequest';
import { AnalyzeAIVisionGeneralResponse } from '../model/analyzeAIVisionGeneralResponse';
import { AnalyzeAIVisionModerationRequest } from '../model/analyzeAIVisionModerationRequest';
import { AnalyzeAIVisionModerationResponse } from '../model/analyzeAIVisionModerationResponse';
import { AnalyzeAIVisionTaggingRequest } from '../model/analyzeAIVisionTaggingRequest';
import { AnalyzeAIVisionTaggingResponse } from '../model/analyzeAIVisionTaggingResponse';
import { AnalyzeCaptioningRequest } from '../model/analyzeCaptioningRequest';
import { AnalyzeCaptioningResponse } from '../model/analyzeCaptioningResponse';
import { AnalyzeCldFashionRequest } from '../model/analyzeCldFashionRequest';
import { AnalyzeCldFashionResponse } from '../model/analyzeCldFashionResponse';
import { AnalyzeCldTextRequest } from '../model/analyzeCldTextRequest';
import { AnalyzeCldTextResponse } from '../model/analyzeCldTextResponse';
import { AnalyzeCocoRequest } from '../model/analyzeCocoRequest';
import { AnalyzeCocoResponse } from '../model/analyzeCocoResponse';
import { AnalyzeCustomRequest } from '../model/analyzeCustomRequest';
import { AnalyzeCustomResponse } from '../model/analyzeCustomResponse';
import { AnalyzeGoogleTaggingRequest } from '../model/analyzeGoogleTaggingRequest';
import { AnalyzeGoogleTaggingResponse } from '../model/analyzeGoogleTaggingResponse';
import { AnalyzeHumanAnatomyRequest } from '../model/analyzeHumanAnatomyRequest';
import { AnalyzeHumanAnatomyResponse } from '../model/analyzeHumanAnatomyResponse';
import { AnalyzeLvisRequest } from '../model/analyzeLvisRequest';
import { AnalyzeLvisResponse } from '../model/analyzeLvisResponse';
import { AnalyzeShopClassifierRequest } from '../model/analyzeShopClassifierRequest';
import { AnalyzeShopClassifierResponse } from '../model/analyzeShopClassifierResponse';
import { AnalyzeUnidetRequest } from '../model/analyzeUnidetRequest';
import { AnalyzeUnidetResponse } from '../model/analyzeUnidetResponse';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile, ICloudinaryUrlConfig, IConfig } from './apis';

let defaultBasePath = 'https://api.cloudinary.com/v2/analysis/CLOUD_NAME/analyze';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AnalysisApiApiKeys {
}

const USER_AGENT = `CloudinaryAnalysisNodeJS/0.1.1 (Node ${process.versions.node})`;

export class AnalysisApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
    protected _cloudinaryUrl : string | undefined;
    protected _cloudName : string | undefined;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'OAuth2': new OAuth(),
        'basicAuth': new HttpBasicAuth(),
    }

    protected interceptors: Interceptor[] = [];
    constructor(config?: IConfig | ICloudinaryUrlConfig) {
        const {userName = '', password = ''} = (config as IConfig) || {};
        const {cloudinaryUrl = process.env.CLOUDINARY_URL, basePath = defaultBasePath} = (config as ICloudinaryUrlConfig) || {};
        if (password) {
            this.username = userName;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            this.basePath = basePath;
            this.cloudinaryUrl = cloudinaryUrl;
        }

        // set userAgent
        this._defaultHeaders['User-Agent'] = USER_AGENT;
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set cloudName(cloudName: string) {
        this._cloudName = cloudName;
        const path = new URL(this._basePath);
        const pathname = path.pathname;

        // Regex to match the version and existing cloudName
        const regex = /^(\/v\d+)(\/[^\/]+)(\/[^\/]+)(\/.*)?$/;

        // Replace the cloudName only if it is present in the pathname
        if (regex.test(pathname)) {
            path.pathname = pathname.replace(regex, (match, version, module, existingCloudName, restOfPath) => {
                return `${version}${module}/${cloudName}${restOfPath || ''}`;
            });
        }

        this.basePath = path.toString();
    }

    set cloudinaryUrl(cloudinaryUrl: string | undefined) {
        this._cloudinaryUrl = cloudinaryUrl;
        this.importCloudinaryUrl();
    }

    private importCloudinaryUrl() {
        if(!this._cloudinaryUrl) return;

        const parts = new URL(this._cloudinaryUrl);

        if(parts.protocol !== 'cloudinary:'){
            console.error('Invalid/missing CLOUDINARY_URL');
            return;
        }
        this.cloudName = parts.host;
        this.username = parts.username;
        this.password = parts.password;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AnalysisApiApiKeys, value: string) {
        (this.authentications as any)[AnalysisApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.OAuth2.accessToken = token;
    }

    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * The General mode serves a wide array of applications by providing detailed answers to diverse questions about an image. Users can inquire about any aspect of an image, such as identifying objects, understanding scenes, or interpreting text within the image.
     * @summary Analyze - AI Vision General
     * @param analyzeAIVisionGeneralRequest A JSON object containing request parameters
     */
    public async analyzeAiVisionGeneral (analyzeAIVisionGeneralRequest: AnalyzeAIVisionGeneralRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionGeneralResponse;  }> {
        const localVarPath = this.basePath + '/ai_vision_general';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeAIVisionGeneralRequest' is not null or undefined
        if (analyzeAIVisionGeneralRequest === null || analyzeAIVisionGeneralRequest === undefined) {
            throw new Error('Required parameter analyzeAIVisionGeneralRequest was null or undefined when calling analyzeAiVisionGeneral.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeAIVisionGeneralRequest, "AnalyzeAIVisionGeneralRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionGeneralResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The Moderation mode accepts multiple questions about an image, to which the response provides concise answers of \"yes,\" \"no,\" or \"unknown.\" This functionality allows for a nuanced evaluation of whether the image adheres to specific content policies, creative specs, or aesthetic criteria.
     * @summary Analyze - AI Vision Moderation
     * @param analyzeAIVisionModerationRequest A JSON object containing request parameters
     */
    public async analyzeAiVisionModeration (analyzeAIVisionModerationRequest: AnalyzeAIVisionModerationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionModerationResponse;  }> {
        const localVarPath = this.basePath + '/ai_vision_moderation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeAIVisionModerationRequest' is not null or undefined
        if (analyzeAIVisionModerationRequest === null || analyzeAIVisionModerationRequest === undefined) {
            throw new Error('Required parameter analyzeAIVisionModerationRequest was null or undefined when calling analyzeAiVisionModeration.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeAIVisionModerationRequest, "AnalyzeAIVisionModerationRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionModerationResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The Tagging mode accepts a list of tag names along with their corresponding descriptions. If the image matches the description, which may encompass various elements, it will be appropriately tagged. This approach enables customers to align with their own brand taxonomy, offering a dynamic, flexible, and open method for image classification.
     * @summary Analyze - AI Vision Tagging
     * @param analyzeAIVisionTaggingRequest A JSON object containing request parameters
     */
    public async analyzeAiVisionTagging (analyzeAIVisionTaggingRequest: AnalyzeAIVisionTaggingRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionTaggingResponse;  }> {
        const localVarPath = this.basePath + '/ai_vision_tagging';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeAIVisionTaggingRequest' is not null or undefined
        if (analyzeAIVisionTaggingRequest === null || analyzeAIVisionTaggingRequest === undefined) {
            throw new Error('Required parameter analyzeAIVisionTaggingRequest was null or undefined when calling analyzeAiVisionTagging.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeAIVisionTaggingRequest, "AnalyzeAIVisionTaggingRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeAIVisionTaggingResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Provides a caption for an image.
     * @summary Analyze - Captioning
     * @param analyzeCaptioningRequest A JSON object containing request parameters
     */
    public async analyzeCaptioning (analyzeCaptioningRequest: AnalyzeCaptioningRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeCaptioningResponse;  }> {
        const localVarPath = this.basePath + '/captioning';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeCaptioningRequest' is not null or undefined
        if (analyzeCaptioningRequest === null || analyzeCaptioningRequest === undefined) {
            throw new Error('Required parameter analyzeCaptioningRequest was null or undefined when calling analyzeCaptioning.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeCaptioningRequest, "AnalyzeCaptioningRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeCaptioningResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s fashion model is specifically dedicated to items of clothing. The response includes attributes of the clothing identified, for example whether the garment contains pockets, its material and the fastenings used.
     * @summary Analyze - Cld-Fashion
     * @param analyzeCldFashionRequest A JSON object containing request parameters
     */
    public async analyzeCldFashion (analyzeCldFashionRequest: AnalyzeCldFashionRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeCldFashionResponse;  }> {
        const localVarPath = this.basePath + '/cld_fashion';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeCldFashionRequest' is not null or undefined
        if (analyzeCldFashionRequest === null || analyzeCldFashionRequest === undefined) {
            throw new Error('Required parameter analyzeCldFashionRequest was null or undefined when calling analyzeCldFashion.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeCldFashionRequest, "AnalyzeCldFashionRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeCldFashionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s text model tells you if your image includes text, and where it\'s located. Used with image tagging, you can then search for images that contain blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or specify a crop that avoids the text.
     * @summary Analyze - Cld-Text
     * @param analyzeCldTextRequest A JSON object containing request parameters
     */
    public async analyzeCldText (analyzeCldTextRequest: AnalyzeCldTextRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeCldTextResponse;  }> {
        const localVarPath = this.basePath + '/cld_text';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeCldTextRequest' is not null or undefined
        if (analyzeCldTextRequest === null || analyzeCldTextRequest === undefined) {
            throw new Error('Required parameter analyzeCldTextRequest was null or undefined when calling analyzeCldText.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeCldTextRequest, "AnalyzeCldTextRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeCldTextResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model contains just 80 common objects.
     * @summary Analyze - Coco
     * @param analyzeCocoRequest A JSON object containing request parameters
     */
    public async analyzeCoco (analyzeCocoRequest: AnalyzeCocoRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeCocoResponse;  }> {
        const localVarPath = this.basePath + '/coco';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeCocoRequest' is not null or undefined
        if (analyzeCocoRequest === null || analyzeCocoRequest === undefined) {
            throw new Error('Required parameter analyzeCocoRequest was null or undefined when calling analyzeCoco.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeCocoRequest, "AnalyzeCocoRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeCocoResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * TODO
     * @summary Analyze - custom model
     * @param analyzeCustomRequest A JSON object containing request parameters
     */
    public async analyzeCustom (analyzeCustomRequest: AnalyzeCustomRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeCustomResponse;  }> {
        const localVarPath = this.basePath + '/custom';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeCustomRequest' is not null or undefined
        if (analyzeCustomRequest === null || analyzeCustomRequest === undefined) {
            throw new Error('Required parameter analyzeCustomRequest was null or undefined when calling analyzeCustom.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeCustomRequest, "AnalyzeCustomRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeCustomResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Provides tags for an image using Google\'s tagging service.
     * @summary Analyze - Google Tagging
     * @param analyzeGoogleTaggingRequest A JSON object containing request parameters
     */
    public async analyzeGoogleTagging (analyzeGoogleTaggingRequest: AnalyzeGoogleTaggingRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeGoogleTaggingResponse;  }> {
        const localVarPath = this.basePath + '/google_tagging';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeGoogleTaggingRequest' is not null or undefined
        if (analyzeGoogleTaggingRequest === null || analyzeGoogleTaggingRequest === undefined) {
            throw new Error('Required parameter analyzeGoogleTaggingRequest was null or undefined when calling analyzeGoogleTagging.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeGoogleTaggingRequest, "AnalyzeGoogleTaggingRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeGoogleTaggingResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s human anatomy model identifies parts of the human body in an image. It works best when the majority of a human body is detected in the image.
     * @summary Analyze - Human Anatomy
     * @param analyzeHumanAnatomyRequest A JSON object containing request parameters
     */
    public async analyzeHumanAnatomy (analyzeHumanAnatomyRequest: AnalyzeHumanAnatomyRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeHumanAnatomyResponse;  }> {
        const localVarPath = this.basePath + '/human_anatomy';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeHumanAnatomyRequest' is not null or undefined
        if (analyzeHumanAnatomyRequest === null || analyzeHumanAnatomyRequest === undefined) {
            throw new Error('Required parameter analyzeHumanAnatomyRequest was null or undefined when calling analyzeHumanAnatomy.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeHumanAnatomyRequest, "AnalyzeHumanAnatomyRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeHumanAnatomyResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [Large Vocabulary Instance Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.
     * @summary Analyze - Lvis
     * @param analyzeLvisRequest A JSON object containing request parameters
     */
    public async analyzeLvis (analyzeLvisRequest: AnalyzeLvisRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeLvisResponse;  }> {
        const localVarPath = this.basePath + '/lvis';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeLvisRequest' is not null or undefined
        if (analyzeLvisRequest === null || analyzeLvisRequest === undefined) {
            throw new Error('Required parameter analyzeLvisRequest was null or undefined when calling analyzeLvis.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeLvisRequest, "AnalyzeLvisRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeLvisResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. Cloudinary\'s shop classifier model detects if the image is a product image taken in a studio, or if it\'s a natural image.
     * @summary Analyze - Shop Classifier
     * @param analyzeShopClassifierRequest A JSON object containing request parameters
     */
    public async analyzeShopClassifier (analyzeShopClassifierRequest: AnalyzeShopClassifierRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeShopClassifierResponse;  }> {
        const localVarPath = this.basePath + '/shop_classifier';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeShopClassifierRequest' is not null or undefined
        if (analyzeShopClassifierRequest === null || analyzeShopClassifierRequest === undefined) {
            throw new Error('Required parameter analyzeShopClassifierRequest was null or undefined when calling analyzeShopClassifier.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeShopClassifierRequest, "AnalyzeShopClassifierRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeShopClassifierResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Analyze an image using the [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning) content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a unified model, combining a number of object models, including [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the wild.
     * @summary Analyze - Unidet
     * @param analyzeUnidetRequest A JSON object containing request parameters
     */
    public async analyzeUnidet (analyzeUnidetRequest: AnalyzeUnidetRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeUnidetResponse;  }> {
        const localVarPath = this.basePath + '/unidet';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'analyzeUnidetRequest' is not null or undefined
        if (analyzeUnidetRequest === null || analyzeUnidetRequest === undefined) {
            throw new Error('Required parameter analyzeUnidetRequest was null or undefined when calling analyzeUnidet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            // json - sets body to JSON representation of value and adds Content-type: application/json header.
            // Additionally, parses the response body as JSON.
            // We always set json to true because we always want to send json
            json: true,
            body: ObjectSerializer.serialize(analyzeUnidetRequest, "AnalyzeUnidetRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.OAuth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.OAuth2.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.basicAuth.username && this.authentications.basicAuth.password) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.basicAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeUnidetResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                    resolve(body);
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
