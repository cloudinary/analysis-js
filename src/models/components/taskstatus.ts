/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The status of an async task
 */
export const TaskStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
/**
 * The status of an async task
 */
export type TaskStatus = ClosedEnum<typeof TaskStatus>;

/** @internal */
export const TaskStatus$inboundSchema: z.ZodNativeEnum<typeof TaskStatus> = z
  .nativeEnum(TaskStatus);

/** @internal */
export const TaskStatus$outboundSchema: z.ZodNativeEnum<typeof TaskStatus> =
  TaskStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskStatus$ {
  /** @deprecated use `TaskStatus$inboundSchema` instead. */
  export const inboundSchema = TaskStatus$inboundSchema;
  /** @deprecated use `TaskStatus$outboundSchema` instead. */
  export const outboundSchema = TaskStatus$outboundSchema;
}
