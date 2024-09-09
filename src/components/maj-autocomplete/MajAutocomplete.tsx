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
            setValue(event.target.innerHTML);
      };

      const autocompleteOptions = options.map((option: string, index: number) => (
            <span key={index} onClick={setAutoCompleteValue} className="maj-option-item">
                  {option}
            </span>
      ));

      return (
            <>
                  <div className="maj-autocomplete-wrapper">
                        <input
                              type="text"
                              value={value}
                              onChange={findOptions}
                              id="autocomplete-input"
                              list="autocomplete-options"
                        />
                        <datalist id="autocomplete-options" className="autocomplete-options">
                              {autocompleteOptions}
                        </datalist>
                  </div>
            </>
      );
};

export default MajAutocomplete;
