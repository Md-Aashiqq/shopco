import { Facebook, Mail, Phone, X } from "lucide-react";
import React from "react";

function HomeFooter() {
  return (
    <div>
      <div className="links bg-gray-100 mt-3 p-[100px] grid grid-cols-5">
        <div className="info flex flex-col gap-8">
          <h3 className="text-3xl font-bold">SHOP.CO</h3>
          <p className="desc">
            {" "}
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="social-links flex gap-3">
            <div className="bg-amber-400 rounded-full p-2">
              <Facebook />
            </div>
            <div className="bg-amber-400 rounded-full p-2">
              <X />
            </div>
            <div className="bg-amber-400 rounded-full p-2">
              <Mail />
            </div>
            <div className="bg-amber-400 rounded-full p-2">
              <Phone />
            </div>
          </div>
        </div>

        <div className="compnay"></div>

        <div className="help">Help</div>
        <div className="faq">FAQ</div>
        <div className="resource">Resource</div>
      </div>
    </div>
  );
}

export default HomeFooter;
