import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HallType = "grand" | "boutique";
type DateStatus = "available" | "booked" | "closed";

const getDateStatus = (hall: HallType, date: Date): DateStatus => {
  const day = date.getDay();
  if (day === 1 || day === 2) return "closed";
  const dateNum = date.getDate();
  const month = date.getMonth();
  if (hall === "grand") {
    if ([5, 12, 19, 26].includes(dateNum) && month % 2 === 0) return "booked";
    if ([7, 14, 21].includes(dateNum)) return "booked";
  } else {
    if ([3, 10, 17, 24].includes(dateNum)) return "booked";
    if ([8, 15, 22].includes(dateNum) && month % 2 === 1) return "booked";
  }
  return "available";
};

const MONTHS_PL = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
];
const DAYS_PL = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];

interface AvailabilitySectionProps {
  onDateSelect?: (date: Date, hall: HallType) => void;
}

const AvailabilitySection = ({ onDateSelect }: AvailabilitySectionProps) => {
  const [hall, setHall] = useState<HallType>("grand");
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7;
    const days: (Date | null)[] = Array(startDay).fill(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const days = getDaysInMonth(currentMonth);

  const handleDateClick = useCallback(
    (date: Date) => {
      const status = getDateStatus(hall, date);
      if (status === "available" && onDateSelect) {
        onDateSelect(date, hall);
      }
    },
    [hall, onDateSelect]
  );

  const statusColors: Record<DateStatus, string> = {
    available: "bg-gold/20 text-gold hover:bg-gold/40 cursor-pointer border border-gold/30",
    booked: "bg-secondary text-muted-foreground cursor-not-allowed",
    closed: "text-muted-foreground/30 cursor-not-allowed",
  };

  return (
    <div>
      {/* Hall toggle */}
      <div className="flex mb-6">
        <div className="flex border border-border rounded-sm overflow-hidden">
          {(["grand", "boutique"] as HallType[]).map((h) => (
            <button
              key={h}
              onClick={() => setHall(h)}
              className={`px-6 py-3 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                hall === h
                  ? "bg-gold text-primary-foreground"
                  : "text-muted-foreground hover:text-cream"
              }`}
            >
              {h === "grand" ? "Sala Duża" : "Sala Mała"}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-card p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="text-muted-foreground hover:text-gold transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h3 className="font-display text-xl text-cream">
            {MONTHS_PL[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="text-muted-foreground hover:text-gold transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1.5 mb-1.5">
          {DAYS_PL.map((d) => (
            <div key={d} className="text-center font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground py-2">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {days.map((date, i) => {
            if (!date) return <div key={`empty-${i}`} />;
            const status = getDateStatus(hall, date);
            return (
              <button
                key={date.toISOString()}
                onClick={() => handleDateClick(date)}
                className={`aspect-square flex items-center justify-center font-body text-sm rounded-sm transition-all duration-200 ${statusColors[status]}`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-5 mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-gold/20 border border-gold/30" />
            <span className="font-body text-xs text-muted-foreground">Dostępna</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-secondary" />
            <span className="font-body text-xs text-muted-foreground">Zarezerwowana</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-muted/30" />
            <span className="font-body text-xs text-muted-foreground">Zamknięte</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySection;
