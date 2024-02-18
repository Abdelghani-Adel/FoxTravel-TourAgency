import packageDetails from "@/public/data/packageDetails.json";
import packageList from '@/public/data/Cards_Packages.json'

export async function getPackageDetails(packageId: string) {
  return packageDetails;
}

export async function getPackageList() {
  return packageList;
} 


export async function getBestPackages() {
    //
}