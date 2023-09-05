import supabase from "./supabase";

export async function getFeed({ page }) {
  let query = supabase.from("feed").select("*", {
    count: "exact",
  });
  if (page) {
    const from = (page - 1) * 10;
    const to = from + 10 - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Feeds could not be loaded");
  }

  return { data, count };
}

export async function createFeed(newFeed) {
  const { data, error } = await supabase
    .from("feed")
    .insert([newFeed])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Feeds could not be added");
  }

  return data;
}

export async function deleteFeed(id) {
  const { data, error } = await supabase.from("feed").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Feeds could not be added");
  }
  return data;
}
