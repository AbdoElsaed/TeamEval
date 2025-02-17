import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Evaluation } from "@/types/evaluation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EvaluationDetailModalProps {
  evaluation: Evaluation;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (email: string) => void;
}

export function EvaluationDetailModal({
  evaluation,
  isOpen,
  onClose,
  onEdit,
}: EvaluationDetailModalProps) {
  // Determine which tabs should be enabled based on available data
  const hasBehavioral = !!evaluation.behavioral;
  const hasTechnical = !!evaluation.technical;
  const defaultTab = hasBehavioral ? "behavioral" : "technical";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-bold">
                {evaluation.teamMember.name}
              </DialogTitle>
              <p className="text-sm text-gray-500 mt-1">
                {evaluation.teamMember.email} ·{" "}
                <span className="capitalize">
                  {evaluation.teamMember.role.replace("-", " ")}
                </span>
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => onEdit(evaluation.teamMember.email)}
            >
              Edit Evaluation
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="behavioral" disabled={!hasBehavioral}>
              Behavioral Evaluation
            </TabsTrigger>
            <TabsTrigger value="technical" disabled={!hasTechnical}>
              Technical Evaluation
            </TabsTrigger>
          </TabsList>

          {hasBehavioral && (
            <TabsContent value="behavioral" className="mt-4 space-y-6">
              {Object.entries(evaluation.behavioral).map(([section, data]) => (
                <div key={section} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold capitalize mb-4">
                    {section.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(
                      data as Record<string, string | undefined>
                    ).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="mt-1 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                          {value || "Not provided"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          )}

          {hasTechnical && (
            <TabsContent value="technical" className="mt-4 space-y-6">
              {Object.entries(evaluation.technical).map(([section, data]) => (
                <div key={section} className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold capitalize mb-4">
                    {section.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(
                      data as Record<string, string | undefined>
                    ).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </p>
                        <p className="mt-1 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
                          {value || "Not provided"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          )}

          {!hasBehavioral && !hasTechnical && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                This evaluation is in progress. No data available yet.
              </p>
            </div>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
