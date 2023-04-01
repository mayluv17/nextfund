import Image from "next/image";
import Img from "../public/1.jpeg";

function PetsPage() {
  return (
    <div>
      PetsPage
      {/* <Image src={Img} placeholder="blur" alt="pet" width={280} height={420} /> */}
      //check blur data URL for dynamic redering of blur placeholder
      {[1, 2, 3, 4, 5].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpeg`} alt="pet" width={280} height={420} />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
