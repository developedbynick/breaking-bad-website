import React, { useEffect, useRef, useState } from "react";

function Form(props) {
  const headerRef = useRef(null);
  const [isHeaderStillVisible, setIsHeaderStillVisible] = useState(true);
  const onInputChange = (e) => {
    props.setValue(e.target.value);
    props.filterCharacters(e.target.value.trim().toLowerCase());
  };
  useEffect(() => {
    const observerCallBack = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsHeaderStillVisible(true);
        props.setIsTopOfPage(true);
      } else {
        setIsHeaderStillVisible(false);
        props.setIsTopOfPage(false);
      }
    };
    const observer = new IntersectionObserver(observerCallBack);
    observer.observe(headerRef.current);
  }, []);
  return (
    <header ref={headerRef}>
      <form className={isHeaderStillVisible ? "" : "fixed"}>
        {!isHeaderStillVisible && <h2>Breaking Bad Cast</h2>}
        <input
          type="text"
          onChange={onInputChange}
          value={props.value}
          placeholder="Filter by characters by name"
        />
      </form>
    </header>
  );
}

export default Form;
