import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { fullStar } from "@/Pages/_Components/Product";
import { testimonialData } from "@/utils/data";

interface TestimonalItemProps {
  rating: number;
  name: string;
  review: string;
}

function TestimonalItem(data: TestimonalItemProps) {
  return (
    <>
      <Card className="mx-5 p-4 h-[200px]">
        <CardContent className="flex flex-col gap-4">
          <div className="rating flex gap-2">{fullStar(data.rating)}</div>
          <div className="person text-xl font-bold">{data.name}</div>
          <div className="review text-sm text-black">{data.review}</div>
        </CardContent>
      </Card>
    </>
  );
}

function Testomonials() {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="test__header flex items-center justify-between px-[100px] my-10">
        <h3 className="text-5xl font-bold">OUR HAPPY CUSTOMERS</h3>

        <div className="buttons">
          <Button
            onClick={() => sliderRef.current?.slickPrev()}
            variant={"ghost"}
          >
            <MoveLeft />
          </Button>
          <Button
            onClick={() => sliderRef.current?.slickNext()}
            variant={"ghost"}
          >
            <MoveRight />
          </Button>
        </div>
      </div>

      <div className="slider">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
        >
          {testimonialData.map((item, index) => (
            <TestimonalItem
              key={index}
              rating={item.rating}
              name={item.name}
              review={item.review}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Testomonials;
