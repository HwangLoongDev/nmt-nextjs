import React from "react";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <div className="flex flex-col gap-7 mt-10">
      <div className="line-section"></div>
      <span className="font-medium text-4xl w-full p-4 text-center block">
        Tin tức - sự kiện
      </span>

      <div className="flex flex-wrap w-full justify-stretch items-stretch">
        <div className="lg:w-1/3 w-full p-3">
          <div className="bg-white w-full h-full shadow-md border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white">
                  Anh Nguyễn Minh Tuấn
                </h5>
              </a>
              <div className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Thủ tục mua xe nhanh chóng, đại lý làm việc theo quy trình rõ
                ràng, tư vấn nhiệt tình.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full p-3">
          <div className="bg-white w-full h-full shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white">
                  Anh Nguyễn Minh Tuấn
                </h5>
              </a>
              <div className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Dịch vụ nhanh chóng, tư vấn tận tình, lúc làm dịch vụ xe, mình
                chờ ở phòng chờ cho khách có máy massage nên khá thoải mái, có
                nước và đồ ăn nhẹ cho khách
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full p-3">
          <div className="bg-white w-full h-full shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2 dark:text-white">
                  Anh Nguyễn Minh Tuấn
                </h5>
              </a>
              <div className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Quy trình rõ ràng, làm việc nhanh chóng, phục vụ trước và sau
                giao xe tốt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
