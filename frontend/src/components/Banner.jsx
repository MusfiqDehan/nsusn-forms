import Lottie from "react-lottie";
import IdeaAnimation from "../lotties/IdeaAnimation.json";

const Banner = () => {
  const ideaAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: IdeaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hero flex min-h-screen flex-col items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          className="w-full max-w-md lg:max-w-lg"
          options={ideaAnimationOptions}
          height={400}
          width={600}
        />
        <div className="text-center lg:ml-10 lg:text-left">
          <h1 className="text-3xl font-bold lg:text-5xl">
            The Next LaunchPad!
          </h1>
          <p className="py-6">To Pave The Pathway to Your Successful Venture</p>
          <a
            href="#apply-now"
            className="btn bg-purple-900 px-10 text-white hover:bg-purple-800 hover:px-11 hover:shadow-xl hover:transition "
          >
            Apply Now!
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
