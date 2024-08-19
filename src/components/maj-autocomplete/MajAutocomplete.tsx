import { useState } from "react";

import { MajAutocompleteProps } from "./MajAutocomplete.type";

import "./MajAutocomplete.scss";

const MajAutocomplete: React.FC<MajAutocompleteProps> = (
  props: MajAutocompleteProps,
) => {
  const [options, setOptions] = useState(props.options);

  const findOptions = (event: any) => {
    setOptions(
      props.options.filter((option) => option.startsWith(event.target.value)),
    );
  };

  const autocompleteOptions = options.map((option: string, index: number) => (
    <div key={index}>{option}</div>
  ));

  return (
    <>
      <div className="maj-autocomplete">
        <input
          className="maj-autocomplete-input"
          type="text"
          onChange={findOptions}
        />
        <div className="maj-autocomplete-options">{autocompleteOptions}</div>
      </div>
    </>
  );
};

export default MajAutocomplete;
