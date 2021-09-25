import classNames from "clsx";

import { ArrowSvg } from "../../base";
import { mouseDownPrevent } from "../../utils";
import { useDatePickerContext } from "./context";

const PickerHeader: React.FC = () => {
  const { prevDisabled, nextDisabled, calendarTitle, prevMonth, nextMonth } =
    useDatePickerContext();

  const leftArrowClassNames = classNames("dp__arrow", "left", {
    disabled: prevDisabled,
  });

  const rightArrowClassNames = classNames("dp__arrow", "right", {
    disabled: nextDisabled,
  });

  return (
    <header className="cldr__hdr">
      <ArrowSvg
        className={leftArrowClassNames}
        onClick={prevMonth}
        onMouseDown={mouseDownPrevent}
      />
      <div>{calendarTitle}</div>
      <ArrowSvg
        className={rightArrowClassNames}
        onClick={nextMonth}
        onMouseDown={mouseDownPrevent}
      />
    </header>
  );
};

export default PickerHeader;
