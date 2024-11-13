import { Facebook, Mail, Phone, X } from "lucide-react";
import React from "react";


const footerElemt = {
   company : ["About Us", "Contact Us", "Terms & Conditions", "Privacy Policy"],
   help : [ "FAQ", "Shipping", "Returns", "Track Order"],
   faq: ["Shipping", "Returns", "Track Order","Payments"],
   resource : ["Men", "Women", "Kids", "Accessories"]
}

function HomeFooter() {
  return (
    <div>
      <div className="links bg-gray-100 mt-3 p-[100px] grid grid-cols-5 gap-5">
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
        {
          Object.keys(footerElemt).map((key) => (
            <div className="links text-center flex flex-col gap-4" key={key}>
              <h3 className="text-2xl font-bold">{key.toUpperCase()}</h3>
              <div className="flex flex-col gap-2">
                {footerElemt[key as keyof typeof footerElemt].map((link) => (
                  <p className="cursor-pointer" key={link}>{link}</p>
                )) }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default HomeFooter;
