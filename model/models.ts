import localVarRequest from 'request';

export * from './aIVisionGeneralAnalysisData';
export * from './aIVisionGeneralAnalysisDataResponsesInner';
export * from './aIVisionModerationAnalysisData';
export * from './aIVisionModerationAnalysisDataResponsesInner';
export * from './aIVisionTaggingAnalysisData';
export * from './aIVisionTaggingAnalysisDataTagsInner';
export * from './analysisPayload';
export * from './analysisType';
export * from './analyzeAIVisionGeneralRequest';
export * from './analyzeAIVisionGeneralRequestAllOf';
export * from './analyzeAIVisionGeneralResponse';
export * from './analyzeAIVisionGeneralResponseAllOf';
export * from './analyzeAIVisionModerationRequest';
export * from './analyzeAIVisionModerationRequestAllOf';
export * from './analyzeAIVisionModerationResponse';
export * from './analyzeAIVisionModerationResponseAllOf';
export * from './analyzeAIVisionTaggingRequest';
export * from './analyzeAIVisionTaggingRequestAllOf';
export * from './analyzeAIVisionTaggingRequestAllOfTagDefinitions';
export * from './analyzeAIVisionTaggingResponse';
export * from './analyzeAIVisionTaggingResponseAllOf';
export * from './analyzeCaptioningRequest';
export * from './analyzeCaptioningResponse';
export * from './analyzeCaptioningResponseAllOf';
export * from './analyzeCldFashionRequest';
export * from './analyzeCldFashionResponse';
export * from './analyzeCldFashionResponseAllOf';
export * from './analyzeCldTextRequest';
export * from './analyzeCldTextResponse';
export * from './analyzeCldTextResponseAllOf';
export * from './analyzeCocoRequest';
export * from './analyzeCocoResponse';
export * from './analyzeCocoResponseAllOf';
export * from './analyzeCustomRequest';
export * from './analyzeCustomRequestAllOf';
export * from './analyzeCustomResponse';
export * from './analyzeCustomResponseAllOf';
export * from './analyzeGoogleTaggingRequest';
export * from './analyzeGoogleTaggingResponse';
export * from './analyzeGoogleTaggingResponseAllOf';
export * from './analyzeHumanAnatomyRequest';
export * from './analyzeHumanAnatomyResponse';
export * from './analyzeHumanAnatomyResponseAllOf';
export * from './analyzeLvisRequest';
export * from './analyzeLvisResponse';
export * from './analyzeLvisResponseAllOf';
export * from './analyzeResponse';
export * from './analyzeShopClassifierRequest';
export * from './analyzeShopClassifierResponse';
export * from './analyzeShopClassifierResponseAllOf';
export * from './analyzeUnidetRequest';
export * from './analyzeUnidetResponse';
export * from './analyzeUnidetResponseAllOf';
export * from './analyzeUriRequest';
export * from './baseAnalyzeRequest';
export * from './baseAnalyzeResponse';
export * from './captioningAnalysisData';
export * from './captioningAnalysisDataData';
export * from './cldFashionAnalysisData';
export * from './cldTextAnalysisData';
export * from './cocoAnalysisData';
export * from './customAnalysisData';
export * from './errorResponse';
export * from './errorResponseError';
export * from './feature';
export * from './googleTaggingAnalysisData';
export * from './googleTaggingAnalysisDataLabelAnnotations';
export * from './googleTaggingAnalysisDataLabelAnnotationsLabelsInner';
export * from './humanAnatomyAnalysisData';
export * from './limits';
export * from './limitsUsage';
export * from './lvisAnalysisData';
export * from './shopClassifierAnalysisData';
export * from './source';
export * from './unidetAnalysisData';

