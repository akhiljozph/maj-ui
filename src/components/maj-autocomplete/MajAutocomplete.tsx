import { useState } from "react";

import { MajAutocompleteProps } from "./MajAutocomplete.type";

import "./MajAutocomplete.scss";

const MajAutocomplete: React.FC<MajAutocompleteProps> = (props: MajAutocompleteProps) => {
      const [options, setOptions] = useState<string[]>(props.options);
      const [value, setValue] = useState<string>();

      const findOptions = (event: any) => {
            const filteredOptions = props.options.filter((option) =>
                  option.startsWith(event.target.value),
            );
            setOptions(filteredOptions.length > 0 ? filteredOptions : [`${event.target.value}`]);
      };

      const setAutoCompleteValue = (event: any) => {
            console.log("Click event", event);
            setValue(event.target.value);
      };

      const autocompleteOptions = options.map((option: string, index: number) => (
            <div key={index} onClick={setAutoCompleteValue}>
                  {option}
            </div>
      ));

      return (
            <>
                  <div>
                        <input type="text" id="myInput" onChange={findOptions} value={value} />
                        <div id="myDiv">{autocompleteOptions}</div>
                  </div>
            </>
      );
};

export default MajAutocomplete;
