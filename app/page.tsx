import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="space-y-4 text-xl">
          <h1 className="text-center">Comming Soon!</h1>
          <h2 className="text-center">Made By Zain Shah</h2>
          <h2 className="text-center flex items-center">
            Developer Experience at{" "}
            <a href="https://techsolllc.net" className="group flex" target="_blank">
              <div className="mx-3 ring-2 ring-sky-400/40 w-6 h-6 rounded-md flex justify-center items-center shadow-lg shadow-sky-700/40 group-hover:shadow-xl group-hover:shadow-sky-700">
                <Image
                  src={"/techsol.svg"}
                  alt="Techsol LLC"
                  width={15}
                  height={15}
                />
              </div>
              Techsol
            </a>{" "}
          </h2>
        </div>
      </div>
    </>
  );
}
