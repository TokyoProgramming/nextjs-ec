import React from "react";
import Layout from "../components/Layout";
import CheckoutStep from "../components/CheckoutStep";
import ShoppingList from "../components/ShoppingList";
import content from "../data/sweetsItems.json";
import Link from "next/link";

export default function cart({ data }) {
  return (
    <Layout hero={false} footer={false}>
      <CheckoutStep step1 />
      <div className="mt-5">
        <ShoppingList />
      </div>

      <div className="flex justify-between items-center w-full mt-10">
        <div className="ml-3 flex items-center">
          <div className="p-5">
            <button
              className="p-5  hover:bg-gray-50 rounded-md 
            ring-offset-4 ring-2 hover:ring-offset-2 cursor-pointer "
            >
              <Link href="/item">
                <p className="text-xl font-medium ">買い物を続ける</p>
              </Link>
            </button>
          </div>
        </div>
        <div className="mr-3 flex items-center p-5">
          <div className="mr-5">
            <button
              className="p-5 hover:bg-gray-50 
            rounded-md ring-2 ring-red-500 ring-offset-4 hover:ring-offset-2 "
            >
              <p className="text-xl font-medium  ">変更</p>
            </button>
          </div>
          <div className="ml-5">
            <button
              className="p-5  hover:bg-gray-50 
            rounded-md ring-2 ring-red-500 ring-offset-4 hover:ring-offset-2 "
            >
              <p className="text-xl font-medium  ">カートを空にする</p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await content;

  return {
    props: { data },
  };
}
