import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
export default function HomeAlert({ message }: { message: string }) {
  return (
    <Alert variant="destructive" className="bg-white mb-12">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
