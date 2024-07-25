import HorizontalLine from "@/components/Geometry/HorizontalLine";
import { magenta } from "@/interfaces/ColorPallete";
import Image from "next/image";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <div>
        <Image
          alt="home landing art"
          src={"/images/header/header.jpg"}
          width={2000}
          height={200}
          style={{ borderRadius: 5 }}
        />
        <div className="bg-white text-blue-800 text-center pt-5 pb-5">
          <p className="font-medium to-blue-800 text-xl">Sebástian</p>
          <p className="font-black to-blue-800 text-5xl">Bennett</p>
        </div>
        <div className="bg-white text-blue-800 text-center pt-5 pb-10 pl-32 pr-32">
          <p className="pl-64 pr-64">
            I am an experienced Real Estate Agent with a passion for helping
            clients find their dream homes. I have extensive experience in the
            industry, including more than 5 years working as a real estate
            agent. I am knowledgeable about the latest market trends and
            understand the nuances of the real estate market. I pride myself on
            my ability to negotiate the best deals for my clients and to
            navigate complex real estate agreements. I am highly organized,
            detail-oriented, and have strong communication skills.
          </p>
        </div>
      </div>
    </div>
  );
}
