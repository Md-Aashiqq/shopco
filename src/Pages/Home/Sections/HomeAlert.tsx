import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

function HomeAlert() {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow && (
        <Alert className=" rounded-none  bg-black text-white">
          <AlertDescription className="flex h-3 justify-center items-center">
            <div className="mr-10">
              Sign up and get 20% off to your first order. Sign Up Now
            </div>

            <Button onClick={() => setIsShow(false)} variant={"ghost"}>
              <X />
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export default HomeAlert;
