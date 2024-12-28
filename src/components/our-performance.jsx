export default function OurPerformance() {
  return (
    <section className="bg-gray-100 my-4">
      <div className="w-5/6 mx-auto py-12">
        <h4 className="font-bold text-2xl text-deep text-center py-2">
          Our results in numbers
        </h4>
        <div className="gap-4 grid grid-cols md:grid-cols-4 lg:grid-cols-4 py-2">
          <div>
            <h1 className="font-bold text-2xl text-center text-deep">99%</h1>
            <p className=" text-center">Customer satisfaction</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-center text-deep">15K</h1>
            <p className=" text-center">Online Patients</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-center text-deep">12K</h1>
            <p className=" text-center">Patients Recovered</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-center text-deep">240%</h1>
            <p className=" text-center">Company growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
