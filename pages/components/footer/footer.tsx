import { dbCustomers } from "@/common/firebase.config";
import { addDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { Facebook, Twitter, Youtube } from "react-feather";

type Props = {};

const Footer = (props: Props) => {
  const [infoValue, setInfoValue] = useState<string>("");

  const handleSubscribe = () => {
    if (infoValue) {
      const docData = {
        customerInfo: infoValue,
        registerDate: moment(new Date()).format(),
      };
      addDoc(dbCustomers, { ...docData }).then(() => alert('Hân hạnh được phục vụ quý khách!'));
    }
  };

  return (
    <footer id="footer" className="relative bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Đăng ký ngay để nhận giá tốt nhất!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Liên hệ với chuyên viên bán hàng, để lại số điện thoại/email,
              chúng tôi sẽ gọi lại ngay
            </h5>

            <div className="flex flex-wrap gap-3">
              <input
                placeholder="Số điện thoại hoặc địa chỉ mail của bạn"
                className="h-11 px-6 flex-1 flex rounded border border-blue-300"
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

            <div className="mt-6 lg:mb-0 mb-6 flex">
              <button
                className="bg-white flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Facebook />
              </button>
              <button
                className="bg-white flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Youtube />
              </button>
              <button
                className="bg-white flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Twitter />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg font-semibold mb-2">
                  Thông tin liên hệ
                </span>
                <ul className=" list-disc py-3 px-6">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      Địa chỉ: Số 1 Trịnh Văn Bô, phường Phương Canh, quận Nam
                      Từ Liêm, Hà Nội
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2"
                      href="tel:0988765053"
                    >
                      Số điện thoại: 0988 765 053
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Email: mkt@mydinhford.com.vn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
