'use server';
/**
 * @fileOverview An AI agent that summarizes phone specifications.
 *
 * - summarizePhoneSpecifications - A function that handles the phone specification summarization process.
 * - SummarizePhoneSpecificationsInput - The input type for the summarizePhoneSpecifications function.
 * - SummarizePhoneSpecificationsOutput - The return type for the summarizePhoneSpecifications function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePhoneSpecificationsInputSchema = z.object({
  phoneName: z.string().describe('The name of the mobile phone model.'),
  specifications: z
    .string()
    .describe('A comprehensive string of technical specifications for the phone.'),
});
export type SummarizePhoneSpecificationsInput = z.infer<
  typeof SummarizePhoneSpecificationsInputSchema
>;

const SummarizePhoneSpecificationsOutputSchema = z.object({
  summary:
    z.string().describe('A concise, easy-to-understand summary of the phone\'s key features and differentiators.'),
});
export type SummarizePhoneSpecificationsOutput = z.infer<
  typeof SummarizePhoneSpecificationsOutputSchema
>;

export async function summarizePhoneSpecifications(
  input: SummarizePhoneSpecificationsInput
): Promise<SummarizePhoneSpecificationsOutput> {
  return summarizePhoneSpecificationsFlow(input);
}

const summarizePhoneSpecificationsPrompt = ai.definePrompt({
  name: 'summarizePhoneSpecificationsPrompt',
  input: {schema: SummarizePhoneSpecificationsInputSchema},
  output: {schema: SummarizePhoneSpecificationsOutputSchema},
  prompt: `You are an expert in mobile phone technology, skilled at breaking down complex technical specifications into easily digestible summaries.

Given the following mobile phone model and its detailed technical specifications, your task is to create a concise, easy-to-understand summary.
The summary should highlight the phone's key features and differentiators, making it simple for a user to quickly grasp what makes this phone stand out without reading through all the technical data.

Phone Model: {{{phoneName}}}

Technical Specifications:
{{{specifications}}}

Your summary should be no more than 3-5 sentences.`,
});

const summarizePhoneSpecificationsFlow = ai.defineFlow(
  {
    name: 'summarizePhoneSpecificationsFlow',
    inputSchema: SummarizePhoneSpecificationsInputSchema,
    outputSchema: SummarizePhoneSpecificationsOutputSchema,
  },
  async (input) => {
    const {output} = await summarizePhoneSpecificationsPrompt(input);
    return output!;
  }
);
