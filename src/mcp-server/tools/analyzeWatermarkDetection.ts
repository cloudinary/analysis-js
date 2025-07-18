/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { analyzeWatermarkDetection } from "../../funcs/analyzeWatermarkDetection.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.BaseAnalyzeRequest$inboundSchema,
};

export const tool$analyzeWatermarkDetection: ToolDefinition<typeof args> = {
  name: "analyze-watermark-detection",
  description: `Analyze - Watermark Detection

Analyze an image using the [Watermark Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection) detection model.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await analyzeWatermarkDetection(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
