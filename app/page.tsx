"use client";

import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Home = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI Job queued");
      },
      onError: () => {
        toast.error("Something went wrong: ");
      },
    })
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job queued");
      },
    })
  );
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-y-6">
      Proteccted Server Component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
      <Button
        disabled={create.isPending}
        onClick={() => {
          create.mutate();
        }}
      >
        Create Workflow
      </Button>
    </div>
  );
};

export default Home;
