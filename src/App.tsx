import "./styles.css";
import Select from "./components/select/select";
import { useState } from "react";
import { InitialState } from "./types/initial-state";
import { TOWERS, MEETING_ROOMS, FLOORS } from "./const";

const initialState: InitialState = {
  tower: "",
  floor: "",
  meetingRoom: "",
  dateAndTime: "",
  comment: ""
};

export default function App(): JSX.Element {
  const [formData, setFormData] = useState(initialState);

  const fieldChangeHandle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const submitHandle = (event: React.MouseEvent<HTMLButtonElement>): void => {
    let key: keyof typeof initialState;
    for (key in formData) {
      if (formData[key] === "" && key !== "comment") {
        return;
      }
    }
    event.preventDefault();
    console.log(formData);
  };
  const resetHandle = (): void => {
    setFormData(initialState);
  };

  return (
    <>
      <h1>Забронируйте переговорку</h1>
      <form action="#">
        <div className="input_elements_wrap">
          <div className="input_elements first_row">
            <Select
              name={"tower"}
              textContent={"Башня"}
              options={TOWERS}
              onChangeHandle={fieldChangeHandle}
            />
            <Select
              name={"floor"}
              textContent={"Этаж"}
              options={FLOORS}
              onChangeHandle={fieldChangeHandle}
            />
          </div>

          <div className="input_elements second_row">
            <Select
              name={"meetingRoom"}
              textContent={"Переговорка"}
              options={MEETING_ROOMS}
              onChangeHandle={fieldChangeHandle}
            />
            <div className="input_element">
              <label htmlFor="date">Дата и время</label>
              <input
                type="datetime-local"
                id="date"
                name="dateAndTime"
                onChange={fieldChangeHandle}
                required
              />
            </div>
          </div>

          <div className="textarea_element third_row">
            <label htmlFor="comment">Комментарий</label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Здесь можете оставить свой комментарий"
              onChange={fieldChangeHandle}
            ></textarea>
          </div>
        </div>

        <div className="button_elements">
          <button type="submit" onClick={submitHandle}>
            Отправить
          </button>
          <button type="reset" onClick={resetHandle}>
            Очистить
          </button>
        </div>
      </form>
    </>
  );
}
