import {StatusOptions} from "../constants/StatusOptions.ts";

interface SelectStatusProps {
  handleStatusChange: (status: string) => void;
  status: string;
  show: boolean;
  style: string;
}

const SelectOptions = ({
  handleStatusChange,
  status,
  show,
  style,
}: SelectStatusProps) => (
  <>
    {show && (
      <div className={style}>
        <div className="m-0 p-0 flex flex-col divide-y">
          {StatusOptions.map((currentStatus) => {
            return (
              <button
                key={currentStatus.id}
                className={`m-0 p-1 text-left w-full bg-white last:rounded-b-md first:rounded-t-md hover:bg-gray-100 ${currentStatus.title == status ? "font-semibold" : ""}`}
                onMouseDown={() => {
                  handleStatusChange(currentStatus.title);
                }}
              >
                {currentStatus.title}
              </button>
            );
          })}
        </div>
      </div>
    )}
  </>
);

export default SelectOptions;
