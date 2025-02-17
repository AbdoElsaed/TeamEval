import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Eye, Download, Upload, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Evaluation } from "@/types/evaluation";
import { EvaluationDetailModal } from "./EvaluationDetailModal";

interface EvaluationsListProps {
  evaluations: Record<string, Evaluation>;
}

export function EvaluationsList({ evaluations }: EvaluationsListProps) {
  const navigate = useNavigate();
  const [selectedEvaluation, setSelectedEvaluation] = useState<Evaluation | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showClearAllDialog, setShowClearAllDialog] = useState(false);
  const [evaluationToDelete, setEvaluationToDelete] = useState<string | null>(null);

  const handleEdit = (email: string) => {
    navigate(`/?step=behavioral&email=${email}`);
  };

  const handleView = (evaluation: Evaluation) => {
    setSelectedEvaluation(evaluation);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(evaluations, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "evaluations.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target?.result as string);
          if (typeof importedData === 'object' && importedData !== null) {
            const mergedEvaluations = { ...evaluations, ...importedData };
            localStorage.setItem("evaluations", JSON.stringify(mergedEvaluations));
            window.location.reload();
          } else {
            alert("Invalid file format. Please import a valid evaluations JSON file.");
          }
        } catch {
          alert("Error reading file. Please make sure it's a valid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearAll = () => {
    localStorage.removeItem("evaluations");
    window.location.reload();
  };

  const handleDeleteEvaluation = (email: string) => {
    const updatedEvaluations = { ...evaluations };
    delete updatedEvaluations[email];
    localStorage.setItem("evaluations", JSON.stringify(updatedEvaluations));
    window.location.reload();
  };

  if (Object.keys(evaluations).length === 0) {
    return (
      <div className="text-center py-8 space-y-4">
        <CardDescription>No evaluations found</CardDescription>
        <div className="flex justify-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept=".json"
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleImportClick}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Import Evaluations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setShowClearAllDialog(true)}
          className="flex items-center gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Clear All
        </Button>
        <div className="flex gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept=".json"
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={handleImportClick}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(evaluations).map(([email, evaluation]) => (
          <Card key={email} className="hover:shadow-lg transition-shadow relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 h-5 w-5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-0"
              onClick={() => setEvaluationToDelete(email)}
            >
              <X className="h-3 w-3" />
            </Button>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {evaluation.teamMember.name}
                  </h3>
                  <p className="text-sm text-gray-500">{email}</p>
                  <p className="text-sm text-gray-500 capitalize">
                    {evaluation.teamMember.role.replace("-", " ")}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Status: </span>
                    <span className={`font-medium ${evaluation.technical ? 'text-green-600' : 'text-blue-600'}`}>
                      {evaluation.technical ? "Complete" : "In Progress"}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Last Updated: </span>
                    <span className="font-medium">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={() => handleEdit(email)}
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={() => handleView(evaluation)}
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedEvaluation && (
        <EvaluationDetailModal
          evaluation={selectedEvaluation}
          isOpen={!!selectedEvaluation}
          onClose={() => setSelectedEvaluation(null)}
          onEdit={handleEdit}
        />
      )}

      <AlertDialog open={showClearAllDialog} onOpenChange={setShowClearAllDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear All Evaluations</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all evaluations.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleClearAll} className="bg-red-600 hover:bg-red-700">
              Clear All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!evaluationToDelete} onOpenChange={() => setEvaluationToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Evaluation</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this evaluation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => {
                if (evaluationToDelete) {
                  handleDeleteEvaluation(evaluationToDelete);
                }
              }} 
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
