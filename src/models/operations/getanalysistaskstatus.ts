/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAnalysisTaskStatusRequest = {
  /**
   * The ID of the analysis task
   */
  taskId: string;
};

/** @internal */
export const GetAnalysisTaskStatusRequest$inboundSchema: z.ZodType<
  GetAnalysisTaskStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  task_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "task_id": "taskId",
  });
});

/** @internal */
export type GetAnalysisTaskStatusRequest$Outbound = {
  task_id: string;
};

/** @internal */
export const GetAnalysisTaskStatusRequest$outboundSchema: z.ZodType<
  GetAnalysisTaskStatusRequest$Outbound,
  z.ZodTypeDef,
  GetAnalysisTaskStatusRequest
> = z.object({
  taskId: z.string(),
}).transform((v) => {
  return remap$(v, {
    taskId: "task_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAnalysisTaskStatusRequest$ {
  /** @deprecated use `GetAnalysisTaskStatusRequest$inboundSchema` instead. */
  export const inboundSchema = GetAnalysisTaskStatusRequest$inboundSchema;
  /** @deprecated use `GetAnalysisTaskStatusRequest$outboundSchema` instead. */
  export const outboundSchema = GetAnalysisTaskStatusRequest$outboundSchema;
  /** @deprecated use `GetAnalysisTaskStatusRequest$Outbound` instead. */
  export type Outbound = GetAnalysisTaskStatusRequest$Outbound;
}

export function getAnalysisTaskStatusRequestToJSON(
  getAnalysisTaskStatusRequest: GetAnalysisTaskStatusRequest,
): string {
  return JSON.stringify(
    GetAnalysisTaskStatusRequest$outboundSchema.parse(
      getAnalysisTaskStatusRequest,
    ),
  );
}

export function getAnalysisTaskStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAnalysisTaskStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAnalysisTaskStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAnalysisTaskStatusRequest' from JSON`,
  );
}
