import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../../services/apiFeed";
import { useSearchParams } from "react-router-dom";

export function useFeeds() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const filter = !searchParams.get("genre") ? "all" : searchParams.get("genre");

  const {
    isLoading,
    data: { data: feeds, count } = {},
    error,
  } = useQuery({
    queryKey: ["feeds", page, filter],
    queryFn: () => getFeed({ page, filter }),
  });

  return { isLoading, feeds, error, count };
}
