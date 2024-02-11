import packageDetails from "@/public/data/packageDetails.json";

export async function getPackageDetails(packageId: string) {
  return packageDetails;
}
