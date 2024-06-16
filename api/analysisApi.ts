/**
 * Analyze API (Beta)
 * Use the Analyze API to analyze any external asset and return details based on the type of analysis requested.  Currently supports the following analysis options:   * [Google tagging](https://cloudinary.com/documentation/google_auto_tagging_addon)   * [Captioning](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)   * [Cld Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Human Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Cld Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)   * [Shop Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#supported_content_aware_detection_models)    **Notes**:    * The Analyze API is currently in development and is available as a Public Beta, which means we value your feedback, so please feel free to [share any thoughts with us](https://support.cloudinary.com/hc/en-us/requests/new).   * The analysis options require an active subscription to the relevant add-on. Learn more about [registering for add-ons](https://cloudinary.com/documentation/cloudinary_add_ons#registering_for_add_ons).    The API supports both Basic Authentication using your Cloudinary API Key and API Secret (which can be found on the Dashboard page of your [Cloudinary Console](https://console.cloudinary.com/pm)) or OAuth2 ([Contact support](https://support.cloudinary.com/hc/en-us/requests/new) for more information regarding OAuth). 
 */


import localVarRequest from 'request';
import http from 'http';
import 'dotenv/config';

/* tslint:disable:no-unused-locals */
import { AnalyzeResponse } from '../model/analyzeResponse';
import { AnalyzeUriRequest } from '../model/analyzeUriRequest';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile, ICloudinaryUrlConfig, IConfig } from './apis';

let defaultBasePath = 'https://api.cloudinary.com/v2';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AnalysisApiApiKeys {
}

const USER_AGENT = `CloudinaryAnalysisNodeJS/0.0.1 (Node ${process.versions.node})`;

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
        const regex = /^(\/v\d+)(\/[^\/]+)$/;

        // Replace the cloudName only if it is present in the pathname
        if (regex.test(pathname)) {
            path.pathname = pathname.replace(regex, (match, version) => {
                return `${version}/${cloudName}`;
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
     * Analyzes an asset with the requested analysis type. 
     * @summary Analyze an asset
     * @param cloudName The name of your Cloudinary cloud
     * @param analyzeUriRequest A JSON object containing request parameters
     */
    public async analyzeUri (cloudName: string, analyzeUriRequest: AnalyzeUriRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response?: http.IncomingMessage; body: AnalyzeResponse;  }> {
        const localVarPath = this.basePath + '/{cloud_name}/analysis/analyze/uri'
            .replace('{' + 'cloud_name' + '}', encodeURIComponent(String(cloudName)));
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

        // verify required parameter 'cloudName' is not null or undefined
        if (cloudName === null || cloudName === undefined) {
            throw new Error('Required parameter cloudName was null or undefined when calling analyzeUri.');
        }

        // verify required parameter 'analyzeUriRequest' is not null or undefined
        if (analyzeUriRequest === null || analyzeUriRequest === undefined) {
            throw new Error('Required parameter analyzeUriRequest was null or undefined when calling analyzeUri.');
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
            body: ObjectSerializer.serialize(analyzeUriRequest, "AnalyzeUriRequest")
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
            return new Promise<{ response?: http.IncomingMessage; body: AnalyzeResponse;  }>((resolve, reject) => {
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
