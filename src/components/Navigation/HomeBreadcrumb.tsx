import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";

export default function HomeBreadcrumb({
  currentSection,
}: {
  currentSection: string;
}) {
  return (
    <Breadcrumb className="ml-4 mt-6">
      <BreadcrumbList className="flex flex-wrap">
        <BreadcrumbItem>
          <BreadcrumbLink className="text-stone-400" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-stone-400">
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white">
            {currentSection}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
