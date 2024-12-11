
import Essentials from "@/components/Essentials";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Jordan from "@/components/Jordan";
import JordanSlider from "@/components/JordanSlider";
import Slider from "@/components/Slider";
import More from "@/components/More";
import Button from "@/components/Button";


export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Featured />
      <JordanSlider/>
      <Jordan />
      <Essentials/>
      <More/>
      <Button text={""} classNames={""}/>
      
    </div>
  );
}
