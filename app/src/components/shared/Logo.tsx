import MyImage from "@/assets/images/dp1.png";
const Logo = () => {
  return (
    <div className="">
      <img
        src={
          MyImage
          // "https://pics.craiyon.com/2024-09-10/AjZTcBIkTKmxYYo1v707RQ.webp"
        }
        alt="avatar"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default Logo;
