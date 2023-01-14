import React from "react";

const User = () => {
  return (
    <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
      <div className="h-14 w-14">
        <img
          className="rounded-full"
          src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/253672659_1074265496713688_942943787334063895_n.jpg?stp=c345.223.1208.1208a_dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_ohc=Wxj1w-DlPxAAX9gHxQ2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac157-1.fna&oh=00_AfDXQHD_v8HxiNuqpAMZppDgq_CTRfuhELjhXPe5U-c85g&oe=63C7A3EC"
          alt=""
        />
      </div>
      <div className="flex-1 px-5">
        <h3>Hobayer Golondaz</h3>
        <p className="text-sm">You: koiii?</p>
      </div>
    </div>
  );
};

export default User;
