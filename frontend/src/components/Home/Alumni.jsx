import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  useEffect(() => {
    const fetchAlumni = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "alumni");
      setAlumni(res.data.slice(0, 5));
      console.log(res);
    };
    fetchAlumni();
  }, []);
  return (
    <section id="alumni" className="py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Alumni</h2>
          <Link
            to={"/alumniSearch"}
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Search Alumni
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {alumni.map((alumnus) => (
            <div key={alumnus.id} className="flex flex-col items-center gap-2">
              <Avatar img={alumnus.img} size={"lg"} rounded></Avatar>
              <div className="text-center text-sm">
                <div className="font-medium">{alumnus.name}</div>
                <div className="text-muted-foreground">
                  Designation : {alumnus.designation}
                </div>
                <div className="text-muted-foreground">
                  Batch : {alumnus.batch}, Department : {alumnus.department}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
