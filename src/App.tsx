import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { TeamMemberForm } from "./components/TeamMemberForm";
import { BehavioralEvaluationForm } from "./components/BehavioralEvaluationForm";
import { EngineerTechnicalForm } from "./components/EngineerTechnicalForm";
import { DesignerTechnicalForm } from "./components/DesignerTechnicalForm";
import { ProductOwnerTechnicalForm } from "./components/ProductOwnerTechnicalForm";
import { EvaluationsList } from "./components/EvaluationsList";
import { EvaluationHeader } from "./components/EvaluationHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TeamMember,
  BehavioralEvaluation,
  EngineerTechnicalEvaluation,
  DesignerTechnicalEvaluation,
  ProductOwnerTechnicalEvaluation,
  Evaluation,
} from "./types/evaluation";

type Step = "team-member" | "behavioral" | "technical" | "complete" | "list";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [evaluation, setEvaluation] = useState<Partial<Evaluation>>({});
  const [allEvaluations, setAllEvaluations] = useState<
    Record<string, Evaluation>
  >({});

  const currentStep = (searchParams.get("step") as Step) || "team-member";
  const currentEmail = searchParams.get("email");

  // Load all evaluations on mount
  useEffect(() => {
    const savedEvaluations = localStorage.getItem("evaluations");
    if (savedEvaluations) {
      setAllEvaluations(JSON.parse(savedEvaluations));
    }
  }, []);

  // Load specific evaluation when email changes in URL
  useEffect(() => {
    if (currentEmail) {
      const savedEvaluations = localStorage.getItem("evaluations");
      if (savedEvaluations) {
        const evaluations = JSON.parse(savedEvaluations);
        if (evaluations[currentEmail]) {
          setEvaluation(evaluations[currentEmail]);
          // Only redirect to complete if they've finished the evaluation
          if (evaluations[currentEmail].technical) {
            setSearchParams({ step: "complete", email: currentEmail });
          }
        }
      }
    }
  }, [currentEmail]);

  const saveEvaluation = (updatedEvaluation: Partial<Evaluation>) => {
    const email = updatedEvaluation.teamMember?.email;
    if (email) {
      const savedEvaluations = localStorage.getItem("evaluations");
      const evaluations = savedEvaluations ? JSON.parse(savedEvaluations) : {};
      evaluations[email] = updatedEvaluation;
      localStorage.setItem("evaluations", JSON.stringify(evaluations));
      setAllEvaluations(evaluations);
    }
  };

  const handleTeamMemberSubmit = (data: TeamMember) => {
    // Load any existing data for this user
    const savedEvaluations = localStorage.getItem("evaluations");
    const evaluations = savedEvaluations ? JSON.parse(savedEvaluations) : {};
    const existingEvaluation = evaluations[data.email] || {};

    const updatedEvaluation = {
      ...existingEvaluation,
      teamMember: data,
    };
    setEvaluation(updatedEvaluation);
    // Don't save to localStorage yet
    setSearchParams({ step: "behavioral", email: data.email });
  };

  const handleBehavioralSubmit = (data: BehavioralEvaluation) => {
    const updatedEvaluation = { ...evaluation, behavioral: data };
    setEvaluation(updatedEvaluation);
    // Save to localStorage after behavioral submission
    saveEvaluation(updatedEvaluation);
    setSearchParams({
      step: "technical",
      email: evaluation.teamMember?.email || "",
    });
  };

  const handleTechnicalSubmit = (
    data:
      | EngineerTechnicalEvaluation
      | DesignerTechnicalEvaluation
      | ProductOwnerTechnicalEvaluation
  ) => {
    const updatedEvaluation = { ...evaluation, technical: data };
    setEvaluation(updatedEvaluation);
    // Save to localStorage after final submission
    saveEvaluation(updatedEvaluation);
    setSearchParams({
      step: "complete",
      email: evaluation.teamMember?.email || "",
    });
  };

  const handleBack = () => {
    const email = evaluation.teamMember?.email || "";
    switch (currentStep) {
      case "behavioral":
        setSearchParams({ step: "team-member", email });
        break;
      case "technical":
        setSearchParams({ step: "behavioral", email });
        break;
      default:
        break;
    }
  };

  const handleStartNew = () => {
    setSearchParams({ step: "team-member" });
    setEvaluation({});
  };

  const handleEdit = () => {
    const email = evaluation.teamMember?.email || "";
    setSearchParams({ step: "behavioral", email });
  };

  const handleViewList = () => {
    setSearchParams({ step: "list" });
  };

  const renderComplete = () => (
    <div className="text-center space-y-6 py-8">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-3">
          <svg
            className="w-16 h-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 6L9 17l-5-5m36-3l-11 11-5-5"
            />
          </svg>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Evaluation Complete!
        </CardTitle>
        <CardDescription className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Thank you for completing the evaluation for{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {evaluation.teamMember?.name}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Evaluation Details
          </h3>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600 dark:text-gray-300">Role</dt>
              <dd className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                {evaluation.teamMember?.role.replace("-", " ")}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-gray-600 dark:text-gray-300">
                Email
              </dt>
              <dd className="text-sm font-medium text-gray-900 dark:text-white">
                {evaluation.teamMember?.email}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button onClick={handleStartNew} className="px-8 py-2" size="lg">
              Start New Evaluation
            </Button>
            <Button
              onClick={handleEdit}
              variant="outline"
              className="px-8 py-2"
              size="lg"
            >
              Edit Evaluation
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The evaluation has been saved and can be accessed later using the
            team member's email
          </p>
        </div>
      </CardContent>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case "team-member":
        return (
          <TeamMemberForm
            onSubmit={handleTeamMemberSubmit}
            defaultValues={evaluation.teamMember}
          />
        );
      case "behavioral":
        return (
          <BehavioralEvaluationForm
            onSubmit={handleBehavioralSubmit}
            onBack={handleBack}
            defaultValues={evaluation.behavioral}
          />
        );
      case "technical":
        switch (evaluation.teamMember?.role) {
          case "engineer":
            return (
              <EngineerTechnicalForm
                onSubmit={handleTechnicalSubmit}
                onBack={handleBack}
                defaultValues={
                  evaluation.technical as EngineerTechnicalEvaluation
                }
              />
            );
          case "designer":
            return (
              <DesignerTechnicalForm
                onSubmit={handleTechnicalSubmit}
                onBack={handleBack}
                defaultValues={
                  evaluation.technical as DesignerTechnicalEvaluation
                }
              />
            );
          case "product-owner":
            return (
              <ProductOwnerTechnicalForm
                onSubmit={handleTechnicalSubmit}
                onBack={handleBack}
                defaultValues={
                  evaluation.technical as ProductOwnerTechnicalEvaluation
                }
              />
            );
          default:
            return null;
        }
      case "list":
        return <EvaluationsList evaluations={allEvaluations} />;
      case "complete":
        return renderComplete();
      default:
        navigate("/?step=team-member");
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="w-full">
          <EvaluationHeader
            currentStep={currentStep}
            onViewList={handleViewList}
          />
          <CardContent>{renderStep()}</CardContent>
        </Card>
      </div>
    </div>
  );
}
