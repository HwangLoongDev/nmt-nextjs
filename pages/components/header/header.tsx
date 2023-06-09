import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { PhoneCall } from "react-feather";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="banner">
        <div className="w-full lg:w-[1220px] xl:w-[1220px] px-6 flex justify-end items-center gap-3">
          <PhoneCall size={20} />
          <span className="font-medium">Liên hệ:</span>
          <a className="font-medium text-white" href="tel:0988765053">
            0988 765 053
          </a>
        </div>
      </div>
      <div className="nav-wrapper">
        <div className="w-full lg:w-[1220px] xl:w-[1220px] px-6 flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} height={64} alt="logo" />
          </Link>
          <div className="hidden md:flex gap-6">
            <div className="font-medium leading-10">
              <Link href="/">Trang chủ</Link>
            </div>
            <div className="group font-medium leading-10 cursor-pointer">
              Sản phẩm
              <div className="hidden group-hover:block absolute top-12 py-3 border rounded shadow-md bg-white">
                <ul>
                  <li className="hover:bg-slate-200 px-5">
                    <Link href="/san-pham">Tất cả sản phẩm</Link>
                  </li>
                  <li className="hover:bg-slate-200 px-5">Nhóm sản phẩm</li>
                  <li className="hover:bg-slate-200 px-5">Sản phẩm bán chạy</li>
                </ul>
              </div>
            </div>
            <div className="font-medium leading-10">
              <Link href="tin-tuc">Tin tức - Sự kiện</Link>
            </div>
            <div className="font-medium leading-10">Bảo hành</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
