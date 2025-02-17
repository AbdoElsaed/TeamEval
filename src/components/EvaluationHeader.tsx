import { ListIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface EvaluationHeaderProps {
  currentStep: string;
  onViewList: () => void;
}

export function EvaluationHeader({ currentStep, onViewList }: EvaluationHeaderProps) {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/");
  };

  return (
    <CardHeader className="text-center">
      <div className="flex justify-between items-center">
        <CardTitle 
          onClick={handleTitleClick}
          className="cursor-pointer hover:text-primary transition-colors"
        >
          Team Member Evaluation
        </CardTitle>
        {currentStep !== "list" && (
          <Button
            variant="outline"
            size="sm"
            onClick={onViewList}
            className="flex items-center gap-2"
          >
            <ListIcon className="h-4 w-4" />
            View All Evaluations
          </Button>
        )}
      </div>
      <CardDescription>
        {currentStep === "list"
          ? "View and manage all team member evaluations"
          : "Complete the evaluation form for team members"}
      </CardDescription>
    </CardHeader>
  );
} 