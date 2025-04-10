/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AnalyzeImageQualityResponse =
  | components.AsyncOperationAcceptedResponse
  | components.AnalyzeImageQualityResponse;

/** @internal */
export const AnalyzeImageQualityResponse$inboundSchema: z.ZodType<
  AnalyzeImageQualityResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AsyncOperationAcceptedResponse$inboundSchema,
  components.AnalyzeImageQualityResponse$inboundSchema,
]);

/** @internal */
export type AnalyzeImageQualityResponse$Outbound =
  | components.AsyncOperationAcceptedResponse$Outbound
  | components.AnalyzeImageQualityResponse$Outbound;

/** @internal */
export const AnalyzeImageQualityResponse$outboundSchema: z.ZodType<
  AnalyzeImageQualityResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeImageQualityResponse
> = z.union([
  components.AsyncOperationAcceptedResponse$outboundSchema,
  components.AnalyzeImageQualityResponse$outboundSchema,
]);

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
