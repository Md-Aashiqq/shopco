/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

interface CustomBreadCrumbProps {
  name: string;
  path: string;
  active?: boolean;
}

function CustomBreadCrumb({ links }: { links: CustomBreadCrumbProps[] }) {
  return (
    <div className="h-[1px] m-auto w-[90%] mt-3 ">
      <Breadcrumb>
        {links?.map((item: CustomBreadCrumbProps, index: number) => (
          <>
            <BreadcrumbItem className="p-1" key={index}>
              {item.active === true ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
              )}

              {item.active === undefined && <Slash className="h-3" />}
            </BreadcrumbItem>
            {/*  */}
          </>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default CustomBreadCrumb;
