import { PicSection, Pic } from "@/utils/parseYaml";

const MobilePicList = ({ picSection }: { picSection: PicSection }) => {
  const { left, right } = picSection;

  return (
    <div className="sm:hidden m-auto">
      {[...left, ...right].map((pic) => (
        <div key={pic.title} className="flex justify-start gap-2">
          <div className="w-24 shrink-0">{pic.title}:</div>
          <div className="">
            {pic.name.map((name) => (
              <>
                {name}
                <br />
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const DesktopPicListSingle = ({
  pics,
  isWide = false,
}: {
  pics: Pic[];
  isWide?: boolean;
}) => {
  return (
    <div className="m-auto hidden sm:block">
      {pics.map((pic) => {
        return (
          <div key={pic.title} className="w-full flex justify-start gap-2">
            <div className={`${!isWide && "sm:w-10"} w-24 shrink-0`}>
              {pic.title}:
            </div>
            <div className="">
              {pic.name.map((name) => (
                <>
                  {name}
                  <br />
                </>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DesktopPicList = ({ picSection }: { picSection: PicSection }) => {
  const { left, right } = picSection;

  return (
    <>
      <DesktopPicListSingle pics={left} />
      <DesktopPicListSingle pics={right} isWide />
    </>
  );
};

const Pic = ({ picSection }: { picSection: PicSection }) => {
  return (
    <section className="w-full mb-16">
      <div className="text-3xl font-bold w-full text-center mb-4 underline underline-offset-4">
        <h2>主禮團</h2>
      </div>
      <div className="flex flex-col sm:flex-wrap w-full sm:h-28 justify-center">
        <MobilePicList picSection={picSection} />
        <DesktopPicList picSection={picSection} />
      </div>
    </section>
  );
};

export default Pic;
