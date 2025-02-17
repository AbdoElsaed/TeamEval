import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { EngineerTechnicalEvaluation } from "../types/evaluation";
import { ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const engineerTechnicalSchema = z.object({
  codeQuality: z.object({
    codeReadability: z.string().optional(),
    codeReusability: z.string().optional(),
    feedbackIncorporation: z.string().optional(),
  }),
  speedOfWork: z.object({
    deadlineMeeting: z.string().optional(),
    issueResolution: z.string().optional(),
    reworkFrequency: z.string().optional(),
  }),
  bugMetrics: z.object({
    postReleaseBugs: z.string().optional(),
    bugResolutionTime: z.string().optional(),
    bugPreventionSteps: z.string().optional(),
  }),
});

interface EngineerTechnicalFormProps {
  onSubmit: (data: EngineerTechnicalEvaluation) => void;
  onBack: () => void;
  defaultValues?: EngineerTechnicalEvaluation;
}

export function EngineerTechnicalForm({ onSubmit, onBack, defaultValues }: EngineerTechnicalFormProps) {
  const form = useForm<EngineerTechnicalEvaluation>({
    resolver: zodResolver(engineerTechnicalSchema),
    defaultValues: defaultValues || {
      codeQuality: {
        codeReadability: "",
        codeReusability: "",
        feedbackIncorporation: "",
      },
      speedOfWork: {
        deadlineMeeting: "",
        issueResolution: "",
        reworkFrequency: "",
      },
      bugMetrics: {
        postReleaseBugs: "",
        bugResolutionTime: "",
        bugPreventionSteps: "",
      },
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between items-center mb-6">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={onBack}
            size="sm"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>

        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Code Quality</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="codeQuality.codeReadability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How does the engineer ensure code readability and maintainability?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe code readability practices..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="codeQuality.codeReusability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To what extent is the engineer's code reusable and extensible?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe code reusability practices..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="codeQuality.feedbackIncorporation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the engineer incorporate feedback from peer reviews?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe feedback incorporation practices..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Speed of Work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="speedOfWork.deadlineMeeting"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How consistently does the engineer meet deadlines and deliverables?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe deadline management..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="speedOfWork.issueResolution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How efficient is the engineer in resolving issues during development?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe issue resolution efficiency..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="speedOfWork.reworkFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How often does the engineer require rework or clarification after delivery?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe rework frequency..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Bug Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="bugMetrics.postReleaseBugs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many post-release bugs have been attributed to the engineer's work?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe post-release bug metrics..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bugMetrics.bugResolutionTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the engineer address and resolve bugs in a timely manner?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe bug resolution efficiency..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bugMetrics.bugPreventionSteps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What steps does the engineer take to minimize logical bugs in their code?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe bug prevention practices..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Submit Evaluation
          </Button>
        </div>
      </form>
    </Form>
  );
} 