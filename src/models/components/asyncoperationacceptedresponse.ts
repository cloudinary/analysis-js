/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TaskStatus,
  TaskStatus$inboundSchema,
  TaskStatus$outboundSchema,
} from "./taskstatus.js";

export type AsyncOperationAcceptedResponseData = {
  taskId: string;
  /**
   * The status of an async task
   */
  status: TaskStatus;
};

/**
 * Analysis accepted
 */
export type AsyncOperationAcceptedResponse = {
  data?: AsyncOperationAcceptedResponseData | undefined;
  requestId?: string | undefined;
};

/** @internal */
export const AsyncOperationAcceptedResponseData$inboundSchema: z.ZodType<
  AsyncOperationAcceptedResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  task_id: z.string(),
  status: TaskStatus$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "task_id": "taskId",
  });
});

/** @internal */
export type AsyncOperationAcceptedResponseData$Outbound = {
  task_id: string;
  status: string;
};

/** @internal */
export const AsyncOperationAcceptedResponseData$outboundSchema: z.ZodType<
  AsyncOperationAcceptedResponseData$Outbound,
  z.ZodTypeDef,
  AsyncOperationAcceptedResponseData
> = z.object({
  taskId: z.string(),
  status: TaskStatus$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    taskId: "task_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AsyncOperationAcceptedResponseData$ {
  /** @deprecated use `AsyncOperationAcceptedResponseData$inboundSchema` instead. */
  export const inboundSchema = AsyncOperationAcceptedResponseData$inboundSchema;
  /** @deprecated use `AsyncOperationAcceptedResponseData$outboundSchema` instead. */
  export const outboundSchema =
    AsyncOperationAcceptedResponseData$outboundSchema;
  /** @deprecated use `AsyncOperationAcceptedResponseData$Outbound` instead. */
  export type Outbound = AsyncOperationAcceptedResponseData$Outbound;
}

export function asyncOperationAcceptedResponseDataToJSON(
  asyncOperationAcceptedResponseData: AsyncOperationAcceptedResponseData,
): string {
  return JSON.stringify(
    AsyncOperationAcceptedResponseData$outboundSchema.parse(
      asyncOperationAcceptedResponseData,
    ),
  );
}

export function asyncOperationAcceptedResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<AsyncOperationAcceptedResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AsyncOperationAcceptedResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AsyncOperationAcceptedResponseData' from JSON`,
  );
}

/** @internal */
export const AsyncOperationAcceptedResponse$inboundSchema: z.ZodType<
  AsyncOperationAcceptedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => AsyncOperationAcceptedResponseData$inboundSchema)
    .optional(),
  request_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "request_id": "requestId",
  });
});

/** @internal */
export type AsyncOperationAcceptedResponse$Outbound = {
  data?: AsyncOperationAcceptedResponseData$Outbound | undefined;
  request_id?: string | undefined;
};

/** @internal */
export const AsyncOperationAcceptedResponse$outboundSchema: z.ZodType<
  AsyncOperationAcceptedResponse$Outbound,
  z.ZodTypeDef,
  AsyncOperationAcceptedResponse
> = z.object({
  data: z.lazy(() => AsyncOperationAcceptedResponseData$outboundSchema)
    .optional(),
  requestId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    requestId: "request_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AsyncOperationAcceptedResponse$ {
  /** @deprecated use `AsyncOperationAcceptedResponse$inboundSchema` instead. */
  export const inboundSchema = AsyncOperationAcceptedResponse$inboundSchema;
  /** @deprecated use `AsyncOperationAcceptedResponse$outboundSchema` instead. */
  export const outboundSchema = AsyncOperationAcceptedResponse$outboundSchema;
  /** @deprecated use `AsyncOperationAcceptedResponse$Outbound` instead. */
  export type Outbound = AsyncOperationAcceptedResponse$Outbound;
}

export function asyncOperationAcceptedResponseToJSON(
  asyncOperationAcceptedResponse: AsyncOperationAcceptedResponse,
): string {
  return JSON.stringify(
    AsyncOperationAcceptedResponse$outboundSchema.parse(
      asyncOperationAcceptedResponse,
    ),
  );
}

export function asyncOperationAcceptedResponseFromJSON(
  jsonString: string,
): SafeParseResult<AsyncOperationAcceptedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AsyncOperationAcceptedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AsyncOperationAcceptedResponse' from JSON`,
  );
}
