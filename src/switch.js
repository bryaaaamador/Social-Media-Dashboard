import React, { useRef, useEffect, useState } from "react";
import './switch.css';

function Switch() {
  const [checked, setChecked] = useState(false)

  const ref = useRef(null);

  function handleChange(event) {
    setChecked(ref.current.checked)
    if (ref.current.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
    } else {
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
    }
  }

  function changeMedia(mq){
      setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setChecked(mq.matches)
  }, [])

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">

      </label>
    </div>
  )
}

export default Switch;