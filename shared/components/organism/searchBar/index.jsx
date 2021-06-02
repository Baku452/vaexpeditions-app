import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './index.module.scss';
import { BsSearch } from 'react-icons/bs';
import Autosuggest from 'react-autosuggest';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const SearchBar = ({packagetypes, packagesAll}) => {
  //States for React Suggestions
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false);
  const router = useRouter();
  //Check name
  if(value) {
    !focus ? setFocus(true) : null;
  }
  let checkname = (name, str) => {
    var pattern = str.split("").map((x)=>{
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
}
  //Teaching Autosuggest to filter suggestions
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : packagesAll.filter(pack =>{

      var xSub=pack.title.toLowerCase().slice(0, inputLength)
      return pack.title.toLowerCase().includes(inputValue) || checkname(xSub,inputValue)
    }
    );
    // return inputLength === 0 ? [] : packagesAll.filter(pack =>
    //   pack.title.toLowerCase().slice(0, inputLength) === inputValue
    // );
  };


  //Teach Autosuggest how to calculate the input value
  const getSuggestionValue = suggestion => suggestion.title;

  //rendering suggestions
  const renderSuggestion = (suggestion) => (
      <Link href={`/${suggestion.slug}`}>
        <div className="d-flex justify-content-between">
          <p className={`${styles.title}`}>
            {/* {
              packagetypes.map(
                item => (
                  item.id == suggestion.package_type ? 
                  <img className={styles.svg} src={PUBLIC_API+item.svg}>
                  </img> 
                  : null
                )
              )
            } */}
            {suggestion.title}
          </p>
          <p>
            {FormatDays(suggestion.days)}
          </p>
        </div>
      </Link>
  );

//Function to handle onChange Autosuggest
  const handleChangeSuggest = (e, {newValue}) =>{
    setValue(newValue);
  };
//Update suggest
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

//Function on suggestion selected
function onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })
{
  router.push({
    pathname: `/${suggestion.slug}`
  });
}

const FormatDays = value => {
  switch(value){
    case 0:
      return "Half-Day";
    case 1:
      return "Full Day";
    default:
      return `${value} days`;
  }
}

//Function to clear suggestion
const onSuggestionsClearRequested = () => {
  setSuggestions([]);
};

//Render Input Search Bar
const renderInputComponent = inputProps => (
  <div className={`${styles.iconSearch}`}>
    <BsSearch></BsSearch>
    <input {...inputProps} />
  </div>
);


//Input props
const inputProps = {
  placeholder: focus ? "" : "Quick Search",
  value,
  onChange: handleChangeSuggest
};

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
          pathname: '/search',
          query: { dest: input },
        });
  };
    return (  
        <Form
            // noValidate
            // validated={validated}
            className="position-relative"
            onSubmit={handleSubmit}
            onFocus={()=>setFocus(true)}
            onBlur={()=>setFocus(false)}
            >
            <label className={`${focus ? styles.labelFocus : styles.label}`}>Quick Search</label>
            <Autosuggest
            highlightFirstSuggestion={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={styles}
            onSuggestionSelected={onSuggestionSelected}
            renderInputComponent={renderInputComponent}
            />
        </Form>
    );
}
 
export {SearchBar};