import * as fs from 'fs';
import { Buffer } from 'buffer';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AIVisionGeneralAnalysisData } from './aIVisionGeneralAnalysisData';
import { AIVisionGeneralAnalysisDataResponsesInner } from './aIVisionGeneralAnalysisDataResponsesInner';
import { AIVisionModerationAnalysisData } from './aIVisionModerationAnalysisData';
import { AIVisionModerationAnalysisDataResponsesInner } from './aIVisionModerationAnalysisDataResponsesInner';
import { AIVisionTaggingAnalysisData } from './aIVisionTaggingAnalysisData';
import { AIVisionTaggingAnalysisDataTagsInner } from './aIVisionTaggingAnalysisDataTagsInner';
import { AnalysisPayload } from './analysisPayload';
import { AnalysisType } from './analysisType';
import { AnalyzeAIVisionGeneralRequest } from './analyzeAIVisionGeneralRequest';
import { AnalyzeAIVisionGeneralRequestAllOf } from './analyzeAIVisionGeneralRequestAllOf';
import { AnalyzeAIVisionGeneralResponse } from './analyzeAIVisionGeneralResponse';
import { AnalyzeAIVisionGeneralResponseAllOf } from './analyzeAIVisionGeneralResponseAllOf';
import { AnalyzeAIVisionModerationRequest } from './analyzeAIVisionModerationRequest';
import { AnalyzeAIVisionModerationRequestAllOf } from './analyzeAIVisionModerationRequestAllOf';
import { AnalyzeAIVisionModerationResponse } from './analyzeAIVisionModerationResponse';
import { AnalyzeAIVisionModerationResponseAllOf } from './analyzeAIVisionModerationResponseAllOf';
import { AnalyzeAIVisionTaggingRequest } from './analyzeAIVisionTaggingRequest';
import { AnalyzeAIVisionTaggingRequestAllOf } from './analyzeAIVisionTaggingRequestAllOf';
import { AnalyzeAIVisionTaggingRequestAllOfTagDefinitions } from './analyzeAIVisionTaggingRequestAllOfTagDefinitions';
import { AnalyzeAIVisionTaggingResponse } from './analyzeAIVisionTaggingResponse';
import { AnalyzeAIVisionTaggingResponseAllOf } from './analyzeAIVisionTaggingResponseAllOf';
import { AnalyzeCaptioningRequest } from './analyzeCaptioningRequest';
import { AnalyzeCaptioningResponse } from './analyzeCaptioningResponse';
import { AnalyzeCaptioningResponseAllOf } from './analyzeCaptioningResponseAllOf';
import { AnalyzeCldFashionRequest } from './analyzeCldFashionRequest';
import { AnalyzeCldFashionResponse } from './analyzeCldFashionResponse';
import { AnalyzeCldFashionResponseAllOf } from './analyzeCldFashionResponseAllOf';
import { AnalyzeCldTextRequest } from './analyzeCldTextRequest';
import { AnalyzeCldTextResponse } from './analyzeCldTextResponse';
import { AnalyzeCldTextResponseAllOf } from './analyzeCldTextResponseAllOf';
import { AnalyzeCocoRequest } from './analyzeCocoRequest';
import { AnalyzeCocoResponse } from './analyzeCocoResponse';
import { AnalyzeCocoResponseAllOf } from './analyzeCocoResponseAllOf';
import { AnalyzeCustomRequest } from './analyzeCustomRequest';
import { AnalyzeCustomRequestAllOf } from './analyzeCustomRequestAllOf';
import { AnalyzeCustomResponse } from './analyzeCustomResponse';
import { AnalyzeCustomResponseAllOf } from './analyzeCustomResponseAllOf';
import { AnalyzeGoogleTaggingRequest } from './analyzeGoogleTaggingRequest';
import { AnalyzeGoogleTaggingResponse } from './analyzeGoogleTaggingResponse';
import { AnalyzeGoogleTaggingResponseAllOf } from './analyzeGoogleTaggingResponseAllOf';
import { AnalyzeHumanAnatomyRequest } from './analyzeHumanAnatomyRequest';
import { AnalyzeHumanAnatomyResponse } from './analyzeHumanAnatomyResponse';
import { AnalyzeHumanAnatomyResponseAllOf } from './analyzeHumanAnatomyResponseAllOf';
import { AnalyzeLvisRequest } from './analyzeLvisRequest';
import { AnalyzeLvisResponse } from './analyzeLvisResponse';
import { AnalyzeLvisResponseAllOf } from './analyzeLvisResponseAllOf';
import { AnalyzeResponse } from './analyzeResponse';
import { AnalyzeShopClassifierRequest } from './analyzeShopClassifierRequest';
import { AnalyzeShopClassifierResponse } from './analyzeShopClassifierResponse';
import { AnalyzeShopClassifierResponseAllOf } from './analyzeShopClassifierResponseAllOf';
import { AnalyzeUnidetRequest } from './analyzeUnidetRequest';
import { AnalyzeUnidetResponse } from './analyzeUnidetResponse';
import { AnalyzeUnidetResponseAllOf } from './analyzeUnidetResponseAllOf';
import { AnalyzeUriRequest } from './analyzeUriRequest';
import { BaseAnalyzeRequest } from './baseAnalyzeRequest';
import { BaseAnalyzeResponse } from './baseAnalyzeResponse';
import { CaptioningAnalysisData } from './captioningAnalysisData';
import { CaptioningAnalysisDataData } from './captioningAnalysisDataData';
import { CldFashionAnalysisData } from './cldFashionAnalysisData';
import { CldTextAnalysisData } from './cldTextAnalysisData';
import { CocoAnalysisData } from './cocoAnalysisData';
import { CustomAnalysisData } from './customAnalysisData';
import { ErrorResponse } from './errorResponse';
import { ErrorResponseError } from './errorResponseError';
import { Feature } from './feature';
import { GoogleTaggingAnalysisData } from './googleTaggingAnalysisData';
import { GoogleTaggingAnalysisDataLabelAnnotations } from './googleTaggingAnalysisDataLabelAnnotations';
import { GoogleTaggingAnalysisDataLabelAnnotationsLabelsInner } from './googleTaggingAnalysisDataLabelAnnotationsLabelsInner';
import { HumanAnatomyAnalysisData } from './humanAnatomyAnalysisData';
import { Limits } from './limits';
import { LimitsUsage } from './limitsUsage';
import { LvisAnalysisData } from './lvisAnalysisData';
import { ShopClassifierAnalysisData } from './shopClassifierAnalysisData';
import { Source } from './source';
import { UnidetAnalysisData } from './unidetAnalysisData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AIVisionModerationAnalysisDataResponsesInner.ValueEnum": AIVisionModerationAnalysisDataResponsesInner.ValueEnum,
        "AnalysisType": AnalysisType,
        "ErrorResponseError.CategoryEnum": ErrorResponseError.CategoryEnum,
        "Feature": Feature,
}

