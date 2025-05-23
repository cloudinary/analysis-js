/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Value = {
  Yes: "yes",
  No: "no",
  Unknown: "unknown",
} as const;
export type Value = ClosedEnum<typeof Value>;

export type AIVisionModerationAnalysisDataResponses = {
  prompt?: string | undefined;
  value?: Value | undefined;
};

export type AIVisionModerationAnalysisData = {
  responses: Array<AIVisionModerationAnalysisDataResponses>;
  modelVersion?: number | undefined;
};

/** @internal */
export const Value$inboundSchema: z.ZodNativeEnum<typeof Value> = z.nativeEnum(
  Value,
);

/** @internal */
export const Value$outboundSchema: z.ZodNativeEnum<typeof Value> =
  Value$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
}

/** @internal */
export const AIVisionModerationAnalysisDataResponses$inboundSchema: z.ZodType<
  AIVisionModerationAnalysisDataResponses,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt: z.string().optional(),
  value: Value$inboundSchema.optional(),
});

/** @internal */
export type AIVisionModerationAnalysisDataResponses$Outbound = {
  prompt?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const AIVisionModerationAnalysisDataResponses$outboundSchema: z.ZodType<
  AIVisionModerationAnalysisDataResponses$Outbound,
  z.ZodTypeDef,
  AIVisionModerationAnalysisDataResponses
> = z.object({
  prompt: z.string().optional(),
  value: Value$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AIVisionModerationAnalysisDataResponses$ {
  /** @deprecated use `AIVisionModerationAnalysisDataResponses$inboundSchema` instead. */
  export const inboundSchema =
    AIVisionModerationAnalysisDataResponses$inboundSchema;
  /** @deprecated use `AIVisionModerationAnalysisDataResponses$outboundSchema` instead. */
  export const outboundSchema =
    AIVisionModerationAnalysisDataResponses$outboundSchema;
  /** @deprecated use `AIVisionModerationAnalysisDataResponses$Outbound` instead. */
  export type Outbound = AIVisionModerationAnalysisDataResponses$Outbound;
}

export function aiVisionModerationAnalysisDataResponsesToJSON(
  aiVisionModerationAnalysisDataResponses:
    AIVisionModerationAnalysisDataResponses,
): string {
  return JSON.stringify(
    AIVisionModerationAnalysisDataResponses$outboundSchema.parse(
      aiVisionModerationAnalysisDataResponses,
    ),
  );
}

export function aiVisionModerationAnalysisDataResponsesFromJSON(
  jsonString: string,
): SafeParseResult<
  AIVisionModerationAnalysisDataResponses,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AIVisionModerationAnalysisDataResponses$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AIVisionModerationAnalysisDataResponses' from JSON`,
  );
}

/** @internal */
export const AIVisionModerationAnalysisData$inboundSchema: z.ZodType<
  AIVisionModerationAnalysisData,
  z.ZodTypeDef,
  unknown
> = z.object({
  responses: z.array(
    z.lazy(() => AIVisionModerationAnalysisDataResponses$inboundSchema),
  ),
  model_version: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "model_version": "modelVersion",
  });
});

/** @internal */
export type AIVisionModerationAnalysisData$Outbound = {
  responses: Array<AIVisionModerationAnalysisDataResponses$Outbound>;
  model_version?: number | undefined;
};

/** @internal */
export const AIVisionModerationAnalysisData$outboundSchema: z.ZodType<
  AIVisionModerationAnalysisData$Outbound,
  z.ZodTypeDef,
  AIVisionModerationAnalysisData
> = z.object({
  responses: z.array(
    z.lazy(() => AIVisionModerationAnalysisDataResponses$outboundSchema),
  ),
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
export namespace AIVisionModerationAnalysisData$ {
  /** @deprecated use `AIVisionModerationAnalysisData$inboundSchema` instead. */
  export const inboundSchema = AIVisionModerationAnalysisData$inboundSchema;
  /** @deprecated use `AIVisionModerationAnalysisData$outboundSchema` instead. */
  export const outboundSchema = AIVisionModerationAnalysisData$outboundSchema;
  /** @deprecated use `AIVisionModerationAnalysisData$Outbound` instead. */
  export type Outbound = AIVisionModerationAnalysisData$Outbound;
}

export function aiVisionModerationAnalysisDataToJSON(
  aiVisionModerationAnalysisData: AIVisionModerationAnalysisData,
): string {
  return JSON.stringify(
    AIVisionModerationAnalysisData$outboundSchema.parse(
      aiVisionModerationAnalysisData,
    ),
  );
}

export function aiVisionModerationAnalysisDataFromJSON(
  jsonString: string,
): SafeParseResult<AIVisionModerationAnalysisData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AIVisionModerationAnalysisData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AIVisionModerationAnalysisData' from JSON`,
  );
}
