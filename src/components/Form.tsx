import { LegacyRef, FormEvent } from "react";
//import Input from "./Input";
import "./Form.css";

interface props {
  onSubmit?: (ev: FormEvent<HTMLFormElement>) => void;
  areaRef?: LegacyRef<HTMLTextAreaElement> | undefined;
}

function Form({ onSubmit, areaRef }: props) {
  return (
    <>
      <div className="form-area">
        <form className="form-main" onSubmit={onSubmit}>
          <p>New note</p>
          <div className="form-main-item">
            <textarea id="form-main-textarea" ref={areaRef} cols={30} rows={10}></textarea>
            <input
              type="submit"
              className="form-input input-submit"
              value={""}
            />
            {/* <Input classic="input-time" type={"text"} ref={inputNameRef} /> */}
          </div>
          
        </form>
      </div>
    </>
  );
}

export default Form;
