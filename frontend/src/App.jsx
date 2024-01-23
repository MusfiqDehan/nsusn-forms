import ContactForm from "./components/ApplicationForm";
import ApplicationForm from "./components/ApplicationForm";

const App = () => {
  return (
    <>
      <ContactForm />
      <h1 className="bg-red-300 py-5 text-3xl underline">Hello world!</h1>
      <ApplicationForm />
    </>
  );
};

export default App;
