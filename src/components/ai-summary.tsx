"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getAiSummary } from "@/app/actions";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Skeleton } from "./ui/skeleton";

interface AiSummaryProps {
  phoneName: string;
  specifications: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="outline">
      <Sparkles className="mr-2 h-4 w-4 text-primary" />
      {pending ? "Generating..." : "Summarize with AI"}
    </Button>
  );
}

export function AiSummary({ phoneName, specifications }: AiSummaryProps) {
  const [state, formAction] = useFormState(getAiSummary, { summary: "" });

  return (
    <div className="mt-6">
      {!state.summary && !state.error && (
        <form action={formAction}>
          <input type="hidden" name="phoneName" value={phoneName} />
          <input type="hidden" name="specifications" value={specifications} />
          <SubmitButton />
        </form>
      )}

      {useFormStatus().pending && (
        <div className="space-y-2 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {state.error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.summary && (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              AI Summary
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pt-2">
              {state.summary}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
