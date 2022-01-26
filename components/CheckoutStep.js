import React from "react";

export default function CheckoutStep({ step1, step2, step3, step4 }) {
  return (
    <nav className="flex justify-evenly  p-2">
      <li className="list-none p-3 flex flex-col">
        {step1 ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center bg-blue-300"
            >
              <p className="">1</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>カート</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
          flex justify-center items-center"
            >
              <p className="">1</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>カート</p>
            </div>
          </div>
        )}
      </li>

      <li className="list-none p-3 flex flex-col">
        {step2 ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center bg-blue-300"
            >
              <p className="">2</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>お客様情報の入力</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
          flex justify-center items-center"
            >
              <p className="">2</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>お客様情報の入力</p>
            </div>
          </div>
        )}
      </li>

      <li className="list-none p-3 flex flex-col">
        {step3 ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center bg-blue-300"
            >
              <p className="">3</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>お支払い方法の入力</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center"
            >
              <p className="">3</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>お支払い方法の入力</p>
            </div>
          </div>
        )}
      </li>

      <li className="list-none p-3 flex flex-col">
        {step4 ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center bg-blue-300"
            >
              <p className="">4</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>確認</p>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div
              className="rounded-full border h-10 w-10 
            flex justify-center items-center"
            >
              <p className="">4</p>
            </div>

            <div className="mt-5 flex justify-center items-center ">
              <p>確認</p>
            </div>
          </div>
        )}
      </li>
    </nav>
  );
}
