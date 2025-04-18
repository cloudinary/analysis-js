/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ImageQualityAnalysisData,
  ImageQualityAnalysisData$inboundSchema,
  ImageQualityAnalysisData$Outbound,
  ImageQualityAnalysisData$outboundSchema,
} from "./imagequalityanalysisdata.js";
import {
  LimitsObject,
  LimitsObject$inboundSchema,
  LimitsObject$Outbound,
  LimitsObject$outboundSchema,
} from "./limitsobject.js";

export type AnalyzeImageQualityResponseData = {
  entity?: string | undefined;
  analysis?: ImageQualityAnalysisData | undefined;
};

export type AnalyzeImageQualityResponse = {
  limits?: LimitsObject | null | undefined;
  requestId?: string | undefined;
  data?: AnalyzeImageQualityResponseData | undefined;
};

/** @internal */
export const AnalyzeImageQualityResponseData$inboundSchema: z.ZodType<
  AnalyzeImageQualityResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  entity: z.string().optional(),
  analysis: ImageQualityAnalysisData$inboundSchema.optional(),
});

/** @internal */
export type AnalyzeImageQualityResponseData$Outbound = {
  entity?: string | undefined;
  analysis?: ImageQualityAnalysisData$Outbound | undefined;
};

/** @internal */
export const AnalyzeImageQualityResponseData$outboundSchema: z.ZodType<
  AnalyzeImageQualityResponseData$Outbound,
  z.ZodTypeDef,
  AnalyzeImageQualityResponseData
> = z.object({
  entity: z.string().optional(),
  analysis: ImageQualityAnalysisData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeImageQualityResponseData$ {
  /** @deprecated use `AnalyzeImageQualityResponseData$inboundSchema` instead. */
  export const inboundSchema = AnalyzeImageQualityResponseData$inboundSchema;
  /** @deprecated use `AnalyzeImageQualityResponseData$outboundSchema` instead. */
  export const outboundSchema = AnalyzeImageQualityResponseData$outboundSchema;
  /** @deprecated use `AnalyzeImageQualityResponseData$Outbound` instead. */
  export type Outbound = AnalyzeImageQualityResponseData$Outbound;
}

export function analyzeImageQualityResponseDataToJSON(
  analyzeImageQualityResponseData: AnalyzeImageQualityResponseData,
): string {
  return JSON.stringify(
    AnalyzeImageQualityResponseData$outboundSchema.parse(
      analyzeImageQualityResponseData,
    ),
  );
}

export function analyzeImageQualityResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeImageQualityResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeImageQualityResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeImageQualityResponseData' from JSON`,
  );
}

/** @internal */
export const AnalyzeImageQualityResponse$inboundSchema: z.ZodType<
  AnalyzeImageQualityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  limits: z.nullable(LimitsObject$inboundSchema).optional(),
  request_id: z.string().optional(),
  data: z.lazy(() => AnalyzeImageQualityResponseData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "request_id": "requestId",
  });
});

/** @internal */
export type AnalyzeImageQualityResponse$Outbound = {
  limits?: LimitsObject$Outbound | null | undefined;
  request_id?: string | undefined;
  data?: AnalyzeImageQualityResponseData$Outbound | undefined;
};

/** @internal */
export const AnalyzeImageQualityResponse$outboundSchema: z.ZodType<
  AnalyzeImageQualityResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeImageQualityResponse
> = z.object({
  limits: z.nullable(LimitsObject$outboundSchema).optional(),
  requestId: z.string().optional(),
  data: z.lazy(() => AnalyzeImageQualityResponseData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestId: "request_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeImageQualityResponse$ {
  /** @deprecated use `AnalyzeImageQualityResponse$inboundSchema` instead. */
  export const inboundSchema = AnalyzeImageQualityResponse$inboundSchema;
  /** @deprecated use `AnalyzeImageQualityResponse$outboundSchema` instead. */
  export const outboundSchema = AnalyzeImageQualityResponse$outboundSchema;
  /** @deprecated use `AnalyzeImageQualityResponse$Outbound` instead. */
  export type Outbound = AnalyzeImageQualityResponse$Outbound;
}

export function analyzeImageQualityResponseToJSON(
  analyzeImageQualityResponse: AnalyzeImageQualityResponse,
): string {
  return JSON.stringify(
    AnalyzeImageQualityResponse$outboundSchema.parse(
      analyzeImageQualityResponse,
    ),
  );
}

export function analyzeImageQualityResponseFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeImageQualityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeImageQualityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeImageQualityResponse' from JSON`,
  );
}
