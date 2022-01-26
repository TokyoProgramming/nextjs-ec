import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartArrowDown, FaSearch, FaUser } from "react-icons/fa";
import { GoThreeBars, GoTriangleRight } from "react-icons/go";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchToggleLg, setSearchToggleLg] = useState(false);
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(0);

  const toggleNav = () => {
    if (searchToggle) {
      setSearchToggle((prevSearchToggle) => !prevSearchToggle);
    }
    setToggle((prevToggle) => !prevToggle);
  };
  const toggleSearch = () => {
    if (toggle) {
      setToggle((prevToggle) => !prevToggle);
    }
    console.log(searchToggle);
    setSearchToggle((prevSearchToggle) => !prevSearchToggle);
  };

  const toggleSearchLg = () => {
    setSearchToggleLg((prevSearchToggle) => !prevSearchToggle);
  };

  const searchSumit = (e) => {
    e.preventDefault();
    console.log(search);
    console.log("submit");
  };

  return (
    <header className="text-gray-800 shadow w-full">
      <div
        className="container mx-auto p-5 flex-col justify-center
    md:flex items-center"
      >
        <Link href="/">
          <a
            className="flex title-font font-medium items-center justify-center
        mb-4 md:mb-0"
          >
            <span className="ml-3 text-4xl tracking-wider leading-9">
              Sweets Shop
            </span>
          </a>
        </Link>

        <nav
          className="flex justify-center items-center text-base 
   lg:hidden mt-8"
        >
          {!toggle ? (
            <p
              className="mx-2 md:mx-5 cursor-pointer uppercase p-3 
            text-gray-700 hover:text-gray-600"
            >
              <GoThreeBars
                className="text-3xl text-gray-700"
                onClick={() => {
                  toggleNav();
                }}
              />
            </p>
          ) : (
            <p
              className="mx-2 md:mx-5 cursor-pointer uppercase bg-[#f1f1f1] 
            p-3 text-gray-700 hover:text-gray-600"
            >
              <GoThreeBars
                className="text-3xl text-gray-800"
                onClick={() => {
                  toggleNav();
                }}
              />
            </p>
          )}

          <p className="mx-2 md:mx-5 cursor-pointer uppercase  p-3">
            <FaSearch
              className="text-3xl text-gray-700 hover:text-gray-600 "
              onClick={() => {
                toggleSearch();
              }}
            />
          </p>
          <Link href="#">
            <a className="mx-2 md:mx-5 cursor-pointer uppercase hover:text-indigo-300 p-3">
              <FaUser className="text-3xl text-gray-700 hover:text-gray-600" />
            </a>
          </Link>

          <Link href="/blog">
            <a className="mx-2 md:mx-5 cursor-pointer uppercase hover:text-indigo-300 p-3">
              <FaCartArrowDown className="text-3xl text-gray-700 hover:text-gray-600" />
            </a>
          </Link>
        </nav>

        <nav
          className="hidden lg:flex justify-evenly w-full
       mt-8"
        >
          <div className="flex items-center">
            <Link href="#">
              <a className="md:mx-1 cursor-pointer uppercase hover:text-indigo-300 p-3">
                <FaUser className="text-3xl text-gray-700 hover:text-gray-600" />
              </a>
            </Link>
            <p
              className="text-xl font-bold text-gray-700 
            cursor-pointer hover:underline hover:underline-offset-4 hover:text-gray-600"
            >
              マイアカウント{" "}
            </p>
          </div>
          <div className="flex items-center ml-3">
            <Link href="#">
              <p
                className="text-gray-700 text-2xl font-bold 
              cursor-pointer hover:underline 
              hover:underline-offset-4
              hover:text-gray-600"
              >
                会員登録
              </p>
            </Link>
            <p className="text-2xl font-bold mx-3">or</p>
            <Link href="#">
              <p
                className="text-gray-700 text-2xl font-bold 
              cursor-pointer hover:underline 
              hover:underline-offset-4
              hover:text-gray-600"
              >
                ログイン
              </p>
            </Link>
          </div>
          <div className="flex items-center">
            {searchToggleLg && (
              <p className="mx-2 md:mx-5 cursor-pointer uppercase hover:text-indigo-300 p-3">
                <FaSearch
                  className="text-3xl text-gray-700"
                  onClick={() => toggleSearchLg()}
                />
              </p>
            )}
            {!searchToggleLg && (
              <div className="w-full mx-3 flex">
                <p
                  className="flex items-center mx-1 text-xl text-gray-600 cursor-pointer 
                hover:text-gray-500 "
                >
                  <GoTriangleRight
                    className="text-2xl"
                    onClick={() => toggleSearchLg()}
                  />
                </p>
                <form
                  className="flex flex-col"
                  onSubmit={(e) => searchSumit(e)}
                >
                  <input
                    className="shadow appearance-none border rounded w-full 
                  p-4 text-gray-700 
                  leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="商品を検索"
                  />
                </form>
              </div>
            )}
          </div>
          <button
            className="bg-[#4E5052] hover:bg-[#5d656e]  
          font-bold py-2 px-4 rounded-md inline-flex items-center"
          >
            <FaCartArrowDown className="text-3xl text-gray-100" />

            <span className="ml-3 text-xl text-gray-100">{items} アイテム</span>
          </button>
        </nav>

        <div className="flex justify-center items-center mt-8 ">
          <div className="mx-3 cursor-pointer">
            <Image src="/images/facebook.png" height={50} width={50} />
          </div>
          <div className="mx-3">
            <Image src="/images/instagram.png" height={50} width={50} />
          </div>
        </div>
        {toggle && (
          <div
            className="my-5 mx-auto flex flex-col lg:flex-row justify-center  
          items-center whitespace-nowrap "
          >
            <Link href="/item">
              <p className=" my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                ALL ITEM
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                ABOUT
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                MEDIA
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                REVIEW
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                SHOPPING GUIDE
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
                DELIVERY
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold mx-3 text-xl tracking-wider leading-9 cursor-pointer">
                CM
              </p>
            </Link>
            <Link href="#">
              <p className="my-3 font-bold text-xl tracking-wider leading-9 cursor-pointer">
                CONTACT
              </p>
            </Link>
            <div className="w-full border-t border-gray-300"></div>
          </div>
        )}

        <div
          className="hidden my-5 mx-auto lg:flex  lg:flex-row justify-center  
          items-center whitespace-nowrap "
        >
          <Link href="/item">
            <p className=" my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              ALL ITEM
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              ABOUT
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              MEDIA
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              REVIEW
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              SHOPPING GUIDE
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-5 text-xl tracking-wider leading-9 cursor-pointer">
              DELIVERY
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold mx-3 text-xl tracking-wider leading-9 cursor-pointer">
              CM
            </p>
          </Link>
          <Link href="#">
            <p className="my-3 font-bold text-xl tracking-wider leading-9 cursor-pointer">
              CONTACT
            </p>
          </Link>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        {searchToggle && (
          <div className=" mt-5 w-full">
            <form className="flex flex-col" onSubmit={(e) => searchSumit(e)}>
              <input
                className="shadow appearance-none border rounded w-full 
                p-4 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="商品を検索"
              />
              <button className="bg-blue-500 hover:bg-blue-400 p-3 rounded-md mt-5">
                <p className="text-white  text-xl  tracking-wider">検索</p>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
