import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BehavioralEvaluation } from "../types/evaluation";
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

const behavioralSchema = z.object({
  selfAppraisal: z.object({
    keyAchievementsAndChallenges: z.string().optional(),
    areasOfExcellenceAndGrowth: z.string().optional(),
    contributionToTeam: z.string().optional(),
  }),
  managerReview: z.object({
    alignmentWithGoals: z.string().optional(),
    strengthsAndImprovements: z.string().optional(),
    feedbackHandling: z.string().optional(),
  }),
  peerReview: z.object({
    collaborationAndCommunication: z.string().optional(),
    teamDynamicsImpact: z.string().optional(),
    constructiveCriticismHandling: z.string().optional(),
    crossRoleFeedback: z.string().optional(),
  }),
  teamwork: z.object({
    conflictHandling: z.string().optional(),
    collaborationExample: z.string().optional(),
  }),
  leadership: z.object({
    leadershipDemonstration: z.string().optional(),
    initiativeExample: z.string().optional(),
    mentorship: z.string().optional(),
  }),
  ownership: z.object({
    taskOwnership: z.string().optional(),
    extraMileExample: z.string().optional(),
    accountabilityHandling: z.string().optional(),
  }),
  responsibility: z.object({
    priorityManagement: z.string().optional(),
  }),
  achievements: z.object({
    proudestAchievements: z.string().optional(),
    contributionImpact: z.string().optional(),
    recognitionApproach: z.string().optional(),
  }),
  improvements: z.object({
    focusAreas: z.string().optional(),
    actionSteps: z.string().optional(),
    supportNeeded: z.string().optional(),
  }),
});

interface BehavioralEvaluationFormProps {
  onSubmit: (data: BehavioralEvaluation) => void;
  onBack: () => void;
  defaultValues?: BehavioralEvaluation;
}

export function BehavioralEvaluationForm({
  onSubmit,
  onBack,
  defaultValues,
}: BehavioralEvaluationFormProps) {
  const form = useForm<BehavioralEvaluation>({
    resolver: zodResolver(behavioralSchema),
    defaultValues: defaultValues || {
      selfAppraisal: {
        keyAchievementsAndChallenges: "",
        areasOfExcellenceAndGrowth: "",
        contributionToTeam: "",
      },
      managerReview: {
        alignmentWithGoals: "",
        strengthsAndImprovements: "",
        feedbackHandling: "",
      },
      peerReview: {
        collaborationAndCommunication: "",
        teamDynamicsImpact: "",
        constructiveCriticismHandling: "",
        crossRoleFeedback: "",
      },
      teamwork: {
        conflictHandling: "",
        collaborationExample: "",
      },
      leadership: {
        leadershipDemonstration: "",
        initiativeExample: "",
        mentorship: "",
      },
      ownership: {
        taskOwnership: "",
        extraMileExample: "",
        accountabilityHandling: "",
      },
      responsibility: {
        priorityManagement: "",
      },
      achievements: {
        proudestAchievements: "",
        contributionImpact: "",
        recognitionApproach: "",
      },
      improvements: {
        focusAreas: "",
        actionSteps: "",
        supportNeeded: "",
      },
    },
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
            <CardTitle className="text-xl font-semibold">Self Appraisal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="selfAppraisal.keyAchievementsAndChallenges"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Reflect on your key achievements and challenges over the past year.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your key achievements and challenges..."
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
              name="selfAppraisal.areasOfExcellenceAndGrowth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What areas do you believe you have excelled in, and where do you see room for growth?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your areas of excellence and growth..."
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
              name="selfAppraisal.contributionToTeam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How do you perceive your contribution to the team's success?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your contribution to the team..."
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
            <CardTitle className="text-xl font-semibold">Manager Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="managerReview.alignmentWithGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How effectively does the engineer align with team goals and company values?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe alignment with goals and values..."
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
              name="managerReview.strengthsAndImprovements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What are the key strengths and areas for improvement observed by the manager?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe strengths and areas for improvement..."
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
              name="managerReview.feedbackHandling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How well does the engineer handle feedback and apply it to their work?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe feedback handling..."
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
            <CardTitle className="text-xl font-semibold">Peer Review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="peerReview.collaborationAndCommunication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer collaborate and communicate with peers?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe collaboration and communication..."
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
              name="peerReview.teamDynamicsImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What impact does the engineer have on team dynamics and morale?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe impact on team dynamics..."
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
              name="peerReview.constructiveCriticismHandling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How effectively does the engineer handle constructive criticism from peers?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe handling of constructive criticism..."
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
              name="peerReview.crossRoleFeedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    As a peer, provide feedback about the team member's interaction with designers, POs, and QA.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe cross-role interactions..."
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
            <CardTitle className="text-xl font-semibold">Teamwork</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="teamwork.conflictHandling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer handle conflicts or disagreements within the team?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe conflict handling..."
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
              name="teamwork.collaborationExample"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Describe a situation where the engineer demonstrated effective collaboration.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe collaboration example..."
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
            <CardTitle className="text-xl font-semibold">Leadership</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="leadership.leadershipDemonstration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer demonstrate leadership, even in non-leadership roles?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe leadership demonstration..."
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
              name="leadership.initiativeExample"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Describe a situation where the engineer took initiative to drive a project or task forward.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe initiative example..."
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
              name="leadership.mentorship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer mentor or support junior team members?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe mentorship approach..."
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
            <CardTitle className="text-xl font-semibold">Ownership</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="ownership.taskOwnership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How consistently does the engineer take ownership of their tasks and deliverables?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe task ownership..."
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
              name="ownership.extraMileExample"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Describe a situation where the engineer went above and beyond to ensure success.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe going above and beyond..."
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
              name="ownership.accountabilityHandling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer handle accountability for mistakes or setbacks?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe accountability handling..."
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
            <CardTitle className="text-xl font-semibold">Responsibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="responsibility.priorityManagement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How does the engineer handle competing priorities and deadlines?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe priority management..."
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
            <CardTitle className="text-xl font-semibold">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="achievements.proudestAchievements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What achievements from the past year are you most proud of?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe proudest achievements..."
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
              name="achievements.contributionImpact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How have these achievements contributed to the team or organization?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe achievement impact..."
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
              name="achievements.recognitionApproach"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How do you ensure your achievements are recognized and celebrated?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe recognition approach..."
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
            <CardTitle className="text-xl font-semibold">Improvements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="improvements.focusAreas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What specific areas would you like to focus on for improvement in the next year?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe focus areas..."
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
              name="improvements.actionSteps"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What steps will you take to achieve these improvements?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe action steps..."
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
              name="improvements.supportNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    How can the team or organization support you in reaching these goals?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe support needed..."
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
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
