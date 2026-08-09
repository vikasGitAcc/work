import { IconBrandPrisma } from "@tabler/icons-react";
import { RiGoogleFill } from "@remixicon/react";

export default function Login() {
  return (
    <main className="min-h-screen px-4 py-4 font-sans bg-white">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-6">
          {/* Logo  */}
          <div className="w-full gap-2 flex items-center justify-center">
            <div className="h-6 w-6 flex items-center justify-center rounded-md bg-[#171717]">
              <IconBrandPrisma size="16" className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#0A0A0A]">
              Pyramid
            </span>
          </div>
          {/* Login Form */}
          <div className="w-full">
            {/*`container*/}
            <div className="w-[384px] h-[202px] flex flex-col bg-white rounded-4xl border border-[#e5e5e5] gap-6 p-6">
              {/* Heading and sub-heading */}
              <div className="flex flex-col gap-1.5">
                <h1 className="text-xl font-semibold leading-none text-[#0A0A0A] text-center">
                  Let's get back on track
                </h1>
                <p className="text-sm text-[#737373] text-center">
                  Enter your email below to login to your account
                </p>
              </div>
              {/*guest container*/}
              <div className="flex flex-col gap-3">
                <button className="rounded-full hover:cursor-pointer bg-[#171717] text-white text-sm w-full px-3 py-2">
                  Continue as Guest
                </button>
                <button className="flex hover:cursor-pointer items-center border border-[#e5e5e5] justify-center px-3 bg-white w-full rounded-full py-2 gap-2">
                  <RiGoogleFill className="h-4 w-4" />
                  <p className="text-sm bg-white font-medium font-sans leading-none">
                    Login with Google
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* Terms and conditions */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[208px]">
              <p className="text-xs font-normal font-sans text-[#737373] text-center">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline decoration-[#e5e5e5]">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline decoration-[#e5e5e5]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
