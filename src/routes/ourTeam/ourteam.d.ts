interface FoxEmployeeList {
  [key: string]: Employee[];
}

type FoxDepartment = "owners" | "management";

interface FoxEmployee {
  id: number;
  image: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  quote: string;
}
