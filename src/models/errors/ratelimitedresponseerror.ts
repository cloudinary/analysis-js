/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";
import { CloudinaryAnalysisError } from "./cloudinaryanalysiserror.js";

/**
 * Rate limited
 */
export type RateLimitedResponseErrorData = {
  error?: components.ErrorObject | null | undefined;
  limits?: components.LimitsObject | null | undefined;
};

/**
 * Rate limited
 */
export class RateLimitedResponseError extends CloudinaryAnalysisError {
  error?: components.ErrorObject | null | undefined;
  limits?: components.LimitsObject | null | undefined;

  /** The original data that was passed to this error instance. */
  data$: RateLimitedResponseErrorData;

  constructor(
    err: RateLimitedResponseErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.error != null) this.error = err.error;
    if (err.limits != null) this.limits = err.limits;

    this.name = "RateLimitedResponseError";
  }
}

/** @internal */
export const RateLimitedResponseError$inboundSchema: z.ZodType<
  RateLimitedResponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.nullable(components.ErrorObject$inboundSchema).optional(),
  limits: z.nullable(components.LimitsObject$inboundSchema).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new RateLimitedResponseError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type RateLimitedResponseError$Outbound = {
  error?: components.ErrorObject$Outbound | null | undefined;
  limits?: components.LimitsObject$Outbound | null | undefined;
};

/** @internal */
export const RateLimitedResponseError$outboundSchema: z.ZodType<
  RateLimitedResponseError$Outbound,
  z.ZodTypeDef,
  RateLimitedResponseError
> = z.instanceof(RateLimitedResponseError)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.nullable(components.ErrorObject$outboundSchema).optional(),
    limits: z.nullable(components.LimitsObject$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateLimitedResponseError$ {
  /** @deprecated use `RateLimitedResponseError$inboundSchema` instead. */
  export const inboundSchema = RateLimitedResponseError$inboundSchema;
  /** @deprecated use `RateLimitedResponseError$outboundSchema` instead. */
  export const outboundSchema = RateLimitedResponseError$outboundSchema;
  /** @deprecated use `RateLimitedResponseError$Outbound` instead. */
  export type Outbound = RateLimitedResponseError$Outbound;
}
