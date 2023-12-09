import React from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <section className="container mx-auto px-8 lg:px-8 relative pb-12 h-[100vh]">
      <div className="w-full h-full flex justify-center items-center flex-col gap-20">
        <div className="mt-16 w-full">
          <Link href="/">
            <IoReturnUpBackOutline className="h-16 w-16 text-gray-600 cursor-pointer z-30" />
          </Link>
        </div>
        <div className="border border-solid border-black">
          <p className="text-[22px] leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae a
            odio vero veritatis, eos sed, libero amet at magni optio nihil.
            Animi laborum repudiandae deleniti quod neque quia dicta. Ullam
            debitis obcaecati tempore eos veniam magnam sunt error, suscipit
            fugit adipisci dignissimos, dolore maxime aut earum architecto
            perferendis saepe, expedita qui similique assumenda? Ad possimus
            sint consectetur sequi a, animi accusantium suscipit. Exercitationem
            voluptate placeat dolore quos harum illo esse reprehenderit
            similique quae est, provident quam sunt rem laborum ullam molestiae
            voluptatum sequi corporis repellendus? Magni est distinctio quo.
            Deserunt, quos veritatis libero excepturi soluta tenetur dolorem
            veniam eveniet nulla aliquam ullam velit asperiores, magni quasi
            ducimus necessitatibus voluptatum ex odio culpa. Animi aliquam
            sapiente nostrum, exercitationem nisi perspiciatis dicta nemo autem
            placeat molestias temporibus voluptatem id nihil magni amet deleniti
            ex qui fugit, similique debitis? Libero adipisci sint iusto tempora
            est nihil amet soluta vitae eligendi deleniti possimus ipsa ipsum,
            aspernatur quam sapiente. Ex, exercitationem doloremque tenetur
            officia doloribus rerum quod! Non corrupti accusantium quas et,
            repellendus sit rerum minima cum dicta adipisci ipsa commodi
            repellat saepe temporibus sapiente? Quos ut sed delectus incidunt
            repellendus tempora reiciendis qui, autem nihil nemo voluptatibus
            eaque, deserunt, nam recusandae mollitia rem in.
          </p>
        </div>

        <div className="flex justify-between">
          <div>
            <button className="font-bold text-white">Prev</button>
          </div>
          <div className="font-bold text-white">Next</div>
        </div>
      </div>
    </section>
  );
};

export default page;
