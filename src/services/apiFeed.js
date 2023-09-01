import supabase from "./supabase";

export async function getFeed() {
  const { data, error } = await supabase.from("feed").select("*");

  if (error) {
    console.log(error);
    throw new Error("Feeds could not be loaded");
  }

  return data;
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
