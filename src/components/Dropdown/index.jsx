import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Dropdown(props) {
  const { text, name, equipments } = props

  const [openDropdown, setOpenDropdown] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const svgChevron = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
        fill="white"
      />
    </svg>
  )

  return (
    <div className="dropdown_container">
      <div className="dropdown_bar">
        <span className="dropdown_span">{name}</span>
        <button
          className={`dropdown_button ${openDropdown ? 'open' : 'close'}`}
          onClick={handleDropdown}
        >
          {svgChevron()}
        </button>
      </div>
      <section
        className={`dropdown_option_container ${openDropdown ? 'open' : 'close'}`}
      >
        {equipments ? (
          equipments.map((equipment, index) => (
            <div key={index} className="dropdown_option_equipment">
              {equipment}
            </div>
          ))
        ) : (
          <p>{text}</p>
        )}
      </section>
    </div>
  )
}

export default Dropdown
