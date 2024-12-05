import SectionHeading from "@/components/shared/SectionHeading";
import { leoImages } from "@/Data/pet-img-links";

const MyPetPage = () => {
  return (
    <div>
      <SectionHeading>my pet leo</SectionHeading>
      <div className="grid grid-cols-3 gap-4">
        {leoImages.map((image, idx) => (
          <div>
            <img
              key={idx}
              src={image.imgUrl}
              alt=""
              className="rounded-md shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPetPage;
