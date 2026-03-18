import { useEffect, useState, useRef } from "react";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

export function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      icon: <Users className="w-12 h-12" />,
      value: 50000,
      label: "Users Empowered",
      suffix: "+"
    },
    {
      icon: <Award className="w-12 h-12" />,
      value: 25,
      label: "Awards Won",
      suffix: "+"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      value: 40,
      label: "Countries Reached",
      suffix: "+"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      value: 98,
      label: "Client Satisfaction",
      suffix: "%"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value);
            return newCounts;
          });
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4 text-[#1A4F8D]">
            {stat.icon}
          </div>
          <div className="text-4xl text-gray-900 mb-2">
            {counts[index].toLocaleString()}{stat.suffix}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
