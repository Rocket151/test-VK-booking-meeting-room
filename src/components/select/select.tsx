type SelectProps = {
  name: string;
  textContent: string;
  options: string[];
  onChangeHandle: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function Select({
  name,
  textContent,
  options,
  onChangeHandle
}: SelectProps): JSX.Element {
  return (
    <div className="input_element">
      <label htmlFor={name}>{textContent}</label>
      <select id={name} name={name} onChange={onChangeHandle} required>
        {options.map((option, index) => {
          return (
            <option key={index} className={option ? "" : "hidden"}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
