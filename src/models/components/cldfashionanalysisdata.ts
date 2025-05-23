/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CldFashionAnalysisDataTags = {};

export type CldFashionAnalysisData = {
  tags: CldFashionAnalysisDataTags;
  modelVersion?: number | undefined;
};

/** @internal */
export const CldFashionAnalysisDataTags$inboundSchema: z.ZodType<
  CldFashionAnalysisDataTags,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CldFashionAnalysisDataTags$Outbound = {};

/** @internal */
export const CldFashionAnalysisDataTags$outboundSchema: z.ZodType<
  CldFashionAnalysisDataTags$Outbound,
  z.ZodTypeDef,
  CldFashionAnalysisDataTags
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CldFashionAnalysisDataTags$ {
  /** @deprecated use `CldFashionAnalysisDataTags$inboundSchema` instead. */
  export const inboundSchema = CldFashionAnalysisDataTags$inboundSchema;
  /** @deprecated use `CldFashionAnalysisDataTags$outboundSchema` instead. */
  export const outboundSchema = CldFashionAnalysisDataTags$outboundSchema;
  /** @deprecated use `CldFashionAnalysisDataTags$Outbound` instead. */
  export type Outbound = CldFashionAnalysisDataTags$Outbound;
}

export function cldFashionAnalysisDataTagsToJSON(
  cldFashionAnalysisDataTags: CldFashionAnalysisDataTags,
): string {
  return JSON.stringify(
    CldFashionAnalysisDataTags$outboundSchema.parse(cldFashionAnalysisDataTags),
  );
}

export function cldFashionAnalysisDataTagsFromJSON(
  jsonString: string,
): SafeParseResult<CldFashionAnalysisDataTags, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CldFashionAnalysisDataTags$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CldFashionAnalysisDataTags' from JSON`,
  );
}

/** @internal */
export const CldFashionAnalysisData$inboundSchema: z.ZodType<
  CldFashionAnalysisData,
  z.ZodTypeDef,
  unknown
> = z.object({
  tags: z.lazy(() => CldFashionAnalysisDataTags$inboundSchema),
  model_version: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "model_version": "modelVersion",
  });
});

/** @internal */
export type CldFashionAnalysisData$Outbound = {
  tags: CldFashionAnalysisDataTags$Outbound;
  model_version?: number | undefined;
};

/** @internal */
export const CldFashionAnalysisData$outboundSchema: z.ZodType<
  CldFashionAnalysisData$Outbound,
  z.ZodTypeDef,
  CldFashionAnalysisData
> = z.object({
  tags: z.lazy(() => CldFashionAnalysisDataTags$outboundSchema),
  modelVersion: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    modelVersion: "model_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CldFashionAnalysisData$ {
  /** @deprecated use `CldFashionAnalysisData$inboundSchema` instead. */
  export const inboundSchema = CldFashionAnalysisData$inboundSchema;
  /** @deprecated use `CldFashionAnalysisData$outboundSchema` instead. */
  export const outboundSchema = CldFashionAnalysisData$outboundSchema;
  /** @deprecated use `CldFashionAnalysisData$Outbound` instead. */
  export type Outbound = CldFashionAnalysisData$Outbound;
}

export function cldFashionAnalysisDataToJSON(
  cldFashionAnalysisData: CldFashionAnalysisData,
): string {
  return JSON.stringify(
    CldFashionAnalysisData$outboundSchema.parse(cldFashionAnalysisData),
  );
}

export function cldFashionAnalysisDataFromJSON(
  jsonString: string,
): SafeParseResult<CldFashionAnalysisData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CldFashionAnalysisData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CldFashionAnalysisData' from JSON`,
  );
}
