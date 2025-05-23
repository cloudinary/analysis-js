/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AssetId = {
  /**
   * The asset ID to analyze
   */
  assetId: string;
};

export type Uri = {
  /**
   * The URI of the asset to analyze
   */
  uri: string;
};

export type Source = Uri | AssetId;

/** @internal */
export const AssetId$inboundSchema: z.ZodType<AssetId, z.ZodTypeDef, unknown> =
  z.object({
    asset_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "asset_id": "assetId",
    });
  });

/** @internal */
export type AssetId$Outbound = {
  asset_id: string;
};

/** @internal */
export const AssetId$outboundSchema: z.ZodType<
  AssetId$Outbound,
  z.ZodTypeDef,
  AssetId
> = z.object({
  assetId: z.string(),
}).transform((v) => {
  return remap$(v, {
    assetId: "asset_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssetId$ {
  /** @deprecated use `AssetId$inboundSchema` instead. */
  export const inboundSchema = AssetId$inboundSchema;
  /** @deprecated use `AssetId$outboundSchema` instead. */
  export const outboundSchema = AssetId$outboundSchema;
  /** @deprecated use `AssetId$Outbound` instead. */
  export type Outbound = AssetId$Outbound;
}

export function assetIdToJSON(assetId: AssetId): string {
  return JSON.stringify(AssetId$outboundSchema.parse(assetId));
}

export function assetIdFromJSON(
  jsonString: string,
): SafeParseResult<AssetId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssetId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssetId' from JSON`,
  );
}

/** @internal */
export const Uri$inboundSchema: z.ZodType<Uri, z.ZodTypeDef, unknown> = z
  .object({
    uri: z.string(),
  });

/** @internal */
export type Uri$Outbound = {
  uri: string;
};

/** @internal */
export const Uri$outboundSchema: z.ZodType<Uri$Outbound, z.ZodTypeDef, Uri> = z
  .object({
    uri: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Uri$ {
  /** @deprecated use `Uri$inboundSchema` instead. */
  export const inboundSchema = Uri$inboundSchema;
  /** @deprecated use `Uri$outboundSchema` instead. */
  export const outboundSchema = Uri$outboundSchema;
  /** @deprecated use `Uri$Outbound` instead. */
  export type Outbound = Uri$Outbound;
}

export function uriToJSON(uri: Uri): string {
  return JSON.stringify(Uri$outboundSchema.parse(uri));
}

export function uriFromJSON(
  jsonString: string,
): SafeParseResult<Uri, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Uri$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Uri' from JSON`,
  );
}

/** @internal */
export const Source$inboundSchema: z.ZodType<Source, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Uri$inboundSchema),
    z.lazy(() => AssetId$inboundSchema),
  ]);

/** @internal */
export type Source$Outbound = Uri$Outbound | AssetId$Outbound;

/** @internal */
export const Source$outboundSchema: z.ZodType<
  Source$Outbound,
  z.ZodTypeDef,
  Source
> = z.union([
  z.lazy(() => Uri$outboundSchema),
  z.lazy(() => AssetId$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Source$ {
  /** @deprecated use `Source$inboundSchema` instead. */
  export const inboundSchema = Source$inboundSchema;
  /** @deprecated use `Source$outboundSchema` instead. */
  export const outboundSchema = Source$outboundSchema;
  /** @deprecated use `Source$Outbound` instead. */
  export type Outbound = Source$Outbound;
}

export function sourceToJSON(source: Source): string {
  return JSON.stringify(Source$outboundSchema.parse(source));
}

export function sourceFromJSON(
  jsonString: string,
): SafeParseResult<Source, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Source$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Source' from JSON`,
  );
}
