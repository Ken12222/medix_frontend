import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function SearchDoctor() {
  return (
    <>
      <section className="w-5/6 mx-auto bg-gray-100 rounded-lg mb-4">
        <div className="p-8">
          <h4 className="font-bold pb-4">Find A Doctor</h4>
          <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Input
              className=" border-deep outline-0"
              placeholder="search doctor..."
            />
            <Input
              className=" border-deep outline-0"
              placeholder="specialty..."
            />
            <Button className="">Search</Button>
          </div>
        </div>
      </section>
    </>
  );
}
