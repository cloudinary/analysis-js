/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AnalyzeShopClassifierResponse =
  | components.AsyncOperationAcceptedResponse
  | components.AnalyzeShopClassifierResponse;

/** @internal */
export const AnalyzeShopClassifierResponse$inboundSchema: z.ZodType<
  AnalyzeShopClassifierResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AsyncOperationAcceptedResponse$inboundSchema,
  components.AnalyzeShopClassifierResponse$inboundSchema,
]);

/** @internal */
export type AnalyzeShopClassifierResponse$Outbound =
  | components.AsyncOperationAcceptedResponse$Outbound
  | components.AnalyzeShopClassifierResponse$Outbound;

/** @internal */
export const AnalyzeShopClassifierResponse$outboundSchema: z.ZodType<
  AnalyzeShopClassifierResponse$Outbound,
  z.ZodTypeDef,
  AnalyzeShopClassifierResponse
> = z.union([
  components.AsyncOperationAcceptedResponse$outboundSchema,
  components.AnalyzeShopClassifierResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeShopClassifierResponse$ {
  /** @deprecated use `AnalyzeShopClassifierResponse$inboundSchema` instead. */
  export const inboundSchema = AnalyzeShopClassifierResponse$inboundSchema;
  /** @deprecated use `AnalyzeShopClassifierResponse$outboundSchema` instead. */
  export const outboundSchema = AnalyzeShopClassifierResponse$outboundSchema;
  /** @deprecated use `AnalyzeShopClassifierResponse$Outbound` instead. */
  export type Outbound = AnalyzeShopClassifierResponse$Outbound;
}

export function analyzeShopClassifierResponseToJSON(
  analyzeShopClassifierResponse: AnalyzeShopClassifierResponse,
): string {
  return JSON.stringify(
    AnalyzeShopClassifierResponse$outboundSchema.parse(
      analyzeShopClassifierResponse,
    ),
  );
}

export function analyzeShopClassifierResponseFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeShopClassifierResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeShopClassifierResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeShopClassifierResponse' from JSON`,
  );
}
