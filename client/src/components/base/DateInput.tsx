// DateInput.tsx
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  startDate?: Date | null;
  endDate?: Date | null;
  selected?: Date | null;
  onChange: (date: Date | [Date, Date] | null) => void;
  isRange?: boolean;
};

const DateInput = ({
  startDate,
  endDate,
  selected,
  onChange,
  isRange,
}: Props) => (
  <DatePicker
    selectsRange={isRange}
    startDate={startDate}
    endDate={endDate}
    selected={!isRange ? selected : undefined}
    onChange={onChange}
    className="h-[40px] w-max rounded-md border px-2"
  />
);

export default DateInput;
