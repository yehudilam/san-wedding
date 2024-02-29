const SimpleRow = (program: { title: string; pic: string; state: string }) => {
  return (
    <article className="mb-8">
      <div className="flex justify-between">
        <div className="text-2xl font-bold grow-0">
          <h3>{program.title}</h3>
        </div>
        <div className="grow shrink flex-col px-3">
          <div className="h-1/2 w-full border-dotted border-b border-gray-600"></div>
          <div className="h-1/2 w-full"></div>
        </div>
        <div className="text-xl">{program.pic}</div>
      </div>
      <div className="flex justify-end text-gray-800">{program.state}</div>
    </article>
  );
};

export default SimpleRow;
