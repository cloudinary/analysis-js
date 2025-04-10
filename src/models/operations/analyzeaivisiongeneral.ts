/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AnalyzeAiVisionGeneralResponse =
  | components.AsyncOperationAcceptedResponse
  | components.AnalyzeAIVisionGeneralResponse;

/** @internal */
export const AnalyzeAiVisionGeneralResponse$inboundSchema: z.ZodType<
  AnalyzeAiVisionGeneralResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AsyncOperationAcceptedResponse$inboundSchema,
  components.AnalyzeAIVisionGeneralResponse$inboundSchema,
]);

/** @internal */
export type AnalyzeAiVisionGeneralResponse$Outbound =
  | components.AsyncOperationAcceptedResponse$Outbound
  | components.AnalyzeAIVisionGeneralResponse$Outbound;

/** @internal */
export const AnalyzeAiVisionGeneralResponse$outboundSchema: z.ZodType<
  AnalyzeAiVisionGeneralResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeAiVisionGeneralResponse
> = z.union([
  components.AsyncOperationAcceptedResponse$outboundSchema,
  components.AnalyzeAIVisionGeneralResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeAiVisionGeneralResponse$ {
  /** @deprecated use `AnalyzeAiVisionGeneralResponse$inboundSchema` instead. */
  export const inboundSchema = AnalyzeAiVisionGeneralResponse$inboundSchema;
  /** @deprecated use `AnalyzeAiVisionGeneralResponse$outboundSchema` instead. */
  export const outboundSchema = AnalyzeAiVisionGeneralResponse$outboundSchema;
  /** @deprecated use `AnalyzeAiVisionGeneralResponse$Outbound` instead. */
  export type Outbound = AnalyzeAiVisionGeneralResponse$Outbound;
}

export function analyzeAiVisionGeneralResponseToJSON(
  analyzeAiVisionGeneralResponse: AnalyzeAiVisionGeneralResponse,
): string {
  return JSON.stringify(
    AnalyzeAiVisionGeneralResponse$outboundSchema.parse(
      analyzeAiVisionGeneralResponse,
    ),
  );
}

export function analyzeAiVisionGeneralResponseFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeAiVisionGeneralResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeAiVisionGeneralResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeAiVisionGeneralResponse' from JSON`,
  );
}
