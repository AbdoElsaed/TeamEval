import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ProductOwnerTechnicalEvaluation } from "../types/evaluation";
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

const productOwnerTechnicalSchema = z.object({
  backlogManagement: z.object({
    prioritization: z.string().optional(),
    refinementSessions: z.string().optional(),
    businessAlignment: z.string().optional(),
  }),
  requirementsManagement: z.object({
    requirementsCommunication: z.string().optional(),
    stakeholderFeedback: z.string().optional(),
    technicalBusinessBalance: z.string().optional(),
  }),
  deliveryAndImpact: z.object({
    roadmapAdjustment: z.string().optional(),
    timelyDelivery: z.string().optional(),
    featureImpactAnalysis: z.string().optional(),
  }),
});

interface ProductOwnerTechnicalFormProps {
  onSubmit: (data: ProductOwnerTechnicalEvaluation) => void;
  onBack: () => void;
  defaultValues?: ProductOwnerTechnicalEvaluation;
}

export function ProductOwnerTechnicalForm({ onSubmit, onBack, defaultValues }: ProductOwnerTechnicalFormProps) {
  const form = useForm<ProductOwnerTechnicalEvaluation>({
    resolver: zodResolver(productOwnerTechnicalSchema),
    defaultValues: defaultValues || {
      backlogManagement: {
        prioritization: "",
        refinementSessions: "",
        businessAlignment: "",
      },
      requirementsManagement: {
        requirementsCommunication: "",
        stakeholderFeedback: "",
        technicalBusinessBalance: "",
      },
      deliveryAndImpact: {
        roadmapAdjustment: "",
        timelyDelivery: "",
        featureImpactAnalysis: "",
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
            <CardTitle className="text-xl font-semibold">Backlog Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="backlogManagement.prioritization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the product owner prioritize features and bug fixes?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe prioritization effectiveness..."
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
              name="backlogManagement.refinementSessions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How well does the product owner manage backlog grooming and refinement sessions?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe backlog refinement process..."
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
              name="backlogManagement.businessAlignment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To what extent does the product owner align backlog items with business goals?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe business alignment practices..."
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
            <CardTitle className="text-xl font-semibold">Requirements Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="requirementsManagement.requirementsCommunication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How clearly does the product owner communicate requirements to the team?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe requirements communication..."
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
              name="requirementsManagement.stakeholderFeedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the product owner gather and incorporate stakeholder feedback?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe stakeholder feedback management..."
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
              name="requirementsManagement.technicalBusinessBalance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How well does the product owner balance technical feasibility with business needs?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe technical-business balance..."
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
            <CardTitle className="text-xl font-semibold">Delivery and Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="deliveryAndImpact.roadmapAdjustment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How frequently does the product owner review and adjust roadmaps based on progress?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe roadmap adjustment process..."
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
              name="deliveryAndImpact.timelyDelivery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How effectively does the product owner ensure the timely delivery of key features?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe delivery management..."
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
              name="deliveryAndImpact.featureImpactAnalysis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To what extent does the product owner measure and analyze the impact of delivered features?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe feature impact analysis..."
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