const PhotoOrder = ({ photoOrder }: { photoOrder: string[] }) => {
  return (
    <section className="w-full mb-16">
      <div className="text-3xl font-bold w-full text-center mb-4 underline underline-offset-4">
        <h2>拍照程序</h2>
      </div>
      <div className="w-full flex justify-center pl-12">
        <ol className="list-decimal text-xl">
          {photoOrder.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PhotoOrder;
