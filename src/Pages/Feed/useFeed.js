import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../../services/apiFeed";

export function useFeeds() {
  const {
    isLoading,
    data: feeds,
    error,
  } = useQuery({
    queryKey: ["feeds"],
    queryFn: getFeed,
  });

  return { isLoading, feeds, error };
}
