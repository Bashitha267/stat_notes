import { GraduationCap, BookOpen, BarChart, Users } from "lucide-react";

export default function Home() {
  const years = [
    { name: "1st Year", icon: Users, url: "https://drive.google.com/drive/folders/1dNS3o8G-xKt-uoMgeJ8xQ_BvhI4Q_xGI?usp=drive_link" },
    { name: "2nd Year", icon: BookOpen, url: "https://drive.google.com/drive/folders/1le9ruDuHZjH8EY3GXW3MRzu4oQBDgLza?usp=sharing" },
    { name: "3rd Year", icon: BarChart, url: "https://drive.google.com/drive/folders/1VAeEkGtQ946344uHuRhGAokj68-J1GLS?usp=drive_link" },
    { name: "4th Year", icon: GraduationCap, url: "#" },
  ];

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Stat Kuppi</h1>
        <p>Student guides for Statistics notes, ICA, and Pastpapers.Created by 48th Batch UOJ Science</p>
        <div className="quote-container">
          <p className="quote">"If you can't explain it simply, you don't understand it well enough."</p>
          <span className="quote-author">— Albert Einstein</span>
        </div>
      </section>

      <div className="dashboard-grid">
        {years.map((year, index) => (
          <a key={index} href={year.url} target="_blank" rel="noopener noreferrer" className="icon-card">
            <div className="icon-wrapper">
              <year.icon size={40} strokeWidth={1.5} />
            </div>
            <h2 className="card-title">{year.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