let typeMap: {[index: string]: any} = {
    "AIVisionGeneralAnalysisData": AIVisionGeneralAnalysisData,
    "AIVisionGeneralAnalysisDataResponsesInner": AIVisionGeneralAnalysisDataResponsesInner,
    "AIVisionModerationAnalysisData": AIVisionModerationAnalysisData,
    "AIVisionModerationAnalysisDataResponsesInner": AIVisionModerationAnalysisDataResponsesInner,
    "AIVisionTaggingAnalysisData": AIVisionTaggingAnalysisData,
    "AIVisionTaggingAnalysisDataTagsInner": AIVisionTaggingAnalysisDataTagsInner,
    "AnalysisPayload": AnalysisPayload,
    "AnalyzeAIVisionGeneralRequest": AnalyzeAIVisionGeneralRequest,
    "AnalyzeAIVisionGeneralRequestAllOf": AnalyzeAIVisionGeneralRequestAllOf,
    "AnalyzeAIVisionGeneralResponse": AnalyzeAIVisionGeneralResponse,
    "AnalyzeAIVisionGeneralResponseAllOf": AnalyzeAIVisionGeneralResponseAllOf,
    "AnalyzeAIVisionModerationRequest": AnalyzeAIVisionModerationRequest,
    "AnalyzeAIVisionModerationRequestAllOf": AnalyzeAIVisionModerationRequestAllOf,
    "AnalyzeAIVisionModerationResponse": AnalyzeAIVisionModerationResponse,
    "AnalyzeAIVisionModerationResponseAllOf": AnalyzeAIVisionModerationResponseAllOf,
    "AnalyzeAIVisionTaggingRequest": AnalyzeAIVisionTaggingRequest,
    "AnalyzeAIVisionTaggingRequestAllOf": AnalyzeAIVisionTaggingRequestAllOf,
    "AnalyzeAIVisionTaggingRequestAllOfTagDefinitions": AnalyzeAIVisionTaggingRequestAllOfTagDefinitions,
    "AnalyzeAIVisionTaggingResponse": AnalyzeAIVisionTaggingResponse,
    "AnalyzeAIVisionTaggingResponseAllOf": AnalyzeAIVisionTaggingResponseAllOf,
    "AnalyzeCaptioningRequest": AnalyzeCaptioningRequest,
    "AnalyzeCaptioningResponse": AnalyzeCaptioningResponse,
    "AnalyzeCaptioningResponseAllOf": AnalyzeCaptioningResponseAllOf,
    "AnalyzeCldFashionRequest": AnalyzeCldFashionRequest,
    "AnalyzeCldFashionResponse": AnalyzeCldFashionResponse,
    "AnalyzeCldFashionResponseAllOf": AnalyzeCldFashionResponseAllOf,
    "AnalyzeCldTextRequest": AnalyzeCldTextRequest,
    "AnalyzeCldTextResponse": AnalyzeCldTextResponse,
    "AnalyzeCldTextResponseAllOf": AnalyzeCldTextResponseAllOf,
    "AnalyzeCocoRequest": AnalyzeCocoRequest,
    "AnalyzeCocoResponse": AnalyzeCocoResponse,
    "AnalyzeCocoResponseAllOf": AnalyzeCocoResponseAllOf,
    "AnalyzeCustomRequest": AnalyzeCustomRequest,
    "AnalyzeCustomRequestAllOf": AnalyzeCustomRequestAllOf,
    "AnalyzeCustomResponse": AnalyzeCustomResponse,
    "AnalyzeCustomResponseAllOf": AnalyzeCustomResponseAllOf,
    "AnalyzeGoogleTaggingRequest": AnalyzeGoogleTaggingRequest,
    "AnalyzeGoogleTaggingResponse": AnalyzeGoogleTaggingResponse,
    "AnalyzeGoogleTaggingResponseAllOf": AnalyzeGoogleTaggingResponseAllOf,
    "AnalyzeHumanAnatomyRequest": AnalyzeHumanAnatomyRequest,
    "AnalyzeHumanAnatomyResponse": AnalyzeHumanAnatomyResponse,
    "AnalyzeHumanAnatomyResponseAllOf": AnalyzeHumanAnatomyResponseAllOf,
    "AnalyzeLvisRequest": AnalyzeLvisRequest,
    "AnalyzeLvisResponse": AnalyzeLvisResponse,
    "AnalyzeLvisResponseAllOf": AnalyzeLvisResponseAllOf,
    "AnalyzeResponse": AnalyzeResponse,
    "AnalyzeShopClassifierRequest": AnalyzeShopClassifierRequest,
    "AnalyzeShopClassifierResponse": AnalyzeShopClassifierResponse,
    "AnalyzeShopClassifierResponseAllOf": AnalyzeShopClassifierResponseAllOf,
    "AnalyzeUnidetRequest": AnalyzeUnidetRequest,
    "AnalyzeUnidetResponse": AnalyzeUnidetResponse,
    "AnalyzeUnidetResponseAllOf": AnalyzeUnidetResponseAllOf,
    "AnalyzeUriRequest": AnalyzeUriRequest,
    "BaseAnalyzeRequest": BaseAnalyzeRequest,
    "BaseAnalyzeResponse": BaseAnalyzeResponse,
    "CaptioningAnalysisData": CaptioningAnalysisData,
    "CaptioningAnalysisDataData": CaptioningAnalysisDataData,
    "CldFashionAnalysisData": CldFashionAnalysisData,
    "CldTextAnalysisData": CldTextAnalysisData,
    "CocoAnalysisData": CocoAnalysisData,
    "CustomAnalysisData": CustomAnalysisData,
    "ErrorResponse": ErrorResponse,
    "ErrorResponseError": ErrorResponseError,
    "GoogleTaggingAnalysisData": GoogleTaggingAnalysisData,
    "GoogleTaggingAnalysisDataLabelAnnotations": GoogleTaggingAnalysisDataLabelAnnotations,
    "GoogleTaggingAnalysisDataLabelAnnotationsLabelsInner": GoogleTaggingAnalysisDataLabelAnnotationsLabelsInner,
    "HumanAnatomyAnalysisData": HumanAnatomyAnalysisData,
    "Limits": Limits,
    "LimitsUsage": LimitsUsage,
    "LvisAnalysisData": LvisAnalysisData,
    "ShopClassifierAnalysisData": ShopClassifierAnalysisData,
    "Source": Source,
    "UnidetAnalysisData": UnidetAnalysisData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
