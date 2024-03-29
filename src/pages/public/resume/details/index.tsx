import { useState } from "react";
import Select from "react-select";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { GrLanguage } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import { RiBriefcase4Fill, RiShieldUserFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { toast } from "react-toastify";
import { GiBackwardTime, GiDatabase } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { ProfileLogo } from "../../../../assets";
import useResume from "./useResumeDetails";

let notify = () =>
  toast.success("Shortlisted !", {
    autoClose: 1500,
    theme: "dark",
    position: "bottom-right",
  });

function Resumedetails() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClicked(true);
    }, 500); // Delay of 1 second (1000 milliseconds)
  };
  const { resume } = useResume();
  return (
    <>
      <div className="w-11/12 lg:w-10/12 py-10 mx-auto flex flex-col gap-5">
        <div className="flex justify-between flex-col gap-y-5 text-center md:text-left md:flex-row items-center">
          <div className="flex flex-col md:flex-row gap-5 capitalize">
            <img
              className="h-28 w-28 md:h-28 object-cover rounded-full"
              src={ProfileLogo}
              alt="logo"
            />
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold text-lg">{resume?.name}</h4>
              <p className="text-xs font-semibold text-gray-700">
                {resume?.designation}
              </p>
            </div>
          </div>
          {/* <div>
                <button  onClick={()=>notify() && handleClick()} className="border  border-primaryclr hover:bg-primaryclr px-5 py-1.5 text-gray-700 hover:text-white duration-300 text-sm font-semibold uppercase w-fit">{loading ? 'Loading...' : clicked ? 'Shortlisted' : 'Shortlist'}</button>
              </div> */}
        </div>
        <hr />
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10">
          <div>
            <p className="text-sm text-justify text-gray-600">
              {resume?.description}
            </p>
          </div>
          <div className="grid text-gray-700 grid-cols-2  lg:grid-cols-3  gap-5">
            <div className="flex gap-3 items-center text-sm font-bold">
              <GiBackwardTime className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">Experince</p>
                <p className="">{resume?.workExperince} years</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <RiShieldUserFill className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">Age</p>
                <p className="">18 - 28 years</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <GiDatabase className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">currentsalary</p>
                <p className="">{resume?.Csalary}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <IoIosRocket className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">expectsalary</p>
                <p className="">{resume?.Esalary}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center text-sm font-bold">
              <GrLanguage className="text-xl" />
              <div className="flex flex-col gap-1">
                <p className="capitalize text-gray-500">languages</p>
                <p className="">{resume?.language}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Education */}
        <div>
          <span className="flex items-center gap-5">
            <FaGraduationCap className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              Education
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    disploma in fine arts
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    Belmont University Bachelor’s Degree in Computer Science
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    Belmont University Master Degree in Computer Science
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Experince */}
        <div>
          <span className="flex items-center gap-5">
            <RiBriefcase4Fill className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              work experince
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    San Francisc Senior Python Developer
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    Houston Python Developer
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <span className="flex flex-col">
                  <h4 className="text-sm font-semibold capitalize text-gray-600">
                    Angeloues Junior Python
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-gray-500">
                    2008 - 2011
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skill */}
        <div>
          <span className="flex items-center gap-5">
            <VscGraphLine className="text-secondaryclr border-thirdclr text-4xl border-2 p-2 rounded-full " />
            <h3 className="text-lg uppercase lg:tracking-wide font-semibold text-gray-800">
              work experince
            </h3>
          </span>
          <div className="p-2 mt-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <p className="text-sm font-semibold capitalize text-gray-600">
                  skill
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <p className="text-sm font-semibold capitalize text-gray-600">
                  skill
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <p className="text-sm font-semibold capitalize text-gray-600">
                  skill
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TbPointFilled className="text-xl" />
                <p className="text-sm font-semibold capitalize text-gray-600">
                  skill
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resumedetails;
