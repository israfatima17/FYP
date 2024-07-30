// src/pages/CampusLife.jsx
const CampusLife = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow-sm">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Campus Life</h1>
          </div>
        </header>
        <main className="flex-1 py-12 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl">
            {/* Add your content about campus life here */}
            <p>Welcome to the Campus Life page. Here you'll find information about campus activities and events.</p>
          </div>
        </main>
        <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">
              &copy; 2024 University. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <a href="#" className="hover:underline text-sm">Privacy</a>
              <a href="#" className="hover:underline text-sm">Terms</a>
              <a href="#" className="hover:underline text-sm">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    );
  };
  
  export default CampusLife;
  