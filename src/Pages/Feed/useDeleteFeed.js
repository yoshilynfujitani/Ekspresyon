import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteFeed as deleteFeedAPI } from "../../services/apiFeed";

export function useDeleteFeed() {
  const queryClient = useQueryClient();
  const { mutate: deleteFeed, isLoading: isDeleting } = useMutation({
    mutationFn: deleteFeedAPI,
    onSuccess: () => {
      toast.success("Deleted Succesfully Test");
      queryClient.invalidateQueries({ queryKey: ["feeds"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteFeed, isDeleting };
}
