"use server";

import { summarizePhoneSpecifications } from "@/ai/flows/summarize-phone-specifications";
import { z } from "zod";

const summarySchema = z.object({
  phoneName: z.string(),
  specifications: z.string(),
});

type State = {
  summary?: string;
  error?: string;
};

export async function getAiSummary(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const { phoneName, specifications } = summarySchema.parse({
      phoneName: formData.get("phoneName"),
      specifications: formData.get("specifications"),
    });

    const result = await summarizePhoneSpecifications({
      phoneName,
      specifications,
    });

    if (result.summary) {
      return { summary: result.summary };
    } else {
      return { error: "Failed to generate summary." };
    }
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    }
    return { error: "An unknown error occurred." };
  }
}
