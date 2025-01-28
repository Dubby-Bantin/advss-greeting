import { services, trainingTopics } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col justify-center items-center bg-[url(/images/310d5aa443ec40a6bc4bbf5095893bcb.jpg)] bg-cover bg-center w-full h-[20rem]">
        <div className="absolute inset-0 bg-black/40 w-full h-full" />
        <div className="z-10 flex flex-col items-center text-white">
          <div className="flex items-center gap-10">
            <Image src="/images/logo.png" alt="alt" width={100} height={100} />
            <h1 className="font-bold text-xl md:text-8xl">ADVSS USA</h1>
          </div>
          <p className="font-semibold text-2xl">
            Elite Hospitality & Security Services
          </p>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <LastSection />
      <Footer />
    </div>
  );
};

const FirstSection = () => {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col-reverse items-center gap-7 bg-gradient-to-r from-white to-[#f5f5f5] px-6 lg:px-10 py-10 lg:py-20">
      <div className="flex flex-col gap-8 p-5 md:p-8 lg:p-10 w-full lg:w-1/2">
        <div className="flex flex-col mb-6">
          <div className="font-semibold text-3xl">
            <span className="mr-2 font-semibold text-section">What</span>
            we do
          </div>
          <div className="bg-section rounded-md w-[100px] h-[8px]" />
        </div>
        <p className="mb-4 text-gray-700 text-md">
          ADVSS is one of the most prestigious protection programs in the
          industry today. With a proven track record, we have developed an
          intuitive strategy built to increase satisfaction and performance. We
          stand out from the crowd by providing a competent and proactive
          service.
        </p>
        <p className="text-gray-700 text-md">
          We plan ahead and are agile enough to adjust to an ever-evolving
          industry climate. With professionalism and service being top-notch,
          our staff ensures we are a step above the rest. We provide
          unarmed/armed combat training, weapon systems training, and an array
          of other security-specific classes, so you can rest assured the staff
          on your property is more than capable. We service our clients
          interests indubitably, making you priority number one, always.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          width={500}
          height={500}
          src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="what-we-do image"
          className="relative rounded-2xl w-full h-[330px] object-cover"
          layout="responsive"
        />
      </div>
    </div>
  );
};
const SecondSection = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-7 bg-gradient-to-r from-white to-[#f5f5f5] px-6 lg:px-10 py-10 lg:py-20">
      <div className="relative rounded-md w-full lg:w-1/2 h-[30rem] overflow-clip">
        <Image
          width={500}
          height={500}
          src="https://as2.ftcdn.net/v2/jpg/00/75/65/43/1000_F_75654347_Xp50OCEHi0FU6j6a8trYGEtsxQLD0ENO.jpg"
          alt="what-we-do image"
          className="relative rounded-2xl w-full h-full object-cover"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col gap-8 p-5 md:p-8 lg:p-10 w-full lg:w-1/2">
        <div className="flex flex-col mb-6">
          <span className="mr-2 font-semibold text-3xl text-section">
            Mission
          </span>
          <div className="bg-section rounded-md w-[100px] h-[8px]" />
        </div>
        <p className="mb-4 text-gray-700 text-md">
          ADVSS strives to thrive by having an effective and responsive
          management team. It is also imperative we provide the highest caliber
          service supported by the latest technology. Excellence in service is
          paramount for us.
        </p>
        <p className="text-gray-700 text-md">
          After witnessing the lowering of quality from other large service
          providers we vow to provide a caliber of officer on a par with what we
          expect from ourselves. They must take pride in their appearance,
          possess integrity, eloquence and exhibit the desire to perform well
          becoming better each and every day.
        </p>
      </div>
    </div>
  );
};
const ThirdSection = () => {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col-reverse items-center gap-7 bg-gradient-to-r from-white to-[#f5f5f5] px-6 lg:px-10 py-10 lg:py-20">
      <div className="flex flex-col gap-6 p-5 md:p-8 lg:p-10 w-full lg:w-1/2">
        <div className="flex flex-col">
          <span className="mr-2 font-semibold text-3xl text-section">Team</span>
          <div className="bg-section rounded-md w-[100px] h-[8px]" />
        </div>
        <p className="text-gray-700 text-md">
          Every account is supported by a selected Manager and Supervisors that
          provide both additional training and accountability.
        </p>
        <p className="text-gray-700 text-md">
          The Manager oversees performance, tracks improvement, pays visits
          periodically and provides operational oversight in addition to the
          documented standard procedures the Supervisors ensure are followed to
          the letter.
        </p>
        <p className="text-gray-700 text-md">
          The Manager is the primary point of contact for both the management
          staff at your property and the Supervisors. This person is our vital
          link to our performance, training, development and relied upon for
          effective communication in day-to-day operations. The responsibility
          of the account rests with the Manager.
        </p>
        <p className="text-gray-700 text-md">
          We view this as a partnership, one with which we learn from and adapt
          to. A variety of issues can arise when trusted with a property’s
          operation and it’s safe to say you are in great hands. We look forward
          to a flourishing partnership.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          width={500}
          height={500}
          src="https://as2.ftcdn.net/v2/jpg/06/33/30/07/1000_F_633300726_1wZ322s8yURghZfXYcMtxubCs2Zq8fDc.jpg"
          alt="what-we-do image"
          className="relative rounded-2xl w-full h-[330px] object-cover"
          layout="responsive"
        />
      </div>
    </div>
  );
};
const FourthSection = () => {
  return (
    <div className="bg-gradient-to-r from-white to-[#f5f5f5] px-6 py-10">
      <div className="mx-auto container">
        <div className="mb-8 text-center">
          <h2 className="font-semibold text-[#3b82f6] text-3xl">
            Managerial Expectations
          </h2>
          <div className="bg-primary2 mx-auto my-4 rounded-md w-[80px] h-[8px]"></div>
          <p className="text-gray-700 text-lg">
            When we have our team in place, the training begins. With any team
            bound to exceptional performance, perfect practice makes perfect.
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              1. Establish Expectations
            </h3>
            <ul className="pl-6 text-gray-700 list-disc">
              <li>Clear communication of roles and responsibilities.</li>
              <li>Setting performance standards.</li>
              <li>Ongoing feedback to ensure alignment.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              2. Create and Document Procedures
            </h3>
            <ul className="pl-6 text-gray-700 list-disc">
              <li>Define step-by-step operational procedures.</li>
              <li>
                Ensure procedures are accessible and clear for all team members.
              </li>
              <li>Regularly review and update documentation as necessary.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
            3. Practice
          </h3>
          <p className="text-gray-700 text-lg">
            Perfect practice makes perfect. Regular, hands-on training ensures
            the team is fully prepared for any challenges.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 font-semibold text-[#3b82f6] text-3xl text-center">
            Establishing Goals
          </h2>
          <div className="bg-primary2 mx-auto my-4 rounded-md w-[80px] h-[8px]"></div>

          <p className="mb-6 text-gray-700 text-lg">
            Once training is complete, we focus on establishing clear,
            actionable goals to guide performance and efficiency.
          </p>

          <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
            <div>
              <h4 className="mb-4 font-semibold text-[#3b82f6] text-xl">
                90-Day Reviews
              </h4>
              <p className="text-gray-700">
                We encourage regular 90-day reviews to track progress, reinforce
                goals, and identify areas for improvement.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#3b82f6] text-xl">
                Spot Checks
              </h4>
              <p className="text-gray-700">
                We perform spot checks to ensure team members remain accountable
                and perform specific tasks to their highest standard.
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 text-lg">
            This approach provides an effective method to reinforce knowledge
            and responsibilities while maintaining top performance.
          </p>
        </div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  return (
    <div className="bg-gray-50 px-6 py-20">
      <div className="mx-auto container">
        <h2 className="mb-10 font-semibold text-3xl text-center">
          Recruiting & Referrals
        </h2>

        <p className="mb-8 text-center text-lg">
          We are committed to building a team based on integrity and excellence
          through word-of-mouth and referrals. Our recruitment process focuses
          on attracting high-caliber talent, fostering internal growth, and
          building a supportive team environment.
        </p>

        <div className="flex flex-wrap gap-10 mb-16">
          <div className="w-full">
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              Recruiting
            </h3>
            <p className="mb-6 text-gray-700 text-lg">
              We have no advertising other than by word of mouth. By paying
              higher than the industry average, we maintain a higher caliber of
              Officer with lower turnover. The end result is that we get the
              desired outcomes—staff members that are effective and exude
              integrity and honor.
            </p>
            <p className="text-gray-700 text-lg">
              We encourage promoting from within. Once an individual has
              excelled in prior placements, they will have the opportunity to
              take on additional responsibilities and encourage others to
              perform at an advanced level on other accounts.
            </p>
          </div>

          <div className="w-full">
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              Referrals
            </h3>
            <p className="mb-6 text-gray-700 text-lg">
              Many staff members have someone they know who would like a
              position within this organization. However, not everybody is
              suitable. We do take into consideration who referred the said
              candidate but will also scrutinize character and attitude to
              decipher if the potential candidate has the desired aptitude.
            </p>
            <p className="mb-6 text-gray-700 text-lg">
              We encourage our employees to refer friends as they know who would
              be a potential good fit for the position. However, we like to not
              only pride ourselves on being able to spot top-notch talent and
              mold them into exceptional individuals but also spot those that
              would hinder the operation.
            </p>
            <p className="text-gray-700 text-lg">
              We want to help propel those who hold themselves accountable and
              strive for higher standards, both on the clock and off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SixthSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(95.08deg, #f1fcfd 3.92%, #ffeded 57.81%, #e9f6fb 99.18%)",
      }}
      className="bg-gray-50 px-6 py-20"
    >
      <div className="mx-auto container">
        <h2 className="mb-10 font-semibold text-3xl text-center">Training</h2>
      </div>
      <div className="flex flex-col gap-10 container">
        {trainingTopics.map(({ title, topics }, i) => (
          <div key={i} className="ml-10">
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              {title}
            </h3>
            <ul className="grid md:grid-cols-3 text-lg list-disc">
              {topics.map((topic, i) => (
                <li className="" key={i}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const SeventhSection = () => {
  return (
    <div className="bg-gray-50 px-6 py-20">
      <div className="mx-auto container">
        <h2 className="mb-10 font-semibold text-3xl text-center">
          Customer Service
        </h2>
      </div>
      <div className="justify-center items-center gap-10 grid grid-cols-1 md:grid-cols-2">
        {services.map(({ title, text }, i) => (
          <div
            className={`flex flex-col gap-5 shadow-md p-10 rounded-md ${
              i === 2 && "md:left-1/2 relative"
            }`}
            key={i}
          >
            <div className="bg-section w-5 h-5 clip"></div>
            <p className="text-2xl text-section">{title}</p>
            <small className="text-lg">{text}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

const EigthSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(95.08deg, #f1fcfd 3.92%, #ffeded 57.81%, #e9f6fb 99.18%)",
      }}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col gap-8 px-[20px] py-[50px] md:py-[100px] w-full md:w-[75%]">
        <div>
          <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
            Quality
          </h1>
          <div className="bg-primary2 rounded-md w-[100px] h-[8px]"></div>
        </div>
        <p className="text-xl">
          ‘ADVSS – Advanced Security Services’ are well-versed at providing
          exceptional and successful services where others fail, primarily by
          sharing the clients perspective and encouraging performance at an
          ‘Elite’ level. Our unique approach to management and leadership
          evolves on a perpetual basis, enabling us to stay in step with your
          organization and also having ours be a step ahead of the competition.
          Our Managers go through industry breaking developmental and
          operational training, giving us the ability to redefine our industry.
          Our promise is to always go above and beyond and honor our commitment
          to this partnership.
        </p>
      </div>
    </div>
  );
};

const LastSection = () => {
  return (
    <div className="bg-gray-50 px-6 py-20">
      <div className="mx-auto container">
        <h2 className="mb-10 font-semibold text-3xl text-center">
          Seamless Transition Process
        </h2>

        <p className="mb-8 text-center text-lg">
          Upon contract signing, our transition initiative will begin
          immediately. Our experienced team ensures each phase is carried out
          with precision, ensuring a smooth integration and readiness for
          success. Below are the key phases of our transition process.
        </p>

        <div className="space-y-16">
          <div>
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              Phase One: Planning & Preparation
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>Form the Transition Team</li>
              <li>Schedule and conduct introductory meetings</li>
              <li>
                Generate progress reports outlining key requirements, training
                scope, and dress codes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              Phase Two: Selection & Training
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>
                Identify internal candidates for placement (including
                supervisors)
              </li>
              <li>Client-approved procedures are finalized</li>
              <li>Classroom training begins</li>
              <li>Personnel training is completed and evaluated</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#3b82f6] text-2xl">
              Phase Three: Implementation & Ongoing Support
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>All personnel report for duty</li>
              <li>
                Conduct a meeting between the transition team and on-site
                management
              </li>
              <li>
                Regular training and meetings are scheduled to ensure continued
                alignment
              </li>
              <li>Operations resume as normal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="flex flex-col justify-center items-center p-10 w-full">
    <Image src="/images/logo.png" alt="alt" width={100} height={100} />
    <Link href={"/"} className="">
      www.AdvssUsa.com
    </Link>
  </div>
);
export default Home;

// additional officer to review in 30 days 