import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeed as createFeedAPI } from "../../services/apiFeed";
import { toast } from "react-hot-toast";

export function useCreateFeed() {
  const queryClient = useQueryClient();
  const { mutate: createFeed, isLoading: isCreating } = useMutation({
    mutationFn: createFeedAPI,
    onSuccess: () => {
      toast.success("New Post successfully created");
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createFeed };
}
