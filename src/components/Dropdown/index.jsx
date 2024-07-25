import { useState } from 'react'

function Dropdown(props) {
  const { text, name, equipments } = props
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className="dropdown_container">
      <div className="dorpdown_bar">
        <span className="dorpdown_span">{name}</span>
        {openDropdown ? (
          <button className="dorpdown_button" onClick={() => handleDropdown()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          <button className="dorpdown_button" onClick={() => handleDropdown()}>
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
          </button>
        )}
      </div>
      {openDropdown ? (
        <section className="dropdown_option_container">
          {equipments ? (
            equipments.map((equipment, index) => (
              <div key={index} className="dropdown_option_equipement">
                {equipment}
              </div>
            ))
          ) : (
            <p>{text}</p>
          )}
        </section>
      ) : null}
    </div>
  )
}

export default Dropdown
