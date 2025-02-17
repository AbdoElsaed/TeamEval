import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { DesignerTechnicalEvaluation } from "../types/evaluation";
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

const designerTechnicalSchema = z.object({
  quality: z.object({
    uiConsistency: z.string().optional(),
    accessibilityStandards: z.string().optional(),
    feedbackIncorporation: z.string().optional(),
  }),
  usabilityAndUX: z.object({
    userFriendliness: z.string().optional(),
    usabilityValidation: z.string().optional(),
    aestheticsBalance: z.string().optional(),
  }),
  collaboration: z.object({
    engineerCollaboration: z.string().optional(),
    specificationClarity: z.string().optional(),
    modificationResponse: z.string().optional(),
  }),
});

interface DesignerTechnicalFormProps {
  onSubmit: (data: DesignerTechnicalEvaluation) => void;
  onBack: () => void;
  defaultValues?: DesignerTechnicalEvaluation;
}

export function DesignerTechnicalForm({
  onSubmit,
  onBack,
  defaultValues,
}: DesignerTechnicalFormProps) {
  const form = useForm<DesignerTechnicalEvaluation>({
    resolver: zodResolver(designerTechnicalSchema),
    defaultValues: defaultValues || {
      quality: {
        uiConsistency: "",
        accessibilityStandards: "",
        feedbackIncorporation: "",
      },
      usabilityAndUX: {
        userFriendliness: "",
        usabilityValidation: "",
        aestheticsBalance: "",
      },
      collaboration: {
        engineerCollaboration: "",
        specificationClarity: "",
        modificationResponse: "",
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
            <CardTitle className="text-xl font-semibold">Quality</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="quality.uiConsistency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How well does the designer ensure consistency in UI components and layouts?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe UI consistency practices..."
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
              name="quality.accessibilityStandards"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To what extent does the designer adhere to accessibility standards and best practices?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe accessibility practices..."
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
              name="quality.feedbackIncorporation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the designer incorporate user feedback into design iterations?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe feedback incorporation process..."
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
            <CardTitle className="text-xl font-semibold">Usability and UX</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="usabilityAndUX.userFriendliness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How intuitive and user-friendly are the designs produced by the designer?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe user-friendliness of designs..."
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
              name="usabilityAndUX.usabilityValidation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What methods does the designer use to validate usability before development?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe usability validation methods..."
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
              name="usabilityAndUX.aestheticsBalance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the designer balance aesthetics with functionality?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe aesthetics and functionality balance..."
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
            <CardTitle className="text-xl font-semibold">Collaboration and Handoff</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="collaboration.engineerCollaboration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How well does the designer collaborate with engineers to ensure design feasibility?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe collaboration with engineers..."
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
              name="collaboration.specificationClarity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How clear and detailed are the design specifications and assets provided?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe specification clarity..."
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
              name="collaboration.modificationResponse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How efficiently does the designer respond to requests for modifications during implementation?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe modification response efficiency..."
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
