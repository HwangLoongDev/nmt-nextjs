import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { PhoneCall } from "react-feather";
import Link from "next/link";
import DialogComponent from "../dialog/dialog";
import moment from "moment";
import { addDoc } from "firebase/firestore";
import { dbCustomers } from "@/common/firebase.config";

type Props = {};

const Header = (props: Props) => {
  const [openSupport, setOpenSupport] = useState<boolean>(false);
  const [infoValue, setInfoValue] = useState<string>("");

  const openSupportDialog = () => {
    setOpenSupport(true);
  };

  const handleSubscribe = () => {
    if (infoValue) {
      const docData = {
        customerInfo: infoValue,
        registerDate: moment(new Date()).format(),
      };
      addDoc(dbCustomers, { ...docData }).then(() =>
        alert("Hân hạnh được phục vụ quý khách!")
      );
    }
  };

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
                  <li className="hover:bg-slate-200 px-5">
                    <Link href="/#nhom-san-pham">Nhóm sản phẩm</Link>
                  </li>
                  <li className="hover:bg-slate-200 px-5">
                    <Link href="/#san-pham-ban-chay">Sản phẩm bán chạy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-medium leading-10">
              <Link href="/#tin-tuc">Tin tức - Sự kiện</Link>
            </div>
            <div
              className="font-medium leading-10 cursor-pointer"
              onClick={openSupportDialog}
            >
              Tư vấn
            </div>
          </div>
        </div>
      </div>

      <DialogComponent
        open={openSupport}
        closeOnClickOutside
        onClose={() => setOpenSupport(false)}
        width="500px"
        content={
          <>
            <div className="flex flex-col justify-center items-center gap-6">
              <span className="text-xl font-medium">
                Rất hân hạnh được phục vụ
              </span>
              <span className="font-medium">
                Để lại số điện thoại/email, chúng tôi sẽ gọi lại ngay
              </span>
              <input
                placeholder="Số điện thoại hoặc địa chỉ mail của bạn"
                className="h-11 max-w-[400px] w-full px-6 py-3 flex-1 flex rounded border border-blue-300"
                type="text"
                onChange={(e) => setInfoValue(e.target.value)}
              />
              <button
                onClick={handleSubscribe}
                className="h-11 w-[200px] bg-blue-500 rounded hover:bg-blue-600 text-white font-medium text-lg transition-colors duration-300"
              >
                Đăng ký
              </button>
            </div>
          </>
        }
      />
    </>
  );
};

export default Header;
