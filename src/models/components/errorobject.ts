/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ErrorCategory,
  ErrorCategory$inboundSchema,
  ErrorCategory$outboundSchema,
} from "./errorcategory.js";

export type Details = {};

export type ErrorObject = {
  category?: ErrorCategory | undefined;
  code?: string | undefined;
  message?: string | undefined;
  details?: Details | undefined;
  requestId?: string | undefined;
};

/** @internal */
export const Details$inboundSchema: z.ZodType<Details, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Details$Outbound = {};

/** @internal */
export const Details$outboundSchema: z.ZodType<
  Details$Outbound,
  z.ZodTypeDef,
  Details
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Details$ {
  /** @deprecated use `Details$inboundSchema` instead. */
  export const inboundSchema = Details$inboundSchema;
  /** @deprecated use `Details$outboundSchema` instead. */
  export const outboundSchema = Details$outboundSchema;
  /** @deprecated use `Details$Outbound` instead. */
  export type Outbound = Details$Outbound;
}

export function detailsToJSON(details: Details): string {
  return JSON.stringify(Details$outboundSchema.parse(details));
}

export function detailsFromJSON(
  jsonString: string,
): SafeParseResult<Details, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Details$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Details' from JSON`,
  );
}

/** @internal */
export const ErrorObject$inboundSchema: z.ZodType<
  ErrorObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  category: ErrorCategory$inboundSchema.optional(),
  code: z.string().optional(),
  message: z.string().optional(),
  details: z.lazy(() => Details$inboundSchema).optional(),
  request_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "request_id": "requestId",
  });
});

/** @internal */
export type ErrorObject$Outbound = {
  category?: string | undefined;
  code?: string | undefined;
  message?: string | undefined;
  details?: Details$Outbound | undefined;
  request_id?: string | undefined;
};

/** @internal */
export const ErrorObject$outboundSchema: z.ZodType<
  ErrorObject$Outbound,
  z.ZodTypeDef,
  ErrorObject
> = z.object({
  category: ErrorCategory$outboundSchema.optional(),
  code: z.string().optional(),
  message: z.string().optional(),
  details: z.lazy(() => Details$outboundSchema).optional(),
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
export namespace ErrorObject$ {
  /** @deprecated use `ErrorObject$inboundSchema` instead. */
  export const inboundSchema = ErrorObject$inboundSchema;
  /** @deprecated use `ErrorObject$outboundSchema` instead. */
  export const outboundSchema = ErrorObject$outboundSchema;
  /** @deprecated use `ErrorObject$Outbound` instead. */
  export type Outbound = ErrorObject$Outbound;
}

export function errorObjectToJSON(errorObject: ErrorObject): string {
  return JSON.stringify(ErrorObject$outboundSchema.parse(errorObject));
}

export function errorObjectFromJSON(
  jsonString: string,
): SafeParseResult<ErrorObject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorObject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorObject' from JSON`,
  );
}
