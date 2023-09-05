import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../../services/apiFeed";
import { useSearchParams } from "react-router-dom";

export function useFeeds() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  console.log(page);
  const {
    isLoading,
    data: { data: feeds, count } = {},
    error,
  } = useQuery({
    queryKey: ["feeds", page],
    queryFn: () => getFeed({ page }),
  });

  return { isLoading, feeds, error, count };
}
