/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CldFashionAnalysisData,
  CldFashionAnalysisData$inboundSchema,
  CldFashionAnalysisData$Outbound,
  CldFashionAnalysisData$outboundSchema,
} from "./cldfashionanalysisdata.js";
import {
  LimitsObject,
  LimitsObject$inboundSchema,
  LimitsObject$Outbound,
  LimitsObject$outboundSchema,
} from "./limitsobject.js";

export type AnalyzeCldFashionResponseData = {
  entity?: string | undefined;
  analysis?: CldFashionAnalysisData | undefined;
};

export type AnalyzeCldFashionResponse = {
  limits?: LimitsObject | null | undefined;
  requestId?: string | undefined;
  data?: AnalyzeCldFashionResponseData | undefined;
};

/** @internal */
export const AnalyzeCldFashionResponseData$inboundSchema: z.ZodType<
  AnalyzeCldFashionResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  entity: z.string().optional(),
  analysis: CldFashionAnalysisData$inboundSchema.optional(),
});

/** @internal */
export type AnalyzeCldFashionResponseData$Outbound = {
  entity?: string | undefined;
  analysis?: CldFashionAnalysisData$Outbound | undefined;
};

/** @internal */
export const AnalyzeCldFashionResponseData$outboundSchema: z.ZodType<
  AnalyzeCldFashionResponseData$Outbound,
  z.ZodTypeDef,
  AnalyzeCldFashionResponseData
> = z.object({
  entity: z.string().optional(),
  analysis: CldFashionAnalysisData$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeCldFashionResponseData$ {
  /** @deprecated use `AnalyzeCldFashionResponseData$inboundSchema` instead. */
  export const inboundSchema = AnalyzeCldFashionResponseData$inboundSchema;
  /** @deprecated use `AnalyzeCldFashionResponseData$outboundSchema` instead. */
  export const outboundSchema = AnalyzeCldFashionResponseData$outboundSchema;
  /** @deprecated use `AnalyzeCldFashionResponseData$Outbound` instead. */
  export type Outbound = AnalyzeCldFashionResponseData$Outbound;
}

export function analyzeCldFashionResponseDataToJSON(
  analyzeCldFashionResponseData: AnalyzeCldFashionResponseData,
): string {
  return JSON.stringify(
    AnalyzeCldFashionResponseData$outboundSchema.parse(
      analyzeCldFashionResponseData,
    ),
  );
}

export function analyzeCldFashionResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeCldFashionResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeCldFashionResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeCldFashionResponseData' from JSON`,
  );
}

/** @internal */
export const AnalyzeCldFashionResponse$inboundSchema: z.ZodType<
  AnalyzeCldFashionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  limits: z.nullable(LimitsObject$inboundSchema).optional(),
  request_id: z.string().optional(),
  data: z.lazy(() => AnalyzeCldFashionResponseData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "request_id": "requestId",
  });
});

/** @internal */
export type AnalyzeCldFashionResponse$Outbound = {
  limits?: LimitsObject$Outbound | null | undefined;
  request_id?: string | undefined;
  data?: AnalyzeCldFashionResponseData$Outbound | undefined;
};

/** @internal */
export const AnalyzeCldFashionResponse$outboundSchema: z.ZodType<
  AnalyzeCldFashionResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeCldFashionResponse
> = z.object({
  limits: z.nullable(LimitsObject$outboundSchema).optional(),
  requestId: z.string().optional(),
  data: z.lazy(() => AnalyzeCldFashionResponseData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    requestId: "request_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeCldFashionResponse$ {
  /** @deprecated use `AnalyzeCldFashionResponse$inboundSchema` instead. */
  export const inboundSchema = AnalyzeCldFashionResponse$inboundSchema;
  /** @deprecated use `AnalyzeCldFashionResponse$outboundSchema` instead. */
  export const outboundSchema = AnalyzeCldFashionResponse$outboundSchema;
  /** @deprecated use `AnalyzeCldFashionResponse$Outbound` instead. */
  export type Outbound = AnalyzeCldFashionResponse$Outbound;
}

export function analyzeCldFashionResponseToJSON(
  analyzeCldFashionResponse: AnalyzeCldFashionResponse,
): string {
  return JSON.stringify(
    AnalyzeCldFashionResponse$outboundSchema.parse(analyzeCldFashionResponse),
  );
}

export function analyzeCldFashionResponseFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeCldFashionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeCldFashionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeCldFashionResponse' from JSON`,
  );
}
