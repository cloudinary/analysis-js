/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Source,
  Source$inboundSchema,
  Source$Outbound,
  Source$outboundSchema,
} from "./source.js";

export type AnalyzeAIVisionGeneralRequest = {
  source: Source;
  /**
   * Whether to perform the analysis asynchronously.
   *
   * @remarks
   * If true, the response is returned immediately and analysis is done in the background.
   * Once complete, a webhook notification will be sent to the specified URL and/or to the URLs defined in the Webhook Notifications settings of your Cloudinary Console.
   */
  async?: boolean | undefined;
  /**
   * The webhook URL to notify when the analysis is complete. Only relevant when async is set to true.
   */
  notificationUrl?: string | undefined;
  /**
   * One or more prompts of open questions or tasks with an open answer
   */
  prompts?: Array<string> | undefined;
};

/** @internal */
export const AnalyzeAIVisionGeneralRequest$inboundSchema: z.ZodType<
  AnalyzeAIVisionGeneralRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  source: Source$inboundSchema,
  async: z.boolean().optional(),
  notification_url: z.string().optional(),
  prompts: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "notification_url": "notificationUrl",
  });
});

/** @internal */
export type AnalyzeAIVisionGeneralRequest$Outbound = {
  source: Source$Outbound;
  async?: boolean | undefined;
  notification_url?: string | undefined;
  prompts?: Array<string> | undefined;
};

/** @internal */
export const AnalyzeAIVisionGeneralRequest$outboundSchema: z.ZodType<
  AnalyzeAIVisionGeneralRequest$Outbound,
  z.ZodTypeDef,
  AnalyzeAIVisionGeneralRequest
> = z.object({
  source: Source$outboundSchema,
  async: z.boolean().optional(),
  notificationUrl: z.string().optional(),
  prompts: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    notificationUrl: "notification_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyzeAIVisionGeneralRequest$ {
  /** @deprecated use `AnalyzeAIVisionGeneralRequest$inboundSchema` instead. */
  export const inboundSchema = AnalyzeAIVisionGeneralRequest$inboundSchema;
  /** @deprecated use `AnalyzeAIVisionGeneralRequest$outboundSchema` instead. */
  export const outboundSchema = AnalyzeAIVisionGeneralRequest$outboundSchema;
  /** @deprecated use `AnalyzeAIVisionGeneralRequest$Outbound` instead. */
  export type Outbound = AnalyzeAIVisionGeneralRequest$Outbound;
}

export function analyzeAIVisionGeneralRequestToJSON(
  analyzeAIVisionGeneralRequest: AnalyzeAIVisionGeneralRequest,
): string {
  return JSON.stringify(
    AnalyzeAIVisionGeneralRequest$outboundSchema.parse(
      analyzeAIVisionGeneralRequest,
    ),
  );
}

export function analyzeAIVisionGeneralRequestFromJSON(
  jsonString: string,
): SafeParseResult<AnalyzeAIVisionGeneralRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyzeAIVisionGeneralRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyzeAIVisionGeneralRequest' from JSON`,
  );
}
