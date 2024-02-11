const Language = () => {
  return (
    <div className="dropdown">
      <button
        className="nav-link dropdown-toggle"
        id="language"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        EN
      </button>
      <ul className="dropdown-menu" aria-labelledby="language">
        <li className="dropdown-item">AR</li>
      </ul>
    </div>
  );
};

export default Language;
