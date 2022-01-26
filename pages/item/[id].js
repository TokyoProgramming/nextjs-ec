import React from "react";
import { useRouter } from "next/router";
import content from "../../data/sweetsItems.json";
import Layout from "../../components/Layout";
import Image from "next/image";
import { FaCartArrowDown, FaTruckMoving } from "react-icons/fa";
import Link from "next/link";

export default function ItemDetail({ item }) {
  const router = useRouter();

  return (
    <Layout hero={false}>
      <div
        className="relative grid-rows-1 h-[30rem] 
        lg:h-[40rem] md:w-[35rem] md:[35rem]
      w-full lg:w-[45rem] mx-auto
      flex-cols cursor-pointer "
      >
        <Image
          src={item.src}
          layout="fill"
          objectFit="cover"
          alt="logo"
          className="opacity-90 rounded-md"
          key={item.id}
        />
      </div>
      <div className="flex flex-col mx-2">
        <div className="mt-5">
          <h1
            className="tracking-wide font-medium text-2xl 
            text-gray-900 cursor-pointer tracking-wider leading-9"
          >
            {item.desription}
          </h1>
        </div>
        <div className="flex justify-start items-center mt-1">
          <p className="mt-10 text-gray-700 p-1 text-2xl tracking-wider">
            {item.price}
          </p>
        </div>
        <div className="flex flex-col mt-5">
          <div className="p-3">
            <p>購入数</p>
          </div>
          <div className="p-3">
            <select className="w-20 outline-none outline-gray-300">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center mt-5">
            <Link href="/cart">
              <button
                className="bg-[#57481B] w-full p-5
              hover:bg-[#796D49] flex 
              justify-center items-center rounded-md"
              >
                <p>
                  <FaCartArrowDown className="text-3xl text-gray-100" />
                </p>

                <p
                  className="text-2xl 
                text-gray-200 font-bold ml-3 tracking-wider leading-9"
                >
                  カートに入れる
                </p>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-[#ECBB23] w-full p-5 flex 
            justify-center items-center rounded-md"
            >
              <p className="">
                <FaTruckMoving className="text-3xl text-white" />
              </p>
              <p
                className="text-2xl 
              text-gray-100 font-bold 
              hover:text-gray-200 ml-3 tracking-wider leading-9"
              >
                翌日配達要件
              </p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  const data = await content;

  const itemArr = data.filter((x) => x.id == id);
  const item = itemArr[0];

  return {
    props: { item },
  };
}
