import { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextInput, Card } from "flowbite-react";
import { Link } from "react-router-dom";
const SuccessStories = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      const res = await axios.get(import.meta.env.VITE_BASE_URL + "story");
      setResult(res.data);
      console.log(res);
    };
    fetchAlumni();
  }, []);

  const handleSearch = async () => {
    // get all alumni and search for the search value return result
    const alumni = await axios.get(import.meta.env.VITE_BASE_URL + "alumni/");
    console.log(alumni);

    const result = alumni.data.filter((value) =>
      value?.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(result);
    setResult(result);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <UniversityIcon className="w-6 h-6" />
            <span>University</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Academics
            </Link>
            <Link href="#" className="hover:underline">
              Admissions
            </Link>
            <Link href="#" className="hover:underline font-medium">
              Alumni
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <TextInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for Stories"
              className="w-full px-12 py-3 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <Button className="bg-primary mt-2 mb-2" onClick={handleSearch}>
            Search
          </Button>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.map((alumni) => (
              <Card key={alumni.id}>
                <img src={alumni.imgURL}></img>
                <div>
                  <h1 className="text-3xl font-bold">{alumni.title}</h1>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">
            &copy; 2024 University. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline text-sm">
              Privacy
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Terms
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UniversityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="1" />
      <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M6 17v.01" />
      <path d="M6 13v.01" />
      <path d="M18 17v.01" />
      <path d="M18 13v.01" />
      <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    </svg>
  );
}
