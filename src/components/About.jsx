import aboutImg from "../assets/pngwing.com.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="flex mt-4 md:mt-0 text-left">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              cupiditate dolor perspiciatis eligendi eaque, qui laborum
              necessitatibus voluptas numquam tempore ratione corporis id velit
              dignissimos amet ut eius doloribus laboriosam.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt="About"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
