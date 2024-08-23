import { useState } from "react";

import { MajAutocompleteProps } from "./MajAutocomplete.type";

import "./MajAutocomplete.scss";

const MajAutocomplete: React.FC<MajAutocompleteProps> = (
  props: MajAutocompleteProps,
) => {
  const [options, setOptions] = useState<string[]>(props.options);

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
      <div>
        <input type="text" id="myInput" onChange={findOptions} />
        <div id="myDiv">{autocompleteOptions}</div>
      </div>
    </>
  );
};

export default MajAutocomplete;
