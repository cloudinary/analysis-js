/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Tags = {
  name?: string | undefined;
};

export type AIVisionTaggingAnalysisData = {
  tags: Array<Tags>;
  modelVersion?: number | undefined;
};

/** @internal */
export const Tags$inboundSchema: z.ZodType<Tags, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string().optional(),
  });

/** @internal */
export type Tags$Outbound = {
  name?: string | undefined;
};

/** @internal */
export const Tags$outboundSchema: z.ZodType<Tags$Outbound, z.ZodTypeDef, Tags> =
  z.object({
    name: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tags$ {
  /** @deprecated use `Tags$inboundSchema` instead. */
  export const inboundSchema = Tags$inboundSchema;
  /** @deprecated use `Tags$outboundSchema` instead. */
  export const outboundSchema = Tags$outboundSchema;
  /** @deprecated use `Tags$Outbound` instead. */
  export type Outbound = Tags$Outbound;
}

export function tagsToJSON(tags: Tags): string {
  return JSON.stringify(Tags$outboundSchema.parse(tags));
}

export function tagsFromJSON(
  jsonString: string,
): SafeParseResult<Tags, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tags$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tags' from JSON`,
  );
}

/** @internal */
export const AIVisionTaggingAnalysisData$inboundSchema: z.ZodType<
  AIVisionTaggingAnalysisData,
  z.ZodTypeDef,
  unknown
> = z.object({
  tags: z.array(z.lazy(() => Tags$inboundSchema)),
  model_version: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "model_version": "modelVersion",
  });
});

/** @internal */
export type AIVisionTaggingAnalysisData$Outbound = {
  tags: Array<Tags$Outbound>;
  model_version?: number | undefined;
};

/** @internal */
export const AIVisionTaggingAnalysisData$outboundSchema: z.ZodType<
  AIVisionTaggingAnalysisData$Outbound,
  z.ZodTypeDef,
  AIVisionTaggingAnalysisData
> = z.object({
  tags: z.array(z.lazy(() => Tags$outboundSchema)),
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
export namespace AIVisionTaggingAnalysisData$ {
  /** @deprecated use `AIVisionTaggingAnalysisData$inboundSchema` instead. */
  export const inboundSchema = AIVisionTaggingAnalysisData$inboundSchema;
  /** @deprecated use `AIVisionTaggingAnalysisData$outboundSchema` instead. */
  export const outboundSchema = AIVisionTaggingAnalysisData$outboundSchema;
  /** @deprecated use `AIVisionTaggingAnalysisData$Outbound` instead. */
  export type Outbound = AIVisionTaggingAnalysisData$Outbound;
}

export function aiVisionTaggingAnalysisDataToJSON(
  aiVisionTaggingAnalysisData: AIVisionTaggingAnalysisData,
): string {
  return JSON.stringify(
    AIVisionTaggingAnalysisData$outboundSchema.parse(
      aiVisionTaggingAnalysisData,
    ),
  );
}

export function aiVisionTaggingAnalysisDataFromJSON(
  jsonString: string,
): SafeParseResult<AIVisionTaggingAnalysisData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AIVisionTaggingAnalysisData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AIVisionTaggingAnalysisData' from JSON`,
  );
}
