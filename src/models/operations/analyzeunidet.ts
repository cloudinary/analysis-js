/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AnalyzeUnidetResponse =
  | components.AsyncOperationAcceptedResponse
  | components.AnalyzeUnidetResponse;

/** @internal */
export const AnalyzeUnidetResponse$inboundSchema: z.ZodType<
  AnalyzeUnidetResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AsyncOperationAcceptedResponse$inboundSchema,
  components.AnalyzeUnidetResponse$inboundSchema,
]);

/** @internal */
export type AnalyzeUnidetResponse$Outbound =
  | components.AsyncOperationAcceptedResponse$Outbound
  | components.AnalyzeUnidetResponse$Outbound;

/** @internal */
export const AnalyzeUnidetResponse$outboundSchema: z.ZodType<
  AnalyzeUnidetResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeUnidetResponse
> = z.union([
  components.AsyncOperationAcceptedResponse$outboundSchema,
  components.AnalyzeUnidetResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeUnidetResponse$ {
  /** @deprecated use `AnalyzeUnidetResponse$inboundSchema` instead. */
  export const inboundSchema = AnalyzeUnidetResponse$inboundSchema;
  /** @deprecated use `AnalyzeUnidetResponse$outboundSchema` instead. */
  export const outboundSchema = AnalyzeUnidetResponse$outboundSchema;
  /** @deprecated use `AnalyzeUnidetResponse$Outbound` instead. */
  export type Outbound = AnalyzeUnidetResponse$Outbound;
}

export function analyzeUnidetResponseToJSON(
  analyzeUnidetResponse: AnalyzeUnidetResponse,
): string {
  return JSON.stringify(
    AnalyzeUnidetResponse$outboundSchema.parse(analyzeUnidetResponse),
  );
}

export function analyzeUnidetResponseFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeUnidetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeUnidetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeUnidetResponse' from JSON`,
  );
}
