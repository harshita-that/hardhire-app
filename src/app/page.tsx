import { getContractorsWithGrades } from "@/lib/hardhire/homepage-queries";
import HomeClient from "./home-client";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page ?? 1);

  const contractors = await getContractorsWithGrades(page, 10);

  return (
    <HomeClient contractors={contractors ?? []} page={page} />
  );
}