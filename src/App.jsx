import "./App.css";
import { menuOptions } from "./menuOptions";

function App() {
  return (
    <>
      <h1 className="main-title"> What do you want to have? </h1>
      <form>
        <Section name="apettizers" />
        <Section name="mains" />
        <Section name="desserts" />
        <button type="submit">Save my selection 👌</button>
      </form>
    </>
  );
}

function Section({ name }) {
  const options = menuOptions[name] || [];

  return (
    <section className={name}>
      <h2>{name}</h2>
      <ol>
        {options.map((option) => {
          return (
            <li className="custom-option" key={option.id}>
              <input type="radio" name={name} id={option.name} />
              <label htmlFor={option.name}>
                <img src={option.url} alt={option.name} width={175} height={175}/>
                <div className="name">{option.name}</div>
              </label>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default App;
