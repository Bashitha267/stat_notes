import { GraduationCap, BookOpen, FlaskConical, Award } from "lucide-react";

export default function Home() {
  const years = [
    { name: "1st Year", icon: GraduationCap, url: "#" },
    { name: "2nd Year", icon: BookOpen, url: "#" },
    { name: "3rd Year", icon: FlaskConical, url: "#" },
    { name: "4th Year", icon: Award, url: "#" },
  ];

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Stat Kuppi</h1>
        <p>Student guides for Statistics notes, ICAs, and Passpapers.Created by 48th Batch UOJ Science</p>
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
